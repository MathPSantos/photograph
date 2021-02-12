import { useRef } from 'react'
import Head from 'next/head'

import { Navbar } from '../components'
import Photo from '../components/Photo'
import { Galery } from '../components/Layout'

const arr = [1, 1, 1, 1, 1, 1]

const About = () => {
    const galeryRef = useRef(null)

    return (
        <div>
          <Head>
              <title>SENAI 18 - Sobre</title>
          </Head>

          <>
            <Navbar />
            <Galery photoQty={arr.length}>
                <Galery.Content ref={galeryRef}>
                    {arr.map((_, i) => (
                        <Photo index={i} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5 }} drag dragElastic={0.2} dragConstraints={galeryRef} />
                    ))}
                </Galery.Content>
            </Galery>
          </>
        </div>
    )
}

export default About
