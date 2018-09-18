const hashmap = require('hashmap');

var hashMap = (students) => {
    var map = new hashmap();
    for (var i = 0; i < students.length; i++) {
        if (map.get(students[i].ID) === 1) {
            map.set(students[i].ID, 2);
        } else {
            map.set(students[i].ID, 1);
        }
    }
    return map;
}

var offers = (students) => {
    console.log('\nTotal Offers:', students.length);
};

var placed = (students) => {
    var map = hashMap(students);
    console.log('Total Placed:', map.size);
};

var doubleOffers = (students) => {
    var map = hashMap(students);
    var DO = 0;
    map.forEach(function (value, key) {
        if (value === 2) {
            DO++;
        }
    });
    console.log('Double Offers:', DO);
};

var aOneOffers = (students) => {
    var count = 0;
    for (var i = 0; i < students.length; i++) {
        if (students[i].CTC >= 9) {
            count++;
        }
    }
    console.log('\nA1 Offers:', count);
};

var aOnePlaced = (students) => {
    var map = new hashmap();
    for (var i = 0; i < students.length; i++) {
        if (students[i].CTC >= 9) {
            if (map.get(students[i].ID) === 1) {
                map.set(students[i].ID, 2);
            } else {
                map.set(students[i].ID, 1);
            }
        }
    }
    console.log('A1 Placed:', map.size);
};

var offersBatch = (students) => {
    var btech = 0;
    var mtech = 0;
    var mscit = 0;
    for (var i = 0; i < students.length; i++) {
        if (students[i].Branch == 'B.Tech') {
            btech++;
        } else if (students[i].Branch == 'MscIT') {
            mscit++;
        } else {
            mtech++;
        }
    }
    console.log('\n--- Offers ---');
    console.log('B.Tech', btech);
    console.log('M.Tech', mtech);
    console.log('MscIT', mscit);
}

module.exports = {
    offers,
    placed,
    doubleOffers,
    aOneOffers,
    aOnePlaced,
    offersBatch
};