import randomString = require("random-string-gen");

randomString();

randomString(7);

randomString('abc');

randomString({
    length: 16,
    type: 'alphabetic',
    charset: "github",
    capitalization: 'uppercase'
});

randomString({
    length: 12,
    type: 'alphabetic'
});

randomString({
    charset: 'abc'
});

randomString({
    length: 16,
    charset: 'javascript',
    capitalization: 'uppercase'
});
