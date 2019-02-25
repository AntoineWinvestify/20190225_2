import validate from 'express-validation'
import request from 'request-promise'

import { Router } from 'express'
import { server } from '../server.config'
import { login } from '../lib/validation'
// import { parseToQuery } from '../lib/utils'

const router = Router()

router.post('/', validate(login), async (req, res, next) => {
	const options = {
		method: 'POST',
		url: `${server.urlApi}/users/login.json`,
		body: req.body,
		json: true
	}

	request(options)
		.then((data) => {
			try {
				data = JSON.parse(data)
			} catch (error) {
				data = data
			}

			req.session.user = data
			res.status(200).json(data)
			
		})
		.catch((err) => {
			next(err.response)
		})

})

router.get('/logout', (req, res, next) => {
	delete req.session.user
	res.json({ ok: true })
})

export default router
