import fileEntryCache = require('file-entry-cache');

const cache = fileEntryCache.create('testCache');
fileEntryCache.create('myCaceh', './fixtures', false); // $ExpectType FileEntryCache
fileEntryCache.createFromFile('./fixtures/data.txt', true); // $ExpectType FileEntryCache
const files = ['./fixtures/*.txt'];
let oFiles = cache.getUpdatedFiles(files);
cache.reconcile();
const cache2 = fileEntryCache.create('testCache');
oFiles = cache.getUpdatedFiles(files);
cache.removeEntry('path/to/file');
const entries = cache.normalizeEntries(files);
cache.deleteCacheFile();
cache.destroy();
// entry = {
//   key: 'some/name/file', the path to the file
//   changed: true, // if the file was changed since previous run
//   meta: {
//     size: 3242, // the size of the file
//     mtime: 231231231, // the modification time of the file
//     data: {} // some extra field stored for this file (useful to save the result of a transformation on the file
//   }
// };
