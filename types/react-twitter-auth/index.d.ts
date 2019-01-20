// Type definitions for react-twitter-auth 0.0
// Project: https://github.com/GenFirst/react-twitter-auth
// Definitions by: Paul Fasola <https://github.com/paulfasola>
//                 Dmytro Savchenko <https://github.com/loginwashere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface TwitterLoginProps {
    tag?: React.ReactType;
    text?: string;
    loginUrl: string;
    requestTokenUrl: string;
    onFailure: (msg: string) => void;
    onSuccess: (response: string) => void;
    disabled?: boolean;
    style?: ReactDOM.CSSProperties;
    dialogWidth?: number;
    dialogHeight?: number;
    showIcon?: boolean;
    credentials?: "omit" | "same-origin" | "include";
    customHeaders?: HeadersInit;
    children?: React.ReactNode;
    forceLogin?: boolean;
}

declare var TwitterLogin: React.StatelessComponent<TwitterLoginProps>;

export default TwitterLogin;
