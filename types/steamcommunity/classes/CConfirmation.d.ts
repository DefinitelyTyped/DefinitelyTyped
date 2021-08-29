import { Callback, ConfirmationType } from '../index';

export = CConfirmation;

declare function CConfirmation(community: any, data: object): void;

declare class CConfirmation {
    constructor(community: any, data: object);

    /** The ID of this confirmation. This is not the same as a trade offer ID. */
    id: any;
    /** What type of thing this confirmation wants to confirm. The enum is available as a property of SteamCommunity. */
    type: ConfirmationType;
    /** The ID of the thing that created this confirmation (trade offer ID for a trade, market listing ID for a market listing). */
    creator: string;
    /** The key for this confirmation. This is required when confirming or canceling the confirmation. This is not the same as the TOTP confirmation key. */
    key: string;
    /** The title of this confirmation. */
    title: string;
    /**
     * A textual description of what you will receive from this confirmation, if this is a trade.
     * If this is a market listing, then this is a string containing the list price and then the amount you will receive parenthetically.
     * For example: $115.00 ($100.00)
     */
    receiving: string;
    /** A textual description of when this confirmation was created. */
    time: string;
    /** The URL to your trading partner's avatar, if this is a trade. The URL to the image of the item, if this is a market listing. Otherwise, an empty string. */
    icon: string;
    offerID: string | null;

    /**
     * Gets the ID of the trade offer that this confirmation is confirming, if it's for a trade.
     *
     * @param time The Unix timestamp with which the following key was generated.
     * @param key The confirmation key that was generated using the preceeding time and the tag "details" (this key can be reused). You can use steam-totp to generate this.
     * @param callback Called when the request completes.
     */
    getOfferID(time: any, key: any, callback: any): void;

    /**
     * Accept or decline the confirmation.
     *
     * @param time The Unix timestamp with which the following key was generated.
     * @param key The confirmation key that was generated using the preceeding time and the tag "allow" (if accepting) or "cancel" (if declining). You can use steam-totp to generate this..
     * @param accept `true` if you are accepting, `false` if you are canceling.
     * @param callback
     */
    respond(time: any, key: any, accept: boolean, callback: Callback): void;
}
