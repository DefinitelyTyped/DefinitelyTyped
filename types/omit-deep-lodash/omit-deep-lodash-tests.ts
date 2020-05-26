import omitDeep from 'omit-deep-lodash';

const newObjectFromArray: object = omitDeep([], 'test');
const newObjectFromObject: object = omitDeep({}, 'test');
