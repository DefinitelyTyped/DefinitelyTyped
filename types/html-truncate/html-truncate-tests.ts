import Truncate = require("html-truncate");

Truncate('hello world', 4);

Truncate('<p><div>hello world</div></p>', 4, {
    keepImageTag: true,
    ellipsis: true
});

Truncate('<p><div>hello world</div></p>', 6, {
    keepImageTag: false,
    ellipsis: '---'
});
