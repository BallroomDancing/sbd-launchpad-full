import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BallroomDance Token</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">BallroomDance (SBD)</h1>
        <p className="text-xl mb-6">Поддержи спорт — участвуй в PreSale</p>
        <a href="/presale" className="bg-white text-black px-6 py-3 rounded-full font-bold">
          Перейти к PreSale
        </a>
      </main>
    </>
  );
}
