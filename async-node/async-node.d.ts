export interface ISocketAsync {
    connectAsync(path: string): Promise<boolean>;
    connectAsync(port: number, host: string): Promise<boolean>;
    writeAsync(data: Buffer): Promise<boolean>;
    writeAsync(data: Buffer, encoding: string): Promise<boolean>;
    readAsync(): Promise<Buffer>;
}
export interface Socket extends ISocketAsync {
}
