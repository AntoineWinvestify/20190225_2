const { expect } = require('chai')
/* eslint-disable */
let token = ''

const users = (app) => {
	describe('Authorization Endpoints', () => {
		describe('# Login', () => {
			it('should return login error', (done) => {
				app.post('/users/login.json')
					.send({'email': '', 'password': ''})
					.then((res) => {
						const data = res.body
						expect(res.statusCode).equal(401)
						expect(data).to.be.an('object').that.is.not.empty
						expect(data.name).to.be.a('string')
						expect(data.message).to.be.a('string')
						expect(data.url).to.be.a('string')
						done()
					})
					.catch(err => {
						console.log(err)
					})
			})
	
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

			it('should return new token', (done) => {
				app.post('/users/refresh-token.json')
					.set('Authorization', `Bearer ${token}`)
					.then((res) => {
						const data = res.body

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
	})
}

module.exports = users
