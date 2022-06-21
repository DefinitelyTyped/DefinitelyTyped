// Type definitions for django-bananas 4.0
// Project: https://github.com/5monkeys/django-bananas.js
// Definitions by: Elias Sjögreen <https://github.com/eliassjogreen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as React from 'react';
import { Theme } from './themes';

interface AppProps {
    api: ApiSetting;
    pages: (route: string) => any;
    prefix?: string;
    logLevel?: 'INFO' | 'DEBUG' | 'WARN' | 'ERROR' | 'OFF';

    layout?: 'horizontal' | 'vertical';
    permanent?: boolean;
    collapsed?: boolean;
    dense?: boolean;

    title?: string;
    branding?: string;
    version?: string;
    logo?: React.ReactNode | string | boolean;
    nav?: string[] | Record<string, NavItem | NavAppItem>;

    theme?: Theme;
    pageTheme?: Theme;
    loginForm?: (...args: any) => any;
    editableSettings?: boolean;
    customizeContext?: (context: any) => any;
    customizeUser?: (user: UserInterface) => UserInterface;
    container?: symbol | ((...args: any) => any) | React.ReactNode;
}

export class App extends React.Component<AppProps> {}

export interface UserInterface {
    email: string;
    full_name: string;
    groups: string[];
    id: number;
    is_superuser: boolean;
    permissions: string[];
    username?: string;
}

interface AdminInterface {
    admin: AdminInterface;
    router?: RouterInterface;
    api: any;
    user?: UserInterface;
}

export function useAdmin(context: AdminContext): AdminInterface;
export type AdminContext = React.Context<AdminInterface>;
export const AdminContext: React.Context<AdminInterface>;

interface ContainerProps {
    className?: string;
}
export class Container extends React.Component<ContainerProps> {}

interface ContentProps {
    disablePadding?: boolean;
    contained?: boolean;
    className?: string;
}
export class Content extends React.Component<ContentProps> {}

interface LinkProps {
    children: string | React.ReactNode;
    route?: string;
    params?: Record<string, string | number>;
    path?: string;
    query?: string | Record<string, string | number>;
    hash?: string;
    href?: string;
    patch?: boolean;
    passHref?: boolean;
}
export class Link extends React.Component<LinkProps> {}

export interface PageData<T> {
    obj: T;
    body: T;
    headers: Record<string, string>;
    status: number;
    statusText: string;
    ok: boolean;
    url: string;
    text: string;
}

export function usePage<T>(context: PageContext<T>): PageContext<T>;
type PageContext<T> = React.Context<PageInterface<T>>;

interface LoginFormProps {
    logger: any;
}
export class LoginForm extends React.Component<LoginFormProps> {}

interface TitleBarProps {
    overrides?: any;
    children?: React.ReactNode[] | React.ReactNode;
    color?: 'primary' | 'secondary' | 'paper';
    title?: string;
    back?: boolean | string;
    dense?: boolean;
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}
export const TitleBar: React.FC<TitleBarProps>;

interface ToolBarProps {
    className?: string;
}
export class ToolBar extends React.Component<ToolBarProps> {}

interface ToolsProps {
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
}
export class Tools extends React.Component<ToolsProps> {}

export function t(s: string, params: any): string;

interface TranslateProps {
    children: string;
    params: any;
}
export const Translate: React.FC<TranslateProps>;

export interface RouteData {
    hash?: string;
    id?: string;
    params?: Record<string, string | number>;
    path?: string;
    query?: Record<string, string>;
}

export interface PageInterfaceBase {
    title: string;
    route: RouteData;
    referer?: string;
}

export interface ListPageInterface<T> extends PageInterfaceBase {
    data: PageData<T[]>;
}

export interface PageInterface<T> extends PageInterfaceBase {
    data: PageData<T>;
}

interface NavItem {
    title?: string;
    icon?: React.ReactNode;
}

interface NavAppItem {
    showSubheader?: boolean;
}

type ApiSetting =
    | string
    | {
          url: string;
          requestInterceptor?: (v: Request) => Request;
          responseInterceptor?: (v: Response) => Response;
      };

interface AlertProps {
    classes: Record<string, any>;
    open?: boolean;
    title?: string;
    message?: React.ReactNode | string;
    agree?: boolean | string;
    dismiss?: boolean | string;
    onAgree?: () => any;
    onDismiss?: () => any;
    onClose?: () => any;
    keepMounted?: boolean;
}

interface AdminInterface {
    alert(message: string | AlertProps): void;
    confirm(message: string | AlertProps): void;
    dismissModal(): void;
    dismissMessages(): void;
    error(message: string): void;
    warning(message: string): void;
    success(message: string): void;
    info(message: string): void;
    loading(on: boolean): number;
    progress(on: boolean): number;
    login(username: string, password: string): Promise<UserInterface>;
    logout(): void;
    setTitle(title: string): void;
    settings(): any;
}

interface RouterInterface {
    route(to: string | RouteData, extra?: { rewrite?: boolean; patch?: boolean }): { location: any; action: string };
    reroute(to: string | RouteData): { location: any; action: string };
}

export interface ApiResponse<T = Record<string, never | never[]>> {
    statusText: string;
    status: number;
    obj: T;
}

declare const Bananas: {
    App: typeof App;
};

export default Bananas;
