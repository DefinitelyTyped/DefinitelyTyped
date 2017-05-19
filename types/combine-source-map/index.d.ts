// Type definitions for combine-source-map 0.8
// Project: https://github.com/thlorenz/combine-source-map
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Add source maps of multiple files, offset them and then combine them into one source map.
 * (documentation based on project's README file)
 */
declare namespace CombineSourceMap {

    interface Offset {
        line?: number;
        column?: number;
    }

    interface Combiner {
        //new (file?: string, sourceRoot?: string): Combiner;

        /** Adds map to underlying source map.
         * If source contains a source map comment that has the source of the original file inlined it will offset these
         * mappings and include them.
         * If no source map comment is found or it has no source inlined, mappings for the file will be generated and included
         * @param opts 'sourceFile' String and 'source' String
         * @param offset 'line' Number and 'column' Number
         */
        addFile(opts: { sourceFile: string; source: string }, offset?: Offset): Combiner;

        /** base64
         * @return base64 encoded combined source map
         */
        base64(): string;

        /** comment
         * @return base64 encoded sourceMappingUrl comment of the combined source map
         */
        comment(): string;

        _addGeneratedMap(sourceFile: string, source: string, offset?: Offset): Combiner;

        _addExistingMap(sourceFile: string, source: string, existingMap: any, offset?: Offset): Combiner;
    }

    /** create
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

export = CombineSourceMap;
