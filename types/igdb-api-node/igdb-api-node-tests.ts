import igdb, { getTagNumber } from 'igdb-api-node';
import { Apicalypse } from 'apicalypse';

// $ExpectType number
getTagNumber(5, 1234);

// $ExpectType Apicalypse
igdb();
// $ExpectType Apicalypse
igdb('test-client-id');
// $ExpectType Apicalypse
igdb('test-client-id', 'test-app-access-token');
// $ExpectType Apicalypse
igdb('test-client-id', 'test-app-access-token', {
    queryMethod: 'url',
    method: 'get',
});
