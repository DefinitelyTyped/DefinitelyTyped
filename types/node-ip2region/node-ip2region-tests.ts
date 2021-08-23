import IP2Region = require('node-ip2region');

const searcher = new IP2Region({
    dbPath: './db',
});
searcher.binarySearch('1.1.1.1', (_err, result) => {
    result?.city;
    result?.region;
});
let result = searcher.binarySearchSync('1.1.1.1');
result?.city;
result?.region;
searcher.btreeSearch('1.1.1.1', (_err, result) => {
    result?.city;
    result?.region;
});
result = searcher.btreeSearchSync('1.1.1.1');
result?.city;
result?.region;
searcher.memorySearch('1.1.1.1', (_err, result) => {
    result?.city;
    result?.region;
});
result = searcher.memorySearchSync('1.1.1.1');
result?.city;
result?.region;

searcher.destroy();
