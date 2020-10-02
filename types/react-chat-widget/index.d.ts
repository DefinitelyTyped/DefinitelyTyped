// Type definitions for react-chat-widget 2.1
// Project: https://github.com/Wolox/react-chat-widget#readme
// Definitions by: Steve Mao <https://github.com/stevemao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType, Component } from 'react';

export class Widget extends Component<{
    title?: string;
    titleAvatar?: string;
    subtitle?: string;
    handleNewUserMessage: (userInput: string) => void;
    handleQuickButtonClicked?: (value: string) => void;
    senderPlaceHolder?: string;
    profileAvatar?: string;
    showCloseButton?: boolean;
    fullScreenMode?: boolean;
    badge?: number;
    autofocus?: boolean;
    customLauncher?: ComponentType<() => void>;
}> {}

export function addResponseMessage(input: string): void;
export function toggleMsgLoader(): void;
export function setQuickButtons(
    input: Array<{
        label: string;
        value: string;
    }>,
): void;
export function addUserMessage(input: string): void;
export function toggleWidget(): void;
export function addLinkSnippet(link: string): void;
export function renderCustomComponent<P>(component: ComponentType<P>, props: P, showAvatar: boolean): void;
export function toggleInputDisabled(): void;
export function dropMessages(): void;
export function isWidgetOpened(): boolean;
