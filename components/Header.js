
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Header() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();


    return (
        <header className="bg-white shadow-md w-full ">
            <nav className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/" className="hover:text-blue-500">
                        Blog Viewer
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
                        Home
                    </Link>

                    <Link
                        href="/profile"
                        className="text-gray-600 hover:text-blue-500 transition"
                    >
                        Profile
                    </Link>
                    {user ? (
                        <Link
                            href="/api/auth/logout"
                            className="bg-red-500 text-black px-4 py-2 rounded-lg shadow hover:bg-red-600 transition btn"
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link
                            href="/api/auth/login"
                            className="bg-blue-500 text-black px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition btn"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}
