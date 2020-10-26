/// <reference types="node" />
import escapeHtml = require('escape-html');

const desc = 'I <b>think</b> this is good.';
const fullName = 'John "Johnny" Smith';

console.dir(`<input name="full_name" value="${escapeHtml(fullName)}">`);
console.dir(`<textarea name="desc">${escapeHtml(desc)}</textarea>`);
