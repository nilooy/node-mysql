const { getSchool, createSchool } = require('./controller')

const schoolRoutes = require('express').Router()

// we want to read all the data with this endpoint
schoolRoutes.get('/schools', getSchool)

// create school
schoolRoutes.post('/school/create', createSchool)

module.exports = schoolRoutes