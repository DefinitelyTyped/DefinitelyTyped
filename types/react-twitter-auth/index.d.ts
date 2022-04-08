// Type definitions for react-twitter-auth 0.0
// Project: https://github.com/GenFirst/react-twitter-auth
// Definitions by: Paul Fasola <https://github.com/paulfasola>
//                 Dmytro Savchenko <https://github.com/loginwashere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface TwitterLoginProps {
    tag?: React.ReactType;
    text?: string;
    loginUrl: string;
    requestTokenUrl: string;
    onFailure: (msg: string) => void;
    onSuccess: (response: string) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
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
