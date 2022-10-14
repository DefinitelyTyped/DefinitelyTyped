import templater = require('tiny-templater');

const tpl = templater('hey, {{ name }}, {{ phrases.question }}?');

tpl({ name: 'buddy', phrases: { question: "what's the word?" } });
tpl({ name: 'buddy', phrases: {} });
tpl({ name: 'buddy' });
