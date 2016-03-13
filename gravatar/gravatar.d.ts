// Type definitions for gravatar v1.4.0
// Project: https://github.com/emerleite/node-gravatar
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module GravatarModule {
  type Options = {
    d?: string
    default?: string
    f?: string
    forcedefault?: string
    r?: string
    rating?: string
    s?: string
    size?: string
  }

  function url(email: string, options?: Options, forceProtocol?: boolean): string;
}

declare module "gravatar" {
    export = GravatarModule;
}
