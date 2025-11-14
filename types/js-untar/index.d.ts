declare namespace untar {
    interface ProgressivePromise<T, P> extends Promise<T> {
        progress(cb: (arg: P) => void): this;
    }

    interface TarFile {
        name: string;
        mode: string;
        uid: number;
        gid: number;
        size: number;
        mtime: number;
        checksum: number;
        type: string;
        linkname: string;
        ustarFormat: string;
        version?: string;
        uname?: string;
        gname?: string;
        devmajor?: number;
        devminor?: number;
        namePrefix?: string;
        buffer: ArrayBuffer;
        blob(): Blob;
        getBlobUrl(): URL;
        readAsString(): string;
        readAsJSON(): any;
    }
}

declare function untar(arrayBuffer: ArrayBuffer): untar.ProgressivePromise<untar.TarFile[], untar.TarFile>;

export = untar;
