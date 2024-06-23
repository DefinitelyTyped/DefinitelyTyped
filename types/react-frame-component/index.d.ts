import * as React from "react";

export interface FrameComponentProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    head?: React.ReactNode | undefined;
    mountTarget?: string | undefined;
    initialContent?: string | undefined;
    contentDidMount?: (() => void) | undefined;
    contentDidUpdate?: (() => void) | undefined;
    children: React.ReactNode;
}

export default class FrameComponent extends React.Component<FrameComponentProps> {}

export interface FrameContextProps {
    document?: HTMLDocument;
    window?: Window;
}

export const FrameContext: React.Context<FrameContextProps>;

export const FrameContextProvider: React.Provider<FrameContextProps>;

export const FrameContextConsumer: React.Consumer<FrameContextProps>;

export function useFrame(): FrameContextProps;
