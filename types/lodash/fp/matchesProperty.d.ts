import _ = require("../index");

declare namespace Lodash {
    interface MatchesProperty {
        (): MatchesProperty;
        <T>(srcValue: T): MatchesProperty1x1;
        <T>(srcValue: T, path: _.PropertyPath): (value: any) => boolean;
        <T, V>(srcValue: T, path: _.PropertyPath): (value: V) => boolean;
    }
    interface MatchesProperty1x1 {
        (): MatchesProperty1x1;
        <T>(path: _.PropertyPath): (value: any) => boolean;
        <T>(path: _.PropertyPath): (value: V) => boolean;
    }
}

declare const matchesProperty: Lodash.MatchesProperty;
export = matchesProperty;
