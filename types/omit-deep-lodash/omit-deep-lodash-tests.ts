import omitDeep = require("omit-deep-lodash");

const newObjectFromArray: object = omitDeep([], "test");
const newObjectFromObject: object = omitDeep({}, "test");
const newObjectWithRestProps: object = omitDeep({}, "test1", "test2");
const newObjectWithArrayProps: object = omitDeep({}, ["test1", "test2"]);
