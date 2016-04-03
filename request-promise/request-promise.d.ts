// Type definitions for request-promise v0.4.2
// Project: https://www.npmjs.com/package/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Change [0]: 2015/08/20 - Aya Morisawa <https://github.com/AyaMorisawa>

/// <reference path="../request/request.d.ts" />
/// <reference path="../bluebird/bluebird.d.ts" />

declare module 'request-promise' {
    import request = require('request');
    import http = require('http');
        
    interface RequestPromise extends request.Request {
        then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
        then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;
        catch(onrejected?: (reason: any) => any | PromiseLike<any>): Promise<any>;
        catch(onrejected?: (reason: any) => void): Promise<any>;
        finally<TResult>(handler: () => PromiseLike<TResult>): Promise<any>;
        finally<TResult>(handler: () => TResult): Promise<any>;
        promise(): Promise<any>;
    }
    
    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?: (body: any, response: http.IncomingMessage) => any;
        resolveWithFullResponse?: boolean;
    }
    
    var requestPromise: request.RequestAPI<RequestPromise, RequestPromiseOptions, request.RequiredUriUrl>;
	export = requestPromise;
}
