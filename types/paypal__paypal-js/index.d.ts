// Type definitions for @paypal/paypal-js 1.0
// Project: https://github.com/paypal/paypal-js
// Definitions by: ReazerDev <https://github.com/ReazerDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ScriptOptions {
    'client-id': string;
    'merchant-id'?: string;
    currency?: string;
    intent?: string;
    commit?: boolean;
    vault?: boolean | string;
    components?: string;
    'disable-funding'?: string;
    /*
     * @deprecated
     */
    'disable-card'?: string;
    'integration-date'?: string;
    debug?: boolean | string;
    'buyer-country'?: string;
    locale?: string;
    'data-partner-attribution-id'?: string;
    'data-csp-nonce'?: string;
    'data-order-id'?: string;
    'data-page-type'?: string;
}

export function loadScript(options: ScriptOptions): Promise<any>;
export const version: string;
