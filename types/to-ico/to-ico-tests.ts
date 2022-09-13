import toIco = require('to-ico');

toIco(Buffer.alloc(0)).then();
toIco('').then();
toIco(['', Buffer.alloc(0)]).then();

toIco(Buffer.alloc(0), { resize: false }).then();
toIco('', { resize: false }).then();
toIco(['', Buffer.alloc(0)], { resize: false }).then();

toIco(Buffer.alloc(0), { sizes: [1, 2, 3] }).then();
toIco('', { sizes: [1, 2, 3] }).then();
toIco(['', Buffer.alloc(0)], { sizes: [1, 2, 3] }).then();
