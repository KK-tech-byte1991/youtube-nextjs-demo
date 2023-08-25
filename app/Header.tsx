import Link from "next/link";
function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <Link href="/" className="px-4 py-2 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
    </header>
  );
}

export default Header;
