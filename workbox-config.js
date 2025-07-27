module.exports = {
	globDirectory: "public/",
	globPatterns: ["**/*.{html,json,svg}"],
	swDest: "public/sw.js",
	skipWaiting: true,
	clientsClaim: true,
	runtimeCaching: [
		{
			urlPattern: /\.html$/,
			handler: "StaleWhileRevalidate",
		},
	],
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
