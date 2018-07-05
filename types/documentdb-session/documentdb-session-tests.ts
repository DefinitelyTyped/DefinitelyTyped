import express = require("express");
import session = require("express-session");
import DocumentDBSession = require("documentdb-session");

const DocumentDBStore = DocumentDBSession(session);
const store = new DocumentDBStore({
    database: "MY_DATABASE",
    collection: "MY_COLLECTION",
    host: "https://sample.documents.azure.com:443/",
    ttl: 60 * 60 * 10, // 10 hours
    key: "magic key"
});

const app = express();
session({
    store,
    secret: "I can count all the way to 55",
});
