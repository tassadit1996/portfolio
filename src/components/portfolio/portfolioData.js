import Podify from "../../assets/img/portfolio/podify/login.png";
import PodifyAdd from "../../assets/img/portfolio/podify/add.png";
import PodifyHome from "../../assets/img/portfolio/podify/home.png";
import PodifyPlayer from "../../assets/img/portfolio/podify/player.png";
import PodifyProfile from "../../assets/img/portfolio/podify/profile.png";
import PodifySettings from "../../assets/img/portfolio/podify/settings.png";

import DevOverFlowHome from "../../assets/img/portfolio/devOverFlow/home.png";
import DevOverFlowAsk from "../../assets/img/portfolio/devOverFlow/ask.png";
import DevOverFlowTags from "../../assets/img/portfolio/devOverFlow/tags.png";
import DevOverFlowAnswer from "../../assets/img/portfolio/devOverFlow/answer.png";
import DevOverFlowProfile from "../../assets/img/portfolio/devOverFlow/profile.png";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";

const PortfolioData = [
	{
		id: 1,
		type: "Podify Player",
		image: [
			Podify,
			PodifyHome,
			PodifyAdd,
			PodifyProfile,
			PodifyPlayer,
			PodifySettings,
		],
		tag: ["appMob"],
		delayAnimation: "0",
		modalDetails: [
			{
				description: "Application mobile de streaming musical",
				githubFront: "Front-end",
				githubBack: "Back-end",
				githubLinkFront:
					"https://github.com/tassadit1996/podifyApp-front.git",
				githubLinkBack:
					"https://github.com/tassadit1996/podifyApp-back.git",

				language:
					"React Native, Redux, TypeScript, Node, Express, MongoDB",
			},
		],
	},
	{
		id: 2,
		type: "Dev Overflow",
		image: [
			DevOverFlowHome,
			DevOverFlowAsk,
			DevOverFlowTags,
			DevOverFlowAnswer,
			DevOverFlowProfile,
		],
		tag: ["appWeb"],
		delayAnimation: "100",
		modalDetails: [
			{
				description:
					"Espace de questions-réponses pour les développeurs",
				github: "",
				// link: "ssxxx",
				// preview: "sxsxs",
				language:
					"Next.js, Tailwind CSS, Clerk, MongoDB, OpenAI API, RapidAPI",
			},
		],
	},
	{
		id: 3,
		type: "slider project",
		image: Image3,
		tag: [],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "Website",
				client: "Themeforest",
				language: " HTML, CSS, Javascript",
				preview: "www.envato.com",
				link: "https://www.envato.com",
			},
		],
	},
	{
		id: 4,
		type: "local project",
		image: Image4,
		tag: ["logo", "video"],
		delayAnimation: "0",
		modalDetails: [
			{
				project: "video",
				client: "Videohive",
				language: " Adobe After Effects",
				preview: "www.videohive.net",
				link: "https://www.videohive.net",
			},
		],
	},
	{
		id: 5,
		type: "saas project",
		image: Image5,
		tag: ["logo"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "Web Application",
				client: "Themeforest",
				language: "HTML, CSS, ReactJS",
				preview: "www.envato.com",
				link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
			},
		],
	},
	{
		id: 6,
		type: "mockup project",
		image: Image6,
		tag: ["logo", "mockup"],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "Website",
				client: "Themeforest",
				language: "HTML, CSS, Javascript",
				preview: "www.pexels.com",
				link: "https://www.pexels.com",
			},
		],
	},
];

export default PortfolioData;
