const filepath = './placed.csv';
const csv = require('csvtojson');
const calculate = require('./functions');

csv()
    .fromFile(filepath)
    .then((list) => {
        calculate.offers(list);
        calculate.placed(list);
        calculate.doubleOffers(list);
        calculate.aOneOffers(list);
        calculate.aOnePlaced(list);
        calculate.offersBatch(list);
    });