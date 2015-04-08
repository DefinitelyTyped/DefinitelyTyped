﻿/// <reference path="whatwg-fetch.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

function test_fetchUrlWithOptions() {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	var requestOptions: RequestInit = {
		method: "POST",
		headers: headers
	};
	handlePromise(window.fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
}

function test_fetchUrlWithHeadersObject() {
	var requestOptions: RequestInit = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		}
	};
	handlePromise(window.fetch("http://www.andlabs.net/html5/uCOR.php", requestOptions));
}

function test_fetchUrl() {
	handlePromise(window.fetch("http://www.andlabs.net/html5/uCOR.php"));
}

function handlePromise(promise: Promise<Response>) {
	promise.then((response) => {
		return response.text();
	}).then((text) => {
		console.log(text);
	});
}
