import Zip = require('node-7z'); // Name the class as you want!
var myTask = new Zip();
myTask.extractFull('myArchive.7z', 'destination', { p: 'myPassword' })

// Equivalent to `on('data', function (files) { // ... });`
.progress(function (files: Array<string>): void {
  console.log('Some files are extracted: %s', files);
})

// When all is done
.then(function () {
  console.log('Extracting done!');
})

// On error
.catch(function (err: any) {
  console.error(err);
});
