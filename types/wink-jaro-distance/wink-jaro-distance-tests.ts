import jaro = require('wink-jaro-distance');

const result = jaro('abcdef', 'fedcba');
const result2 = jaro('abcdef', 'fedcba');

// Just need to make sure the types are a number I suppose?
function addNumbers(value: number) {
    return value + 1;
}

const mostSimilar = result.similarity > result2.similarity ? result : result2;
const totalDistance = result.distance + result2.distance;

addNumbers(result.distance);
addNumbers(result2.similarity);
