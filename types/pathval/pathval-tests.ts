import * as pathval from 'pathval';

const obj = { prop: 'a value' };
pathval.hasProperty(obj, 'prop'); // true

const earth = { earth: { country: 'Brazil' } };
pathval.getPathInfo(earth, 'earth.country');
const info: pathval.PathInfo = {
    parent: { country: 'Brazil' },
    name: 'country',
    value: 'Brazil',
    exists: true,
};

pathval.getPathValue(earth, 'earth.country'); // 'Brazil'

pathval.setPathValue(earth, 'earth.country', 'USA');
const usa: string = earth.earth.country; // 'USA'
