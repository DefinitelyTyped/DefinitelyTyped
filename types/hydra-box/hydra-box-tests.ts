import express = require('express');
import hydraBox = require('hydra-box');
import Api = require('hydra-box/Api');
import StoreResourceLoader = require('hydra-box/StoreResourceLoader');
import { Dataset, DatasetCore, NamedNode, Store } from 'rdf-js';

const codePath = '';
const path = '';
const dataset: Dataset = <any> {};
const graph: NamedNode = <any> {};
const term: NamedNode = <any> {};

function createApi(): Api<Dataset> {
    // no options
    let api: Api = Api.fromFile('foo').fromFile('bar');
    api = new Api().fromFile('foo');

    // with options
    let withOptions: Api<Dataset> = Api.fromFile('foo', {
        codePath,
        dataset,
        graph,
        path,
        term,
    });
    withOptions = new Api({
        codePath,
        dataset,
        graph,
        path,
        term,
    });

    return withOptions;
}

function appDefaultConfig() {
    const app = express();

    const api: Api<Dataset> = createApi();
    app.use(hydraBox.middleware(api));
}

function appCustomConfig() {
    const app = express();

    const api: Api<Dataset> = createApi();
    const loader: hydraBox.ResourceLoader = <any> {};
    const store: Store = <any> {};
    const handler: express.RequestHandler = <any> {};

    app.use('empty-options', hydraBox.middleware(api, {}));

    app.use('single-middleware', hydraBox.middleware(api, {
        baseIriFromRequest: true,
        loader,
        store,
        middleware: {
            resource: handler
        }
    }));

    app.use('multi-middleware', hydraBox.middleware(api, {
        baseIriFromRequest: true,
        loader,
        store,
        middleware: {
            resource: [handler, handler]
        }
    }));
}

async function testStoreResourceLoader() {
    const store: Store = <any> {};
    const req: express.Request = <any> {};

    const loader: StoreResourceLoader = new StoreResourceLoader({ store });

    const forClassOperation: hydraBox.Resource[] = await loader.forClassOperation(term, req);
    const forPropertyOperation: hydraBox.PropertyResource[] = await loader.forPropertyOperation(term, req);
}
