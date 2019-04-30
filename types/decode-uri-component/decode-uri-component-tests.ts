import decodeUriComponent = require('decode-uri-component');

// $ExpectType string
decodeUriComponent('%25');
decodeUriComponent('%');
decodeUriComponent('st%C3%A5le');
decodeUriComponent('%st%C3%A5le%');
decodeUriComponent('%%7Bst%C3%A5le%7D%');
decodeUriComponent('%7B%ab%%7C%de%%7D');
decodeUriComponent('%FE%FF');
decodeUriComponent('%C2');
decodeUriComponent('%C2%B5');
