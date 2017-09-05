import * as LinkHeader from 'http-link-header';

function isBool(bool: boolean): null {
    return null;
}

function isReference(ref: LinkHeader.Reference): null {
    return null;
}

function isString(str: string): null {
    return null;
}

const link = LinkHeader.parse(
    '<example.com>; rel="example"; title="Example Website", ' +
    '<example-01.com>; rel="alternate"; title="Alternate Example Domain"'
);
const has = link.has('rel', 'alternate');
isBool(has);
const get = link.get('title', 'Example Website');
isReference(get);
const rel = link.rel('alternate');
rel['title'] !== 'bar';
isReference(rel);
const set = link.set({ rel: 'next', uri: 'http://example.com/next' });
isReference(set);
const str = link.toString();
isString(str);
