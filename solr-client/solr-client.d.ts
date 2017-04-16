///<reference path='../node/node.d.ts'/>
import http                                                 = require('http');

declare module Solr
{
    export class SolrQuery
    {
        set(parameter:string):SolrQuery;
        defType(type:string):SolrQuery;
        requestHandler(name:string):SolrQuery;
        qt(name:string):SolrQuery;
        q(q:string):SolrQuery;
        q(q:Object):SolrQuery;
        qop(op:Object):SolrQuery;
        start(start:number):SolrQuery;
        rows(rows:number):SolrQuery;
        cursorMark(mark:string):SolrQuery;
        sort(options:Object):SolrQuery;
        rangeFilter(options:SolrQueryRangeFilterOptions):SolrQuery;
        matchFilter(field:string, value:string):SolrQuery;
        matchFilter(field:string, value:Object):SolrQuery;
        matchFilter(field:string, value:Date):SolrQuery;
        fl(field:string[]):SolrQuery;
        fl(field:string):SolrQuery;
        restrict(field:string[]):SolrQuery;
        restrict(field:string):SolrQuery;
        timeout(time:string):SolrQuery;
        timeout(time:number):SolrQuery;
        groupBy(field:string):SolrQuery;
        group(field:SolrQueryGroupOptions):SolrQuery;
        facet(field:SolrQueryFacetOptions):SolrQuery;
        dismax():SolrQuery;
        edismax():SolrQuery;
        debugQuery():SolrQuery;
        qf(options:Object):SolrQuery;
        mm(minimum:string):SolrQuery;
        mm(minimum:number):SolrQuery;
        pf(options:Object):SolrQuery;
        ps(slop:number):SolrQuery;
        qs(slop:number):SolrQuery;
        tie(tiebreaker:number):SolrQuery;
        bf(functions:string):SolrQuery;
        boost(functions:string):SolrQuery;
        build():string;
    }

    export interface SolrQueryRangeFilterOptions
    {
        field:string;
        start:number;
        stop:number;
    }

    export interface SolrQueryFacetOptions
    {
        on:boolean;
        query:string;
        field:string[];
        prefix:string;
        sort:string;
        limit:number;
        offset:number;
        mincount:number;
        missing:boolean;
        method:string;
    }

    export interface SolrQueryGroupOptions
    {
        on:boolean;
        field:string[];
        limit:number;
        offset:number;
        sort:string;
        format:string;
        main:boolean;
        ngroups:boolean;
        truncate:boolean;
        cache:number;
    }

    export interface SolrClientOptions
    {
        host:string;
        port:string;
        core:string;
        path:string;
        agent:string;
        secure?:boolean;
        bigint?: boolean;
    }

    export class SolrClient
    {
        constructor(options:SolrClientOptions);
        basicAuth(user:string, password:string):SolrClient;
        unauth():SolrClient;

        add(documents:Object, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        add(documents:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        add(documents:Object[], options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        add(documents:Object[], callback:{err:Error; obj:Object}):http.ClientRequest;

        realTimeGet(ids:string, query:string, callback:{err:Error; obj:Object}):http.ClientRequest;
        realTimeGet(ids:string[], query:string, callback:{err:Error; obj:Object}):http.ClientRequest;
        realTimeGet(ids:string, query:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        realTimeGet(ids:string[], query:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        realTimeGet(ids:string, query:SolrQuery, callback:{err:Error; obj:Object}):http.ClientRequest;
        realTimeGet(ids:string[], query:SolrQuery, callback:{err:Error; obj:Object}):http.ClientRequest;

        commit(options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        commit(callback:{err:Error; obj:Object}):http.ClientRequest;

        softCommit(callback:{err:Error; obj:Object}):http.ClientRequest;

        delete(field:string, text:string, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        delete(field:string, text:string, callback:{err:Error; obj:Object}):http.ClientRequest;

        deleteByRange(field:string, start:string, stop:string, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteByRange(field:string, start:number, stop:number, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteByRange(field:string, start:string, stop:string, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteByRange(field:string, start:Date, stop:Date, callback:{err:Error; obj:Object}):http.ClientRequest;

        deleteByID(id:string, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteByID(id:string, callback:{err:Error; obj:Object}):http.ClientRequest;

        deleteByQuery(query:string, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteByQuery(query:string, callback:{err:Error; obj:Object}):http.ClientRequest;

        deleteAll(options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        deleteAll(callback:{err:Error; obj:Object}):http.ClientRequest;

        optimize(options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        optimize(callback:{err:Error; obj:Object}):http.ClientRequest;

        rollback(callback:{err:Error; obj:Object}):http.ClientRequest;

        update(data:Object, options:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        update(data:Object, callback:{err:Error; obj:Object}):http.ClientRequest;

        search(search:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        search(search:SolrQuery, callback:{err:Error; obj:Object}):http.ClientRequest;
        search(search:string, callback:{err:Error; obj:Object}):http.ClientRequest;

        searchAll(callback:{err:Error; obj:Object}):http.ClientRequest;

        get(handler:string, query:string, callback:{err:Error; obj:Object}):http.ClientRequest;
        get(handler:string, query:Object, callback:{err:Error; obj:Object}):http.ClientRequest;
        get(handler:string, query:SolrQuery, callback:{err:Error; obj:Object}):http.ClientRequest;

        createQuery():SolrQuery;

        ping(callback:{err:Error; obj:Object}):http.ClientRequest;
    }
}

declare module "solr-client"
{
    export function createClient(options:Solr.SolrClientOptions):Solr.SolrClient;
    export function createClient(host:string, port:string, core:string, path:string, agent:http.Agent, secure?:boolean, bigint?:boolean):Solr.SolrClient;
}