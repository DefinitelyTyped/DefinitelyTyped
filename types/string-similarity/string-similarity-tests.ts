import stringSimilarity = require('string-similarity');

stringSimilarity.compareTwoStrings('test', 'test'); // $ExpectType number

const match = stringSimilarity.findBestMatch(
    'Olive-green table for sale, in extremely good condition.',
    [
        'For sale: green Subaru Impreza, 210,000 miles',
        'For sale: table in very good condition, olive green in colour.',
        'Wanted: mountain bike with at least 21 gears.',
    ]
);

match; // $ExpectType BestMatch
match.ratings; // $ExpectType Rating[]
match.bestMatch; // $ExpectType Rating
match.bestMatchIndex; // $ExpectType number

// ratings accessible
for (const rating of match.ratings) {
    rating.target; // $ExpectType string
    rating.rating; // $ExpectType number
}

// bestMatch accessible
match.bestMatch.rating;
match.bestMatch.target;
