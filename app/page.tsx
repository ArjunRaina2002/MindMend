import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to MindMend</h1>
        <p className="text-xl text-center mb-8">Your AI-powered mental health companion</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/chat" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Chat with AI</h2>
            <p>Start a conversation with our AI therapist</p>
          </Link>
          <Link href="/therapy" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Therapy Sessions</h2>
            <p>Schedule and attend AI-driven therapy sessions</p>
          </Link>
          <Link href="/community" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Community</h2>
            <p>Connect with others and share experiences</p>
          </Link>
          <Link href="/profile" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
            <p>Manage your account and track your progress</p>
          </Link>
        </div>
      </main>
    </div>
  );
}