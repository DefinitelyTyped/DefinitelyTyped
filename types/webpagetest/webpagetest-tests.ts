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
  if (err) {
    data; // $ExpectType { response: Response<{ location: Location[]; }>; } | undefined
    return;
  }

  if (data) {
    const {response} = data; // $ExpectType { response: Response<{ location: Location[]; }>; }
    const {data: locationData} = response; // $ExpectedType Response<{ location: Location[]; }>
    const {location: locations} = locationData; // $ExpectedType { location: Location[]; }
    locations; // $ExpectType Location[]
  }
});

wpt.getTestStatus('180208_PA_28V', (err, data) => {
  if (data) {
    const {data: testStatus} = data; // $ExpectType Response<TestStatus>
    const {testInfo} = testStatus; // $ExpectType TestStatus
    testStatus.testId; // $ExpectType string
    testInfo.url; // $ExpectType string
  }
});

wpt.getTestResults('180208_PA_28V', (err, data) => {
  if (data) {
    const {data: testResult} = data; // $ExpectType Response<TestResult>
    const {runs, id, url, median} = testResult; // $ExpectType TestResult
    id; // $ExpectType string
    url; // $ExpectType string
    runs['1']; // $ExpectType TestRun
    median; // $ExpectType TestRun
  }
});

console.log(WebPageTest.scriptToString([
  'helloWorld',
  { test: 12 },
  { foo: 'bar' },
  { array: [21, 42, 1337] },
  { strings: ['hello', 'world'] }
]));
console.log(wpt.scriptToString([
  'helloWorld',
  { test: 12 },
  { foo: 'bar' },
  { array: [21, 42, 1337] },
  { strings: ['hello', 'world'] }
]));
