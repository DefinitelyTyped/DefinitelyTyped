// Type definitions for properties-reader 0.0
// Project: https://github.com/steveukx/properties
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PropertiesReader {
    type Value = string|number|boolean;

    interface Reader {
        get(propertyName: string): Value|null;
        getRaw(propertyName: string): string|null;
        path(): {};
        append(path: string): Reader;
        read(properties: string): Reader;
        set(propertyName: string, value: Value): Reader;
        length: number;
        each(iterator: (key: string, value: Value) => void): Reader;
        each<T>(iterator: (this: T, key: string, value: Value) => void, scope: T): Reader;
        getAllProperties(): { [key: string]: Value; };
        clone(): Reader;
        save(destFile: string, onComplete?: (err: any, data: string) => void): Promise<string>;
        getByRoot(root: any): { [key: string]: Value; };
        bindToExpress(app: object, basePath?: string, makePaths?: boolean): Reader;
    }
}

declare function PropertiesReader(path: string): PropertiesReader.Reader;

export = PropertiesReader;
