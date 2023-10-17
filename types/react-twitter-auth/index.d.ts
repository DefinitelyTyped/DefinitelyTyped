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
