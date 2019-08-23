let summary = require('summary');

let data = summary([-1, 0, 1], true /* sorted */);
data.variance(); // Expected 1
data.mean(); // Expected 0
