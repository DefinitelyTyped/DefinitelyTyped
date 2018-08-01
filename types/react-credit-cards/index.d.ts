// Type definitions for react-credit-cards 0.7
// Project: https://github.com/amarofashion/react-credit-cards
// Definitions by: Vytautas Strimaitis <https://github.com/vstrimaitis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import * as React from "react";

export interface CallbackArgument {
    isValid: boolean;
    type: { issuer: string; maxLength: number; };
}

export interface ReactCreditCardProps {
    acceptedCards?: ReadonlyArray<string>;
    callback?: (type: CallbackArgument, isValid: boolean) => void;
    cvc: string | number;
    expiry: string | number;
    focused?: "name" | "number" | "expiry" | "cvc";
    issuer?: string;
    locale?: { valid: string; };
    name: string;
    number: string | number;
    placeholders?: { name: string; };
    preview?: boolean;
}

declare class ReactCreditCard extends React.Component<ReactCreditCardProps, never> {
}

export default ReactCreditCard;
