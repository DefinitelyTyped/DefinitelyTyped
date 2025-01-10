import { debug, generateImage, restoreDefaultOptions, setDefaultOptions } from "jsdom-screenshot";

generateImage();
generateImage({
    launch: { args: ["--no-sandbox"] },
});

generateImage({
    intercept: (request) => request.continue(),
});

setDefaultOptions({
    debug: true,
});

restoreDefaultOptions();

debug(document);
debug(document.body);
debug(document.getElementById("test")!);
debug();
