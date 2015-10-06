/// <reference path="whatwg-fetch.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

function test_fetchUrlWithOptions() {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	var requestOptions: RequestInit = {
		method: "POST",
		headers: headers,
		mode: 'same-origin',
		credentials: 'omit',
		cache: 'default'
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

function test_fetchUrlWithRequestObject() {
	var requestOptions: RequestInit = {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		}
	};
	var request: Request = new Request("http://www.andlabs.net/html5/uCOR.php", requestOptions);
	handlePromise(window.fetch(request));
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
