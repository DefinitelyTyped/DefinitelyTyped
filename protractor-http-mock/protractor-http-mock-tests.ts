import mock = require("protractor-http-mock");

function TestConfig() {
    mock.config = {
        rootDirectory: "root",
        protractorConfig: "protractor.conf.js"
    };
}

function TestCtorOverloads() {
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
    let plugin: mock.Plugin = {
        match: (mockRequest: mock.requests.Delete<number>, requestConfig: mock.requests.AllRequests<number, number>) => {
            if (requestConfig.request.method && mockRequest.request.method) {
                return true;
            }

            return false;
        }
    };

    let noParam: mock.ProtractorHttpMock = mock();
    let emptyArray: mock.ProtractorHttpMock = mock([]);
    let mockFiles: mock.ProtractorHttpMock = mock(['mock1', 'mock2']);
    let mocks: mock.ProtractorHttpMock = mock([del, put]);

    let mockFilesNpmPlugins: mock.ProtractorHttpMock = mock(['mock1'], ['plugin']);
    let mocksWithNpmPlugins: mock.ProtractorHttpMock = mock([del, put], ['plugin']);

    let pluginMocks: mock.ProtractorHttpMock = mock([del, put], [plugin]);

    let mockFilesNpmPluginsSkipDefaults: mock.ProtractorHttpMock = mock(['mock1'], ['plugin'], true);
    let skipDefaults: mock.ProtractorHttpMock = mock([del, put], [plugin], true);
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

function TestDynamicAdd() {
    let put: mock.requests.Put<number> = {
        request: {
            path: "path",
            method: "PUT"
        },
        response: {
            status: 400,
            data: 1
        }
    };
    let resolved: boolean;
    mock.add([put]).then(r => resolved = r);
}

function TestDyanmicRemove() {
    let put: mock.requests.Put<number> = {
        request: {
            path: "path",
            method: "PUT"
        },
        response: {
            status: 400,
            data: 1
        }
    };
    let resolved: boolean;
    mock.remove([put]).then(r => resolved = r);
}

function TestGetRequestDefinitions() {
    let getMinium: mock.requests.Get<number> = {
        request: {
            path: 'path',
            method: 'GET',
            regex: true
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
            regex: true,
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
            method: 'POST',
            regex: true
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
            regex: true,
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
            regex: true,
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
            method: 'POST',
            regex: true
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
            data: 'data',
            regex: true
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
            method: 'HEAD',
            regex: true
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
            method: 'DELETE',
            regex: true
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
            method: 'PUT',
            regex: true
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
            method: 'PATCH',
            regex: true
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
            method: 'JSONP',
            regex: true
        },
        response: {
            status: 500,
            data: 1
        }
    };
}

function TestRuntimeMocks() {
    mock.add([{
        request: {
            path: '/users',
            method: 'GET',
            params: {
                name: 'Charlie'
            }
        },
        response: {
            data: {
                name: 'Override'
            }
        }
    }]);

    mock.remove([{
        request: {
            path: '/users',
            method: 'GET',
            params: {
                name: 'Charlie'
            }
        },
        response: {
            data: {
                name: 'Override'
            }
        }
    }]);
}
