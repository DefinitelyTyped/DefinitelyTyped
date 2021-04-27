import fetchRetry = require("@adobe/node-fetch-retry");
import { Request, Response } from "node-fetch";

function test_fetchRetryWithUrlString() {
    const options: fetchRetry.Options = {
        retryOptions: {
            retryMaxDuration: 10000,
            retryInitialDelay: 3000,
            retryOnHttpResponse: (_response: Response): boolean => (true),
            retryBackoff: 2,
            socketTimeout: 60000,
            forceSocketTimeout: false
        }
    };

    fetchRetry("http://something.com/", options);
}

function test_fetchRetryWithRequestString() {
    const request = new Request("http://something.com", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    const options: fetchRetry.Options = {
        retryOptions: {
            retryMaxDuration: 10000,
            retryInitialDelay: 3000,
            retryOnHttpResponse: (_response: Response): boolean => true,
            retryBackoff: 2,
            socketTimeout: 60000,
            forceSocketTimeout: false,
        },
    };

    fetchRetry(request, options);
}

function test_fetchRetryWithUrlStringAndFurtherOptions() {
    const options: fetchRetry.Options = {
        headers: {
            "Content-Type" : "application/json"
        },
        method: "GET",
        retryOptions: {
            retryMaxDuration: 10000,
            retryInitialDelay: 3000,
            retryOnHttpResponse: (_response: Response): boolean => true,
            retryBackoff: 2,
            socketTimeout: 60000,
            forceSocketTimeout: false,
        },
    };

    fetchRetry('http://something.com/', options);
}
