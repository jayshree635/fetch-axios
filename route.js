const route = require('express').Router();
const data = require('./controller')

route.get('/sort-by-name',data.fetchData)
route.get('/sort-by-version',data.getAscendingData)
route.get('/sort-by-id',data.sortById)

module.exports = route