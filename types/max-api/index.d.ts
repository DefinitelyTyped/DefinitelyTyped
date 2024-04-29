/*
 * JSON Helper Types - Not exported
 */
type JSONPrimitive = string | number | boolean | null;
interface JSONArray extends Array<JSONValue> {}
interface JSONObject {
    [key: string]: JSONValue | undefined;
}
type JSONValue = JSONPrimitive | JSONArray | JSONObject;

declare namespace MaxAPIStatic {
    /** Enum options for the value Node For Max will set on process.env.MAX_ENV */
    enum MAX_ENV {
        /** node.script running from within Max */
        MAX = "max",
        /** node.script running from within Max For Live */
        MAX_FOR_LIVE = "maxforlive",
        /** node.script running from within a standalone application */
        STANDALONE = "max:standalone",
    }

    /** Predefined generic MaxFunctionSelector types */
    enum MESSAGE_TYPES {
        /** Generic Type for *all* kinds of messages */
        ALL = "all",
        /** Bang message type */
        BANG = "bang",
        /** Dictionary message type */
        DICT = "dict",
        /** Number message type */
        NUMBER = "number",
        /** List message type */
        LIST = "list",
    }

    /** Log Levels used in maxAPI.post */
    enum POST_LEVELS {
        /** error level messages */
        ERROR = "error",
        /** info level messages */
        INFO = "info",
        /** warn level messages */
        WARN = "warn",
    }

    type MaxFunctionSelector = MESSAGE_TYPES | string;
    type MaxFunctionHandler = (...args: any[]) => any;
    type Anything = string | number | Array<string | number> | JSONObject | JSONArray;

    // Handlers
    /** Register a single handler */
    function addHandler(selector: MaxFunctionSelector, handler: MaxFunctionHandler): void;
    /** Register handlers */
    function addHandlers(handlers: Record<MaxFunctionSelector, MaxFunctionHandler>): void;
    /** Remove a single handler */
    function removeHandler(selector: MaxFunctionSelector, handler: MaxFunctionHandler): void;
    /** Remove handlers */
    function removeHandlers(selector: MaxFunctionSelector): void;

    // Outlet
    /** Outlet any values */
    function outlet(...args: JSONValue[]): Promise<void>;
    /** Outlet a Bang */
    function outletBang(): Promise<void>;

    /**
     * Post to the Max console. Setting the last argument to a value of maxAPI.POST_LEVELS allows control of the log level
     */
    function post(...args: Array<Anything | POST_LEVELS>): Promise<void>;

    // Dictionaries
    /** Get the value of a dict object */
    function getDict(id: string): Promise<JSONObject>;
    /** Set the value of a dict object */
    function setDict(id: string, dict: JSONObject): Promise<JSONObject>;
    /** Partially update the value of a dict object at a given path */
    function updateDict(id: string, updatePath: string, updateValue: JSONValue): Promise<JSONObject>;
}

export default MaxAPIStatic;
