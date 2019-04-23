import wrap from "word-wrap";

const str =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat.";

wrap(str, { width: 60 });

wrap(str, { indent: "      " });

wrap(str, { newline: "\n\n" });

wrap(str, {
    escape: str => str.toLowerCase()
});

wrap(str, { trim: true });

wrap(str, { cut: true });

wrap(str);
