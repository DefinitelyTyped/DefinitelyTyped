import http from 'k6/http';
import { check, sleep, fail, group } from 'k6';

const users = JSON.parse(open('./users.json'));
const __VU = 1;

function test1() {
    const user = users[__VU - 1];
    console.log(`${user.username}, ${user.password}`);
    sleep(3);
}

const binFile1 = open('/path/to/file.bin', 'b');

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
    const req1 = {
        method: 'GET',
        url: 'http://httpbin.org/get',
    };
    const req2 = {
        method: 'GET',
        url: 'http://test.loadimpact.com',
    };
    const req3 = {
        method: 'POST',
        url: 'http://httpbin.org/post',
        body: {
            hello: 'world!',
        },
        params: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    };
    const responses = http.batch([req1, req2, req3]);
    // httpbin.org should return our POST data in the response body, so
    // we check the third response object to see that the POST worked.
    check(responses[2], {
        'form data OK': res => JSON.parse(res.body)['form']['hello'] === 'world!',
    });
}

const binFile = open('/path/to/file.bin', 'b');

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
