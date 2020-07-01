import GemVersion = require('./gem-version');

declare class GemRequirement {
    static create(input: string | GemVersion | string[] | GemVersion[]): GemRequirement;
    static default(): GemRequirement;
    static parse(obj: string | GemVersion): [Op, GemVersion];
    constructor(...requirements: string[] | GemVersion[]);
    asList(): string[];
    isPrerelease: boolean;
    satisfiedBy(version: GemVersion): boolean;
    toString(): string;
}
type Op = '=' | '!=' | '>' | '<' | '>=' | '<=' | '~>';
export = GemRequirement;
