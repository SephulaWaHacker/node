const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Prospects = require('../models/prospects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const deleteAllProspects = (req,res)=> {
	Prospects.deleteMany((err, prospect) => {
		if(err) return console.log(err);
		res.status(200).send({
			success: true,
			message: "all prospects deleted successfully",
			prospect
		});
	});
};

module.exports = deleteAllProspects;