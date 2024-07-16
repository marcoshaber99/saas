import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS</h1>
        <p className="text-xl mb-8">
          Empowering your business with cutting-edge solutions
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      </main>
      <footer className="mt-8 text-gray-600">
        © 2023 Our SaaS Company. All rights reserved.
      </footer>
    </div>
  );
}
