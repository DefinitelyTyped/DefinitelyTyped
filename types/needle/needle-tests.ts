import * as needle from "needle";
import * as fs from "fs";

function Usage() {
    // using callback
    needle.get('http://ifconfig.me/all.json', function (error, response) {
        if (!error)
            console.log(response.body.ip_addr); // JSON decoding magic. :)
    });

    // using streams
    var out: any; // = fs.createWriteStream('logo.png');
    needle.get('https://google.com/images/logo.png').pipe(out);
}

function ResponsePipeline() {
    needle.get('http://stackoverflow.com/feeds', { compressed: true }, function (err, resp) {
        console.log(resp.body); // this little guy won't be a Gzipped binary blob
        // but a nice object containing all the latest entries
    });

    var options = {
        compressed: true,
        follow: 5,
        rejectUnauthorized: true
    };

    // in this case, we'll ask Needle to follow redirects (disabled by default),
    // but also to verify their SSL certificates when connecting.
    var stream = needle.get('https://backend.server.com/everything.html', options);

    stream.on('readable', function () {
        var data: any;
        while (data = stream.read()) {
            console.log(data.toString());
        }
    });

    stream.on('end', function(err: any) {
        // if our request had an error, our 'end' event will tell us.
        if (!err) console.log('Great success!');
    })
}

function API_head() {
    var options = {
        open_timeout: 5000 // if we don't get a response in 5 seconds, boom.
    };

    needle.head('https://my.backend.server.com', function (err, resp) {
        if (err) {
            console.log('Shoot! Something is wrong: ' + err.message);
        }
        else {
            console.log('Yup, still alive.');
        }
    });
}

function API_get() {
    needle.get('google.com/search?q=syd+barrett', function (err, resp) {
        // if no http:// is found, Needle will automagically prepend it.
    });
}

function API_post() {
    var options = {
        headers: { 'X-Custom-Header': 'Bumbaway atuna' }
    };

    needle.post('https://my.app.com/endpoint', 'foo=bar', options, function (err, resp) {
        // you can pass params as a string or as an object.
    });
}

function API_put() {
    var nested = {
        params: {
            are: {
                also: 'supported'
            }
        }
    };

    needle.put('https://api.app.com/v2', nested, function (err, resp) {
        console.log('Got ' + resp.bytes + ' bytes.') // another nice treat from this handsome fella.
    });
}

function API_delete() {
    var options = {
        username: 'fidelio',
        password: 'x'
    };

    needle.delete('https://api.app.com/messages/123', null, options, function (err, resp) {
        // in this case, data may be null, but you need to explicity pass it.
    });
}

function API_request() {
    var params = {
        q: 'a very smart query',
        page: 2,
    };

    needle.request('get', 'forum.com/search', params, function (err, resp) {
        if (!err && resp.statusCode == 200)
            console.log(resp.body); // here you go, mister.
    });

    needle.request('get', 'forum.com/search', params, { json: true }, function(err, resp) {
        if (resp.statusCode == 200) console.log('It worked!');
    });
}

function HttpGetWithBasicAuth() {
    needle.get('https://api.server.com', { username: 'you', password: 'secret' }, function(err, resp) {
        // used HTTP auth
    });
    needle.get('https://username:password@api.server.com', function(err, resp) {
        // used HTTP auth from URL
    });
}

function DigestAuth() {
    needle.get('other.server.com', { username: 'you', password: 'secret', auth: 'digest' }, function(err, resp, body) {
        // needle prepends 'http://' to your URL, if missing
    });
}

function CustomAcceptHeaderDeflate() {
    var options = {
        compressed: true,
        follow: 10,
        accept: 'application/vnd.github.full+json'
    }

    needle.get('api.github.com/users/tomas', options, function(err, resp, body) {
        // body will contain a JSON.parse(d) object
        // if parsing fails, you'll simply get the original body
    });

}

function Various() {

    needle.get('https://news.ycombinator.com/rss', function(err, resp, body) {
        // if xml2js is installed, you'll get a nice object containing the nodes in the RSS
    });
    needle.get('http://upload.server.com/tux.png', { output: '/tmp/tux.png' }, function(err, resp, body) {
        // you can dump any response to a file, not only binaries.
    });
    needle.get('http://search.npmjs.org', { proxy: 'http://localhost:1234' }, function(err, resp, body) {
        // request passed through proxy
    });
    const stream1 = needle.get('http://www.as35662.net/100.log');
        stream1.on('readable', function() {
        let chunk: any;
        while (chunk = stream1.read()) {
            console.log('got data: ', chunk);
        }
    });
    const stream2 = needle.get('http://jsonplaceholder.typicode.com/db', { parse: true });
    stream2.on('readable', function() {
        let node: any;

        // our stream2 will only emit a single JSON root node.
        while (node = stream2.read()) {
            console.log('got data: ', node);
        }
    });

    /*
    // Sample omitted, no JSONStream
    needle.get('http://jsonplaceholder.typicode.com/db', { parse: true })
        .pipe(new JSONStream.parse('posts.*.title'))
        .on('data', function (obj) {
            console.log('got post title: %s', obj);
        });
    */
}

function FileUpload() {
    var data = {
        foo: 'bar',
        image: { file: '/home/tomas/linux.png', content_type: 'image/png' }
    };

    needle.post('http://my.other.app.com', data, { multipart: true }, function(err, resp, body) {
        // needle will read the file and include it in the form-data as binary
    });
    needle.put('https://api.app.com/v2', fs.createReadStream('myfile.txt'), function(err, resp, body) {
        // stream content is uploaded verbatim
    });
}

function Multipart() {
    var buffer = fs.readFileSync('/path/to/package.zip');

    var data = {
        zip_file: {
            buffer: buffer,
            filename: 'mypackage.zip',
            content_type: 'application/octet-stream'
        }
    }

    needle.post('http://somewhere.com/over/the/rainbow', data, { multipart: true }, function(err, resp, body) {
        // if you see, when using buffers we need to pass the filename for the multipart body.
        // you can also pass a filename when using the file path method, in case you want to override
        // the default filename to be received on the other end.
    });
}

function MultipartContentType() {
    var data = {
        token: 'verysecret',
        payload: {
            value: JSON.stringify({ title: 'test', version: 1 }),
            content_type: 'application/json'
        }
    }

    needle.post('http://test.com/', data, { timeout: 5000, multipart: true }, function(err, resp, body) {
        // in this case, if the request takes more than 5 seconds
        // the callback will return a [Socket closed] error
    });
}
