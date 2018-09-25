/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { DavException } from "../../DavException";
import { ResponseBase } from "./ResponseBase";
export declare class ItemExceptionResponse extends ResponseBase {
    Exception: DavException;
    constructor(itemPath: string, exception: DavException);
}
