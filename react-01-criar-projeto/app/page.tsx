import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-6 sm:p-10 gap-12 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-zinc-900 text-center sm:text-left">
      <header className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
        🚀 Bem-vindo ao React Explorer!
      </header>

      <main className="flex flex-col gap-6 items-center sm:items-start">
        <Image
          src="/next.svg"
          alt="Logo do Next.js"
          width={160}
          height={36}
          className="dark:invert"
        />

        <p className="text-lg max-w-xl">
          Este projeto foi iniciado como parte da disciplina de POS no IFRN - CNAT.
          Aqui você aprenderá os fundamentos de React e Next.js com estilo! 😎
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white p-4 rounded-xl shadow hover:scale-105 transition-transform"
          >
            📘 Aprenda Next.js do zero
          </a>
          <a
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 dark:bg-green-800 text-green-900 dark:text-white p-4 rounded-xl shadow hover:scale-105 transition-transform"
          >
            🧩 Explore templates prontos
          </a>
        </div>
      </main>

      <footer className="text-sm text-zinc-600 dark:text-zinc-400 mt-8">
        Desenvolvido com 💚 para o IFRN por <strong>FIXME</strong>
      </footer>
    </div>
  );
}
