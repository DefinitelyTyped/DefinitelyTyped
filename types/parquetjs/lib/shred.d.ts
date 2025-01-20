import { RowInterface } from "./row.interface";
import { RowBufferInterface } from "./rowBuffer.interface";
import { ParquetSchema } from "./schema";

export namespace shredder {
    function shredRecord(schema: ParquetSchema, record: RowInterface, buffer: RowBufferInterface): void;

    function materializeRecords(schema: ParquetSchema, buffer: RowBufferInterface): void;
}
