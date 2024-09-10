export class WebGLProperties {
    constructor();

    has: (object: unknown) => boolean;
    get: (object: unknown) => unknown;
    remove: (object: unknown) => void;
    update: (object: unknown, key: unknown, value: unknown) => unknown;
    dispose: () => void;
}
