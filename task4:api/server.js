const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let server = app.listen(9000, () => {
	let host = "http://127.0.0.1:9000";
	console.log("App listening at %s", host);
	open(host);
});