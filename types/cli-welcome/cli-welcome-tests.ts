// Tests
import welcome = require("cli-welcome");

// Use it.
welcome({ title: `Welcome CLI`, tagLine: `by Ahmad Awais` });

// OR with all the options set like this:
welcome({
    title: `Welcome CLI`,
    tagLine: `by Ahmad Awais`,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
    version: `v1.0`,
});
