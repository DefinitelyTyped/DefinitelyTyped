/// <reference path="isomorphic-fetch.d.ts"/>

function test_isomorphicFetchTestCases() {
    expectSuccess(fetch('http://localhost:3000/good'), 'Good response');
    
    fetch('http://localhost:3000/bad')
        .then((response: IResponse) => {
            return response.text();
        })
        .catch((err) => {
        });
}

function test_whatwgTestCases() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var requestOptions: RequestInit = {
        method: "POST",
        headers: headers,
        mode: 'same-origin',
        credentials: 'omit',
        cache: 'default'
    };

    expectSuccess(fetch('http://localhost:3000/poster', requestOptions), 'Post response:');
    
    var requestOptions: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    expectSuccess(fetch('http://localhost:3000/poster', requestOptions), 'Post response:');
    
    var requestOptions: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    var request: Request = new Request('http://localhost:3000/poster', requestOptions);

    expectSuccess(fetch(request), 'Post response:');
}
    
function expectSuccess(promise: Promise<IResponse>, responseText: string) {
    promise.then((response: IResponse) => {
        return response.text();
    })
    .then((text: string) => {
    });
}
