/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { DavContextBase } from "../../DavContextBase";
import { DavEngine } from "../../DavEngine";
import { IHierarchyItem } from "../../IHierarchyItem";
import { ItemExceptionResponse } from "../Multistatus/ItemExceptionResponse";
import { ItemResponse } from "../Multistatus/ItemResponse";
import { PropStat } from "../Multistatus/PropStat";
import { PropStatResponse } from "../Multistatus/PropStatResponse";
export declare class MultistatusResponseWriter {
    readonly Writer: any;
    protected static nsDav: string;
    protected msWriter: any;
    private engine;
    private context;
    constructor(engine: DavEngine, context: DavContextBase, writer?: any);
    StartMultiStatusResponse(includePagingNamespace?: boolean): void;
    StartResponse(path: string): void;
    EndResponse(): void;
    AddStatusResponse(item: ItemExceptionResponse | ItemResponse | PropStatResponse): void;
    AddPropStats(propStats: IList<PropStat>): void;
    EndMultiStatusResponse(): void;
    WriteItemHref(uploadItem: IHierarchyItem): void;
    WriteHref(path: string): void;
    private AddStatusResponsePropStatResponse;
    private AddStatusResponseItemResponse;
    private AddStatusResponseItemExceptionResponse;
}
