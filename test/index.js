const supertest = require('supertest')
let app = supertest.agent(process.env.URLTEST || 'http://testing2.azarus.es/api/1.0')


require('./authorization.test')(app)
require('./companies.test')(app)
require('./linkAccounts.test')(app)

