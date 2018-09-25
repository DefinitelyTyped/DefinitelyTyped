import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { PropStat } from "./PropStat";
import { ResponseBase } from "./ResponseBase";
/**
 * Response that may be present in multistatus response.
 * Describes status of properties relating to the same item.
 */
export declare class PropStatResponse extends ResponseBase {
    private readonly propStats;
    /**
     * Initializes new instance.
     * @param itemPath    path to item which contains these properties.
     * @param propStats   statuses for different properties related to this item.
     * @param description description for the response.
     */
    constructor(itemPath: string, propStats: IEnumerable<PropStat>, description: string);
    /**
     * Retrieves statuses for properties grouped by item they relate to.
     * @return statuses for properties.
     */
    readonly PropStats: IList<PropStat>;
}
