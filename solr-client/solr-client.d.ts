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

        add(documents:Object, options:Object, callback:{err:Error; obj:Object});
        add(documents:Object, callback:{err:Error; obj:Object});
        add(documents:Object[], options:Object, callback:{err:Error; obj:Object});
        add(documents:Object[], callback:{err:Error; obj:Object});

        realTimeGet(ids:string, query:string, callback:{err:Error; obj:Object});
        realTimeGet(ids:string[], query:string, callback:{err:Error; obj:Object});
        realTimeGet(ids:string, query:Object, callback:{err:Error; obj:Object});
        realTimeGet(ids:string[], query:Object, callback:{err:Error; obj:Object});
        realTimeGet(ids:string, query:SolrQuery, callback:{err:Error; obj:Object});
        realTimeGet(ids:string[], query:SolrQuery, callback:{err:Error; obj:Object});

        commit(options:Object, callback:{err:Error; obj:Object});
        commit(callback:{err:Error; obj:Object});

        softCommit(callback:{err:Error; obj:Object});

        delete(field:string, text:string, options:Object, callback:{err:Error; obj:Object});
        delete(field:string, text:string, callback:{err:Error; obj:Object});

        deleteByRange(field:string, start:string, stop:string, options:Object, callback:{err:Error; obj:Object});
        deleteByRange(field:string, start:number, stop:number, options:Object, callback:{err:Error; obj:Object});
        deleteByRange(field:string, start:string, stop:string, callback:{err:Error; obj:Object});
        deleteByRange(field:string, start:Date, stop:Date, callback:{err:Error; obj:Object});

        deleteByID(id:string, options:Object, callback:{err:Error; obj:Object});
        deleteByID(id:string, callback:{err:Error; obj:Object});

        deleteByQuery(query:string, options:Object, callback:{err:Error; obj:Object});
        deleteByQuery(query:string, callback:{err:Error; obj:Object});

        deleteAll(options:Object, callback:{err:Error; obj:Object});
        deleteAll(callback:{err:Error; obj:Object});

        optimize(options:Object, callback:{err:Error; obj:Object});
        optimize(callback:{err:Error; obj:Object});

        rollback(callback:{err:Error; obj:Object});

        update(data:Object, options:Object, callback:{err:Error; obj:Object});
        update(data:Object, callback:{err:Error; obj:Object});

        search(search:Object, callback:{err:Error; obj:Object});
        search(search:SolrQuery, callback:{err:Error; obj:Object});
        search(search:string, callback:{err:Error; obj:Object});

        searchAll(callback:{err:Error; obj:Object});

        get(handler:string, query:string, callback:{err:Error; obj:Object});
        get(handler:string, query:Object, callback:{err:Error; obj:Object});
        get(handler:string, query:SolrQuery, callback:{err:Error; obj:Object});

        createQuery():SolrQuery;

        ping(callback:{err:Error; obj:Object});

    }
}

declare module "solr-client"
{
    export function createClient(options:Solr.SolrClientOptions):Solr.SolrClient;
    export function createClient(host:string, port:string, core:string, path:string, agent:http.Agent, secure?:boolean, bigint?:boolean):Solr.SolrClient;
}