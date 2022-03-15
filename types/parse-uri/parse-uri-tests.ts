import { URI } from 'parse-uri';
import parseURI = require('parse-uri');

type keys = 'source' |
    'protocol' |
    'authority'|
    'userInfo'|
    'user'|
    'password' |
    'host' |
    'port' |
    'relative' |
    'path' |
    'directory' |
    'file' |
    'query' |
    'anchor';

const uri1: URI = parseURI('');
const uri2: URI = parseURI('', {
    strictMode: true
});

const uriParts: Record<keys, string> = uri1;
const query: Record<string, string> = uri1.queryKey;
