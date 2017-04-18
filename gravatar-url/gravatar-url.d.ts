// Type definitions for gravatar-url v1.1.0
// Project: https://github.com/sindresorhus/gravatar-url
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "gravatar-url" {
  type Options = {
    default?: string
    rating?: string
    size?: number
  }

  export default function url(email: string, options?: Options): string;
}
