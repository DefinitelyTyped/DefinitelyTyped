interface Choice {
    label: string;
    description: string;
    value: boolean;
}

type Category = "necessary" | "tracking" | "analytics" | "marketing";

interface Options {
    cookieName?: string;
    cookieConfig?: {
        domain: string;
        path: string;
    };
    heading?: string;
    description?: string;
    acceptLabel?: string;
    rejectLabel?: string;
    settingsLabel?: string;
    closeLabel?: string;
    choices?: Partial<Record<Category, Choice | false>>;
    showEditIcon?: boolean;
    categories?: Partial<Record<Category, () => void>>;
}

interface GdprConsentInterface {
    attachBanner(bodyElement: HTMLElement, options?: Options): void;
}

declare const GdprConsent: GdprConsentInterface;

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@beyonk/gdpr-cookie-consent-banner" {
    const attachBanner: GdprConsentInterface["attachBanner"];
    export default attachBanner;
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@beyonk/gdpr-cookie-consent-banner/dist/esm/bundle.js" {
    const attachBanner: GdprConsentInterface["attachBanner"];
    export default attachBanner;
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@beyonk/gdpr-cookie-consent-banner/dist/style.css" {}
