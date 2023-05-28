// Type definitions for sendsay-api
// Project: https://github.com/sendsay-ru/sendsay-api-js#readme
// Definitions by: Dmitry_The_Fucker_LV https://github.com/T0R0NT0T0KY0
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export type BaseSendsayOptions = {
    /**
     * Default: https://api.sendsay.ru
     */
    apiUrl?: string;
};

export type SendsayOptionsApiKey = BaseSendsayOptions & {
    apiKey: string;
};

export type SendsayOptionsAuth = BaseSendsayOptions & {
    auth: {
        login: string;
        sublogin?: string;
        password: string;
    };
};
