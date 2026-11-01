//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.contextualIdentities
 */
export namespace ContextualIdentities {
    /**
     * Represents information about a contextual identity.
     */
    interface ContextualIdentity {
        /**
         * The name of the contextual identity.
         */
        name: string;

        /**
         * The icon name of the contextual identity.
         */
        icon: string;

        /**
         * The icon url of the contextual identity.
         */
        iconUrl: string;

        /**
         * The color name of the contextual identity.
         */
        color: string;

        /**
         * The color hash of the contextual identity.
         */
        colorCode: string;

        /**
         * The cookie store ID of the contextual identity.
         */
        cookieStoreId: string;
    }

    /**
     * Represents the association between a site and a contextual identity.
     */
    interface SiteAssociation {
        /**
         * The associated host, normalized to lower case and encoded as ASCII.
         */
        site: string;

        /**
         * The cookie store ID of the contextual identity the host is associated with.
         */
        cookieStoreId: string;
    }

    /**
     * Information to filter the contextual identities being retrieved.
     */
    interface QueryDetailsType {
        /**
         * Filters the contextual identity by name.
         * Optional.
         */
        name?: string;
    }

    interface GetSupportedColorsCallbackColorsItemType {
        /**
         * The color name, as accepted by the color property of create and update.
         */
        color: string;

        /**
         * The color hash for this color name.
         */
        colorCode: string;
    }

    interface GetSupportedIconsCallbackIconsItemType {
        /**
         * The icon name, as accepted by the icon property of create and update.
         */
        icon: string;

        /**
         * The icon url for this icon name.
         */
        iconUrl: string;
    }

    /**
     * Details about the contextual identity being created.
     */
    interface CreateDetailsType {
        /**
         * The name of the contextual identity.
         */
        name: string;

        /**
         * The color of the contextual identity.
         */
        color: string;

        /**
         * The icon of the contextual identity.
         */
        icon: string;
    }

    /**
     * Details about the contextual identity being created.
     */
    interface UpdateDetailsType {
        /**
         * The name of the contextual identity.
         * Optional.
         */
        name?: string;

        /**
         * The color of the contextual identity.
         * Optional.
         */
        color?: string;

        /**
         * The icon of the contextual identity.
         * Optional.
         */
        icon?: string;
    }

    /**
     * Details about the site association.
     */
    interface SetSiteAssociationDetailsType {
        /**
         * The host to associate with the container (matched as an exact host).
         */
        site: string;

        /**
         * The cookie store ID of the container to associate the site with.
         */
        cookieStoreId: string;
    }

    /**
     * Details about the site association to remove.
     */
    interface RemoveSiteAssociationDetailsType {
        /**
         * The host whose container association should be removed.
         */
        site: string;
    }

    /**
     * Details about the site to look up.
     */
    interface GetSiteAssociationDetailsType {
        /**
         * The host to look up.
         */
        site: string;
    }

    /**
     * Information to filter the associations being retrieved.
     */
    interface QuerySiteAssociationsDetailsType {
        /**
         * If provided, only associations for this container are returned.
         * Optional.
         */
        cookieStoreId?: string;
    }

    interface OnUpdatedChangeInfoType {
        /**
         * Contextual identity that has been updated
         */
        contextualIdentity: ContextualIdentity;
    }

    interface OnCreatedChangeInfoType {
        /**
         * Contextual identity that has been created
         */
        contextualIdentity: ContextualIdentity;
    }

    interface OnRemovedChangeInfoType {
        /**
         * Contextual identity that has been removed
         */
        contextualIdentity: ContextualIdentity;
    }

    interface OnSiteAssociationChangedChangeInfoType {
        /**
         * The host whose association changed.
         */
        site: string;

        /**
         * The cookie store ID of the now-associated container, or omitted if the association was removed.
         * Optional.
         */
        cookieStoreId?: string;
    }

    interface Static {
        /**
         * Retrieves information about a single contextual identity.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         */
        get(cookieStoreId: string): Promise<ContextualIdentity>;

        /**
         * Retrieves all contextual identities
         *
         * @param details Information to filter the contextual identities being retrieved.
         */
        query(details: QueryDetailsType): Promise<ContextualIdentity[]>;

        /**
         * Retrieves the list of colors supported by contextual identities.
         */
        getSupportedColors(): Promise<GetSupportedColorsCallbackColorsItemType[]>;

        /**
         * Retrieves the list of icons supported by contextual identities.
         */
        getSupportedIcons(): Promise<GetSupportedIconsCallbackIconsItemType[]>;

        /**
         * Creates a contextual identity with the given data.
         *
         * @param details Details about the contextual identity being created.
         */
        create(details: CreateDetailsType): Promise<ContextualIdentity>;

        /**
         * Updates a contextual identity with the given data.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         * @param details Details about the contextual identity being created.
         */
        update(cookieStoreId: string, details: UpdateDetailsType): Promise<ContextualIdentity>;

        /**
         * Reorder one or more contextual identities by their cookieStoreIDs to a given position.
         *
         * @param cookieStoreIds The ID or list of IDs of the contextual identity cookie stores.
         * @param position The position the contextual identity should move to.
         */
        move(cookieStoreIds: string | string[], position: number): Promise<void>;

        /**
         * Deletes a contextual identity by its cookie Store ID.
         *
         * @param cookieStoreId The ID of the contextual identity cookie store.
         */
        remove(cookieStoreId: string): Promise<ContextualIdentity>;

        /**
         * Associates a site with a container. Top-level navigations to that site will load in the given container.
         *
         * @param details Details about the site association.
         */
        setSiteAssociation(details: SetSiteAssociationDetailsType): Promise<void>;

        /**
         * Removes the container association for a site.
         *
         * @param details Details about the site association to remove.
         */
        removeSiteAssociation(details: RemoveSiteAssociationDetailsType): Promise<void>;

        /**
         * Retrieves the association of a site, or null if the site is not associated with any container.
         *
         * @param details Details about the site to look up.
         */
        getSiteAssociation(details: GetSiteAssociationDetailsType): Promise<SiteAssociation | undefined>;

        /**
         * Retrieves the list of site-to-container associations.
         *
         * @param details Information to filter the associations being retrieved.
         */
        querySiteAssociations(details: QuerySiteAssociationsDetailsType): Promise<SiteAssociation[]>;

        /**
         * Fired when a container is updated.
         */
        onUpdated: Events.Event<(changeInfo: OnUpdatedChangeInfoType) => void>;

        /**
         * Fired when a new container is created.
         */
        onCreated: Events.Event<(changeInfo: OnCreatedChangeInfoType) => void>;

        /**
         * Fired when a container is removed.
         */
        onRemoved: Events.Event<(changeInfo: OnRemovedChangeInfoType) => void>;

        /**
         * Fired when a site-to-container association is added, changed, or removed.
         */
        onSiteAssociationChanged: Events.Event<(changeInfo: OnSiteAssociationChangedChangeInfoType) => void>;
    }
}
