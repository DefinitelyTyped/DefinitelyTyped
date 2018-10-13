import { html } from "web-resource-inliner";

const fileContent = "<p>some content</p>";

const options = {
    fileContent,
    scrict: true
};

const callback = (error, result) => null;

html(options, callback);
