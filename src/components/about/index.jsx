import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/cv.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
	return (
		<section className="main-content ">
			<div className="container">
				{/* <div className="row"> */}
				{/* Personal Info Starts */}

				{/* <div className="col-12">
						<h3 className="text-uppercase custom-title mb-0 ft-wt-600 text-center">
							Information Personelles
						</h3>
					</div> */}
				{/* End .col */}

				{/* <div className="col-12 d-block d-sm-none">
						<img
							src={heroImgMobile}
							className="img-fluid main-img-mobile"
							alt="about avatar"
						/>
					</div> */}
				{/* image for mobile menu */}

				{/* <div className="col-12 margin-auto">
						<PersonalInfo />
					</div> */}
				{/* End personal info */}

				{/* <div className="col-12 mt-1 text-center">
						<a className="button" href={cv} download>
							<span className="button-text">Download CV</span>
							<span className="button-icon fa fa-download"></span>
						</a>
					</div> */}
				{/* End download button */}
				{/*  Personal Info Ends */}
				{/* </div> */}
				{/* End .row */}

				{/* <hr className="separator" /> */}

				{/* Skills Starts */}
				<div className="row">
					<div className="col-12">
						<h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
							Mes Compétences
						</h3>
					</div>
					<Skills />
				</div>
				{/* Skills Ends */}

				<hr className="separator mt-1" />

				{/* Experience & Education Starts */}
				<div className="row">
					{/* <div className="col-12">
						<h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
							Experience <span>&</span> Education
						</h3>
					</div> */}
					{/* <div
						className="col-12"
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<div className="resume-box">
							<Experience />
						</div>
					</div> */}
					<div className="col-lg-6 m-15px-tb">
						<div className="col-12">
							<h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
								Experience
							</h3>
						</div>
						<div className="resume-box">
							<Experience />
						</div>
					</div>
					<div className="col-lg-6 m-15px-tb">
						<div className="col-12">
							<h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
								Education
							</h3>
						</div>
						<div className="resume-box">
							<Education />
						</div>
					</div>
				</div>
				{/*  Experience & Education Ends */}
			</div>
		</section>
	);
};

export default index;
