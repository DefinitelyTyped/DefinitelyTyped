// Type definitions for url v1.8.6
// Project: https://github.com/websanova/js-url
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface UrlStatic {
  (): string;
  (pattern: string): string;
  (pattern: number): string;
  (pattern: string, url: string): string;
  (pattern: number, url: string): string;
}

declare var url: UrlStatic;
