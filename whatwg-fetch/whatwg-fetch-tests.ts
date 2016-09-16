﻿

function test_HeadersCopiedFromHeaders1() {
	var source = new Headers();
	source.append('Content-Type', 'application/json');
	return new Headers(source);
}

function test_HeadersCopiedFromHash1() {
	var source:HeadersInit = {
		'Content-Type': 'application/json'
	};
	return new Headers(source);
}

function test_HeadersCopiedFromHeaders2() {
	var source = new Headers();
	source.append('Content-Type', 'application/json');
	return new Headers(source);
}

function test_HeadersCopiedFromHash2() {
	var source:HeadersInit = {
		'Content-Type': 'application/json'
	};
	return new Headers(source);
}

function test_HeadersCopiedFromHeaders3() {
	var source = new Headers();
	source.append('Content-Type', 'application/json');
	return new Headers(source);
}

function test_HeadersCopiedFromHash3() {
	var source:HeadersInit = {
		'Content-Type': 'application/json'
	};
	return new Headers(source);
}

function test_HeadersCopiedFromHeaders() {
	var source = new Headers();
	source.append('Content-Type', 'application/json');
	return new Headers(source);
}

function test_HeadersCopiedFromHash() {
	var source: DOMStringMap = {
		'Content-Type': 'application/json'
	};
	return new Headers(source);
}

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
