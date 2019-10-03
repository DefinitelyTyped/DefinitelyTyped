import * as React from 'react';

import { FluentBundle } from '@fluent/bundle';

import { default as ReactLocalization } from './localization';

export type MarkupParser = (str: string) => Node[];

export interface Context {
    l10n: ReactLocalization;
    parseMarkup: MarkupParser;
}

export interface LocalizationProviderProps {
    bundles: Iterable<FluentBundle>;
    parseMarkup?: MarkupParser;
}

export default class LocalizationProvider extends React.Component<LocalizationProviderProps> {}
