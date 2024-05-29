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

import TaxiAppMap from "../../assets/img/portfolio/Taxi App/map.png";
import TaxiAppRegister from "../../assets/img/portfolio/Taxi App/register.png";
import TaxiAppAccept from "../../assets/img/portfolio/Taxi App/accept.png";
import TaxiAppDrawer from "../../assets/img/portfolio/Taxi App/drawer.png";
import TaxiAppLocation from "../../assets/img/portfolio/Taxi App/location.png";
import TaxiAppLocation2 from "../../assets/img/portfolio/Taxi App/location2.png";
import TaxiAppProLogin from "../../assets/img/portfolio/Taxi App/login.png";
import TaxiAppProPayments from "../../assets/img/portfolio/Taxi App/payments.png";
import TaxiAppVerify from "../../assets/img/portfolio/Taxi App/verify.png";

const PortfolioData = [
	{
		id: 1,
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
		id: 2,
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
		type: "Taxi App",
		image: [
			TaxiAppMap,
			TaxiAppRegister,
			TaxiAppAccept,
			TaxiAppDrawer,
			TaxiAppLocation,
			TaxiAppLocation2,
			TaxiAppProLogin,
			TaxiAppProPayments,
			TaxiAppVerify,
		],
		tag: ["appMob"],
		delayAnimation: "0",
		modalDetails: [
			{
				description:
					"Une application de réservation de taxi avec deux parties, la partie conducteur et la partie passager.",
				githubFront: "Front-end et Back-end",

				githubLinkFront: "https://github.com/tassadit1996/Taxi-App",

				language:
					"React Native, Redux, TypeScript, Node, Express, MongoDB",
			},
		],
	},
	// {
	// 	id: 5,
	// 	type: "Marketplace App",
	// 	image: [TaxiAppVerify],
	// 	tag: ["appMob"],
	// 	delayAnimation: "100",
	// 	modalDetails: [
	// 		{
	// 			description: "Application mobile pour des vendeurs tiers.",
	// 			githubFront: "Front-end",
	// 			githubBack: "Back-end",
	// 			githubLinkFront:
	// 				"https://github.com/tassadit1996/marketplace-app",
	// 			githubLinkBack:
	// 				"https://github.com/tassadit1996/marketplace-server",

	// 			language:
	// 				"React Native, Node.js, Express js, MongoDB, Cloudinary,TypeScript",
	// 		},
	// 	],
	// },
	// {
	// 	id: 6,
	// 	type: "Fortuny conseil",
	// 	image: [TaxiAppVerify],
	// 	tag: ["wordpress"],
	// 	delayAnimation: "100",
	// 	modalDetails: [
	// 		{
	// 			description: "Application mobile pour des vendeurs tiers.",
	// 			link: "Front-end",

	// 			language:
	// 				"Wordpress, Php, MySQL, HTML5, SCSS, CSS3, Javascript",
	// 		},
	// 	],
	// },
	// {
	// 	id: 7,
	// 	type: "Portail SCPI",
	// 	image: [TaxiAppVerify],
	// 	tag: ["wordpress"],
	// 	delayAnimation: "100",
	// 	modalDetails: [
	// 		{
	// 			description: "Application mobile pour des vendeurs tiers.",
	// 			link: "Front-end",

	// 			language:
	// 				"Wordpress, Php, MySQL, HTML5, SCSS, CSS3, Javascript",
	// 		},
	// 	],
	// },
	// {
	// 	id: 8,
	// 	type: "Portfolio",
	// 	image: [TaxiAppVerify],
	// 	tag: ["wordpress"],
	// 	delayAnimation: "100",
	// 	modalDetails: [
	// 		{
	// 			description: "Application mobile pour des vendeurs tiers.",
	// 			link: "Front-end",

	// 			language:
	// 				"Wordpress, Php, MySQL, HTML5, SCSS, CSS3, Javascript",
	// 		},
	// 	],
	// },
];

export default PortfolioData;
