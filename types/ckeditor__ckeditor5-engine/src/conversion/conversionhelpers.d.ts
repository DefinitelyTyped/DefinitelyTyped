import DowncastDispatcher from "./downcastdispatcher";
import UpcastDispatcher from "./upcastdispatcher";

/**
 * Base class for conversion helpers.
 */
export default class ConversionHelpers {
    constructor(dispatchers: Array<DowncastDispatcher | UpcastDispatcher>);

    /**
     * Registers a conversion helper.
     *
     * **Note**: See full usage example in the `{@link module:engine/conversion/conversion~Conversion#for conversion.for()}`
     * method description.
     */
    add(conversionHelper: (dispatcher: DowncastDispatcher | UpcastDispatcher) => void): this;
}
