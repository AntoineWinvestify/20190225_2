const nodeExternals = require('webpack-node-externals')

module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: 'Winvestify',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Winvestify is a platform that integrates the management of all your investments in P2P Lending platforms in one global dashboard' },
			{ hid: 'keywords', name: 'description', content: 'Investor, Peer to Peer Lending, P2P Lending, Yield, Invest, Interest, High return on investment, dashboard, high ROI, personal loan' },

		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Material+Icons' }
		]
	},
	loading: { color: '#73DC50', failedColor: '#F90000' },
	css: [
		{ src: '~assets/css/style.styl', lang: 'styl' }
	],
	plugins: [
		{ src: '~plugins/i18n.js', injectAs: 'i18n' },
		{ src: '~plugins/vuetify.js' },
		{ src: '~plugins/toast.js', ssr: false },
		// { src: '~plugins/currency.js', ssr: false },
		{ src: '~filters/currency.js', ssr: false }
	],
	build: {
		vendor: ['axios', 'vue-i18n'],
		/*
    ** Run ESLINT on save
    */
		transpile: [
			/^vue-echarts/,
			/\/node_modules\/resize-detector\//
		],
		extend (config, ctx) {
			if (ctx.isDev && process.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			if (ctx.isServer) {
				config.externals = [
					nodeExternals({
						// default value for `whitelist` is
						// [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
						whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/]
					})
				]
			}
		}
	},
	router: {
		middleware: 'i18n'
	}
}
