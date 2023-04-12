// Type definitions for sanitize-s3-objectkey 0.1
// Project: https://github.com/Advanon/sanitize-s3-objectkey#readme
// Definitions by: Royce Dy <https://github.com/rad182>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function sanitize_s3_objectkey(objectKey: string | number, separator?: string): string;
export = sanitize_s3_objectkey;
