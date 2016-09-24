/// <reference path="yayson.d.ts" />

import * as Yayson from "yayson";

const yayson = Yayson();

interface Thing {
  hello: 'world' | 'you';
}

function test_store() {
  const store = new yayson.Store();
  const syncObj = store.sync({ x: 'y' });
  const syncTyped = store.sync<Thing>({ any: 'thing' });
}
