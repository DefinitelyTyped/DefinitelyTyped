declare namespace VersionRange {
    /**
     * Checks whether `version` satisfies the `range` specification.
     *
     * We support a subset of the expressions defined in
     * https://www.npmjs.org/doc/misc/semver.html:
     *
     *    version   Must match version exactly
     *    =version  Same as just version
     *    >version  Must be greater than version
     *    >=version Must be greater than or equal to version
     *    <version  Must be less than version
     *    <=version Must be less than or equal to version
     *    ~version  Must be at least version, but less than the next significant
     *              revision above version:
     *              "~1.2.3" is equivalent to ">= 1.2.3 and < 1.3"
     *    ~>version Equivalent to ~version
     *    1.2.x     Must match "1.2.x", where "x" is a wildcard that matches
     *              anything
     *    1.2.*     Similar to "1.2.x", but "*" in the trailing position is a
     *              "greedy" wildcard, so will match any number of additional
     *              components:
     *              "1.2.*" will match "1.2.1", "1.2.1.1", "1.2.1.1.1" etc
     *    *         Any version
     *    ""        (Empty string) Same as *
     *    v1 - v2   Equivalent to ">= v1 and <= v2"
     *    r1 || r2  Passes if either r1 or r2 are satisfied
     */
    function contains(range: string, version: string): boolean;
}

// tslint:disable-next-line export-just-namespace
export = VersionRange;
