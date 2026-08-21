import { PathLike, WriteStream } from "fs";
import stream = require("stream");

import { RowInterface } from "./row.interface";
import { RowBufferInterface } from "./rowBuffer.interface";
import { ParquetSchema } from "./schema";

export interface ParquetWriterOpts {
    autoClose?: boolean | undefined;
    bitWidth?: number | undefined;
    disableEnvelope?: boolean | undefined;
    encoding?: string | undefined;
    fd?: number | undefined;
    flags?: string | undefined;
    mode?: number | undefined;
    rowGroupSize?: number | undefined;
    start?: number | undefined;
    useDataPageV2?: boolean | undefined;
}

export class ParquetWriter {
    schema: ParquetSchema;

    envelopeWriter: ParquetEnvelopeWriter;

    rowBuffer: RowBufferInterface;

    rowGroupSize: number;

    closed: boolean;

    userMetadata: {
        [key: string]: string;
    };

    static openFile(
        schema: ParquetSchema,
        path: PathLike,
        opts?:
            | string
            | ParquetWriterOpts,
    ): Promise<ParquetWriter>;

    static openStream(
        schema: ParquetSchema,
        outputStream: WriteStream,
        opts?:
            | string
            | ParquetWriterOpts,
    ): Promise<ParquetWriter>;

    constructor(
        schema: ParquetSchema,
        envelopeWriter: ParquetEnvelopeWriter,
        opts?:
            | string
            | ParquetWriterOpts,
    );

    appendRow(row: RowInterface): Promise<void>;

    close(callback?: () => void): Promise<void>;

    setMetadata(key: boolean | number | string, value: boolean | number | string): void;

    setRowGroupSize(cnt: number): void;

    setPageSize(cnt: number): void;
}

export class ParquetEnvelopeWriter {
    schema: ParquetSchema;

    write: (buf: Buffer) => Promise<void>;

    close: () => Promise<void>;

    offset: number;

    rowCount: number;

    rowGroups: Array<{
        columns: any;
        total_byte_size: number;
        num_rows: number;
        sorting_columns: null | string[];
    }>;

    pageSize: number;

    useDataPageV2: boolean;

    static openStream(
        schema: ParquetSchema,
        outputStream: WriteStream,
        opts?:
            | string
            | ParquetWriterOpts,
    ): Promise<ParquetEnvelopeWriter>;

    constructor(
        schema: ParquetSchema,
        writeFn: (buf: Buffer) => Promise<void>,
        closeFn: () => Promise<void>,
        fileOffset: number,
        opts?:
            | string
            | ParquetWriterOpts,
    );

    writeSection(buf: Buffer): Promise<void>;

    writeHeader(): Promise<void>;

    writeRowGroup(records: RowBufferInterface): Promise<void>;

    writeFooter(userMetadata: { [key: string]: string }): Promise<void>;

    setPageSize(cnt: number): void;
}

export class ParquetTransformer extends stream.Transform {
    writer: ParquetWriter;

    constructor(
        schema: ParquetSchema,
        opts?:
            | string
            | ParquetWriterOpts,
    );

    _transform(row: RowInterface, encoding: string | null | undefined, callback: () => void): void;

    _flush(callback: () => void): void;
}
