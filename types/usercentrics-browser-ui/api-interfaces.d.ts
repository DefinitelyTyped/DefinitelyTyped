/**
 * @file
 * Everything from https://usercentrics.com/docs/web/features/api/interfaces/
 */

import type { CLOSE_OPTION } from "./api-enums";
import type {
    CmpButtonsType,
    ConsentActionType,
    ConsentType,
    EmbeddingsTheme,
    OptionalSettingsData,
    SettingType,
} from "./api-types";

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#themedata */
export interface ThemeData {
    breakPoints?: {
        desktop: number;
        tablet: number;
        mobile: number;
    };
    layers?: ScreenTypes<LayerTheme>;
    privacyButton?: ScreenTypes<Partial<PrivacyButtonTheme>>;
    embeddings?: ScreenTypes<EmbeddingsTheme>;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#screentypes */
export interface ScreenTypes<ThemeType> {
    desktop?: ThemeType;
    tablet?: ThemeType;
    mobile?: ThemeType;
    xs?: ThemeType;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#layertheme */
export interface LayerTheme {
    base?: Partial<CmpTheme>;
    first?: Partial<CmpTheme>;
    second?: Partial<CmpTheme>;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#cmptheme */
export interface CmpTheme {
    border: {
        radius: string;
    };
    borderRadiusLayer: OptionalSettingsData;
    borderRadiusButton: OptionalSettingsData;
    buttons: CmpButtonsType[][];
    colors: {
        acceptBg?: OptionalSettingsData;
        acceptTxt?: OptionalSettingsData;
        background?: OptionalSettingsData;
        border?: OptionalSettingsData;
        denyBg?: OptionalSettingsData;
        denyTxt?: OptionalSettingsData;
        link?: OptionalSettingsData;
        moreBg?: OptionalSettingsData;
        moreTxt?: OptionalSettingsData;
        neutral?: OptionalSettingsData;
        overlay?: OptionalSettingsData;
        primary?: OptionalSettingsData;
        privacyBg?: OptionalSettingsData;
        privacyIcon?: OptionalSettingsData;
        saveBg?: OptionalSettingsData;
        saveTxt?: OptionalSettingsData;
        tabActive?: OptionalSettingsData;
        tabInactive?: OptionalSettingsData;
        toggleActive?: OptionalSettingsData;
        toggleInactive?: OptionalSettingsData;
        toggleDisabled?: OptionalSettingsData;
        toggleActiveIcon?: OptionalSettingsData;
        toggleInactiveIcon?: OptionalSettingsData;
        toggleDisabledIcon?: OptionalSettingsData;
        tertiary?: OptionalSettingsData;
        text?: OptionalSettingsData;
        ccpaButtonColor?: OptionalSettingsData;
        ccpaButtonTextColor?: OptionalSettingsData;
    };
    scrollbar: {
        thumbColor?: OptionalSettingsData;
    };
    direction: "ltr" | "rtl";
    fonts: {
        family: string;
    };
    hideDenyBtn: boolean;
    hideLanguageSwitch: boolean;
    logo: {
        url: string;
        alt: string;
        position: "left" | "center" | "right";
    };
    footer: {
        isCentered: boolean;
    };
    maxBannerWidth: string;
    name: string;
    overlayOpacity: string;
    position: "left" | "center" | "right" | "bottom";
    removeCcpaToggle?: boolean;
    secondLayerTrigger: string;
    spacing: unknown;
    typography: {
        color?: OptionalSettingsData;
        font?: OptionalSettingsData;
        size?: number | undefined;
    };
    useBackgroundShadow: boolean;
    useOverlay?: boolean;
    closeOption?: CLOSE_OPTION | null;
    tcf?: {
        showDescriptions?: boolean;
        hideNonIab?: boolean;
        hideToggles?: boolean;
        showSharedOutsideEu?: boolean;
    };
    showCategoriesToggles: boolean;
    showMoreInformationLink?: boolean;
    hideDataProcessingServices?: boolean;
    hideServicesToggles?: boolean;
    defaultTab: "FIRST" | "SECOND";
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#privacybuttontheme */
export interface PrivacyButtonTheme {
    position: "left" | "right";
    size: number;
    backgroundColor: string;
    pages: string[];
    iconUrl: string;
    iconColor: string;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#consentdetails */
export interface ConsentDetails {
    consent: ConsentData;
    services: Record<string, ServiceData>;
    categories: Record<string, CategoryData>;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#consentdata */
export interface ConsentData {
    status: "ALL_ACCEPTED" | "ALL_DENIED" | "SOME_ACCEPTED" | "SOME_DENIED";
    serviceIds?: string[];
    required: boolean;
    version: number;
    controllerId: string;
    language: string;
    createdAt: number;
    updatedAt: number;
    updatedBy: ConsentActionType;
    setting: SettingData;
    type: ConsentType;
    hash: string;
    gpcSignal?: boolean;
    isBot?: true;
    isOutsideEu?: true;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#settingdata */
export interface SettingData {
    id: string;
    type: SettingType;
    version: string;
    abVariant?: string;
    sandbox?: true;
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#servicedata */
export interface ServiceData {
    name: string;
    version: string;
    category: string;
    essential: boolean;
    consent?: {
        given: boolean;
        type: "IMPLICIT" | "EXPLICIT";
    };
    gcm?: {
        analyticsStorage?: true;
        adStorage?: true;
    };
    subservices?: Record<string, ServiceData>;
    thirdCountryDataTransfer?: boolean;
    status?: "added";
}

/** @see https://usercentrics.com/docs/web/features/api/interfaces/#categorydata */
export interface CategoryData {
    essential?: boolean;
    state: "ALL_DENIED" | "SOME_ACCEPTED" | "ALL_ACCEPTED";
    dps: Record<string, boolean> | null;
    hidden?: boolean;
    name: string;
}
