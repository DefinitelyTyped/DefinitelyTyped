import intercept = require('intercept-stdout');

const stdoutHook = (data: string) => {
    return data;
};

const unhookIntercept = intercept(stdoutHook);

unhookIntercept();
