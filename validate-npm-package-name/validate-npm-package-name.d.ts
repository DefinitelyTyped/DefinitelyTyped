// Type definitions for validate-npm-package-name v2.2.2
// Project: https://www.npmjs.com/package/validate-npm-package-name
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "validate-npm-package-name" {
  interface ValidateNpmPackageName {
    (name : string) : {
      validForNewPackages: boolean,
      validForOldPackages: boolean,
      errors? : string[]
    };
  }

  const validate : ValidateNpmPackageName;
  export = validate;
}
