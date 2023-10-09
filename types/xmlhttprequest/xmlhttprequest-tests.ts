import { XMLHttpRequest } from "xmlhttprequest";

const { OPENED, HEADERS_RECEIVED, LOADING, DONE } = XMLHttpRequest;

const x = new XMLHttpRequest();
x.open("GET", "https://example.com");
