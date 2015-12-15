/// <reference path="./protractor-http-mock.d.ts" />

function TestConfig() {
    mock.config = {
		rootDirectory: 'root',
		protractorConfig: 'protractor.conf.js'
	};
}

function TestCtorOverloads() {
	let noParam: mock.ProtractorHttpMock = mock();
    let emptyArray: mock.ProtractorHttpMock = mock([]);
    let mockFiles: mock.ProtractorHttpMock = mock(['mock1', 'mock2']);
	let skipDefaults: mock.ProtractorHttpMock = mock([], true);

	let del: mock.requests.Delete<number> = {
		request: {
			path: 'path',
			method: 'DELETE'
		},
		response: {
			status: 400,
			data: 1
		}
	};
	let put: mock.requests.Put<number> = {
		request: {
			path: 'path',
			method: 'PUT'
		},
		response: {
			status: 400,
			data: 1
		}
	};
	let mocks: mock.ProtractorHttpMock = mock([del, put]);
}

function TestTeardown() {
	mock.teardown();
}

function TestRequestsMade() {
	let values: Array<mock.ReceivedRequest>;
	mock.requestsMade().then(v => values = v);
}

function TestClearRequests() {
	let promiseValue: boolean;
	mock.clearRequests().then(value => {
		promiseValue = value;
	});
}

function TestGetRequestDefinitions() {
	let getMinium: mock.requests.Get<number> = {
		request: {
			path: 'path',
			method: 'GET'
		},
		response: {
			data: 1,
			status: 500
		}
	};

	let getParams: mock.requests.Get<number> = {
		request: {
			path: 'path',
			method: 'GET',
			params: {
				param1: 'param1',
				param2: 2
			}
		},
		response: {
			data: 1,
			status: 500
		}
	};

	let post: mock.requests.Post<number> = {
		request: {
			path: 'path',
			method: 'POST'
		},
		response: {
			data: 1,
			status: 500
		}
	};

	let getQueryString: mock.requests.Get<number> = {
		request: {
			path: 'path',
			method: 'GET',
			queryString: {
				query1: 'query1',
				query2: 2
			}
		},
		response: {
			data: 1,
			status: 500
		}
	};

	let getHeaders: mock.requests.Get<number> = {
		request: {
			path: 'path',
			method: 'GET',
			headers: {
				head1: 'head1',
				head2: 'head2'
			}
		},
		response: {
			data: 1,
			status: 500
		}
	};
}

function TestPostRequestDefinitions() {
	let post: mock.requests.Post<number> = {
		request: {
			path: 'path',
			method: 'POST'
		},
		response: {
			data: 1,
			status: 500
		}
	};

	let postData: mock.requests.PostData<number, string> = {
		request: {
			path: 'path',
			method: 'POST',
			data: 'data'
		},
		response: {
			data: 1,
			status: 500
		}
	};
}

function TestHeadRequestDefinitions() {
	let head: mock.requests.Head<number> = {
		request: {
			path: 'path',
			method: 'HEAD'
		},
		response: {
			status: 500,
			data: 1
		}
	};
}

function TestDeleteRequestDefinitions() {
	let del: mock.requests.Delete<number> = {
		request: {
			path: 'path',
			method: 'DELETE'
		},
		response: {
			status: 500,
			data: 1
		}
	};
}

function TestPutRequestDefinitions() {
	let put: mock.requests.Put<number> = {
		request: {
			path: 'path',
			method: 'PUT'
		},
		response: {
			status: 500,
			data: 1
		}
	};
}

function TestPatchRequestDefinitions() {
	let patch: mock.requests.Patch<number> = {
		request: {
			path: 'path',
			method: 'PATCH'
		},
		response: {
			status: 500,
			data: 1
		}
	};
}

function TestJsonpRequestDefinitions() {
	let jsonp: mock.requests.Jsonp<number> = {
		request: {
			path: 'path',
			method: 'JSONP'
		},
		response: {
			status: 500,
			data: 1
		}
	};
}
