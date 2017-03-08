import urlRegex = require('url-regex');

urlRegex().test('http://github.com foo bar');

urlRegex().test('www.github.com foo bar');

urlRegex({exact: true}).test('http://github.com foo bar');

urlRegex({exact: true}).test('http://github.com');

'foo http://github.com bar //google.com'.match(urlRegex());
