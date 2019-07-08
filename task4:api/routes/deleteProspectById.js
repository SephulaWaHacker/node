const express = require('express')
const router = express.Router();
const deleteProspectById = require('../controllers/deleteProspectById')

router.delete('/api/v1.1/deleteProspect/:id', deleteProspectById);

module.exports = router;