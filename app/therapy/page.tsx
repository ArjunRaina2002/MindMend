import Navigation from '../../components/Navigation';

export default function Therapy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">AI-Driven Therapy Sessions</h1>
        <p className="mb-4">Welcome to your personalized therapy space. Here you can schedule and attend AI-driven therapy sessions tailored to your needs.</p>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
          <p>You have no upcoming sessions scheduled. Would you like to book one?</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Schedule Session</button>
        </div>
      </main>
    </div>
  );
}