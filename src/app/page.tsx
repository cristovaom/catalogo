import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-4xl font-bold">Catalogo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bem-vindo ao nosso catálogo de passeios
        </p>
      </main>
    </div>
  );
}
