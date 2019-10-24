// Type definitions for SystemJS 6.1
// Project: https://github.com/systemjs/systemjs
// Definitions by: Joel Denning <https://github.com/joeldenning>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

declare namespace System {
  export {};

  /**
   * Loads a javascript module from either a url or bare specifier that is in an import map.
   * You may optionally provide a parentUrl that will be used for resolving relative urls.
   */
  // tslint:disable-next-line no-unnecessary-generics
  export const import: ImportFn;

  /**
   * Inserts a new module into the SystemJS module registry. The System.register format is
   * the underlying implementation that allows for ESM emulation.
   * See https://github.com/systemjs/systemjs/blob/master/docs/system-register.md for more details.
   * Register may be called with a name argument if you are using the named-register extra. (See
   * https://github.com/systemjs/systemjs#extras).
   */
  export function register(dependencies: string[], declare: DeclareFn): void;
  export function register(name: string, dependencies: string[], declare: DeclareFn): void;

  /**
   * Resolve any moduleId to its full URL. For a moduleId that is in the import map, this will resolve
   * the full import map URL. For a moduleId that is a relative url, the returned url will be resolved
   * relative to the parentUrl or the current browser page's base url. For a full url, resolve() is
   * a no-op.
   */
  export function resolve(moduleId: string, parentUrl?: string): string;

  /**
   * Delete a module from the module registry. Note that the moduleId almost always must be a full url and that
   * you might need to call System.resolve() to obtain the moduleId for modules in an import map.
   * The returned function is intended for use after re-importing the module. Calling the function
   * will re-bind all the exports of the re-imported module to every module that depends on the module.
   */
  export function delete(moduleId: string): false | UpdateModuleFn;

  /**
   * Get a module from the SystemJS module registry. Note that the moduleId almost always must be a full url
   * and that you might need to call System.resolve() to obtain the moduleId. If the module does not exist in
   * the registry, null is returned.
   */
  export function get(moduleId: string): Module | null;
  // tslint:disable-next-line no-unnecessary-generics
  export function get<T>(moduleId: string): T | null;

  /**
   * Indicates whether the SystemJS module registry contains a module. Note that the moduleId almost always
   * must be a full url and that you might need to call System.resolve() to obtain the moduleId.
   */
  export function has(moduleId: string): boolean;

  /**
   * An alternative to System.register(), this allows you to insert a module into the module registry. Note that
   * the moduleId you provide will go straight into the registry without being resolved first.
   */
  export function set(moduleId: string, module: Module): void;

  /**
   * Use for (let entry of System.entries()) to access all of the modules in the SystemJS registry.
   */
  export function entries(): Iterable<typeof ModuleEntry>;

  // tslint:disable-next-line no-unnecessary-generics
  type ImportFn = <T extends Module>(moduleId: string, parentUrl?: string) => Promise<T>;

  type DeclareFn = (_export: ExportFn, _context: Context) => Declare;
  interface Declare {
    setters?: SetterFn[];
    execute?(): any;
  }
  type SetterFn = (moduleValue: Module) => any;
  type ExecuteFn = () => any;

  type ExportFn = ExportFnSingleKey | ExportFnObj;
  type ExportFnSingleKey = (exportName: string, value: any) => void;
  type ExportFnObj = (exports: object) => void;

  type UpdateModuleFn = () => void;

  type GetFn = GetFnModule | GetFnGeneric;
  type GetFnModule = (moduleId: string) => Module;
  // tslint:disable-next-line no-unnecessary-generics
  type GetFnGeneric = <T>(moduleId: string) => T;

  interface Context {
    import: ImportFn;
    meta: {
      url: string;
    };
  }

  interface Module {
    default?: any;
    [exportName: string]: any;
  }

  const ModuleEntry: [string, Module];
}
