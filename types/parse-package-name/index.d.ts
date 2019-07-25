// Type definitions for parse-package-name
// Project: https://github.com/egoist/parse-package-name
// Definitions by: BendingBender <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'parse-package-name' {
  const parsePackageName: (path: string) => {
    name: string;
    path: string;
    version: string;
  }
  export = parsePackageName;
}
