import * as engineCheck from "engine-check";

const options: engineCheck.EngineCheckOptions = {
    searchRoot: "/",
    silent: true,
    debug: true
};
engineCheck.checkVersion({});
engineCheck.checkVersion(options);
