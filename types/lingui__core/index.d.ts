// Type definitions for @lingui/core 2.7
// Project: https://lingui.github.io/js-lingui/, https://github.com/lingui/js-lingui
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/lingui-typings
// TypeScript Version: 2.2

export {
    i18n,
    setupI18n,
    Catalog,
    Catalogs,
    MessageDescriptor,
    MessageOptions,
    LanguageData,
    I18n
} from './i18n';

export {
    date,
    number
} from './formats';

export function i18nMark(id: string): string;
