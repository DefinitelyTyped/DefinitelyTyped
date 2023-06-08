// Type definitions for namespace-js 0.0
// Project: https://github.com/hirokidaichi/namespace-js
// Definitions by: kuromoka <https://github.com/kuromoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Namespace;

export namespace NamespaceJs {
    type UserObject = object;
    type Fqn = string;
    type ImportName = string;
    // if you don't attach anything in use() function, ns is this type.
    type DotUserObject<Fqn, UserObject> = Fqn extends `${infer Fqn1}.${infer Fqn2}`
        ? {
              [P in Fqn1]: DotUserObject<Fqn2, UserObject>;
          }
        : {
              [P in Extract<Fqn, string>]: {
                  [P in keyof UserObject]: UserObject[P];
              };
          };

    interface Definition<T extends UserObject> {
        define(
            callback: (
                ns: T & {
                    // eslint-disable-next-line no-unnecessary-generics
                    provide: <U extends UserObject>(obj: U) => void;
                },
            ) => void,
        ): void;
    }

    interface Application<T extends UserObject> {
        use<U extends UserObject, Syntax>(
            syntax: Syntax,
        ): Syntax extends `${Fqn} ${ImportName}`
            ? Application<T & U>
            : Syntax extends string
            ? Application<DotUserObject<Syntax, T & U>>
            : never;
        apply(callback: (ns: T) => void): void;
    }
}

declare global {
    // eslint-disable-next-line no-unnecessary-generics
    function Namespace<T extends NamespaceJs.UserObject>(fqn: NamespaceJs.Fqn): NamespaceJs.Definition<T>;
}

export const use: NamespaceJs.Application<{}>['use'];
export const apply: NamespaceJs.Application<{}>['apply'];
