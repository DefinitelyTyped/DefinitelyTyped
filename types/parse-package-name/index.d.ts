// Type definitions for parse-package-name 0.1.0
// Project: https://github.com/egoist/parse-package-name
// Definitions by: BendingBender <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parsePackageName;

declare const parsePackageName: (path: string) => {
  name: string;
  path: string;
  version: string;
};
