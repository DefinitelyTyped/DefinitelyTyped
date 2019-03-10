import shortenRepoUrl = require('shorten-repo-url');

// $ExpectType string
shortenRepoUrl('https://github.com/nodejs/node/tree/v0.12/doc', 'https://github.com/nodejs/node');
// $ExpectType string
shortenRepoUrl('https://github.com/nodejs/node/tree/v0.12/doc');

const link = document.createElement('a');
link.setAttribute('href', 'https://github.com/nodejs/node/tree/v0.12/doc');

// $ExpectType boolean
shortenRepoUrl.applyToLink(link);
// $ExpectType boolean
shortenRepoUrl.applyToLink(link, 'https://github.com/nodejs/node');
