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

var hashBatch = (students, branch) => {
    var map = new hashmap();
    for (var i = 0; i < students.length; i++) {
        if (students[i].Branch === branch) {
            if (map.get(students[i].ID) === 1) {
                map.set(students[i].ID, 2);
            } else {
                map.set(students[i].ID, 1);
            }
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

var placedBatch = (students) => {
    var map = hashBatch(students, 'B.Tech');
    console.log('\n--- Placed ---');
    console.log('B.Tech', map.size);
    var map = hashBatch(students, 'M.Tech');
    console.log('M.Tech', map.size);
    var map = hashBatch(students, 'MscIT');
    console.log('MscIT', map.size);
};

var mean = (students) => {
    var sum = 0;
    for (var i = 0; i < students.length; i++) {
        sum = sum + Number(students[i].CTC, 10);
    }
    console.log('\nMean:', sum / students.length);
};

var median = (students) => {
    var median = 0;
    var arr = [];
    for (var i = 0; i < students.length; i++) {
        arr[i] = Number(students[i].CTC);
    }
    arr.sort();
    if (students.length % 2 === 0) {
        median = (arr[students.length / 2 - 1] + arr[students.length / 2]) / 2;
    } else {
        median = arr[(students.length - 1) / 2];
    }
    console.log('Median:', median);
};

var mode = (students) => {
    var map = new hashmap();
    for (var i = 0; i < students.length; i++) {
        if (map.has(students[i].CTC)) {
            var temp = map.get(students[i].CTC);
            temp++;
            map.set(students[i].CTC, temp);
        } else {
            map.set(students[i].CTC, 1);
        }
    }
    var max = 0,
        mode;
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
            mode = key;
        }
    });
    console.log('Mode:', mode);
};

module.exports = {
    offers,
    placed,
    doubleOffers,
    aOneOffers,
    aOnePlaced,
    offersBatch,
    placedBatch,
    mean,
    median,
    mode
};