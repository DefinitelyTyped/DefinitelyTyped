import intercept = require("intercept-stdout");

const stdoutHook = (chunk: string | Uint8Array) => {
    return chunk;
};

const unhookIntercept = intercept(stdoutHook);

unhookIntercept();
