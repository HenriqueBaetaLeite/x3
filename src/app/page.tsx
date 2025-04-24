import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-between gap-16">
      <main className="max-w-3xl w-full flex flex-col items-center text-center gap-8">
        <Image
          src="/logo.png"
          alt="Flyer do Campeonato"
          width={300}
          height={500}
          priority
          className="rounded-lg shadow-lg shadow-gray-800/50"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          Campeonato Futsal 3x3 com Regras Adaptadas!
        </h1>

        <p className="text-gray-300 text-lg">
          Venha participar de uma competição cheia de emoção e criatividade!
          Inscreva sua equipe e conheça as regras inovadoras.
        </p>

        <p className="text-gray-300 text-lg">
          Premiação para os vencedores e sorteio de brindes!
        </p>

        <p className="text-gray-300 text-lg">
          Dia 10 de maio, às 9 horas, na quadra do América Suburbano.
        </p>

        <p className="text-gray-300 text-lg">
          Rua Campina Verde, 366, Salgado Filho.
        </p>

        <p className="text-gray-300 text-lg">
          O formato do torneio será definido de acordo com o número de equipes
          inscritas. O número de equipes participantes será limitado a 16, e as
          inscrições serão encerradas assim que esse número for atingido.
          Portanto, não perca tempo e inscreva-se já!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/inscricao"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Inscrição
          </Link>
          <Link
            href="/regras"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Regras
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-3xl flex-wrap flex justify-center gap-6 border-t border-gray-700 pt-6">
        <a
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/file.svg"
            alt="Ícone de arquivo"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/window.svg"
            alt="Ícone de janela"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Ícone de globo" width={16} height={16} />
          Next.js
        </a>
      </footer>
    </div>
  );
}
