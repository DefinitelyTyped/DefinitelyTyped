import DowncastDispatcher from "./downcastdispatcher";
import DowncastHelpers from "./downcasthelpers";
import UpcastDispatcher from "./upcastdispatcher";
import UpcastHelpers from "./upcasthelpers";

export default abstract class ConversionHelpers {
    constructor(dispatchers: Array<DowncastDispatcher | UpcastDispatcher>);
    add(conversionHelper: (...args: any[]) => any): DowncastHelpers | UpcastHelpers;
}
