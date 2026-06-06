import type { ConjunctionInfo, LicenseInfo } from "spdx-expression-parse";

declare function spdxWhitelisted(
    first: LicenseInfo | ConjunctionInfo,
    second: LicenseInfo[],
): boolean;

export = spdxWhitelisted;
