import request from 'request-promise'
import validate from 'express-validation'

import { Router } from 'express'
import { linkAccount, linkAccountPreCheck } from '../lib/validation'
import { server } from '../server.config'
import { getToken } from '../lib/token'


const router = Router()

router.get('/', getToken, (req, res, next) => {
	const token = req.token
	
	const options = {
		method: 'GET',
		url: `${server.urlApi}/linkedaccounts.json?linkedaccount_status=ACTIVE`,
		headers: {
			'Authorization': token
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

router.post('/', getToken, validate(linkAccount), (req, res, next) => {
	const token = req.token
	const { password, username, companyId, linkedAccounts } = req.body
	
	const dataAccount = {
		company_id: companyId,
		password: password,
		username: username,
		linkedaccount: linkedAccounts
	}

	const options = {
		method: 'POST',
		url: `${server.urlApi}/linkedaccounts.json`,
		headers: {
			'Authorization': token
		},
		body: dataAccount,
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

router.delete('/', getToken, (req, res, next) => {
	const token = req.token
	const { href } = req.query

	const options = {
		method: 'DELETE',
		url: `${server.baseUrlApi}/${href}`,
		headers: {
			'Authorization': token
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

router.post('/pre-check', getToken, validate(linkAccountPreCheck), (req, res, next) => {
	const { password, username, companyId } = req.body
	const token = req.token
	
	const dataAccount = {
		'linkedaccount_password' : password,
		'linkedaccount_username' : username,
		'company_id' : companyId
	}
	
	const options = {
		method: 'POST',
		url: `${server.urlApi}/linkedaccounts/pre-check.json`,
		headers: {
			'Authorization': token
		},
		body: dataAccount,
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


export default router
