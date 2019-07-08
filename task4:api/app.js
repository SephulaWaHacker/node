const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/task4", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);


const Prospects = mongoose.model("Prospects", {
	id: Number,
	name: String,
	surname: String,
	age: Number,
	gender: String,
	date: { type: Date, default: Date.now },
	email: String,
	cell_number: Number,
	location: String,
	relocate: Boolean,
	course: String
});

//create new prospect
app.post("/api/v1/makeProspect", (req, res) => {
	// (!req.body.name) ? (res.status(400).send({success: "false",message: "name is required"}))
	// :(!req.body.surname) ? (res.status(400).send({success: "false",message: "surname is required"}))
	// :(!req.body.age) ? (res.status(400).send({success: "false",message: "age is required"}))
	// :(!req.body.gender) ? (res.status(400).send({success: "false",message: "gender is required"}))
	// :(!req.body.email) ? (res.status(400).send({success: "false",message: "email is required"}))
	// :(!req.body.cell_number) ? (res.status(400).send({success: "false",message: "Cell number is required"}))
	// :(!req.body.location) ? (res.status(400).send({success: "false",message: "location is required"}))
	// :(!req.body.relocate) ? (res.status(400).send({success: "false",message: "relocate is required"}))
	// :(!req.body.course) ? (res.status(400).send({success: "false",message: "course is required"}))
	// : null;
	
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

	Prospects.find((err, prospects) => {
		if (err) return console.error(err);
		const prospect = {
			id: prospects.length + 1,
			name: req.body.name,
			surname: req.body.surname,
			age: req.body.age,
			gender: req.body.gender, 
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
			prospect: userInput
		});
	});
});

//view all prospects
app.get("/api/v1/allProspects", (req, res) => {
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
});

//view prospect by id
app.get("/api/v1/viewProspect/:id", (req, res) => {
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
});

//delete prospect by id
app.delete("/api/v1/deleteProspect/:id", (req, res) => {
	let id = parseInt(req.params.id, 10)
	Prospects.deleteOne({id: id}, (err, prospect) => {
		if(err) return console.log(err);
		else if(prospect) 
			return res.status(200).send({
				success: true,
				message: "prospect deleted successfully",
				prospect
			})
	})
});

//delete all prospects
app.delete("/api/v1/deleteAllProspects", (req, res) => {
	Prospects.deleteMany((err, prospect) => {
		if(err) return console.log(err);
		res.status(200).send({
			success: true,
			message: "all prospects deleted successfully",
			prospect
		})
	})
});

//update prospect by id
app.put("/api/v1/updateProspects/:id", (req, res) => {

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
});

let server = app.listen(9000, () => {
	let host = "http://127.0.0.1:9000";
	console.log("App listening at %s", host);
});
