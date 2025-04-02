// src/About.js
import React from 'react';
import InteriorBanner from '../Components/InteriorBanner';
import Intro from '../Components/Intro';
import TeamMembers from '../Components/Members';
import MediaSeparator from '../Components/Media-seperator';

const Agence = () => {
    const backgroundImage = 'src/assets/img/bandeau_xtn.jpg';
    return (
      <>
        <InteriorBanner
          imageUrl="src/assets/img/agence.jpg"
          title="AGENCE"
          subtitle="HUMAN CENTER"
          breadcrumb={[
            { label: "ACCUEL", link: "/" },
            { label: "AGENCE", link: "/agence" },
          ]}
        />
        <Intro
          title="UN PEU, BEAUCOUP, PASSIONNEMENT, A LA FOLIE"
          subtitle="Additionner les contraintes et sublimer les concepts"
          contentBlocks={[
            "Des créatifs qui aiment la technique, des développeurs qui aiment le marketing... autant d'experts dans leur domaine qui sont profondément ouverts aux autres métiers de l'agence. Et c'est ainsi que les contraintes de chaque métier deviennent sources de valeurs pour les autres.",
            "La passion fédère nos équipes créatives, techniques et marketing. L'innovation nous motive. Et le sens du client nous galvanise.Crée en 2009, c’est aujourd’hui 25 talents au service de vos projets.",
          ]}
        />
        <TeamMembers />
        <MediaSeparator backgroundImage={backgroundImage} />

        <div className="container">
          <div className="services-grid">
            {/* Design Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa fa-paint-brush"></i>
              </div>
              <h2 className="service-title">DESIGN</h2>
              <p className="service-description">
                Directeur artistique / Concepteur-rédacteur / UI designer /
                Motion designer / Graphistes
              </p>
            </div>
            {/* Marketing Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa fa-line-chart"></i>
              </div>
              <h2 className="service-title">MARKETING</h2>
              <p className="service-description">
                Consultant Marketing / UX designer / Social Media manager /
                Search engine consultant
              </p>
            </div>
            {/* Technique Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa fa-code"></i>
              </div>
              <h2 className="service-title">TECHNIQUE</h2>
              <p className="service-description">
                Consultant technique / IT Architect / Développeurs Front /
                Développeurs Back / Développeur Mobiles
              </p>
            </div>
          </div>
          <div className="join-us">
            <a
              href="http://jobs.extension-interactive.com/"
              target="_blank"
              className="join-link"
            >
              NOUS REJOINDRE <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="logo-marquee">
          <div className="scrolling">
            <div className="logo-item">
              <img
                alt="Symfony logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-symfony.png"
                width="300"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Drupal logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-drupal.png"
                width="300"
              />
            </div>
            <div className="logo-item">
              <img
                alt="PrestaShop logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-prestashop.png"
                width="300"
              />
            </div>
            <div className="logo-item">
              <img
                alt="WordPress logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-wordpress.png"
                width="300"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Android logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-android.png"
                width="300"
              />
            </div>
            <div className="logo-item">
              <img
                alt="iOS logo"
                className="logo-image"
                height="105"
                src="src/assets/img/logo-slider-ios_0.png"
                width="300"
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Agence;