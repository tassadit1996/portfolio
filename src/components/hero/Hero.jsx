import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/rtl-hero.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import cv from "../../assets/img/CV Tassadit MAGHNI Développeuse full stack.pdf";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Tassadit MAGHNI",
  heroDesignation: "Développeuse Full stack",
  heroDescriptions: `Développeuse Full Stack expérimentée avec une solide expertise dans les technologies web et 
mobile. Maîtrise complète du développement Front-end et Back-end, avec une forte capacité à 
concevoir des solutions performantes et évolutives. Expertise reconnue dans l'application des 
méthodologies agiles, favorisant la collaboration en équipe et l'atteinte des objectifs dans les 
délais impartis. Mon engagement constant envers la qualité du code et l'optimisation des 
processus me permet de contribuer de manière significative à la réussite des projets.`,
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <Social />
            <a className="button" href={cv} download>
              <span className="button-text">Télécharger mon CV</span>
              <span className="button-icon fa fa-download"></span>
            </a>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  A propos de <span>MOI</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
