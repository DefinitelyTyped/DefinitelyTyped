import rdfUtilsFs = require('rdf-utils-fs');
import { Stream } from 'rdf-js';
import { URL } from 'url';

let fromFile: Stream = rdfUtilsFs.fromFile('./file/path');
fromFile = rdfUtilsFs.fromFile(new URL('file://foo/bar'));
fromFile = rdfUtilsFs.fromFile('./file/path', {
    extensions: {
        json: 'application/json'
    },
    foo: 'bar'
});

let toFile: Promise<void> = rdfUtilsFs.toFile(fromFile, './file/path');
toFile = rdfUtilsFs.toFile(fromFile, new URL('file://foo/bar'), {
    extensions: {
        json: 'application/json'
    },
    foo: 'bar'
});
