import Link from "next/link"; 

export default function Header() {
  return (
    <header className="bg-gray-100 text-center py-12 rounded-2xl shadow-sm">
      <h1 className="text-4xl font-bold mb-2">Which Element Are You?</h1>
      <p className="text-lg mb-8">(based on completely random things)</p>
      <nav className="space-x-8 text-xl font-medium">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/quiz" className="hover:underline">
          Quiz
        </Link>
      </nav>
    </header>
  );
}
