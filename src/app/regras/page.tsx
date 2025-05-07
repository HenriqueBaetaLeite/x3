import FloatingButton from "@/app/components/floatingButton";
import Link from "next/link";

export default function Regras() {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-between gap-16">
    <div className="max-w-3xl mx-auto my-8 p-6 bg-black rounded-lg shadow-lg shadow-gray-800/50">
      <FloatingButton />
      <h2 className="text-2xl font-bold text-white pb-3 mb-4 border-b-2 border-blue-500">
        Regras do Torneio
      </h2>

      <p className="text-gray-300 mb-4">
        As regras serão as mesmas do futsal exceto as citadas abaixo, que
        complementam, adicionam ou substituem as regras originais.
      </p>
      <ol className="list-decimal pl-6 space-y-4 text-white mb-5">
        <li>
          Serão <span className="font-semibold text-blue-400">3 jogadores</span>{" "}
          em cada equipe.
        </li>

        <li>
          O gol terá{" "}
          <span className="font-semibold text-blue-400">
            1 metro de distância entre as traves
          </span>{" "}
          e em torno de{" "}
          <span className="font-semibold text-blue-400">50 cm de altura</span>.
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Caso a bola bata na trave original do gol, ela será considerada
              como neutra (como a bandeirinha de escanteio no futebol), e a bola
              continua em jogo.
            </li>
          </ul>
        </li>

        <li>
          É válido gol de{" "}
          <span className="font-semibold text-blue-400">
            qualquer lugar da quadra
          </span>
          .
        </li>

        <li>
          Para incentivar os dribles:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Tanto <span className="font-semibold text-blue-400">chapéu</span>{" "}
              quanto <span className="font-semibold text-blue-400">caneta</span>
              , se validados pela arbitragem, contam como gol.
            </li>
          </ul>
        </li>

        <li>
          Para coibir as faltas:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Toda falta será convertida em{" "}
              <span className="font-semibold text-blue-400">
                tiro livre direto sem barreira e sem goleiro
              </span>
              , da marca do pênalti da própria quadra.
            </li>
            <li>
              Basta o atacante que recebeu a falta fazer o gol,{" "}
              <span className="font-semibold text-blue-400">
                sem que esbarre nas traves (cones).{" "}
              </span>
            </li>
            <li>O restante dos jogadores deve ficar atrás da linha da bola.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-yellow-400">Cartão amarelo:</span>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Exclusão{" "}
              <span className="font-semibold text-blue-400">
                temporária de 2 minutos
              </span>{" "}
              do jogador.
            </li>
            <li>Retorno somente após o término do tempo de penalidade.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-red-400">Cartão vermelho:</span>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Expulsão do jogo
              <span className="font-semibold text-blue-400"> e </span>
              do torneio de forma automática.
            </li>

            <li>
              A equipe poderá inscrever um substituto, até 5 minutos antes do
              início do seu próximo jogo.
            </li>

            <li>Esperamos que esta regra não seja necessária.</li>
            <li>Prezamos por um futebol arte com qualidade!</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-blue-400">Sistema X1.</span> Cada
          equipe tem direito a acionar 1 vez o x1, em qualquer momento do jogo,
          que consiste em:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
            <li>
              Duelo de 1 jogador contra 1 adversário (a escolha de cada equipe).
            </li>
            <li>
              Duração de <span className="font-semibold">1 minuto</span>.
            </li>
            <li>Gols valem o dobro!</li>
            <li>
              Caneta e chapéu (se validados pela arbitragem) valem{" "}
              <span className="font-semibold text-blue-400">2 gols</span>.
            </li>
          </ul>
        </li>

        <li className="text-gray-300 font-semibold">
          Qualquer outro detalhe será decidido pela organização no momento do
          ocorrido.
        </li>
      </ol>

      <p className="text-gray-300 mb-4">
        As regras foram adaptadas para garantir um torneio divertido e
        competitivo. Esperamos que todos se divirtam e joguem com respeito!
        <br />
        Caso tenha alguma dúvida, entre em contato com a organização.
      </p>

      <Link
        href="/inscricao"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300 text-lg"
      >
        📝 Inscreva sua equipe
      </Link>
    </div>
    </div>
  );
}
