import mock = require("protractor-http-mock");

function TestConfig() {
    mock.config = {
        rootDirectory: "root",
        protractorConfig: "protractor.conf.js",
        mocks: {
            dir: "mocks",
            default: ["default-mock"]
        },
        plugins: {
            default: ["default-plugin"]
        }
    };
}

function TestCtorOverloads() {
    let delNumber: mock.requests.Delete<number> = {
        request: {
            path: 'path',
            method: 'DELETE'
        },
        response: {
            status: 400,
            data: 1
        }
    };
    let putString: mock.requests.Put<string> = {
        request: {
            path: 'path',
            method: 'PUT'
        },
        response: {
            status: 400,
            data: 'data to put'
        }
    };
    let pluginNumber: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Delete<number>, requestConfig: mock.requests.Delete<number>) => true
    };
    let pluginBoolean: mock.Plugin1<boolean> = {
        match: (mockRequest: mock.requests.Post<boolean>, requestConfig: mock.requests.Post<boolean>) => true
    };

    let noParam: mock.ProtractorHttpMock = mock();
    let emptyArray: mock.ProtractorHttpMock = mock([]);
    let mockFiles: mock.ProtractorHttpMock = mock(['mock1', 'mock2']);
    let mocks: mock.ProtractorHttpMock = mock([delNumber, putString]);

    let mockFilesNpmPlugins: mock.ProtractorHttpMock = mock(['mock1'], ['plugin']);
    let mocksWithNpmPlugins: mock.ProtractorHttpMock = mock([delNumber, putString], ['plugin']);

    let pluginMocks: mock.ProtractorHttpMock = mock([delNumber, putString], [pluginNumber, pluginBoolean]);

    let mockFilesNpmPluginsSkipDefaults: mock.ProtractorHttpMock = mock(['mock1'], ['plugin'], true);
    let skipDefaults: mock.ProtractorHttpMock = mock([delNumber, putString], [pluginNumber, pluginBoolean], true);
}

function TestCtorMockOverloads() {
    let get: mock.requests.Get<number> = {
        request: {
            path: 'path',
            method: 'GET'
        },
        response: {
            data: 1
        }
    };
    let postData: mock.requests.PostData<number, string> = {
        request: {
            path: 'path',
            method: 'POST',
            data: 'data'
        },
        response: {
            data: 1
        }
    };
    let post: mock.requests.Post<number> = {
        request: {
            path: 'path',
            method: 'POST'
        },
        response: {
            data: 1
        }
    };
    let head: mock.requests.Head<number> = {
        request: {
            path: 'path',
            method: 'HEAD'
        },
        response: {
            data: 1
        }
    };
    let del: mock.requests.Delete<number> = {
        request: {
            path: 'path',
            method: 'DELETE'
        },
        response: {
            data: 1
        }
    };
    let put: mock.requests.Put<number> = {
        request: {
            path: 'path',
            method: 'PUT'
        },
        response: {
            data: 1
        }
    };
    let patch: mock.requests.Patch<number> = {
        request: {
            path: 'path',
            method: 'PATCH'
        },
        response: {
            data: 1
        }
    };
    let jsonp: mock.requests.Jsonp<number> = {
        request: {
            path: 'path',
            method: 'JSONP'
        },
        response: {
            data: 1
        }
    };

    mock(['file', get, postData, post, head, del, put, patch, jsonp]);
}

function TestCtorPluginOverloads() {
    let get: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Get<number>, requestConfig: mock.requests.Get<number>) => true
    };
    let postData: mock.Plugin2<number, string> = {
        match: (mockRequest: mock.requests.PostData<number, string>, requestConfig: mock.requests.PostData<number, string>) => true
    };
    let post: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Post<number>, requestConfig: mock.requests.Post<number>) => true
    };
    let head: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Head<number>, requestConfig: mock.requests.Head<number>) => true
    };
    let del: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Delete<number>, requestConfig: mock.requests.Delete<number>) => true
    };
    let put: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Put<number>, requestConfig: mock.requests.Put<number>) => true
    };
    let patch: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Patch<number>, requestConfig: mock.requests.Patch<number>) => true
    };
    let jsonp: mock.Plugin1<number> = {
        match: (mockRequest: mock.requests.Jsonp<number>, requestConfig: mock.requests.Jsonp<number>) => true
    };

    mock([], ['npm', get, postData, post, head, del, put, patch, jsonp]);
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
            method: 'GET'
        },
        response: {
            data: 1
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

    let getDelay: mock.requests.Get<number> = {
        request: {
            path: 'path',
            method: 'GET',
            regex: true
        },
        response: {
            data: 1,
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
            delay: 20,
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
