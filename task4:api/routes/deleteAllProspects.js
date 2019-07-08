const express = require('express');
const router = express.Router();
const deleteAllProspects = require('../controllers/deleteAllProspects');

router.delete('/api/v1.1/deleteAllProspects', deleteAllProspects);

module.exports = router;