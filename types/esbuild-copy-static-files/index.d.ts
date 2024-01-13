export interface CopyStaticFilesOptions {
    src: string;
    dest: string;
    filter: (src: string, dest: string) => boolean;

    dereference: boolean;
    errorOnExist: boolean;
    force: boolean;
    preserveTimestamps: boolean;
    recursive: boolean;
}

export interface CopyStaticFilesPluginInstance {
    name: "copy-static-files";
    setup(build: any): void;
}

export default function(options?: Partial<CopyStaticFilesOptions>): CopyStaticFilesPluginInstance;
