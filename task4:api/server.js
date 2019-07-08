const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const addNewProspectRoute = require('./routes/addNewProspect');
const viewAllProspectsRoute = require('./routes/viewAllProspects');
const viewProspectByIdRoute = require('./routes/viewProspectById');
const deleteProspectByIdRoute = require('./routes/deleteProspectById');
const deleteAllProspectsRoute = require('./routes/deleteAllProspects');
const updateProspectByIdRoute = require('./routes/updateProspectById');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(addNewProspectRoute);
app.use(viewAllProspectsRoute);
app.use(viewProspectByIdRoute);
app.use(deleteProspectByIdRoute);
app.use(deleteAllProspectsRoute);
app.use(updateProspectByIdRoute);

let server = app.listen(9001, () => {
	let host = "http://127.0.0.1:9001";
	console.log("App listening at %s", host);
});