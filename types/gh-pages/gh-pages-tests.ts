import ghPages = require("gh-pages");

const dir = "./";
const emptyOptions = {};
const callback = (err: any) => { };

ghPages.publish(dir, callback);
ghPages.publish(dir, emptyOptions, callback);

ghPages.publish("dist", {
    user: {
        name: "Daniel",
        email: "daniel@example.com"
    }
}, callback);
