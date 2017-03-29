import * as connectRedis from "connect-redis";
import * as session from "express-session";

let RedisStore = connectRedis(session);
