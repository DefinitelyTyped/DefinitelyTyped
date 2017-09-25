import mock = require('xhr-mock');

// replace the real XHR object with the mock XHR object
mock.setup();

// create a mock response for all POST requests with the URL http://localhost/api/user
mock.post('http://localhost/api/user', (req: mock.MockRequest, res: mock.MockResponse) => {
  // return null;              //simulate an error
  // return res.timeout(true); //simulate a timeout

  return res
    .status(201)
    .header('Content-Type', 'application/json')
    .body(JSON.stringify({data: {
      first_name: 'John', last_name: 'Smith'
    }}));
});

// create an instance of the (mock) XHR object and use as per normal
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    // when you're finished put the real XHR object back
    mock.teardown();
  }
};
