import Pager = require('memory-pager');

const pages = new Pager(1024);
new Pager();
Pager(1024);
Pager();

const page = pages.get(10);
page; // $ExpectType Page
page.offset; // $ExpectType number
page.buffer; // $ExpectType Buffer
pages.get(10, false); // $ExpectType Page
pages.get(10, true); // $ExpectType Page | undefined
pages.set(10, new Buffer(10));
pages.updated(page);
pages.lastUpdate(); // $ExpectType Page | null
pages.toBuffer(); // $ExpectType Buffer
