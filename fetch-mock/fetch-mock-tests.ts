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
