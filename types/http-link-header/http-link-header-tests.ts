import { default as LinkHeader, Reference } from 'http-link-header';

function isBool(bool: boolean): null {
    return null;
}

function isReference(ref: Reference): null {
    return null;
}

function isString(str: string): null {
    return null;
}

const link = new LinkHeader(
    '<example.com>; rel="example"; title="Example Website", ' +
    '<example-01.com>; rel="alternate"; title="Alternate Example Domain"'
);
const has = link.has('rel', 'alternate');
isBool(has);
const get = link.get('title', 'Example Website');
isReference(get[0]);
const rel = link.rel('alternate');
rel[0]['title'] !== 'bar';
isReference(rel[0]);
const set = link.set({ rel: 'next', uri: 'http://example.com/next' });
set === link;
const str = link.toString();
isString(str);
