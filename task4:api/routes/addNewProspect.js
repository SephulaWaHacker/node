const express = require('express')
const router = express.Router();
const createProspect = require('../controllers/addNewProspect')

router.post('/api/v1.1/addNewProspect', createProspect);

module.exports = router; 