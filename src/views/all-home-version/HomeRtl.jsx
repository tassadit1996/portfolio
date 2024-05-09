import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
	{ icon: "fa-home", menuName: "Accueil" },
	{ icon: "fa-user", menuName: "Profil" },
	{ icon: "fa-briefcase", menuName: "Portfolio" },
	{ icon: "fa-envelope-open", menuName: "Contact" },
];

const HomeRtl = () => {
	document.querySelector("body").classList.add("rtl");

	return (
		<div className="yellow">
			<SwitchDark />
			{/* End Switcher */}

			<Tabs>
				<div className="header">
					<TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
						{menuItem.map((item, i) => (
							<Tab className="icon-box" key={i}>
								<i className={`fa ${item.icon}`}></i>
								<h2>{item.menuName}</h2>
							</Tab>
						))}
					</TabList>
				</div>
				{/* End Menu Content */}

				<div className="tab-panel_list">
					{/* Hero Content Starts */}
					<TabPanel className="home ">
						<div
							className="container-fluid main-container container-home p-0 "
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<div className="color-block d-none d-lg-block"></div>
							<Hero />
						</div>
					</TabPanel>
					{/* Hero Content Ends */}

					{/* About Content Starts */}
					<TabPanel className="about">
						<div data-aos="fade-up" data-aos-duration="1200">
							<div className="title-section text-left text-sm-center">
								<h1>
									A PROPOS DE <span>MOI</span>
								</h1>
								<span className="title-bg">Profil</span>
							</div>
							{/* End title */}
							<Index />
						</div>
					</TabPanel>
					{/* About Content Ends */}

					{/* Portfolio Content Starts */}
					<TabPanel className="portfolio">
						<div
							className="title-section text-left text-sm-center"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<h1>
								Mon <span>portfolio</span>
							</h1>
							<span className="title-bg">Réalisations</span>
						</div>
						{/* End title */}
						<Portfolio />
					</TabPanel>
					{/* Portfolio Content Ends */}

					{/* Contact Content Starts */}
					<TabPanel className="contact">
						<div
							className="title-section text-left text-sm-center"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<h1>
								Restons en <span>Contacts</span>
							</h1>
							<span className="title-bg">contact</span>
						</div>
						<div
							className="container"
							data-aos="fade-up"
							data-aos-duration="1200"
						>
							<div className="row">
								{/*  Left Side Starts */}
								<div className="col-12 col-lg-4">
									<h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
										Ne soyez pas timide !
									</h3>
									<p className="open-sans-font mb-4">
										N'hésitez pas à me contacter. Je suis
										toujours ouvert à discuter de nouveaux
										projets, des idées créatives ou des
										opportunités d'être une partie de vos
										visions.
									</p>
									<Address />
									{/* End Address */}

									<Social />
									{/* End Social */}
								</div>
								{/* Left Side Ends */}

								{/*  Contact Form Starts  */}
								<div className="col-12 col-lg-8">
									<Contact />
								</div>
								{/*  Contact Form Ends */}
							</div>
						</div>
						{/* End .container */}
					</TabPanel>
					{/* Contact Content Ends */}
				</div>
			</Tabs>
		</div>
	);
};

export default HomeRtl;
