import { Component, ReactElement, ReactNode } from 'react';
import { RenderProps } from './Render';

export interface TransPropsWithoutI18n extends RenderProps {
    id?: string;
    defaults?: string;
    values?: object;
    formats?: object;
    components?: ReadonlyArray<ReactElement>;
    children?: ReactNode;
}

export default class Trans extends Component<TransPropsWithoutI18n> { }
