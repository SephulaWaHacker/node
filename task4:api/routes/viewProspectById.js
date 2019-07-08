const express = require('express')
const router = express.Router();
const viewProspectById = require('../controllers/viewProspectById')

router.get('/api/v1.1/viewProspect/:id', viewProspectById);

module.exports = router;