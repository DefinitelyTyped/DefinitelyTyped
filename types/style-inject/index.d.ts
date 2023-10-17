interface StyleInjectOptions {
    insertAt?: "top";
}

declare function styleInject(css: string, options?: StyleInjectOptions): void;

export = styleInject;
