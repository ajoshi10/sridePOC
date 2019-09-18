const axios = require('axios');
const express = require('express');
const app = express();
const port = 5000;
const utils = require('./lib/utils')
var logger = require('./lib/logger')

//initialize logger
logger.getLogger().then(()=>{
    logger.info(`Logger initialized successfully`)
},(err)=>{
    logger.error(`Logger initialized failed`)
})


app.get('/test/prime', function (req, res) {
    let url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`;
    axios({
        method: 'get',
        url
    })
        .then(function (response) {
            let result
            let currentTs = new Date();
            let day = currentTs.getDate();
            var isPrime = utils.isPrime(day);            
            result = isPrime ? JSON.stringify(response.data) : `Number ${day} is not a prime number.`
            res.send(result);
            logger.info(`Successfully processed request for number ${day} as input.`)
        })
        .catch(function (error) {
            //console.log(error);
            logger.error(`Got error while processing ${day} as input.`)
        });
});

var server = app.listen(port);



