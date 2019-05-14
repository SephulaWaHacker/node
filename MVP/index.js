const express = require('express');
const app = express();
const open = require('open');

app.use(express.static('.'));

let server = app.listen(8080, () => {
	let host = "http://127.0.0.1:8080";;
	console.log('App listening at %s', host);
	open(host);
});
