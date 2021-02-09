import Head from 'next/head'
import { P } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SENAI 18</title>
      </Head>

      <main>
        <P border="secondary">#SENAI18</P>
      </main>
    </div>
  )
}
