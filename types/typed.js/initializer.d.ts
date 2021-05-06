import Typed from "./index";
import { TypedOptions } from "./config";

export class Initializer {
    /**
     * Load up defaults & options on the Typed instance
     * @param self instance of Typed
     * @param options options object
     * @param elementId HTML element ID _OR_ instance of HTML element
     */
    load: (self: Typed, options: TypedOptions, elementId: string) => void;
}
