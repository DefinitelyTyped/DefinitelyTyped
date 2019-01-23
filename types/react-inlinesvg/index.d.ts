// Type definitions for react-inlinesvg 0.8
// Project: https://github.com/gilbarbara/react-inlinesvg#readme
// Definitions by: MyCrypto <https://github.com/MyCryptoHQ>, Nick <https://github.com/nickmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType, ReactNode } from 'react';

export interface RequestError extends Error {
    isHttpError: boolean;
    status: number;
}

export interface InlineSVGError extends Error {
    name: 'InlineSVGError';
    isSupportedBrowser: boolean;
    isConfigurationError: boolean;
    isUnsupportedBrowserError: boolean;
    message: string;
}

export interface Props {
    baseURL?: string;
    cacheGetRequests?: boolean;
    children?: ReactNode;
    className?: string;
    preloader?: ReactNode;
    src: URL | string;
    style?: object;
    uniqueHash?: string;
    uniquifyIDs?: boolean;
    onError?(error: RequestError | InlineSVGError): void;
    onLoad?(src: URL | string, isCached: boolean): void;
    supportTest?(): void;
    wrapper?(): ReactNode;
}

declare const InlineSVG: ComponentType<Props>;
export default InlineSVG;
