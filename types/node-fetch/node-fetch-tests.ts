import { Agent } from "http";
import fetch, {
    AbortError,
    Blob,
    FetchError,
    HeaderInit,
    Headers,
    HeadersInit,
    Request,
    RequestInit,
    Response,
} from "node-fetch";
import { URL } from "url";
// eslint-disable-next-line no-duplicate-imports -- test namespace import where import name differs
import Fetch from "node-fetch";
import FormData = require("form-data");

function test_FetchNamespace() {
    // without `import _default = fetch;`, Fetch.HeaderInit errors with "Cannot find namespace 'Fetch'"
    const h1: Fetch.HeaderInit = [["Content-Type", "applicaion/json"]];
}

function test_AbortError() {
    const e = new AbortError("message");

    // $ExpectType "aborted"
    e.type;

    // $ExpectType "AbortError"
    e.name;

    // $ExpectType string
    e.message;
}

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
        timeout: 5000,
        agent: false,
    };
    handlePromise(
        fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions),
    );
}

function test_headerInit() {
    const h1: HeaderInit = [["Content-Type", "applicaion/json"]];
    const h2: HeadersInit = h1;
}

function test_fetchUrlWithHeadersObject() {
    const requestOptions: RequestInit = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    };
    handlePromise(
        fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions),
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
            "Content-Type": "application/json",
        },
        signal: {
            reason: undefined,
            aborted: false,

            addEventListener: (
                type: "abort",
                listener: (event: any) => any,
                options?: boolean | {
                    capture?: boolean | undefined;
                    once?: boolean | undefined;
                    passive?: boolean | undefined;
                },
            ) => undefined,

            removeEventListener: (
                type: "abort",
                listener: (event: any) => any,
                options?: boolean | {
                    capture?: boolean | undefined;
                },
            ) => undefined,

            dispatchEvent: (event: any) => false,
            onabort: null,
            throwIfAborted: () => {},
        },
    };
    const request: Request = new Request(
        "http://www.andlabs.net/html5/uCOR.php",
        requestOptions,
    );
    const timeout: number = request.timeout;
    const size: number = request.size;
    const agent: Agent | ((parsedUrl: URL) => boolean | Agent | undefined) | boolean | undefined = request.agent;
    const protocol: string = request.protocol;

    handlePromise(fetch(request));
}

function test_fetchUrlObject() {
    handlePromise(fetch(new URL("https://example.org")));
}

async function test_formData() {
    await fetch(new URL("https://example.org"), { body: new FormData() });
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
            "Content-Type": "application/json",
        },
        signal: {
            reason: undefined,
            aborted: false,

            addEventListener: (
                type: "abort",
                listener: (event: any) => any,
                options?: boolean | {
                    capture?: boolean | undefined;
                    once?: boolean | undefined;
                    passive?: boolean | undefined;
                },
            ) => undefined,

            removeEventListener: (
                type: "abort",
                listener: (event: any) => any,
                options?: boolean | {
                    capture?: boolean | undefined;
                },
            ) => undefined,

            dispatchEvent: (event: any) => false,
            onabort: null,
            throwIfAborted: () => {},
        },
    };
    const request: Request = new Request(
        new URL("https://example.org"),
        requestOptions,
    );
    const timeout: number = request.timeout;
    const size: number = request.size;
    const agent: Agent | ((parsedUrl: URL) => boolean | Agent | undefined) | boolean | undefined = request.agent;
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
    isArrayBuffer: boolean = false,
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
            },
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
    [...headers.values()]; // $ExpectType string[]
    headers.raw(); // $ExpectType { [k: string]: string[]; }
}

function test_isRedirect() {
    fetch.isRedirect(301);
    fetch.isRedirect(201);
}

function test_FetchError() {
    new FetchError("message", "type", {
        name: "Error",
        message: "Error message",
        code: "systemError",
    });
    new FetchError("message", "type", {
        name: "Error",
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
            timeout: response.timeout,
            counter: 5,
        });
    });
}

function test_ResponseInitRawHeaders() {
    fetch("http://test.com", {}).then(response => {
        new Response(response.body, {
            url: response.url,
            size: response.size,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers.raw(),
            timeout: response.timeout,
        });
    });
}

async function test_BlobText() {
    const someString = await new Blob(["Hello world"]).text(); // $ExpectType string
}

function test_AbortSignal() {
    let abortSignal: AbortSignal;
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    };

    requestOptions.signal = {
        reason: undefined,
        aborted: false,
        addEventListener: (
            type: "abort",
            listener: (event: any) => any,
            options?: boolean | {
                capture?: boolean | undefined;
                once?: boolean | undefined;
                passive?: boolean | undefined;
            },
        ) => undefined,

        removeEventListener: (
            type: "abort",
            listener: (event: any) => any,
            options?: boolean | {
                capture?: boolean | undefined;
            },
        ) => undefined,

        dispatchEvent: (event: any) => false,
        onabort: (event: any) => "something",
        throwIfAborted: () => {},
    };
    abortSignal = requestOptions.signal;

    requestOptions.signal = {
        reason: undefined,
        aborted: false,
        addEventListener: (
            type: "abort",
            listener: (event: any) => any,
            options?: boolean | {
                capture?: boolean | undefined;
                once?: boolean | undefined;
                passive?: boolean | undefined;
            },
        ) => {},

        removeEventListener: (
            type: "abort",
            listener: (event: any) => any,
            options?: boolean | {
                capture?: boolean | undefined;
            },
        ) => {},

        dispatchEvent: (event: any) => true,
        onabort: (event: any) => false,
        throwIfAborted: () => {},
    };
    abortSignal = requestOptions.signal;

    requestOptions.signal = {
        reason: undefined,
        aborted: true,
        addEventListener: (
            type: "abort",
            listener: (event: string) => string,
            options?: boolean | {
                capture?: boolean | undefined;
                once?: boolean | undefined;
                passive?: boolean | undefined;
            },
        ) => undefined,

        removeEventListener: (
            type: "abort",
            listener: (event: any) => any,
            options?: boolean | {
                capture?: boolean | undefined;
            },
        ) => undefined,

        dispatchEvent: (event: any) => false,
        onabort: null,
        throwIfAborted: () => {},
    };
    abortSignal = requestOptions.signal;
}
