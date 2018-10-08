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
import hostValidation = require('host-validation');

const app = express();

// allow development hosts, a domain name, and a regex for all subdomains
app.use(hostValidation({ hosts: ['127.0.0.1:3000',
								 'localhost:3000',
								 'mydomain.com',
								 /.*\.mydomain\.com/] }));

app.get('/', (req, res) => {
	res.send('Hello trusted client, thanks for including 127.0.0.1 in your Host header.');
});

app.listen(3000, () => {
	console.log('server allowing HTTP requests from 127.0.0.1 on port 3000');
});
