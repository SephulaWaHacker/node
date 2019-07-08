const express = require('express')
const router = express.Router();
const viewAllProspects = require('../controllers/viewAllProspects')

router.get('/api/v1.1/allProspects', viewAllProspects);

module.exports = router;