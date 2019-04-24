// Type definitions for gravatar v1.8.0
// Project: https://github.com/emerleite/node-gravatar
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 April Arcus <https://github.com/aprilarcus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'gravatar' {

  type URL = string

  type Default = URL | '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank'

  type Rating = 'g' | 'pg' | 'r' | 'x'

  type Size = string | number

  interface Options {
    size?: Size,
    s?: Size,
    default?: Default,
    d?: Default,
    rating?: Rating,
    r?: Rating,
    forcedefault?: 'y',
    f?: 'y',
    protocol?: boolean | 'http' | 'https',
    cdn?: string
  }

  interface ProfileOptions extends Options {
    format?: 'json' | 'xml' | 'php' | 'vcf' | 'qr'
  }

  export function url (email: string, options?: Options, https?: boolean): string
  export function profile_url (email: string, options?: ProfileOptions, https?: boolean): string

}
