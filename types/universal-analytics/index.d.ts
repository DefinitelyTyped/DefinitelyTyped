declare namespace ua {
    type Callback = (error: Error | null, count: number) => void;

    interface VisitorOptions {
        hostname?: string | undefined;
        path?: string | undefined;
        https?: boolean | undefined;
        enableBatching?: boolean | undefined;
        batchSize?: number | undefined;
        /**
         * Tracking ID
         */
        tid?: string | undefined;
        /**
         * Client ID
         */
        cid?: string | undefined;
        /**
         * User ID
         */
        uid?: string | undefined;
        debug?: boolean | undefined;
        strictCidFormat?: boolean | undefined;
        requestOptions?: { [key: string]: any } | undefined;
        headers?: { [key: string]: string } | undefined;
    }

    interface MiddlewareOptions extends VisitorOptions {
        cookieName?: string | undefined;
    }

    interface PageviewParams {
        /**
         * Document Path
         *
         * The path portion of the page URL. Should begin with '/'.
         *
         * Max length: 2048 Bytes
         */
        dp?: string | undefined;
        /**
         * Document Host Name
         *
         * Specifies the hostname from which content was hosted.
         *
         * Max length: 100 Bytes
         */
        dh?: string | undefined;
        /**
         * Document Title
         *
         * The title of the page / document.
         *
         * Max length: 1500 Bytes
         */
        dt?: string | undefined;
        /**
         * Document location URL
         *
         * Use this parameter to send the full URL (document location) of the page on which content resides.
         *
         * Max length: 2048 Bytes
         */
        dl?: string | undefined;
        [key: string]: any;
    }

    interface ScreenviewParams {
        /**
         * Screen Name
         *
         * This parameter is optional on web properties, and required on mobile properties for screenview hits,
         * where it is used for the 'Screen Name' of the screenview hit.
         *
         * Max length: 2048 Bytes
         *
         * Example value: `High Scores`
         */
        cd?: string | undefined;
        /**
         * Application Name
         *
         * Specifies the application name. This field is required for any hit that has app related data
         * (i.e., app version, app ID, or app installer ID). For hits sent to web properties, this field is optional.
         *
         * Max length: 100 Bytes
         *
         * Example value: `My App`
         */
        an?: string | undefined;
        /**
         * Application Version
         *
         * Specifies the application version.
         *
         * Max length: 100 Bytes
         *
         * Example value: `1.2`
         */
        av?: string | undefined;
        /**
         * Application ID
         *
         * Application identifier.
         *
         * Max length: 150 Bytes
         *
         * Example value: `com.company.app`
         */
        aid?: string | undefined;
        /**
         * Application Installer ID
         *
         * Application installer identifier.
         *
         * Max length: 150 Bytes
         *
         * Example value: `com.platform.vending`
         */
        aiid?: string | undefined;
        [key: string]: any;
    }

    interface EventParams {
        /**
         * Event Category
         *
         * **Required for event hit type.**
         *
         * Specifies the event category. Must not be empty.
         *
         * Max length: 150 Bytes
         *
         * Example value: `Category`
         */
        ec?: string | undefined;
        /**
         * Event Action
         *
         * **Required for event hit type.**
         *
         * Specifies the event action. Must not be empty.
         *
         * Max length: 500 Bytes
         *
         * Example value: `Action`
         */
        ea?: string | undefined;
        /**
         * Event Label
         *
         * Specifies the event label.
         *
         * Max length: 500 Bytes
         *
         * Example value: `Label`
         */
        el?: string | undefined;
        /**
         * Event Value
         *
         * Specifies the event value. Values must be non-negative.
         *
         * Example value: `55`
         */
        ev?: string | number | undefined;
        p?: string | undefined;
        dp?: string | undefined;
        [key: string]: any;
    }

    interface TransactionParams {
        /**
         * Transaction ID
         *
         * **Required for transaction hit type.**
         *
         * A unique identifier for the transaction. This value should be the same for both the Transaction
         * hit and Items hits associated to the particular transaction.
         *
         * Max length: 500 Bytes
         *
         * Example value: `OD564`
         */
        ti?: string | undefined;
        /**
         * Transaction Revenue
         *
         * Specifies the total revenue associated with the transaction. This value should include any
         * shipping or tax costs.
         *
         * Example value: `15.47`
         */
        tr?: string | number | undefined;
        /**
         * Transaction Shipping
         *
         * Specifies the total shipping cost of the transaction.
         *
         * Example value: `3.50`
         */
        ts?: string | number | undefined;
        /**
         * Transaction Tax
         *
         * Specifies the total tax of the transaction.
         *
         * Example value: `11.20`
         */
        tt?: string | number | undefined;
        /**
         * Transaction Affiliation
         *
         * Specifies the affiliation or store name.
         *
         * Max length: 500 Bytes
         *
         * Example value: `Member`
         */
        ta?: string | undefined;
        p?: string | undefined;
        [key: string]: any;
    }

    interface ItemParams {
        /**
         * Item Price
         *
         * Specifies the price for a single item / unit.
         *
         * Example value: `3.50`
         */
        ip?: string | number | undefined;
        /**
         * Item Quantity
         *
         * Specifies the number of items purchased.
         *
         * Example value: `4`
         */
        iq?: string | number | undefined;
        /**
         * Item Code
         *
         * Specifies the SKU or item code.
         *
         * Max length: 500 Bytes
         *
         * Example value: `SKU47`
         */
        ic?: string | undefined;
        /**
         * Item Name
         *
         * **Required for item hit type.**
         *
         * Specifies the item name.
         *
         * Max length: 500 Bytes
         *
         * Example value: `Shoe`
         */
        in?: string | undefined;
        /**
         * Item Category
         *
         * Specifies the category that the item belongs to.
         *
         * Max length: 500 Bytes
         *
         * Example value: `Blue`
         */
        iv?: string | undefined;
        p?: string | undefined;
        /**
         * Transaction ID
         *
         * **Required for item hit type.**
         *
         * A unique identifier for the transaction. This value should be the same for both the Transaction
         * hit and Items hits associated to the particular transaction.
         *
         * Max length: 500 Bytes
         *
         * Example value: `OD564`
         */
        ti?: string | undefined;
        [key: string]: any;
    }

    interface ExceptionParams {
        /**
         * Exception Description
         *
         * Specifies the description of an exception.
         *
         * Max length: 150 Bytes
         *
         * Example value: `DatabaseError`
         */
        exd?: string | undefined;
        /**
         * Is Exception Fatal?
         *
         * Specifies whether the exception was fatal.
         */
        exf?: boolean | undefined;
        [key: string]: any;
    }

    interface TimingParams {
        /**
         * User timing category
         *
         * **Required for timing hit type.**
         *
         * Specifies the user timing category.
         *
         * Max length: 150 Bytes
         *
         * Example value: `category`
         */
        utc?: string | undefined;
        /**
         * User timing variable name
         *
         * **Required for timing hit type.**
         *
         * Specifies the user timing variable.
         *
         * Max length: 500 Bytes
         *
         * Example value: `lookup`
         */
        utv?: string | undefined;
        /**
         * User timing time
         *
         * **Required for timing hit type.**
         *
         * Specifies the user timing value. The value is in milliseconds.
         *
         * Example value: `123`
         */
        utt?: string | number | undefined;
        /**
         * User timing label
         *
         * Specifies the user timing label.
         *
         * Max length: 500 Bytes
         *
         * Example value: `label`
         */
        utl?: string | undefined;
        [key: string]: any;
    }

    interface Session {
        /**
         * Client ID
         */
        cid?: string | undefined;
    }

    class Visitor {
        constructor(accountID: VisitorOptions | string);
        constructor(
            accountID: string,
            uuid: VisitorOptions | string,
            context?: { [key: string]: any },
            persistentParams?: { [key: string]: any },
        );

        debug(debug?: boolean): Visitor;

        reset(): Visitor;

        set(key: string | number, value: any): void;

        pageview(path: PageviewParams | string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, title: string, callback?: Callback): Visitor;
        pageview(path: string, hostname: string, title: string, params: PageviewParams, callback?: Callback): Visitor;

        pv(path: PageviewParams | string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, title: string, callback?: Callback): Visitor;
        pv(path: string, hostname: string, title: string, params: PageviewParams, callback?: Callback): Visitor;

        screenview(params: ScreenviewParams, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, callback?: Callback): Visitor;
        screenview(screenName: string, appName: string, appVersion: string, callback?: Callback): Visitor;
        screenview(
            screenName: string,
            appName: string,
            appVersion: string,
            appId: string,
            callback?: Callback,
        ): Visitor;
        screenview(
            screenName: string,
            appName: string,
            appVersion: string,
            appId: string,
            appInstallerId: string,
            callback?: Callback,
        ): Visitor;
        screenview(
            screenName: string,
            appName: string,
            appVersion: string,
            appId: string,
            appInstallerId: string,
            params: ScreenviewParams,
            callback?: Callback,
        ): Visitor;

        event(params: EventParams, callback?: Callback): Visitor;
        event(category: string, action: string, callback?: Callback): Visitor;
        event(category: string, action: string, label: string, callback?: Callback): Visitor;
        event(category: string, action: string, label: string, value: string | number, callback?: Callback): Visitor;
        event(
            category: string,
            action: string,
            label: string,
            value: string | number,
            params: EventParams,
            callback?: Callback,
        ): Visitor;

        e(params: EventParams, callback?: Callback): Visitor;
        e(category: string, action: string, callback?: Callback): Visitor;
        e(category: string, action: string, label: string, callback?: Callback): Visitor;
        e(category: string, action: string, label: string, value: string | number, callback?: Callback): Visitor;
        e(
            category: string,
            action: string,
            label: string,
            value: string | number,
            params: EventParams,
            callback?: Callback,
        ): Visitor;

        transaction(id: TransactionParams | string, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, callback?: Callback): Visitor;
        transaction(id: string, revenue: string | number, shipping: string | number, callback?: Callback): Visitor;
        transaction(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            callback?: Callback,
        ): Visitor;
        transaction(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            affiliation: string,
            callback?: Callback,
        ): Visitor;
        transaction(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            affiliation: string,
            params: TransactionParams,
            callback?: Callback,
        ): Visitor;

        t(id: TransactionParams | string, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, callback?: Callback): Visitor;
        t(id: string, revenue: string | number, shipping: string | number, callback?: Callback): Visitor;
        t(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            callback?: Callback,
        ): Visitor;
        t(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            affiliation: string,
            callback?: Callback,
        ): Visitor;
        t(
            id: string,
            revenue: string | number,
            shipping: string | number,
            tax: string | number,
            affiliation: string,
            params: TransactionParams,
            callback?: Callback,
        ): Visitor;

        item(price: ItemParams | string | number, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, callback?: Callback): Visitor;
        item(price: string | number, quantity: string | number, sku: string, callback?: Callback): Visitor;
        item(
            price: string | number,
            quantity: string | number,
            sku: string,
            name: string,
            callback?: Callback,
        ): Visitor;
        item(
            price: string | number,
            quantity: string | number,
            sku: string,
            name: string,
            variation: string,
            callback?: Callback,
        ): Visitor;
        item(
            price: string | number,
            quantity: string | number,
            sku: string,
            name: string,
            variation: string,
            params: ItemParams,
            callback?: Callback,
        ): Visitor;

        i(price: ItemParams | string | number, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, callback?: Callback): Visitor;
        i(price: string | number, quantity: string | number, sku: string, name: string, callback?: Callback): Visitor;
        i(
            price: string | number,
            quantity: string | number,
            sku: string,
            name: string,
            variation: string,
            callback?: Callback,
        ): Visitor;
        i(
            price: string | number,
            quantity: string | number,
            sku: string,
            name: string,
            variation: string,
            params: ItemParams,
            callback?: Callback,
        ): Visitor;

        exception(description: ExceptionParams | string, callback?: Callback): Visitor;
        exception(description: string, fatal: boolean, callback?: Callback): Visitor;
        exception(description: string, fatal: boolean, params: ExceptionParams, callback?: Callback): Visitor;

        timing(category: TimingParams | string, callback?: Callback): Visitor;
        timing(category: string, variable: string, callback?: Callback): Visitor;
        timing(category: string, variable: string, time: string | number, callback?: Callback): Visitor;
        timing(category: string, variable: string, time: string | number, label: string, callback?: Callback): Visitor;
        timing(
            category: string,
            variable: string,
            time: string | number,
            label: string,
            params: TimingParams,
            callback?: Callback,
        ): Visitor;

        send(fn?: (error: any, response: any, body: any) => void): void;
    }

    function createFromSession(session?: Session): Visitor;

    function middleware(
        tid: string,
        options?: MiddlewareOptions,
    ): (req: any, res: any, next: (err: any) => void) => void;
}

declare function ua(accountID: ua.VisitorOptions | string): ua.Visitor;
declare function ua(accountID: string, uuid: ua.VisitorOptions | string): ua.Visitor;
declare function ua(accountID: string, uuid: string, options: ua.VisitorOptions): ua.Visitor;
export = ua;
