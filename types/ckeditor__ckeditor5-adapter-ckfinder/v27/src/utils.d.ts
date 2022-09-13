/**
 * Returns the CSRF token value. The value is a hash stored in `document.cookie`
 * under the `ckCsrfToken` key. The CSRF token can be used to secure the communication
 * between the web browser and the CKFinder server.
 */
export function getCsrfToken(): string;
/**
 * Returns the value of the cookie with a given name or `null` if the cookie is not found.
 */
export function getCookie(name: string): string | null;
/**
 * Sets the value of the cookie with a given name.
 */
export function setCookie(name: string, value: string): void;
