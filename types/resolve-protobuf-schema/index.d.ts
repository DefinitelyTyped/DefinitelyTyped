import { Schema } from "protocol-buffers-schema/types";

declare namespace ResolveProtobufSchema {
    function sync(file: string): Schema;
}

declare function ResolveProtobufSchema(file: string, callback: (error: Error | null, schema?: Schema) => void): void;
export = ResolveProtobufSchema;
