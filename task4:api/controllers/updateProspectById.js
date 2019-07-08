const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Prospects = require('../models/prospects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const viewProspectById = (req,res)=> {
	let id = parseInt(req.params.id, 10);
	Prospects.find((err, prospect) => {
		if(err) return console.log(err);
		else if (prospect.length < id)
			return res.status(404).send({
				success: false,
				message: "prospects not found"
			})
		else prospect.forEach(item => {
				if (item.id === id){	
					return res.status(200).send({
						success: true,
						message: "prospect successfully retrieved",
						prospect: item
					})
				}
			});
	});
};

module.exports = viewProspectById;