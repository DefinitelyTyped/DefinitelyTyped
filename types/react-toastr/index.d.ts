// Type definitions for react-toastr 3.0
// Project: https://github.com/tomchentw/react-toastr
// Definitions by: Josh Holmer <https://github.com/shssoichiro>, Dan Regazzi <https://github.com/DanRegazzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactHTML } from 'react';

export class ToastContainer extends Component<{
    toastMessageFactory: any;
    className?: string;
}> {
    error: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    info: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    success: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    warning: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    clear: () => void;
}
export const ToastMessageAnimated: keyof ReactHTML;
export const ToastMessagejQuery: keyof ReactHTML;
