import { DataFactory } from 'rdf-js'

declare namespace BaseClient {
    interface ClientOptions {
        endpointUrl?: string
        factory?: DataFactory
        fetch?: typeof fetch
        headers?: HeadersInit
        password?: string
        storeUrl?: string
        updateUrl?: string
        user?: string
        Query?: Query
        Store?: Store
    }
}

declare class BaseClient {
    constructor(options: BaseClient.ClientOptions)
    mergeHeaders(args: HeadersInit): Headers
}

export = BaseClient;
