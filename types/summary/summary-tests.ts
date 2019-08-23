import summary from 'summary';

const data = summary([-1, 0, 1], true /* sorted */);
data.data(); // Expected [-1, 0, 1]
data.sort(); // Expected [-1, 0, 1]
data.mean(); // Expected 0
data.size(); // Expected 3
data.sum(); // Expected 0
data.mode(); // Expected 1
data.quartile(0.5); // Expected 0
data.median(); // Expected 0
data.variance(); // Expected 1
data.sd(); // Expected 1
data.max(); // Expected 1
data.min(); // Expected number
data.min(); // Expected number
