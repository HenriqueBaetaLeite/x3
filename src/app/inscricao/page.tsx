"use client";
import FloatingButton from "@/app/components/floatingButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, AlertCircle, ExternalLink } from "lucide-react";

export default function Inscricao() {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-between gap-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto my-8 p-6 bg-black rounded-2xl shadow-lg shadow-gray-800/50"
    >
      <FloatingButton />

      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-white pb-3 mb-6 border-b-2 border-blue-500 flex items-center gap-2"
      >
        <FileText size={28} className="text-yellow-400" />
        Inscrição no Torneio
      </motion.h2>

      <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
        <p>
          💰 A inscrição custa apenas{" "}
          <span className="text-yellow-400 font-semibold">R$15,00 por equipe</span>{" "}
          e deve ser paga no dia do torneio.
        </p>

        <p className="flex items-start gap-2 text-yellow-400">
          <AlertCircle size={22} />
          <span>
            <strong>ATENÇÃO:</strong> Apenas um dos integrantes de cada equipe deve
            realizar a inscrição.
          </span>
        </p>

        <p>
          📋 Basta acessar o link abaixo e preencher{" "}
          <span className="text-blue-400 font-semibold">todos os campos</span> do
          formulário.
        </p>

        <p>
          📖 Não se esqueça de ler as{" "}
          <Link href="/regras" className="underline text-blue-400 font-semibold">
            regras do torneio
          </Link>{" "}
          para entender como funciona.
        </p>

        <p>📱 Caso tenha dúvidas, entre em contato com a organização do torneio.</p>
      </div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        href="https://docs.google.com/forms/d/e/1FAIpQLScapYnni23CJcsaM1QvT7xZWtZL5L2zQmf1FOB_3ubTQh80rw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
      >
        <ExternalLink size={20} />
        Acessar Formulário de Inscrição
      </motion.a>
    </motion.div>
    </div>
  );
}
