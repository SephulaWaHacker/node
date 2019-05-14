const express = require("express");
const app = express();
const open = require('open')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get("/form", function(req, res) {
   let html = "";
   html += "<body>";
   html += "<form action='/formResponse'  method='post' name='form1'>";
   html += "Name:</p><input type= 'text' name='name'>";
   html += "Email:</p><input type='text' name='email'>";
   html += "address:</p><input type='text' name='address'>";
   html += "Cellphone Number:</p><input type='text' name='cellphoneno'>";
   html += "<input type='submit' value='submit'>";
   html += "</form>";
   html += "</body>";
   res.send(html);
});

app.post("/formResponse", urlencodedParser, function(req, res) {
   let response = {
      Name: req.body.name,
      Email: req.body.email,
      Address: req.body.address,
      "Cellphone Number": req.body.cellphoneno
   };
   res.send(JSON.stringify(response));
});

var server = app.listen(8000, () => {
   var host = "http://127.0.0.1:8000";
   console.log("app listening at %s/form ", host);
});
