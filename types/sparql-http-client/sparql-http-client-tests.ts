import StreamClient = require('sparql-http-client');
import Endpoint = require('sparql-http-client/Endpoint');
import BaseClient = require('sparql-http-client/BaseClient');
import ParsingClient = require('sparql-http-client/ParsingClient');
import RawQuery = require('sparql-http-client/RawQuery');
import { Client } from 'sparql-http-client';
import { Readable } from 'stream';
import { DataFactory, Stream, Quad, NamedNode, Term } from 'rdf-js';

interface TestQuad extends Quad {
    toCanonical(): string;
}

const endpointUrl = '';
const query = '';
const factory: DataFactory<TestQuad> = <any> {};
const headers: HeadersInit = <any> {};
const password: string = <any> {};
const user: string = <any> {};
const storeUrl: string = <any> {};
const updateUrl: string = <any> {};
const graph: NamedNode = <any> {};
const stream: Stream = <any> {};

const endpoint: Endpoint = new Endpoint({
    endpointUrl,
    fetch,
    headers,
    password,
    user,
    storeUrl,
    updateUrl,
});

async function streamingClient() {
    // construct
    const minimalOptions: StreamClient = new StreamClient({
        endpointUrl,
    });
    const storeOnly: StreamClient = new StreamClient({
        storeUrl: endpointUrl,
    });
    const updateOnly: StreamClient = new StreamClient({
        updateUrl: endpointUrl,
    });
    const fullOptions: StreamClient<TestQuad> = new StreamClient({
        endpointUrl,
        factory,
        fetch,
        headers,
        password,
        user,
        storeUrl,
        updateUrl,
    });

    let endpoint: Endpoint = fullOptions.query.endpoint;
    endpoint = fullOptions.store.endpoint;

    // query.ask
    const askNoOptions: boolean = await fullOptions.query.ask(query);
    const askFullOptions: boolean = await fullOptions.query.ask(query, {
        headers,
        operation: 'postDirect'
    });

    // query.select
    const selectNoOptions: Readable = await fullOptions.query.select(query);
    const selectFullOptions: Readable = await fullOptions.query.select(query, {
        headers,
        operation: 'postUrlencoded'
    });

    // query.construct
    const constructNoOptions: Stream<TestQuad> & Readable = await fullOptions.query.construct(query);
    const constructFullOptions: Stream<TestQuad> & Readable = await fullOptions.query.construct(query, {
        headers,
        operation: 'get'
    });

    // query.update
    const updateNoOptions: Promise<void> = fullOptions.query.update(query);
    const updateFullOptions: Promise<void> = fullOptions.query.update(query, {
        headers,
        operation: 'get'
    });

    // store.get
    const get: Stream<TestQuad> & Readable = await fullOptions.store.get(graph);

    // store.put
    const put: Promise<void> = fullOptions.store.put(stream);

    // store.post
    const post: Promise<void> = fullOptions.store.post(stream);
}

async function parsingClient() {
    // construct
    const minimalOptions: ParsingClient = new ParsingClient({
        endpointUrl,
    });
    const storeOnly: ParsingClient = new ParsingClient({
        storeUrl: endpointUrl,
    });
    const updateOnly: ParsingClient = new ParsingClient({
        updateUrl: endpointUrl,
    });
    const fullOptions: ParsingClient<TestQuad> = new ParsingClient({
        endpointUrl,
        factory,
        fetch,
        headers,
        password,
        user,
        storeUrl,
        updateUrl,
    });

    const endpoint: Endpoint = fullOptions.query.endpoint;
    const store: never = fullOptions.store;

    // query.ask
    const askNoOptions: boolean = await fullOptions.query.ask(query);
    const askFullOptions: boolean = await fullOptions.query.ask(query, {
        headers,
        operation: 'postDirect'
    });

    // query.select
    const selectNoOptions: Array<Record<string, Term>> = await fullOptions.query.select(query);
    const selectFullOptions: Array<Record<string, Term>> = await fullOptions.query.select(query, {
        headers,
        operation: 'postUrlencoded'
    });

    // query.construct
    const constructNoOptions: TestQuad[] = await fullOptions.query.construct(query);
    const constructFullOptions: TestQuad[] = await fullOptions.query.construct(query, {
        headers,
        operation: 'get'
    });

    // query.update
    const updateNoOptions: Promise<void> = fullOptions.query.update(query);
    const updateFullOptions: Promise<void> = fullOptions.query.update(query, {
        headers,
        operation: 'get'
    });
}

async function testBaseClient_RawQuery() {
    // construct
    const client: Client<RawQuery, TestQuad> = new BaseClient<RawQuery, TestQuad>({
        endpoint,
        Query: RawQuery,
    });

    // query.ask
    const askNoOptions: Response = await client.query.ask(query);
    const askFullOptions: Response = await client.query.ask(query, {
        headers,
        operation: 'postDirect'
    });

    // query.select
    const selectNoOptions: Response = await client.query.select(query);
    const selectFullOptions: Response = await client.query.select(query, {
        headers,
        operation: 'postUrlencoded'
    });

    // query.construct
    const constructNoOptions: Response = await client.query.construct(query);
    const constructFullOptions: Response = await client.query.construct(query, {
        headers,
        operation: 'get'
    });

    // query.update
    const updateNoOptions: Response = await client.query.update(query);
    const updateFullOptions: Response = await client.query.update(query, {
        headers,
        operation: 'get'
    });
}
