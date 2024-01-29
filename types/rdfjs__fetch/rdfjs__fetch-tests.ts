import fetch from "@rdfjs/fetch";
import { RdfFetchResponse } from "@rdfjs/fetch-lite";
import { Formats } from "@rdfjs/formats";
import { Dataset, DatasetCoreFactory, Quad, Stream } from "@rdfjs/types";

const formats = <Formats> {};

function noOptions(): Promise<RdfFetchResponse> {
    return fetch("http://example.com/");
}

function allOptionsOptional(): Promise<RdfFetchResponse> {
    return fetch("http://example.com/", {});
}

async function fetchString(): Promise<string> {
    const response = await fetch("http://example.com", { formats });
    return response.text();
}

async function fetchQuadStream(): Promise<Stream> {
    const response = await fetch("http://example.com", { formats });
    return response.quadStream();
}

interface QuadExt extends Quad {
    toCanonical(): string;
}

interface DatasetX extends Dataset<QuadExt> {
    toCanonical(): string;
}
const factory: DatasetCoreFactory<QuadExt, QuadExt, DatasetX> = <any> {};

async function fetchDataset(): Promise<DatasetX> {
    const response = await fetch("http://example.com", { formats, factory });
    return response.dataset();
}

async function fetchTypedStream(): Promise<Stream<QuadExt>> {
    const response = await fetch("http://example.com", { formats, factory });
    return response.quadStream();
}

async function fetchURL() {
    // $ExpectType RdfFetchResponse<Quad>
    const response = await fetch(new URL("http://example.com"));
}

async function fetchRequestInfo() {
    const req: Request = <any> {};
    // $ExpectType RdfFetchResponse<Quad>
    const response = await fetch(req);
}
