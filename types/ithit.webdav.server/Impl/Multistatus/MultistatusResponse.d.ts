import { DavException } from "../../DavException";
import { DavStatus } from "../../DavStatus";
import { PropertyValue } from "../../PropertyValue";
import { ResponseBase } from "./ResponseBase";
export declare class MultistatusResponse {
    private readonly responses;
    private responseDescription;
    AddResponses(responses: ResponseBase[]): void;
    /**
     * Adds new responses to the private collection in this class.
     */
    AddResponse(path: string, code: DavStatus | null, href: string | undefined, responseDescription: string | undefined, property: PropertyValue | null, exception: DavException | null): void;
    readonly Responses: ResponseBase[];
    ResponseDescription: string;
    private stringEquals;
}
