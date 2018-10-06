import { Callback, html } from "web-resource-inliner";

const fileContent = "<p>some content</p>";

const options = {
    fileContent,
    scrict: true
};

const callback: Callback = (error, result) => null;

html(options, callback);
