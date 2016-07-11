/// <reference path="node-fetch.d.ts" />

import * as fetch from 'node-fetch';

function test_fetchUrlWithOptions() {
	var headers = new _fetch.Headers();
	headers.append("Content-Type", "application/json");
	var requestOptions: _fetch.RequestInit = {
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
	var requestOptions: _fetch.RequestInit = {
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
	var requestOptions: _fetch.RequestInit = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		}
	};
	var request: _fetch.Request = new _fetch.Request("http://www.andlabs.net/html5/uCOR.php", requestOptions);
	handlePromise(fetch(request));
}

function test_globalFetchVar() {
	fetch('http://test.com', {})
		.then(response => {
			// for test only
		});
}

function handlePromise(promise: Promise<_fetch.Response>) {
	promise.then((response) => {
		if (response.type === 'basic') {
			// for test only
		}
		return response.text();
	}).then((text) => {
		console.log(text);
	});
}
