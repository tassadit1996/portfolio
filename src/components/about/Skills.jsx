import React from "react";
import reactjs from "../../assets/img/reactjs.png";
import nextjs from "../../assets/img/Next.js.jpeg";
import tailwind from "../../assets/img/tailwind.png";
import bootstrap from "../../assets/img/bootstrap.png";
import javascript from "../../assets/img/javascript.png";
import jquery from "../../assets/img/jquery.png";
import less from "../../assets/img/less.png";
import scss from "../../assets/img/sass.png";
import redux from "../../assets/img/redux.png";
import nodejs from "../../assets/img/nodejs.png";
import express from "../../assets/img/express.png";
import knex from "../../assets/img/knex.png";
import php from "../../assets/img/php.png";
import nest from "../../assets/img/nest.png";
import reactNative from "../../assets/img/reactNative.png";
import docker from "../../assets/img/docker.png";
import github from "../../assets/img/github.png";
import cicd from "../../assets/img/cicd.png";
import google from "../../assets/img/google.png";
import aws from "../../assets/img/aws.png";
import graphql from "../../assets/img/graphql.png";
import api from "../../assets/img/api.png";
import mongodb from "../../assets/img/mongodb.png";
import mysql from "../../assets/img/mysql.png";
import firebase from "../../assets/img/firebase.png";
import postgresql from "../../assets/img/postgresql.png";
import jest from "../../assets/img/jest.png";
import cypress from "../../assets/img/cypress.png";
import octopus from "../../assets/img/octopus.png";
import typescript from "../../assets/img/typescript.png";
import wordpress from "../../assets/img/wordpress.png";
import figma from "../../assets/img/figma.png";
import photoshop from "../../assets/img/photoshop.png";
import illustrator from "../../assets/img/illustrator.png";

const skillsContentFront = [
	{ skillIcon: reactjs, skillName: "REACT JS" },
	{ skillIcon: nextjs, skillName: "NEXT JS" },
	{ skillIcon: tailwind, skillName: "TAILWIND" },
	{ skillIcon: scss, skillName: "SCSS" },
	{ skillIcon: javascript, skillName: "JAVASCRIPT" },
	{ skillIcon: jquery, skillName: "JQUERY" },
	{ skillIcon: bootstrap, skillName: "BOOSTRAP" },
	{ skillIcon: redux, skillName: "REDUX" },
	{ skillIcon: less, skillName: "LESS" },
];
const skillsContentBack = [
	{ skillIcon: nodejs, skillName: "NODE JS" },
	{ skillIcon: express, skillName: "EXPRESS JS" },
	{ skillIcon: knex, skillName: "KNEX JS" },
	{ skillIcon: nest, skillName: "NEST JS" },
	{ skillIcon: php, skillName: "PHP" },
];
const skillsContentMobile = [
	{ skillIcon: reactNative, skillName: "REACT NATIVE" },
];
const skillsContentDevops = [
	{ skillIcon: docker, skillName: "DOCKER" },
	{ skillIcon: github, skillName: "GITHUB ACTIONS" },
	{ skillIcon: cicd, skillName: "CI/CD" },
];
const skillsContentCloud = [
	{ skillIcon: google, skillName: "GCP" },
	{ skillIcon: aws, skillName: "AWS" },
];
const skillsContentArchitecture = [
	{ skillIcon: api, skillName: "API REST" },
	{ skillIcon: graphql, skillName: "GRAPHQL API" },
];
const skillsContentBDD = [
	{ skillIcon: mysql, skillName: "MySQL" },
	{ skillIcon: mongodb, skillName: "MONGO DB" },
	{ skillIcon: firebase, skillName: "FIREBASE" },
	{ skillIcon: postgresql, skillName: "POSTGRESQL" },
];
const skillsContentTest = [
	{ skillIcon: jest, skillName: "JEST" },
	{ skillIcon: cypress, skillName: "CYPRESS" },
	{ skillIcon: octopus, skillName: "REACT TESTING LIBRARY" },
];
const skillsContentAutre = [
	{ skillIcon: typescript, skillName: "TYPESCRIPT" },
	{ skillIcon: wordpress, skillName: "WORDPRESS" },
	{ skillIcon: figma, skillName: "FIGMA" },
	{ skillIcon: photoshop, skillName: "PHOTOSHOP" },
	{ skillIcon: illustrator, skillName: "ILLUSTRATOR" },
];
const Skills = () => {
	return (
		<>
			<div className="app__skills-container">
				<div>
					<h2 className="skills-heading">Développement Front-end</h2>
					<div className="app__skills-list">
						<br />
						{skillsContentFront.map((skill) => (
							<div className="app__skills-item">
								<div
									className="app__flex"
									style={{ marginBottom: "-20px" }}
								>
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Développement Back-end</h2>
					<div className="app__skills-list2">
						{skillsContentBack.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Développement Mobile</h2>
					<div className="app__skills-list">
						{skillsContentMobile.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="app__skills-container">
				<div>
					<h2 className="skills-heading">Devops</h2>
					<div className="app__skills-list">
						<br />
						{skillsContentDevops.map((skill) => (
							<div className="app__skills-item">
								<div
									className="app__flex"
									style={{ marginBottom: "-20px" }}
								>
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Cloud</h2>
					<div className="app__skills-list2">
						{skillsContentCloud.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Architecture</h2>
					<div className="app__skills-list">
						{skillsContentArchitecture.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="app__skills-container">
				<div>
					<h2 className="skills-heading">Base de Données</h2>
					<div className="app__skills-list">
						<br />
						{skillsContentBDD.map((skill) => (
							<div className="app__skills-item">
								<div
									className="app__flex"
									style={{ marginBottom: "-20px" }}
								>
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Frameworks de Test</h2>
					<div className="app__skills-list2">
						{skillsContentTest.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="skills-heading">Autre</h2>
					<div className="app__skills-list">
						{skillsContentAutre.map((skill) => (
							<div className="app__skills-item">
								<div className="app__flex">
									<img
										src={skill.skillIcon}
										alt={skill.skillName}
									/>
								</div>
								<p className="p-text">{skill.skillName}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <div className="row"> */}
			{/* <div className="col-lg-3 m-15px-tb ">
					{skillsContent.map((val, i) => (
						<div className="col-6 col-md-3 mb-3 mb-sm-5 flex flex-wrap justify-center">
							<div className="skill_wrapper" key={i}>
								<div className="icon-wrapper">
									<img
										src={val.skillIcon}
										alt={val.skillName}
										className="centered-icon"
									/>
								</div>
								<h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
									{val.skillName}
								</h6>
							</div>
						</div>
					))}
				</div>
				<div className="col-lg-3 m-15px-tb ">
					{skillsContent.map((val, i) => (
						<div className="col-6 col-md-3 mb-3 mb-sm-5 flex flex-wrap justify-center">
							<div className="skill_wrapper" key={i}>
								<div className="icon-wrapper">
									<img
										src={val.skillIcon}
										alt={val.skillName}
										className="centered-icon"
									/>
								</div>
								<h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
									{val.skillName}
								</h6>
							</div>
						</div>
					))}
				</div> */}
			{/* </div> */}
		</>
	);
};

export default Skills;
