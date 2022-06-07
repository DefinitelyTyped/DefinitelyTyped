// Type definitions for file-stream-rotator 0.6
// Project: https://github.com/rogerc/file-stream-rotator
// Definitions by: Wlad G. Gumenyuk <https://github.com/wgumenyuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { WriteStream, WriteFileOptions } from "fs";

export interface StreamOptions {
    filename: string;
    frequency?: "daily" | "custom" | "test";
    verbose?: boolean;
    date_format?: string;
    size?: string;
    audit_file?: string;
    end_stream?: boolean;
    file_options?: WriteFileOptions;
    utc?: boolean;
    extension?: string;
    watch_log?: boolean;
    create_symlink?: boolean;
    symlink_name?: string;
    audit_hash_type?: "md5" | "sha256";
}

export function getStream(options: StreamOptions): WriteStream;
