import { get, post, put } from "barnard59-graph-store";
import { Writable } from "readable-stream";
import { DefaultGraph, NamedNode, Stream } from 'rdf-js';

const endpoint = 'foo';
const user = 'user';
const password = 'password';

function testGet() {
    const anonDefaultGraph: Stream = get({
        endpoint,
    });

    const defaultGraph: DefaultGraph = <any> {};
    const anonDefaultGraph2: Stream = get({
        endpoint,
        graph: defaultGraph
    });

    const auth: Stream = get({
        endpoint,
        graph: 'graph',
        user,
        password,
    });

    const graph: NamedNode = <any> {};
    const auth2: Stream = get({
        endpoint,
        graph,
        user,
        password,
    });
}

function testPost() {
    const anon: Writable = post({
        endpoint
    });

    const auth: Writable = post({
        endpoint,
        user,
        password,
    });

    const limited: Writable = post({
        endpoint,
        maxQuadsPerRequest: 4000,
    });
}

function testPut() {
    const anon: Writable = put({
        endpoint
    });

    const auth: Writable = put({
        endpoint,
        user,
        password,
    });

    const limited: Writable = put({
        endpoint,
        maxQuadsPerRequest: 4000,
    });
}
