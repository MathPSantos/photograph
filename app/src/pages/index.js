import { useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '../components'
import { Landing } from '../components/Layout'

import { createWordListAnimation } from '../utils/animation'

// https://stackoverflow.com/questions/37713585/word-change-in-phase-css-vertical-animation-loop

const Home = () => {
  useEffect(() => {
    createWordListAnimation(document.querySelector(".animation"), 3000 /* (ms) */);
  }, [])

  return (
    <div>
      <Head>
        <title>SENAI 18</title>
      </Head>

      <>
        <Navbar burger={false} />
        <Landing>
          <Landing.Content>
            <div class="animation">
              <div class="animation-window">
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
