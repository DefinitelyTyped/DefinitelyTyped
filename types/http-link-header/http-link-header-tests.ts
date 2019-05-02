import * as LinkHeader from 'http-link-header';

function isBool(bool: boolean): null {
    return null;
}

function isReferenceArray(refArray: LinkHeader.Reference[]): null {
    return null;
}

function isString(str: string): null {
    return null;
}

const link = LinkHeader.parse(
    '<example.com>; rel="example"; title="Example Website", ' +
    '<example-twice.com>; rel="example"; title="Example Website Twice", ' +
    '<example-01.com>; rel="alternate"; title="Alternate Example Domain"'
);

const has = link.has('rel', 'alternate');
isBool(has);

const get = link.get('title', 'Example Website');
isReferenceArray(get);

const rel = link.rel('alternate');
rel[0]['title'] !== 'bar';
isReferenceArray(rel);

const set = link.set({ rel: 'next', uri: 'http://example.com/next' });
isReferenceArray(set);

const str = link.toString();
isString(str);
