// Type definitions for url v1.8.6
// Project: https://github.com/websanova/js-url
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface UrlStatic {
  (): string;
  (pattern: string): string;
  (pattern: number): string;
  (pattern: string, url: string): string;
  (pattern: number, url: string): string;
}

declare var url: UrlStatic;
