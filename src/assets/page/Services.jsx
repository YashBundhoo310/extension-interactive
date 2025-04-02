// src/About.js
import React from 'react';
import InteriorBanner from '../Components/InteriorBanner';
import Intro from '../Components/Intro';
import MediaSeparator from '../Components/Media-seperator';

const Services = () => {
  const backgroundImage = 'src/assets/img/service02_0.jpg';
    return (
      <>
        <InteriorBanner
          imageUrl="src/assets/img/banner-services.jpg"
          title="SERVICES"
          subtitle="DIGITAL.... ALL & ONL"
          breadcrumb={[
            { label: "ACCUEL", link: "/" },
            { label: "SERVICES", link: "/services" },
          ]}
        />

        <Intro
          title="DIGITAL BUSINESS ACCELERATOR"
          subtitle="Ecrire de nouvelles histoires et séduire vos clients autrement"
          contentBlocks={[
            "Comprendre vos clients pour mieux répondre à vos objectifs, concevoir des contenus et des services qui créent l'adhésion, créer le lien digital avec vos communautés.",
            "Nous concevons des expériences digitales omnicanales au service de vos clients pour valoriser votre empreinte et développer votre business.",
          ]}
        />

        <div className="container">
          <div className="services-grid">
            {/* Design Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa fa-magic"></i>
              </div>
              <h2 className="service-title">CONSULTING</h2>
              <p className="service-description">
                Stratégie digitale / Audit / Analyses expertes / Web analytics / Tests utilisateurs / Suivi de performance
              </p>
            </div>
            {/* Marketing Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa fa-gamepad"></i>
              </div>
              <h2 className="service-title">CONCEPTION & DÉVELOPPEMENT</h2>
              <p className="service-description">
                Consultant Marketing / UX designer / Social Media manager /
                Search engine consultant
              </p>
            </div>
            {/* Technique Section */}
            <div className="service-card">
              <div className="icon-container">
                <i className="fa  fa-bullseye"></i>
              </div>
              <h2 className="service-title">E-MARKETING</h2>
              <p className="service-description">
                Social Media Marketing / Search Engine Advertising / Search Engine Optimisation  / Emailing / Display / Buzz
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

        <MediaSeparator backgroundImage={backgroundImage} />

        <div className="logo-marquee">
          <div className="scrolling">
            <div className="logo-item">
              <img
                alt="Symfony logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-symfony.png"
                width="200"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Drupal logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-drupal.png"
                width="200"
              />
            </div>
            <div className="logo-item">
              <img
                alt="PrestaShop logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-prestashop.png"
                width="200"
              />
            </div>
            <div className="logo-item">
              <img
                alt="WordPress logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-wordpress.png"
                width="200"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Android logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-android.png"
                width="200"
              />
            </div>
            <div className="logo-item">
              <img
                alt="iOS logo"
                className="logo-image"
                height="55"
                src="src/assets/img/logo-slider-ios_0.png"
                width="200"
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Services;