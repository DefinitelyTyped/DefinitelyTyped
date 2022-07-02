// Type definitions for url-format-lax 2.0
// Project: https://github.com/sindresorhus/url-format-lax
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UrlObject {
  host?: string;
  hostname?: string;
  port?: string | number;
  [other: string]: any;
}

export default function urlFormat(url: UrlObject): string;
