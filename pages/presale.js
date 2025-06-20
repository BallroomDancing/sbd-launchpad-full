
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Web3 from 'web3'

export default function Presale() {
  const [countdown, setCountdown] = useState('')
  const [account, setAccount] = useState(null)

  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00+0300').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval)
        setCountdown('PreSale уже начался!')
      } else {
        setCountdown(`${days}д ${hours}ч ${minutes}м ${seconds}с`)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum)
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
      } catch (err) {
        console.error("Ошибка при подключении:", err)
      }
    } else {
      alert('Пожалуйста, установите MetaMask!')
    }
  }

  return (
    <>
      <Head>
        <title>PreSale | BallroomDance (SBD)</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">PreSale стартует 1 сентября 2025</h1>
        <p className="mb-2 text-xl">{countdown}</p>
        <p className="mb-8 text-gray-400 max-w-lg">
          Участвуйте в предварительной продаже токена SBD. Только whitelisted-адреса. Минимум 1.55 BNB, максимум 50 BNB.
        </p>

        {account ? (
          <p className="text-green-400">🟢 Подключён: {account}</p>
        ) : (
          <button
            onClick={connectWallet}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold transition"
          >
            Подключить MetaMask
          </button>
        )}
      </main>
    </>
  )
}
