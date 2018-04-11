// Type definitions for react-toastr 3.1
// Project: https://github.com/tomchentw/react-toastr
// Definitions by: Josh Holmer <https://github.com/shssoichiro>, Dan Regazzi <https://github.com/DanRegazzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { Component, ReactHTML } from 'react';

export class ToastContainer extends Component<{
    toastMessageFactory: any;
    className?: string;
}> {
    error: (message: any, title: any, optionsOverride?: any) => void;
    info: (message: any, title: any, optionsOverride?: any) => void;
    success: (message: any, title: any, optionsOverride?: any) => void;
    warning: (message: any, title: any, optionsOverride?: any) => void;
    clear: () => void;
}
export const ToastMessageAnimated: keyof ReactHTML;
export const ToastMessagejQuery: keyof ReactHTML;
