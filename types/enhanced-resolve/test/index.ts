import resolve = require('enhanced-resolve');
import { AbstractInputFileSystem } from 'enhanced-resolve/lib/common-types'
import Resolver = require('enhanced-resolve/lib/Resolver')

resolve('lib', 'string', function (err) { });

let context = {
    issuer: 'hi'
};

resolve(context, 'path', 'string', function () { });

let resolver: Resolver
resolver = resolve.ResolverFactory.createResolver({
    extensions: ['.js'],
    fileSystem: {} as AbstractInputFileSystem
});

const nfs = new resolve.NodeJsInputFileSystem();

const cfs = new resolve.CachedInputFileSystem(nfs, 4);

let result: string

result = resolve.sync(context, 'path', 'string');
result = resolve.sync('path', 'string');


// Context

resolve.context('lib', 'string', function (err) { });
resolve.context(context, 'path', 'string', function () { });

result = resolve.context.sync(context, 'path', 'string');
result = resolve.context.sync('path', 'string');

// Loader

resolve.loader('lib', 'string', function (err) { });
resolve.loader(context, 'path', 'string', function () { });

result = resolve.loader.sync(context, 'path', 'string');
result = resolve.loader.sync('path', 'string');

// Create

resolve.create({extensions: [".js", ".json", ".node"]})(context, 'path', 'string', function () { });

result = resolve.create.sync({mainFields: ["loader", "main"]})(context, 'path', 'string');
