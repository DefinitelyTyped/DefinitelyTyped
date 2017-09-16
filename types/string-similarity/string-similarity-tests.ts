import stringSimilarity = require('string-similarity');

stringSimilarity.compareTwoStrings('test', 'test');

const match: stringSimilarity.BestMatch = stringSimilarity.findBestMatch('Olive-green table for sale, in extremely good condition.', [
  'For sale: green Subaru Impreza, 210,000 miles',
  'For sale: table in very good condition, olive green in colour.',
  'Wanted: mountain bike with at least 21 gears.'
]);

// ratings accessible
for (const rating of match.ratings){
    isString(rating.target);
    isNumber(rating.rating);
}

// bestMatch accessible
match.bestMatch.rating;
match.bestMatch.target;

function isString(x: string): void {
}
function isNumber(x: number): void {
}
