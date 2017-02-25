import * as nano from "couchdb-nano";

const instance: nano.Client = nano('http://localhost:5984/emails');

const config: nano.Config = {
    url: "http://localhost:5984/foo",
    requestDefaults: { "proxy": "http://someproxy" }
};

const cfgInstance: nano.Client = nano(config);

const db: nano.Database = instance.use("mydb");