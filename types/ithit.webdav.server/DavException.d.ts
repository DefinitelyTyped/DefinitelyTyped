import { Exception } from "typescript-dotnet-commonjs/System/Exception";
import { DavContextBase } from "./DavContextBase";
import { DavStatus } from "./DavStatus";
import { ErrorDetails } from "./ErrorDetails";
import { IHierarchyItem } from "./IHierarchyItem";
/**
 * Exception which can be thrown by WebDAV interface implementations.
 * @remarks
 * There are some other exceptions derived from this one which contain specific
 * fields, like {@link NeedPrivilegesException}.
 */
export declare class DavException extends Exception {
    code: DavStatus;
    /**
     * Contains XML element name and namespace which will be written to the response body.
     * It provides more information about error which can be interpreted by clients.
     */
    ErrorDetails?: ErrorDetails;
    /**HTTP status code and description that will be sent to client. */
    Code: DavStatus;
    /**
     * Initializes a new instance of the {@link DavException} class with a specified error message,
     * description, status code and a reference to the inner exception that is the cause of this exception.
     * @param message The message that describes the error.
     * @param status {@link DavStatus} instance that descrives the error.
     * @param innerException The exception that is the cause of the current exception,
     * or a null reference (Nothing in Visual Basic) if no inner exception is specified.
     * @param errorDetails XML element name and namespace which provides more specific information about
     * error.
     */
    constructor(message: string, innerException?: Exception, status?: DavStatus, errorDetails?: ErrorDetails);
    /**
     * Writes exception to the output writer.
     * @param context Instance of {@link DavContextBase}.
     * @param item Instance of {@link IHierarchyItem}.
     * @param renderContent Some methods, like "HEAD" forbid any content in response, this parameter will
     * be false in this
     * case and nothing shall be written in the response.
     * @remarks Full response shall be formed, including HTTP status and headers.
     */
    Render(context: DavContextBase, item: IHierarchyItem, renderContent: boolean): void;
    /**
     * Writes exception as part of MultistatusException.
     * @param writer {@link XmlWriter} to which to write exception.
     * @param context Instance of {@link DavContextBase} .
     * @remarks Only body shall be written. Text in {@link Exception.message}
     * shall be omitted because it will be written as part of {@link MultistatusException} exception.
     */
    RenderInline(writer: any, context: DavContextBase): void;
    /**
     * Determines whether two errors for different properties for the same item
     * can be grouped into one as part of Multistatus response.
     * @remarks This method shall return true if both exceptions would produce the same output in @see Render
     * method not taking into account property name.
     * @param other Exception to test.
     * @returns true if exceptions can be reported as one.
     */
    CanGroupWith(other: DavException): boolean;
}
