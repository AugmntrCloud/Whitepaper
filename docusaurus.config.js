const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
	title: "Startup Whitepaper",
	tagline: "",
	url: "https://augmntrcloud.github.io/",
	baseUrl: "/Whitepaper/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "AugmntrCloud", // Usually your GitHub org/user name.
	projectName: "Whitepaper", // Usually your repo name.
	deploymentBranch: "gh-pages",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	themeConfig: {
		navbar: {
			title: "Introduction",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "doc",
					docId: "Introduction",
					position: "left",
					label: "Introduction",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					label: "Twitter",
					href: "https://twitter.com/",
				},
				{
					label: "Discord",
					href: "https://discord.com/",
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} - All rights reserved.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
};

module.exports = config;
