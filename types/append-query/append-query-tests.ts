import appendQuery = require('append-query');

appendQuery('http://example.com/foo', 'bar=baz&beep=boop');

appendQuery('http://example.com/?foo=bar', 'hello=world');

appendQuery('http://example.com/', { beep: 'boop' });

appendQuery('http://example.com/', { nothing: null });

appendQuery('http://example.com/', { preEncoded: '%22hello%2C%20world!%22' }, { encodeComponents: false });

appendQuery('http://example.com/?test=1', { test: null }, { removeNull: true });
