// Type definitions for solid__react 1.6
// Project: https://github.com/solid/react-components
// Definitions by: Vincent Tunru <https://github.com/Vinnl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface LoginButtonProps {
    popup: string;
}
export class LoginButton extends React.Component<LoginButtonProps> {}
export class LogoutButton extends React.Component {}
export interface AuthButtonProps extends LoginButtonProps {
    login: string;
    logout: string;
}
export class AuthButton extends React.Component<AuthButtonProps> {}

export class LoggedIn extends React.Component {}
export class LoggedOut extends React.Component {}

export function useWebId(): string | null | undefined;
export function useLoggedIn(): boolean | undefined;
export function useLoggedOut(): boolean | undefined;

export interface LDflexValue { toString: () => string; }
export function useLDflexValue(expression: string): LDflexValue | undefined;
export function useLDflexList(expression: string): LDflexValue[];
export function useLDflex(expression: string, listMode: true): [LDflexValue[], boolean, Error | undefined];
export function useLDflex(expression: string, listMode?: false): [LDflexValue, boolean, Error | undefined];

export class Value extends React.Component<{src: string}> {}
export interface ListProps {
    src: string;
    children?: (listItem: LDflexValue) => JSX.Element;
}
export class List extends React.Component<ListProps> {}

export class Image extends React.Component<{ src: string; defaultSrc?: string; }> {}
export class Label extends React.Component<{ src: string; }> {}
export class Link extends React.Component<{ href: string; }> {}
export class LiveUpdate extends React.Component<{ subscribe?: '*' | string | string[]; }> {}
export class Name extends React.Component<{ src: string; }> {}

export interface ActivityButtonProps {
    object?: string;
    activateText?: string;
    deactivateText?: string;
    shortName?: string;
    activateLabel?: string | [string, string, React.ReactNode];
    deactivateLabel?: string | [string, string, React.ReactNode];
}
export class ActivityButton extends React.Component<ActivityButtonProps> {}
export class Like extends ActivityButton {}
export class LikeButton extends Like {}
export class Dislike extends ActivityButton {}
export class DislikeButton extends Dislike {}
export class Follow extends ActivityButton {}
export class FollowButton extends Follow {}
