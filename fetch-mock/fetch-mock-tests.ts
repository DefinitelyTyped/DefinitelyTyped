/// <reference path="./fetch-mock.d.ts" />

import * as fetchMock from "fetch-mock";

fetchMock.mock("http://test.com", 200);
fetchMock.mock(/test\.com/, 200);
fetchMock.mock(() => true, 200);
fetchMock.mock((url, opts) => true, 200);

fetchMock.mock(/test/, "test").mock(/test/, { a: "b" });
fetchMock.mock(/test/, {
    status: 200,
    headers: {
        "test": "test"
    },
    body: {
        a: "b"
    }
});

fetchMock.restore().reset();

(fetchMock.calls().matched[0][1] as RequestInit).body;
fetchMock.calls().unmatched[0][0].toUpperCase();
fetchMock.calls("http://test.com")[0][0].toUpperCase();
(fetchMock.calls("http://test.com")[0][1] as RequestInit).body;

fetchMock.called("http://test.com");

(fetchMock.lastCall()[1] as RequestInit).body;
fetchMock.lastUrl();
fetchMock.lastOptions();

fetchMock.get("http://test.com", 200)
fetchMock.post("http://test.com", 200)
fetchMock.put("http://test.com", 200)
fetchMock.delete("http://test.com", 200)
fetchMock.head("http://test.com", 200)

fetchMock.get("http://test.com", 200, {method: "GET"})
fetchMock.post("http://test.com", 200, {method: "POST"})
fetchMock.put("http://test.com", 200, {method: "PUT"})
fetchMock.delete("http://test.com", 200, {method: "DELETE"})
fetchMock.head("http://test.com", 200, {method: "HEAD"})
