import Truncate = require("html-truncate");

Truncate("hello world", 4); // $ExpectType string

// $ExpectType string
Truncate("<p><div>hello world</div></p>", 4, {
    keepImageTag: true,
    ellipsis: true,
});

// $ExpectType string
Truncate("<p><div>hello world</div></p>", 6, {
    keepImageTag: false,
    ellipsis: "---",
});

Truncate("a good little fox is <span>a good</span> little forest creature", 26, { truncateLastWord: false }); // $ExpectType string

Truncate("a good little fox is <span>a good</span> little forest creature", 29, { truncateLastWord: false, slop: 2 }); // $ExpectType string
