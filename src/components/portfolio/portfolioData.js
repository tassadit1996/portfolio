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

import shopOHome from "../../assets/img/portfolio/ShopO/home.png";
import shopOShop from "../../assets/img/portfolio/ShopO/shop.png";
import shopOProduct from "../../assets/img/portfolio/ShopO/product.png";
import shopOPayement from "../../assets/img/portfolio/ShopO/payement.png";
import shopOProfile from "../../assets/img/portfolio/ShopO/profile.png";
import shopOChat from "../../assets/img/portfolio/ShopO/chat.png";

import shopOProReview from "../../assets/img/portfolio/ShopO/review.png";
import shopOProAdmin from "../../assets/img/portfolio/ShopO/admin.png";

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
				github: "https://github.com/tassadit1996/dev-over-flow",
				language:
					"Next.js, Tailwind CSS, Clerk, MongoDB, OpenAI API, RapidAPI",
			},
		],
	},
	{
		id: 3,
		type: "ShopO",
		image: [
			shopOHome,
			shopOShop,
			shopOProduct,
			shopOPayement,
			shopOProfile,
			shopOChat,
			shopOProReview,
			shopOProAdmin,
		],
		tag: ["appWeb"],
		delayAnimation: "100",
		modalDetails: [
			{
				description:
					"ShopO permet à ses utilisateurs de devenir des vendeurs et de gérer leurs boutiques en ajoutant des produits à vendre. L'administrateur a le contrôle sur les fonctionnalités des vendeurs. Les visiteurs peuvent passer commande et acheter des produits.",
				githubFront: "Front-end et Back-end",

				githubLinkFront:
					"https://github.com/tassadit1996/Multi_vondor_E_shop",

				language:
					"React JS, Redux, Tailwind CSS, Paypal, Node JS, Express JS, Mongo DB, JWT, Socket.io ",
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
