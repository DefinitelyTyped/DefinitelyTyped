// Type definitions for combine-source-map 0.8
// Project: https://github.com/thlorenz/combine-source-map
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Add source maps of multiple files, offset them and then combine them into one source map.
 * (documentation based on project's README file)
 */
declare class Combiner {
    constructor(file?: string, sourceRoot?: string);

    /** Adds map to underlying source map.
     * If source contains a source map comment that has the source of the original file inlined it will offset these
     * mappings and include them.
     * If no source map comment is found or it has no source inlined, mappings for the file will be generated and included
     * @param opts the 'sourceFile' path/name and the file's 'source' contents
     * @param offset the source file 'line' number and 'column' number offsets
     */
    addFile(opts: { sourceFile: string; source: string }, offset?: Combiner.Offset): Combiner;

    /** output the combined source map in base64 format
     * @return base64 encoded combined source map
     */
    base64(): string;

    /** generate a base64 encoded sourceMappingURL comment
     * @return base64 encoded sourceMappingUrl comment of the combined source map
     */
    comment(): string;

    _addGeneratedMap(sourceFile: string, source: string, offset?: Combiner.Offset): Combiner;

    _addExistingMap(sourceFile: string, source: string, existingMap: any, offset?: Combiner.Offset): Combiner;
}

declare namespace Combiner {
    /** An offset line and column number */
    interface Offset {
        line?: number;
        column?: number;
    }

    /** Create a source map combiner that accepts multiple files, offsets them and then combines them into one source map.
     * @param file optional name of the generated file
     * @param sourceRoot optional sourceRoot of the map to be generated
     * @return Combiner instance to which source maps can be added and later combined
     */
    function create(file?: string, sourceRoot?: string): Combiner;

    /** removeComments
     * @param src
     * @return src with all sourceMappingUrl comments removed
     */
    function removeComments(src: string): string;
}

export = Combiner;

export as namespace Combiner;
