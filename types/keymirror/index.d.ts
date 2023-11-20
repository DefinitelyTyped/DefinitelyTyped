declare function KeyMirror<T>(obj: T): { [K in keyof T]: K };
export = KeyMirror;
