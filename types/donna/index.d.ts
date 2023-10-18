export function generateMetadata(modules: string[]): DonnaTypes.Metadata;

declare namespace DonnaTypes {
    interface Metadata {
        files: { [filePath: string]: File };
    }

    interface File {
        objects: { [line: number]: Line };
        exports: any;
    }

    interface Line {
        [row: number]: Object;
    }

    interface Object {
        type: string;
        name: string;
        bindingType: string;
        paramNames?: string[] | undefined;
        classProperties?: any[] | undefined;
        prototypeProperties?: number[][] | undefined;
        doc?: string | undefined;
        range: number[][];
    }
}
