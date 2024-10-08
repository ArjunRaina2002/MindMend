import Navigation from '../../components/Navigation';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Member Since:</strong> June 1, 2023</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Profile</button>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Progress Tracker</h2>
          <p>Your mental health journey visualization will be displayed here.</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Detailed Progress</button>
        </div>
      </main>
    </div>
  );
}