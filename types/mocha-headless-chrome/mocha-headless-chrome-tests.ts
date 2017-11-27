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
    .then((result: string) => {
        // ...
    });

runner({
    file: ""
});
