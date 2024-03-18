import { Environment } from "@rdfjs/environment/Environment.js";
import { DataFactory, DatasetCore, DatasetCoreFactory, Quad, Quad_Graph, Stream, Term } from "@rdfjs/types";
import StreamClient from "sparql-http-client";
import ParsingClient from "sparql-http-client/ParsingClient.js";
import RawQuery from "sparql-http-client/RawQuery.js";
import SimpleClient from "sparql-http-client/SimpleClient.js";
import StreamStore from "sparql-http-client/StreamStore.js";
import { Readable } from "stream";

interface TestQuad extends Quad {
    toCanonical(): string;
}

const endpointUrl = "";
const query = "";
const factory: Environment<DataFactory<TestQuad> | DatasetCoreFactory<TestQuad>> = <any> {};
const headers: HeadersInit = <any> {};
const password: string = <any> {};
const user: string = <any> {};
const storeUrl: string = <any> {};
const updateUrl: string = <any> {};
const graph: Quad_Graph = <any> {};
const stream: Stream = <any> {};

async function streamingClient() {
    // construct
    const minimalOptions: StreamClient = new StreamClient({
        endpointUrl,
        factory,
    });
    const storeOnly: StreamClient = new StreamClient({
        storeUrl: endpointUrl,
        factory,
    });
    const updateOnly: StreamClient = new StreamClient({
        updateUrl: endpointUrl,
        factory,
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

    // query.ask
    const askNoOptions: boolean = await fullOptions.query.ask(query);
    const askFullOptions: boolean = await fullOptions.query.ask(query, {
        headers,
        operation: "postDirect",
    });

    // query.select
    const selectNoOptions: Readable = await fullOptions.query.select(query);
    const selectFullOptions: Readable = await fullOptions.query.select(query, {
        headers,
        operation: "postUrlencoded",
    });

    // query.construct
    const constructNoOptions: Stream<TestQuad> & Readable = await fullOptions.query.construct(query);
    const constructFullOptions: Stream<TestQuad> & Readable = await fullOptions.query.construct(query, {
        headers,
        operation: "get",
    });

    // query.update
    const updateNoOptions: Promise<void> = fullOptions.query.update(query);
    const updateFullOptions: Promise<void> = fullOptions.query.update(query, {
        headers,
        operation: "get",
    });

    // store.get
    const get: Stream<TestQuad> = fullOptions.store.get(graph);

    // store.put
    const put: Promise<void> = fullOptions.store.put(stream);

    // store.post
    const post: Promise<void> = fullOptions.store.post(stream);
}

async function parsingClient() {
    // construct
    const minimalOptions: ParsingClient = new ParsingClient({
        endpointUrl,
        factory,
    });
    const storeOnly: ParsingClient = new ParsingClient({
        storeUrl: endpointUrl,
        factory,
    });
    const updateOnly: ParsingClient = new ParsingClient({
        updateUrl: endpointUrl,
        factory,
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

    // query.ask
    const askNoOptions: boolean = await fullOptions.query.ask(query);
    const askFullOptions: boolean = await fullOptions.query.ask(query, {
        headers,
        operation: "postDirect",
    });

    // query.select
    const selectNoOptions: Array<Record<string, Term>> = await fullOptions.query.select(query);
    const selectFullOptions: Array<Record<string, Term>> = await fullOptions.query.select(query, {
        headers,
        operation: "postUrlencoded",
    });

    // query.construct
    const constructNoOptions: DatasetCore<TestQuad> = await fullOptions.query.construct(query);
    const constructFullOptions: DatasetCore<TestQuad> = await fullOptions.query.construct(query, {
        headers,
        operation: "get",
    });

    // query.update
    const updateNoOptions: Promise<void> = fullOptions.query.update(query);
    const updateFullOptions: Promise<void> = fullOptions.query.update(query, {
        headers,
        operation: "get",
    });
}

async function simpleClient() {
    // construct
    // minimal query options
    let client: SimpleClient<RawQuery> = new SimpleClient({
        endpointUrl,
    });
    // minimal store options
    client = new SimpleClient({
        storeUrl,
    });
    // minimal update options
    client = new SimpleClient({
        updateUrl,
    });
    // full options
    client = new SimpleClient({
        endpointUrl,
        factory,
        fetch,
        headers,
        password,
        user,
        storeUrl,
        updateUrl,
    });
    // with store
    const withStore: SimpleClient<RawQuery, StreamStore<Quad>> = new SimpleClient({
        storeUrl,
        Store: StreamStore,
    });

    // get
    const getNoOptions: Response = await client.get(query);
    const getFullOptions: Response = await client.get(query, {
        headers,
        update: true,
    });

    // postDirect
    const postDirectNoOptions: Response = await client.postDirect(query);
    const postDirectFullOptions: Response = await client.postDirect(query, {
        headers,
        update: true,
    });

    // postUrlencoded
    const postUrlencodedNoOptions: Response = await client.postUrlencoded(query);
    const postUrlencodedFullOptions: Response = await client.postUrlencoded(query, {
        headers,
        update: true,
    });

    // query.ask
    const askNoOptions: Response = await client.query.ask(query);
    const askFullOptions: Response = await client.query.ask(query, {
        headers,
        operation: "postDirect",
    });

    // query.select
    const selectNoOptions: Response = await client.query.select(query);
    const selectFullOptions: Response = await client.query.select(query, {
        headers,
        operation: "postUrlencoded",
    });

    // query.construct
    const constructNoOptions: Response = await client.query.construct(query);
    const constructFullOptions: Response = await client.query.construct(query, {
        headers,
        operation: "get",
    });

    // query.update
    const updateNoOptions: Response = await client.query.update(query);
    const updateFullOptions: Response = await client.query.update(query, {
        headers,
        operation: "get",
    });
}
