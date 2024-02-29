declare const TagManager: {
    dataLayer: (dataLayerArgs: DataLayerArgs) => void;
    initialize: (tagManagerArgs: TagManagerArgs) => void;
};

export interface TagManagerArgs extends DataLayerArgs {
    /**
     * GTM id, must be something like GTM-000000.
     */
    gtmId: string;
    /**
     * Additional events such as 'gtm.start': new Date().getTime(),event:'gtm.js'.
     */
    events?: object | undefined;
    /**
     * Used to set environments.
     */
    auth?: string | undefined;
    /**
     * Used to set environments, something like env-00.
     */
    preview?: string | undefined;
}

export interface DataLayerArgs {
    /**
     * Object that contains all of the information that you want to pass to Google Tag Manager.
     */
    dataLayer?: object | undefined;
    /**
     * Custom name for dataLayer object.
     */
    dataLayerName?: string | undefined;
}

export default TagManager;
