module.exports = {
	globDirectory: "public/",
	globPatterns: ["**/*.{html,json,svg,css,js}"],
	swDest: "public/sw.js",
	skipWaiting: true,
	clientsClaim: true,
	runtimeCaching: [
		{
			urlPattern: /\.(?:html|css|js)$/,
			handler: "StaleWhileRevalidate",
		},
		{
			urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
			handler: "CacheFirst",
			options: {
				cacheName: "images",
				expiration: {
					maxEntries: 60,
					maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
				},
			},
		}
	],
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
