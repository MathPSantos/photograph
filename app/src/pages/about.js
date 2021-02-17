import Head from 'next/head'

import { Navbar } from '../components'
import { AboutLay } from '../components/Layout'

const arr = [
    {

        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim lacus rutrum rutrum lobortis. Vivamus ultrices diam sed metus fermentum, sed congue est viverra. Aliquam dapibus odio ex, non tempus magna rutrum eu. Aliquam commodo scelerisque viverra. Sed volutpat tempus aliquam. Pellentesque pretium, est eget consequat posuere, nisl turpis posuere elit, tempor aliquam lorem diam sit amet dui. Suspendisse ultrices sapien nec dolor condimentum, eget vehicula enim porttitor.",
    },

    {

        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tempus aliquam. Pellentesque pretium, est eget consequat posuere, nisl turpis posuere elit, tempor aliquam lorem diam sit amet dui. Suspendisse ultrices sapien nec dolor condimentum, eget vehicula enim porttitor."
    },
    
    {

        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim lacus rutrum rutrum lobortis. Vivamus ultrices diam sed metus fermentum, sed congue est viverra. Aliquam dapibus odio ex, non tempus magna rutrum eu. Aliquam commodo scelerisque viverra. Sed volutpat tempus aliquam. Pellentesque pretium, est eget consequat posuere, nisl turpis posuere elit, tempor aliquam lorem diam sit amet dui. Suspendisse ultrices sapien nec dolor condimentum, eget vehicula enim porttitor.",
        title: "Comunidade",
    },     

    {

        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tempus aliquam. Pellentesque pretium, est eget consequat posuere, nisl turpis posuere elit, tempor aliquam lorem diam sit amet dui. Suspendisse ultrices sapien nec dolor condimentum, eget vehicula enim porttitor.",
        title: "Espaço",
    },

    {

        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tempus aliquam. Pellentesque pretium, est eget consequat posuere, nisl turpis posuere elit, tempor aliquam lorem diam sit amet dui. Suspendisse ultrices sapien nec dolor condimentum, eget vehicula enim porttitor.",
        title: "Relações",
    },
]

const About = () => {
    return(
        <div>
            <Head>
                <title>SENAI 18 - Sobre</title>
            </Head>

            <>
                <Navbar />
                <AboutLay>
                    <AboutLay.Content>
                        {arr.map((e, i) => (
                            <AboutLay.Paragraph 
                                key={i} 
                                index={i}
                            >
                                {e?.paragraph || ''}
                                <AboutLay.Span index={i}>{e?.title || ''}</AboutLay.Span>
                            </AboutLay.Paragraph>
                        ))}
                    </AboutLay.Content>
                </AboutLay>
            </>
        </div>
    )
}

export default About