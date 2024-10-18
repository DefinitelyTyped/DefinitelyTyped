import * as React from "react";

export default class extends React.Component<ReactNotificationProps> {}

export interface ReactNotificationProps {
    isMobile?: boolean | undefined;
    breakpoint?: number | undefined;
    types?: string[] | undefined;
    className?: string | undefined;
    id?: string | undefined;
}

export const store: {
    addNotification: (options: ReactNotificationOptions) => string;
    removeNotification: (id: string) => void;
};

export interface ReactNotificationOptions {
    id?: string | undefined;
    onRemoval?: ((id: string, removedBy: any) => void) | undefined;
    title?: string | React.ReactNode | React.FunctionComponent | undefined;
    message?: string | React.ReactNode | React.FunctionComponent | undefined;
    content?: React.ComponentClass | React.FunctionComponent | React.ReactNode | undefined;
    type?: "success" | "danger" | "info" | "default" | "warning" | undefined;
    container:
        | "top-full"
        | "top-left"
        | "top-right"
        | "top-center"
        | "center"
        | "bottom-full"
        | "bottom-left"
        | "bottom-right"
        | "bottom-center";
    insert?: "top" | "bottom" | undefined;
    dismiss?: DismissOptions | undefined;
    animationIn?: string[] | undefined;
    animationOut?: string[] | undefined;
    slidingEnter?: TransitionOptions | undefined;
    slidingExit?: TransitionOptions | undefined;
    touchRevert?: TransitionOptions | undefined;
    touchSlidingExit?: {
        fade?: TransitionOptions | undefined;
        swipe?: TransitionOptions | undefined;
    } | undefined;
    width?: number | undefined;
}

export interface TransitionOptions {
    duration?: number | undefined;
    timingFunction?: "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end" | undefined;
    delay?: number | undefined;
}

export interface DismissOptions {
    duration?: number | undefined;
    onScreen?: boolean | undefined;
    pauseOnHover?: boolean | undefined;
    waitForAnimation?: boolean | undefined;
    click?: boolean | undefined;
    touch?: boolean | undefined;
    showIcon?: boolean | undefined;
}
