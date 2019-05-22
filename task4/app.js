const express = require("express");
import db from "./db";
const stringify = require("json-stringify-safe");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const open = require("open");
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

mongoose.connect("mongodb://127.0.0.1:27017/task4", { useNewUrlParser: true });

const Prospects = mongoose.model("Prospects", {
	id: Number,
	name: String,
	surname: String,
	age: Number,
	date: { type: Date, default: Date.now },
	email: String,
	cell_number: Number,
	location: String,
	relocate: Boolean,
	course: String
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/v1/prospects", (req, res) => {
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

	Prospects.find((err, prospects) => {
		if (err) return console.error(err);

		const prospect = {
			id: prospects.length + 1,
			name: req.body.name,
			surname: req.body.surname,
			age: req.body.age,
			date: Date(),
			email: req.body.email,
			cell_number: req.body.cell_number,
			location: req.body.location,
			relocate: JSON.parse(req.body.relocate),
			course: req.body.course
		};

		const insertDB = new Prospects(prospect);
		insertDB.save();

		return res.status(201).send({
			success: "true",
			message: "prospect added successfully",
			prospect: prospect
		});
	});
});

app.get("/api/v1/prospects", (req, res) => {
	Prospects.find((err, prospects) => {
		if (err) return console.error(err);
		console.log(prospects);
		return res.status(201).send({
			success: "true",
			message: "all prospect retrieved successfully",
			prospects: prospects
		});
	});
});

app.get("/api/v1/prospects2/:id", (req, res) => {
	/*	db.map(prospect => {
		if (prospect.id === id) {
			return res.send({
				success: "true",

				message: "prospect successfully retrieved",

				prospect
			});
		}
	});*/
	Prospects.find((err, prospect) => {
		prospect.forEach(item => {
			//let getParam = req.params.id.replace(/[^0-9]/g, "");
			let id = parseInt(req.params.id, 10);

			console.log(`item.id is ${item.id} and request id is ${id}`);


			if (item.id == id){	
				console.log('in if statement');
				return res.status(200).send({
					success: "true",

					message: "prospect successfully retrieved",
					
					item
				})
/*				return res.status(200).send({
					success: "true",

					message: "prospect successfully retrieved",

					item
				});*/
			}
		});
	});

/*	return res.status(404).send({
		success: "false",

		message: "prospect does not exist",

		log: "Number of prospect is " + req.params.id
	});*/
});

app.delete("/api/v1/deleteProspect/:id", (req, res) => {
	let getParam = req.params.id.replace(/[^0-9]/g, "");
	let id = parseInt(getParam);
	console.log(id);

	db.map((prospect, index) => {
		if (prospect.id === id) {
			db.splice(index, 1);
			return res.status(200).send({
				success: "true",
				message: "prospect deleted successfuly"
			});
		}
	});

	return res.status(404).send({
		success: "false",
		message: "prospect not found"
	});
});

app.delete("/api/v1/deleteAllProspects", (req, res) => {
	db.length = 0;
	return res.status(200).send({
		success: "true",
		message: "all prospects deleted successfuly"
	});
});

app.put("/api/v1/prospects/:id", (req, res) => {
	let getParam = req.params.id.replace(/[^0-9]/g, "");
	let id = parseInt(getParam);
	console.log(id);

	let prospectFound;
	let itemIndex;
	db.map((prospect, index) => {
		if (prospect.id === id) {
			prospectFound = prospect;
			itemIndex = index;
		}
	});

	if (!prospectFound) {
		return res.status(404).send({
			success: "false",
			message: "prospect not found"
		});
	}

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

	const updatedprospect = {
		id: prospectFound.id,
		name: req.body.name,
		surname: req.body.surname,
		age: req.body.age,
		email: req.body.email,
		cell_number: req.body.cell_number,
		location: req.body.location,
		relocate: req.body.relocate,
		course: req.body.course
	};

	db.splice(itemIndex, 1, updatedprospect);

	return res.status(201).send({
		success: "true",
		message: "prospect added successfully",
		updatedprospect
	});
});

let server = app.listen(9000, () => {
	let host = "http://127.0.0.1:9000";
	console.log("App listening at %s", host);
	open(host);
});
