// Type definitions for paystack 2.0
// Project: https://github.com/kehers/paystack
// Definitions by: Oladiran Segun Solomon <https://github.com/sheghun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */
export = Paystack;

declare function Paystack(secret_key: string): Paystack.Object;

declare namespace Paystack {
    interface Object {
        customer: {
            create: (params: {first_name: string; last_name: string; email: string; phone: string; metadata?: any}) => Promise<Response>;

            get: (id: number | string) => Promise<Response>;

            list: () => Promise<Response & {data?: any[]; meta?: any}>;

            update: (
                id: number | string,
                params: {first_name: string; last_name: string; email: string; phone: string},
            ) => Promise<Response>;
        };

        misc: {
            list_banks: (params: {perPage: number; page: number}) => Promise<Response & {data: any[]}>;

            resolve_bin: (bin: string) => Promise<Response>;
        };

        page: {
            create: (params: {name: string; description?: string; amount: number; [key: string]: any}) => Promise<Response>;

            get: (id_or_slug: number | string) => Promise<Response>;

            list: () => Promise<Response>;

            update: (
                id_or_slug: number,
                params: {name?: string; description?: string; amount?: number; active?: boolean},
            ) => Promise<Response>;

            slug: (slug: string) => Promise<Response & {data: undefined}>;
        };

        plan: {
            create: (params: {name: string; amount: number; interval: string; [key: string]: any}) => Promise<Response>;

            get: (id: number | string) => Promise<Response>;

            update: (id: number | string, params: any) => Promise<Response>;

            list: () => Promise<Response>;
        };

        subscription: {
            create: (params: {customer: string; plan: string; authorization: string; start_date?: Date}) => Promise<Response>;

            disable: (params: {code: string; token: string}) => Promise<Response & {data: undefined}>;

            enable: (params: {code: string; token: string}) => Promise<Response & {data: undefined}>;

            get: (id_or_subscription_code: string) => Promise<Response>;

            list: () => Promise<Response & {data: any[]; meta: any}>;
        };

        subaccount: {
            create: (params: {
                business_name: string;
                settlement_bank: string;
                account_number: string;
                percentage_charge: number;
            }) => Promise<Response>;

            get: (id_or_slug: number | string) => Promise<Response>;

            list: (param?: any) => Promise<Response>;

            update: (id_or_slug: number | string, params: any) => Promise<Response>;
        };

        transaction: {
            charge: (params: {reference: string; authorization_code: string; email: string; amount: number}) => Promise<Response>;

            get: (id: number | string) => Promise<Response>;

            initialize: (params: {amount: number; reference: string; name: string; email: string, [key: string]: any}) => Promise<Response>;

            list: () => Promise<Response & {data?: any[]; meta?: any}>;

            totals: () => Promise<Response>;

            verify: (transReference: string) => Promise<Response>;
        };
    }

    // Transactions initialization success object
    interface Response {
        status: boolean;
        message: string;
        data?: any;
        [others: string]: any;
    }
}
