import * as urllib from ".";

urllib.curl('https://example.test.com', {
  method: "GET",
  data: {
    test: 'test',
  }
})
