import { Component, ReactHTML } from "react";

export class ToastContainer extends Component<{
    toastMessageFactory: any;
    className?: string | undefined;
}> {
    error: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    info: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    success: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    warning: (message: React.ReactNode, title: React.ReactNode, optionsOverride?: {}) => void;
    clear: () => void;
}
export const ToastMessageAnimated: keyof ReactHTML;
export const ToastMessagejQuery: keyof ReactHTML;
