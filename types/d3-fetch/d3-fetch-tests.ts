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
const imageProperties = {
    width: '300px',
    height: '500px'
};
p3 = d3Fetch.image(url, imageProperties);

let p4: Promise<any> = d3Fetch.json(url);
p4 = d3Fetch.json(url, init);
let p5: Promise<MyType> = d3Fetch.json<MyType>(url);
p5 = d3Fetch.json<MyType>(url, init);

let myString: Promise<string>;
myString = d3Fetch.text(url);
myString = d3Fetch.text(url, init);

const parseRow = (rawRow: DSVRowString, index: number, columns: string[]): (MyType | undefined | null) => {
    const myType: MyType | null = rawRow['foo'] ? { foo: rawRow['foo'] + '+ bar' } : null;
    return myType;
};
let promise1: Promise<DSVParsedArray<DSVRowString>>;
let promise2: Promise<DSVParsedArray<MyType>>;
promise1 = d3Fetch.csv(url);
promise1 = d3Fetch.csv(url, init);
promise2 = d3Fetch.csv<MyType>(url, parseRow);
promise2 = d3Fetch.csv<MyType>(url, init, parseRow);
promise1 = d3Fetch.dsv(';', url);
promise1 = d3Fetch.dsv(';', url, init);
promise2 = d3Fetch.dsv<MyType>(';', url, parseRow);
promise2 = d3Fetch.dsv<MyType>(';', url, init, parseRow);
promise1 = d3Fetch.tsv(url);
promise1 = d3Fetch.tsv(url, init);
promise2 = d3Fetch.tsv<MyType>(url, parseRow);
promise2 = d3Fetch.tsv<MyType>(url, init, parseRow);
