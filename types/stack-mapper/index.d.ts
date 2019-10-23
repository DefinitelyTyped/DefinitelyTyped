// Type definitions for stack-mapper 0.2.2
// Project: https://github.com/thlorenz/stack-mapper
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace stackMapper {

    export class StackMapper {

        /**
         * Maps the trace statements of the given error stack and replaces locations
         * referencing code in the generated file with the locations inside the original files.
         *
         * @name map
         * @function
         * @param {Array} array of callsite objects (see readme for details about Callsite object)
         * @return {Array.<Object>} info about the error stack with adapted locations, each with the following properties
         *    - filename: original filename
         *    - line: origial line in that filename of the trace
         *    - column: origial column on that line of the trace
         */
        public map(stack: Callsite[]): Callsite[];
    }

    export interface Callsite {
        filename: string;
        line: number;
        column: number;
    }

}

/**
 * Returns a Stackmapper that will use the given source map to map error trace locations.
 *
 * @name stackMapper
 * @function
 * @param {Object} sourcemap source map for the generated file
 * @return {StackMapper} stack mapper for the particular source map
 */
declare function stackMapper(sourcemap: any): stackMapper.StackMapper;

export = stackMapper;
