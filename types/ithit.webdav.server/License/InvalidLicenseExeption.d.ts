import { DavStatus } from "../DavStatus";
import { ErrorDetails } from "../ErrorDetails";
import { Exception } from "typescript-dotnet-commonjs/System/Exception";
export declare class InvalidLicenseException extends Exception {
    constructor(message: string, innerException?: Exception, status?: DavStatus, errorDetails?: ErrorDetails);
}
