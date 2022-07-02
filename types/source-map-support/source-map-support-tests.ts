import 'source-map-support/register';
import sms = require('source-map-support');

sms.install();

function retrieveFile(path: string): string {
    return 'foo';
}

function retrieveSourceMap(source: string): sms.UrlAndMap | null {
    return source
        ? {
              url: 'http://foo',
              map: 'foo',
          }
        : null;
}

const options: sms.Options = {
    emptyCacheBetweenOperations: false,
    handleUncaughtExceptions: false,
    retrieveFile,
    retrieveSourceMap,
    environment: 'node',
    hookRequire: false,
    overrideRetrieveSourceMap: false,
    overrideRetrieveFile: false,
};

sms.install(options);

sms.install({
    ...options,
    retrieveSourceMap(source) {
        return source
            ? {
                  url: 'http://foo',
                  map: {
                      version: '3',
                      sources: ['/path/to/foo.js'],
                      sourcesContent: ["module.exports = 'foo'"],
                      names: ['module', 'exports'],
                      mappings: 'AAAA,a',
                      file: '/path/to/foo.js',
                  },
              }
            : null;
    },
});

let stackFrame: any; // TODO: this should be a StackFrame, but it seems this would need to be defined elsewhere (in e.g. lib.d.ts)
stackFrame = sms.wrapCallSite(stackFrame);

let s: string | null;
s = sms.getErrorSource(new Error('foo'));

let p: sms.Position = {
    column: 0,
    line: 0,
    source: 'foo',
};
p = sms.mapSourcePosition(p);

let u: sms.UrlAndMap | null;
u = retrieveSourceMap('foo');

sms.resetRetrieveHandlers();
