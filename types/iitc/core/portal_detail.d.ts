import { IITC } from "./iitctypes";

export {};

declare global {
    class PortalDetail {
        setup(): void;

        /** Get portal detail from cache */
        get(guid: string): IITC.PortalDataDetail | undefined;

        /** Get portal detail from cache */
        isFresh(guid: string): boolean | undefined;

        /**
         * Request Portal details from server
         * NB: you shouldn't use it.
         */
        request(guid: string): JQuery.Promise<any>;
    }

    var portalDetail: PortalDetail;
}
