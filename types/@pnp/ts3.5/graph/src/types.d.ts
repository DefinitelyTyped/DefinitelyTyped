export declare class GraphEndpoints {
    static Beta: string;
    static V1: string;
    /**
     *
     * @param url The url to set the endpoint
     */
    static ensure(url: string, endpoint: string): string;
}
/**
 * Defines the properties for a Team
 *
 * TODO:: remove this once typings are present in graph types package
 */
export interface TeamProperties {
    memberSettings?: {
        "allowCreateUpdateChannels"?: boolean;
        "allowDeleteChannels"?: boolean;
        "allowAddRemoveApps"?: boolean;
        "allowCreateUpdateRemoveTabs"?: boolean;
        "allowCreateUpdateRemoveConnectors"?: boolean;
    };
    guestSettings?: {
        "allowCreateUpdateChannels"?: boolean;
        "allowDeleteChannels"?: boolean;
    };
    messagingSettings?: {
        "allowUserEditMessages"?: boolean;
        "allowUserDeleteMessages"?: boolean;
        "allowOwnerDeleteMessages"?: boolean;
        "allowTeamMentions"?: boolean;
        "allowChannelMentions"?: boolean;
    };
    funSettings?: {
        "allowGiphy"?: boolean;
        "giphyContentRating"?: "strict" | string;
        "allowStickersAndMemes"?: boolean;
        "allowCustomMemes"?: boolean;
    };
}
export interface TabsConfiguration {
    configuration: {
        "entityId": string;
        "contentUrl": string;
        "websiteUrl": string;
        "removeUrl": string;
    };
}
