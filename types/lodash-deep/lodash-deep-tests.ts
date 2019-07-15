import lDeep = require('lodash-deep');

const object = { null: null };
const callback = () => {};

const value = lDeep.deepMapValues(object, callback, 'local-path');
