import needle = require("needle");
import * as fs from "fs";

function Usage() {
    // using promises
    needle('get', 'http://ifconfig.me/all.json')
        .then((resp) => console.log(resp.body.ip_addr));

    // using callback
    needle.get('http://ifconfig.me/all.json', (error, response) => {
        if (!error)
            console.log(response.body.ip_addr); // JSON decoding magic. :)
    });

    // using streams
    const out = fs.createWriteStream('file.txt');
    needle.get('https://google.com/images/logo.png').pipe(out);
}

function ResponsePipeline() {
    // using promises
    needle('get', 'http://stackoverflow.com/feeds', { compressed: true })
        .then((resp) => {
            console.log(resp.body); // this little guy won't be a Gzipped binary blob
            // but a nice object containing all the latest entries
        });

    // using callback
    needle.get('http://stackoverflow.com/feeds', { compressed: true }, (err, resp) => {
        console.log(resp.body); // this little guy won't be a Gzipped binary blob
        // but a nice object containing all the latest entries
    });

    // using streams
    const options = {
        compressed: true,
        follow: 5,
        rejectUnauthorized: true
    };

    // in this case, we'll ask Needle to follow redirects (disabled by default),
    // but also to verify their SSL certificates when connecting.
    const stream = needle.get('https://backend.server.com/everything.html', options);

    stream.on('readable', () => {
        let data: any;
        while (data = stream.read()) {
            console.log(data.toString());
        }
    });

    stream.on('end', (err: any) => {
        // if our request had an error, our 'end' event will tell us.
        if (!err) console.log('Great success!');
    });
}

function API_head() {
    // using promises
    needle('head', 'https://my.backend.server.com')
        .then((resp) => console.log('Yup, still alive.'))
        .catch((err: Error) => console.log('Shoot! Something is wrong: ' + err.message));

    // using callback
    needle.head('https://my.backend.server.com', (err, resp) => {
        if (err) {
            console.log('Shoot! Something is wrong: ' + err.message);
        } else {
            console.log('Yup, still alive.');
        }
    });
}

function API_get() {
    // using promises
    needle('get', 'google.com/search?q=syd+barrett')
        .then((resp) => {
            // if no http:// is found, Needle will automagically prepend it.
        });

    // using callback
    needle.get('google.com/search?q=syd+barrett', (err, resp) => {
        // if no http:// is found, Needle will automagically prepend it.
    });
}

function API_post() {
    const options = {
        headers: { 'X-Custom-Header': 'Bumbaway atuna' }
    };

    // using promises
    needle('post', 'https://my.app.com/endpoint', 'foo=bar', options)
        .then((resp) => {
            // you can pass params as a string or as an object.
        });

    // using callback
    needle.post('https://my.app.com/endpoint', 'foo=bar', options, (err, resp) => {
        // you can pass params as a string or as an object.
    });
}

function API_put() {
    const nested = {
        params: {
            are: {
                also: 'supported'
            }
        }
    };

    // using promises
    needle('put', 'https://api.app.com/v2', nested)
        .then((resp) => {
            console.log(`Got ${resp.bytes} bytes.`); // another nice treat from this handsome fella.
        });

    // using callback
    needle.put('https://api.app.com/v2', nested, (err, resp) => {
        console.log(`Got ${resp.bytes} bytes.`); // another nice treat from this handsome fella.
    });
}

function API_delete() {
    const options = {
        username: 'fidelio',
        password: 'x'
    };

    // using promises
    needle('delete', 'https://api.app.com/messages/123', null, options)
        .then((resp) => {
            // in this case, data may be null, but you need to explicity pass it.
        });

    // using callback
    needle.delete('https://api.app.com/messages/123', null, options, (err, resp) => {
        // in this case, data may be null, but you need to explicity pass it.
    });
}

function API_request() {
    const params = {
        q: 'a very smart query',
        page: 2,
    };

    // using promises
    needle('get', 'forum.com/search', params)
        .then((resp) => {
            if (resp.statusCode === 200)
                console.log(resp.body); // here you go, mister.
        });

    needle('get', 'forum.com/search', params, { json: true })
        .then((resp) => {
            if (resp.statusCode === 200) console.log('It worked!');
        });

    // using callback
    needle.request('get', 'forum.com/search', params, (err, resp) => {
        if (!err && resp.statusCode === 200)
            console.log(resp.body); // here you go, mister.
    });

    needle.request('get', 'forum.com/search', params, { json: true }, (err, resp) => {
        if (resp.statusCode === 200) console.log('It worked!');
    });
}

function HttpGetWithBasicAuth() {
    // using promises
    needle('get', 'https://api.server.com', { username: 'you', password: 'secret' })
        .then((resp) => {
            // used HTTP auth
        });
    needle('get', 'https://username:password@api.server.com')
        .then((resp) => {
            // used HTTP auth from URL
        });

    // using callback
    needle.get('https://api.server.com', { username: 'you', password: 'secret' }, (err, resp) => {
        // used HTTP auth
    });
    needle.get('https://username:password@api.server.com', (err, resp) => {
        // used HTTP auth from URL
    });
}

function DigestAuth() {
    // using promises
    needle('get', 'other.server.com', { username: 'you', password: 'secret', auth: 'digest' })
        .then((resp) => {
            // needle prepends 'http://' to your URL, if missing
        });

    // using callback
    needle.get('other.server.com', { username: 'you', password: 'secret', auth: 'digest' }, (err, resp, body) => {
        // needle prepends 'http://' to your URL, if missing
    });
}

function CustomAcceptHeaderDeflate() {
    const options: needle.NeedleOptions = {
        compressed: true,
        follow: 10,
        accept: 'application/vnd.github.full+json'
    };

    // using promises
    needle('get', 'api.github.com/users/tomas', options)
        .then((resp) => {
            // body will contain a JSON.parse(d) object
            // if parsing fails, you'll simply get the original body
        });

    // using callback
    needle.get('api.github.com/users/tomas', options, (err, resp, body) => {
        // body will contain a JSON.parse(d) object
        // if parsing fails, you'll simply get the original body
    });
}

function Various() {
    // using promises
    needle('get', 'https://news.ycombinator.com/rss')
        .then((resp) => {
            // if xml2js is installed, you'll get a nice object containing the nodes in the RSS
        });
    needle('get', 'http://upload.server.com/tux.png', { output: '/tmp/tux.png' })
        .then((resp) => {
            // you can dump any response to a file, not only binaries.
        });
    needle('get', 'http://search.npmjs.org', { proxy: 'http://localhost:1234' })
        .then((resp) => {
            // request passed through proxy
        });

    // using callback
    needle.get('https://news.ycombinator.com/rss', (err, resp, body) => {
        // if xml2js is installed, you'll get a nice object containing the nodes in the RSS
    });
    needle.get('http://upload.server.com/tux.png', { output: '/tmp/tux.png' }, (err, resp, body) => {
        // you can dump any response to a file, not only binaries.
    });
    needle.get('http://search.npmjs.org', { proxy: 'http://localhost:1234' }, (err, resp, body) => {
        // request passed through proxy
    });

    // using streams
    const stream1 = needle.get('http://www.as35662.net/100.log');
    stream1.on('readable', () => {
        let chunk: any;
        while (chunk = stream1.read()) {
            console.log('got data: ', chunk);
        }
    });
    const stream2 = needle.get('http://jsonplaceholder.typicode.com/db', { parse: true });
    stream2.on('readable', () => {
        let node: any;

        // our stream2 will only emit a single JSON root node.
        while (node = stream2.read()) {
            console.log('got data: ', node);
        }
    });
}

function FileUpload() {
    const data = {
        foo: 'bar',
        image: { file: '/home/tomas/linux.png', content_type: 'image/png' }
    };

    // using promises
    needle('post', 'http://my.other.app.com', data, { multipart: true })
        .then((resp) => {
            // needle will read the file and include it in the form-data as binary
        });
    needle('put', 'https://api.app.com/v2', fs.createReadStream('myfile.txt'))
        .then((resp) => {
            // stream content is uploaded verbatim
        });

    // using callback
    needle.post('http://my.other.app.com', data, { multipart: true }, (err, resp, body) => {
        // needle will read the file and include it in the form-data as binary
    });
    needle.put('https://api.app.com/v2', fs.createReadStream('myfile.txt'), (err, resp, body) => {
        // stream content is uploaded verbatim
    });
}

function Multipart() {
    const buffer = fs.readFileSync('/path/to/package.zip');

    const data = {
        zip_file: {
            buffer,
            filename: 'mypackage.zip',
            content_type: 'application/octet-stream'
        }
    };

    // using promises
    needle('post', 'http://somewhere.com/over/the/rainbow', data, { multipart: true })
        .then((resp) => {
            // if you see, when using buffers we need to pass the filename for the multipart body.
            // you can also pass a filename when using the file path method, in case you want to override
            // the default filename to be received on the other end.
        });

    // using callback
    needle.post('http://somewhere.com/over/the/rainbow', data, { multipart: true }, (err, resp, body) => {
        // if you see, when using buffers we need to pass the filename for the multipart body.
        // you can also pass a filename when using the file path method, in case you want to override
        // the default filename to be received on the other end.
    });
}

function MultipartContentType() {
    const data = {
        token: 'verysecret',
        payload: {
            value: JSON.stringify({ title: 'test', version: 1 }),
            content_type: 'application/json'
        }
    };

    // using promises
    needle('post', 'http://test.com/', data, { timeout: 5000, multipart: true })
        .then((resp) => {
            // in this case, if the request takes more than 5 seconds
            // the callback will return a [Socket closed] error
        });

    // using callback
    needle.post('http://test.com/', data, { timeout: 5000, multipart: true }, (err, resp, body) => {
        // in this case, if the request takes more than 5 seconds
        // the callback will return a [Socket closed] error
    });
}
