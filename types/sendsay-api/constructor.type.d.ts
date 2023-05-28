export interface BaseSendsayOptions {
    /**
     * Default: https://api.sendsay.ru
     */
    apiUrl?: string;
}

export interface SendsayOptionsApiKey extends BaseSendsayOptions {
    apiKey: string;
}

export interface SendsayOptionsAuth extends BaseSendsayOptions {
    auth: {
        login: string;
        sublogin?: string;
        password: string;
    };
}
