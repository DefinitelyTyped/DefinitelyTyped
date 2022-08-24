import 'source-map-support/register';
import * as sms from 'source-map-support';

// test type exports
type UrlAndMap = sms.UrlAndMap;
type Environment = sms.Environment;
type Options = sms.Options;
type Position = sms.Position;
type State = sms.State;
type CallSite = sms.CallSite;

sms.install(); // $ExpectType void
sms.install({ handleUncaughtExceptions: false }); // $ExpectType void
sms.install({ hookRequire: false }); // $ExpectType void
sms.install({ emptyCacheBetweenOperations: true }); // $ExpectType void
sms.install({ environment: 'auto' }); // $ExpectType void
sms.install({ environment: 'browser' }); // $ExpectType void
sms.install({ environment: 'node' }); // $ExpectType void
// @ts-expect-error
sms.install({ environment: 'foo' });
sms.install({ overrideRetrieveFile: true }); // $ExpectType void
sms.install({ overrideRetrieveSourceMap: true }); // $ExpectType void
// $ExpectType void
sms.install({
    retrieveFile: path => {
        path; // $ExpectType string
        return null;
    },
});
sms.install({ retrieveFile: path => '' }); // $ExpectType void
// @ts-expect-error
sms.install({ retrieveFile: path => {} });
// $ExpectType void
sms.install({
    retrieveSourceMap: source => {
        source; // $ExpectType string
        return null;
    },
});
sms.install({ retrieveSourceMap: source => ({ map: 'foo' }) }); // $ExpectType void
// $ExpectType void
sms.install({
    retrieveSourceMap: source => {
        return {
            map: {
                mappings: '',
                names: [''],
                sources: [''],
                version: '',
            },
        };
    },
});
// $ExpectType void
sms.install({
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
// $ExpectType void
sms.install({
    retrieveSourceMap: source => {
        return {
            map: 'foo',
            url: 'foo',
        };
    },
});
// @ts-expect-error
sms.install({ retrieveSourceMap: source => 'foo' });

declare const stackFrame: sms.CallSite;
const position: sms.Position = {
    column: 0,
    line: 0,
    source: 'foo',
};
sms.wrapCallSite(stackFrame); // $ExpectType CallSite
sms.wrapCallSite(stackFrame, { nextPosition: null, curPosition: null }); // $ExpectType CallSite
sms.wrapCallSite(stackFrame, { nextPosition: position, curPosition: null }); // $ExpectType CallSite
sms.wrapCallSite(stackFrame, { nextPosition: null, curPosition: position }); // $ExpectType CallSite
sms.getErrorSource(new Error('foo')); // $ExpectType string | null
// $ExpectType Position
sms.mapSourcePosition(position);
sms.resetRetrieveHandlers(); // $ExpectType void

stackFrame.getThis(); // $ExpectType any
stackFrame.getTypeName(); // $ExpectType string | null
stackFrame.getFunction(); // $ExpectType ((...args: unknown[]) => any) | undefined
stackFrame.getFunctionName(); // $ExpectType string | null
stackFrame.getMethodName(); // $ExpectType string | null
stackFrame.getFileName(); // $ExpectType string | null
stackFrame.getLineNumber(); // $ExpectType number | null
stackFrame.getColumnNumber(); // $ExpectType number | null
stackFrame.getEvalOrigin(); // $ExpectType string | undefined
stackFrame.isToplevel(); // $ExpectType boolean
stackFrame.isEval(); // $ExpectType boolean
stackFrame.isNative(); // $ExpectType boolean
stackFrame.isConstructor(); // $ExpectType boolean
if (stackFrame.getScriptNameOrSourceURL) {
    stackFrame.getScriptNameOrSourceURL(); // $ExpectType string
}
