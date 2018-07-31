import pDoWhilst = require('p-do-whilst');

let count = 0;

pDoWhilst(() => count++, () => count < 5).then(() => {});
