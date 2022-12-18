import type { Currency } from './currency';

export interface Colors {
    outline: string;
    primary: {
        darkest: string;
        darker: string;
        dark: string;
        med: string;
        light: string;
        lighter: string;
        lightest: string;
    };
    accent: string;
    status: {
        ok: string;
        okFaded: string;
        warn: string;
        error: string;
        errorFaded: string;
    };
}

export interface Header {
    logoWidth: number;
    logoPosition: string;
    menu: string;
    logo: string;
    showPromo: boolean;
    promoText: string;
    promoUrl: string;
    hideOnScroll: boolean;
    favicon: string;
    locale: {
        display: string;
        hideFlag: boolean;
    };
    currency: {
        display: string;
        hideSymbol: boolean;
    };
    logoHeight: number;
}

export interface Footer {
    menu: string;
    secondaryMenu: string;
    showSecondaryMenu: boolean;
    showSocial: boolean;
    showContactInfo: boolean;
    showEmailSignup: boolean;
    contactInfoHeading: string;
    emailSignupHeading: string;
    background: string;
}

export interface TypographySetting {
    provider: string;
    name: string;
    weight: number;
    fallback: string;
}

export interface Typography {
    headingFont: TypographySetting;
    bodyFontNormal: TypographySetting;
    bodyFontBold: TypographySetting;
    scaleBaseSize: string;
    scaleRatio: number;
}

export interface Locale {
    name: string;
    code: string;
    fallback: string | null;
}

export interface Settings {
    colors: Colors;
    header: Header;
    footer: Footer;
    analytics: Record<string, boolean>;
    social: Record<string, boolean>;
    socialLinks: Record<string, { show: boolean; url: string }>;
    productList: Record<string, boolean>;
    account: {
        subscriptions: Record<string, boolean>;
    };
    cart: {
        shopLink: string;
        validateStock: boolean;
    };
    typography: Typography;
    productPreviews: {
        aspectRatio: string;
        textAlign: string;
    };
    lang: Record<string, Record<string, string>>;
    store: {
        id: string;
        name: string;
        currency: string;
        currencies: Currency[];
        country: string;
        locale: string;
        locales: Locale[];
        supportEmail: string | null;
        supportPhone: string | null;
        publicKey: string;
        url: string;
        homePage: string;
    };
    checkout: {
        lang: Record<string, string>;
    };
}
