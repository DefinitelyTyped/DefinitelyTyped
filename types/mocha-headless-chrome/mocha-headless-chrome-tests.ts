import runner = require("mocha-headless-chrome");

const options = {
    file: "test.html",
    reporter: "dot",
    width: 800,
    height: 600,
    timeout: 120000,
    executablePath: "/usr/bin/chrome-unstable",
    visible: true,
    args: ["no-sandbox"]
};

runner(options)
    .then(({ coverage, result }) => {
        const { failures, passed, pending, stats, tests } = result;
        const { err, fullTitle, title } = failures[0];
        const { duration, end, start } = stats;
        // ...
    });

runner({
    file: ""
});
