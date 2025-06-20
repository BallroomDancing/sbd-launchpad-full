import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>О проекте | BallroomDance Token</title>
      </Head>
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">О проекте BallroomDance (SBD)</h1>
          <p className="text-lg leading-8 mb-4">
            BallroomDance (SBD) — это токен, созданный для поддержки спортивных мероприятий и популяризации бального танца по всему миру.
            Проект нацелен на объединение спортсменов, фанатов и спонсоров на базе децентрализованной платформы.
          </p>
          <p className="text-lg leading-8 mb-4">
            Участники могут инвестировать в развитие танцевальных мероприятий, участвовать в PreSale и получать награды через механизм стейкинга.
            Вся экосистема построена на Binance Smart Chain (BSC), что обеспечивает низкие комиссии и высокую скорость.
          </p>
          <p className="text-lg leading-8 mb-4">
            В проекте предусмотрено 7 категорий распределения токенов, включая Private Sale, Public Sale, Ликвидность, Разработка, Резерв и Стейкинг.
            Мы стремимся к прозрачности, безопасности и доступности для каждого.
          </p>
        </section>
      </main>
    </>
  );
}
