export default function extractFiles<Extractable>(
    value: unknown,
    isExtractable: (value: unknown) => value is Extractable,
    path?: string,
    ...args: any[]
): Extraction<Extractable>;

export type isExtractableFile = typeof import("./isExtractableFile.mjs").default;

export interface Extraction<Extractable = unknown> {
    clone: unknown;
    files: Map<Extractable, ObjectPath[]>;
}

export type ObjectPath = string;
