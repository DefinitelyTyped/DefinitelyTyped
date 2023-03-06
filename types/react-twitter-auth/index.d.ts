// Type definitions for react-twitter-auth 0.0
// Project: https://github.com/GenFirst/react-twitter-auth
// Definitions by: Paul Fasola <https://github.com/paulfasola>
//                 Dmytro Savchenko <https://github.com/loginwashere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface TwitterLoginProps {
    tag?: React.ElementType | undefined;
    text?: string | undefined;
    loginUrl: string;
    requestTokenUrl: string;
    onFailure: (msg: string) => void;
    onSuccess: (response: string) => void;
    disabled?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    dialogWidth?: number | undefined;
    dialogHeight?: number | undefined;
    showIcon?: boolean | undefined;
    credentials?: "omit" | "same-origin" | "include" | undefined;
    customHeaders?: HeadersInit | undefined;
    children?: React.ReactNode | undefined;
    forceLogin?: boolean | undefined;
}

declare var TwitterLogin: React.FunctionComponent<TwitterLoginProps>;

export default TwitterLogin;
