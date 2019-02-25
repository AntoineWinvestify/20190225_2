require('dotenv').config()

const env = process.env.NODE_ENV || 'development'

const config = {
	env: {
		current: env,
		is: {
			development: env === 'development',
			testing: env === 'testing',
			production: env === 'production'
		}
	},
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.NODE_PORT || process.env.PORT || 3000,
		urlApi: process.env.URL_API || 'http://testing2.azarus.es/api/1.0',
		baseUrlApi: process.env.BASE_URL_API || 'http://testing2.azarus.es/'
	},
	cookie: {
		session: {
			keys: [process.env.COOKIE_SESSION_KEY || '-8jd*#9o&iQAoCxd52hhvxCfuNMcQBXP']
		}
	}
}

module.exports = Object.freeze(config)
