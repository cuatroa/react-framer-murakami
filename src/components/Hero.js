import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import FlowerOne from '../img/murakami-1.png'
import FlowerTwo from '../img/murakami-2.png'
import FlowerThree from '../img/murakami-3.png'
import FlowerFour from '../img/murakami-4.png'

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #000;
`;

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    object-fit: contain;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }

    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }

    ${Image}:nth-child(3) {
        top: 350px;
        left: 150px;
    }

    ${Image}:nth-child(4) {
        bottom: 75px;
        right: 75px;
    }
`;

const Hero = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x:0 }
    };

    const transition = {
        min: 50,
        max: 100,
        bounceStiffness: 100
    };

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >Takashi Murakami
                    </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{duration: 1}}
                    >React JS and Framer Motion project.
                    </motion.p>
                    <Button
                        whileHover={{scale : 1.05}}
                        whileTap={{scale : 0.95, backgroundColor: '#00b5f4', border: 'none', color: '#000' }}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: { duration: 1.5 }}}
                    >Get Started
                    </Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={FlowerOne} alt='flower' 
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragTransition={transition}
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0, transition: { duration: 1}}}
                    />
                    <Image src={FlowerTwo} alt='flower' 
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragTransition={transition}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0, transition: { duration: 1}}}
                    />
                    <Image src={FlowerThree} alt='flower' 
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragTransition={transition}
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x: 0, transition: { duration: 1}}}
                    />
                    <Image src={FlowerFour} alt='flower' 
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragTransition={transition}
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0, transition: { duration: 1}}}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero