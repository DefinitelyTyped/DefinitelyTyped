

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

function test_Body_json() {
	interface FooBar {
		foo: string;
		bar: string;
	}

	fetch('http://test.com')
		.then(response => response.json<FooBar>())
		.then(fooBar => {
			console.log(fooBar.foo);
			console.log(fooBar.bar);
		});

	fetch('http://test.com')
		.then(response => <Promise<FooBar>> response.json())
		.then(fooBar => {
			console.log(fooBar.foo);
			console.log(fooBar.bar);
		});

	fetch('http://test.com')
		.then(response => response.json() as Promise<FooBar>)
		.then(fooBar => {
			console.log(fooBar.foo);
			console.log(fooBar.bar);
		});

	fetch('http://test.com')
		.then(response => response.json())
		.then(fooBar => {
			// fooBar is of type any, not of type FooBar

			// FIXME Was behaving properly with TypeScript 2.0.10, not anymore with 2.1.4
			// See Wrong type with Promise chaining and 2.1.4 https://github.com/Microsoft/TypeScript/issues/12409
			//console.log(fooBar.foo);
			//console.log(fooBar.bar);
		});
}
