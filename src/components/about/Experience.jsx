import React from "react";

const experienceContent = [
	{
		year: "   Avril 2022 - Avril 2024",
		position: " Développeur Full Stack",
		compnayName: "STARTY MEDIA Tizi Ouzou (Algérie)",
		details: `● Analyser les besoins et rédiger les spécifications techniques.
		● Concevoir et développer des applications en Node JS, React JS, Knex JS, MySQL, TypeScript et Less.
		● Concevoir et développer des sites web en WordPress, PHP, HTML5, SCSS et JavaScript.
		● Collaborer avec l’équipe UX pour évaluer la faisabilité technique et identifier les risques.
		● Participer aux réunions Scrum et aux différentes phases Agile (Sprint de 2 semaines, lancement, Démo, Rétro, StandUp).
		● Développer des tests unitaires avec Jest et utiliser Docker pour la conteneurisation.`,
	},
	{
		year: "Sep 2020 - Nov 2021",
		position: " Développeur Web et Webmaster",
		compnayName: "LHC Design Tizi Ouzou (Algérie)",
		details: `● Analyser les besoins.
    ● Rédiger les spécifications techniques.
    ● Effectuer la conception et le développement de sites web en Wordpress, Php, Html5, Css3 et Javascript
    ● Maintenance corrective et évolutive des sites web.
    ● Animer les démonstration avec le client`,
	},
];

const Experience = () => {
	return (
		<ul>
			{experienceContent.map((val, i) => (
				<li key={i} className="experience">
					<div className="icon">
						<i className="fa fa-briefcase"></i>
					</div>
					<span className="time open-sans-font text-uppercase">
						{val.year}
					</span>
					<h5 className="poppins-font text-uppercase">
						{val.position}
						<span className="place open-sans-font">
							{val.compnayName}
						</span>
					</h5>
					<p className="open-sans-font">
						<ul>
							{val.details.split("\n").map((detail, index) => (
								<li
									key={index}
									style={{
										marginTop: index !== 0 && -40,
									}}
								>
									{detail.trim()}
								</li>
							))}
						</ul>
					</p>
				</li>
			))}
		</ul>
	);
};

export default Experience;
