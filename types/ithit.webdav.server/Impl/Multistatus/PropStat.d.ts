import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { DavException } from "../../DavException";
import { PropertyValue } from "../../PropertyValue";
/**
 * Status for a number of properties to be included into multistatus response.
 */
export declare class PropStat {
    private readonly property;
    private exception?;
    /**
     * Initializes new instance.
     * @param property list of properties with the same status.
     * @param status status for these properties.
     * @param description description.
     */
    constructor(property: IEnumerable<PropertyValue>, exception?: DavException);
    /**
     * Retrieves list of properties with the same status.
     * @return list of properties.
     */
    readonly Properties: IList<PropertyValue>;
    readonly Exception: DavException | undefined;
}
