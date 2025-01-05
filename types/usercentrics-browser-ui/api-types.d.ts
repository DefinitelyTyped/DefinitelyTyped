/**
 * @file
 * Everything from https://usercentrics.com/docs/web/features/api/types/
 */

import type { CmpTheme } from "./api-interfaces";

/** @see https://usercentrics.com/docs/web/features/api/types/#themetype */
export interface ThemeType {
    colors: {
        black: string;
        white: string;
        layout: {
            mainPage: {
                left: {
                    background: string;
                };
                right: {
                    background: string;
                };
            };
            managePage: {
                left: {
                    background: string;
                };
                right: {
                    background: string;
                };
            };
            qrCode: {
                left: {
                    background: string;
                };
                right: {
                    background: string;
                };
            };
        };
        toggle: {
            on: {
                background: string;
            };
            off: {
                background: string;
            };
        };
        text: {
            color: string;
            color95: string;
            color90: string;
            color08: string;
        };
    };
    padding: {
        leftContainer: {
            mainPage: {
                vertical: number;
                horizontal: number;
            };
            managePage: {
                vertical: number;
                horizontal: number;
            };
            qrCode: {
                vertical: number;
                horizontal: number;
            };
        };
        rightContainer: {
            mainPage: {
                vertical: number;
                horizontal: number;
            };
            managePage: {
                vertical: number;
                horizontal: number;
            };
            qrCode: {
                vertical: number;
                horizontal: number;
            };
        };
        card: {
            vertical: number;
            horizontal: number;
        };
        dpsInfoCard: {
            vertical: number;
            horizontal: number;
        };
        qrCodeModal: {
            vertical: number;
            horizontal: number;
        };
    };
    font: {
        size: {
            layout: {
                large: number;
                medium: number;
            };
            button: {
                large: number;
                medium: number;
            };
            card: {
                large: number;
                medium: number;
            };
            cardList: {
                large: number;
                medium: number;
            };
            dpsInfoCard: {
                large: number;
                medium: number;
            };
            qrCodeModal: {
                large: number;
                medium: number;
            };
        };
        weight: {
            regular: number;
            semiBold: number;
        };
    };
    metrics: {
        mainPage: {
            leftContainer: {
                width: string;
            };
            rightContainer: {
                width: string;
            };
        };
        managePage: {
            leftContainer: {
                width: string;
            };
            rightContainer: {
                width: string;
            };
        };
    };
}

/** @see https://usercentrics.com/docs/web/features/api/types/#cmpbuttonstype */
export type CmpButtonsType = "accept" | "deny" | "more" | "save" | "ok";

/** @see https://usercentrics.com/docs/web/features/api/types/#optionalsettingsdata */
export type OptionalSettingsData = string | null | undefined;

/** @see https://usercentrics.com/docs/web/features/api/types/#embeddingstheme */
export type EmbeddingsTheme = CmpTheme;

/** @see https://usercentrics.com/docs/web/features/api/types/#consentactiontype */
export type ConsentActionType =
    | "onAcceptAllServices"
    | "onDenyAllServices"
    | "onEssentialChange"
    | "onInitialPageLoad"
    | "onMobileSessionRestore"
    | "onNonEURegion"
    | "onSessionRestored"
    | "onTcfStringChange"
    | "onUpdateServices";

/** @see https://usercentrics.com/docs/web/features/api/types/#settingtype */
export type SettingType = "TCF" | "GDPR" | "CCPA";

/** @see https://usercentrics.com/docs/web/features/api/types/#consenttype */
export type ConsentType = "IMPLICIT" | "EXPLICIT";
