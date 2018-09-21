import tabbable = require('tabbable');

const el = document.createElement('div');
tabbable(el);
tabbable(el, { includeContainer: true });

tabbable(document);
tabbable(document, { includeContainer: true });
