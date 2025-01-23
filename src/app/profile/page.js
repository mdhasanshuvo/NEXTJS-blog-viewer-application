import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-700">Access Denied</h2>
          <p className="text-gray-600 mt-2">You must log in to view this page.</p>
          <Link
            href="/api/auth/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user?.family_name || "User"}!</h1>
        <p className="text-gray-600 mb-6">
          This is your profile page. Here you can manage your account and access personalized features.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{user?.email || "Not available"}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-600">{user?.given_name || "Not available"} {user?.family_name || ""}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <Link
            href="/api/auth/logout"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
