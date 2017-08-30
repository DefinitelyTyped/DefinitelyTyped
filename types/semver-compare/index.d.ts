// Type definitions for semver-compare 1.0
// Project: https://github.com/substack/semver-compare
// Definitions by: Kovács Vince <https://github.com/vincekovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "semver-compare" {
    function compare<T>(a: T, b: T): number

    export default compare
}
