import jaro from 'wink-jaro-distance';

// Example function calls taken fromo fficial readme
jaro('father','farther')
// -> { distance: 0.04761904761904756, similarity: 0.9523809523809524 }

jaro('Angelina','Angelica')
// -> { distance: 0.08333333333333337,  similarity: 0.9166666666666666 }

jaro('Flikr','Flicker')
// -> { distance: 0.09523809523809523, similarity: 0.9047619047619048 }

jaro('abcdef','fedcba')
// -> { distance: 0.6111111111111112, similarity: 0.38888888888888884 }

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

