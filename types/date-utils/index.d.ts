// Type definitions for date-utils 1.2
// Project: https://jerrysievert.github.io/date-utils/
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type LanguageType = 'es' | 'fr' | 'pt-BR';

declare function language(lang: LanguageType): string;

export = language;
