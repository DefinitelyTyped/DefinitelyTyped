import rightAlign from "right-align";

// multi-line sample
const lines = [
    "Lorem ipsum dolor sit amet,",
    "consectetur adipiscing",
    "elit, sed do eiusmod tempor incididunt",
    "ut labore et dolore",
    "magna aliqua. Ut enim ad minim",
    "veniam, quis"
];
rightAlign(lines);

// single-line sample
rightAlign("single line");
