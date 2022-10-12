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
        lastName: 'Balls',
        createdAt: '2022-04-22 10:34:23.55'
    },
    {
        firstName: 'Henry',
        lastName: 'Cup',
        createdAt: '2022-04-22 10:34:23.55'

    },
    {
        firstName: 'William',
        lastName: 'Williamshire',
        createdAt: '2022-04-22 10:34:23.55'

    },
    {
        firstName: 'Blade',
        lastName: 'Runner',
        createdAt: '2022-04-22 10:34:23.55'
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

