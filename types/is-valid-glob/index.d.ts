// Type definitions for is-valid-glob 1.0
// Project: https://github.com/jonschlinkert/is-valid-glob
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isValidGlob;

declare function isValidGlob(input: any): input is string | string[];
declare function isValidGlob(): false;
