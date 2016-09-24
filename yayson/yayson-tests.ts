/// <reference path="yayson.d.ts" />

import * as Yayson from "yayson";

const yayson = Yayson();
const Adapter = yayson.Adapter;
const Store = yayson.Store;
const Presenter = yayson.Presenter;

interface Thing {
  hello: 'world' | 'you';
}

function test_store() {
  const store = new Store();

  store.sync({ any: 'thing' });

  const findObj: Object = store.find('mytype', '1234');
  const findThing: Thing = store.find<Thing>('mytype', '1234');

  const findObjs: Object = store.findAll('mytype');
  const findThings: Thing[] = store.findAll<Thing>('mytype');

  store.remove('mytype', '1234');
  store.remove('mytype');

  store.reset();

  const records: any[] = store.records;
  const relations: { [type: string]: any } = store.relations;
}
