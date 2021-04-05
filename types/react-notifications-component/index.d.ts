// Type definitions for react-notifications-component 3.1
// Project: https://github.com/teodosii/react-notifications-component
// Definitions by: Sarhad Salam <https://github.com/SarhadSalam>
//                 Andrés Ignacio Torres <https://github.com/aitorres>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export default class extends React.Component<ReactNotificationProps> {}

export interface ReactNotificationProps {
    isMobile?: boolean;
    breakpoint?: number;
    types?: string[];
    className?: string;
    id?: string;
}

export const store: {
    addNotification: (options: ReactNotificationOptions) => string;
    removeNotification: (id: string) => void;
};

export interface ReactNotificationOptions {
    id?: string;
    onRemoval?: (id: string, removedBy: any) => void;
    title?: string | React.ReactNode | React.FunctionComponent;
    message?: string | React.ReactNode | React.FunctionComponent;
    content?: React.ComponentClass | React.FunctionComponent | React.ReactNode;
    type?: 'success' | 'danger' | 'info' | 'default' | 'warning';
    container: 'top-full' | 'top-left' | 'top-right' | 'top-center' | 'center' | 'bottom-full' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    insert?: 'top' | 'bottom';
    dismiss?: DismissOptions;
    animationIn?: string[];
    animationOut?: string[];
    slidingEnter?: TransitionOptions;
    slidingExit?: TransitionOptions;
    touchRevert?: TransitionOptions;
    touchSlidingExit?: {
        fade?: TransitionOptions;
        swipe?: TransitionOptions;
    };
    width?: number;
}

export interface TransitionOptions {
    duration?: number;
    timingFunction?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end';
    delay?: number;
}

export interface DismissOptions {
    duration?: number;
    onScreen?: boolean;
    pauseOnHover?: boolean;
    waitForAnimation?: boolean;
    click?: boolean;
    touch?: boolean;
    showIcon?: boolean;
}
