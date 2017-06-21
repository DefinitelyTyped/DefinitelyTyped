/// <reference types="node-fetch" />

import FormData = require('form-data');
import fs = require('fs');
import http = require('http');
import request = require('request');
import fetch from 'node-fetch';

import * as ImportUsingES6Syntax from 'form-data';

() => {
    var form = new FormData();
    form.append('my_field', 'my value');
    form.append('my_buffer', new Buffer(10));
    form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
}

() => {
    var form = new FormData();

    http.request({ path: 'http://nodejs.org/images/logo.png' }, function (response) {
        form.append('my_field', 'my value');
        form.append('my_buffer', new Buffer(10));
        form.append('my_logo', response);
    });
}

() => {
    var form = new FormData();

    form.append('my_field', 'my value');
    form.append('my_buffer', new Buffer(10));
    form.append('my_logo', request('http://nodejs.org/images/logo.png'));
}

() => {
    var form = new FormData();
    form.submit('http://example.org/', function (err, res) {
        // res – response object (http.IncomingMessage)  //
        res.resume();
    });
}


() => {
    var form = new FormData();
    var request = http.request({
        method: 'post',
        host: 'example.org',
        path: '/upload',
        headers: form.getHeaders()
    });

    form.pipe(request);

    request.on('response', function (res: any) {
        console.log(res.statusCode);
    });
}


() => {
    var form = new FormData();
    form.submit('example.org/upload', function (err, res) {
        console.log(res.statusCode);
    });
}

() => {
    var CRLF = '\r\n';
    var form = new FormData();
    var buffer = new Buffer('');

    var options = {
        header: CRLF + '--' + form.getBoundary() + CRLF + 'X-Custom-Header: 123' + CRLF + CRLF,
        knownLength: 1
    };

    form.append('my_buffer', buffer, options);

    form.submit('http://example.com/', function (err, res) {
        if (err) throw err;
        console.log('Done');
    });
}

() => {
    var form = new FormData();
    form.submit({
        host: 'example.com',
        path: '/probably.php?extra=params',
        auth: 'username:password'
    }, function (err, res) {
        console.log(res.statusCode);
    });
}

() => {
    var form = new FormData();
    form.submit({
        host: 'example.com',
        path: '/surelynot.php',
        headers: { 'x-test-header': 'test-header-value' }
    }, function (err, res) {
        console.log(res.statusCode);
    });
}

() => {
    var formData = {
        my_field: 'my_value',
        my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
    };

    request.post({ url: 'http://service.com/upload', formData: formData }, function (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });
}

() => {
    var form = new FormData();

    form.append('a', 1);

    fetch('http://example.com', { method: 'POST', body: form })
        .then(function (res) {
            return res.json();
        }).then(function (json) {
            console.log(json);
        });
}

() => {
    var form = new FormData();
	form.getLength((err: Error, length: number): void => {
		// nothing
	});
}
