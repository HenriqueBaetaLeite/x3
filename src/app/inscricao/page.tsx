import FloatingButton from "@/app/components/floatingButton";
import Link from "next/link";

export default function Inscricao() {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-black rounded-lg shadow-lg shadow-gray-800/50">
      <FloatingButton />
      <h2 className="text-2xl font-bold text-white pb-3 mb-4 border-b-2 border-blue-500">
        Inscrição no Torneio
      </h2>

      <p className="text-gray-300 text-lg mb-6">
        A inscrição custa apenas R$15,00 por equipe e deve ser paga no dia do
        torneio.
      </p>

      <p className="text-gray-300 mb-6">
        <span className="text-yellow-400 font-semibold">ATENÇÃO:</span> Apenas
        um dos integrantes de cada equipe deve realizar a inscrição.
      </p>

      <p className="text-gray-300 mb-6">
        Basta acessar o link abaixo e preencher{" "}
        <span className="text-blue-400 font-semibold">todos os campos</span> do
        formulário.
      </p>
      <p className="text-gray-300 mb-6">
        Certifique-se de ler as{" "}
        <span className="text-blue-400 font-semibold">
          <Link href="/regras" className="underline">
            regras do torneio
          </Link>
        </span>{" "}
        para entender como funciona.
      </p>

      <p className="text-gray-300 mb-6">
        Caso tenha dúvidas, entre em contato com a organização do torneio.
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScapYnni23CJcsaM1QvT7xZWtZL5L2zQmf1FOB_3ubTQh80rw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
      >
        Acessar Formulário de Inscrição
      </a>
    </div>
  );
}
