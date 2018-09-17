const filepath = './placed.csv';
const csv=require('csvtojson');

csv()
    .fromFile(filepath)
    .then((jsonObj) => {
        console.log(JSON.stringify(jsonObj, undefined, 4));
    });

