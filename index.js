const filepath = './placed.csv';
const csv = require('csvtojson');
const calculate = require('./functions');

csv()
    .fromFile(filepath)
    .then((list) => {
        calculate.companies(list);
        calculate.offers(list);
        calculate.placed(list);
        calculate.doubleOffers(list);
        calculate.aOneOffers(list);
        calculate.aOnePlaced(list);
        calculate.offersBatch(list);
        calculate.placedBatch(list);
        calculate.mean(list);
        calculate.median(list);
        calculate.mode(list);
    });