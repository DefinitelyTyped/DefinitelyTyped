import uslug = require("uslug");

uslug('Быстрее и лучше!'); // 'быстрее-и-лучше'
uslug('汉语/漢語'); // '汉语漢語'

uslug('Y U NO', { lower: false }); // 'Y-U-NO'
uslug('Y U NO', { spaces: true }); // 'y u no'
uslug('Y-U|NO', { allowedChars: '|' }); // 'yu|no'
