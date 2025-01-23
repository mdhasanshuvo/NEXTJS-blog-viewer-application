export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Blog Viewer. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  