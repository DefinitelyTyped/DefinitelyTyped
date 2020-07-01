// Type definitions for Traverson v6.1.1
// Project: https://github.com/traverson/traverson
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
//                 Vladimir Jelovac <https://github.com/jelovac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var traverson: Traverson.TraversonMethods;

export = traverson;

declare namespace Traverson {
    interface TraversonMethods {
        newRequest(): Builder;
        from(uri: string): Builder;
        json(): Builder;
        jsonHal(): Builder;
        registerMediaType(name: string, handler: any): TraversonMethods;
        mediaTypes(): TraversonMethods;
        errors(): TraversonMethods;
    }

    interface Builder {
        newRequest(): Builder;
        setMediaType(type_name: string): Builder;
        getLinkType(): string;
        json(): Builder;
        jsonHal(): Builder;
        useContentNegotiation(): Builder;
        from(url: string): Builder;
        follow(first_pattern: string, ...rest_patterns: string[]): Builder;
        followLocationHeader(): Builder;
        walk(first_pattern: string, ...rest_patterns: string[]): Builder; // Alias for follow()
        withTemplateParameters(parameters: any): Builder;
        withRequestOptions(options: any): Builder;
        addRequestOptions(options: any): Builder;
        withRequestLibrary(request: any): Builder;
        parseResponseBodiesWith(parser: any): Builder;
        disableAutoHeaders(): Builder;
        enableAutoHeaders(): Builder;
        useAutoHeaders(flag: any): Builder;
        sendRawPayload(flag: any): Builder;
        convertResponseToObject(): Builder;
        resolveRelative(flag: any): Builder;
        preferEmbeddedResources(flag: any): Builder;
        getMediaType(): string;
        getFrom(): string;
        getTemplateParameters(): any;
        getRequestOptions(): any;
        getRequestLibrary(): any;
        getJsonParser(): any;
        setsAutoHeaders(): boolean;
        sendsRawPayload(): boolean;
        convertsResponseToObject(): boolean;
        doesResolveRelative(): boolean;
        doesPreferEmbeddedResources(): boolean;
        doesContentNegotiation(): boolean;
        get(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        getResource(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        getUrl(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        getUri(callback: (err: any, document: any, traversal?: Traversal) => void): InAction; // Alias for getUrl()
        post(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        put(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        patch(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        delete(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        del(callback: (err: any, document: any, traversal?: Traversal) => void): InAction; // Alias for delete()
        linkHeader(): Builder;
    }

    interface Json {
        parseJson(): any;
    }

    interface Traversal {
        continue(): Builder;
    }

    interface InAction {
        abort(): void;
    }
}
