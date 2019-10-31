// Type definitions for facebook-locales 1.0
// Project: https://github.com/wix/facebook-locales
// Definitions by: Jarek Radosz <https://github.com/CvX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Maps locales to Facebook locales.
 *
 * @example
 *
 * import { bestFacebookLocaleFor } from 'facebook-locales';
 *
 * bestFacebookLocaleFor('en_US'); //-> 'en_US'
 * bestFacebookLocaleFor('fr_FR'); //-> 'fr_FR'
 * bestFacebookLocaleFor('es_AR'); //-> 'es_LA'
 * bestFacebookLocaleFor('ar_EG'); //-> 'ar_AR'
 */
export function bestFacebookLocaleFor(locale: string): string;
