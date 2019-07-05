const express = require('express')
const router = express.Router();
const create = require('../controllers/createProspect.js')

app.use(router);

router.delete('/api/v1/deleteProspect/:id', (req, res) => {

});