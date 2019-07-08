## Getting started 
	- npm install -g nodemon forever

# Task1 : Http server (http, get, serve static files) 
It's a script which server a memory game on port 8080.

Instructions
	- git clone https://github.com/SweetBeard30/node.git
	- cd node/task1:memory_game
	- npm install
	- npm start
	- view at [Memory game](http://127.0.0.1:8080)

# Task2 : Request handling (basic routing, post, form, middleware)
Is a web app which takes a user's form input and displays it on screen as a Json object.

Instructions
	- git clone https://github.com/SweetBeard30/node.git
	- cd node/task2:node_form
	- npm install
	- npm start
	- view at [Form app](http://127.0.0.1:8000/form)

# Task3 : HTML template engine (Javascript templates, fetch, api)
Is a web app which displays Weather conditions, area, country and temparature of a location the user has chosen.

Instructions
	- git clone https://github.com/SweetBeard30/node.git
	- cd node/task3:weatherApp
	- npm install
	- npm start
	- view at [Weather app](http://127.0.0.1:8880/weather)

# Task4 : A registration restful API ( API end-point,routing, MongoDB, database schema)
Is a rest api server which can capture a new prospect, display all captured prospects, display one prospect by id, update one prospect by it's id, delete all prospects and delete one prospects by it's id.

Instructions
	- git clone https://github.com/SweetBeard30/node.git
	- cd node/task4:api
	- npm install
	- npm start
	- Use Postmam or Insomnia rest api clients to test end-points
	- listens listens to port:9001
	- The back-end service provides the following end points:
		1./api/v1.1/addNewProspect (add a new prospect)
		2./api/v1.1/deleteAllProspects (delete all prospects)
		3./api/v1.1/deleteProspect/:id (delete a single prospect)
		4./api/v1.1/allProspects (view all prospects)
		5./api/v1.1/viewProspect/:id (view a single prospect)
		6./api/v1.1/updateProspect/:id (Update a single prospect)

