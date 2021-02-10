import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Navbar } from '../components'
import { Landing } from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'

const textList = [
  { id: 1, text: "teste"},
  { id: 2, text: "test2"},
  { id: 3, text: "test3"},
  { id: 4, text: "test4"},
  { id: 5, text: "test5"},
]

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

// https://stackoverflow.com/questions/37713585/word-change-in-phase-css-vertical-animation-loop

const Home = () => {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    setInterval(() => setTextIndex(prevTextIndex => prevTextIndex + 1), 2000)
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AnimatePresence>
                {textList[0] === textList[textIndex] && (
                  <motion.h1
                    initial={{opacity: 0,}}
                    enter={{
                      opacity: 1,
                      transition: {
                        duration: duration,
                        delay: duration,
                        when: "beforeChildren",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: duration },
                    }}
                  >
                    {textList[textIndex].text}
                  </motion.h1>
                )}
                {textList[1] === textList[textIndex] && (
                  <motion.h1
                    initial={{opacity: 0,}}
                    enter={{
                      opacity: 1,
                      transition: {
                        duration: duration,
                        delay: duration,
                        when: "beforeChildren",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: duration },
                    }}
                  >
                    {textList[textIndex].text}
                  </motion.h1>
                )}
                {textList[2] === textList[textIndex] && (
                  <motion.h1
                    initial={{opacity: 0,}}
                    enter={{
                      opacity: 1,
                      transition: {
                        duration: duration,
                        delay: duration,
                        when: "beforeChildren",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: duration },
                    }}
                  >
                    {textList[textIndex].text}
                  </motion.h1>
                )}
                {textList[3] === textList[textIndex] && (
                  <motion.h1
                    initial={{opacity: 0,}}
                    enter={{
                      opacity: 1,
                      transition: {
                        duration: duration,
                        delay: duration,
                        when: "beforeChildren",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: duration },
                    }}
                  >
                    {textList[textIndex].text}
                  </motion.h1>
                )}
                {textList[4] === textList[textIndex] && (
                  <motion.h1
                    initial={{opacity: 0,}}
                    enter={{
                      opacity: 1,
                      transition: {
                        duration: duration,
                        delay: duration,
                        when: "beforeChildren",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: duration },
                    }}
                  >
                    {textList[textIndex].text}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>
          </Landing.Content>
        </Landing>
      </>
    </div>
  )
}

export default Home
