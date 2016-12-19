import resolve = require('enhanced-resolve');
import { Context } from 'enhanced-resolve/lib/concord';
import { ResolveResult } from 'enhanced-resolve/lib/common-types'
import Resolver = require('enhanced-resolve/lib/Resolver')

resolve('lib', 'string', function (err) { });

let context: Context = {
    referrer: 'hi'
};

resolve(context, 'path', 'string', function () { });

let resolver: Resolver
resolver = resolve.ResolverFactory.createResolver({
    extensions: ['.js'],
    fileSystem: {}
});

const nfs = new resolve.NodeJsInputFileSystem();

const snfs = new resolve.SyncNodeJsInputFileSystem();

const cfs = new resolve.CachedInputFileSystem(nfs, 4);
const cfs2 = new resolve.CachedInputFileSystem(snfs, 4);

let result: ResolveResult

result = resolve.sync(context, 'path', 'string');
result = resolve.sync('path', 'string');

resolve.context('lib', 'string', function (err) { });
resolve.context(context, 'path', 'string', function () { });

result = resolve.context.sync(context, 'path', 'string');
result = resolve.context.sync('path', 'string');

resolve.create('lib', 'string', function (err) { });
resolve.create(context, 'path', 'string', function () { });

result = resolve.create.sync(context, 'path', 'string');
result = resolve.create.sync('path', 'string');
