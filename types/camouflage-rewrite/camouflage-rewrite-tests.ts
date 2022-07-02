import rewrite = require('camouflage-rewrite');
import express = require('express');

const app = express();

// minimal options
app.use(rewrite({
    url: 'http://example.com/api'
}));

// full options
app.use(rewrite({
    rewriteContent: true,
    rewriteHeaders: true,
    mediaTypes: [
        'text/turtle',
        'application/ld+json'
    ],
    url: 'http://example.com/api'
}));
