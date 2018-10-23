// From README.md:

import * as checker from "license-checker";

checker.init(
    {
        start: "/path/to/start/looking",
        production: true,
        customPath: {
            licenseText: ""
        }
    },
    (err: Error, json: checker.ModuleInfos): void => {
        if (err) {
            throw err;
        } else {
            const licenses = Object.keys(json).reduce(
                (memo, key) => {
                    const license = json[key];
                    const { name, version, repository, licenseText } = license;
                    if (licenseText == null) {
                        return memo;
                    }
                    memo.push(license);
                    return memo;
                },
                [] as checker.ModuleInfo[]
            );
        }
    }
);
