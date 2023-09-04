//Name:Renay Hernandez
//Student ID: 1225941316
//Date: 09/03/2023

//import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Your Express app setup and routes here

//create an instance of express
const app = express();

//We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));

//set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

//create a route for the home page
//The GET route for the form
app.get('/', (req, res)=>{
    //render the form and pass in the current student data
    res.render('index');
});

//create a route for user to enter the numbers
app.post("/calculate", (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", { sum, difference, product, quotient });
});

//start the server on port 4000
//note, we are advertising the service on port number 4000 and not 3000 this time
var port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
