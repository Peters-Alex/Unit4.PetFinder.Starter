// import the pets array from data.js
const pets = require('./data');

// init express 
const express = require('express');
//initialize the path
const path = require("path");
//init the name of the server app
const app = express();

const PORT = 8080;

app.use(express.static(path.join
    (__dirname,"public")));


// GET - / - returns homepage
//request and response
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database, pulls all the pets with no styling
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
res.send(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.route;

    const foundOwner = pets.filter((pets) => 
        pets.owner.includes(owner)
    );
    res.send(foundOwner);

    // // find the pet in the pets array
    // const pet = pets.find(pet => pet.owner === owner);

    // // send the pet as a response
    // res.send(pet);
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const nameOfThePet = req.params.name;

    const petName = pets.find(individualPetName => {
        individualPetName.name === nameOfThePet
    })
    res.send(petName);

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    res.send(pet);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port  ${PORT}`);
});

module.exports = app;