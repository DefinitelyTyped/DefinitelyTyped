// Type definitions for react-credit-cards 0.8
// Project: https://github.com/amarofashion/react-credit-cards
// Definitions by: Vytautas Strimaitis <https://github.com/vstrimaitis>, Ole Frank <https://github.com/olefrank>, zzanol <https://github.com/zzanol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface CallbackArgument {
    issuer: string;
    maxLength: number;
}

export type Focused = "name" | "number" | "expiry" | "cvc";

export interface ReactCreditCardProps {
    acceptedCards?: ReadonlyArray<string>;
    callback?: (type: CallbackArgument, isValid: boolean) => void;
    cvc: string | number;
    expiry: string | number;
    focused?: Focused;
    issuer?: string;
    locale?: { valid: string };
    name: string;
    number: string | number;
    placeholders?: { name: string };
    preview?: boolean;
}

declare class ReactCreditCard extends React.Component<
    ReactCreditCardProps,
    never
> {}

export default ReactCreditCard;
