// Type definitions for PiwikTracker v0.1.1
// Project: https://www.npmjs.com/package/piwik-tracker
// Definitions by: Guilherme Bernal <https://github.com/lbguilherme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



import events = require('events');

export = PiwikTracker;

// refer to http://developer.piwik.org/api-reference/tracking-api
interface PiwikTrackOptions {
    // Required parameters
    url: string;

    // Recommended parameters
    action_name?: string;
    _id?: string;
    rand?: string;
    apiv?: number;

    // Optional User info
    urlref?: string;
    _cvar?: string;
    _idvc?: string;
    _viewts?: string;
    _idts?: string;
    _rcn?: string;
    _rck?: string;
    res?: string;
    h?: number;
    m?: number;
    s?: number;
    ua?: string;
    lang?: string;
    uid?: string;
    cid?: string;
    new_visit?: number;

    // Optional Action info
    cvar?: string;
    link?: string;
    download?: string;
    search?: string;
    search_cat?: string;
    search_count?: number;
    idgoal?: number;
    revenue?: number;
    gt_ms?: number;
    cs?: string;

    // Optional Event Tracking info
    e_c?: string;
    e_a?: string;
    e_n?: string;
    e_v?: string;

    // Optional Content Tracking info
    c_n?: string;
    c_p?: string;
    c_t?: string;
    c_i?: string;

    // Optional Ecommerce info
    ec_id?: string;
    ec_items?: string;
    ec_st?: number;
    ec_tx?: number;
    ec_sh?: number;
    ec_dt?: number;
    _ects?: number;

    // Other parameters (require authentication via token_auth)
    token_auth?: string;
    cip?: string;
    cdt?: string;
    country?: string;
    region?: string;
    city?: string;
    lat?: string;
    long?: string;

    // Other parameters
    send_image?: number;
}

declare class PiwikTracker extends events.EventEmitter {
    constructor(siteId: number, trackerUrl: string);
    track(options: PiwikTrackOptions): void;
}
