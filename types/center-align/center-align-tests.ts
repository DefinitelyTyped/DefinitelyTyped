import center from "center-align";

// multi-line sample
center([
    "Lorem ipsum dolor sit amet,",
    "consectetur adipiscing",
    "elit, sed do eiusmod tempor incididunt",
    "ut labore et dolore",
    "magna aliqua. Ut enim ad minim",
    "veniam, quis"
]);

// single-line samples
center("foo"); // => 'foo' (does nothing)
center("foo", 12); // => '    foo    '
center("foo", 10); // => '   foo   '
center("foo", 8); // => '  foo  '
