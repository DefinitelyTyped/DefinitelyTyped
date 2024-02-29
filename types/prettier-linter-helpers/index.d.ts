/**
 * Converts invisible characters to a commonly recognizable visible form.
 * @param str - The string with invisibles to convert.
 * @returns The converted string.
 */
export function showInvisibles(str: string): string;

export interface GenerateDifferences {
    /**
     * Generate results for differences between source code and formatted version.
     *
     * @param source - The original source.
     * @param prettierSource - The Prettier formatted source.
     * @returns An array containing { operation, offset, insertText, deleteText }
     */
    (source: string, prettierSource: string): Difference[];
    INSERT: "insert";
    DELETE: "delete";
    REPLACE: "replace";
}

export const generateDifferences: GenerateDifferences;

export interface Difference {
    operation: "insert" | "delete" | "replace";
    offset: number;
    insertText?: string | undefined;
    deleteText?: string | undefined;
}
