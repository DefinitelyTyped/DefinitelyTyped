// Type definitions for node_mdns
// Project: https://github.com/agnat/node_mdns
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace MDNS {

    // --- Error ---

    interface DnsSdError extends Error {
        errorCode?:number;
    }

    // --- Ads ---

    interface AdvertisementOptions {
        name?:string;
        interfaceIndex?:number;
        networkInterface?:string;
        txtRecord?:any;
        host?:any;
        domain?:any;
        flags?:any;
        context?:any;
    }

    interface AdvertisementCreatable {
        new(serviceType:ServiceType, port:number, options?:AdvertisementOptions, callback?:(error:DnsSdError, service:Service)=>void):Advertisement;
    }

    interface Advertisement extends NodeJS.EventEmitter {
        start():void;
        stop():void;
    }

    // --- Browser ---

    interface BrowserOptions {
        resolverSequence?:Array<(service:Service, next:()=>void)=>boolean>;
        interfaceIndex?:number;
        networkInterface?:string;
        domain?:any;
        context?:any;
        flags?:any;
    }

    interface Browser extends NodeJS.EventEmitter {
        start():any;
        stop():any;
        on(event:string, listener:Function):this;
        on(event:'serviceUp', listener:(info:Service)=>void):this;
        on(event:'serviceDown', listener:(info:Service)=>void):this;
    }

    interface BrowserStatic {
        new(serviceType:ServiceType, options?:BrowserOptions):Browser;
        defaultResolverSequence:Array<(service:Service, next:()=>void)=>boolean>
    }

    // --- Services ---

    interface Service {
        addresses:Array<string>;
        flags:number;
        fullname:string;
        host:string;
        interfaceIndex: number;
        name?:string;
        networkInterface:string;
        port:number;
        replyDomain:string;
        type:ServiceType;
    }

    interface ServiceType {
        new(serviceTypeIdentifier:string):ServiceType;
        new(name:string, protocol:string, ...subtypes:string[]):ServiceType;
        new(serviceTypeIdentifier:Array<string>):ServiceType;
        new(serviceTypeIdentifier:{name:string; protocol:string; subtypes?:Array<string>}):ServiceType;
        new(serviceType:ServiceType):ServiceType;

        fullyQualified:boolean;
        name:string;
        protocol:string;
        subtypes:Array<string>;

        toString():string;
        fromString(serviceTypeIdentifier:string):ServiceType;

        toArray():Array<string>;
        fromArray(serviceTypeIdentifier:Array<string>):ServiceType;

        fromJSON(serviceTypeIdentifier:{name:string; protocol:string; subtypes?:Array<string>}):ServiceType;
        fromJSON(serviceType:ServiceType):ServiceType;
    }

    // interface for extending with custom resolvers
    interface MDNSResolverSequenceTasks {

    }

    interface DefaultResolverSequenceTasks extends MDNSResolverSequenceTasks {
        DNSServiceResolve(options?:{flags:any}):(service:Service, next:()=>void)=>boolean;
        DNSServiceGetAddrInfo(options?:any):(service:Service, next:()=>void)=>boolean;
        getaddrinfo(options?:any):(service:Service, next:()=>void)=>boolean;
        makeAddressesUnique():(service:Service, next:()=>void)=>boolean;
        filterAddresses(fn:(address:string, index?:number, addresses?:Array<string>)=>boolean):void;
        logService():void;
    }

    // --- Statics & Classes ---

    var Advertisement:AdvertisementCreatable;
    var Browser:BrowserStatic;
    var ServiceType:ServiceType;
    var rst:DefaultResolverSequenceTasks;

    // static functions

    function tcp(name:string, ...subtypes:string[]):ServiceType;

    function udp(name:string, ...subtypes:string[]):ServiceType;

    function makeServiceType(name:string, protocol:string, ...subtypes:string[]):ServiceType;

    function makeServiceType(serviceTypeIdentifier:string):ServiceType;

    function makeServiceType(serviceTypeIdentifier:Array<string>):ServiceType;

    function makeServiceType(serviceTypeIdentifier:{name:string; protocol:string; subtypes?:Array<string>}):ServiceType;

    function makeServiceType(serviceType:ServiceType):ServiceType;

    function createBrowser(serviceType:ServiceType, options?:BrowserOptions):Browser;

    function createAdvertisement(serviceType:ServiceType, port:number, options?:AdvertisementOptions, callback?:(error:DnsSdError, service:Service)=>void):Advertisement;

    function resolve(service:Service, sequence?:Array<(service:Service, next:()=>void)=>boolean>, callback?:(error:DnsSdError, service:Service)=>void):void;

    function browseThemAll(options:BrowserOptions):Browser;

    function loopbackInterface():any;

    // constants

    var isAvahi:boolean;

    // -------------------- -------------------- -------------------- -------------------- -------------------- -------------------- -------------------- -------------------- --------------------

    //Constants from dns_sd.h (C-Code of Bonjour -> see https://developer.apple.com/library/mac/documentation/Networking/Reference/DNSServiceDiscovery_CRef/Reference/reference.html)

    var _DNS_SD_H:number;

    var kDNSServiceMaxDomainName:string;
    var kDNSServiceMaxServiceName:number;
    var kDNSServiceOutputFlags:any;
    var kDNSServiceProperty_DaemonVersion:number;

    var kDNSServiceClass_IN:number;

    var kDNSServiceErr_NoError:number;
    var kDNSServiceErr_Unknown:number;
    var kDNSServiceErr_NoSuchName:number;
    var kDNSServiceErr_NoMemory:number;
    var kDNSServiceErr_BadParam:number;
    var kDNSServiceErr_BadReference:number;
    var kDNSServiceErr_BadState:number;
    var kDNSServiceErr_BadFlags:number;
    var kDNSServiceErr_Unsupported:number;
    var kDNSServiceErr_NotInitialized:number;
    var kDNSServiceErr_AlreadyRegistered:number;
    var kDNSServiceErr_NameConflict:number;
    var kDNSServiceErr_Invalid:number;
    var kDNSServiceErr_Firewall:number;
    var kDNSServiceErr_Incompatible:number;
    var kDNSServiceErr_BadInterfaceIndex:number;
    var kDNSServiceErr_Refused:number;
    var kDNSServiceErr_NoSuchRecord:number;
    var kDNSServiceErr_NoAuth:number;
    var kDNSServiceErr_NoSuchKey:number;
    var kDNSServiceErr_NATTraversal:number;
    var kDNSServiceErr_DoubleNAT:number;
    var kDNSServiceErr_BadTime:number;
    var kDNSServiceErr_BadSig:number;
    var kDNSServiceErr_BadKey:number;
    var kDNSServiceErr_Transient:number;
    var kDNSServiceErr_ServiceNotRunning:number;
    var kDNSServiceErr_NATPortMappingUnsupported:number;
    var kDNSServiceErr_NATPortMappingDisabled:number;
    var kDNSServiceErr_NoRouter:number;
    var kDNSServiceErr_PollingMode:number;
    var kDNSServiceErr_Timeout:number;

    var kDNSServiceType_A:number;
    var kDNSServiceType_NS:number;
    var kDNSServiceType_MD:number;
    var kDNSServiceType_MF:number;
    var kDNSServiceType_CNAME:number;
    var kDNSServiceType_SOA:number;
    var kDNSServiceType_MB:number;
    var kDNSServiceType_MG:number;
    var kDNSServiceType_MR:number;
    var kDNSServiceType_NULL:number;
    var kDNSServiceType_WKS:number;
    var kDNSServiceType_PTR:number;
    var kDNSServiceType_HINFO:number;
    var kDNSServiceType_MINFO:number;
    var kDNSServiceType_MX:number;
    var kDNSServiceType_TXT:number;
    var kDNSServiceType_RP:number;
    var kDNSServiceType_AFSDB:number;
    var kDNSServiceType_X25:number;
    var kDNSServiceType_ISDN:number;
    var kDNSServiceType_RT:number;
    var kDNSServiceType_NSAP:number;
    var kDNSServiceType_NSAP_PTR:number;
    var kDNSServiceType_SIG:number;
    var kDNSServiceType_KEY:number;
    var kDNSServiceType_PX:number;
    var kDNSServiceType_GPOS:number;
    var kDNSServiceType_AAAA:number;
    var kDNSServiceType_LOC:number;
    var kDNSServiceType_NXT:number;
    var kDNSServiceType_EID:number;
    var kDNSServiceType_NIMLOC:number;
    var kDNSServiceType_SRV:number;
    var kDNSServiceType_ATMA:number;
    var kDNSServiceType_NAPTR:number;
    var kDNSServiceType_KX:number;
    var kDNSServiceType_CERT:number;
    var kDNSServiceType_A6:number;
    var kDNSServiceType_DNAME:number;
    var kDNSServiceType_SINK:number;
    var kDNSServiceType_OPT:number;
    var kDNSServiceType_APL:number;
    var kDNSServiceType_DS:number;
    var kDNSServiceType_SSHFP:number;
    var kDNSServiceType_IPSECKEY:number;
    var kDNSServiceType_RRSIG:number;
    var kDNSServiceType_NSEC:number;
    var kDNSServiceType_DNSKEY:number;
    var kDNSServiceType_DHCID:number;
    var kDNSServiceType_NSEC3:number;
    var kDNSServiceType_NSEC3PARAM:number;
    var kDNSServiceType_HIP:number;
    var kDNSServiceType_SPF:number;
    var kDNSServiceType_UINFO:number;
    var kDNSServiceType_UID:number;
    var kDNSServiceType_GID:number;
    var kDNSServiceType_UNSPEC:number;
    var kDNSServiceType_TKEY:number;
    var kDNSServiceType_TSIG:number;
    var kDNSServiceType_IXFR:number;
    var kDNSServiceType_AXFR:number;
    var kDNSServiceType_MAILB:number;
    var kDNSServiceType_MAILA:number;
    var kDNSServiceType_ANY:number;

    var kDNSServiceFlagsMoreComing:number;
    var kDNSServiceFlagsAdd:number;
    var kDNSServiceFlagsDefault:number;
    var kDNSServiceFlagsNoAutoRename:number;
    var kDNSServiceFlagsShared:number;
    var kDNSServiceFlagsUnique:number;
    var kDNSServiceFlagsBrowseDomains:number;
    var kDNSServiceFlagsRegistrationDomains:number;
    var kDNSServiceFlagsLongLivedQuery:number;
    var kDNSServiceFlagsAllowRemoteQuery:number;
    var kDNSServiceFlagsForceMulticast:number;
    var kDNSServiceFlagsKnownUnique:number;
    var kDNSServiceFlagsReturnIntermediates:number;
    var kDNSServiceFlagsNonBrowsable:number;
    var kDNSServiceFlagsShareConnection:number;
    var kDNSServiceFlagsSuppressUnusable:number;
    var kDNSServiceFlagsWakeOnResolve:number;
    var kDNSServiceFlagsBackgroundTrafficClass:number;
    var kDNSServiceFlagsIncludeAWDL:number;
    var kDNSServiceFlagsValidate:number;
    var kDNSServiceFlagsSecure:number;
    var kDNSServiceFlagsInsecure:number;
    var kDNSServiceFlagsBogus:number;
    var kDNSServiceFlagsIndeterminate:number;
    var kDNSServiceFlagsUnicastResponse:number;
    var kDNSServiceFlagsValidateOptional:number;
    var kDNSServiceFlagsWakeOnlyService:number;

    var kDNSServiceProtocol_IPv4:number;
    var kDNSServiceProtocol_IPv6:number;
    var kDNSServiceProtocol_UDP:number;
    var kDNSServiceProtocol_TCP:number;
}


export = MDNS;