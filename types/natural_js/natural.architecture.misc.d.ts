declare namespace NA {
    namespace Options {
        /**
         * Options interface extending the JQuery.Ajax.AjaxSettingsBase interface for making `N.comm.request` with additional settings.
         */
        interface Request extends Omit<JQuery.Ajax.AjaxSettingsBase<any>, "success" | "error" | "complete"> {
            /**
             * A string containing the URL to which the request is sent.
             */
            url: string;
            /**
             * When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent). As of jQuery 1.6 you can pass false to tell jQuery to not set any content type header. Note: The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force the browser to change the encoding. Note: For cross-domain requests, setting the content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server.
             */
            contentType?: string;
            /**
             * The MIME type of content that is used to submit the form to the server. Possible values are:
             *
             * "application/x-www-form-urlencoded": The initial default type.
             *
             * "multipart/form-data": The type that allows file `<input>` element(s) to upload file data.
             *
             * "text/plain": A type introduced in HTML5.
             */
            enctype?: Objects.Request.Enctype;
            /**
             * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a POST is made to a URL that has already been requested by a GET.
             */
            cache?: boolean;
            /**
             * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async: false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback options instead of the corresponding methods of the jqXHR object such as jqXHR.done().
             *
             * @deprecated
             */
            async?: boolean;
            /**
             * An alias for method. You should use type if you're using versions of jQuery prior to 1.9.0.
             */
            type?: Objects.Request.HttpMethod;
            /**
             * Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the traditional setting (described below).
             */
            data?: JQuery.PlainObject | string;
            /**
             * The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string). The available types (and the result passed as the first argument to your success callback) are:
             *
             * "xml": Returns an XML document that can be processed via jQuery.
             *
             * "html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.
             *
             * "script": Evaluates the response as JavaScript and returns it as plain text. Disables caching by appending a query string parameter, _=[TIMESTAMP], to the URL unless the cache option is set to true. Note: This will turn POSTs into GETs for remote-domain requests.
             *
             * "json": Evaluates the response as JSON and returns a JavaScript object. Cross-domain "json" requests are converted to "jsonp" unless the request includes jsonp: false in its request options. The JSON data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. As of jQuery 1.9, an empty response is also rejected; the server should return a response of null or {} instead. (See json.org for more information on proper JSON formatting.)
             *
             * "jsonp": Loads in a JSON block using JSONP. Adds an extra "?callback=?" to the end of your URL to specify the callback. Disables caching by appending a query string parameter, "_=[TIMESTAMP]", to the URL unless the cache option is set to true.
             *
             * "text": A plain text string.
             *
             * multiple, space-separated values: As of jQuery 1.5, jQuery can convert a dataType from what it received in the Content-Type header to what you require. For example, if you want a text response to be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it received as text, and interpreted by jQuery as XML: "jsonp text xml". Similarly, a shorthand string such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from jsonp to text, and then from text to xml.
             */
            dataType?: Objects.Request.DataType;
            /**
             * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. This allows, for example, server-side redirection to another domain.
             */
            crossDomain?: boolean;
            /**
             * The browser's `location.href` value when requested.
             */
            referrer?: string;
            /**
             * If set to `true`, the parameter object specified as an argument of the N function in `N().comm` can be specified as an array type.
             *
             * > When using Communicator with `N(params).comm(url).submit()`, if the object type of params is array and the dataIsArray option is set to false, only the first object of array is transmitted.
             * The cause of this problem is that if you call the get function after setting the argument of the jQuery function to `array(jQuery([{}]))` or `object($({}))`, both return `array([{}])`.
             * Even if it is inconvenient, when transmitting an array to the server, set dataIsArray to true or use an array in an object.
             *
             * > When `Communicator` is used with `N.comm(params, url).submit()`, even if the dataIsArray option is not set to true, params is not created as a jQuery object, so it is sent as an array type.
             *
             * > Applied after `Natural-ARCHITECTURE v0.8.1.4` version.
             */
            dataIsArray?: boolean;
            /**
             * If set to `false`, the response will not be blocked even if the location.href when making a request to the server and the location.href when receiving a response from the server are different.
             *
             * > If the server response is blocked for unknown reasons, test this option by setting it to false.
             */
            urlSync?: boolean;
            /**
             * If set to `true`, the loaded page will be appended to the element specified by the `target` option rather than overwritten.
             */
            append?: boolean;
            /**
             * Specifies the element into which to insert HTML content.
             *
             * > When Communicator is used with `N(".block").comm("page.html").submit()`, the `N("#block")` element object is specified as the target property value.
             */
            target?: NJS<HTMLElement[]>;
        }
    }

    namespace Callbacks {
        namespace Communicator {
            interface Submit {
                (
                    this: NA.Communicator,
                    data?: NC.JSONObject | NC.JSONObject[] | NC.Primitive | object | object[] | NA.Controller,
                    request?: NA.Request,
                ): void;
            }
            interface Error {
                (
                    this: NA.Communicator,
                    xhr: JQuery.jqXHR,
                    textStatus: JQuery.Ajax.TextStatus,
                    e: Error,
                    request: NA.Request,
                    submitCallback: Submit,
                ): void;
            }
        }

        namespace Controller {
            interface OnOpen {
                (this: NA.Objects.Controller.Object, onOpenData?: any): void;
            }
        }

        namespace Request {
            interface Reload {
                (this: NA.Communicator, html?: string | NA.Controller, request?: NA.Request): void;
            }
        }
    }

    namespace Objects {
        namespace Request {
            /**
             * Enum representing different encoding types for form submissions.
             *
             * The `Enctype` enum provides a set of constants that define the encoding type
             * used when submitting form data. This is used in the `enctype` attribute of HTML forms.
             *
             * Enctype.URLENCODED - Represents the MIME type `application/x-www-form-urlencoded`.
             * This is the default encoding type that is used by forms.
             *
             * Enctype.MULTIPART - Represents the MIME type `multipart/form-data`.
             * This encoding type is used when the form includes file uploads.
             *
             * Enctype.PLAIN - Represents the MIME type `text/plain`.
             * This encoding type sends data without any encoding for the key-value pairs.
             */
            /* eslint-disable-next-line @definitelytyped/no-const-enum */
            const enum Enctype {
                URLENCODED = "application/x-www-form-urlencoded",
                MULTIPART = "multipart/form-data",
                PLAIN = "text/plain",
            }

            /**
             * An enumeration for different types of data formats that can be used.
             */
            /* eslint-disable-next-line @definitelytyped/no-const-enum */
            const enum DataType {
                JSON = "json",
                XML = "xml",
                SCRIPT = "script",
                HTML = "html",
                TEXT = "text",
                JSONP = "jsonp",
            }

            /**
             * Enum for HTTP methods.
             *
             * This enum provides a collection of standard HTTP methods used in network communication.
             * Each key in the enum represents a type of request that can be made to a web server.
             *
             * - POST: Used to submit data to be processed to a specified resource.
             * - GET: Requests a representation of the specified resource.
             * - PUT: Replaces all current representations of the target resource with the request payload.
             * - DELETE: Deletes the specified resource.
             * - HEAD: Asks for a response identical to a GET request, but without the response body.
             * - OPTIONS: Used to describe the communication options for the target resource.
             * - TRACE: Performs a message loop-back test along the path to the target resource.
             * - CONNECT: Establishes a tunnel to the server identified by the target resource.
             * - PATCH: Used to apply partial modifications to a resource.
             */
            /* eslint-disable-next-line @definitelytyped/no-const-enum */
            const enum HttpMethod {
                POST = "POST",
                GET = "GET",
                PUT = "PUT",
                DELETE = "DELETE",
                HEAD = "HEAD",
                OPTIONS = "OPTIONS",
                TRACE = "TRACE",
                CONNECT = "CONNECT",
                PATCH = "PATCH",
            }
        }

        namespace Controller {
            interface InitFunction {
                (this: Object, view: NJS<HTMLElement[]>, request: NA.Request): void;
            }

            interface BaseObject {
                [key: string]: any;
                /**
                 * The initializer function that is called to set up the initial state or configuration.
                 * This function is optional, and if provided, it should follow the signature defined by `InitFunction`.
                 */
                init?: InitFunction;
                /**
                 * View element.
                 *
                 * > Same as the first argument of the init function.
                 */
                view?: NJS<HTMLElement[]>;
                /**
                 * Instance of the Communicator.request object.
                 *
                 * > Same as the second argument of the init function.
                 */
                request?: NA.Request;
                /**
                 * If the popup page is called by N.popup or N.tab components, this is the instance of the calling component.
                 * With this instance, you can control the parent page.
                 */
                caller?: NU.Popup & NU.Tab; // FIXME
                /**
                 * If the popup page is called by N.popup or N.tab components, this is the controller object instance of the parent page.
                 *
                 * With this instance, you can control the parent page.
                 *
                 * > The opener attribute should be specified with the Controller object of the parent page when creating an instance of N.popup or N.tab components.
                 */
                opener?: BaseObject & NT.Objects.Controller.Object;
                /**
                 * This is a function implementation of the onOpen option specified as a string in pop-ups and tabs.
                 */
                onOpen?: Callbacks.Controller.OnOpen;
            }

            type Object = BaseObject & (NT.Objects.Controller.InitialObject | {});
        }

        namespace Config {
            interface FilterConfig {
                beforeInitFilters: object[];
                afterInitFilters: object[];
                beforeSendFilters: object[];
                successFilters: object[];
                errorFilters: object[];
                completeFilters: object[];
            }
        }
    }
}
