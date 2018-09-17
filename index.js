const filepath = './placed.csv';
const csv=require('csvtojson');
const calculate = require('./functions');

csv()
    .fromFile(filepath)
    .then((list) => {
        calculate.offers(list);
    });

