import Head from 'next/head'

import { Navbar } from '../components'
import { AboutLay } from '../components/Layout'

const arr = [
    {

        paragraph: "Para a campanha de 18 anos do SENAI pensamos em representar os motivos que diferenciam esta instituição das outras, trazendo sua essência através das fotografias. Então nosso principal objetivo  foi entender, definir e usar a nossa própria experiência e sentimentos sobre a escola para achar e capturar a o que consideramos ser a essência do SENAI, para isso chegamos no consenso de que a mesma,  é formada por 3 pilares: a Comunidade, o Espaço e as Relações.",
    },
    
    {

        paragraph: "Comunidade é um conceito criado para se referir às interações entre os indivíduos dentro da instituição. As pessoas, vindas de diferentes cenários, compõem uma estrutura capaz de unir os opostos, com um objetivo em comum.",
        title: "Comunidade",
    },     

    {

        paragraph: "Experimentamos um ambiente escolar que é muito bem utilizado, se conectam com nossas atividades, trazem um ambiente descontraído que molda as aulas e oferece maior imersão, ambiente mais leve e propício para a criação de relações entre as pessoas.\nEssa relação do espaço com todos que compõe o senai, e sua importância vai desde uma sala com mesas circulares, que provocam mais interação e cooperatividade na realização das atividades, até ambientes de descompressão  e conversa nos corredores com puffs, grama e bancos, os desenhos nas paredes que trazem uma sensação maior de conforto, acolhimento e descontração.",
        title: "Espaço",
    },

    {

        paragraph: "Trabalhamos também com as relações que são  criadas e desenvolvidas aqui dentro, capturando as relações entre indivíduos, dos alunos com os professores, dos indivíduos com o ambiente, transparecendo estas relações para os espectadores da exposição, captando as  expressões dos alunos e professores, sua comunicação corporal, que em determinados momentos indica maior proximidade e conexão.",
        title: "Relações",
    },
]

const About = () => {
    const formatParagraph = text => {
        const newText = text.split('\n').map(str => <div>{str}</div>)

        return newText
    }

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
                                {formatParagraph(e?.paragraph) || ''}
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