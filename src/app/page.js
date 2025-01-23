import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to Blog Viewer</h1>
          <p className="mt-2 text-lg">
            Explore interesting posts from our collection.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-blue-600 transition"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">
                {post.body.length > 100
                  ? `${post.body.substring(0, 100)}...`
                  : post.body}
              </p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
