import fetch, {
    Blob,
    Headers,
    Request,
    RequestInit,
    Response,
    FetchError
} from "node-fetch";
import { URL } from "url";
import { Agent } from "http";

function test_fetchUrlWithOptions() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions: RequestInit = {
        compress: true,
        follow: 10,
        headers,
        method: "POST",
        redirect: "manual",
        size: 100,
        timeout: 5000
    };
    handlePromise(
        fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions)
    );
}

function test_fetchUrlWithHeadersObject() {
    const requestOptions: RequestInit = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    };
    handlePromise(
        fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions)
    );
}

function test_fetchUrl() {
    handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php"));
}

function test_fetchUrlArrayBuffer() {
    handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php"), true);
}

function test_fetchUrlWithRequestObject() {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        signal: {
            aborted: false,

            addEventListener: (type: "abort", listener: ((event: any) => any), options?: boolean | {
                capture?: boolean,
                once?: boolean,
                passive?: boolean
            }) => undefined,

            removeEventListener: (type: "abort", listener: ((event: any) => any), options?: boolean | {
                capture?: boolean
            }) => undefined,

            dispatchEvent: (event: any) => false
        }
    };
    const request: Request = new Request(
        "http://www.andlabs.net/html5/uCOR.php",
        requestOptions
    );
    const timeout: number = request.timeout;
    const size: number = request.size;
    const agent: Agent | ((parsedUrl: URL) => Agent) | undefined = request.agent;
    const protocol: string = request.protocol;

    handlePromise(fetch(request));
}

function test_fetchUrlObject() {
    handlePromise(fetch(new URL("https://example.org")));
}

async function test_responseReturnTypes() {
    const response = await fetch(new URL("https://example.org"));

    // $ExpectType Blob
    const blob = await response.clone().blob();

    // $ExpectType string
    const text = await response.clone().text();

    // $ExpectType Buffer
    const buffer = await response.clone().buffer();
}

function test_fetchUrlObjectWithRequestObject() {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        signal: {
            aborted: false,

            addEventListener: (type: "abort", listener: ((event: any) => any), options?: boolean | {
                capture?: boolean,
                once?: boolean,
                passive?: boolean
            }) => undefined,

            removeEventListener: (type: "abort", listener: ((event: any) => any), options?: boolean | {
                capture?: boolean
            }) => undefined,

            dispatchEvent: (event: any) => false
        }
    };
    const request: Request = new Request(
        new URL("https://example.org"),
        requestOptions
    );
    const timeout: number = request.timeout;
    const size: number = request.size;
    const agent: Agent | ((parsedUrl: URL) => Agent) | undefined = request.agent;
    const protocol: string = request.protocol;

    handlePromise(fetch(request));
}

function test_globalFetchVar() {
    fetch("http://test.com", {}).then(response => {
        // for test only
    });
}

function handlePromise(
    promise: Promise<Response>,
    isArrayBuffer: boolean = false
) {
    promise
        .then(
            (response): Promise<string | ArrayBuffer> => {
                if (response.type === "basic") {
                    // for test only
                }
                if (isArrayBuffer) {
                    return response.arrayBuffer();
                } else {
                    return response.text();
                }
            }
        )
        .then((text: string | ArrayBuffer) => {
            console.log(text);
        });
}

function test_headers() {
    const headers = new Headers();
    const myHeader = "foo";
    headers.raw()[myHeader]; // $ExpectType string[]

    [...headers]; // $ExpectType [string, string][]
    [...headers.entries()]; // $ExpectType [string, string][]
    [...headers.keys()]; // $ExpectType string[]
    [...headers.values()]; // $ExpectType [string][]
}

function test_isRedirect() {
    fetch.isRedirect(301);
    fetch.isRedirect(201);
}

function test_FetchError() {
    new FetchError("message", "type", {
        name: 'Error',
        message: 'Error message',
        code: "systemError",
    });
    new FetchError("message", "type", {
        name: 'Error',
        message: "Error without code",
    });
    new FetchError("message", "type");
}

function test_Blob() {
    new Blob();
    new Blob(["beep", "boop"]);
    new Blob(["beep", "boop"], { endings: "native" });
    new Blob(["beep", "boop"], { type: "text/plain" });
}

function test_ResponseInit() {
    fetch("http://test.com", {}).then(response => {
        new Response(response.body);
        new Response(response.body, {
            url: response.url,
            size: response.size,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            timeout: response.timeout
        });
    });
}
