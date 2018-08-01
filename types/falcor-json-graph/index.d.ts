// Type definitions for falcor-json-graph 1.1.7
// Project: https://github.com/Netflix/falcor-json-graph
// Definitions by: Quramy <https://github.com/Quramy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export = FalcorJsonGraph;

declare namespace FalcorJsonGraph {

    // NOTE: The following types are described at https://github.com/Netflix/falcor/tree/master/lib/typedefs .

    /**
     * An atom allows you to treat a JSON value as atomic regardless of its type, ensuring that a JSON object or array is always returned in its entirety. The JSON value must be treated as immutable. Atoms can also be used to associate metadata with a JSON value. This metadata can be used to influence the way values are handled.
     **/
    interface Atom extends Sentinel {
        $type: 'atom';
        value: any;
    }

    interface Error extends Sentinel {
        $type: 'error';
        value: any;
    }

    interface InvalidPath {
        path: PathSet;
        invalidate: boolean;
    }
    /**
     * A part of a {@link Path} that can be any JSON value type. All types are coerced to string, except null. This makes the number 1 and the string "1" equivalent.
     **/
    type Key = string | number | boolean;

    /**
     * A part of a {@link PathSet} that can be either a {@link Key}, {@link Range}, or Array of either.
     **/
    type KeySet = Key | Range | Array<Key | Range>;

    /**
     * An ordered list of {@link Key}s that point to a value in a {@link JSONGraph}.
     **/
    type Path = Array<Key>;

    /**
     * An ordered list of {@link KeySet}s that point to location(s) in the {@link JSONGraph}. It enables pointing to multiple locations in a more terse format than a set of {@link Path}s and is generally more efficient to evaluate.
     **/
    type PathSet = Array<KeySet>;

    /**
     * A wrapper around a path and its value.
     **/
    interface PathValue {
        path: string | PathSet;
        value: any;
    }

    /**
     * An envelope that wraps a JSON object.
     **/
    interface JSONEnvelope<T> {
        json: T;
    }

    /**
     * JavaScript Object Notation Graph (JSONGraph) is a notation for expressing graphs in JSON. For more information, see the [JSONGraph Guide]{@link http://netflix.github.io/falcor/documentation/jsongraph.html}.
     **/
    type JSONGraph = any;

    /**
     * An envelope that wraps a {@link JSONGraph} fragment.
     **/
    interface JSONGraphEnvelope {
        jsonGraph: JSONGraph;
        paths?: Array<PathSet>;
        invalidate?: Array<PathSet>;
    }

    /**
     * Describe a range of integers. Must contain either a "to" or "length" property.
     **/
    interface Range {
        from?: number;
        to?: number;
        length?: number;
    }

    interface Reference extends Sentinel {
        $type: 'reference';
        value: Path;
    }

    interface Sentinel {
        $expires?: number;
    }

    function ref(path: string | FalcorJsonGraph.PathSet, props?: FalcorJsonGraph.Sentinel): FalcorJsonGraph.Reference;
    function atom (value: any, props?: FalcorJsonGraph.Sentinel): FalcorJsonGraph.Atom;
    function error(errorValue: any, props?: FalcorJsonGraph.Sentinel): FalcorJsonGraph.Error;
    function pathValue(path: string | FalcorJsonGraph.PathSet, value: any): FalcorJsonGraph.PathValue;
    function pathInvalidation(path: string | FalcorJsonGraph.PathSet): FalcorJsonGraph.InvalidPath;
}

