import express = require('express');
import hydraBox = require('hydra-box');
import ApiImpl = require('hydra-box/Api');
import { Api } from 'hydra-box/Api';
import StoreResourceLoader = require('hydra-box/StoreResourceLoader');
import { Dataset, DatasetCore, NamedNode, Store, Stream } from 'rdf-js';
import { GraphPointer } from 'clownface';
import DatasetExt = require('rdf-ext/lib/Dataset');
import { Readable } from 'stream';
import { Loader } from 'rdf-loaders-registry';

const codePath = '';
const path = '';
const dataset: Dataset = <any> {};
const graph: NamedNode = <any> {};
const term: NamedNode = <any> {};

function createApi(): Api<Dataset> {
    // no options
    let api: Api = ApiImpl.fromFile('foo').fromFile('bar');
    api = new ApiImpl().fromFile('foo');

    // with options
    let withOptions: Api<Dataset> = ApiImpl.fromFile('foo', {
        codePath,
        dataset,
        graph,
        path,
        term,
    });
    withOptions = new ApiImpl({
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
            resource: handler,
            operations: handler
        }
    }));

    app.use('multi-middleware', hydraBox.middleware(api, {
        baseIriFromRequest: true,
        loader,
        store,
        middleware: {
            resource: [handler, handler],
            operations: [handler, handler]
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

const handler: express.RequestHandler = async (req) => {
    const operations: hydraBox.PotentialOperation[] = req.hydra.operations;
    const dataset: DatasetCore = await req.hydra.resource.dataset();
    const quadStream: Stream & Readable = req.hydra.resource.quadStream();
    const pointer: GraphPointer<NamedNode, DatasetExt> = await req.hydra.resource.clownface();
};

async function loader() {
    const pointer: GraphPointer = <any> {};
    const api = createApi();

    interface LoadedFunction {
        (): string;
    }

    const loader: LoadedFunction | undefined = await api.loaderRegistry.load<LoadedFunction>(pointer);
}
