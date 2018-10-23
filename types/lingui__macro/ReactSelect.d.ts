import { Component, ReactNode } from 'react';
import { RenderProps } from './Render';

export interface PluralPropsWithoutI18n extends RenderProps {
    id?: string;
    value: number | string;
    offset?: number | string;
    zero?: ReactNode;
    one?: ReactNode;
    two?: ReactNode;
    few?: ReactNode;
    many?: ReactNode;
    other: ReactNode;
    [exact: string]: ReactNode;
}

export interface SelectPropsWithoutI18n extends RenderProps {
    id?: string;
    value: string;
    other: ReactNode;
    [exact: string]: ReactNode;
}

export class Select extends Component<SelectPropsWithoutI18n> { }
export class Plural extends Component<PluralPropsWithoutI18n> { }
export class SelectOrdinal extends Component<PluralPropsWithoutI18n> { }
