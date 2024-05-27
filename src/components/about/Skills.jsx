import React from "react";
import reactjs from "../../assets/img/reactjs.png";
import nextjs from "../../assets/img/Next.js.jpeg";
import tailwind from "../../assets/img/tailwind.png";
import bootstrap from "../../assets/img/bootstrap.png";
import javascript from "../../assets/img/javascript.png";
import jquery from "../../assets/img/jquery.png";
import scss from "../../assets/img/sass.png";
import redux from "../../assets/img/redux.png";
import nodejs from "../../assets/img/nodejs.png";
import express from "../../assets/img/express.png";
import knex from "../../assets/img/knex.png";
import php from "../../assets/img/php.png";
import reactNative from "../../assets/img/reactNative.png";
import docker from "../../assets/img/docker.png";
import google from "../../assets/img/google.png";
import aws from "../../assets/img/aws.png";
import api from "../../assets/img/api.png";
import mongodb from "../../assets/img/mongodb.png";
import mysql from "../../assets/img/mysql.png";
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
	{ skillIcon: nodejs, skillName: "NODE JS" },
	{ skillIcon: express, skillName: "EXPRESS JS" },
	{ skillIcon: knex, skillName: "KNEX JS" },
	{ skillIcon: php, skillName: "PHP" },
	{ skillIcon: reactNative, skillName: "REACT NATIVE" },
	{ skillIcon: docker, skillName: "DOCKER" },
	{ skillIcon: google, skillName: "GCP" },
	{ skillIcon: aws, skillName: "AWS" },
	{ skillIcon: api, skillName: "API REST" },
	{ skillIcon: mysql, skillName: "MySQL" },
	{ skillIcon: mongodb, skillName: "MONGO DB" },
	{ skillIcon: postgresql, skillName: "POSTGRESQL" },
	{ skillIcon: jest, skillName: "JEST" },
	{ skillIcon: cypress, skillName: "CYPRESS" },
	{ skillIcon: octopus, skillName: "REACT TESTING LIBRARY" },
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
		</>
	);
};

export default Skills;
