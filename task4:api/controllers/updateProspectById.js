const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Prospects = require('../models/prospects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const updateProspectById = (req,res)=> {
	if (!req.body.name) {
		return res.status(400).send({
			success: "false",
			message: "name is required"
		});
	} else if (!req.body.surname) {
		return res.status(400).send({
			success: "false",
			message: "surname is required"
		});
	} else if (!req.body.age) {
		return res.status(400).send({
			success: "false",
			message: "age is required"
		});
	} else if (!req.body.gender){
		return res.status(400).send({
			success: "false",
			message: "gender is required"
		});
	} else if (!req.body.email) {
		return res.status(400).send({
			success: "false",
			message: "email is required"
		});
	} else if (!req.body.cell_number) {
		return res.status(400).send({
			success: "false",
			message: "Cell number is required"
		});
	} else if (!req.body.location) {
		return res.status(400).send({
			success: "false",
			message: "location is required"
		});
	} else if (!req.body.relocate) {
		return res.status(400).send({
			success: "false",
			message: "relocate is required"
		});
	} else if (!req.body.course) {
		return res.status(400).send({
			success: "false",
			message: "course is required"
		});
	}

	const updateProspect = {
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		gender: req.body.gender,
		email: req.body.email,
		cell_number: req.body.cell_number,
		location: req.body.location,
		relocate: JSON.parse(req.body.relocate),
		course: req.body.course
	};

	let id = parseInt(req.params.id, 10);
	Prospects.findOneAndUpdate({id: id}, updateProspect, (err, prospect) => {
		if(err) return console.log(err);
		return res.status(200).send({
			success: true,
			message: "prospect updated successfully",
			prospect: updateProspect
		});
	});
};

module.exports = updateProspectById;