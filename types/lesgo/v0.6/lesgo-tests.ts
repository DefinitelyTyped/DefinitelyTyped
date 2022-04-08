import httpMiddleware from 'lesgo/lib/middlewares/httpMiddleware';
import normalizeHttpRequestMiddleware from 'lesgo/lib/middlewares/normalizeHttpRequestMiddleware';
import successHttpResponseMiddleware from 'lesgo/lib/middlewares/successHttpResponseMiddleware';
import errorHttpResponseMiddleware from 'lesgo/lib/middlewares/errorHttpResponseMiddleware';
import verifyJwtMiddleware from 'lesgo/lib/middlewares/verifyJwtMiddleware';
import normalizeSQSMessageMiddleware from 'lesgo/lib/middlewares/normalizeSQSMessageMiddleware';

import LesgoException from 'lesgo/lib/exceptions/LesgoException';

import ElasticCacheService from 'lesgo/lib/services/ElasticCacheService';
import './tests/services/ElasticsearchService';
import './tests/services/AuroraDbService';
import './tests/services/DynamoDbService';
import './tests/services/LoggerService';
import './tests/services/S3Service';
import './tests/services/SQSService';
import './tests/services/FirebaseAdminService';
import './tests/services/JWTService';

import { ec, get, set, del } from 'lesgo/lib/utils/cache';
import { encrypt, decrypt, hash, hashMD5 } from 'lesgo/lib/utils/crypto';
import db from 'lesgo/lib/utils/db';
import dynamodb from 'lesgo/lib/utils/dynamodb';
import elasticsearch from 'lesgo/lib/utils/elasticsearch';
import generateUid from 'lesgo/lib/utils/generateUid';
import getJwtSubFromAuthHeader, { getTokenData } from 'lesgo/lib/utils/getJwtSubFromAuthHeader';
import isDecimal from 'lesgo/lib/utils/isDecimal';
import isEmail from 'lesgo/lib/utils/isEmail';
import isEmpty from 'lesgo/lib/utils/isEmpty';
import logger from 'lesgo/lib/utils/logger';
import objectStore, { getObject } from 'lesgo/lib/utils/objectStore';
import prepSQLInsertParams from 'lesgo/lib/utils/prepSQLInsertParams';
import prepSQLUpdateParams from 'lesgo/lib/utils/prepSQLUpdateParams';
import queue, { dispatch } from 'lesgo/lib/utils/queue';
import validateFields from 'lesgo/lib/utils/validateFields';

/* Middlewares */
httpMiddleware({ debugMode: true }); // $ExpectType HttpMiddleware
normalizeHttpRequestMiddleware(); // $ExpectType NormalizeHttpMiddleware
successHttpResponseMiddleware(); // $ExpectType SuccessHttpMiddleware
errorHttpResponseMiddleware({ debugMode: true }); // $ExpectType ErrorHttpMiddleware
verifyJwtMiddleware(); // $ExpectType VerifyJwtMiddleware
normalizeSQSMessageMiddleware(); // $ExpectType NormalizeSQSMiddleware

/* Exceptions */
const lesgoException = new LesgoException('Error');
lesgoException.name; // $ExpectType string
lesgoException.message; // $ExpectType string
lesgoException.statusCode; // $ExpectType number
lesgoException.code; // $ExpectType string
lesgoException.extra; // $ExpectType any

/* Services */
const elasticCache = new ElasticCacheService({
    url: '12.0.0.1',
    options: {
        autoDiscover: true,
        autoDiscoverInterval: 60000,
        autoDiscoverOverridesRemove: false,
        timeout: 30,
    },
});
elasticCache.driver; // $ExpectType Memcached

/* Utils */
ec('conname'); // $ExpectType Memcached
(async () => {
    // $ExpectType boolean
    await set(
        'cache-key',
        {
            test: 1,
        },
        1000,
    );
    await get('cache-key'); // $ExpectType any
    await del('cache-key'); // $ExpectType boolean
})();

encrypt('this is a test'); // $ExpectType string
decrypt('TMxLqkHSs8D7tD02ptbtWQxocJO93ZPvqS4IruHEpj8='); // $ExpectType string
hash('this is a test'); // $ExpectType string
hashMD5(new Uint8Array([21, 31])); // $ExpectType string

db; // $ExpectType AuroraDbService
(async () => {
    await db.select('SELECT * FROM users;', []); // $ExpectType any[]
})();
dynamodb; // $ExpectType DynamoDb
(async () => {
    await dynamodb.query('analytics', 'ForumName = :name', { ':title': { SS: ['The Man'] } }, '#title, tag'); // $ExpectType ItemList
})();
elasticsearch('production'); // $ExpectType ElasticsearchService
(async () => {
    // $ExpectType string
    await generateUid({
        length: 20,
    });
})();
(async () => {
    // $ExpectType string | null
    await getJwtSubFromAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    );
})();
// $ExpectType { sub?: string | undefined; }
getTokenData(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
);
isDecimal(1); // $ExpectType boolean
isEmail('leo.lavarias@gmail.com'); // $ExpectType boolean
isEmpty(['test']); // $ExpectType boolean
logger; // $ExpectType LoggerService
// $ExpectType void
logger.info('SAVED TO DYNAMODB', {
    id: 10,
    name: 'Leo',
});
objectStore; // $ExpectType S3Service
(async () => {
    await getObject('TILES/Level4/A3_B3_C2/A5_B67_C59_Tiles.par', 'test-aws-imagery'); // $ExpectType GetObjectOutput
})();
// $ExpectType SQLInsertParams
prepSQLInsertParams(
    {
        id: 1,
        name: 'Leo',
    },
    [{ key: 'id' }, { key: 'name' }],
);
// $ExpectType SQLUpdateParams
prepSQLUpdateParams(
    {
        id: 1,
        name: 'Leo',
    },
    [{ key: 'id' }, { key: 'name' }],
);
queue; // $ExpectType SQSService<Record<string, QueueConfig>>
(async () => {
    await dispatch('ping', 'myqueue'); // $ExpectType SendMessageResult
})();
// $ExpectType Partial<Record<"id" | "name", any>> || Partial<Record<"name" | "id", any>>
validateFields(
    {
        id: 1,
        name: 'test',
    },
    [
        { key: 'id', type: 'number', required: true },
        { key: 'name', type: 'string' },
    ],
);
