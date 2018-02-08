import transform = require('camaro');

const x: Object = transform('<root><child>text</child></root>', { text: 'root/child'});
