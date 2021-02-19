import { useRef } from 'react'
import Head from 'next/head'

import { Navbar } from '../components'
import Photo from '../components/Photo'
import { Galery } from '../components/Layout'

const arr = [
    '/img/photos/photo-1.png',
    '/img/photos/photo-2.png',
    '/img/photos/photo-3.png',
    '/img/photos/photo-4.png',
    '/img/photos/photo-5.png',
    '/img/photos/photo-6.png',
    '/img/photos/photo-7.png',
    '/img/photos/photo-8.png',
]

const Photos = () => {
    const galeryRef = useRef(null)

    return (
        <div>
          <Head>
              <title>SENAI 18 - Galeria</title>
          </Head>

          <>
            <Navbar />
            <Galery photoQty={arr.length}>
                <Galery.Content ref={galeryRef}>
                    {arr.map((e, i) => (
                        <Photo 
                            src={e}
                            key={i} 
                            index={i} 
                            animate={{ opacity: 1 }} 
                            initial={{ opacity: 0 }} 
                            transition={{ duration: 0.5 }} 
                            drag 
                            dragElastic={0.2} 
                            dragConstraints={galeryRef} 
                        />
                    ))}
                </Galery.Content>
            </Galery>
          </>
        </div>
    )
}

export default Photos
