// Type definitions for react-twitter-auth 0.10
// Project: https://github.com/GenFirst/react-twitter-auth
// Definitions by: Paul Fasola <https://github.com/paulfasola>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface TwitterLoginProp {
    tag?: string;
    text?: string;
    loginUrl: string;
    requestTokenUrl: string;
    onFailure: (msg: string) => void;
    onSuccess: (response: string) => void;
    disabled?: boolean;
    style?: string;
    className?: string;
    dialogWidth?: number;
    dialogHeight?: number;
    showIcon?: boolean;
    credentials?: string;
}

declare var TwitterLogin: React.StatelessComponent<TwitterLoginProp>;

export default TwitterLogin;
