// Type definitions for resolve-from
// Project: https://github.com/sindresorhus/resolve-from
// Definitions by: unional <https://github.com/unional>, tswaters <https://github.com/tswaters>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "resolve-from" {

  function resolveFrom(fromDir: string, moduleId: string): string;

  namespace resolveFrom {

  }

  export = resolveFrom;
}
