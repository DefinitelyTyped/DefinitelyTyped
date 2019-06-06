// Type definitions for Google Analytics (Classic and Universal)
// Project: https://developers.google.com/analytics/devguides/collection/gajs/, https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference
// Definitions by: Ronnie Haakon Hegelund <http://ronniehegelund.blogspot.dk>, Pat Kujawa <http://patkujawa.com>, Tyler Murphy <https://github.com/tyler-murphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Tracker {
    _trackPageview(): void;
    _getName(): string;
    _getAccount(): string;
    _getVersion(): string;
    _getVisitorCustomVar(index: number): string;
    _setAccount(): string;
    _setCustomVar(index: number, name: string, value: string, opt_scope?: number): boolean;
    _setSampleRate(newRate: string): void;
    _setSessionCookieTimeout(cookieTimeoutMillis: number): void;
    _setSiteSpeedSampleRate(sampleRate: number): void;
    _setVisitorCookieTimeout(milliseconds: number): void;
    _trackPageLoadTime(): void;
}

interface GoogleAnalyticsCode {
    push(commandArray: Array<string|boolean|number>): void;
    push(func: Function): void;
}

interface GoogleAnalyticsTracker {
    _getTracker(account: string): Tracker;
    _createTracker(opt_account: string, opt_name?: string): Tracker;
    _getTrackerByName(opt_name?: string): Tracker;
    _anonymizeIp(): void;
}

interface GoogleAnalytics {
    type: string;
    src: string;
    async: boolean;
}

declare namespace UniversalAnalytics {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitType
    type HitType = 'pageview' | 'screenview' | 'event' | 'transaction' | 'item' | 'social' | 'exception' | 'timing';

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference

    interface FieldsObject {
        affiliation?: string;
        allowAnchor?: boolean;
        allowLinker?: boolean;
        alwaysSendReferrer?: boolean;
        anonymizeIp?: boolean;
        appId?: string;
        appInstallerId?: string;
        appName?: string;
        appVersion?: string;
        brand?: string;
        campaignId?: string;
        campaignContent?: string;
        campaignKeyword?: string;
        campaignMedium?: string;
        campaignName?: string;
        campaignSource?: string;
        category?: string;
        clientId?: string;
        contentGroup1?: string;
        contentGroup2?: string;
        contentGroup3?: string;
        contentGroup4?: string;
        contentGroup5?: string;
        contentGroup6?: string;
        contentGroup7?: string;
        contentGroup8?: string;
        contentGroup9?: string;
        contentGroup10?: string;
        cookieName?: string;
        cookieDomain?: string;
        cookieExpires?: number;
        cookiePath?: string;
        coupon?: string;
        creative?: string;
        currencyCode?: string;
        dataSource?: string;
        dimension1?: string;
        dimension2?: string;
        dimension3?: string;
        dimension4?: string;
        dimension5?: string;
        dimension6?: string;
        dimension7?: string;
        dimension8?: string;
        dimension9?: string;
        dimension10?: string;
        dimension11?: string;
        dimension12?: string;
        dimension13?: string;
        dimension14?: string;
        dimension15?: string;
        dimension16?: string;
        dimension17?: string;
        dimension18?: string;
        dimension19?: string;
        dimension20?: string;
        dimension21?: string;
        dimension22?: string;
        dimension23?: string;
        dimension24?: string;
        dimension25?: string;
        dimension26?: string;
        dimension27?: string;
        dimension28?: string;
        dimension29?: string;
        dimension30?: string;
        dimension31?: string;
        dimension32?: string;
        dimension33?: string;
        dimension34?: string;
        dimension35?: string;
        dimension36?: string;
        dimension37?: string;
        dimension38?: string;
        dimension39?: string;
        dimension40?: string;
        dimension41?: string;
        dimension42?: string;
        dimension43?: string;
        dimension44?: string;
        dimension45?: string;
        dimension46?: string;
        dimension47?: string;
        dimension48?: string;
        dimension49?: string;
        dimension50?: string;
        dimension51?: string;
        dimension52?: string;
        dimension53?: string;
        dimension54?: string;
        dimension55?: string;
        dimension56?: string;
        dimension57?: string;
        dimension58?: string;
        dimension59?: string;
        dimension60?: string;
        dimension61?: string;
        dimension62?: string;
        dimension63?: string;
        dimension64?: string;
        dimension65?: string;
        dimension66?: string;
        dimension67?: string;
        dimension68?: string;
        dimension69?: string;
        dimension70?: string;
        dimension71?: string;
        dimension72?: string;
        dimension73?: string;
        dimension74?: string;
        dimension75?: string;
        dimension76?: string;
        dimension77?: string;
        dimension78?: string;
        dimension79?: string;
        dimension80?: string;
        dimension81?: string;
        dimension82?: string;
        dimension83?: string;
        dimension84?: string;
        dimension85?: string;
        dimension86?: string;
        dimension87?: string;
        dimension88?: string;
        dimension89?: string;
        dimension90?: string;
        dimension91?: string;
        dimension92?: string;
        dimension93?: string;
        dimension94?: string;
        dimension95?: string;
        dimension96?: string;
        dimension97?: string;
        dimension98?: string;
        dimension99?: string;
        dimension100?: string;
        dimension101?: string;
        dimension102?: string;
        dimension103?: string;
        dimension104?: string;
        dimension105?: string;
        dimension106?: string;
        dimension107?: string;
        dimension108?: string;
        dimension109?: string;
        dimension110?: string;
        dimension111?: string;
        dimension112?: string;
        dimension113?: string;
        dimension114?: string;
        dimension115?: string;
        dimension116?: string;
        dimension117?: string;
        dimension118?: string;
        dimension119?: string;
        dimension120?: string;
        dimension121?: string;
        dimension122?: string;
        dimension123?: string;
        dimension124?: string;
        dimension125?: string;
        dimension126?: string;
        dimension127?: string;
        dimension128?: string;
        dimension129?: string;
        dimension130?: string;
        dimension131?: string;
        dimension132?: string;
        dimension133?: string;
        dimension134?: string;
        dimension135?: string;
        dimension136?: string;
        dimension137?: string;
        dimension138?: string;
        dimension139?: string;
        dimension140?: string;
        dimension141?: string;
        dimension142?: string;
        dimension143?: string;
        dimension144?: string;
        dimension145?: string;
        dimension146?: string;
        dimension147?: string;
        dimension148?: string;
        dimension149?: string;
        dimension150?: string;
        dimension151?: string;
        dimension152?: string;
        dimension153?: string;
        dimension154?: string;
        dimension155?: string;
        dimension156?: string;
        dimension157?: string;
        dimension158?: string;
        dimension159?: string;
        dimension160?: string;
        dimension161?: string;
        dimension162?: string;
        dimension163?: string;
        dimension164?: string;
        dimension165?: string;
        dimension166?: string;
        dimension167?: string;
        dimension168?: string;
        dimension169?: string;
        dimension170?: string;
        dimension171?: string;
        dimension172?: string;
        dimension173?: string;
        dimension174?: string;
        dimension175?: string;
        dimension176?: string;
        dimension177?: string;
        dimension178?: string;
        dimension179?: string;
        dimension180?: string;
        dimension181?: string;
        dimension182?: string;
        dimension183?: string;
        dimension184?: string;
        dimension185?: string;
        dimension186?: string;
        dimension187?: string;
        dimension188?: string;
        dimension189?: string;
        dimension190?: string;
        dimension191?: string;
        dimension192?: string;
        dimension193?: string;
        dimension194?: string;
        dimension195?: string;
        dimension196?: string;
        dimension197?: string;
        dimension198?: string;
        dimension199?: string;
        dimension200?: string;
        encoding?: string;
        eventAction?: string;
        eventCategory?: string;
        eventLabel?: string;
        eventValue?: number;
        exDescription?: string;
        exFatal?: boolean;
        expId?: string;
        expVar?: string;
        flashVersion?: string;
        forceSSL?: boolean;
        hitCallback?(): void;
        hitType?: HitType;
        hostname?: string;
        id?: string;
        javaEnabled?: boolean;
        language?: string;
        legacyCookieDomain?: string;
        legacyHistoryImport?: boolean;
        linkid?: string;
        list?: string;
        location?: string;
        metric1?: string | number;
        metric2?: string | number;
        metric3?: string | number;
        metric4?: string | number;
        metric5?: string | number;
        metric6?: string | number;
        metric7?: string | number;
        metric8?: string | number;
        metric9?: string | number;
        metric10?: string | number;
        metric11?: string | number;
        metric12?: string | number;
        metric13?: string | number;
        metric14?: string | number;
        metric15?: string | number;
        metric16?: string | number;
        metric17?: string | number;
        metric18?: string | number;
        metric19?: string | number;
        metric20?: string | number;
        metric21?: string | number;
        metric22?: string | number;
        metric23?: string | number;
        metric24?: string | number;
        metric25?: string | number;
        metric26?: string | number;
        metric27?: string | number;
        metric28?: string | number;
        metric29?: string | number;
        metric30?: string | number;
        metric31?: string | number;
        metric32?: string | number;
        metric33?: string | number;
        metric34?: string | number;
        metric35?: string | number;
        metric36?: string | number;
        metric37?: string | number;
        metric38?: string | number;
        metric39?: string | number;
        metric40?: string | number;
        metric41?: string | number;
        metric42?: string | number;
        metric43?: string | number;
        metric44?: string | number;
        metric45?: string | number;
        metric46?: string | number;
        metric47?: string | number;
        metric48?: string | number;
        metric49?: string | number;
        metric50?: string | number;
        metric51?: string | number;
        metric52?: string | number;
        metric53?: string | number;
        metric54?: string | number;
        metric55?: string | number;
        metric56?: string | number;
        metric57?: string | number;
        metric58?: string | number;
        metric59?: string | number;
        metric60?: string | number;
        metric61?: string | number;
        metric62?: string | number;
        metric63?: string | number;
        metric64?: string | number;
        metric65?: string | number;
        metric66?: string | number;
        metric67?: string | number;
        metric68?: string | number;
        metric69?: string | number;
        metric70?: string | number;
        metric71?: string | number;
        metric72?: string | number;
        metric73?: string | number;
        metric74?: string | number;
        metric75?: string | number;
        metric76?: string | number;
        metric77?: string | number;
        metric78?: string | number;
        metric79?: string | number;
        metric80?: string | number;
        metric81?: string | number;
        metric82?: string | number;
        metric83?: string | number;
        metric84?: string | number;
        metric85?: string | number;
        metric86?: string | number;
        metric87?: string | number;
        metric88?: string | number;
        metric89?: string | number;
        metric90?: string | number;
        metric91?: string | number;
        metric92?: string | number;
        metric93?: string | number;
        metric94?: string | number;
        metric95?: string | number;
        metric96?: string | number;
        metric97?: string | number;
        metric98?: string | number;
        metric99?: string | number;
        metric100?: string | number;
        metric101?: string | number;
        metric102?: string | number;
        metric103?: string | number;
        metric104?: string | number;
        metric105?: string | number;
        metric106?: string | number;
        metric107?: string | number;
        metric108?: string | number;
        metric109?: string | number;
        metric110?: string | number;
        metric111?: string | number;
        metric112?: string | number;
        metric113?: string | number;
        metric114?: string | number;
        metric115?: string | number;
        metric116?: string | number;
        metric117?: string | number;
        metric118?: string | number;
        metric119?: string | number;
        metric120?: string | number;
        metric121?: string | number;
        metric122?: string | number;
        metric123?: string | number;
        metric124?: string | number;
        metric125?: string | number;
        metric126?: string | number;
        metric127?: string | number;
        metric128?: string | number;
        metric129?: string | number;
        metric130?: string | number;
        metric131?: string | number;
        metric132?: string | number;
        metric133?: string | number;
        metric134?: string | number;
        metric135?: string | number;
        metric136?: string | number;
        metric137?: string | number;
        metric138?: string | number;
        metric139?: string | number;
        metric140?: string | number;
        metric141?: string | number;
        metric142?: string | number;
        metric143?: string | number;
        metric144?: string | number;
        metric145?: string | number;
        metric146?: string | number;
        metric147?: string | number;
        metric148?: string | number;
        metric149?: string | number;
        metric150?: string | number;
        metric151?: string | number;
        metric152?: string | number;
        metric153?: string | number;
        metric154?: string | number;
        metric155?: string | number;
        metric156?: string | number;
        metric157?: string | number;
        metric158?: string | number;
        metric159?: string | number;
        metric160?: string | number;
        metric161?: string | number;
        metric162?: string | number;
        metric163?: string | number;
        metric164?: string | number;
        metric165?: string | number;
        metric166?: string | number;
        metric167?: string | number;
        metric168?: string | number;
        metric169?: string | number;
        metric170?: string | number;
        metric171?: string | number;
        metric172?: string | number;
        metric173?: string | number;
        metric174?: string | number;
        metric175?: string | number;
        metric176?: string | number;
        metric177?: string | number;
        metric178?: string | number;
        metric179?: string | number;
        metric180?: string | number;
        metric181?: string | number;
        metric182?: string | number;
        metric183?: string | number;
        metric184?: string | number;
        metric185?: string | number;
        metric186?: string | number;
        metric187?: string | number;
        metric188?: string | number;
        metric189?: string | number;
        metric190?: string | number;
        metric191?: string | number;
        metric192?: string | number;
        metric193?: string | number;
        metric194?: string | number;
        metric195?: string | number;
        metric196?: string | number;
        metric197?: string | number;
        metric198?: string | number;
        metric199?: string | number;
        metric200?: string | number;
        name?: string;
        nonInteraction?: boolean;
        option?: string;
        page?: string;
        position?: number | string;
        price?: string;
        quantity?: number;
        queueTime?: number;
        referrer?: string;
        revenue?: string;
        sampleRate?: number;
        sessionControl?: string;
        siteSpeedSampleRate?: number;
        screenColors?: string;
        screenName?: string;
        screenResolution?: string;
        shipping?: string;
        socialAction?: string;
        socialNetwork?: string;
        socialTarget?: string;
        some?: string;
        step?: boolean | number;
        storage?: string;
        storeGac?: boolean;
        tax?: string;
        timingCategory?: string;
        timingLabel?: string;
        timingValue?: number;
        timingVar?: string;
        title?: string;
        transport?: string;
        useBeacon?: boolean;
        userId?: string;
        variant?: string;
        viewportSize?: string;
    }

    interface ga {
        l: number;
        q: any[];

        (
            command: 'send',
            hitType: 'event',
            eventCategory: string,
            eventAction: string,
            eventLabel?: string,
            eventValue?: number,
            fieldsObject?: FieldsObject): void;
        (
            command: 'send',
            hitType: 'event',
            fieldsObject: {
                eventCategory: string,
                eventAction: string,
                eventLabel?: string,
                eventValue?: number,
                nonInteraction?: boolean
            }): void;
        (
            command: 'send',
            fieldsObject: {
                hitType: HitType, // 'event'
                eventCategory: string,
                eventAction: string,
                eventLabel?: string,
                eventValue?: number,
                nonInteraction?: boolean
            }): void;
        (command: 'send', hitType: 'pageview', page: string): void;
        (
            command: 'send',
            hitType: 'social',
            socialNetwork: string,
            socialAction: string,
            socialTarget: string): void;
        (
            command: 'send',
            hitType: 'social',
            fieldsObject: {
                socialNetwork: string,
                socialAction: string,
                socialTarget: string
            }): void;
        (
            command: 'send',
            hitType: 'timing',
            timingCategory: string,
            timingVar: string,
            timingValue: number): void;
        (
            command: 'send',
            hitType: 'timing',
            fieldsObject: {
                timingCategory: string,
                timingVar: string,
                timingValue: number
            }): void;
        (command: 'send', fieldsObject: FieldsObject): void;
        (command: string, hitType: HitType, ...fields: any[]): void;
        (command: 'require', pluginName: string, pluginOptions?: any): void;
        (command: 'provide', pluginName: string, pluginConstructor: (tracker: Tracker, pluginOptions?: Object) => void): void;

        (command: 'create', trackingId: string, cookieDomain?: string, name?: string, fieldsObject?: FieldsObject): void;
        (command: 'remove'): void;

        (command: string, ...fields: any[]): void;

        (readyCallback: (defaultTracker?: Tracker) => void): void;

        create(trackingId: string, cookieDomain: string, name: string, fieldsObject?: FieldsObject): Tracker;
        create(trackingId: string, cookieDomain: string, fieldsObject?: FieldsObject): Tracker;
        create(trackingId: string, fieldsObject?: FieldsObject): Tracker;

        getAll(): Tracker[];
        getByName(name: string): Tracker;
        remove(name: string): void;
    }

    interface Tracker {
        get(fieldName: string): any;
        set(fieldName: string, fieldValue: any): void;
        set(fieldsObject: {}): void;
        send(hitType: string, ...fields: any[]): void;
        send(hitType: string, fieldsObject: {}): void;
    }

    interface Model {
        get(fieldName: string): any;
        set(fieldName: string, fieldValue: any, temporary?: boolean): void;
        set(fields: {}, fieldValue?: null, temporary?: boolean): void;
    }
}

declare var gaClassic: GoogleAnalytics;
declare var ga: UniversalAnalytics.ga;
declare var _gaq: GoogleAnalyticsCode;
declare var _gat: GoogleAnalyticsTracker;
