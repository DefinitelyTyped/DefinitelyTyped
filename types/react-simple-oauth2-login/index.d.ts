import * as React from "react";

export interface OAuth2LoginProps {
    id?: string;
    authorizationUrl: string;
    clientId: string;
    redirectUri: string;
    responseType: "code" | "token";
    onSuccess: (data: Record<string, any>) => void;
    onFailure: (err: Error) => void;
    buttonText?: string;
    children?: React.ReactNode;
    popupWidth?: number;
    popupHeight?: number;
    className?: string;
    render?: (props: {
        className: string;
        buttonText: string;
        children: React.ReactNode;
        onClick: () => void;
    }) => void;
    isCrossOrigin?: boolean;
    onRequest?: () => void;
    scope?: string;
    state?: string;
    extraParams?: Record<string, any>;
}

export default function OAuth2Login(props: OAuth2LoginProps): JSX.Element;
