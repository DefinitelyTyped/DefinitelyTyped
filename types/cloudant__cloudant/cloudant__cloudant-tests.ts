import cloudant = require("cloudant__cloudant");

/*
 * Instantiate with configuration object
 */
const config: cloudant.Configuration = {
  account: "my-cloudant-account",
  password: "my-password",
};

const cfgInstance = cloudant(config);

/*
 * Server Scope
 */
const instance: cloudant.ServerScope = <cloudant.ServerScope> cloudant(
  "http://localhost:5984/emails"
);

instance.generate_api_key((error, key) => {});

const cors: cloudant.CORS = {
  enable_cors: true,
  allow_credentials: true,
  origins: ["*"]
};

instance.set_cors(cors, (error, data) => {});

const virtualHost: cloudant.VirtualHost = {
  host: 'www.host.com',
  path: 'the-path'
};

instance.add_virtual_host(virtualHost, (error, resp) => {});
instance.get_virtual_hosts((error, hosts) => {});
instance.delete_virtual_host(virtualHost, (error, resp) => {});

/*
 * Database Scope
 */
const db: cloudant.DatabaseScope = instance.db;

const security: cloudant.Security = {
  nobody: [],
  nodejs : [ '_reader', '_writer', '_admin', '_replicator' ]
};

db.set_security(security, (error, resp) => {});
db.get_security((err, resp) => {});

/*
 * Database Scope
 */

interface SomeDocument {
  name: string;
}

const mydb: cloudant.DocumentScope<SomeDocument> = instance.use("mydb");

const params: cloudant.SearchParams = {
  limit: 10,
  q: 'bird:*'
};

mydb.search("design", "doc", params, (err, resp) => {});

const geoParams: cloudant.GeoParams = {
  include_docs: true,
  lat: 27.000,
  lon: 28.00
};

mydb.geo('design', "docname", geoParams, (err, result) => {});
