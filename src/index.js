// importing dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the express app
const app = express();

// defining an array to work as the database
const ads = [
    {
        firstName: 'George', 
        lastName: 'Balls'
    },
    {
        firstName: 'Henry',
        lastName: 'Cup'
    },
    {
        firstName: 'William',
        lastName: 'Williamshire'
    },
    {
        firstName: 'Blade',
        lastName: 'Runner'
    }
];

// adding helmet for api security
app.use(helmet());

// using bodyParser to parse json bodies into js objects
app.use(bodyParser.json());

// enabling cors for all requests
app.use(cors());

// adding morgan to log https requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});

