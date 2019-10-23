import { ComponentClass, StatelessComponent } from 'react';
import { I18n } from '@lingui/core';

export type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

export interface withI18nOptions {
    update?: boolean;
    withRef?: boolean;
    withHash?: boolean;
}

export interface withI18nProps {
    i18n: I18n;
}

export default function withI18n(options?: withI18nOptions):
    <P>(WrappedComponent: ComponentConstructor<P>) => ComponentClass<Pick<P, Exclude<keyof P, keyof withI18nProps>>>;
