// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {

    module io {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/httpParse.html
         *
         * Parses an HTTP stream for a message.
         * 
         * @param httpStream HTTP stream to parse     
         * @param topHeaders       OptionalExtra header information to add to each HTTP request (kind of HTTP inheritance)     
         * @param partial       OptionalA true value indicates that the stream may not be finished, it may end arbitrarily in mid stream.The last XHR object will have a special property _lastIndex that indicates the how far alongthe httpStream could be successfully parsed into HTTP messages.     
         */
        interface httpParse { (httpStream: String, topHeaders?: String, partial?: boolean): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/xhrMultiPart.html
         *
         * 
         * @param args     
         */
        interface xhrMultiPart { (args: Object): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/xhrWindowNamePlugin.html
         *
         * Adds the windowName transport as an XHR plugin for the given site. See
         * dojox.io.windowName for more information on the transport.
         * 
         * @param url Url prefix of the site which can handle windowName requests.     
         * @param httpAdapter       OptionalThis allows for adapting HTTP requests that could not otherwise besent with window.name, so you can use a convention for headers and PUT/DELETE methods.     
         * @param trusted       Optional    
         */
        interface xhrWindowNamePlugin { (url: String, httpAdapter?: Function, trusted?: boolean): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/xhrScriptPlugin.html
         *
         * Adds the script transport (JSONP) as an XHR plugin for the given site. See
         * dojox.io.script for more information on the transport. Note, that JSONP
         * is not a secure transport, by loading data from a third-party site using JSONP
         * the site has full access to your JavaScript environment.
         * 
         * @param url Url prefix of the site which can handle JSONP requests.     
         * @param callbackParamName     
         * @param httpAdapter       OptionalThis allows for adapting HTTP requests that could not otherwise besent with JSONP, so you can use a convention for headers and PUT/DELETE methods.     
         */
        interface xhrScriptPlugin { (url: String, callbackParamName: String, httpAdapter?: Function): void }
        module proxy {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/proxy/xip.html
             *
             * Object that implements the iframe handling for XMLHttpRequest
             * IFrame Proxying.
             * 
             * Do not use this object directly. See the Dojo Book page
             * on XMLHttpRequest IFrame Proxying:
             * http://dojotoolkit.org/book/dojo-book-0-4/part-5-connecting-pieces/i-o/cross-domain-xmlhttprequest-using-iframe-proxy
             * Usage of XHR IFrame Proxying does not work from local disk in Safari.
             * 
             */
            interface xip {
                /**
                 * 
                 */
                urlLimit: number;
                /**
                 * 
                 */
                xipClientUrl: Object;
                /**
                 * 
                 */
                createFacade(): any;
                /**
                 * 
                 * @param stateId             
                 */
                destroyState(stateId: String): void;
                /**
                 * 
                 * @param frag             
                 */
                fragmentReceived(frag: any): void;
                /**
                 * HTML5 document messaging endpoint. Unpack the event to see if we want to use it.
                 * 
                 * @param evt             
                 */
                fragmentReceivedEvent(evt: any): void;
                /**
                 * 
                 * @param stateId             
                 */
                frameLoaded(stateId: String): void;
                /**
                 * 
                 * @param stateId             
                 * @param cmd             
                 * @param message             
                 */
                makeServerUrl(stateId: any, cmd: any, message: any): String;
                /**
                 * 
                 * @param stateId             
                 * @param urlEncodedData             
                 */
                receive(stateId: String, urlEncodedData: String): void;
                /**
                 * starts the xdomain request using the provided facade.
                 * This method first does some init work, then delegates to _realSend.
                 * 
                 * @param facade             
                 */
                send(facade: Object): any;
                /**
                 * 
                 * @param stateId             
                 * @param encodedData             
                 */
                sendRequest(stateId: any, encodedData: any): void;
                /**
                 * 
                 * @param stateId             
                 */
                sendRequestPart(stateId: any): void;
                /**
                 * 
                 * @param stateId             
                 */
                sendRequestStart(stateId: any): void;
                /**
                 * 
                 * @param stateId             
                 * @param cmd             
                 * @param message             
                 */
                setServerUrl(stateId: any, cmd: any, message: any): void;
                /**
                 * 
                 * @param encodedMessage             
                 */
                unpackMessage(encodedMessage: any): Object;
                /**
                 * XMLHttpRequest facade object used by dojox.io.proxy.xip.
                 * 
                 * Do not use this object directly. See the Dojo Book page
                 * on XMLHttpRequest IFrame Proxying:
                 * http://dojotoolkit.org/book/dojo-book-0-4/part-5-connecting-pieces/i-o/cross-domain-xmlhttprequest-using-iframe-proxy
                 * 
                 * @param ifpServerUrl             
                 */
                XhrIframeFacade(ifpServerUrl: any): void;
            }
            module xip {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/proxy/xip._state.html
                 *
                 * 
                 */
                interface _state {
                }
            }

        }

        module xhrPlugins {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/scriptFrame.html
         *
         * 
         */
        interface scriptFrame {
        }
        module scriptFrame {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/scriptFrame._loadedIds.html
             *
             * 
             */
            interface _loadedIds {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/scriptFrame._waiters.html
             *
             * 
             */
            interface _waiters {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/io/windowName.html
         *
         * 
         */
        interface windowName {
            /**
             * Provides secure cross-domain request capability.
             * Sends a request using an iframe (POST or GET) and reads the response through the
             * frame's window.name.
             * In order to provide a windowname transport accessible resources/web services, a server
             * should check for the presence of a parameter window.name=true and if a request includes
             * such a parameter, it should respond to the request with an HTML
             * document that sets it's window.name to the string that is to be
             * delivered to the client. For example, if a client makes a window.name request like:
             * 
             * http://othersite.com/greeting?windowname=true
             * And server wants to respond to the client with "Hello", it should return an html page:
             * 
             * <html><script type="text/javascript">
             * window.name="Hello";
             * </script></html>
             * One can provide XML or JSON data by simply quoting the data as a string, and parsing the data
             * 
             * on the client.
             * If you use the authorization window.name protocol, the requester should include an
             * authElement element in the args, and a request will be created like:
             * 
             * http://othersite.com/greeting?windowname=auth
             * And the server can respond like this:
             * 
             * <html><script type="text/javascript">
             * var loc = window.name;
             * authorizationButton.onclick = function(){
             *     window.name="Hello";
             *     location = loc;
             * };
             * </script></html>
             * When using windowName from a XD Dojo build, make sure to set the
             * 
             * dojo.dojoBlankHtmlUrl property to a local URL.
             * 
             * @param method The method to use to send the request, GET or POST             
             * @param args See dojo.xhrargs.authElement: DOMNode?By providing an authElement, this indicates that windowName should use theauthorized window.name protocol, relying onthe loaded XD resource to return to the provided return URL on completionof authorization/authentication. The provided authElement will be used to placethe iframe in, so the user can interact with the server resource for authenticationand/or authorization to access the resource.args.onAuthLoad: Function?When using authorized access to resources, this function will be called when theauthorization page has been loaded. (When authorization is actually completed,the deferred callback function is called with the result). The primary use for thisis to make the authElement visible to the user once the resource has loaded(this can be preferable to showing the iframe while the resource is loadingsince it may not require authorization, it may simply return the resource).             
             */
            send(method: String, args: Object): any;
        }
    }

}

declare module "dojox/io/httpParse" {
    var exp: dojox.io.httpParse
    export=exp;
}
declare module "dojox/io/xhrMultiPart" {
    var exp: dojox.io.xhrMultiPart
    export=exp;
}
declare module "dojox/io/xhrWindowNamePlugin" {
    var exp: dojox.io.xhrWindowNamePlugin
    export=exp;
}
declare module "dojox/io/xhrScriptPlugin" {
    var exp: dojox.io.xhrScriptPlugin
    export=exp;
}
declare module "dojox/io/windowName" {
    var exp: dojox.io.windowName
    export=exp;
}
declare module "dojox/io/scriptFrame" {
    var exp: dojox.io.scriptFrame
    export=exp;
}
declare module "dojox/io/scriptFrame._loadedIds" {
    var exp: dojox.io.scriptFrame._loadedIds
    export=exp;
}
declare module "dojox/io/scriptFrame._waiters" {
    var exp: dojox.io.scriptFrame._waiters
    export=exp;
}
declare module "dojox/io/proxy/xip" {
    var exp: dojox.io.proxy.xip
    export=exp;
}
declare module "dojox/io/proxy/xip._state" {
    var exp: dojox.io.proxy.xip._state
    export=exp;
}
