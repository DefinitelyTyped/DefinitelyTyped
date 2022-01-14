import DowncastDispatcher from "./downcastdispatcher";
import DowncastHelpers from "./downcasthelpers";
import UpcastDispatcher from "./upcastdispatcher";
import UpcastHelpers from "./upcasthelpers";

export default abstract class ConversionHelpers<T extends DowncastHelpers | UpcastHelpers> {
    constructor(dispatchers: T extends DowncastHelpers ? DowncastDispatcher[] : UpcastDispatcher[]);
    add(conversionHelper: (dispatcher: T extends DowncastHelpers ? DowncastDispatcher : UpcastDispatcher) => void): this;
}
