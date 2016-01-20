// Type definitions for Express 4.x
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import * as express from "express";
    var app = express();

 =============================================== */

/// <reference path="../node/node.d.ts" />
/// <reference path="../serve-static/serve-static.d.ts" />

declare module Express {

    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/borisyankov/DefinitelyTyped/blob/master/method-override/method-override.d.ts)
    export interface Request { }
    export interface Response { }
    export interface Application { }
}


declare module "express" {
    import * as http from "http";
    import * as serveStatic from "serve-static";

    function e(): e.Express;

    module e {
        interface IRoute {
            path: string;
            stack: any;
            all(...handler: RequestHandler[]): IRoute;
            get(...handler: RequestHandler[]): IRoute;
            post(...handler: RequestHandler[]): IRoute;
            put(...handler: RequestHandler[]): IRoute;
            delete(...handler: RequestHandler[]): IRoute;
            patch(...handler: RequestHandler[]): IRoute;
            options(...handler: RequestHandler[]): IRoute;
            head(...handler: RequestHandler[]): IRoute;
        }

        interface IRouterMatcher<T> {
            (name: string|RegExp, ...handlers: RequestHandler[]): T;
        }

        interface IRouter<T> extends RequestHandler {
            /**
             * Map the given param placeholder `name`(s) to the given callback(s).
             *
             * Parameter mapping is used to provide pre-conditions to routes
             * which use normalized placeholders. For example a _:user_id_ parameter
             * could automatically load a user's information from the database without
             * any additional code,
             *
             * The callback uses the samesignature as middleware, the only differencing
             * being that the value of the placeholder is passed, in this case the _id_
             * of the user. Once the `next()` function is invoked, just like middleware
             * it will continue on to execute the route, or subsequent parameter functions.
             *
             *      app.param('user_id', function(req, res, next, id){
             *        User.find(id, function(err, user){
             *          if (err) {
             *            next(err);
             *          } else if (user) {
             *            req.user = user;
             *            next();
             *          } else {
             *            next(new Error('failed to load user'));
             *          }
             *        });
             *      });
             *
             * @param name
             * @param fn
             */
            param(name: string, handler: RequestParamHandler): T;
            param(name: string, matcher: RegExp): T;
            param(name: string, mapper: (param: any) => any): T;
            // Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param() API
            param(callback: (name: string, matcher: RegExp) => RequestParamHandler): T;

            /**
             * Special-cased "all" method, applying the given route `path`,
             * middleware, and callback to _every_ HTTP method.
             *
             * @param path
             * @param fn
             */
            all: IRouterMatcher<T>;
            get: IRouterMatcher<T>;
            post: IRouterMatcher<T>;
            put: IRouterMatcher<T>;
            delete: IRouterMatcher<T>;
            patch: IRouterMatcher<T>;
            options: IRouterMatcher<T>;
            head: IRouterMatcher<T>;

            route(path: string): IRoute;

            use(...handler: RequestHandler[]): T;
            use(handler: ErrorRequestHandler): T;
            use(path: string, ...handler: RequestHandler[]): T;
            use(path: string, handler: ErrorRequestHandler): T;
            use(path: string[], ...handler: RequestHandler[]): T;
            use(path: string[], handler: ErrorRequestHandler): T;
            use(path: RegExp, ...handler: RequestHandler[]): T;
            use(path: RegExp, handler: ErrorRequestHandler): T;
            use(path:string, router:Router): T;
        }

        export function Router(options?: any): Router;

        export interface Router extends IRouter<Router> {}

        interface CookieOptions {
            maxAge?: number;
            signed?: boolean;
            expires?: Date;
            httpOnly?: boolean;
            path?: string;
            domain?: string;
            secure?: boolean;
        }

        interface Errback { (err: Error): void; }

        interface Request extends http.ServerRequest, Express.Request {

            /**
             * Return request header.
             *
             * The `Referrer` header field is special-cased,
             * both `Referrer` and `Referer` are interchangeable.
             *
             * Examples:
             *
             *     req.get('Content-Type');
             *     // => "text/plain"
             *
             *     req.get('content-type');
             *     // => "text/plain"
             *
             *     req.get('Something');
             *     // => undefined
             *
             * Aliased as `req.header()`.
             *
             * @param name
             */
            get (name: string): string;

            header(name: string): string;

            headers: { [key: string]: string; };

            /**
             * Check if the given `type(s)` is acceptable, returning
             * the best match when true, otherwise `undefined`, in which
             * case you should respond with 406 "Not Acceptable".
             *
             * The `type` value may be a single mime type string
             * such as "application/json", the extension name
             * such as "json", a comma-delimted list such as "json, html, text/plain",
             * or an array `["json", "html", "text/plain"]`. When a list
             * or array is given the _best_ match, if any is returned.
             *
             * Examples:
             *
             *     // Accept: text/html
             *     req.accepts('html');
             *     // => "html"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('html');
             *     // => "html"
             *     req.accepts('text/html');
             *     // => "text/html"
             *     req.accepts('json, text');
             *     // => "json"
             *     req.accepts('application/json');
             *     // => "application/json"
             *
             *     // Accept: text/*, application/json
             *     req.accepts('image/png');
             *     req.accepts('png');
             *     // => undefined
             *
             *     // Accept: text/*;q=.5, application/json
             *     req.accepts(['html', 'json']);
             *     req.accepts('html, json');
             *     // => "json"
             */
            accepts(type: string): string;

            accepts(type: string[]): string;

            /**
             * Check if the given `charset` is acceptable,
             * otherwise you should respond with 406 "Not Acceptable".
             *
             * @param charset
             */
            acceptsCharset(charset: string): boolean;

            /**
             * Check if the given `lang` is acceptable,
             * otherwise you should respond with 406 "Not Acceptable".
             *
             * @param lang
             */
            acceptsLanguage(lang: string): boolean;

            /**
             * Parse Range header field,
             * capping to the given `size`.
             *
             * Unspecified ranges such as "0-" require
             * knowledge of your resource length. In
             * the case of a byte range this is of course
             * the total number of bytes. If the Range
             * header field is not given `null` is returned,
             * `-1` when unsatisfiable, `-2` when syntactically invalid.
             *
             * NOTE: remember that ranges are inclusive, so
             * for example "Range: users=0-3" should respond
             * with 4 users when available, not 3.
             *
             * @param size
             */
            range(size: number): any[];

            /**
             * Return an array of Accepted media types
             * ordered from highest quality to lowest.
             */
            accepted: MediaType[];

            /**
             * Return an array of Accepted languages
             * ordered from highest quality to lowest.
             *
             * Examples:
             *
             *     Accept-Language: en;q=.5, en-us
             *     ['en-us', 'en']
             */
            acceptedLanguages: any[];

            /**
             * Return an array of Accepted charsets
             * ordered from highest quality to lowest.
             *
             * Examples:
             *
             *     Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8
             *     ['unicode-1-1', 'iso-8859-5']
             */
            acceptedCharsets: any[];

            /**
             * Return the value of param `name` when present or `defaultValue`.
             *
             *  - Checks route placeholders, ex: _/user/:id_
             *  - Checks body params, ex: id=12, {"id":12}
             *  - Checks query string params, ex: ?id=12
             *
             * To utilize request bodies, `req.body`
             * should be an object. This can be done by using
             * the `connect.bodyParser()` middleware.
             *
             * @param name
             * @param defaultValue
             */
            param(name: string, defaultValue?: any): string;

            /**
             * Check if the incoming request contains the "Content-Type"
             * header field, and it contains the give mime `type`.
             *
             * Examples:
             *
             *      // With Content-Type: text/html; charset=utf-8
             *      req.is('html');
             *      req.is('text/html');
             *      req.is('text/*');
             *      // => true
             *
             *      // When Content-Type is application/json
             *      req.is('json');
             *      req.is('application/json');
             *      req.is('application/*');
             *      // => true
             *
             *      req.is('html');
             *      // => false
             *
             * @param type
             */
            is(type: string): boolean;

            /**
             * Return the protocol string "http" or "https"
             * when requested with TLS. When the "trust proxy"
             * setting is enabled the "X-Forwarded-Proto" header
             * field will be trusted. If you're running behind
             * a reverse proxy that supplies https for you this
             * may be enabled.
             */
            protocol: string;

            /**
             * Short-hand for:
             *
             *    req.protocol == 'https'
             */
            secure: boolean;

            /**
             * Return the remote address, or when
             * "trust proxy" is `true` return
             * the upstream addr.
             */
            ip: string;

            /**
             * When "trust proxy" is `true`, parse
             * the "X-Forwarded-For" ip address list.
             *
             * For example if the value were "client, proxy1, proxy2"
             * you would receive the array `["client", "proxy1", "proxy2"]`
             * where "proxy2" is the furthest down-stream.
             */
            ips: string[];

            /**
             * Return subdomains as an array.
             *
             * Subdomains are the dot-separated parts of the host before the main domain of
             * the app. By default, the domain of the app is assumed to be the last two
             * parts of the host. This can be changed by setting "subdomain offset".
             *
             * For example, if the domain is "tobi.ferrets.example.com":
             * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
             * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
             */
            subdomains: string[];

            /**
             * Short-hand for `url.parse(req.url).pathname`.
             */
            path: string;

            /**
             * Parse the "Host" header field hostname.
             */
            hostname: string;

            /**
             * @deprecated Use hostname instead.
             */
            host: string;

            /**
             * Check if the request is fresh, aka
             * Last-Modified and/or the ETag
             * still match.
             */
            fresh: boolean;

            /**
             * Check if the request is stale, aka
             * "Last-Modified" and / or the "ETag" for the
             * resource has changed.
             */
            stale: boolean;

            /**
             * Check if the request was an _XMLHttpRequest_.
             */
            xhr: boolean;

            //body: { username: string; password: string; remember: boolean; title: string; };
            body: any;

            //cookies: { string; remember: boolean; };
            cookies: any;

            method: string;

            params: any;

            user: any;

            authenticatedUser: any;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            query: any;

            route: any;

            signedCookies: any;

            originalUrl: string;

            url: string;
            
            baseUrl: string;
            
            app: Application;
        }

        interface MediaType {
            value: string;
            quality: number;
            type: string;
            subtype:  string;
        }

        interface Send {
            (status: number, body?: any): Response;
            (body: any): Response;
        }

        interface Response extends http.ServerResponse, Express.Response {
            /**
             * Set status `code`.
             *
             * @param code
             */
            status(code: number): Response;

            /**
             * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
             * @link http://expressjs.com/4x/api.html#res.sendStatus
             *
             * Examples:
             *
             *    res.sendStatus(200); // equivalent to res.status(200).send('OK')
             *    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
             *    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
             *    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
             *
             * @param code
             */
            sendStatus(code: number): Response;

            /**
             * Set Link header field with the given `links`.
             *
             * Examples:
             *
             *    res.links({
             *      next: 'http://api.example.com/users?page=2',
             *      last: 'http://api.example.com/users?page=5'
             *    });
             *
             * @param links
             */
            links(links: any): Response;

            /**
             * Send a response.
             *
             * Examples:
             *
             *     res.send(new Buffer('wahoo'));
             *     res.send({ some: 'json' });
             *     res.send('<p>some html</p>');
             *     res.send(404, 'Sorry, cant find that');
             *     res.send(404);
             */
            send: Send;

            /**
             * Send JSON response.
             *
             * Examples:
             *
             *     res.json(null);
             *     res.json({ user: 'tj' });
             *     res.json(500, 'oh noes!');
             *     res.json(404, 'I dont have that');
             */
            json: Send;

            /**
             * Send JSON response with JSONP callback support.
             *
             * Examples:
             *
             *     res.jsonp(null);
             *     res.jsonp({ user: 'tj' });
             *     res.jsonp(500, 'oh noes!');
             *     res.jsonp(404, 'I dont have that');
             */
            jsonp: Send;

            /**
             * Transfer the file at the given `path`.
             *
             * Automatically sets the _Content-Type_ response header field.
             * The callback `fn(err)` is invoked when the transfer is complete
             * or when an error occurs. Be sure to check `res.sentHeader`
             * if you wish to attempt responding, as the header and some data
             * may have already been transferred.
             *
             * Options:
             *
             *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
             *   - `root`     root directory for relative filenames
             *   - `headers`  object of headers to serve with file
             *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
             *
             * Other options are passed along to `send`.
             *
             * Examples:
             *
             *  The following example illustrates how `res.sendFile()` may
             *  be used as an alternative for the `static()` middleware for
             *  dynamic situations. The code backing `res.sendFile()` is actually
             *  the same code, so HTTP cache support etc is identical.
             *
             *     app.get('/user/:uid/photos/:file', function(req, res){
             *       var uid = req.params.uid
             *         , file = req.params.file;
             *
             *       req.user.mayViewFilesFrom(uid, function(yes){
             *         if (yes) {
             *           res.sendFile('/uploads/' + uid + '/' + file);
             *         } else {
             *           res.send(403, 'Sorry! you cant see that.');
             *         }
             *       });
             *     });
             *
             * @api public
             */
            sendFile(path: string): void;
            sendFile(path: string, options: any): void;
            sendFile(path: string, fn: Errback): void;
            sendFile(path: string, options: any, fn: Errback): void;

            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, options: any): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, fn: Errback): void;
            /**
             * @deprecated Use sendFile instead.
             */
            sendfile(path: string, options: any, fn: Errback): void;

            /**
             * Transfer the file at the given `path` as an attachment.
             *
             * Optionally providing an alternate attachment `filename`,
             * and optional callback `fn(err)`. The callback is invoked
             * when the data transfer is complete, or when an error has
             * ocurred. Be sure to check `res.headerSent` if you plan to respond.
             *
             * This method uses `res.sendfile()`.
             */
            download(path: string): void;
            download(path: string, filename: string): void;
            download(path: string, fn: Errback): void;
            download(path: string, filename: string, fn: Errback): void;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            contentType(type: string): Response;

            /**
             * Set _Content-Type_ response header with `type` through `mime.lookup()`
             * when it does not contain "/", or set the Content-Type to `type` otherwise.
             *
             * Examples:
             *
             *     res.type('.html');
             *     res.type('html');
             *     res.type('json');
             *     res.type('application/json');
             *     res.type('png');
             *
             * @param type
             */
            type(type: string): Response;

            /**
             * Respond to the Acceptable formats using an `obj`
             * of mime-type callbacks.
             *
             * This method uses `req.accepted`, an array of
             * acceptable types ordered by their quality values.
             * When "Accept" is not present the _first_ callback
             * is invoked, otherwise the first match is used. When
             * no match is performed the server responds with
             * 406 "Not Acceptable".
             *
             * Content-Type is set for you, however if you choose
             * you may alter this within the callback using `res.type()`
             * or `res.set('Content-Type', ...)`.
             *
             *    res.format({
             *      'text/plain': function(){
             *        res.send('hey');
             *      },
             *
             *      'text/html': function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      'appliation/json': function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * In addition to canonicalized MIME types you may
             * also use extnames mapped to these types:
             *
             *    res.format({
             *      text: function(){
             *        res.send('hey');
             *      },
             *
             *      html: function(){
             *        res.send('<p>hey</p>');
             *      },
             *
             *      json: function(){
             *        res.send({ message: 'hey' });
             *      }
             *    });
             *
             * By default Express passes an `Error`
             * with a `.status` of 406 to `next(err)`
             * if a match is not made. If you provide
             * a `.default` callback it will be invoked
             * instead.
             *
             * @param obj
             */
            format(obj: any): Response;

            /**
             * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
             *
             * @param filename
             */
            attachment(filename?: string): Response;

            /**
             * Set header `field` to `val`, or pass
             * an object of header fields.
             *
             * Examples:
             *
             *    res.set('Foo', ['bar', 'baz']);
             *    res.set('Accept', 'application/json');
             *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
             *
             * Aliased as `res.header()`.
             */
            set(field: any): Response;
            set(field: string, value?: string): Response;

            header(field: any): Response;
            header(field: string, value?: string): Response;

            // Property indicating if HTTP headers has been sent for the response.
            headersSent: boolean;

            /**
             * Get value for header `field`.
             *
             * @param field
             */
            get (field: string): string;

            /**
             * Clear cookie `name`.
             *
             * @param name
             * @param options
             */
            clearCookie(name: string, options?: any): Response;

            /**
             * Set cookie `name` to `val`, with the given `options`.
             *
             * Options:
             *
             *    - `maxAge`   max-age in milliseconds, converted to `expires`
             *    - `signed`   sign the cookie
             *    - `path`     defaults to "/"
             *
             * Examples:
             *
             *    // "Remember Me" for 15 minutes
             *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
             *
             *    // save as above
             *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
             */
            cookie(name: string, val: string, options: CookieOptions): Response;
            cookie(name: string, val: any, options: CookieOptions): Response;
            cookie(name: string, val: any): Response;

            /**
             * Set the location header to `url`.
             *
             * The given `url` can also be the name of a mapped url, for
             * example by default express supports "back" which redirects
             * to the _Referrer_ or _Referer_ headers or "/".
             *
             * Examples:
             *
             *    res.location('/foo/bar').;
             *    res.location('http://example.com');
             *    res.location('../login'); // /blog/post/1 -> /blog/login
             *
             * Mounting:
             *
             *   When an application is mounted and `res.location()`
             *   is given a path that does _not_ lead with "/" it becomes
             *   relative to the mount-point. For example if the application
             *   is mounted at "/blog", the following would become "/blog/login".
             *
             *      res.location('login');
             *
             *   While the leading slash would result in a location of "/login":
             *
             *      res.location('/login');
             *
             * @param url
             */
            location(url: string): Response;

            /**
             * Redirect to the given `url` with optional response `status`
             * defaulting to 302.
             *
             * The resulting `url` is determined by `res.location()`, so
             * it will play nicely with mounted apps, relative paths,
             * `"back"` etc.
             *
             * Examples:
             *
             *    res.redirect('/foo/bar');
             *    res.redirect('http://example.com');
             *    res.redirect(301, 'http://example.com');
             *    res.redirect('http://example.com', 301);
             *    res.redirect('../login'); // /blog/post/1 -> /blog/login
             */
            redirect(url: string): void;
            redirect(status: number, url: string): void;
            redirect(url: string, status: number): void;

            /**
             * Render `view` with the given `options` and optional callback `fn`.
             * When a callback function is given a response will _not_ be made
             * automatically, otherwise a response of _200_ and _text/html_ is given.
             *
             * Options:
             *
             *  - `cache`     boolean hinting to the engine it should cache
             *  - `filename`  filename of the view being rendered
             */
            render(view: string, options?: Object, callback?: (err: Error, html: string) => void ): void;
            render(view: string, callback?: (err: Error, html: string) => void ): void;

            locals: any;

            charset: string;
        }

        interface ErrorRequestHandler {
            (err: any, req: Request, res: Response, next: Function): any;
        }

        interface RequestHandler {
            (req: Request, res: Response, next: Function): any;
        }

        interface Handler extends RequestHandler {}

        interface RequestParamHandler {
            (req: Request, res: Response, next: Function, param: any): any;
        }

        interface Application extends IRouter<Application>, Express.Application {
            /**
             * Initialize the server.
             *
             *   - setup default configuration
             *   - setup default middleware
             *   - setup route reflection methods
             */
            init(): void;

            /**
             * Initialize application configuration.
             */
            defaultConfiguration(): void;

            /**
             * Register the given template engine callback `fn`
             * as `ext`.
             *
             * By default will `require()` the engine based on the
             * file extension. For example if you try to render
             * a "foo.jade" file Express will invoke the following internally:
             *
             *     app.engine('jade', require('jade').__express);
             *
             * For engines that do not provide `.__express` out of the box,
             * or if you wish to "map" a different extension to the template engine
             * you may use this method. For example mapping the EJS template engine to
             * ".html" files:
             *
             *     app.engine('html', require('ejs').renderFile);
             *
             * In this case EJS provides a `.renderFile()` method with
             * the same signature that Express expects: `(path, options, callback)`,
             * though note that it aliases this method as `ejs.__express` internally
             * so if you're using ".ejs" extensions you dont need to do anything.
             *
             * Some template engines do not follow this convention, the
             * [Consolidate.js](https://github.com/visionmedia/consolidate.js)
             * library was created to map all of node's popular template
             * engines to follow this convention, thus allowing them to
             * work seamlessly within Express.
             */
            engine(ext: string, fn: Function): Application;

            /**
             * Assign `setting` to `val`, or return `setting`'s value.
             *
             *    app.set('foo', 'bar');
             *    app.get('foo');
             *    // => "bar"
             *    app.set('foo', ['bar', 'baz']);
             *    app.get('foo');
             *    // => ["bar", "baz"]
             *
             * Mounted servers inherit their parent server's settings.
             *
             * @param setting
             * @param val
             */
            set(setting: string, val: any): Application;
            get: {
                (name: string): any; // Getter
                (name: string|RegExp, ...handlers: RequestHandler[]): Application;
            };

            /**
             * Return the app's absolute pathname
             * based on the parent(s) that have
             * mounted it.
             *
             * For example if the application was
             * mounted as "/admin", which itself
             * was mounted as "/blog" then the
             * return value would be "/blog/admin".
             */
            path(): string;

            /**
             * Check if `setting` is enabled (truthy).
             *
             *    app.enabled('foo')
             *    // => false
             *
             *    app.enable('foo')
             *    app.enabled('foo')
             *    // => true
             */
            enabled(setting: string): boolean;

            /**
             * Check if `setting` is disabled.
             *
             *    app.disabled('foo')
             *    // => true
             *
             *    app.enable('foo')
             *    app.disabled('foo')
             *    // => false
             *
             * @param setting
             */
            disabled(setting: string): boolean;

            /**
             * Enable `setting`.
             *
             * @param setting
             */
            enable(setting: string): Application;

            /**
             * Disable `setting`.
             *
             * @param setting
             */
            disable(setting: string): Application;

            /**
             * Configure callback for zero or more envs,
             * when no `env` is specified that callback will
             * be invoked for all environments. Any combination
             * can be used multiple times, in any order desired.
             *
             * Examples:
             *
             *    app.configure(function(){
             *      // executed for all envs
             *    });
             *
             *    app.configure('stage', function(){
             *      // executed staging env
             *    });
             *
             *    app.configure('stage', 'production', function(){
             *      // executed for stage and production
             *    });
             *
             * Note:
             *
             *  These callbacks are invoked immediately, and
             *  are effectively sugar for the following:
             *
             *     var env = process.env.NODE_ENV || 'development';
             *
             *      switch (env) {
             *        case 'development':
             *          ...
             *          break;
             *        case 'stage':
             *          ...
             *          break;
             *        case 'production':
             *          ...
             *          break;
             *      }
             *
             * @param env
             * @param fn
             */
            configure(fn: Function): Application;
            configure(env0: string, fn: Function): Application;
            configure(env0: string, env1: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, env3: string, fn: Function): Application;
            configure(env0: string, env1: string, env2: string, env3: string, env4: string, fn: Function): Application;

            /**
             * Render the given view `name` name with `options`
             * and a callback accepting an error and the
             * rendered template string.
             *
             * Example:
             *
             *    app.render('email', { name: 'Tobi' }, function(err, html){
             *      // ...
             *    })
             *
             * @param name
             * @param options or fn
             * @param fn
             */
            render(name: string, options?: Object, callback?: (err: Error, html: string) => void): void;
            render(name: string, callback: (err: Error, html: string) => void): void;


            /**
             * Listen for connections.
             *
             * A node `http.Server` is returned, with this
             * application (which is a `Function`) as its
             * callback. If you wish to create both an HTTP
             * and HTTPS server you may do so with the "http"
             * and "https" modules as shown here:
             *
             *    var http = require('http')
             *      , https = require('https')
             *      , express = require('express')
             *      , app = express();
             *
             *    http.createServer(app).listen(80);
             *    https.createServer({ ... }, app).listen(443);
             */
            listen(port: number, hostname: string, backlog: number, callback?: Function): http.Server;
            listen(port: number, hostname: string, callback?: Function): http.Server;
            listen(port: number, callback?: Function): http.Server;
            listen(path: string, callback?: Function): http.Server;
            listen(handle: any, listeningListener?: Function): http.Server;

            route(path: string): IRoute;

            router: string;

            settings: any;

            resource: any;

            map: any;

            locals: any;

            /**
             * The app.routes object houses all of the routes defined mapped by the
             * associated HTTP verb. This object may be used for introspection
             * capabilities, for example Express uses this internally not only for
             * routing but to provide default OPTIONS behaviour unless app.options()
             * is used. Your application or framework may also remove routes by
             * simply by removing them from this object.
             */
            routes: any;
        }

        interface Express extends Application {
            /**
             * Framework version.
             */
            version: string;

            /**
             * Expose mime.
             */
            mime: string;

            (): Application;

            /**
            * Create an express application.
            */
            createApplication(): Application;

            createServer(): Application;

            application: any;

            request: Request;

            response: Response;
        }

        var static: typeof serveStatic;
    }

    export = e;
}
