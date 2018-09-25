/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
* WebDAV constants
*/
export declare class Constants {
    static readonly DAV: string;
    static readonly Z: string;
    static readonly CalDAV: string;
    static readonly CardDAV: string;
    static readonly OPAQUE_SCHEME: string;
}
export declare class XmlElements {
    static readonly LOCKROOT: string;
    static readonly ACTIVELOCK: string;
    static readonly ALLPROP: string;
    static readonly COLLECTION: string;
    static readonly DEPTH: string;
    static readonly EXCLUSIVE: string;
    static readonly ERROR: string;
    static readonly HREF: string;
    static readonly LOCKENTRY: string;
    static readonly LOCKSCOPE: string;
    static readonly LOCKTOKEN: string;
    static readonly LOCKTYPE: string;
    static readonly MULTISTATUS: string;
    static readonly OWNER: string;
    static readonly PROP: string;
    static readonly PROPFIND: string;
    static readonly PROPNAME: string;
    static readonly PROPSTAT: string;
    static readonly REPORT: string;
    static readonly RESPONSE: string;
    static readonly RESPONSEDESCRIPTION: string;
    static readonly SHARED: string;
    static readonly STATUS: string;
    static readonly TIMEOUT: string;
    static readonly VERSIONHISTORY: string;
    static readonly PRINCIPAL: string;
    static readonly WRITE: string;
    static readonly LIMIT: string;
    static readonly ORDERBY: string;
    static readonly ORDER: string;
    static readonly PAGING_NAMESPACE: string;
    static readonly PAGING_NAMESPACE_URL: string;
    static readonly PAGING_TOTAL: string;
}
/**
 * WebDAV Live Properties
 */
export declare class PropertyNames {
    static readonly CREATIONDATE: string;
    static readonly DISPLAYNAME: string;
    static readonly GETCONTENTLENGTH: string;
    static readonly GETCONTENTTYPE: string;
    static readonly GETLASTMODIFIED: string;
    static readonly LOCKDISCOVERY: string;
    static readonly RESOURCETYPE: string;
    static readonly SUPPORTEDLOCK: string;
    static readonly GETETAG: string;
    static readonly QUOTA_USED_BYTES: string;
    static readonly QUOTA_AVAILABLE_BYTES: string;
    static readonly ISCOLLECTION: string;
    static readonly ISFOLDER: string;
    static readonly ISHIDDEN: string;
    static readonly WIN32FILEATTRIBUTES: string;
    static readonly CALENDAR: string;
    static readonly SCHEDULE_OUTBOX: string;
    static readonly SCHEDULE_INBOX: string;
    static readonly ADDRESSBOOK: string;
}
/**
 * WebDAV Limit Properties
 */
export declare class PropertyLimit {
    static readonly OFFSET: string;
    static readonly NRESULTS: string;
}
export declare class Headers {
    static readonly ACCEPT_RANGES: string;
    static readonly CACHE_CONTROL: string;
    static readonly IF_MODIFIED_SINCE: string;
    static readonly IF_UNMODIFIED_SINCE: string;
    static readonly IF_NONE_MATCH: string;
    static readonly IF_MATCH: string;
    static readonly IF_RANGE: string;
    static readonly IF: string;
    static readonly LOCK_TOKEN: string;
    static readonly RANGE: string;
    static readonly TIMEOUT: string;
    static readonly LOCATION: string;
}
export declare class Depth {
    static readonly INFINITY: string;
}
