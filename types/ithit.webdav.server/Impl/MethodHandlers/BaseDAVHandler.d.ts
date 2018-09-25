/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { DavContextBase } from "../../DavContextBase";
import { IVersionableItem } from "../../DeltaV/IVersionableItem";
import { IMethodHandler } from "../../Extensibility/IMethodHandler";
import { IHierarchyItem } from "../../IHierarchyItem";
import { IItemCollection } from "../../IItemCollection";
/**
 * Summary description for BaseDAVHandler.
 */
export declare abstract class BaseDavHandler implements IMethodHandler {
    readonly EnableOutputBuffering: boolean;
    readonly EnableOutputDebugLogging: boolean;
    readonly EnableInputDebugLogging: boolean;
    protected static nsDav: string;
    protected static RequireExists(item: IHierarchyItem): void;
    protected static RequireParentExists(parent: IItemCollection): void;
    abstract processRequest(context: DavContextBase, item: IHierarchyItem): any;
    abstract appliesTo(item: IHierarchyItem): boolean;
    protected RequireCheckedIn(item: IVersionableItem): void;
    protected RequireCheckedOut(item: IVersionableItem): void;
    protected RequireOverwrite(overwrite: boolean): void;
    protected RequireItemOfType<Object>(item: IHierarchyItem): object;
    protected RequireUnderVersionControl(verItem: IVersionableItem): void;
}
