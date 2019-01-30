import { Component, ReactNode } from 'react';
import { I18n } from '@lingui/core';

// tslint:disable-next-line:interface-name
export interface I18nComponentProps {
    update?: boolean;
    withHash?: boolean;
}

export default class I18nComponent extends Component<I18nComponentProps, any, any, ({ i18n, i18nHash }: { i18n: I18n, i18nHash?: string }) => ReactNode> {}
