/// <reference path="dompurify.d.ts" />

import dompurify = require('dompurify');

dompurify.sanitize('<script>alert("hi")</script>');
dompurify.addHook('beforeSanitizeElements', (el, data, config) => {
  return el;
});
