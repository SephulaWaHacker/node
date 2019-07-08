const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Prospects = require('../models/prospects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const viewProspects = (res,req)=> {
	Prospects.find((err, prospects) => {
		if (err) return console.error(err);
		else if (prospects.length === 0)
			return res.status(404).send({
				success: false,
				message:"no prospects found"
			})
		else if (prospects) 
			return res.status(200).send({
			success: true,
			message: "prospects retrieved successfully",
			prospects: prospects
		});
	});
};

module.exports = viewProspects;