const { expect } = require('chai')
/* eslint-disable */
let token = ''

const users = (app) => {
	describe('Company Endpoints', () => {
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
		describe('# Get Companies [Bad Token]', () => {
			it('should return error [401 Unauthorized]', (done) => {
				app.get('/companies.json')
					.set('Authorization', 'Bearer dkskskdsjd')
					.set('contentType', 'application/json')
					.then((res) => {
						expect(res.statusCode).equal(401)
					})
					.catch(err => {
						console.log(err)
					}) 
			})
		})
		describe('# Get Companies', () => {
			it('should return an list of companies', (done) => {
				app.get('/companies.json')
					.set('Authorization', `Bearer ${token}`)
					.then((res) => {
						const data = res.body
						const company = data[0] || {}
						expect(res.statusCode).equal(200)
						expect(data).to.be.an('array').that.is.not.empty
						expect(company).to.be.an('object').that.is.not.empty
						expect(company.id).to.be.a('string')
						expect(company.company_name).to.be.a('string')
						expect(company.company_url).to.be.a('string')
						expect(company.company_country).to.be.a('string')
						expect(company.company_country_name).to.be.a('string')
						expect(company.company_privacy_url).to.be.a('string')
						expect(company.company_terms_url).to.be.a('string')
						expect(company.company_logo_GUID).to.be.a('string')
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
