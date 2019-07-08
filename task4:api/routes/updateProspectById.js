const express = require('express')
const router = express.Router();
const updateProspect = require('../controllers/updateProspectById')

router.put('/api/v1.1/updateProspect/:id', updateProspect);

module.exports = router;