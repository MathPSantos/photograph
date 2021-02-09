import Head from 'next/head'
import { Navbar } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SENAI 18</title>
      </Head>

      <main>
        <Navbar/>
      </main>
    </div>
  )
}
