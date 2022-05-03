# Project: WeLoveMovies

## Instructions

I was tasked with both setting up the database and building a number of routes that would be used by the frontend application. For this project, I needed to start by making the necessary changes to the data tier and then proceed to changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.

### General tasks
The following were the tasks I was required to complete

- app.js file and server.js file are correctly configured, with the app.js file exporting the application created from Express.
- make use of the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that does not exist, the server returns a 404 error.
- If a request is made to a route that exists, but the HTTP method is wrong, a 405 error is returned.
- All routes should respond with the appropriate status code and should use a data key in the response.

### Database tables
Five tables will be needed for this project. View the docs/tables/ folder in this project to get more detailed information on each table.

You will need to create migrations for each of these tables and run those migrations.

Seed data is included in this project in the ./src/db/seeds folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.

### Routes
You will create five routes for this project. View the docs/routes/ folder in this project to get more detailed information on each table.

Note that some routes return data dependent on query parameters.

_Note: In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page._

## Acknowledgements 

Starter code, tests, and challenge created by the Thinkful Team for the Engineering Flex program. Only commits made within this repository are my own work.

Please visit the Thinkful website by clicking [here](https://www.thinkful.com/)

## Deployment

This server has been deployed with heroku. To access, please use the following link: [deployed-heroku-server](https://thinkful-welovemovies.herokuapp.com/movies)
