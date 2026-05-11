import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface CardDetails {
    /**  Localized card type. */
    cardType: string;
    /**  Card number. */
    cardNumber: string;
    /**  Card number with all but the last four digits obfuscated. */
    redactedCardNumber: string;
    /**  Expiry month with january as 1 (may be 0 if expiry information was not requested). */
    expiryMonth: number;
    /**  Expiry year (may be 0 if expiry information was not requested). */
    expiryYear: number;

    /**  Security code. */
    cvv: string;
    /**  Postal code. Format is country dependent. */
    postalCode: string;
    /**  - Was the card number scanned (as opposed to entered manually)? */
    scanned?: boolean | undefined;
    /**  Card holder name. */
    cardholderName: string;
}

export interface CardIOCommonProps {
    /**  The preferred language for all strings appearing in the user interface. */
    languageOrLocale?: string | undefined;
    /**  Alter the card guide (bracket) color. Opaque colors recommended.. */
    guideColor?: string | number | undefined;
    /**  false - Set to true to show the card.io logo over the camera view instead of the PayPal logo.. */
    useCardIOLogo?: boolean | undefined;
    /**  false - Hide the PayPal or card.io logo in the scan view.. */
    hideCardIOLogo?: boolean | undefined;
    /**  - Set the scan instruction text. If nil, use the default text.. */
    scanInstructions?: string | undefined;
    /**  true - Set to false if you don't want the camera to try to scan the card expiration.. */
    scanExpiry?: boolean | undefined;

    /**  iOS only */
    /**  false - Set the detection mode. (iOS) */
    detectionMode?: CardIODetectionMode | undefined;
    /**  0.1 - How long card.io will display an image of the card with the computed card number superimposed after a successful scan. */
    scannedImageDuration?: number | undefined;
    /**  true - By default, in camera view the card guide and the buttons always rotate to match the device's orientation. */
    allowFreelyRotatingCardGuide?: boolean | undefined;
}

export interface CardIOViewProps extends CardIOCommonProps {
    /**  This function will be called when the CardIOView completes its work and returns a CreditCard. */
    didScanCard: (card: CardDetails) => void;
    /**  Style props of CardIOViewProps */
    style?: StyleProp<ViewStyle> | undefined;
}

export interface CardIOModuleProps extends CardIOCommonProps {
    /**  false - Set to true to prevent card.io from showing its "Enter Manually" button. */
    suppressManualEntry?: boolean | undefined;
    /**  false - If true, don't have the user confirm the scanned card, just return the results immediately. */
    suppressConfirmation?: boolean | undefined;
    /**  true - Set to false if you don't need to collect the card expiration. */
    requireExpiry?: boolean | undefined;
    /**  true - Set to false if you don't need to collect the CVV from the user. */
    requireCVV?: boolean | undefined;
    /**  false - Set to false if you need to collect the billing postal code. */
    requirePostalCode?: boolean | undefined;
    /**  false - Set to true if the postal code should only collect numeric input. */
    restrictPostalCodeToNumericOnly?: boolean | undefined;
    /**  false - Set to true if you need to collect the cardholder name. */
    requireCardholderName?: boolean | undefined;

    /**  iOS Only */
    /**  false - Disable the blur of the screen when the app is backgrounded. */
    disableBlurWhenBackgrounding?: boolean | undefined;
    /**  false - If true, the status bar's style will be kept as whatever your app has set it to. */
    keepStatusBarStyle?: boolean | undefined;
    /**  false - If true, instead of displaying the image of the scanned card, present the manual entry screen with the scanned card number prefilled. */
    suppressScannedCardImage?: boolean | undefined;

    /**  Android Only */
    /**  false If set, the card will not be scanned with the camera. */
    noCamera?: boolean | undefined;
    /**  -1 Privacy feature. How many of the Card number digits NOT to blur on the resulting image. Setting it to 4 will blur all digits except the last four. */
    unblurDigits?: number | undefined;
    /**   Default false; Use the PayPal icon in the ActionBar. */
    usePaypalActionbarIcon?: boolean | undefined;
}

export type CardIODetectionMode = "IMAGE_AND_NUMBER" | "IMAGE" | "AUTOMATIC";

export namespace CardIOUtilities {
    /**  iOS only - prepares card.io to launch faster. */
    function preload(): void;
    const CAN_READ_CARD_WITH_CAMERA: boolean;
    const DETECTION_MODE: CardIODetectionMode;
}

export namespace CardIOModule {
    function scanCard(config?: CardIOModuleProps): Promise<CardDetails>;
}

export class CardIOView extends React.Component<CardIOViewProps> {}
