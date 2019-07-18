import createMatcher from 'feather-route-matcher';

const matcher = createMatcher({
    '/': 33,
    '/number-13': 13,
    '/number/:num': 199,
});

const numberOfPage: number = matcher('/').page;
const matchedURL: string = matcher('/').url;
const params: {} | null = matcher('/number/34').params;

const knownParams = matcher('/number/24').params as { num: string };

const extractedNum: string = knownParams.num;
