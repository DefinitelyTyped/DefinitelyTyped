// Type definitions for resolve-protobuf-schema 2.1
// Project: https://github.com/mafintosh/resolve-protobuf-schema
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Schema } from 'protocol-buffers-schema/types';

declare namespace ResolveProtobufSchema {
    function sync(file: string): Schema;
}

declare function ResolveProtobufSchema(file: string, callback: (error: Error | null, schema?: Schema) => void): void;
export = ResolveProtobufSchema;
