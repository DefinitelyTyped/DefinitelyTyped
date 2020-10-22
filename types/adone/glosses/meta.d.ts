declare namespace adone {
    namespace meta {
        namespace I {
            type PossibleTypes = "object" | "class" | "null" | "global" | "Array" | "RegExp" | "Date"
                | "Promise" | "Set" | "Map" | "WeakSet" | "DataView" | "Map Iterator" | "Set Iterator"
                | "Array Iterator" | "String Iterator" | "Object" | "function" | "boolean" | "number"
                | "undefined" | "string" | "symbol";
        }

        function typeOf(obj: any): I.PossibleTypes;
        function typeOf(obj: any): string;
    }
}
