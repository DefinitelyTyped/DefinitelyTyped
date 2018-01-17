import * as fs from "fs";
import * as nano from "nano";

/*
 * Instantiate with configuration object
 */
const config: nano.Configuration = {
  url: "http://localhost:5984/foo",
  cookie: "someAuthSession",
  requestDefaults: { proxy: "http://someproxy" }
};

const cfgInstance = nano(config);

/*
 * Server Scope
 */
const instance: nano.ServerScope = <nano.ServerScope> nano(
  "http://localhost:5984/emails"
);

instance.dinosaur("", (err, response) => {});
const url = instance.config.url;

instance.relax(
  {
    method: "POST",
    path: "_users",
    body: {
      _id: "org.couchdb.user:",
      type: "user",
      name: "ss",
      roles: ["admin"],
      password: "rf"
    }
  },
  (err: any) => {}
);
instance.session((error, session) => {});
instance.request(
  {
    db: "shared_headers",
    doc: "new",
    headers: { "If-None-Match": JSON.stringify({}) }
  },
  (error, helloWorld, rh) => {}
);
instance.relax(
  { db: "document_list", doc: "_all_docs", method: "GET", qs: { limit: 1 } },
  (error, docs) => {}
);
instance.auth("", "", (err: any, _: any, headers: any) => {});
instance.uuids(3, (error, data) => {});

/*
 * Database Scope
 */
const db: nano.DatabaseScope = instance.db;

db.create("az09_$()+-/", err => {});
db.get("database_get", (err, response) => {});
db.destroy("_users", () => {});
db.list((error, list) => {});
db.replicate(instance.use("a"), instance.use("b"), (error: any) => {});
db.replicate("a", "b", (error: any) => {});

/*
 * Document Scope
 */
interface SomeDocument {
  name: string;
}

const mydb: nano.DocumentScope<SomeDocument> = instance.use("mydb");

mydb.insert({ name: "baz" }, null, (err, response) => {});
mydb.insert({ name: "baz" }, "foobar", (error, foo) => {});
mydb.insert({ name: "baz" }, { new_edits: true }, (error, foo) => {});
mydb.get("foobaz", { revs_info: true }, (error, foobaz) => {});
mydb.head("foobaz", (error, body, headers) => {});
mydb.copy(
  "foo_src",
  "foo_dest",
  { overwrite: true },
  (error, response, headers) => {}
);
mydb.destroy("x", "x", (err, response) => {});
mydb.bulk(
  { docs: [{ key: "baz", name: "bazzel" }, { key: "bar", name: "barry" }] },
  (error: any, response: any) => {}
);
mydb.list((error: any, docs: any) => {});
mydb.fetch({ keys: ["foobar"] }, (error: any, docs: any) => {});
mydb.fetchRevs({ keys: ["foobar"] }, (error: any, docs: any) => {});
mydb.changes({ since: 0 }, (err, response) => {});
mydb.compact(error => {});
const feed = mydb.follow({ since: "0" });
feed.on("change", (change: any) => {});
mydb.atomic("update", "addbaz", "baz", (error: any, response: any) => {});
mydb.viewWithList(
  "people",
  "by_name_and_city",
  "my_list",
  { key: ["Derek", "San Francisco"] },
  (error, list) => {}
);
mydb.view(
  "alice",
  "by_id",
  { keys: ["foobar", "barfoo"], include_docs: true },
  (err, view) => {}
);
mydb.show(
  "people",
  "singleDoc",
  "p_clemens",
  (error: any, doc: any, rh: any) => {}
);
mydb.replicate("database_replica", (error: any) => {});

const req = mydb.find({
  selector: {
    userId: 1234,
    name: 'Paul',
    status: { $ne: 'suspended' },
    age: { $gt: 69 },
    building: {
      number: {
        $in: [101, 203, 205]
      }
    }
  },
  skip: 10,
  limit: 1,
  use_index: "user_index_doc",
  fields: ['name', 'age'],
  sort: [{ age: 'desc' }, { name: 'asc' }],
  r: 2,
  stale: 'ok',
  execution_stats: true
}, (resp: nano.MangoResponse<SomeDocument>, error: any) => {
  for (const doc of resp.docs) {
    console.log(doc.name);
  }

  if (resp.warning) {
    console.error(resp.warning);
  }

  if (resp.execution_stats) {
    console.log(`Execution time: ${resp.execution_stats.execution_time_ms} ms.`);
  }
});

req.abort();

/*
 * Attachments
 */
mydb.attachment.insert(
  "new",
  "att",
  "Hello World!",
  "text/plain",
  (error: any, att: any) => {}
);
const attInsert: NodeJS.WritableStream = mydb.attachment.insert(
  "new",
  "att",
  null,
  "text/plain"
);
mydb.attachment.destroy("new", "att", { rev: "123" }, (err, response) => {});
mydb.attachment.get("new_string", "att", (error: any, helloWorld: any) => {});
const attGet: NodeJS.ReadableStream = mydb.attachment.get("new_string", "att");

/*
 * Multipart
 */
const attachment = { name: 'rabbit.png', data: 'some data', content_type: 'image/png' };

mydb.multipart.insert({ name: "baz" }, [attachment], "foobaz", (error, foo) => {});
mydb.multipart.get("foobaz", (error: any, foobaz: any, headers: any) => {});

/*
 * Piping
 */
const rs = fs.createReadStream("");
const is = mydb.attachment.insert("nodejs", "logo.png", null, "image/png");
is.on("end", () => {});
rs.pipe(is);
