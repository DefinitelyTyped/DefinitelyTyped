// Type definitions for Express 3.1
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE =================== 

    import express = require('express');
    var app = express();

 =============================================== */

/// <reference path="../node/node.d.ts" />

interface Route {
    path: string;

    method: string;

    callbacks: Function[];

    regexp: any;

    /**
    * Check if this route matches `path`, if so
    * populate `.params`.
    */
    match(path: string): boolean;
}
declare var Route: {
    /**
     * Initialize `Route` with the given HTTP `method`, `path`,
     * and an array of `callbacks` and `options`.
     *
     * Options:
     *
     *   - `sensitive`    enable case-sensitive routes
     *   - `strict`       enable strict matching for trailing slashes
     *
     * @param method
     * @param path
     * @param callbacks
     * @param options
     */
    new (method: string, path: string, callbacks: Function[], options: any): Route;
}

interface Handler {
    (req: ExpressServerRequest, res: ExpressServerResponse, next?: Function): void;
}

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


interface ExpressSession {
    /**
     * Update reset `.cookie.maxAge` to prevent
     * the cookie from expiring when the
     * session is still active.
     *
     * @return {Session} for chaining
     * @api public
     */
    touch(): ExpressSession;

    /**
     * Reset `.maxAge` to `.originalMaxAge`.
     */
    resetMaxAge(): ExpressSession;

    /**
     * Save the session data with optional callback `fn(err)`.
     */
    save(fn: Function): ExpressSession;

    /**
     * Re-loads the session data _without_ altering
     * the maxAge properties. Invokes the callback `fn(err)`,
     * after which time if no exception has occurred the
     * `req.session` property will be a new `Session` object,
     * although representing the same session.
     */
    reload(fn: Function): ExpressSession;

    /**
     * Destroy `this` session.
     */
    destroy(fn: Function): ExpressSession;

    /**
     * Regenerate this request's session.
     */
    regenerate(fn: Function): ExpressSession;

    user: any;

    error: string;

    success: string;

    views: any;
}
declare var ExpressSession: {
    /**
     * Create a new `Session` with the given request and `data`.
     */
    new (req: ExpressServerRequest, data: any): ExpressSession;
}

interface ExpressServerRequest {

    session: ExpressSession;

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
    range(size: number): Array;

    /**
     * Return an array of Accepted media types
     * ordered from highest quality to lowest.
     *
     * Examples:
     *
     *     [ { value: 'application/json',
     *         quality: 1,
     *         type: 'application',
     *         subtype: 'json' },
     *       { value: 'text/html',
     *         quality: 0.5,
     *         type: 'text',
     *         subtype: 'html' } ]
     */
    accepted: Array;

    /**
     * Return an array of Accepted languages
     * ordered from highest quality to lowest.
     *
     * Examples:
     *
     *     Accept-Language: en;q=.5, en-us
     *     ['en-us', 'en']
     */
    acceptedLanguages: Array;

    /**
     * Return an array of Accepted charsets
     * ordered from highest quality to lowest.
     *
     * Examples:
     *
     *     Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8
     *     ['unicode-1-1', 'iso-8859-5']
     */
    acceptedCharsets: Array;

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
     * Return basic auth credentials.
     *
     * Examples:
     *
     *    // http://tobi:hello@example.com
     *    req.auth
     *    // => { username: 'tobi', password: 'hello' }
     */
    auth: any;

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

    files: any;

    /**
     * Clear cookie `name`.
     *
     * @param name
     * @param options
     */
    clearCookie(name: string, options?: any): ExpressServerResponse;

    query: any;

    route: any;

    signedCookies: any;

    originalUrl: string;
}

interface ExpressServerResponse {
    /**
     * Set status `code`.
     *
     * @param code
     */
    status(code: number): ExpressServerResponse;

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
    links(links: any): ExpressServerResponse;

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
    send(status: number): ExpressServerResponse;

    send(bodyOrStatus: any): ExpressServerResponse;

    send(status: number, body: any): ExpressServerResponse;


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
    json(status: number): ExpressServerResponse;

    json(bodyOrStatus: any): ExpressServerResponse;

    json(status: number, body: any): ExpressServerResponse;

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
    jsonp(status: number): ExpressServerResponse;

    jsonp(bodyOrStatus: any): ExpressServerResponse;

    jsonp(status: number, body: any): ExpressServerResponse;

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
     *   - `maxAge` defaulting to 0
     *   - `root`   root directory for relative filenames
     *
     * Examples:
     *
     *  The following example illustrates how `res.sendfile()` may
     *  be used as an alternative for the `static()` middleware for
     *  dynamic situations. The code backing `res.sendfile()` is actually
     *  the same code, so HTTP cache support etc is identical.
     *
     *     app.get('/user/:uid/photos/:file', function(req, res){
     *       var uid = req.params.uid
     *         , file = req.params.file;
     *
     *       req.user.mayViewFilesFrom(uid, function(yes){
     *         if (yes) {
     *           res.sendfile('/uploads/' + uid + '/' + file);
     *         } else {
     *           res.send(403, 'Sorry! you cant see that.');
     *         }
     *       });
     *     });
     */
    sendfile(path: string): void;

    sendfile(path: string, options: any): void;

    sendfile(path: string, fn: Errback): void;

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
    contentType(type: string): ExpressServerResponse;

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
    type(type: string): ExpressServerResponse;

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
    format(obj: any): ExpressServerResponse;

    /**
     * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
     *
     * @param filename
     */
    attachment(filename?: string): ExpressServerResponse;

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
    set (field: any): ExpressServerResponse;

    set (field: string, value?: string): ExpressServerResponse;

    header(field: any): ExpressServerResponse;

    header(field: string, value?: string): ExpressServerResponse;

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
    clearCookie(name: string, options?: any): ExpressServerResponse;

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
    cookie(name: string, val: string, options: CookieOptions): ExpressServerResponse;

    cookie(name: string, val: any, options: CookieOptions): ExpressServerResponse;

    cookie(name: string, val: any): ExpressServerResponse;

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
    location(url: string): ExpressServerResponse;

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

    render(view: string, callback: (err: Error, html: string) => void ): void;

    locals: any;

    charset: string;
}

interface ExpressRequestFunction {
    (req: ExpressServerRequest, res: ExpressServerResponse, next: Function): any;
}

interface ExpressApplication {
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
     * Proxy `connect#use()` to apply settings to
     * mounted applications.
    **/
    use(route: string, callback?: Function): ExpressApplication;

    use(route: string, server: ExpressApplication): ExpressApplication;

    use(callback: Function): ExpressApplication;

    use(server: ExpressApplication): ExpressApplication;

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
    engine(ext: string, fn: Function): ExpressApplication;

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
    param(name: string, fn: Function): ExpressApplication;

    param(name: Array, fn: Function): ExpressApplication;

    /**
     * Assign `setting` to `val`, or return `setting`'s value.
     *
     *    app.set('foo', 'bar');
     *    app.get('foo');
     *    // => "bar"
     *
     * Mounted servers inherit their parent server's settings.
     *
     * @param setting
     * @param val
     */
    set (setting: string, val: string): ExpressApplication;

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
    enable(setting: string): ExpressApplication;

    /**
     * Disable `setting`.
     *
     * @param setting
     */
    disable(setting: string): ExpressApplication;

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
    configure(env: string, fn: Function): ExpressApplication;

    configure(env0: string, env1: string, fn: Function): ExpressApplication;

    configure(env0: string, env1: string, env2: string, fn: Function): ExpressApplication;

    configure(env0: string, env1: string, env2: string, env3: string, fn: Function): ExpressApplication;

    configure(env0: string, env1: string, env2: string, env3: string, env4: string, fn: Function): ExpressApplication;

    configure(fn: Function): ExpressApplication;

    /**
     * Special-cased "all" method, applying the given route `path`,
     * middleware, and callback to _every_ HTTP method.
     *
     * @param path
     * @param fn
     */
    all(path: string, fn?: (req: ExpressServerRequest, res: ExpressServerResponse, next: Function) => any): ExpressApplication;

    all(path: string, ...callbacks: Function[]): void;

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
    render(name: string, options?: Object, callback?: (err: Error, html: string) => void ): void;

    render(name: string, callback: (err: Error, html: string) => void ): void;

    get(name: string, ...handlers: ExpressRequestFunction[]): any;
    get(name: RegExp, ...handlers: ExpressRequestFunction[]): any;

    post(name: string, ...handlers: ExpressRequestFunction[]): any;
    post(name: RegExp, ...handlers: ExpressRequestFunction[]): any;

    put(name: string, ...handlers: ExpressRequestFunction[]): any;
    put(name: RegExp, ...handlers: ExpressRequestFunction[]): any;

    del(name: string, ...handlers: ExpressRequestFunction[]): any;
    del(name: RegExp, ...handlers: ExpressRequestFunction[]): any;

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
    listen(port: number, hostname: string, backlog: number, callback: Function): void;

    listen(port: number, callback: Function): void;

    listen(path: string, callback?: Function): void;

    listen(handle: any, listeningListener?: Function): void;

    route: Route;

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

interface Express extends ExpressApplication {
    /**
     * Framework version.
     */
    version: string;

    /**
     * Expose mime.
     */
    mime: string;

    (): ExpressApplication;

    /**
    * Create an express application.
    */
    createApplication(): ExpressApplication;

    createServer(): ExpressApplication;

    application: any;

    request: ExpressServerRequest;

    response: ExpressServerResponse;
}


declare module "express" {
    function express(): Express;

    module express {
        /**
         * Body parser:
         * 
         *   Parse request bodies, supports _application/json_,
         *   _application/x-www-form-urlencoded_, and _multipart/form-data_.
         *
         *   This is equivalent to: 
         *
         *     app.use(connect.json());
         *     app.use(connect.urlencoded());
         *     app.use(connect.multipart());
         *
         * Examples:
         *
         *      connect()
         *        .use(connect.bodyParser())
         *        .use(function(req, res) {
         *          res.end('viewing user ' + req.body.user.name);
         *        });
         *
         *      $ curl -d 'user[name]=tj' http://local/
         *      $ curl -d '{"user":{"name":"tj"}}' -H "Content-Type: application/json" http://local/
         *
         *  View [json](json.html), [urlencoded](urlencoded.html), and [multipart](multipart.html) for more info.
         *
         * @param options
         */
        export function bodyParser(options?: any): Handler;

        /**
         * Error handler:
         *
         * Development error handler, providing stack traces
         * and error message responses for requests accepting text, html,
         * or json.
         *
         * Text:
         *
         *   By default, and when _text/plain_ is accepted a simple stack trace
         *   or error message will be returned.
         *
         * JSON:
         *
         *   When _application/json_ is accepted, connect will respond with
         *   an object in the form of `{ "error": error }`.
         *
         * HTML:
         *
         *   When accepted connect will output a nice html stack trace.
         */
        export function errorHandler(opts?: any): Handler;

        /**
         * Method Override:
         * 
         * Provides faux HTTP method support.
         * 
         * Pass an optional `key` to use when checking for
         * a method override, othewise defaults to _\_method_.
         * The original method is available via `req.originalMethod`.
         *
         * @param key
         */
        export function methodOverride(key?: string): Handler;

        /**
         * Cookie parser:
         *
         * Parse _Cookie_ header and populate `req.cookies`
         * with an object keyed by the cookie names. Optionally
         * you may enabled signed cookie support by passing
         * a `secret` string, which assigns `req.secret` so
         * it may be used by other middleware.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.cookieParser('optional secret string'))
         *       .use(function(req, res, next){
         *         res.end(JSON.stringify(req.cookies));
         *       })
         *
         * @param secret
         */
        export function cookieParser(secret?: string): Handler;

        /**
         * Session:
         * 
         *   Setup session store with the given `options`.
         *
         *   Session data is _not_ saved in the cookie itself, however
         *   cookies are used, so we must use the [cookieParser()](cookieParser.html)
         *   middleware _before_ `session()`.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.cookieParser())
         *       .use(connect.session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}))
         *
         * Options:
         *
         *   - `key` cookie name defaulting to `connect.sid`
         *   - `store` session store instance
         *   - `secret` session cookie is signed with this secret to prevent tampering
         *   - `cookie` session cookie settings, defaulting to `{ path: '/', httpOnly: true, maxAge: null }`
         *   - `proxy` trust the reverse proxy when setting secure cookies (via "x-forwarded-proto")
         *
         * Cookie option:
         *
         *  By default `cookie.maxAge` is `null`, meaning no "expires" parameter is set
         *  so the cookie becomes a browser-session cookie. When the user closes the 
         *  browser the cookie (and session) will be removed.
         *
         * ## req.session
         *
         *  To store or access session data, simply use the request property `req.session`,
         *  which is (generally) serialized as JSON by the store, so nested objects 
         *  are typically fine. For example below is a user-specific view counter:
         *
         *       connect()
         *         .use(connect.favicon())
         *         .use(connect.cookieParser())
         *         .use(connect.session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
         *         .use(function(req, res, next){
         *           var sess = req.session;
         *           if (sess.views) {
         *             res.setHeader('Content-Type', 'text/html');
         *             res.write('<p>views: ' + sess.views + '</p>');
         *             res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
         *             res.end();
         *             sess.views++;
         *           } else {
         *             sess.views = 1;
         *             res.end('welcome to the session demo. refresh!');
         *           }
         *         }
         *       )).listen(3000);
         *
         * ## Session#regenerate()
         *
         *  To regenerate the session simply invoke the method, once complete
         *  a new SID and `Session` instance will be initialized at `req.session`.
         *
         *      req.session.regenerate(function(err){
         *        // will have a new session here
         *      });
         *
         * ## Session#destroy()
         *
         *  Destroys the session, removing `req.session`, will be re-generated next request.
         *
         *      req.session.destroy(function(err){
         *        // cannot access session here
         *      });
         * 
         * ## Session#reload()
         *
         *  Reloads the session data.
         *
         *      req.session.reload(function(err){
         *        // session updated
         *      });
         *
         * ## Session#save()
         *
         *  Save the session.
         *
         *      req.session.save(function(err){
         *        // session saved
         *      });
         *
         * ## Session#touch()
         *
         *   Updates the `.maxAge` property. Typically this is
         *   not necessary to call, as the session middleware does this for you.
         *
         * ## Session#cookie
         *
         *  Each session has a unique cookie object accompany it. This allows
         *  you to alter the session cookie per visitor. For example we can
         *  set `req.session.cookie.expires` to `false` to enable the cookie
         *  to remain for only the duration of the user-agent.
         *
         * ## Session#maxAge
         *
         *  Alternatively `req.session.cookie.maxAge` will return the time
         *  remaining in milliseconds, which we may also re-assign a new value
         *  to adjust the `.expires` property appropriately. The following
         *  are essentially equivalent
         *
         *     var hour = 3600000;
         *     req.session.cookie.expires = new Date(Date.now() + hour);
         *     req.session.cookie.maxAge = hour;
         *
         * For example when `maxAge` is set to `60000` (one minute), and 30 seconds
         * has elapsed it will return `30000` until the current request has completed,
         * at which time `req.session.touch()` is called to reset `req.session.maxAge`
         * to its original value.
         *
         *     req.session.cookie.maxAge;
         *     // => 30000
         *
         * Session Store Implementation:
         *
         * Every session store _must_ implement the following methods
         *
         *    - `.get(sid, callback)`
         *    - `.set(sid, session, callback)`
         *    - `.destroy(sid, callback)`
         *
         * Recommended methods include, but are not limited to:
         *
         *    - `.length(callback)`
         *    - `.clear(callback)`
         *
         * For an example implementation view the [connect-redis](http://github.com/visionmedia/connect-redis) repo.
         *
         * @param options
         */
        export function session(options?: any): Handler;

        /**
         * Hash the given `sess` object omitting changes
         * to `.cookie`.
         *
         * @param sess
         */
        export function hash(sess: string): string;

        /**
         * Static:
         *
         *   Static file server with the given `root` path.
         *
         * Examples:
         *
         *     var oneDay = 86400000;
         *
         *     connect()
         *       .use(connect.static(__dirname + '/public'))
         *
         *     connect()
         *       .use(connect.static(__dirname + '/public', { maxAge: oneDay }))
         *
         * Options:
         *
         *    - `maxAge`     Browser cache maxAge in milliseconds. defaults to 0
         *    - `hidden`     Allow transfer of hidden files. defaults to false
         *    - `redirect`   Redirect to trailing "/" when the pathname is a dir. defaults to true
         *
         * @param root
         * @param options
         */
        export function static(root: string, options?: any): Handler;

        /**
         * Basic Auth:
         *
         * Enfore basic authentication by providing a `callback(user, pass)`,
         * which must return `true` in order to gain access. Alternatively an async
         * method is provided as well, invoking `callback(user, pass, callback)`. Populates
         * `req.user`. The final alternative is simply passing username / password
         * strings.
         *
         *  Simple username and password
         *
         *     connect(connect.basicAuth('username', 'password'));
         *
         *  Callback verification
         *
         *     connect()
         *       .use(connect.basicAuth(function(user, pass){
         *         return 'tj' == user & 'wahoo' == pass;
         *       }))
         *
         *  Async callback verification, accepting `fn(err, user)`.
         *
         *     connect()
         *       .use(connect.basicAuth(function(user, pass, fn){
         *         User.authenticate({ user: user, pass: pass }, fn);
         *       }))
         *
         * @param callback or username
         * @param realm
         */
        export function basicAuth(callback: (user: string, pass: string) => boolean, realm?: string): Handler;

        export function basicAuth(user: string, pass: string, realm?: string): Handler;

        /**
         * Compress:
         *
         * Compress response data with gzip/deflate.
         *
         * Filter:
         *
         *  A `filter` callback function may be passed to
         *  replace the default logic of:
         *
         *     exports.filter = function(req, res){
         *       return /json|text|javascript/.test(res.getHeader('Content-Type'));
         *     };
         *
         * Options:
         *
         *  All remaining options are passed to the gzip/deflate
         *  creation functions. Consult node's docs for additional details.
         *
         *   - `chunkSize` (default: 16*1024)
         *   - `windowBits`
         *   - `level`: 0-9 where 0 is no compression, and 9 is slow but best compression
         *   - `memLevel`: 1-9 low is slower but uses less memory, high is fast but uses more
         *   - `strategy`: compression strategy
         *
         * @param options
         */
        export function compress(options?: any): Handler;

        /**
         * Cookie Session:
         *
         *   Cookie session middleware.
         *
         *      var app = connect();
         *      app.use(connect.cookieParser());
         *      app.use(connect.cookieSession({ secret: 'tobo!', cookie: { maxAge: 60 * 60 * 1000 }}));
         *
         * Options:
         *
         *   - `key` cookie name defaulting to `connect.sess`
         *   - `secret` prevents cookie tampering
         *   - `cookie` session cookie settings, defaulting to `{ path: '/', httpOnly: true, maxAge: null }`
         *   - `proxy` trust the reverse proxy when setting secure cookies (via "x-forwarded-proto")
         *
         * Clearing sessions:
         *
         *  To clear the session simply set its value to `null`,
         *  `cookieSession()` will then respond with a 1970 Set-Cookie.
         *
         *     req.session = null;
         *
         * @param options
         */
        export function cookieSession(options?: any): Handler;

        /**
         * Anti CSRF:
         *
         * CRSF protection middleware.
         *
         * By default this middleware generates a token named "_csrf"
         * which should be added to requests which mutate
         * state, within a hidden form field, query-string etc. This
         * token is validated against the visitor's `req.session._csrf`
         * property.
         *
         * The default `value` function checks `req.body` generated
         * by the `bodyParser()` middleware, `req.query` generated
         * by `query()`, and the "X-CSRF-Token" header field.
         *
         * This middleware requires session support, thus should be added
         * somewhere _below_ `session()` and `cookieParser()`.
         *
         * Options:
         *
         *    - `value` a function accepting the request, returning the token 
         *
         * @param options
         */
        export function csrf(options: any): Handler;

        /**
         * Directory:
         *
         * Serve directory listings with the given `root` path.
         *
         * Options:
         *
         *  - `hidden` display hidden (dot) files. Defaults to false.
         *  - `icons`  display icons. Defaults to false.
         *  - `filter` Apply this filter function to files. Defaults to false.
         *
         * @param root
         * @param options
         */
        export function directory(root: string, options?: any): Handler;

        /**
         * Favicon:
         *
         * By default serves the connect favicon, or the favicon
         * located by the given `path`.
         *
         * Options:
         *
         *   - `maxAge`  cache-control max-age directive, defaulting to 1 day
         *
         * Examples:
         *
         *   Serve default favicon:
         *
         *     connect()
         *       .use(connect.favicon())
         *
         *   Serve favicon before logging for brevity:
         *
         *     connect()
         *       .use(connect.favicon())
         *       .use(connect.logger('dev'))
         *
         *   Serve custom favicon:
         *
         *     connect()
         *       .use(connect.favicon('public/favicon.ico))
         *
         * @param path
         * @param options
         */
        export function favicon(path?: string, options?: any): Handler;

        /**
         * JSON:
         *
         * Parse JSON request bodies, providing the
         * parsed object as `req.body`.
         *
         * Options:
         *
         *   - `strict`  when `false` anything `JSON.parse()` accepts will be parsed
         *   - `reviver`  used as the second "reviver" argument for JSON.parse
         *   - `limit`  byte limit disabled by default
         *
         * @param options
         */
        export function json(options?: any): Handler;

        /**
         * Limit:
         *
         *   Limit request bodies to the given size in `bytes`.
         *
         *   A string representation of the bytesize may also be passed,
         *   for example "5mb", "200kb", "1gb", etc.
         *
         *     connect()
         *       .use(connect.limit('5.5mb'))
         *       .use(handleImageUpload)
         */
        export function limit(bytes: number): Handler;

        export function limit(bytes: string): Handler;

        /**
         * Logger:
         *
         * Log requests with the given `options` or a `format` string.
         *
         * Options:
         *
         *   - `format`  Format string, see below for tokens
         *   - `stream`  Output stream, defaults to _stdout_
         *   - `buffer`  Buffer duration, defaults to 1000ms when _true_
         *   - `immediate`  Write log line on request instead of response (for response times)
         *
         * Tokens:
         *
         *   - `:req[header]` ex: `:req[Accept]`
         *   - `:res[header]` ex: `:res[Content-Length]`
         *   - `:http-version`
         *   - `:response-time`
         *   - `:remote-addr`
         *   - `:date`
         *   - `:method`
         *   - `:url`
         *   - `:referrer`
         *   - `:user-agent`
         *   - `:status`
         *
         * Formats:
         *
         *   Pre-defined formats that ship with connect:
         *
         *    - `default` ':remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
         *    - `short` ':remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
         *    - `tiny`  ':method :url :status :res[content-length] - :response-time ms'
         *    - `dev` concise output colored by response status for development use
         *
         * Examples:
         *
         *      connect.logger() // default
         *      connect.logger('short')
         *      connect.logger('tiny')
         *      connect.logger({ immediate: true, format: 'dev' })
         *      connect.logger(':method :url - :referrer')
         *      connect.logger(':req[content-type] -> :res[content-type]')
         *      connect.logger(function(tokens, req, res){ return 'some format string' })
         *
         * Defining Tokens:
         *
         *   To define a token, simply invoke `connect.logger.token()` with the
         *   name and a callback function. The value returned is then available
         *   as ":type" in this case.
         *
         *      connect.logger.token('type', function(req, res){ return req.headers['content-type']; })
         *
         * Defining Formats:
         *
         *   All default formats are defined this way, however it's public API as well:
         *
         *       connect.logger.format('name', 'string or function')
         */
        export function logger(options: string): Handler;

        export function logger(options: Function): Handler;

        export function logger(options?: any): Handler;

        /**
         * Compile `fmt` into a function.
         *
         * @param fmt
         */
        export function compile(fmt: string): Handler;

        /**
         * Define a token function with the given `name`,
         * and callback `fn(req, res)`.
         *
         * @param name
         * @param fn
         */
        export function token(name: string, fn: Function): any;

        /**
         * Define a `fmt` with the given `name`.
         */
        export function format(name: string, str: string): any;

        export function format(name: string, str: Function): any;

        /**
         * Query:
         *
         * Automatically parse the query-string when available,
         * populating the `req.query` object.
         *
         * Examples:
         *
         *     connect()
         *       .use(connect.query())
         *       .use(function(req, res){
         *         res.end(JSON.stringify(req.query));
         *       });
         *
         *  The `options` passed are provided to qs.parse function.
         */
        export function query(options: any): Handler;

        /**
         * Reponse time:
         *
         * Adds the `X-Response-Time` header displaying the response
         * duration in milliseconds.
         */
        export function responseTime(): Handler;

        /**
         * Static cache:
         *
         * Enables a memory cache layer on top of
         * the `static()` middleware, serving popular
         * static files.
         *
         * By default a maximum of 128 objects are
         * held in cache, with a max of 256k each,
         * totalling ~32mb.
         *
         * A Least-Recently-Used (LRU) cache algo
         * is implemented through the `Cache` object,
         * simply rotating cache objects as they are
         * hit. This means that increasingly popular
         * objects maintain their positions while
         * others get shoved out of the stack and
         * garbage collected.
         *
         * Benchmarks:
         *
         *     static(): 2700 rps
         *     node-static: 5300 rps
         *     static() + staticCache(): 7500 rps
         *
         * Options:
         *
         *   - `maxObjects`  max cache objects [128]
         *   - `maxLength`  max cache object length 256kb
         */
        export function staticCache(options: any): Handler;

        /**
         * Timeout:
         *
         * Times out the request in `ms`, defaulting to `5000`. The
         * method `req.clearTimeout()` is added to revert this behaviour
         * programmatically within your application's middleware, routes, etc.
         *
         * The timeout error is passed to `next()` so that you may customize
         * the response behaviour. This error has the `.timeout` property as
         * well as `.status == 408`.
         */
        export function timeout(ms: number): Handler;

        /**
         * Vhost:
         * 
         *   Setup vhost for the given `hostname` and `server`.
         *
         *     connect()
         *       .use(connect.vhost('foo.com', fooApp))
         *       .use(connect.vhost('bar.com', barApp))
         *       .use(connect.vhost('*.com', mainApp))
         *
         *  The `server` may be a Connect server or
         *  a regular Node `http.Server`. 
         *
         * @param hostname
         * @param server
         */
        export function vhost(hostname: string, server: any): Handler;

        export function urlencoded(): any;

        export function multipart(): any;
    }

    export = express;
}
