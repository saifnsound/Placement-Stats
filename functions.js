const hashmap = require('hashmap');

var offers = (students) => {
    console.log('Total Offers:', students.length);
};

var placed = (students) => {
    var map = new hashmap();
    for (var i = 0; i < students.length; i++) {
        map.set(students[i].ID, 1);
    }
    console.log('Total Placed:', map.size);
}

module.exports = {
    offers,
    placed
};