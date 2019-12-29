import http from 'k6/http';
import { JSONValue, JSONObject, check, sleep, fail, group } from 'k6';

const users = JSON.parse(open('./users.json'));
const __VU = 1;

function test1() {
    const user = users[__VU - 1];
    console.log(`${user.username}, ${user.password}`);
    sleep(3);
}

const binFile1 = open('/path/to/file.bin', 'b');

export default function test2() {
    const data = {
        field: 'this is a standard form field',
        file: http.file(binFile1, 'test.bin'),
    };
    const res = http.post('https://example.com/upload', data);
    sleep(3);
}

function test3() {
    const res = http.get('http://httpbin.org', { responseType: 'text' });
    check(res, {
        'response code was 200': res => res.status === 200,
        'body size was 1234 bytes': res => res.body.length === 1234,
    });
}

function test4() {
    const res = http.get('https://loadimpact.com');
    check(res, {
        'status code MUST be 200': res => res.status === 200,
    }) || fail('status code was *not* 200');
}

function test5() {
    group('my user scenario', () => {
        group('front page', () => {
            const res = http.get('https://loadimpact.com');
            check(res, {
                'status code is 200': res => res.status === 200,
            });
        });
        group('features page', () => {
            const res = http.get('https://loadimpact.com/features');
            check(res, {
                'status code is 200': res => res.status === 200,
                'h1 message is correct': res =>
                    res
                        .html('h1')
                        .text()
                        .startsWith('Simple yet realistic load testing'),
            });
        });
    });
}

function test6() {
    http.get('https://loadimpact.com');
    sleep(Math.random() * 30);
    http.get('https://loadimpact.com/features');
}

function httpTest1() {
    const responses = http.batch([
        'http://test.loadimpact.com',
        'http://test.loadimpact.com/style.css',
        'http://test.loadimpact.com/images/logo.png',
    ]);
    check(responses[0], {
        'main page status was 200': res => res.status === 200,
    });
}

function httpTest2() {
    const req1: http.BatchRequest = {
        method: 'GET',
        url: 'http://httpbin.org/get',
        params: { responseType: 'text' },
    };
    const req2: http.BatchRequest = {
        method: 'GET',
        url: 'http://test.loadimpact.com',
        params: { responseType: 'text' },
    };
    const req3: http.BatchRequest = {
        method: 'POST',
        url: 'http://httpbin.org/post',
        body: { hello: 'world!' },
        params: {
            responseType: 'text',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
    };
    const responses: Array<http.RefinedResponse<'text'>> = http.batch([req1, req2, req3]);
    // httpbin.org should return our POST data in the response body, so
    // we check the third response object to see that the POST worked.
    check(responses[3], {
        'form data OK': res => JSON.parse(res.body)['form']['hello'] === 'world!',
    });
}

const binFile = open('/path/to/file.bin', 'b');

function httpTest3() {
    const data = {
        field: 'this is a standard form field',
        file: http.file(binFile, 'test.bin'),
    };
    const res = http.post('https://example.com/upload', data);
    sleep(3);
}

function httpTest4() {
    return http.get('https://loadimpact.com');
}

function httpTest5() {
    const options = { maxRedirects: 10 };

    const baseURL = 'https://dev-li-david.pantheonsite.io';

    // Fetch the login page, with the login HTML form
    const res1 = http.get(baseURL + '/user/login', { responseType: 'text' });

    // Extract hidden value needed to POST form
    const formBuildID = (res1.body.match('name="form_build_id" value="(.*)"') || [])[1];
    // Create an Object containing the form data
    const formdata = {
        name: 'testuser1',
        pass: 'testuser1',
        form_build_id: formBuildID,
        form_id: 'user_login',
        op: 'Log in',
    };
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    // Send login request
    const res2 = http.post(baseURL + '/user/login', formdata, { headers });
    // Verify that we ended up on the user page
    check(res2, {
        'login succeeded': res2 => res2.url === `${baseURL}/users/testuser1`,
    }) || fail('login failed');
}

function httpTest6() {
    const params = {
        cookies: { my_cookie: 'value' },
        headers: { 'X-MyHeader': 'k6test' },
        redirects: 5,
        tags: { k6test: 'yes' },
    };
    http.get('https://loadimpact.com', params);
}

function httpTest7() {
    const url1 = 'https://api.loadimpact.com/v3/account/me';
    const url2 = 'http://httpbin.org/get';
    const apiToken = 'f232831bda15dd233c53b9c548732c0197619a3d3c451134d9abded7eb5bb195';
    const requestHeaders = {
        'User-Agent': 'k6',
        Authorization: 'Token ' + apiToken,
    };

    http.batch([{ method: 'GET', url: url1, params: { headers: requestHeaders } }, { method: 'GET', url: url2 }]);
}

function jsonObject(value: JSONValue | undefined): value is JSONObject {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

function httpTest8() {
    // Passing username and password as part of URL plus the auth option will authenticate using HTTP Digest authentication
    const res = http.get('http://user:passwd@httpbin.org/digest-auth/auth/user/passwd', { auth: 'digest' });

    // Verify response
    check(res, {
        'status is 200': r => r.status === 200,
        'is authenticated': r => {
            const json = r.json();
            return jsonObject(json) && !!json.authenticated;
        },
        'is correct user': r => {
            const json = r.json();
            return jsonObject(json) && json.user === 'user';
        },
    });
}

function httpTest9() {
    const res = http.get('https://loadimpact.com');
    for (const p in res.headers) {
        if (res.headers.hasOwnProperty(p)) {
            console.log(`${p} : ${res.headers[p]}`);
        }
    }
    check(res, {
        'status is 200': r => r.status === 200,
        'caption is correct': r => r.html('h1').text() === 'Example Domain',
    });
}

function httpTest10() {
    // Request page with links
    let res = http.get('https://httpbin.org/links/10/0');

    // Now, click the 4th link on the page
    res = res.clickLink({ selector: 'a:nth-child(4)' });
}

function httpTest11() {
    // Request page containing a form
    let res = http.get('https://httpbin.org/forms/post');

    // Now, submit form setting/overriding some fields of the form
    res = res.submitForm({ fields: { custname: 'test', extradata: 'test2' }, submitSelector: 'mySubmit' });
}
