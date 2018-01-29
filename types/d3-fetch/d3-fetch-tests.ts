import * as d3Fetch from 'd3-fetch';
import { DSVParsedArray, DSVRowString, DSVRowAny } from 'd3-dsv';

interface MyType {
    foo: string;
}

let promise: Promise<MyType>;
const url = 'foo.bar';

const init: RequestInit = {};

promise = d3Fetch.blob<MyType>(url);
promise = d3Fetch.blob<MyType>(url, init);
promise = d3Fetch.buffer<MyType>(url);
promise = d3Fetch.buffer<MyType>(url, init);
promise = d3Fetch.image<MyType>(url);
promise = d3Fetch.image<MyType>(url, init);
promise = d3Fetch.json<MyType>(url);
promise = d3Fetch.json<MyType>(url, init);

let myString: Promise<string>;
myString = d3Fetch.text(url);
myString = d3Fetch.text(url, init);

const parseRow = (d: {}) => {
    const myType: MyType = { foo: 'foo' };
    return myType;
};
let promise2: Promise<DSVParsedArray<MyType>>;
promise2 = d3Fetch.csv<MyType>(url);
promise2 = d3Fetch.csv<MyType>(url, init);
promise2 = d3Fetch.csv<MyType>(url, init, parseRow);
promise2 = d3Fetch.dsv<MyType>(';', url);
promise2 = d3Fetch.dsv<MyType>(';', url, init);
promise2 = d3Fetch.dsv<MyType>(';', url, init, parseRow);
promise2 = d3Fetch.tsv<MyType>(url);
promise2 = d3Fetch.tsv<MyType>(url, init);
promise2 = d3Fetch.tsv<MyType>(url, init, parseRow);
