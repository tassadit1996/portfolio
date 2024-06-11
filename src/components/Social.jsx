import React from "react";

const SocialShare = [
	{
		iconName: "fa fa-facebook",
		link: "https://www.facebook.com/profile.php?id=100078085666946",
	},
	{
		iconName: "fa fa-github",
		link: "https://github.com/tassadit1996",
	},
	{
		iconName: "fa fa-linkedin",
		link: "https://www.linkedin.com/in/tassadit-maghni/",
	},

	{ iconName: "fa fa-envelope", link: "mailto:maghni.tassadit@gmail.com" },
];

const Social = () => {
	return (
		<ul className="social list-unstyled pt-1 mb-5">
			{SocialShare.map((val, i) => (
				<li key={i}>
					<a href={val.link} target="_blank" rel="noreferrer">
						<i className={val.iconName}></i>
					</a>
				</li>
			))}
		</ul>
	);
};

export default Social;
