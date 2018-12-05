import * as http from 'http';
import vary = require('vary');

http.createServer((req, res) => {
    vary(res, 'User-Agent');
    vary(res, ['Origin', 'User-Agent']);
});

// $ExpectType string
vary.append('Accept, User-Agent', 'Origin');
vary.append('Accept, User-Agent', ['Origin', 'user-agent']);
