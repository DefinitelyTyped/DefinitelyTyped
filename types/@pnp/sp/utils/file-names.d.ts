/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
export declare function containsInvalidFileFolderChars(input: string, onPremise?: boolean): boolean;
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
export declare function stripInvalidFileFolderChars(input: string, replacer?: string, onPremise?: boolean): string;
//# sourceMappingURL=file-names.d.ts.map