import request from 'request-promise'

import { Router } from 'express'
import { marketplace, getCompany } from '../fixtures/companies'
import { server } from '../server.config'
import { getToken } from '../lib/token'

// import { parseToQuery } from '../lib/utils'

const router = Router()

router.get('/lending', getToken, (req, res, next) => {
	const token = req.token
	const options = {
		method: 'GET',
		url: `${server.urlApi}/companies.json`,
		headers: {
			'Authorization': `Bearer ${token}`
		},
		json: true
	}

	request(options)
	.then((data) => {
		try {
			data = JSON.parse(data)
		} catch (error) {
			data = data
		}

		res.status(200).json(data)
	})
	.catch((err) => {
		next(err)
	})
})

router.get('/marketplace', (req, res, next) => {
	setTimeout(() => {
		res.json(marketplace)
	}, 5000)
})

router.get('/marketplace/:id', async (req, res, next) => {
	setTimeout(() => {
		// res.json(getCompany(req.params.id) || {})
		res.json(getCompany(req.params.id))
	}, 5000)
})

export default router
