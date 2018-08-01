import urlRegex = require('url-regex');

urlRegex().test('https://github.com foo bar');

urlRegex().test('www.github.com foo bar');

urlRegex({exact: true}).test('https://github.com foo bar');

urlRegex({exact: true}).test('https://github.com');

urlRegex({exact: true, strict: false}).test('github.com');

'foo https://github.com bar //google.com'.match(urlRegex());
