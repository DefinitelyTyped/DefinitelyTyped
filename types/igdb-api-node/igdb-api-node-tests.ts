import igdb, { getTagNumber } from 'igdb-api-node';
import { Apicalypse } from 'apicalypse';

// $ExpectType number
getTagNumber(5, 1234);

// $ExpectType Apicalypse
igdb();
// $ExpectType Apicalypse
igdb('test-api-key');
// $ExpectType Apicalypse
igdb('test-api-key', {
    queryMethod: 'url',
    method: 'get',
});
