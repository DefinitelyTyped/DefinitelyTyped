import * as fs from 'fs';
import * as path from 'path';

import { transforms, configure, create, lassoPage, getDefaultLasso, writers } from 'lasso';
import LassoContext from 'lasso/lib/LassoContext';
import LassoPageResult from 'lasso/lib/LassoPageResult';
import { serveStatic } from 'lasso/middleware';
import { enable } from 'lasso/node-require-no-op';

// configure() tests

// $ExpectType void
configure('lasso-config.json');

// $ExpectType void
configure({});

// $ExpectType void
configure({
    cspNonceProvider(out) {
        const res = out.stream;

        return res.csp && res.csp.nonce;
    }
});

// $ExpectType void
configure({
    require: {
        extensions: [ '.js' ],
        transforms: [ 'deamdify' ]
    }
});

// $ExpectType Lasso
create({});

const lasso = getDefaultLasso();
// $ExpectType Lasso
lasso;

// $ExpectType Promise<any>
lassoPage({
    name: 'my-page',
    dependencies: [
        './style.less',
        'require-run: ./main'
    ]
},
(err, lassoPageResult) => {
    if (err) {
        console.log('Failed to lasso page: ', err);
        return;
    }

    // $ExpectType string
    lassoPageResult.getHeadHtml();

    // $ExpectType string
    lassoPageResult.getBodyHtml();
});

lassoPage({
    dependencies: [{
        path: './hello-mobile.js',
        'if-flag': 'mobile'
    }],
    flags: ['mobile', 'foo', 'bar']
});

// $ExpectType Lasso
lasso.on('afterLassoPage', (event) => {
    const lassoPageResult: LassoPageResult = event.result;
    const fingerprints = lassoPageResult.getInlineCodeFingerprints();
    // $ExpectType string
    fingerprints.map(fingerprint => `script-src 'self' 'sha256-${fingerprint}'`).join('; ');
});

const dependencies = lasso.dependencies;

// Register new types

// $ExpectType void
dependencies.registerJavaScriptType('my-js-type', require('./dependency-my-js-type')); // tslint:disable-line: no-var-requires

// $ExpectType void
dependencies.registerJavaScriptType('my-custom-type', {
    properties: {
        path: 'string'
    },

    init(context: any, callback: any) {
        if (!this.path) {
            throw new Error('"path" is required');
        }

        this.path = this.resolvePath(this.path);
        callback();
    },

    read(context: any, callback: any) {
        const path = this.path;

        fs.readFile(path, {encoding: 'utf8'}, (err, src) => {
            if (err) {
                return callback(err);
            }

            // myCompiler.compile(src, callback);
        });
    },

    getSourceFile() {
        return this.path;
    }
});

// $ExpectType void
dependencies.registerStyleSheetType('my-custom-type', {});

// $ExpectType void
dependencies.registerPackageType('dir', {
    properties: {
        path: 'string'
    },

    init(context: any, callback: any) {
        let path = this.path;

        if (!path) {
            callback(new Error('"path" is required'));
        }

        this.path = path = this.resolvePath(path);

        fs.stat(path, (err, stat) => {
            if (err) {
                return callback(err);
            }

            if (!stat.isDirectory()) {
                return callback(new Error('Directory expected: ' + path));
            }

            callback();
        });
    },

    getDependencies(context: any, callback: any) {
        const dir = this.path;

        fs.readdir(dir, (err, filenames) => {
            if (err) {
                return callback(err);
            }

            const dependencies = filenames.map(filename => path.join(dir, filename));

            callback(null, dependencies);
        });
    },

    getDir() {
        return this.path;
    }
});

// $ExpectType void
dependencies.registerRequireExtension('test', (path: string, context: any, callback: any) => {
    callback(null, "exports.sayHello = function() { console.log('Hello!'); }");
});

// $ExpectType void
lasso.lassoResource('path/to/foo.png', (err: any, result: any) => {
    if (err) {
        console.log(err);
    } else {
        const url = result.url;
    }
});

// Transformer tests

// $ExpectType void
lasso.addTransform(require('./my-transform')); // tslint:disable-line: no-var-requires

// $ExpectType void
lasso.addTransform({
    contentType: 'js',
    name: module.id,
    stream: false,
    transform(code: string, lassoContext: LassoContext) {
        return code.toUpperCase();
    }
});

// $ExpectType void
transforms.createTransformer([], new LassoContext(), (err, result) => {});

// Middleware tests

// $ExpectType RequestHandler<ParamsDictionary>
serveStatic();

// $ExpectType RequestHandler<ParamsDictionary>
serveStatic({
    lasso,
    sendOptions: {}
});

// node-require-no-op tests

// $ExpectType void
enable();

// Writer tests

// $ExpectType Writer
writers.createWriter({});
