const express = require("express");
const app = express();
const open = require('open')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('.'));

app.get("/form", function(req, res) {
   res.sendFile( __dirname +"/form.html");
});

app.get("/json", (req, res) => {
   let json_response = {
      title: req.query.title,
      "first name": req.query.fname,
      "middle initial": req.query.initial,
      "last name": req.query.lname,
      email: req.query.email,
      "cell number": req.query.cellnumber,
      airline: req.query.airline,
      destination: req.query.destination,
      "leave date": req.query.leavedate,
      "return date": req.query.returndate,
      "estimated cost": req.query.estcost,
      "car rental": req.query.carrental,
      hotel: req.query.hotel,
      meals: req.query.meals,
      "total estimate": req.query.totalest,
      "payment method": req.query.payment,
      "purpose of travel": req.query.purpose
   };
   res.send(JSON.stringify(json_response, null, 4));
});

var server = app.listen(8000, () => {
   var host = "http://127.0.0.1:8000";
   console.log("app listening at %s/form ", host);
});
