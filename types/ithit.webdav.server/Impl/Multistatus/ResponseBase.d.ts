/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
 * Base class for responses to be included into multistatus response.
 * Basically it can be either {@link PropStatResponse} or {@link ItemResponse}.
 */
export declare class ResponseBase {
    private readonly itemPath;
    private readonly responseDescription;
    /**
     * Initializes new instance.
     * @param itemPath Path to the item.
     * @param responseDescription Description of the response.
     */
    constructor(itemPath: string, responseDescription: string);
    /**Path of an item this response relates to. */
    readonly ItemPath: string;
    /**Description of the response. */
    readonly ResponseDescription: string;
}
