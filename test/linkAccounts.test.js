const { expect } = require('chai')
/* eslint-disable */
let token = ''
let accountToLink = {}
const user = {
	company_id: '7',
	linkedaccount_username: 'antoine.de.poorter@gmail.com',
	linkedaccount_password: 'P_q159x3'	
}
const users = (app) => {
	describe('Link Accounts Endpoints', () => {
		describe('# Login', () => {
			it('should login correctly', (done) => {
				app.post('/users/login.json')
					.send({ username: 'testing3@gmail.com', password: '8870mit' })
					.then((res) => {
						const data = res.body
						token = data.token

						expect(res.statusCode).equal(200)
						expect(data).to.be.an('object').that.is.not.empty
						expect(data.token).to.be.a('string')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})
		})
		describe('# Get Linked Accounts', () => {
			it('should return error [401 Unauthorized][Bad Token]', (done) => {
				app.get('/linkedaccounts.json?linkedaccount_status=ACTIVE')
					.set('Authorization', 'Bearer dkskskdsjd')
					.set('contentType', 'application/json')
					.then((res) => {
						expect(res.statusCode).equal(401)
					})
					.catch(err => {
						console.log(err)
					}) 
			})
			it('should return an list of accounts and page info', (done) => {
				app.get('/linkedaccounts.json?linkedaccount_status=ACTIVE')
					.set('Authorization', `Bearer ${token}`)
					.then((res) => {
						const response = res.body
						const account = response.data[0] || {}
						const linkedaccount = account.Linkedaccount

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.tooltip_display_name).to.be.a('string')
						expect(response.service_status).to.be.a('string')
						expect(response.service_status_display_message).to.be.a('string')
						expect(response.data).to.be.an('array').that.is.not.empty
						expect(account).to.be.an('object').that.is.not.empty
						expect(account.company_id).to.be.a('string')
						expect(linkedaccount).to.be.an('object').that.is.not.empty
						expect(linkedaccount.linkedaccount_accountIdentity).to.be.a('string')
						expect(linkedaccount.linkedaccount_accountDisplayName).to.be.a('string')
						expect(linkedaccount.linkedaccount_currency).to.be.a('string')
						expect(linkedaccount.linkedaccount_status).to.be.a('string')
						// expect(linkedaccount.linkedaccount_visualStatus).to.be.a('string')
						expect(linkedaccount.linkedaccount_apiStatus).to.be.a('string')
						expect(account.linkedaccount_username).to.be.a('string')
						expect(account.links).to.be.an('array').that.is.not.empty

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})					
		})
		describe('# Pre-check Linked Accounts', () => {
			it('should return error [Bad Company]', (done) => {
				app.post('/linkedaccounts/pre-check.json')
					.set('Authorization', `Bearer ${token}`)
					.send({ 
						company_id: '8',
						linkedaccount_username: user.linkedaccount_username,
						linkedaccount_password: user.linkedaccount_password
					})
					.then((res) => {
						const response = res.body
						const error = response.error

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.error).to.be.an('object').that.is.not.empty
						expect(error.error_message).to.be.a('string')
						expect(error.error_name).to.be.a('string')
						expect(error.error_information_link).to.be.a('string')
						expect(error.error_details).to.be.an('array')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})				
			it('should return error [Bad linkedaccount_username]', (done) => {
				app.post('/linkedaccounts/pre-check.json')
					.set('Authorization', `Bearer ${token}`)
					.send({ 
						company_id: user.company_id,
						linkedaccount_username: '',
						linkedaccount_password: user.linkedaccount_password
					})
					.then((res) => {
						const response = res.body
						const error = response.error

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.error).to.be.an('object').that.is.not.empty
						expect(error.error_message).to.be.a('string')
						expect(error.error_name).to.be.a('string')
						expect(error.error_information_link).to.be.a('string')
						expect(error.error_details).to.be.an('array')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})
			it('should return error [Bad linkedaccount_password]', (done) => {
				app.post('/linkedaccounts/pre-check.json')
					.set('Authorization', `Bearer ${token}`)
					.send({ 
						company_id: user.company_id,
						linkedaccount_username: user.linkedaccount_username,
						linkedaccount_password: ''
					})
					.then((res) => {
						const response = res.body
						const error = response.error

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.error).to.be.an('object').that.is.not.empty
						expect(error.error_message).to.be.a('string')
						expect(error.error_name).to.be.a('string')
						expect(error.error_information_link).to.be.a('string')
						expect(error.error_details).to.be.an('array')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})				
			it('should return an array of accounts', (done) => {
				app.post('/linkedaccounts/pre-check.json')
					.set('Authorization', `Bearer ${token}`)
					.send(user)
					.then((res) => {
						const response = res.body
						const account = response.accounts[0] || {}
						accountToLink = account

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.accounts).to.be.an('array').that.is.not.empty
						// expect(account.linkedaccount_currency).to.be.a('string')
						expect(account.linkedaccount_identity).to.be.a('string')
						expect(account.linkedaccount_platform_display_name).to.be.a('string')
						expect(account.linkedaccount_linkingstatus).to.be.a('boolean')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})
			it('should link an account', (done) => {
				app.post('/linkedaccounts.json')
					.set('Authorization', `Bearer ${token}`)
					.send({ 
						company_id: user.company_id,
						linkedaccount_username: user.linkedaccount_username,
						linkedaccount_password: user.linkedaccount_password,
						linkedaccount: [{ 
							linkedaccount_identity: accountToLink.linkedaccount_identity,
							linkedaccount_platform_display_name: accountToLink.linkedaccount_platform_display_name,
							linkedaccount_currency: accountToLink.linkedaccount_currency 
						}] 
					})
					.then((res) => {
						const response = res.body
						const account = response.data.linkedaccount

						expect(res.statusCode).equal(200)
						expect(response).to.be.an('object').that.is.not.empty
						expect(response.data).to.be.an('object').that.is.not.empty
						expect(account).to.be.an('object').that.is.not.empty
						expect(account.company_id).to.be.a('string')
						expect(account.id).to.be.a('string')
						expect(account.linkedaccount_currency).to.be.a('string')
						expect(account.linkedaccount_status).to.be.a('string')
						expect(account.linkedaccount_username).to.be.a('string')
						expect(account.linkedaccount_password).to.be.a('string')
						expect(account.linkedaccount_identity).to.be.a('string')
						expect(account.linkedaccount_platform_display_name).to.be.a('string')
						expect(account.linkedaccount_visual_state).to.be.a('string')
						expect(account.links).to.be.an('array')
						expect(response.feedback_message_user).to.be.a('string')

						done()
					})
					.catch(err => {
						console.log(err)
					})
			})
		})		
	})
}

module.exports = users
