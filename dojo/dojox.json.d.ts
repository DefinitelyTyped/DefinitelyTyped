// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {
    
    module json {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/json/query.html
         *
         * Performs a JSONQuery on the provided object and returns the results.
         * If no object is provided (just a query), it returns a "compiled" function that evaluates objects
         * according to the provided query.
         * JSONQuery provides a comprehensive set of data querying tools including filtering,
         * recursive search, sorting, mapping, range selection, and powerful expressions with
         * wildcard string comparisons and various operators. JSONQuery generally supersets
         * JSONPath and provides syntax that matches and behaves like JavaScript where
         * possible.
         * 
         * JSONQuery evaluations begin with the provided object, which can referenced with
         * $. From
         * the starting object, various operators can be successively applied, each operating
         * on the result of the last operation.
         * 
         * Supported Operators
         * .property - This will return the provided property of the object, behaving exactly
         * like JavaScript.
         * [expression] - This returns the property name/index defined by the evaluation of
         * the provided expression, behaving exactly like JavaScript.
         * [?expression] - This will perform a filter operation on an array, returning all the
         * items in an array that match the provided expression. This operator does not
         * need to be in brackets, you can simply use ?expression, but since it does not
         * have any containment, no operators can be used afterwards when used
         * without brackets.
         * [^?expression] - This will perform a distinct filter operation on an array. This behaves
         * as [?expression] except that it will remove any duplicate values/objects from the
         * result set.
         * [/expression], [\expression], [/expression, /expression] - This performs a sort
         * operation on an array, with sort based on the provide expression. Multiple comma delimited sort
         * expressions can be provided for multiple sort orders (first being highest priority). /
         * indicates ascending order and \ indicates descending order
         * [=expression] - This performs a map operation on an array, creating a new array
         * with each item being the evaluation of the expression for each item in the source array.
         * [start:end:step] - This performs an array slice/range operation, returning the elements
         * from the optional start index to the optional end index, stepping by the optional step number.
         * [expr,expr] - This a union operator, returning an array of all the property/index values from
         * the evaluation of the comma delimited expressions.
         * . or [] - This returns the values of all the properties of the current object.
         * $ - This is the root object, If a JSONQuery expression does not being with a $,
         * it will be auto-inserted at the beginning.
         * @ - This is the current object in filter, sort, and map expressions. This is generally
         * not necessary, names are auto-converted to property references of the current object
         * in expressions.
         * ..property - Performs a recursive search for the given property name, returning
         * an array of all values with such a property name in the current object and any subobjects
         * expr = expr - Performs a comparison (like JS's ==). When comparing to
         * a string, the comparison string may contain wildcards * (matches any number of
         * characters) and ? (matches any single character).
         * expr ~ expr - Performs a string comparison with case insensitivity.
         * ..[?expression] - This will perform a deep search filter operation on all the objects and
         * subobjects of the current data. Rather than only searching an array, this will search
         * property values, arrays, and their children.
         * $1,$2,$3, etc. - These are references to extra parameters passed to the query
         * function or the evaluator function.
         * +, -, /, *, &, |, %, (, ), <, >, <=, >=, != - These operators behave just as they do
         * in JavaScript.
         * dojox.json.query(queryString,object)
         * and
         * 
         * dojox.json.query(queryString)(object)
         * always return identical results. The first one immediately evaluates, the second one returns a
         * 
         * function that then evaluates the object.
         * 
         * @param query Query string     
         * @param obj       OptionalTarget of the JSONQuery     
         */
        interface query{(query: String, obj?: Object): void}
        module schema {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/json/ref.html
         *
         * Adds advanced JSON {de}serialization capabilities to the base json library.
         * This enhances the capabilities of dojo.toJson and dojo.fromJson,
         * adding referencing support, date handling, and other extra format handling.
         * On parsing, references are resolved. When references are made to
         * ids/objects that have been loaded yet, the loader function will be set to
         * _loadObject to denote a lazy loading (not loaded yet) object.
         * 
         */
        interface ref {
            /**
             * 
             */
            refAttribute: string;
            /**
             * 
             */
            serializeFunctions: boolean;
            /**
             * evaluates the passed string-form of a JSON object.
             * 
             * @param str a string literal of a JSON item, for instance:'{ "foo": [ "bar", 1, { "baz": "thud" } ] }'             
             * @param args               OptionalSee resolveJson             
             */
            fromJson(str: String, args: Object): any;
            /**
             * Indexes and resolves references in the JSON object.
             * A JSON Schema object that can be used to advise the handling of the JSON (defining ids, date properties, urls, etc)
             * 
             * @param root The root object of the object graph to be processed             
             * @param args               OptionalObject with additional arguments:The index parameter:  This is the index object (map) to use to store an index of all the objects.  If you are using inter-message referencing, you must provide the same object for each call.The defaultId parameter:  This is the default id to use for the root object (if it doesn't define it's own id)The idPrefix parameter:  This the prefix to use for the ids as they enter the index. This allows multiple tables  to use ids (that might otherwise collide) that enter the same global index.  idPrefix should be in the form "/Service/".  For example,  if the idPrefix is "/Table/", and object is encountered {id:"4",...}, this would go in the  index as "/Table/4".The idAttribute parameter:  This indicates what property is the identity property. This defaults to "id"The assignAbsoluteIds parameter:  This indicates that the resolveJson should assign absolute ids (__id) as the objects are being parsed.The schemas parameter:  This provides a map of schemas, from which prototypes can be retrievedThe loader parameter:  This is a function that is called added to the reference objects that can't be resolved (lazy objects)             
             */
            resolveJson(root: Object, args: Object): any;
            /**
             * Create a JSON serialization of an object.
             * This has support for referencing, including circular references, duplicate references, and out-of-message references
             * id and path-based referencing is supported as well and is based on http://www.json.com/2007/10/19/json-referencing-proposal-and-library/.
             * 
             * @param it an object to be serialized.             
             * @param prettyPrint               Optionalif true, we indent objects and arrays to make the output prettier.The variable dojo.toJsonIndentStr is used as the indent string-- to use something other than the default (tab),change that variable before calling dojo.toJson().             
             * @param idPrefix               OptionalThe prefix that has been used for the absolute ids             
             * @param indexSubObjects               Optional            
             */
            toJson(it: Object, prettyPrint: boolean, idPrefix: Object, indexSubObjects: Object): any;
        }
    }

}

declare module "dojox/json/query" {
    var exp: dojox.json.query
    export=exp;
}
declare module "dojox/json/ref" {
    var exp: dojox.json.ref
    export=exp;
}
