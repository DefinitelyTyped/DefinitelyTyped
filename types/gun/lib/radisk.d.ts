// Note: RAD only accepts null, true/false, numbers, and text types, plus a soul link.
// But what is a "soul" link?

type AcceptTypes = string | number | null | boolean;

declare function RADRead(
    key: string,
    cb: (err: any, ok: any) => void,
    opt?: Partial<Record<'start' | 'end' | 'reverse', string>>,
): void;
declare function RADWrite(key: string, data: AcceptTypes, cb: (err: any, data: unknown, info: any) => void): void;
declare function RadConstructor(opt: Partial<Options> & { store: Store }): typeof RADRead & typeof RADWrite;
export = RadConstructor;
interface Options {
    /**
     * name of the folder data will be filed under.
     * @defaults 'radata'
     */
    file: string;
    /**
     * number of bytes, the size at which a file will split into chunks,
     * unless there is only 1 item in the chunk (like an image).
     * Adjusting this property significantly affects performance
     * due to RAD or JSON parse time for each chunk on smaller machines.
     *
     * @defaults 10MB NodeJS, 1MB IndexedDB
     */
    chunk: number;
    /**
     * number of milliseconds to wait until flushing a batch to disk.
     * @defaults 200
     */
    until: number;
    /**
     * maximum number of items saved before forcing a flush to disk, regardless of until
     * @defaults 10k
     */
    batch: number;
    /**
     * number of bytes, what the maximum string size can be, in order to prevent running out of memory.
     * @defaults 1399000000 * 0.3
     */
    pack: number;
}
interface Store {
    /** reading chunks */
    get(key: string, cb: (a: any, b: any) => void): void;
    /** saving chunks */
    put(key: string, data: AcceptTypes, cb: (a: any, b: any) => void): void;
}
