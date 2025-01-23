export default async function BlogDetails({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 block">
          Back to Home
        </a>
      </div>
    );
  }
  