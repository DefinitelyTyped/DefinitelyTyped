import * as d3Fetch from 'd3-fetch';

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
let myString: Promise<string> = d3Fetch.text(url);
myString = d3Fetch.text(url, init);
