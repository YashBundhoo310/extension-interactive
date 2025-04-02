// src/Home.js
import React from 'react';
import Banner from '../Components/Home-banner';
import Intro from '../Components/Intro';
import MediaSeparator from '../Components/Media-seperator';

const Home = () => {
    const backgroundImage = 'src/assets/img/bandeau_ACA.jpg';
    return (
        <>
            <Banner/>
            <Intro
                title="UN PEU, BEAUCOUP, PASSIONNEMENT, A LA FOLIE"
                subtitle="Additionner les contraintes et sublimer les concepts"
                contentBlocks={[
                    "Des créatifs qui aiment la technique, des développeurs qui aiment le marketing... autant d'experts dans leur domaine qui sont profondément ouverts aux autres métiers de l'agence.",
                    "La passion fédère nos équipes créatives, techniques et marketing. L'innovation nous motive. Et le sens du client nous galvanisent. Créée en 2009, c'est aujourd'hui 25 talents au service de vos projets."
                ]}
                link="/agence"
                linkTitle="En savoir plus"
            />
            <div className='img-container'>
                <img src="src/assets/img/offreDeService.png" alt="bandeau agency" />
            </div>
            <Intro
                title="DIGITAL BUSINESS ACCELERATOR"
                subtitle="Ecrire de nouvelles histoires et séduire vos clients autrement"
                contentBlocks={[
                    "Comprendre vos clients pour mieux répondre à vos objectifs, concevoir des contenus et des services qui créent l'adhésion, créer le lien digital avec vos communautés.",
                    "Nous concevons des expériences digitales omnicanales au service de vos clients pour valoriser votre empreinte et développer votre business."
                ]}
                link="/servies"
                linkTitle="En savoir plus"
            />
            <MediaSeparator backgroundImage={backgroundImage} />

            <div className='realisation'>
                <img src="src/assets/img/thumbnail_xtnRefClient_2.jpg" alt="" />
            </div>
        </>
    )
};

export default Home;