import SemVer = require("../classes/semver");
import semver = require("../index");

declare function truncate(
    version: string | SemVer,
    truncation: semver.ReleaseType,
    optionsOrLoose?: boolean | semver.Options,
): string | null;

export = truncate;
