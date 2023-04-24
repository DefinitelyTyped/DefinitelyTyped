// Type definitions for style-inject 0.3
// Project: https://github.com/egoist/style-inject
// Definitions by: Leon Si <https://github.com/leonzalion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StyleInjectOptions {
    insertAt?: 'top';
}

declare function styleInject(css: string, options?: StyleInjectOptions): void;

export = styleInject;
