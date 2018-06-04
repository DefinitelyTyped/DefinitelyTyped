import stripJsonComments = require("strip-json-comments");

const json = '{/*rainbows*/"unicorn":"cake"}';

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}

stripJsonComments(json, {});
stripJsonComments(json, {
    whitespace: true
});
