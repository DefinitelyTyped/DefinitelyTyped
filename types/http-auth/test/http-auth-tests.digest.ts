import * as http from 'http';
import * as auth from 'http-auth';
import * as crypto from 'crypto';

const md5 = (input: string) => {
    const hash = crypto.createHash('MD5');
    hash.update(input);
    return hash.digest('hex');
};

const digest = auth.digest(
    {
        realm: 'Simon Area.',
    },
    (username, callback) => {
        // Expecting md5(username:realm:password) in callback.
        if (username === 'simon') {
            callback(md5('simon:Simon Area.:smart'));
        } else if (username === 'tigran') {
            callback(md5('tigran:Simon Area.:great'));
        } else {
            callback();
        }
    },
);

// Creating new HTTP server.
http.createServer(
    digest.check((req, res) => {
        res.end(`Welcome to private area - ${req.user}!`);
    }),
).listen(1337, () => {
    // Log URL.
    console.log('Server running at http://127.0.0.1:1337/');
});
