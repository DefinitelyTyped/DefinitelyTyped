import express = require("express");
import session = require("express-session");
import ConnectMemcached = require("connect-memcached");

const app = express();

// $ExpectType typeof MemcachedStore
const MemcachedStore = ConnectMemcached(session);

app.use(
    session({
        secret: "CatOnKeyboard",
        store: new MemcachedStore({
            hosts: ["127.0.0.1:11211"],
            prefix: "prefix",
            ttl: 1,
            secret: "123, easy as ABC. ABC, easy as 123",
            algorithm: "aes-256-ctr",
            poolSize: 1,
            reconnect: 1000,
            retries: 5,
        }),
    }),
);

// $ExpectType MemcachedStore
const allDefaults = new MemcachedStore();
