import pWhilst = require('p-whilst');

let count = 0;

pWhilst(() => count < 5, () => count++).then(() => {});
