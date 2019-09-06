// Type definitions for react-native-awesome-card-io 0.8.2
// Project: https://github.com/Kerumen/react-native-awesome-card-io
// Definitions by: Onur Var <https://github.com/OnurVar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-native-awesome-card-io' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

    interface CardDetails {
        cardType: string; // Localized card type.
        cardNumber: string; // Card number.
        redactedCardNumber: string; // Card number with all but the last four digits obfuscated.
        expiryMonth: number; // Expiry month with january as 1 (may be 0 if expiry information was not requested).
        expiryYear: number; // Expiry year (may be 0 if expiry information was not requested).
        cvv: string; // Security code.
        postalCode: string; // Postal code. Format is country dependent.
        scanned?: boolean; // - Was the card number scanned (as opposed to entered manually)?
        cardholderName: string; // Card holder name.
    }

    interface CardIOCommonProps {
        languageOrLocale?: string; // The preferred language for all strings appearing in the user interface.
        guideColor?: string; // Alter the card guide (bracket) color. Opaque colors recommended.
        useCardIOLogo?: boolean; // false - Set to true to show the card.io logo over the camera view instead of the PayPal logo.
        hideCardIOLogo?: boolean; // false - Hide the PayPal or card.io logo in the scan view.
        scanInstructions?: string; // - Set the scan instruction text. If nil, use the default text.
        scanExpiry?: boolean; // true - Set to false if you don't want the camera to try to scan the card expiration.

        // iOS only
        detectionMode?: CardIODetectionMode; // false - Set the detection mode. (iOS)
        scannedImageDuration?: number; // 0.1 - How long card.io will display an image of the card with the computed card number superimposed after a successful scan.
        allowFreelyRotatingCardGuide?: boolean; // true - By default, in camera view the card guide and the buttons always rotate to match the device's orientation.
    }

    interface CardIOViewProps extends CardIOCommonProps {
        didScanCard: (card: CardDetails) => void; // This function will be called when the CardIOView completes its work and returns a CreditCard.
        style: StyleProp<ViewStyle>;
    }

    interface CardIOModuleProps extends CardIOCommonProps {
        suppressManualEntry?: boolean; // false - Set to true to prevent card.io from showing its "Enter Manually" button.
        suppressConfirmation?: boolean; // false - If true, don't have the user confirm the scanned card, just return the results immediately.
        requireExpiry?: boolean; // true - Set to false if you don't need to collect the card expiration.
        requireCVV?: boolean; // true - Set to false if you don't need to collect the CVV from the user.
        requirePostalCode?: boolean; // false - Set to false if you need to collect the billing postal code.
        restrictPostalCodeToNumericOnly?: boolean; // false - Set to true if the postal code should only collect numeric input.
        requireCardholderName?: boolean; // false - Set to true if you need to collect the cardholder name.

        // iOS Only
        disableBlurWhenBackgrounding?: boolean; // false - Disable the blur of the screen when the app is backgrounded.
        keepStatusBarStyle?: boolean; //false - If true, the status bar's style will be kept as whatever your app has set it to.
        suppressScannedCardImage?: boolean; // false - If true, instead of displaying the image of the scanned card, present the manual entry screen with the scanned card number prefilled.

        // Android Only
        noCamera?: boolean; // false If set, the card will not be scanned with the camera.
        unblurDigits?: number; // -1 Privacy feature. How many of the Card number digits NOT to blur on the resulting image. Setting it to 4 will blur all digits except the last four.
        usePaypalActionbarIcon?: boolean; //  = false; Use the PayPal icon in the ActionBar.
    }

    type CardIODetectionMode = 'IMAGE_AND_NUMBER' | 'IMAGE' | 'AUTOMATIC';

    const CardIOUtilities: {
        preload: () => void; // iOS only - prepares card.io to launch faster.
        CAN_READ_CARD_WITH_CAMERA: boolean;
        DETECTION_MODE: CardIODetectionMode;
    };

    const CardIOModule: {
        scanCard: (config?: CardIOModuleProps) => Promise<CardDetails>;
    };

    class CardIOView extends Component<CardIOViewProps> {}

    export {
        CardDetails,
        CardIOCommonProps,
        CardIOViewProps,
        CardIOModuleProps,
        CardIODetectionMode,
        CardIOUtilities,
        CardIOModule,
        CardIOView,
    };
}
