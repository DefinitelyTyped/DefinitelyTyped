/// <reference path="./connect-redis.d.ts" />
/// <reference path="../express-session/express-session.d.ts" />

import * as connectRedis from "connect-redis";
import * as session from "express-session";

let RedisStore = connectRedis(session);
