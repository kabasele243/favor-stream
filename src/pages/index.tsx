import Navbar from '@/components/navbar'
import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Favor Stream</title>
        <meta name="description" content="Favor Stream where we tell story." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>

    </>
  )
}
