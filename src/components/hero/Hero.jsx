import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/rtl-hero.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import cv from "../../assets/img/cv.webp";

const heroContent = {
	heroImage: heroImg,
	heroMobileImage: heroImgMobile,
	heroTitleName: "Tassadit MAGHNI",
	heroDesignation: "Développeuse Full stack",
	heroDescriptions: `Développeur Full Stack expérimenté avec une solide expérience dans les technologies web et mobile, ainsi qu'une expertise reconnue en développement Front-end et Back-end. Maîtrise des méthodologies agiles et capacité avérée à collaborer efficacement en équipe. Expérience diversifiée avec un engagement constant envers la qualité et l'accomplissement des objectifs.`,
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
						<p className="open-sans-font">
							{heroContent.heroDescriptions}
						</p>
						<Social />
						<a className="button" href={cv} download>
							<span className="button-text">
								Télécharger mon CV
							</span>
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
