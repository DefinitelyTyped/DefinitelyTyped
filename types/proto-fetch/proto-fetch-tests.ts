import fileFetch = require("file-fetch");
import httpFetch from "node-fetch";
import protoFetch = require("proto-fetch");

const fetch = protoFetch({
    file: fileFetch,
    http: httpFetch,
    https: httpFetch,
});

const response: Promise<Response> = fetch("http://example.com/");
