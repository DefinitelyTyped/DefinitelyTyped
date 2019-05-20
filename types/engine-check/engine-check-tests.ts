import * as engineCheck from "engine-check";

const options: engineCheck.Options = {
    searchRoot: "/",
    silent: true,
    debug: true
};
engineCheck();
engineCheck({});
engineCheck(options);
