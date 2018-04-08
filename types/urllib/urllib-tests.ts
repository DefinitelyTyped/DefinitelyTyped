import * as urllib from "urllib";

urllib.curl('https://example.test.com', {
  method: "GET",
  data: {
    test: 'test',
  }
});
