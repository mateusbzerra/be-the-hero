const routes = require('express').Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.get('/ongs', OngController.index)

routes.post('/ongs', OngController.store)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)
routes.post('/sessions', SessionController.create)

module.exports = routes
