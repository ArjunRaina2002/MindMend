import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      console.error('Claude API key is not set');
      return NextResponse.json({ error: 'Claude API key is not set. Please check your environment variables.' }, { status: 500 });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        model: 'claude-2',
        messages: [{ role: 'user', content: message }],
        max_tokens_to_sample: 300,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Claude API error:', response.status, errorBody);
      return NextResponse.json({ error: `Claude API error: ${response.status} ${errorBody}` }, { status: response.status });
    }

    const data = await response.json();
    if (!data.content || !data.content[0] || !data.content[0].text) {
      console.error('Unexpected response structure from Claude API:', JSON.stringify(data));
      return NextResponse.json({ error: 'Unexpected response structure from Claude API' }, { status: 500 });
    }
    return NextResponse.json({ response: data.content[0].text });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json({ error: `An unexpected error occurred: ${error.message}` }, { status: 500 });
  }
}