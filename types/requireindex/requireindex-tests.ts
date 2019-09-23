import idx = require('requireindex');

const files = idx('.');
const filesWithBaseName = idx('.', ['again', 'somemore']);
