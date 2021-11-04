import insertTextAtCursor = require('insert-text-at-cursor');

const t = document.getElementById('text') as HTMLTextAreaElement;
const i = document.getElementById('input') as HTMLInputElement;

insertTextAtCursor(t, 'foobar');
insertTextAtCursor(i, 'hello');
