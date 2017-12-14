// Type definitions for react-toastr 3.0
// Project: https://github.com/tomchentw/react-toastr
// Definitions by: Josh Holmer <https://github.com/shssoichiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, ReactHTML } from 'react';

export class ToastContainer extends Component<{
    toastMessageFactory: any;
    className?: string;
}> {
    error: (message: string, title: string, optionsOverride?: {}) => void;
    info: (message: string, title: string, optionsOverride?: {}) => void;
    success: (message: string, title: string, optionsOverride?: {}) => void;
    warning: (message: string, title: string, optionsOverride?: {}) => void;
    clear: () => void;
}
export const ToastMessageAnimated: keyof ReactHTML;
export const ToastMessagejQuery: keyof ReactHTML;
