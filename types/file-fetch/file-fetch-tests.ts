import fileFetch = require("file-fetch");
import { Headers } from "node-fetch";

let response: Promise<Response>;

response = fileFetch("http://example.com/", { method: "HEAD" });

const defaultFetch = fileFetch.create();
const configuredFetch = fileFetch.create({
    baseDir: "src",
    baseURL: "http://example.com/",
});

response = configuredFetch("http://example.com/", { method: "HEAD" });

const headers: Headers = new fileFetch.Headers({
    "Content-Type": "application/json",
});
