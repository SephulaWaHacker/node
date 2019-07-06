const express = require('express');
const app = express();
const path = require('path');
const open = require('open');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('.'));
app.set('view engine', 'pug')
app.set('./views', path.join(__dirname, './views'))

app.get('/weather', (req, res) => {
	res.render('home');
});

app.get('/results', (req, res) => {
	let city = req.query.city; 
  res.render('results', {
  	city: city
  })
});

const server = app.listen(8880, () => {
	var host = "http://127.0.0.1:8880";
	console.log('App listening at %s', host);
	open(host);
});