import needle = require("needle");

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
}

function API_head() {
    var options = {
        timeout: 5000 // if we don't get a response in 5 seconds, boom.
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
    var data = {
        q: 'a very smart query',
        page: 2,
        format: 'json'
    };

    needle.request('get', 'forum.com/search', data, function (err, resp) {
        if (!err && resp.statusCode == 200)
            console.log(resp.body); // here you go, mister.
    });
}
