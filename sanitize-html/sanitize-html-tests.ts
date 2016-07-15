/// <reference path="sanitize-html.d.ts" />

import sanitize = require('sanitize-html');

let options: sanitize.IOptions = {
  allowedTags: sanitize.defaults.allowedTags.concat('h1', 'h2', 'img'),
  allowedAttributes: {
    'a': sanitize.defaults.allowedAttributes['a'].concat('rel'),
    'img': ['src', 'height', 'width', 'alt']
  },
  transformTags: {
    'a': sanitize.simpleTransform('a', { 'rel': 'nofollow' }),
    'img': 'canvas'
  }
};

let unsafe = '<div><script>alert("hello");</script></div>';

let safe = sanitize(unsafe, options);
