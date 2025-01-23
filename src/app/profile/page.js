import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Profile() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);

    if (!user) {
        return (
            <div className="container mx-auto p-4">
                <p>You must log in to view this page.</p>
                <Link href="/api/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Login
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
            <p>Hello, {user?.family_name || "User"}!</p>
            <Link href="/api/auth/logout" className="bg-red-600 text-white px-4 py-2 rounded">
                Logout
            </Link>
        </div>
    );
}