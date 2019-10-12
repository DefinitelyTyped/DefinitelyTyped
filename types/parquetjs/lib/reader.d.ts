import Int64 = require('node-int64');

import { ParquetSchema } from './schema';
import { MetadataInterface, MetadataRowGroupsInterface } from './metadata.interface';
import { RowBufferInterface } from './rowBuffer.interface';
import { RowInterface } from './row.interface';

export class ParquetCursor {
    metadata: MetadataInterface;

    envelopeReader: ParquetEnvelopeReader;

    schema: ParquetSchema;

    columnList: string[][] | string[];

    rowGroup: RowInterface[];

    rowGroupIndex: number;

    constructor(
        metadata: MetadataInterface,
        envelopeReader: ParquetEnvelopeReader,
        schema: ParquetSchema,
        columnList: string[][] | string[]
    );

    next(): Promise<RowInterface>;

    rewind(): void;
}

export class ParquetReader {
    metadata: MetadataInterface;

    envelopeReader: ParquetEnvelopeReader;

    schema: ParquetSchema;

    static openFile(filePath: string): Promise<ParquetReader>;

    constructor(metadata: MetadataInterface, envelopeReader: ParquetEnvelopeReader);

    getCursor(columnList?: string[][] | string[]): ParquetCursor;

    getRowCount(): Int64;

    getSchema(): ParquetSchema;

    getMetadata(): {
        [key: string]: string;
    };

    close(): Promise<void>;
}

export class ParquetEnvelopeReader {
    read: (fd: number, position: number, length: number) => Promise<Buffer | Error>;

    close: (fd: number) => Promise<Error>;

    fileSize: number;

    constructor(
        readFn: (fd: number, position: number, length: number) => Promise<Buffer | Error>,
        closeFn: (fd: number) => Promise<Error>,
        fileSize: number
    );

    static openFile(filePath: string): ParquetReader;

    readHeader(): never;

    readRowGroup(
        schema: ParquetSchema,
        rowGroup: MetadataRowGroupsInterface,
        columnList: string[][] | string[]
    ): RowBufferInterface;

    readColumnChunk(schema: ParquetSchema, colChunk: object): void;

    readFooter(): MetadataInterface;
}
