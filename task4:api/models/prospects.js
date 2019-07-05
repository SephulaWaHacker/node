const mongoose = require("mongoose");

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

module.exports = Prospects