import * as React from "react";

export interface LoginButtonProps {
    popup: string;
    className?: string | undefined;
}
export class LoginButton extends React.Component<LoginButtonProps> {}
export class LogoutButton extends React.Component<{ className?: string | undefined }> {}
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

export interface LDflexValue {
    toString: () => string;
}
export function useLDflexValue(expression: string): LDflexValue | undefined;
export function useLDflexList(expression: string): LDflexValue[];
export function useLDflex(expression: string, listMode: true): [LDflexValue[], boolean, Error | undefined];
export function useLDflex(expression: string, listMode?: false): [LDflexValue, boolean, Error | undefined];

export class Value extends React.Component<{ src: string }> {}
export interface ListProps {
    src: string;
    offset?: number | undefined;
    limit?: number | undefined;
    // dtslint does not appear to understand that `T` is used in the type guard.
    // See https://github.com/Microsoft/dtslint/issues/228
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    filter?: (<T extends LDflexValue>(item: LDflexValue, index: number, array: LDflexValue[]) => item is T) | undefined;
    container?: ((items: JSX.Element) => JSX.Element) | undefined;
    children?: ((listItem: LDflexValue, index: number) => JSX.Element) | undefined;
}
export class List extends React.Component<ListProps> {}

export class Image
    extends React.Component<{ src: string; defaultSrc?: string | undefined } & React.HTMLAttributes<HTMLImageElement>>
{}
export class Label extends React.Component<{ src: string }> {}
export class Link extends React.Component<{ href: string } & React.HTMLAttributes<HTMLAnchorElement>> {}
export class LiveUpdate extends React.Component<{ subscribe?: "*" | string | string[] | undefined }> {}
export class Name extends React.Component<{ src: string }> {}

export interface ActivityButtonProps {
    object?: string | undefined;
    activateText?: string | undefined;
    deactivateText?: string | undefined;
    shortName?: string | undefined;
    activateLabel?: string | [string, string, React.ReactNode] | undefined;
    deactivateLabel?: string | [string, string, React.ReactNode] | undefined;
}
export class ActivityButton extends React.Component<ActivityButtonProps & React.HTMLAttributes<HTMLButtonElement>> {}
export class Like extends ActivityButton {}
export class LikeButton extends Like {}
export class Dislike extends ActivityButton {}
export class DislikeButton extends Dislike {}
export class Follow extends ActivityButton {}
export class FollowButton extends Follow {}
