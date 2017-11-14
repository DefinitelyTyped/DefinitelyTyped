// Type definitions for admin-on-rest 1.3
// Project: https://github.com/marmelab/admin-on-rest#readme
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.3

import * as React from 'react';
import * as Polyglot from 'node-polyglot';

export interface Translate {
    (phrase: string, smartCount?: number): string;
    (phrase: string, interpolationOptions: Polyglot.InterpolationOptions): string;
}

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Diff<T extends string, U extends string> = ({[P in T]: P} &
    {[P in U]: never} & {[x: string]: never})[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export type TranslateHoc = <P>(
    BaseComponent: React.ComponentType<P>
) => React.ComponentClass<Omit<P & {translate: Translate}, 'translate'>>;

export type NotificationType = 'info' | 'warning';
export interface NotificationAction {
    type: 'AOR/SHOW_NOTIFICATION';
    payload: {text: string};
}
export type ShowNotification = (
    text: string,
    type?: NotificationType
) => NotificationAction;

export interface UserLogoutAction {
    type: 'AOR/USER_LOGOUT';
    meta: {auth: true};
}
export type UserLogout = () => UserLogoutAction;

export interface UserLoginAction<T> {
    type: 'AOR/USER_LOGIN';
    payload: T;
    meta: {auth: true; pathname: string};
}
export type UserLogin = <T>(payload: T, pathname: string) => UserLoginAction<T>;
export interface QueryReducerSetSortAction {
    type: 'SET_SORT';
    payload: object;
}
export interface QueryReducerSetPageAction {
    type: 'SET_PAGE';
    payload: number;
}
export interface QueryReducerSetFilterAction {
    type: 'SET_FILTER';
    payload: object;
}
export type QueryReducerAction =
    | QueryReducerSetSortAction
    | QueryReducerSetPageAction
    | QueryReducerSetFilterAction;
export type QueryReducer = (
    previousState: any,
    action: QueryReducerAction
) => any;

export type CreateAppReducer = (
    customReducers: {[k: string]: (state: any, action: any) => any},
    locale: string
) => any;

export interface Record {
    id: any;
}

export interface RestClient {
    (
        type: 'GET_LIST',
        resource: string,
        params: {
            pagination: {page: number; perPage: number};
            sort: {field: string; order: string};
            filter: object;
        }
    ): Promise<{
        data: Record[];
        total: number;
    }>;
    (type: 'GET_ONE', resource: string, params: {id: any}): Promise<{
        data: Record;
    }>;
    (type: 'CREATE', resource: string, params: {data: object}): Promise<{
        data: Record;
    }>;
    (
        type: 'UPDATE',
        resource: string,
        params: {id: any; data: object; previousData: object}
    ): Promise<{data: Record}>;
    (
        type: 'DELETE',
        resource: string,
        params: {id: any; previousData: object}
    ): Promise<{data: Record}>;
    (type: 'GET_MANY', resource: string, params: {ids: any[]}): Promise<{
        data: Record[];
    }>;
    (
        type: 'GET_MANY_REFERENCE',
        resource: string,
        params: {
            target: string;
            id: any;
            pagination: {page: number; perPage: number};
            sort: {field: string; order: string};
            filter: object;
        }
    ): Promise<{
        data: Record[];
        total: number;
    }>;
}

export type AUTH_LOGIN = 'AUTH_LOGIN';
export type AUTH_LOGOUT = 'AUTH_LOGOUT';
export type AUTH_CHECK = 'AUTH_CHECK';
export type AUTH_ERROR = 'AUTH_ERROR';

export interface AuthClient {
    (type: AUTH_LOGIN, params: {username: string; password: string}): Promise<
        any
    >;
    (type: AUTH_LOGOUT, params: undefined): Promise<any>;
    (type: AUTH_CHECK, params: string): Promise<any>;
    (type: AUTH_ERROR, params: {status: number}): Promise<any>;
}

export type CrudSaga = (restClient: RestClient, authClient: AuthClient) => any;

export const translate: TranslateHoc;
export const showNotification: ShowNotification;
export const userLogout: UserLogout;
export const userLogin: UserLogin;
export const queryReducer: QueryReducer;
export const createAppReducer: CreateAppReducer;
export const crudSaga: CrudSaga;

export const AUTH_LOGIN: AUTH_LOGIN;
export const AUTH_LOGOUT: AUTH_LOGOUT;
export const AUTH_CHECK: AUTH_CHECK;
export const AUTH_ERROR: AUTH_ERROR;
export const USER_LOGOUT: string;

export class Notification extends React.Component {}

export interface ShowProps {
    actions?: JSX.Element;
}

export class Show extends React.Component<ShowProps> {}

export interface TextFieldProps {
    addLabel?: boolean;
    elStyle?: object;
    label?: string;
    source?: string;
    record?: object;
    sortable?: boolean;
}

export class TextField extends React.Component<TextFieldProps> {}

export interface NumberFieldProps {
    addLabel?: boolean;
    elStyle?: object;
    label?: string;
    locales?: string | string[];
    options?: object;
    source?: string;
    record?: object;
}

export class NumberField extends React.Component<NumberFieldProps> {}

export interface BooleanFieldProps {
    addLabel?: boolean;
    elStyle?: object;
    label?: string;
    source?: string;
    record?: object;
}

export class BooleanField extends React.Component<BooleanFieldProps> {}

export interface LabeledProps {
    basePath?: string;
    disabled?: boolean;
    input?: object;
    isRequired?: boolean;
    label?: string;
    meta?: object;
    onChange?: (...vars: any[]) => void;
    record?: object;
    resource?: string;
    source?: string;
    labelStyle?: object;
}

export class Labeled extends React.Component<LabeledProps> {}

export interface EditButtonProps {
    basePath?: string;
    label?: string;
    record?: object;
}

export class EditButton extends React.Component<EditButtonProps> {}

export interface ShowButtonProps {
    basePath?: string;
    label?: string;
    record?: object;
}

export class ShowButton extends React.Component<ShowButtonProps> {}

export interface ListButtonProps {
    basePath?: string;
    label?: string;
    record?: object;
}

export class ListButton extends React.Component<ListButtonProps> {}

export interface DeleteButtonProps {
    basePath?: string;
    label?: string;
    record?: object;
}

export class DeleteButton extends React.Component<DeleteButtonProps> {}

export interface RefreshButtonProps {
    label?: string;
}

export class RefreshButton extends React.Component<RefreshButtonProps> {}

export interface SelectInputProps {
    addField?: boolean;
    allowEmpty?: boolean;
    choices?: object[];
    elStyle?: object;
    input?: object;
    isRequired?: boolean;
    label?: string;
    meta?: object;
    options?: object;
    optionText?: string | JSX.Element | ((...args: any[]) => any);
    optionValue?: string;
    resource?: string;
    source?: string;
    translateChoice?: boolean;
}

export class SelectInput extends React.Component<SelectInputProps> {}

export interface NumberInputProps {
    addField?: boolean;
    elStyle?: object;
    input?: object;
    isRequired?: boolean;
    label?: string;
    meta?: object;
    name?: string;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    options?: object;
    resource?: string;
    source?: string;
    step?: string | number;
    validate?: ((...args: any[]) => any) | Array<(...args: any[]) => any>;
}

export class NumberInput extends React.Component<NumberInputProps> {}

export interface TextInputProps {
    addField?: boolean;
    elStyle?: object;
    input?: object;
    isRequired?: boolean;
    label?: string;
    meta?: object;
    name?: string;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    options?: object;
    resource?: string;
    source?: string;
    type?: string;
}

export class TextInput extends React.Component<TextInputProps> {}

export interface ViewTitleProps {
    title: JSX.Element;
}

export class ViewTitle extends React.Component<ViewTitleProps> {}

export interface TitleProps {
    title?: string;
    defaultTitle?: string;
    record?: object;
}

export class Title extends React.Component<TitleProps> {}

export interface DatagridProps {
    basePath?: string;
    bodyOptions?: object;
    currentSort?: {
        sort: string;
        order: string;
    };
    data?: object;
    headerOptions?: object;
    ids?: any[];
    isLoading?: boolean;
    muiTheme?: object;
    options?: object;
    resource?: string;
    rowOptions?: object;
    rowStyle?: (...args: any[]) => any;
    setSort?: (...args: any[]) => any;
    styles?: object;
}

export class Datagrid extends React.Component<DatagridProps> {}

export interface ListProps {
    title?: any;
    filter?: object;
    filters?: JSX.Element;
    pagination?: JSX.Element;
    actions?: JSX.Element;
    perPage?: number;
    sort?: {
        field: string;
        order: string;
    };
}

export class List extends React.Component<ListProps> {}

export interface FilterProps {
    context?: 'form' | 'button';
    debounce?: number;
    displayedFilters?: object;
    filterValues?: object;
    resource?: string;
    showFilter?(filterName: string, defaultValue: any): void;
    hideFilter?(filterName: string): void;
    setFilters?(filters: object): object;
}

export class Filter extends React.Component<FilterProps> {}

export interface ResourceProps {
    name: string;
    list?: React.ComponentClass;
    create?: React.ComponentClass;
    edit?: React.ComponentClass;
    show?: React.ComponentClass;
    remove?: React.ComponentClass;
    icon?: React.ComponentClass;
    options?: object;
}
export class Resource extends React.Component<ResourceProps> {}

export class TranslationProvider extends React.Component<{messages: object}> {}

export interface LayoutProps {
    catchAll?: React.ComponentClass;
    customRoutes?: JSX.Element[];
    dashboard?: React.ComponentClass;
    isLoading?: boolean;
    logout?: JSX.Element;
    menu?: string | ((...args: any[]) => any);
    setSidebarVisibility?: (...args: any[]) => any;
    title?: string;
    theme?: object;
    width?: number;
}

export class Layout extends React.Component<LayoutProps> {}
