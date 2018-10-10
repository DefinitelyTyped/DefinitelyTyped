import transform = require('camaro');

const x: object = transform('<root><child>text</child></root>', { text: 'root/child'});
