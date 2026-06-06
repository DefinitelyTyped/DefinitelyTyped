/// <reference types="node" />

import mock = require("mock-require");

const request = () => {
    console.log("http.request called");
};

{
    mock("http", {
        request,
    });

    const http = require("http");
    http.request(); // 'http.request called'
}

{
    mock("fs", { mockedFS: true });

    const fs1 = require("fs");
    mock.stop("fs");

    const fs2 = require("fs");
    fs1 === fs2; // false
}

{
    mock("fs", {});
    mock("path", {});

    const fs1 = require("fs");
    const path1 = require("path");

    mock.stopAll();

    const fs2 = require("fs");
    const path2 = require("path");

    fs1 === fs2; // false
    path1 === path2; // false
}

{
    const fs = require("fs");
    let fileToTest = require("./fileToTest");
    mock("fs", {}); // fileToTest is still using the unmocked fs module
    fileToTest = mock.reRequire("./fileToTest"); // fileToTest is now using your mock
}
