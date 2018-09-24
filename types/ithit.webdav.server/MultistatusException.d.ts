import { DavContextBase } from "./DavContextBase";
import { DavException } from "./DavException";
import { IHierarchyItem } from "./IHierarchyItem";
import { MultistatusResponse } from "./Impl/Multistatus/MultistatusResponse";
import { PropertyName } from "./PropertyName";
/**Exception which contains errors for multiple items or properties. */
export declare class MultistatusException extends DavException {
    readonly Response: MultistatusResponse;
    private readonly response;
    /**
     * Initializes new message.
     * @param message Error text.
     */
    constructor(message?: string);
    /**
     * Addes property error.
     * @param mex Exception to merge with.
     * @param itemPath Item path for which property operation failed.
     * @param propertyName Property name for which operation failed.
     * @param exception Exception for failed operation.
     */
    AddInnerException(itemPath?: string, propertyName?: PropertyName, exception?: DavException, mex?: MultistatusException): void;
    /**
     * Writes exception to the output writer.
     * @param context Instance of {@link DavContextBase}.
     * @param item Instance of {@link IHierarchyItem}.
     * @param renderContent Whether content shall be written to output.
     * @remarks Full response shall be formed, including HTTP status and headers.
     */
    Render(context: DavContextBase, item: IHierarchyItem, renderContent: boolean): void;
    /**
     * Writes exception as part of MultistatusException.
     * @param writer {@link XmlWriter}  to which to write exception.
     * @param context Instance of {@link DavContextBase}.
     * @remarks
     * Only body shall be written. Text in {@link Exception.Message}
     * shall be omitted because it will be written as part of {@link MultistatusException} exception.
     */
    RenderInline(writer: any, context: DavContextBase): void;
    private GetResponses;
}
