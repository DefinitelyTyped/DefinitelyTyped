/**
 * Enumerado que relaciona as aplicações que podem ser informadas aos métodos
 * {@link module:@nginstack/engine/lib/security/SecurityPolicy#checkEnabledApplication} e
 * {@link module:@nginstack/engine/lib/security/SecurityPolicy#validateLogin}.
 * @enum {string}
 */

/**
 * Representa a IDE do aplicativo Engine.
 */
export const IDE = 'iIDEEnabled';

/**
 * Representa o aplicativo iWeb, antigo sistema de gestão empresarial que foi
 * substituído pelo Framework HTML.
 */
export const iWeb = 'iiWebEnabled';

/**
 * Representa o framework HTML.
 * @type {string}
 */
export const FrameworkHTML = 'iFrameworkHTMLEnabled';
