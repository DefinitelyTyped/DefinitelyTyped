// Type definitions for Traverson v2.0.1
// Project: https://github.com/basti1302/traverson
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var traverson: Traverson.TraversonMethods;

export = traverson;

declare namespace Traverson
{
    interface TraversonMethods
    {
        from(uri: string): Builder;
        registerMediaType(name: string, handler: any): TraversonMethods;
    }

    interface Builder
    {
        withRequestOptions(options: any): Builder;
        withTemplateParameters(parameters: any): Builder;
        json(): Builder;
        jsonHal(): Builder;

        setMediaType(type_name: string): Builder;

        follow(first_pattern: string, ... rest_patterns: string[]): Builder;

        get(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        getResource(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        getUrl(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        post(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        put(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        patch(data: any, callback: (err: any, document: any, traversal?: Traversal) => void): InAction;
        delete(callback: (err: any, document: any, traversal?: Traversal) => void): InAction;

        newRequest(): Builder;
    }

    interface Json
    {
        parseJson(): any;
    }

    interface Traversal
    {
        continue(): Builder;
    }

    interface InAction
    {
        abort(): void;
    }



}
