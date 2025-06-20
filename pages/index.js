
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>BallroomDance (SBD)</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">BallroomDance Token (SBD)</h1>
        <p className="mb-8 text-lg text-center max-w-xl">
          Добро пожаловать на официальный LaunchPad токена SBD — поддержки и развития спортивных танцев.
        </p>
        <div className="grid gap-4">
          <Link href="/about" className="text-blue-400 underline">О проекте</Link>
          <Link href="/presale" className="text-blue-400 underline">PreSale</Link>
          <Link href="/tokenomics" className="text-blue-400 underline">Tokenomics</Link>
          <Link href="/roadmap" className="text-blue-400 underline">Дорожная карта</Link>
          <Link href="/buy" className="text-blue-400 underline">Покупка токена</Link>
          <Link href="/staking" className="text-blue-400 underline">Стейкинг</Link>
          <Link href="/contacts" className="text-blue-400 underline">Контакты</Link>
        </div>
      </main>
    </>
  )
}
