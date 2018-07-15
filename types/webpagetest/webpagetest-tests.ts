import WebPageTest = require('webpagetest');

/* Examples from NPM */

// 1. Instantiating
const wpt = new WebPageTest('my-wpt.foo.com'); // default: www.webpagetest.org
const wptPublic = new WebPageTest('www.webpagetest.org', 'MY_API_KEY');

// 2. Get available locations
wpt.getLocations((err, data) => {
  console.log(err || data);
});

// 3. Run test on https://twitter.com/marcelduran from San Jose on IE9
wpt.runTest('https://twitter.com/marcelduran', {location: 'SanJose_IE9'}, (err, data) => {
  console.log(err || data);
});

// 4. Check current test status
wpt.getTestStatus('121025_PT_N8K', (err, data) => {
  console.log(err || data);
});

// 5. Get test results
wpt.getTestResults('121025_PT_N8K', (err, data) => {
  console.log(err || data);
});

// 6. Get test waterfall thumbnail from repeat view as data URI
wpt.getWaterfallImage('121025_PT_N8K', {
  thumbnail: true,
  repeatView: true,
  dataURI: true
}, (err, data, info) => {
  console.log(err || data, info);
});

// Run test on https://twitter.com/marcelduran and poll results every 5 seconds timing out in 60 seconds
wpt.runTest('https://twitter.com/marcelduran', {pollResults: 5, timeout: 60}, (err, data) => {
  console.log(err || data);
});

// Or run test on https://twitter.com/marcelduran and wait results listening on localhost* port 8000**
wpt.runTest('https://twitter.com/marcelduran', {waitResults: 'localhost:8000'}, (err, data) => {
  console.log(err || data);
});

/* Working examples */

wpt.getLocations((err, data) => {
  const { response } = data;
  const { data: locationData } = response;
  const { location: locations } = locationData;
  console.log(locations);
});

wpt.getTestStatus('180208_PA_28V', (err, data) => {
  const { data: testStatus } = data;
  const { testInfo } = testStatus;
  console.log(testStatus.testId);
  console.log(testInfo.url);
});
