/// <reference types="node" />

import reporter = require('postcss-reporter');
import formatter = require('postcss-reporter/lib/formatter');
reporter({
    formatter: input => {
        return `${input.source} produced ${input.messages.length} messages`;
    },
});

const basicMessages = [
    {
        type: 'warning',
        plugin: 'foo',
        text: 'foo warning',
    },
    {
        type: 'warning',
        plugin: 'bar',
        text: 'bar warning',
    },
    {
        type: 'warning',
        plugin: 'baz',
        text: 'baz warning',
    },
    {
        type: 'error',
        plugin: 'baz',
        text: 'baz error',
    },
];

const myFormatter = formatter({
    noIcon: true,
    noPlugin: true,
    positionless: 'last'
});
// Defaults
myFormatter({ messages: [], source: 'test' });

const warningLog = myFormatter({
    messages: basicMessages,
    source: 'someSource',
});
console.log(warningLog);
