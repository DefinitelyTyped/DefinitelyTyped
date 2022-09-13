import { CrossStorageClient, CrossStorageHub } from "cross-storage";

const client = new CrossStorageClient("http://foo.com", {
  timeout: 0,
  frameId: "null"
});

client.onConnect()
  .then(() => client.set("foo", "bar"))
  .then(() => client.get("foo"))
  .then(() => client.getKeys())
  .then((keys) => client.del.apply(client, keys))
  .then(() => client.clear())
  .then(() => client.close());

const hub = CrossStorageHub.init([
  {
    origin: /foo/,
    allow: ['get', 'set', 'del']
  }
]);
