import type { ConsentDetails, ThemeData } from "./api-interfaces";
import type { BaseTCFUserDecision } from "./integration-interfaces";

declare global {
    interface Window {
        _ucCmp?: Usercentrics;
        __ucCmp: Usercentrics;
    }
}

export type Usercentrics = UsercentricsUi & UsercentricsFunctionality;

/** https://usercentrics.com/docs/web/features/api/control-ui/ */
export interface UsercentricsUi {
    /**
     * Programmatic way to close the CMP
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#closecmp
     */
    closeCmp: () => Promise<void>;

    /**
     * Programmatic way to recheck the unblocking of scripts e.g. for Single Page Applications that add script tags dynamically
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#refreshscripts
     */
    refreshScripts: () => Promise<void>;

    /**
     * Programmatic way to show the First Layer
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#showfirstlayer
     */
    showFirstLayer: () => Promise<void>;

    /**
     * Programmatic way to show the Second Layer
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#showsecondlayer
     */
    showSecondLayer: () => Promise<void>;

    /**
     * Programmatic way to show the details of a service
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#showservicedetails
     */
    showServiceDetails: (serviceId: string) => Promise<void>;

    /**
     * Programmatic way to update the Themes
     * @see https://usercentrics.com/docs/web/features/api/control-ui/#updatethemes
     */
    updateThemes: (themeData: ThemeData) => Promise<void>;
}

/** https://usercentrics.com/docs/web/features/api/control-functionality/ */
export interface UsercentricsFunctionality {
    /**
     * Programmatic way to accept all consents
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#acceptallconsents
     */
    acceptAllConsents: () => Promise<void>;

    /**
     * Programmatic way to change the language in the CMP
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#changelanguage
     * @param language - Two character country code, e.g. "en" = set language to English
     */
    changeLanguage: (language: string) => Promise<void>;

    /**
     * Programmatic way to clear the CMP localStorage entries
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#clearusersession
     */
    clearUserSession: () => Promise<void>;

    /**
     * Programmatic way to deny all consents
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#denyallconsents
     */
    denyAllConsents: () => Promise<void>;

    /**
     * Programmatic way to get the currently selected language in the CMP
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#getactivelanguage
     */
    getActiveLanguage: () => Promise<string>;

    /**
     * Retrieves all the Consent Details
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#getconsentdetails
     */
    getConsentDetails: () => Promise<ConsentDetails>;

    /**
     * Programmatic way to get the Controller ID
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#getcontrollerid
     */
    getControllerId: () => Promise<string>;

    /**
     * Programmatic way to check if consent is required (no consent given or resurface). Return value is only available after UI has initialized.
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#isconsentrequired
     */
    isConsentRequired: () => Promise<boolean>;

    /**
     * Programmatic way to check if the app is initialized
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#isinitialized
     */
    isInitialized: () => Promise<boolean>;

    /**
     * Saves the consents after being updated.
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#saveconsents
     */
    saveConsents: () => Promise<void>;

    /**
     * Updates consents for whole categories of services
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#updatecategoriesconsents
     */
    updateCategoriesConsents: (categoriesConsents: CategoriesConsents) => Promise<void>;

    /**
     * Updates consents for individual or multiple services
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#updateservicesconsents
     */
    updateServicesConsents: (servicesConsents: ServicesConsents) => Promise<void>;

    /**
     * Programmatic way to update TCF consents
     * @see https://usercentrics.com/docs/web/features/api/control-functionality/#updatetcfconsents
     */
    updateTcfConsents: (tcfConsents: TCFConsents) => Promise<void>;
}

export type CategoriesConsents = ReadonlyArray<BaseTCFUserDecision>;
export type ServicesConsents = ReadonlyArray<BaseTCFUserDecision>;
export type TCFConsents = ReadonlyArray<BaseTCFUserDecision>;

export type * from "./integration-interfaces";
export type * from "./integration-types";

export type * from "./api-enums";
export type * from "./api-interfaces";
export type * from "./api-types";
