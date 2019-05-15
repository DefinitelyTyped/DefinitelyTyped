import * as d3Fetch from 'd3-fetch';
import { DSVParsedArray, DSVRaw, DSVRowString } from 'd3-dsv';

// ----------------------------------------------------------------------------
// Preparatory Steps
// ----------------------------------------------------------------------------

type Headers = "Year" | "Make" | "Model" | "Length";

interface Car {
    year: Date;
    make: string;
    model: string;
    length: number;
}

let anyPromise: Promise<any>;
let arrayPromise: Promise<ArrayBuffer>;
let blobPromise: Promise<Blob>;
let docPromise: Promise<Document>;
let imagePromise: Promise<HTMLImageElement>;
let carPromise: Promise<Car>;
let stringPromise: Promise<string>;
let xmlDocPromise: Promise<XMLDocument>;

const url = 'example.org';
const init: RequestInit = {};
const map = new Map<string, number>();

const imageProperties = {
    width: 300,
    height: 500,
    crossOrigin: "anonymous",
};

// ----------------------------------------------------------------------------
// Non DSV file format
// ----------------------------------------------------------------------------

blobPromise = d3Fetch.blob(url);
blobPromise = d3Fetch.blob(url, init);

arrayPromise = d3Fetch.buffer(url);
arrayPromise = d3Fetch.buffer(url, init);

imagePromise = d3Fetch.image(url);
imagePromise = d3Fetch.image(url, imageProperties);
// $ExpectError
imagePromise = d3Fetch.image(url, {width: "500px"}); // fails, string not assignable to number | undefined

anyPromise = d3Fetch.json(url);
anyPromise = d3Fetch.json(url, init);

carPromise = d3Fetch.json<Car>(url);
carPromise = d3Fetch.json<Car>(url, init);

stringPromise = d3Fetch.text(url);
stringPromise = d3Fetch.text(url, init);

docPromise = d3Fetch.html(url);
docPromise = d3Fetch.html(url, init);

docPromise = d3Fetch.svg(url);
docPromise = d3Fetch.svg(url, init);

xmlDocPromise = d3Fetch.xml(url);
xmlDocPromise = d3Fetch.xml(url, init);

// ----------------------------------------------------------------------------
// DSV file format
// ----------------------------------------------------------------------------

let rawPromise: Promise<DSVParsedArray<DSVRowString>>;
let rawPromiseHeader: Promise<DSVParsedArray<DSVRowString<Headers>>>;
let parsedPromise: Promise<DSVParsedArray<Car>>;

declare const parseRowString: (rawRow: DSVRowString, index: number, columns: string[]) => Car | undefined | null;

const parseRow = (d: DSVRowString<Headers>, index: number, columns: Headers[]): Car | undefined | null => {
    const item: string | undefined = d[columns[0]];
    const car = d.Make === 'Ford' ? null :
        {
            year: new Date(+d.Make!, 0, 1),
            make: d.Make!,
            model: d.Model!,
            length: +d.Length!,
        };
    return index % 2 === 0 ? undefined : car;
};

const parseRowSimple = (d: DSVRaw<Car>) => {
    return {
        year: new Date(+d.make!, 0, 1),
        make: d.make!,
        model: d.model!,
        length: +d.length!,
    };
};

// CSV

rawPromise = d3Fetch.csv(url);
rawPromise = d3Fetch.csv(url, init);

rawPromiseHeader = d3Fetch.csv<Headers>(url);
rawPromiseHeader = d3Fetch.csv<Headers>(url, init);

parsedPromise = d3Fetch.csv<Car>(url, parseRowString);
parsedPromise = d3Fetch.csv<Car>(url, init, parseRowString);

parsedPromise = d3Fetch.csv<Car, Headers>(url, parseRow);
parsedPromise = d3Fetch.csv<Car, Headers>(url, init, parseRow);

parsedPromise = d3Fetch.csv(url, parseRow);
parsedPromise = d3Fetch.csv(url, init, parseRow);
parsedPromise = d3Fetch.csv(url, parseRowSimple);

anyPromise = d3Fetch.csv(url, (d: DSVRaw<Car>) => map.set(d.model!, +d.year!));

// DSV

rawPromise = d3Fetch.dsv("|", url);
rawPromise = d3Fetch.dsv("|", url, init);

rawPromiseHeader = d3Fetch.dsv<Headers>("|", url);
rawPromiseHeader = d3Fetch.dsv<Headers>("|", url, init);

parsedPromise = d3Fetch.dsv<Car>("|", url, parseRowString);
parsedPromise = d3Fetch.dsv<Car>("|", url, init, parseRowString);

parsedPromise = d3Fetch.dsv<Car, Headers>("|", url, parseRow);
parsedPromise = d3Fetch.dsv<Car, Headers>("|", url, init, parseRow);

parsedPromise = d3Fetch.dsv("|", url, parseRow);
parsedPromise = d3Fetch.dsv("|", url, init, parseRow);
parsedPromise = d3Fetch.dsv("|", url, parseRowSimple);

anyPromise = d3Fetch.dsv("|", url, (d: DSVRaw<Car>) => map.set(d.model!, +d.year!));

// TSV

rawPromise = d3Fetch.tsv(url);
rawPromise = d3Fetch.tsv(url, init);

rawPromiseHeader = d3Fetch.tsv<Headers>(url);
rawPromiseHeader = d3Fetch.tsv<Headers>(url, init);

parsedPromise = d3Fetch.tsv<Car>(url, parseRowString);
parsedPromise = d3Fetch.tsv<Car>(url, init, parseRowString);

parsedPromise = d3Fetch.tsv<Car, Headers>(url, parseRow);
parsedPromise = d3Fetch.tsv<Car, Headers>(url, init, parseRow);

parsedPromise = d3Fetch.tsv(url, parseRow);
parsedPromise = d3Fetch.tsv(url, init, parseRow);
parsedPromise = d3Fetch.tsv(url, parseRowSimple);

anyPromise = d3Fetch.csv(url, (d: DSVRaw<Car>) => map.set(d.model!, +d.year!));
