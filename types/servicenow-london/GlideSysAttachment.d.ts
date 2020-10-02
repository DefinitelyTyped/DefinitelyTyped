declare class GlideSysAttachment {
    constructor();
    copy(
        sourceTable: string,
        sourceSysId: string,
        destinationTable: string,
        destinationSysId: string
    ): void;
    deleteAttachment(sysId: string): void;
    getContent(record: ScopedGlideRecord): any;
    getContentBase64(record: ScopedGlideRecord): string;
    getContentStream(sysId: string): object;
    write(record: ScopedGlideRecord, fileName: string, contentType: string, data: any): string;
    writeBase64(
        record: ScopedGlideRecord,
        fileName: string,
        contentType: string,
        base64Content: string
    ): string;
    writeContentStream(
        record: ScopedGlideRecord,
        fileName: string,
        contentType: string,
        inputStream: object
    ): string;
}
