/// <reference path="node-fetch.d.ts" />

import fetch = require('node-fetch');

function test_fetchUrlWithOptions() {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	var requestOptions: RequestInit = {
		method: "POST",
		headers: headers,
		mode: 'same-origin',
		credentials: 'omit',
		cache: 'default',
		redirect: 'manual'
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
