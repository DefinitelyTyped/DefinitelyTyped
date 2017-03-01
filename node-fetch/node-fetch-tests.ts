import fetch, { Headers, Request, RequestInit, Response } from 'node-fetch';
import { Agent } from "http";

function test_fetchUrlWithOptions() {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	var requestOptions: RequestInit = {
		method: "POST",
		headers: headers,
		compress: true,
		follow: 10,
		redirect: 'manual',
		size: 100,
		timeout: 5000
	};
	handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
}

function test_fetchUrlWithHeadersObject() {
	var requestOptions: RequestInit = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		}
	};
	handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
}

function test_fetchUrl() {
	handlePromise(fetch("http://www.andlabs.net/html5/uCOR.php"));
}

function test_fetchUrlWithRequestObject() {
	var requestOptions: RequestInit = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		}
	};
	var request: Request = new Request("http://www.andlabs.net/html5/uCOR.php", requestOptions);
	var timeout: number = request.timeout;
	var size: number = request.size;
	var agent: Agent = request.agent;
	var protocol: string = request.protocol

	handlePromise(fetch(request));
}

function test_globalFetchVar() {
	fetch('http://test.com', {})
		.then(response => {
			// for test only
		});
}

function handlePromise(promise: Promise<Response>) {
	promise.then((response) => {
		if (response.type === 'basic') {
			// for test only
		}
		return response.text();
	}).then((text) => {
		console.log(text);
	});
}
