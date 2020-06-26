import omitDeep = require('omit-deep-lodash');

const newObjectFromArray: object = omitDeep([], 'test');
const newObjectFromObject: object = omitDeep({}, 'test');
