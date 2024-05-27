import React from "react";

const personalInfoContent = [
	{ meta: "Prénom", metaInfo: "Tassadit" },
	{ meta: "Nom", metaInfo: "MAGHNI" },
	{ meta: "Age", metaInfo: "28 ans" },
	{ meta: "Adresse", metaInfo: "Canada" },
	{ meta: "Téléphone", metaInfo: "+15147189215" },
	{ meta: "Email", metaInfo: "maghni.tassadit@gmail.com" },
	{
		meta: "LinkedIn",
		metaInfo: "https://www.linkedin.com/in/tassadit-maghni/",
	},
	{ meta: "Langues", metaInfo: "Français, Anglais, Arabe" },
];

const PersonalInfo = () => {
	return (
		<ul className="about-list list-unstyled open-sans-font">
			{personalInfoContent.map((val, i) => (
				<li key={i}>
					<span className="title">{val.meta}: </span>
					<span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
						{val.metaInfo}
					</span>
				</li>
			))}
		</ul>
	);
};

export default PersonalInfo;
