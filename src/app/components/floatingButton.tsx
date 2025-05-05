import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link href="/" passHref>
      <button className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-blue-800/50 transition-all duration-300">
        <span className="sm:inline hidden">← Voltar</span>
        <span className="inline sm:hidden">←</span>
      </button>
    </Link>
  );
}
