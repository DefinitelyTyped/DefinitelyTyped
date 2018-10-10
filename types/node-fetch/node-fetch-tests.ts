import fetch, { Headers, Request, RequestInit, Response } from 'node-fetch';
import { Agent } from "http";

function test_fetchUrlWithOptions() {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	const requestOptions: RequestInit = {
		compress: true,
		follow: 10,
		headers,
		method: "POST",
		redirect: 'manual',
		size: 100,
		timeout: 5000,
	};
	handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
}

function test_fetchUrlWithHeadersObject() {
	const requestOptions: RequestInit = {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST",
	};
	handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
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
			'Content-Type': 'application/json'
		}
	};
	const request: Request = new Request("http://www.andlabs.net/html5/uCOR.php", requestOptions);
	const timeout: number = request.timeout;
	const size: number = request.size;
	const agent: Agent | undefined = request.agent;
	const protocol: string = request.protocol;

	handlePromise(fetch(request));
}

function test_globalFetchVar() {
	fetch('http://test.com', {})
		.then(response => {
			// for test only
		});
}

function handlePromise(promise: Promise<Response>, isArrayBuffer: boolean = false) {
	promise.then((response): Promise<string | ArrayBuffer> => {
		if (response.type === 'basic') {
			// for test only
		}
		if (isArrayBuffer) {
			return response.arrayBuffer();
		} else {
			return response.text();
		}
	}).then((text: string | ArrayBuffer) => {
		console.log(text);
	});
}

function test_headersRaw() {
	const headers = new Headers();
	const myHeader = 'foo';
	headers.raw()[myHeader]; // $ExpectType string[]
}
