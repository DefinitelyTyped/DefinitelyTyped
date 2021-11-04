import _ = require("lodash");
import lodashDeep = require('lodash-deep');
_.mixin(lodashDeep);

const object = { null: null };
const callback = () => { };

const value = _.deepMapValues(object, callback, 'local-path');
