import findDuplicatedPropertyKeys = require('find-duplicated-property-keys');

const jsonString = '{"name": "Carl", "name": "Carla", "data": 1, "data": [{ "data": 1, "data": 2}]}';

const result = findDuplicatedPropertyKeys(jsonString); // $ExpectType PropertyInfo[]

result.forEach(item => {
    item.isArray; // $ExpectgType boolean
    item.key; // $ExpecgtType string
    item.occurrence; // $ExpectType number
    item.parent; // $ExpectType PropertyInfo
    item.propertyPath; // $ExpectType () => string[]
    item.toString(); // $ExpectType string
});
