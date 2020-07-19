// Type definitions for country-flag-icons 1.2
// Project: https://gitlab.com/catamphetamine/country-flag-icons#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import hasFlag from './commonjs/hasFlag';

declare const countryFlagIcons: {
    hasFlag: typeof hasFlag;
    countries: string[];
};

export = countryFlagIcons;
