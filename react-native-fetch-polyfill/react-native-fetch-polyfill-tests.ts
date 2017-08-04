/// <reference path="./react-native-fetch-polyfill.d.ts" />
import fetch from "react-native-fetch-polyfill";

let result: Promise<Response>;
result: Promise<Response> = fetch("https://github.com");
result: Promise<Response> = fetch("https://google.by", {
    method: "GET"
});