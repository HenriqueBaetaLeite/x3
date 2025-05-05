"use client";
import { motion } from "framer-motion";
import Countdown from "@/app/components/countdown";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-between gap-16">
      <main className="max-w-3xl w-full flex flex-col items-center text-center gap-10">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt="Logo do Campeonato"
            width={300}
            height={500}
            priority
            className="rounded-xl shadow-lg shadow-gray-800/50"
          />
        </motion.div>

        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
          Campeonato Futsal 3x3!
        </h1>

        <div className="text-gray-300 text-lg space-y-4">
          <p>
            Inscreva sua equipe e venha participar de uma competição cheia de{" "}
            <span className="text-blue-400 font-semibold">emoção</span>,{" "}
            <span className="text-blue-400 font-semibold">
              criatividade e muitos dribles!
            </span>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Trophy size={20} className="text-yellow-500" />
            Premiação para os vencedores e sorteio de brindes exclusivos!
          </p>

          <p className="flex items-center justify-center gap-2">
            <CalendarCheck size={20} className="text-green-400" />
            Dia 17 de maio, às 9h, na quadra do América Suburbano.
          </p>

          <p className="flex items-center justify-center gap-2">
            <MapPin size={20} className="text-red-400" />
            Rua Campina Verde, 366 – Salgado Filho, BH/MG
          </p>

          <p className="flex items-center justify-center gap-2">
            <Users size={20} className="text-yellow-400" />
            Vagas limitadas a{" "}
            <span className="text-yellow-400 font-semibold">10 equipes</span>!
          </p>
        </div>

        <p className="font-bold">Tempo restante para o início do torneio:</p>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Countdown />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/regras"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            📋 Ver Regras
          </Link>
          <Link
            href="/inscricao"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            📝 Inscreva sua equipe
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-3xl flex justify-center border-t border-gray-700 pt-6">
        <a
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          href="https://www.linkedin.com/in/henriquebaetaleite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Ícone de globo" width={16} height={16} />
          Desenvolvido por Henrique Baêta – 2025
        </a>
      </footer>
    </div>
  );
}
