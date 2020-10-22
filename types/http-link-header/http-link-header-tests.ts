import LinkHeader = require('http-link-header');

function isLinkHeader(l: LinkHeader): null {
  return null;
}

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
isReferenceArray(link.refs);

const offsetLink = LinkHeader.parse(' <example.com>; rel="example"', 1);

const has = link.has('rel', 'alternate');
isBool(has);

const get = link.get('title', 'Example Website');
isReferenceArray(get);

const rel = link.rel('alternate');
rel[0]['title'] !== 'bar';
isReferenceArray(rel);

isLinkHeader(link.set({ rel: 'next', uri: 'http://example.com/next' }));

const str = link.toString();
isString(str);

const constructedLink = new LinkHeader();
