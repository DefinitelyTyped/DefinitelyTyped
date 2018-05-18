// Type definitions for arr-union 3.1
// Project: https://github.com/jonschlinkert/arr-union
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function union<T>(...arrays: Array<ArrayLike<T>>): T[];

export = union;
