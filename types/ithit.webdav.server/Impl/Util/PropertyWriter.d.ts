import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { DavContextBase } from "../../DavContextBase";
import { DavEngine } from "../../DavEngine";
import { IHierarchyItem } from "../../IHierarchyItem";
import { MultistatusException } from "../../MultistatusException";
import { PropertyName } from "../../PropertyName";
import { MultistatusResponseWriter } from "./MultistatusResponseWriter";
import { LockInfo } from "../../Class2/LockInfo";
import { DavRequest } from "../../Extensibility/DavRequest";
export declare class PropertyWriter {
    private static nsDav;
    static WriteProperites(msWriter: MultistatusResponseWriter, item: IHierarchyItem, optionalProps: PropertyName[], obligatoryProps: IEnumerable<PropertyName>, engine: DavEngine, context: DavContextBase, allprop: boolean): void;
    static instanceOfMultistatusException(object: any): object is MultistatusException;
    static WritePropMultistatusResponse(result: IEnumerable<IHierarchyItem>, props: IList<PropertyName>, engine: DavEngine, context: DavContextBase): void;
    static WritePropLockDiscovery(writer: any, item: IHierarchyItem, context: DavContextBase): void;
    static writeLockInfo(w: any, lockInfo: LockInfo, request: DavRequest, engine: DavEngine, item: IHierarchyItem): void;
}
