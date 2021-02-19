import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Navbar } from '../components'
import { Landing } from '../components/Layout'

import { createWordListAnimation } from '../utils/animation'

const Home = () => {
  const router = useRouter()

  const [hide, setHide] = useState(false)

  useEffect(() => {
    createWordListAnimation(document.querySelector(".animation"), 3000 /* (ms) */)
  }, [])

  useEffect(() => setTimeout(() => setHide(true), 17000), [])

  useEffect(() => setTimeout(() => router.push('/about'), 17600), [])

  return (
    <div>
      <Head>
        <title>SENAI 18</title>
      </Head>

      <>
        <Landing hide={hide}>
          <Landing.Image>
            <Image
              src="/img/senai.png"
              alt="SENAI"
              width={154}
              height={28}
            />
          </Landing.Image>

          <Landing.Content>
            <div className="animation">
              <div className="animation-window">
                <ul>
                  <li>O ambiente escolar é um local interessante?</li>
                  <li>...</li>
                  <li>Nesse ano o SENAI Informática completa 18 anos</li>
                  <li>Então, através desse ensaio fotográfico....</li>
                  <li>Queremos mostrar a escola que vai além do ambiente</li>
                  <li>Seja bem vindo!</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </Landing.Content>
        </Landing>
      </>
    </div>
  )
}

export default Home
