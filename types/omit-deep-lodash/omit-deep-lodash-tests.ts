import omitDeep from 'omit-deep-lodash';

const newObjectFromArray: Object = omitDeep([], 'test');
const newObjectFromObject: Object = omitDeep({}, 'test');
