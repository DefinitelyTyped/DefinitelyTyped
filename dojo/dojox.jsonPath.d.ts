// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/jsonPath.html
     *
     * Deprecated.  Should require dojox/jsonPath modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface jsonPath {
    }
    module jsonPath {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/jsonPath/query.html
         *
         * Perform jsonPath query expr on javascript object or json string obj
         * 
         * @param obj object || json string to perform query on     
         * @param expr jsonPath expression (string) to be evaluated     
         * @param arg {} special arguments.resultType: "VALUE"||"BOTH"||"PATH"} (defaults to value)evalType: "RESULT"||"ITEM"} (defaults to ?)     
         */
        interface query { (obj: Object, expr: String, arg: Object): void }
    }
    

}