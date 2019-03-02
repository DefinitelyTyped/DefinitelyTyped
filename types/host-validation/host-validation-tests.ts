// Copyright (c) 2018 Brannon Dorsey <brannon@brannondorsey.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import * as express from 'express';
import * as hostValidation from 'host-validation';

const app = express();

// allow development hosts, a domain name, and a regex for all subdomains
// host can accept strings or regular expressions
app.use(hostValidation({ hosts: ['127.0.0.1:3000',
        'localhost:3000',
        'mydomain.com',
		/.*\.mydomain\.com/] }));

// referer headers can accept strings or regular expressions
app.use(hostValidation({ referers: ['http://trusted-site.com/login.php',
		/^http:\/\/othersite\.com\/login\/.*/] }));

// only accept POSTs from HTTPS referrers
app.use(hostValidation({ referers: [/^https:\/\//]}));

// you can include both host and referer values in the config
// by default, only requests that match BOTH Host and Referer values will be allowed
app.use(hostValidation({ hosts: ['trusted-host.com'],
		referers: ['https://trusted-host.com/login.php'] }));

// you can use the { mode: 'either' } value in the config accept requests that match
// either the hosts or the referers requirements. Accepted values for mode include
// 'both' and 'either'. The default value is 'both' if none is specified.
app.use(hostValidation({ hosts: ['trusted-host.com'],
        referers: ['https://trusted-host.com/login.php'],
		mode: 'either' }));

// route-specific rules can be specified like any Express.js middleware
app.use('/login', hostValidation({ hosts: ['trusted-host.com'] }));
app.use('/from-twitter', hostValidation({ referers: [/^https:\/\/twitter.com\//] }));

// Add a custom error handler that's run when host or referer validation fails.
// This function overwrites the default behavior of responding to failed requests
// with a 403 Forbidden error.
app.use('/brew-tea', hostValidation({
	hosts: ['office-teapot'],
	fail: (req, res, next) => {
        // send a 418 "I'm a Teapot" Error
		res.status(418).send('I\'m the office teapot. Refer to me only as such.');
	}
}));

app.get('/', (req, res) => {
    res.send('Hello trusted client, thanks for including 127.0.0.1 in your Host header.');
});

app.listen(3000, () => {
    console.log('server allowing HTTP requests from 127.0.0.1 on port 3000');
});
