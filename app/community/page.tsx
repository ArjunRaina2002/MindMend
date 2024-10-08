import Navigation from '../../components/Navigation';

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">MindMend Community</h1>
        <p className="mb-4">Connect with others, share experiences, and support each other on your mental health journey.</p>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Community Forums</h2>
          <ul className="list-disc list-inside">
            <li>Anxiety Support Group</li>
            <li>Depression Management</li>
            <li>Stress Relief Techniques</li>
            <li>Positive Thinking Circle</li>
          </ul>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Join a Group</button>
        </div>
      </main>
    </div>
  );
}