declare var console: { log(s: string): void };
declare var process: { env: any };

import amazon = require('amazon-product-api');

let client = amazon.createClient({
    awsId: process.env.AWS_ACCESS_KEY_ID,
    awsSecret: process.env.AWS_SECRET,
    awsTag: process.env.AWS_ASSOCIATE_TAG
});


// Item Search

let searchQuery = {
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
};

client.itemSearch(searchQuery).then((results) => {
    console.log(getResultCount(results) + " search results");
}).catch(function(err){
    console.log(err);
});

client.itemSearch(searchQuery, (err, results) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(getResultCount(results) + " search results");
});


// Item Lookup

let lookupQuery = {
    itemId: 'B00008OE6I',
    idType: 'ASIN',
    responseGroup: 'OfferFull',
    condition: 'All'
};

client.itemLookup(lookupQuery).then((results) => {
    console.log(getResultCount(results) + " lookup results");
}).catch(function(err){
    console.log(err);
});

client.itemLookup(lookupQuery, (err, results) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(getResultCount(results) + " lookup results");
});

let lookupQueryWithItemIdArray = {
    itemId: ['B00008OE6I', 'B00008OE6E'],
    idType: 'ASIN',
    responseGroup: 'OfferFull',
    condition: 'All'
};

client.itemLookup(lookupQueryWithItemIdArray).then((results) => {
    console.log(getResultCount(results) + " lookup results");
}).catch(function(err){
    console.log(err);
});

// Browse Node Lookup

let nodeLookupQuery = {
    browseNodeId: '2625373011'
};

client.browseNodeLookup(nodeLookupQuery).then((results) => {
    console.log(getResultCount(results) + " node lookup results");
}).catch(function(err){
    console.log(err);
});

client.browseNodeLookup(nodeLookupQuery, (err, results) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(getResultCount(results) + " node lookup results");
});

function getResultCount(results: Object[]) {
    return results != undefined ? results.length : 0;
}
