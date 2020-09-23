// Setup
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();
const open = require('open');
const app = express();
app.use(express.static('dist'));
app.use(require("body-parser").json());
app.listen(8080, async function () {
    console.log('Example app listening on port 8080!');
    await open('http://localhost:8080', {app: 'google chrome'})
});

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: process.env.APP_ID,
    application_key: process.env.API_KEY
});

// Do the job!
app.post('/url', (req, res) => {
    textapi.classify({url: req.body.url}, (error, response) => {
        if (error !== null) return;
        res.send(response.categories[0])
    });
});
