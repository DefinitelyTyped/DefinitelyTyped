import FormData = require('form-data');
import fs = require('fs');
import http = require('http');
import request = require('request');
import fetch from 'node-fetch';

import * as ImportUsingES6Syntax from 'form-data';

(() => {
    const form = new FormData();
    form.append('my_field', 'my value');
    form.append('my_buffer', new Buffer(10));
    form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

    const num: number = form.getLengthSync();
    const bool: boolean = form.hasKnownLength();
})();

(() => {
    const form = new FormData();

    http.request({ path: 'http://nodejs.org/images/logo.png' }, response => {
        form.append('my_field', 'my value');
        form.append('my_buffer', new Buffer(10));
        form.append('my_logo', response);
    });
})();

(() => {
    const form = new FormData();

    form.append('my_field', 'my value');
    form.append('my_buffer', new Buffer(10));
    form.append('my_logo', request('http://nodejs.org/images/logo.png'));
})();

(() => {
    const form = new FormData();
    form.submit('http://example.org/', (err, res) => {
        // res – response object (http.IncomingMessage)  //
        res.resume();
    });
})();

(() => {
    const form = new FormData();
    const request = http.request({
        method: 'post',
        host: 'example.org',
        path: '/upload',
        headers: form.getHeaders()
    });

    form.pipe(request);

    request.on('response', res => {
        console.log(res.statusCode);
    });
})();

(() => {
    const form = new FormData();
    form.submit('example.org/upload', (err, res) => {
        const r: http.IncomingMessage = res;
        console.log(res.statusCode);
    });
})();

(() => {
    const CRLF = '\r\n';
    const form = new FormData();
    const buffer = new Buffer('');

    const options = {
        header: `${CRLF}--${form.getBoundary()}${CRLF}X-Custom-Header: 123${CRLF}${CRLF}`,
        knownLength: 1
    };

    form.append('my_buffer', buffer, options);

    form.submit('http://example.com/', (err, res) => {
        if (err) throw err;
        console.log('Done');
    });
})();

(() => {
    const form = new FormData();
    form.submit({
        host: 'example.com',
        path: '/probably.php?extra=params',
        auth: 'username:password'
    }, (err, res) => {
        console.log(res.statusCode);
    });
})();

(() => {
    const form = new FormData();
    form.submit({
        host: 'example.com',
        path: '/surelynot.php',
        headers: { 'x-test-header': 'test-header-value' }
    }, (err, res) => {
        console.log(res.statusCode);
    });
})();

(() => {
    const formData = {
        my_field: 'my_value',
        my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
    };

    request.post({ url: 'http://service.com/upload', formData }, (err, httpResponse, body) => {
        if (err) {
            console.error('upload failed:', err);
            return;
        }
        console.log('Upload successful!  Server responded with:', body);
    });
})();

(() => {
    const form = new FormData();

    form.append('a', 1);

    fetch('http://example.com', { method: 'POST', body: form })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        });
})();

(() => {
    const form = new FormData();
    form.getLength((err: Error, length: number): void => {});
})();
