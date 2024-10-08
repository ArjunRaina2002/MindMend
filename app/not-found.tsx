import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to homepage
        </Link>
      </main>
    </div>
  );
}