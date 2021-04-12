import pm = require('picomatch');

// main function
const isMatch = pm('*.!(*a)');

// main function with state
const isMatch2 = pm('*.!(*a)', {}, true);
isMatch2.state.negated;
