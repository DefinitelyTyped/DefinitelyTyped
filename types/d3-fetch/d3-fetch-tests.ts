import * as d3Fetch from 'd3-fetch';
import { DSVParsedArray, DSVRowString, DSVRowAny } from 'd3-dsv';

interface MyType {
    foo: string;
}

const url = 'foo.bar';

const init: RequestInit = {};

let p1: Promise<Blob> = d3Fetch.blob(url);
p1 = d3Fetch.blob(url, init);
let p2: Promise<ArrayBuffer> = d3Fetch.buffer(url);
p2 = d3Fetch.buffer(url, init);
let p3: Promise<HTMLImageElement> = d3Fetch.image(url);
p3 = d3Fetch.image(url, init);
let p4: Promise<any> = d3Fetch.json(url);
p4 = d3Fetch.json(url, init);

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
