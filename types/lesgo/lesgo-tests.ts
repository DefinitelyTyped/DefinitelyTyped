import httpMiddleware from 'lesgo/middlewares/httpMiddleware';
import normalizeHttpRequestMiddleware from 'lesgo/middlewares/normalizeHttpRequestMiddleware';
import successHttpResponseMiddleware from 'lesgo/middlewares/successHttpResponseMiddleware';
import errorHttpResponseMiddleware from 'lesgo/middlewares/errorHttpResponseMiddleware';
import verifyJwtMiddleware from 'lesgo/middlewares/verifyJwtMiddleware';
import normalizeSQSMessageMiddleware from 'lesgo/middlewares/normalizeSQSMessageMiddleware';

import LesgoException from 'lesgo/exceptions/LesgoException';

import ElasticCacheService from 'lesgo/services/ElasticCacheService';
import AuroraDbRDSProxyService from 'lesgo/services/AuroraDbRDSProxyService';
import AuroraDbService from 'lesgo/services/AuroraDbService';

import './tests/services/ElasticsearchService';
import './tests/services/AuroraDbService';
import './tests/services/DynamoDbService';
import './tests/services/LoggerService';
import './tests/services/S3Service';
import './tests/services/SQSService';
import './tests/services/FirebaseAdminService';
import './tests/services/JWTService';

import { ec, get, set, del } from 'lesgo/utils/cache';
import { encrypt, decrypt, hash, hashMD5 } from 'lesgo/utils/crypto';
import db from 'lesgo/utils/db';
import dynamodb from 'lesgo/utils/dynamodb';
import elasticsearch from 'lesgo/utils/elasticsearch';
import generateUid from 'lesgo/utils/generateUid';
import getJwtSubFromAuthHeader, { getTokenData } from 'lesgo/utils/getJwtSubFromAuthHeader';
import isDecimal from 'lesgo/utils/isDecimal';
import isEmail from 'lesgo/utils/isEmail';
import isEmpty from 'lesgo/utils/isEmpty';
import logger from 'lesgo/utils/logger';
import objectStore, { getObject } from 'lesgo/utils/objectStore';
import prepSQLInsertParams from 'lesgo/utils/prepSQLInsertParams';
import prepSQLUpdateParams from 'lesgo/utils/prepSQLUpdateParams';
import queue, { dispatch } from 'lesgo/utils/queue';
import validateFields from 'lesgo/utils/validateFields';

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

db; // $ExpectType AuroraDbService | AuroraDbRDSProxyService || AuroraDbRDSProxyService | AuroraDbService
(async () => {
    await (db as AuroraDbService).select('SELECT * FROM users;', []); // $ExpectType any[]
    await (db as AuroraDbRDSProxyService).select('SELECT * FROM users;', []); // $ExpectType AuroraDbRDSProxyServiceResult
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
