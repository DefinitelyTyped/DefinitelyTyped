import httpMiddleware from "Middlewares/httpMiddleware";
import normalizeHttpRequestMiddleware from "Middlewares/normalizeHttpRequestMiddleware";
import successHttpResponseMiddleware from "Middlewares/successHttpResponseMiddleware";
import errorHttpResponseMiddleware from "Middlewares/errorHttpResponseMiddleware";
import verifyJwtMiddleware from "Middlewares/verifyJwtMiddleware";
import normalizeSQSMessageMiddleware from "Middlewares/normalizeSQSMessageMiddleware";

import LesgoException from "Exceptions/LesgoException";

import ElasticCacheService from "Services/ElasticCacheService";
import "./Tests/services/ElasticsearchService";
import "./Tests/services/AuroraDbService";
import "./Tests/services/DynamoDbService";
import "./Tests/services/LoggerService";
import "./Tests/services/S3Service";
import "./Tests/services/SQSService";
import "./Tests/services/FirebaseAdminService";
import "./Tests/services/JWTService";

import { ec, get, set, del } from "Utils/cache";
import { encrypt, decrypt, hash, hashMD5 } from "Utils/crypto";
import db from "Utils/db";
import dynamodb from "Utils/dynamodb";
import elasticsearch from "Utils/elasticsearch";
import generateUid from "Utils/generateUid";
import getJwtSubFromAuthHeader, { getTokenData } from "Utils/getJwtSubFromAuthHeader";
import isDecimal from "Utils/isDecimal";
import isEmail from "Utils/isEmail";
import isEmpty from "Utils/isEmpty";
import logger from "Utils/logger";
import objectStore, { getObject } from "Utils/objectStore";
import prepSQLInsertParams from "Utils/prepSQLInsertParams";
import prepSQLUpdateParams from "Utils/prepSQLUpdateParams";
import queue, { dispatch } from "Utils/queue";
import validateFields from "Utils/validateFields";

/* Middlewares */
httpMiddleware({ debugMode: true }); // $ExpectType HttpMiddleware
normalizeHttpRequestMiddleware(); // $ExpectType NormalizeHttpMiddleware
successHttpResponseMiddleware(); // $ExpectType SuccessHttpMiddleware
errorHttpResponseMiddleware({ debugMode: true }); // $ExpectType ErrorHttpMiddleware
verifyJwtMiddleware(); // $ExpectType VerifyJwtMiddleware
normalizeSQSMessageMiddleware(); // $ExpectType NormalizeSQSMiddleware

/* Exceptions */
const lesgoException = new LesgoException("Error");
lesgoException.name; // $ExpectType string
lesgoException.message; // $ExpectType string
lesgoException.statusCode; // $ExpectType number
lesgoException.code; // $ExpectType string
lesgoException.extra; // $ExpectType any

/* Services */
const elasticCache = new ElasticCacheService({
    url: "12.0.0.1",
    options: {
        autoDiscover: true,
        autoDiscoverInterval: 60000,
        autoDiscoverOverridesRemove: false,
        timeout: 30,
    },
});
elasticCache.driver; // $ExpectType Memcached

/* Utils */
ec("conname"); // $ExpectType Memcached
(async () => {
    // $ExpectType boolean
    await set(
        "cache-key",
        {
            test: 1,
        },
        1000,
    );
    await get("cache-key"); // $ExpectType any
    await del("cache-key"); // $ExpectType boolean
})();

encrypt("this is a test"); // $ExpectType string
decrypt("TMxLqkHSs8D7tD02ptbtWQxocJO93ZPvqS4IruHEpj8="); // $ExpectType string
hash("this is a test"); // $ExpectType Buffer
hashMD5(new Uint8Array([21, 31])); // $ExpectType Buffer

db; // $ExpectType AuroraDbService
(async () => {
    await db.select("SELECT * FROM users;", []); // $ExpectType any[]
})();
dynamodb; // $ExpectType DynamoDb
(async () => {
    await dynamodb.query("analytics", "ForumName = :name", { ":title": { SS: ["The Man"] } }, "#title, tag"); // $ExpectType ItemList
})();
elasticsearch("production"); // $ExpectType ElasticsearchService
(async () => {
    // $ExpectType string
    await generateUid({
        length: 20,
    });
})();
(async () => {
    // $ExpectType string | null
    await getJwtSubFromAuthHeader(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    );
})();
// $ExpectType { sub?: string | undefined; }
getTokenData(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
);
isDecimal(1); // $ExpectType boolean
isEmail("leo.lavarias@gmail.com"); // $ExpectType boolean
isEmpty(["test"]); // $ExpectType boolean
logger; // $ExpectType LoggerService
// $ExpectType void
logger.info("SAVED TO DYNAMODB", {
    id: 10,
    name: "Leo",
});
objectStore; // $ExpectType S3Service
(async () => {
    await getObject("TILES/Level4/A3_B3_C2/A5_B67_C59_Tiles.par", "test-aws-imagery"); // $ExpectType GetObjectOutput
})();
// $ExpectType SQLInsertParams
prepSQLInsertParams(
    {
        id: 1,
        name: "Leo",
    },
    [{ key: "id" }, { key: "name" }],
);
// $ExpectType SQLUpdateParams
prepSQLUpdateParams(
    {
        id: 1,
        name: "Leo",
    },
    [{ key: "id" }, { key: "name" }],
);
queue; // $ExpectType SQSService<Record<string, QueueConfig>>
(async () => {
    await dispatch("ping", "myqueue"); // $ExpectType SendMessageResult
})();
// $ExpectType boolean
validateFields(
    {
        id: 1,
        name: "test",
    },
    [
        { key: "id", type: "number", required: true },
        { key: "name", type: "string" },
    ],
);
