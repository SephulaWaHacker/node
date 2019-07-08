const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Prospects = require('../models/prospects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const deleteProspectById = (req,res)=> {
	let id = parseInt(req.params.id, 10);
	Prospects.deleteOne({id: id}, (err, prospect) => {
		if(err) return console.log(err);
		else if(prospect) 
			return res.status(200).send({
				success: true,
				message: "prospect deleted successfully",
				prospect
			});
	});
};

module.exports = deleteProspectById;