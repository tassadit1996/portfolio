import React from "react";

const educationContent = [
	{
		year: "2018 - 2021",
		degree: "Baccalauréat en systèmes informatique ",
		institute: "Université Mouloud Mammeri (Algérie)",
		details: `  évaluation comparative en cours`,
	},
];

const Education = () => {
	return (
		<ul>
			{educationContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<i className="fa fa-briefcase"></i>
					</div>
					<span className="time open-sans-font text-uppercase">
						{val.year}
					</span>
					<h5 className="poppins-font text-uppercase">
						{val.degree}
						<span className="place open-sans-font">
							{val.institute}
						</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	);
};

export default Education;
