import combinations = require('combinations');

const values = [1, false, 'foo'];
combinations(values);
combinations(values, 1);
combinations(values, 1, 10);
