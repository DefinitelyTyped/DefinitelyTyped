import { IncomingMessage } from "http";

declare global {
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface AuthInfo {}
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface User {}

        interface Request {
            authInfo?: AuthInfo | undefined;
            user?: User | undefined;

            // These declarations are merged into express's Request type
            /**
             * Initiate a login session for `user`.
             *
             * Options:
             *   - `session`  Save login state in session, defaults to `true`.
             *
             * Examples:
             *
             *     req.logIn(user, { session: false });
             *
             *     req.logIn(user, function(err) {
             *       if (err) { throw err; }
             *       // session saved
             *     });
             */
            login(user: User, done: (err: any) => void): void;
            login(user: User, options: passport.LogInOptions, done: (err: any) => void): void;
            /**
             * Initiate a login session for `user`.
             *
             * Options:
             *   - `session`  Save login state in session, defaults to `true`.
             *
             * Examples:
             *
             *     req.logIn(user, { session: false });
             *
             *     req.logIn(user, function(err) {
             *       if (err) { throw err; }
             *       // session saved
             *     });
             */
            logIn(user: User, done: (err: any) => void): void;
            logIn(user: User, options: passport.LogInOptions, done: (err: any) => void): void;

            /**
             * Terminate an existing login session.
             */
            logout(options: passport.LogOutOptions, done: (err: any) => void): void;
            logout(done: (err: any) => void): void;
            /**
             * Terminate an existing login session.
             */
            logOut(options: passport.LogOutOptions, done: (err: any) => void): void;
            logOut(done: (err: any) => void): void;

            /**
             * Test if request is authenticated.
             */
            isAuthenticated(): this is AuthenticatedRequest;
            /**
             * Test if request is unauthenticated.
             */
            isUnauthenticated(): this is UnauthenticatedRequest;
        }

        interface AuthenticatedRequest extends Request {
            user: User;
        }

        interface UnauthenticatedRequest extends Request {
            user?: undefined;
        }
    }
}

import express = require("express");

declare namespace passport {
    type DoneCallback = (err: any, user?: Express.User | false | null) => void;
    type DeserializeUserFunction = (serializedUser: unknown, req: express.Request, done: DoneCallback) => void;
    /**
     * An optional callback supplied to allow the application to override
     * the default manner in which authentication attempts are handled.  The
     * callback has the following signature, where `user` will be set to the
     * authenticated user on a successful authentication attempt, or `false`
     * otherwise.  An optional `info` argument will be passed, containing additional
     * details provided by the strategy's verify callback - this could be information about
     * a successful authentication or a challenge message for a failed authentication.
     * An optional `status` argument will be passed when authentication fails - this could
     * be a HTTP response code for a remote authentication failure or similar.
     *
     *     app.get('/protected', function(req, res, next) {
     *       passport.authenticate('local', function callback(err, user, info, status) {
     *         if (err) { return next(err) }
     *         if (!user) { return res.redirect('/signin') }
     *         res.redirect('/account');
     *       })(req, res, next);
     *     });
     *
     * Note that if a callback is supplied, it becomes the application's
     * responsibility to log-in the user, establish a session, and otherwise perform
     * the desired operations.
     */
    type AuthenticateCallback = (
        err: any,
        user?: Express.User | false | null,
        info?: object | string | Array<string | undefined>,
        status?: number | Array<number | undefined>,
    ) => any;
    type AuthorizeCallback = AuthenticateCallback;

    interface AuthenticateOptions {
        authInfo?: boolean | undefined;
        /**
         * Assign the object provided by the verify callback to given property.
         */
        assignProperty?: string | undefined;
        /**
         * True to flash failure messages
         * or a string to use as a flash message for failures
         * (overrides any from the strategy itself).
         */
        failureFlash?: string | boolean | undefined;
        /**
         * True to store failure message in `req.session.messages`,
         * or a string to use as override message for failure.
         */
        failureMessage?: boolean | string | undefined;
        /**
         * After failed login, redirect to given URL.
         */
        failureRedirect?: string | undefined;
        failWithError?: boolean | undefined;
        keepSessionInfo?: boolean | undefined;
        /**
         * Save login state in session, defaults to `true`.
         */
        session?: boolean | undefined;
        scope?: string | string[] | undefined;
        /**
         * True to flash success messages
         * or a string to use as a flash message for success
         * (overrides any from the strategy itself).
         */
        successFlash?: string | boolean | undefined;
        /**
         * True to store success message in `req.session.messages`,
         * or a string to use as override message for success.
         */
        successMessage?: boolean | string | undefined;
        /**
         * After successful login, redirect to given URL.
         */
        successRedirect?: string | undefined;
        successReturnToOrRedirect?: string | undefined;
        state?: string | undefined;
        /**
         * Pause the request stream before deserializing the user
         * object from the session.  Defaults to `false`.  Should
         * be set to `true` in cases where middleware consuming the
         * request body is configured after passport and the
         * deserializeUser method is asynchronous.
         */
        pauseStream?: boolean | undefined;
        /**
         * Determines what property on `req`
         * will be set to the authenticated user object.
         * Default `'user'`.
         */
        userProperty?: string | undefined;
        passReqToCallback?: boolean | undefined;
        prompt?: string | undefined;
    }

    interface InitializeOptions {
        /**
         * Determines what property on `req`
         * will be set to the authenticated user object.
         * Default `'user'`.
         */
        userProperty?: string;
        /**
         * When `true`, enables a compatibility layer
         * for packages that depend on `passport@0.4.x` or earlier.
         * Default `true`.
         */
        compat?: boolean;
    }

    interface SessionOptions {
        /**
         * Pause the request stream before deserializing the user
         * object from the session.  Defaults to `false`.  Should
         * be set to `true` in cases where middleware consuming the
         * request body is configured after passport and the
         * deserializeUser method is asynchronous.
         */
        pauseStream: boolean;
    }

    interface SessionStrategyOptions {
        /**
         * Determines what property ("key") on
         * the session data where login session data is located.
         * The login session is stored and read from `req.session[key]`.
         * Default `'passport'`.
         */
        key: string;
    }

    interface LogInOptions extends LogOutOptions {
        /**
         * Save login state in session, defaults to `true`.
         */
        session: boolean;
    }

    interface LogOutOptions {
        keepSessionInfo?: boolean;
    }

    interface StrategyFailure {
        message?: string;
        [key: string]: any;
    }

    interface Authenticator<
        InitializeRet = express.Handler,
        AuthenticateRet = any,
        AuthorizeRet = AuthenticateRet,
        AuthorizeOptions = AuthenticateOptions,
    > {
        /**
         * Register a strategy for later use when authenticating requests.  The name
         * with which the strategy is registered is passed to {@link Authenticator.authenticate `authenticate()`}.
         *
         * @example <caption>Register strategy.</caption>
         * passport.use(new GoogleStrategy(...));
         *
         * @example <caption>Register strategy and override name.</caption>
         *      passport.use('password', new LocalStrategy(function(username, password, cb) {
         *              // ...
         *      }));
         */
        use(strategy: Strategy): this;
        use(name: string, strategy: Strategy): this;
        /**
         * Deregister a strategy that was previously registered with the given name.
         *
         * In a typical application, the necessary authentication strategies are
         * registered when initializing the app and, once registered, are always
         * available.  As such, it is typically not necessary to call this function.
         *
         * @example
         * passport.unuse('acme');
         */
        unuse(name: string): this;
        /**
         * Adapt this `Authenticator` to work with a specific framework.
         *
         * By default, Passport works as {@link https://github.com/senchalabs/connect#readme Connect}-style
         * middleware, which makes it compatible with {@link https://expressjs.com/ Express}.
         * For any app built using Express, there is no need to call this function.
         */
        framework<X, Y, Z>(fw: Framework<X, Y, Z>): Authenticator<X, Y, Z>;
        /**
         * Passport initialization.
         *
         * Intializes Passport for incoming requests, allowing authentication strategies
         * to be applied.
         *
         * As of v0.6.x, it is typically no longer necessary to use this middleware.  It
         * exists for compatiblity with apps built using previous versions of Passport,
         * in which this middleware was necessary.
         *
         * The primary exception to the above guidance is when using strategies that
         * depend directly on `passport@0.4.x` or earlier.  These earlier versions of
         * Passport monkeypatch Node.js `http.IncomingMessage` in a way that expects
         * certain Passport-specific properties to be available.  This middleware
         * provides a compatibility layer for this situation.
         *
         * Options:
         *  - `userProperty` Determines what property on
         *                   `req` will be set to the authenticated user object.
         *                   Default `'user'`.
         *
         *  - `compat`       When `true`, enables a compatibility
         *                   layer for packages that depend on `passport@0.4.x` or earlier.
         *                   Default `true`.
         *
         * Examples:
         *
         *      app.use(passport.initialize());
         *
         * If sessions are being utilized, applications must set up Passport with
         * functions to serialize a user into and out of a session.  For example, a
         * common pattern is to serialize just the user ID into the session (due to the
         * fact that it is desirable to store the minimum amount of data in a session).
         * When a subsequent request arrives for the session, the full User object can
         * be loaded from the database by ID.
         *
         * Note that additional middleware is required to persist login state, so we
         * must use the `connect.session()` middleware _before_ `passport.initialize()`.
         *
         * If sessions are being used, this middleware must be in use by the
         * Connect/Express application for Passport to operate.  If the application is
         * entirely stateless (not using sessions), this middleware is not necessary,
         * but its use will not have any adverse impact.
         *
         * Examples:
         *
         *     app.use(connect.cookieParser());
         *     app.use(connect.session({ secret: 'keyboard cat' }));
         *     app.use(passport.initialize());
         *     app.use(passport.session());
         *
         *     passport.serializeUser(function(user, done) {
         *       done(null, user.id);
         *     });
         *
         *     passport.deserializeUser(function(id, done) {
         *       User.findById(id, function (err, user) {
         *         done(err, user);
         *       });
         *     });
         */
        initialize(options?: InitializeOptions): InitializeRet;
        /**
         * Middleware that will restore login state from a session.
         *
         * Web applications typically use sessions to maintain login state between
         * requests.  For example, a user will authenticate by entering credentials into
         * a form which is submitted to the server.  If the credentials are valid, a
         * login session is established by setting a cookie containing a session
         * identifier in the user's web browser.  The web browser will send this cookie
         * in subsequent requests to the server, allowing a session to be maintained.
         *
         * If sessions are being utilized, and a login session has been established,
         * this middleware will populate `req.user` with the current user.
         *
         * Note that sessions are not strictly required for Passport to operate.
         * However, as a general rule, most web applications will make use of sessions.
         * An exception to this rule would be an API server, which expects each HTTP
         * request to provide credentials in an Authorization header.
         *
         * Examples:
         *
         *     app.use(connect.cookieParser());
         *     app.use(connect.session({ secret: 'keyboard cat' }));
         *     app.use(passport.initialize());
         *     app.use(passport.session());
         *
         * Options:
         *   - `pauseStream`      Pause the request stream before deserializing the user
         *                        object from the session.  Defaults to `false`.  Should
         *                        be set to `true` in cases where middleware consuming the
         *                        request body is configured after passport and the
         *                        deserializeUser method is asynchronous.
         */
        session(options?: SessionOptions): AuthenticateRet;

        /**
         * Authenticates requests.
         *
         * Applies the `name`ed strategy (or strategies) to the incoming request, in
         * order to authenticate the request.  If authentication is successful, the user
         * will be logged in and populated at `req.user` and a session will be
         * established by default.  If authentication fails, an unauthorized response
         * will be sent.
         *
         * Options:
         *   - `session`          Save login state in session, defaults to `true`.
         *   - `successRedirect`  After successful login, redirect to given URL.
         *   - `successMessage`   True to store success message in
         *                        `req.session.messages`, or a string to use as override
         *                        message for success.
         *   - `successFlash`     True to flash success messages or a string to use as a flash
         *                        message for success (overrides any from the strategy itself).
         *   - `failureRedirect`  After failed login, redirect to given URL.
         *   - `failureMessage`   True to store failure message in
         *                        `req.session.messages`, or a string to use as override
         *                        message for failure.
         *   - `failureFlash`     True to flash failure messages or a string to use as a flash
         *                        message for failures (overrides any from the strategy itself).
         *   - `assignProperty`   Assign the object provided by the verify callback to given property.
         *
         * An optional `callback` can be supplied to allow the application to override
         * the default manner in which authentication attempts are handled.  The
         * callback has the following signature, where `user` will be set to the
         * authenticated user on a successful authentication attempt, or `false`
         * otherwise.  An optional `info` argument will be passed, containing additional
         * details provided by the strategy's verify callback - this could be information about
         * a successful authentication or a challenge message for a failed authentication.
         * An optional `status` argument will be passed when authentication fails - this could
         * be a HTTP response code for a remote authentication failure or similar.
         *
         *     app.get('/protected', function(req, res, next) {
         *       passport.authenticate('local', function(err, user, info, status) {
         *         if (err) { return next(err) }
         *         if (!user) { return res.redirect('/signin') }
         *         res.redirect('/account');
         *       })(req, res, next);
         *     });
         *
         * Note that if a callback is supplied, it becomes the application's
         * responsibility to log-in the user, establish a session, and otherwise perform
         * the desired operations.
         *
         * Examples:
         *
         *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });
         *
         *     passport.authenticate('basic', { session: false });
         *
         *     passport.authenticate('twitter');
         */
        authenticate(
            strategy: string | string[] | Strategy,
            callback?: AuthenticateCallback | ((...args: any[]) => any),
        ): AuthenticateRet;
        authenticate(
            strategy: string | string[] | Strategy,
            options: AuthenticateOptions,
            callback?: AuthenticateCallback | ((...args: any[]) => any),
        ): AuthenticateRet;
        /**
         * Create third-party service authorization middleware.
         *
         * Returns middleware that will authorize a connection to a third-party service.
         *
         * This middleware is identical to using {@link Authenticator.authenticate `authenticate()`}
         * middleware with the `assignProperty` option set to `'account'`.  This is
         * useful when a user is already authenticated (for example, using a username
         * and password) and they want to connect their account with a third-party
         * service.
         *
         * In this scenario, the user's third-party account will be set at
         * `req.account`, and the existing `req.user` and login session data will be
         * be left unmodified.  A route handler can then link the third-party account to
         * the existing local account.
         *
         * All arguments to this function behave identically to those accepted by
         * {@link Authenticator.authenticate `Authenticator.authenticate`}.
         *
         * @example
         * app.get('/oauth/callback/twitter', passport.authorize('twitter'));
         */
        authorize(strategy: string | string[], callback?: AuthorizeCallback | ((...args: any[]) => any)): AuthorizeRet;
        authorize(
            strategy: string | string[],
            options: AuthorizeOptions,
            callback?: AuthorizeCallback | ((...args: any[]) => any),
        ): AuthorizeRet;
        /**
         * Registers a function used to serialize user objects into the session.
         *
         * Examples:
         *
         *     passport.serializeUser(function(user, done) {
         *       done(null, user.id);
         *     });
         */
        serializeUser<TID>(fn: (user: Express.User, done: (err: any, id?: TID) => void) => void): void;
        /**
         * Registers a function used to serialize user objects into the session.
         *
         * Examples:
         *
         *     passport.serializeUser(function(user, done) {
         *       done(null, user.id);
         *     });
         */
        serializeUser<TID, TR extends IncomingMessage = express.Request>(
            fn: (req: TR, user: Express.User, done: (err: any, id?: TID) => void) => void,
        ): void;
        /**
         * Private implementation that traverses the chain of serializers,
         * attempting to serialize a user.
         */
        serializeUser<User extends Express.User = Express.User, Request extends IncomingMessage = express.Request>(
            user: User,
            req: Request,
            done: (err: any, serializedUser?: number | NonNullable<unknown>) => any,
        ): void;
        /**
         * Private implementation that traverses the chain of serializers,
         * attempting to serialize a user.
         *
         * For backwards compatibility.
         */
        serializeUser<User extends Express.User = Express.User>(
            user: User,
            done: (err: any, serializedUser?: number | NonNullable<unknown>) => any,
        ): void;
        /**
         * Registers a function used to deserialize user objects out of the session.
         *
         * Examples:
         *
         *     passport.deserializeUser(function(id, done) {
         *       User.findById(id, function (err, user) {
         *         done(err, user);
         *       });
         *     });
         */
        deserializeUser<TID>(fn: (id: TID, done: (err: any, user?: Express.User | false | null) => void) => void): void;
        /**
         * Registers a function used to deserialize user objects out of the session.
         *
         * Examples:
         *
         *     passport.deserializeUser(function(id, done) {
         *       User.findById(id, function (err, user) {
         *         done(err, user);
         *       });
         *     });
         */
        deserializeUser<TID, TR extends IncomingMessage = express.Request>(
            fn: (req: TR, id: TID, done: (err: any, user?: Express.User | false | null) => void) => void,
        ): void;
        /**
         * Private implementation that traverses the chain of deserializers,
         * attempting to deserialize a user.
         */
        deserializeUser<User extends Express.User = Express.User, Request extends IncomingMessage = express.Request>(
            serializedUser: NonNullable<unknown>,
            req: Request,
            done: (err: any, user?: User | false) => any,
        ): void;
        /**
         * Private implementation that traverses the chain of deserializers,
         * attempting to deserialize a user.
         *
         * For backwards compatibility.
         */
        deserializeUser<User extends Express.User = Express.User>(
            serializedUser: NonNullable<unknown>,
            done: (err: any, user?: User | false) => any,
        ): void;
        /**
         * Registers a function used to transform auth info.
         *
         * In some circumstances authorization details are contained in authentication
         * credentials or loaded as part of verification.
         *
         * For example, when using bearer tokens for API authentication, the tokens may
         * encode (either directly or indirectly in a database), details such as scope
         * of access or the client to which the token was issued.
         *
         * Such authorization details should be enforced separately from authentication.
         * Because Passport deals only with the latter, this is the responsiblity of
         * middleware or routes further along the chain.  However, it is not optimal to
         * decode the same data or execute the same database query later.  To avoid
         * this, Passport accepts optional `info` along with the authenticated `user`
         * in a strategy's `success()` action.  This info is set at `req.authInfo`,
         * where said later middlware or routes can access it.
         *
         * Optionally, applications can register transforms to proccess this info,
         * which take effect prior to `req.authInfo` being set.  This is useful, for
         * example, when the info contains a client ID.  The transform can load the
         * client from the database and include the instance in the transformed info,
         * allowing the full set of client properties to be convieniently accessed.
         *
         * If no transforms are registered, `info` supplied by the strategy will be left
         * unmodified.
         *
         * Examples:
         *
         *     passport.transformAuthInfo(function(info, done) {
         *       Client.findById(info.clientID, function (err, client) {
         *         info.client = client;
         *         done(err, info);
         *       });
         *     });
         */
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
        /**
         * Private implementation that traverses the chain of transformers,
         * attempting to transform auth info.
         *
         * If no transformers are registered (or they all pass),
         * the default behavior is to use the un-transformed info as-is.
         */
        transformAuthInfo<InitialInfo = unknown, Request extends IncomingMessage = express.Request>(
            info: unknown,
            req: Request,
            done: (err: any, transformedAuthInfo?: InitialInfo | NonNullable<unknown>) => any,
        ): void;
        /**
         * Private implementation that traverses the chain of transformers,
         * attempting to transform auth info.
         *
         * If no transformers are registered (or they all pass),
         * the default behavior is to use the un-transformed info as-is.
         *
         * For backwards compatibility.
         */
        transformAuthInfo<InitialInfo = unknown>(
            info: unknown,
            done: (err: any, transformedAuthInfo?: InitialInfo | NonNullable<unknown>) => any,
        ): void;
    }

    interface PassportStatic extends Authenticator {
        /**
         * Create a new `Authenticator` object.
         */
        Authenticator: { new(): Authenticator };
        /**
         * Create a new `Authenticator` object.
         */
        Passport: PassportStatic["Authenticator"];
        /**
         * Creates an instance of `Strategy`.
         */
        Strategy: { new(): Strategy & StrategyCreatedStatic };
        strategies: {
            /**
             *  Create a new `SessionStrategy` object.
             *
             * An instance of this strategy is automatically used when creating an
             * {@link Authenticator `Authenticator`}.  As such, it is typically unnecessary to create an
             * instance using this constructor.
             *
             * This `Strategy` authenticates HTTP requests based on the contents
             * of session data.
             *
             * The login session must have been previously initiated, typically upon the
             * user interactively logging in using a HTML form.  During session initiation,
             * the logged-in user's information is persisted to the session so that it can
             * be restored on subsequent requests.
             *
             * Note that this strategy merely restores the authentication state from the
             * session, it does not authenticate the session itself.  Authenticating the
             * underlying session is assumed to have been done by the middleware
             * implementing session support.  This is typically accomplished by setting a
             * signed cookie, and verifying the signature of that cookie on incoming
             * requests.
             *
             * In {@link https://expressjs.com/ Express}-based apps, session support is
             * commonly provided by {@link https://github.com/expressjs/session `express-session`}
             * or {@link https://github.com/expressjs/cookie-session `cookie-session`}.
             *
             * Options:
             *
             *  - `key` Determines what property ("key") on
             *          the session data where login session data is located.  The login
             *          session is stored and read from `req.session[key]`.
             *          Default `'passport'`.
             */
            SessionStrategy: {
                new(deserializeUser: DeserializeUserFunction): SessionStrategy;
                new(options: SessionStrategyOptions, deserializeUser: DeserializeUserFunction): SessionStrategy;
            };
        };
    }

    interface Strategy {
        name?: string | undefined;
        /**
         * Authenticate request.
         *
         * This function must be overridden by subclasses.  In abstract form, it always
         * throws an exception.
         */
        authenticate(this: StrategyCreated<this>, req: express.Request, options?: any): any;
    }

    interface SessionStrategy extends Strategy {
        /**
         * The name of the strategy, set to `'session'`.
         */
        readonly name: "session";
        /**
         * Authenticate request based on current session data.
         *
         * When login session data is present in the session, that data will be used to
         * restore login state across across requests by calling the deserialize user
         * function.
         *
         * If login session data is not present, the request will be passed to the next
         * middleware, rather than failing authentication - which is the behavior of
         * most other strategies.  This deviation allows session authentication to be
         * performed at the application-level, rather than the individual route level,
         * while allowing both authenticated and unauthenticated requests and rendering
         * responses accordingly.  Routes that require authentication will need to guard
         * that condition.
         *
         * This function is **protected**, and should _not_ be called directly.  Instead,
         * use `passport.authenticate()` middleware and specify the {@link SessionStrategy.name `name`}
         * of this strategy and any options.
         *
         * Options:
         * - `pauseStream` When `true`, data events on
         *                 the request will be paused, and then resumed after the asynchronous
         *                 `deserializeUser` function has completed.  This is only necessary in
         *                 cases where later middleware in the stack are listening for events,
         *                 and ensures that those events are not missed.
         *                 Default `false`.
         *
         * @example
         * passport.authenticate('session');
         */
        authenticate(req: IncomingMessage, options?: Pick<AuthenticateOptions, "pauseStream">): void;
    }

    interface StrategyCreatedStatic {
        /**
         * Authenticate `user`, with optional `info`.
         *
         * Strategies should call this function to successfully authenticate a
         * user.  `user` should be an object supplied by the application after it
         * has been given an opportunity to verify credentials.  `info` is an
         * optional argument containing additional user information.  This is
         * useful for third-party authentication strategies to pass profile
         * details.
         */
        success(user: Express.User, info?: object): void;
        /**
         * Fail authentication, with optional `challenge` and `status`, defaulting
         * to `401`.
         *
         * Strategies should call this function to fail an authentication attempt.
         */
        fail(challenge?: StrategyFailure | string | number, status?: number): void;
        /**
         * Redirect to `url` with optional `status`, defaulting to 302.
         *
         * Strategies should call this function to redirect the user (via their
         * user agent) to a third-party website for authentication.
         */
        redirect(url: string, status?: number): void;
        /**
         * Pass without making a success or fail decision.
         *
         * Under most circumstances, Strategies should not need to call this
         * function.  It exists primarily to allow previous authentication state
         * to be restored, for example from an HTTP session.
         */
        pass(): void;
        /**
         * Internal error while performing authentication.
         *
         * Strategies should call this function when an internal error occurs
         * during the process of performing authentication; for example, if the
         * user directory is not available.
         */
        error(err: any): void;
    }

    type StrategyCreated<T, O = T & StrategyCreatedStatic> = {
        [P in keyof O]: O[P];
    };

    interface Profile {
        provider: string;
        id: string;
        displayName: string;
        username?: string | undefined;
        name?:
            | {
                familyName: string;
                givenName: string;
                middleName?: string | undefined;
            }
            | undefined;
        emails?:
            | Array<{
                value: string;
                type?: string | undefined;
            }>
            | undefined;
        photos?:
            | Array<{
                value: string;
            }>
            | undefined;
    }

    interface Framework<InitializeRet = any, AuthenticateRet = any, AuthorizeRet = AuthenticateRet> {
        /**
         * Passport initialization.
         *
         * Intializes Passport for incoming requests, allowing authentication strategies
         * to be applied.
         *
         * If sessions are being utilized, applications must set up Passport with
         * functions to serialize a user into and out of a session.  For example, a
         * common pattern is to serialize just the user ID into the session (due to the
         * fact that it is desirable to store the minimum amount of data in a session).
         * When a subsequent request arrives for the session, the full User object can
         * be loaded from the database by ID.
         *
         * Note that additional middleware is required to persist login state, so we
         * must use the `connect.session()` middleware _before_ `passport.initialize()`.
         *
         * If sessions are being used, this middleware must be in use by the
         * Connect/Express application for Passport to operate.  If the application is
         * entirely stateless (not using sessions), this middleware is not necessary,
         * but its use will not have any adverse impact.
         *
         * Examples:
         *
         *     app.use(connect.cookieParser());
         *     app.use(connect.session({ secret: 'keyboard cat' }));
         *     app.use(passport.initialize());
         *     app.use(passport.session());
         *
         *     passport.serializeUser(function(user, done) {
         *       done(null, user.id);
         *     });
         *
         *     passport.deserializeUser(function(id, done) {
         *       User.findById(id, function (err, user) {
         *         done(err, user);
         *       });
         *     });
         */
        initialize(
            passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>,
            options?: any,
        ): (...args: any[]) => InitializeRet;
        /**
         * Authenticates requests.
         *
         * Applies the `name`ed strategy (or strategies) to the incoming request, in
         * order to authenticate the request.  If authentication is successful, the user
         * will be logged in and populated at `req.user` and a session will be
         * established by default.  If authentication fails, an unauthorized response
         * will be sent.
         *
         * Options:
         *   - `session`          Save login state in session, defaults to `true`.
         *   - `successRedirect`  After successful login, redirect to given URL.
         *   - `successMessage`   True to store success message in
         *                        `req.session.messages`, or a string to use as override
         *                        message for success.
         *   - `successFlash`     True to flash success messages or a string to use as a flash
         *                        message for success (overrides any from the strategy itself).
         *   - `failureRedirect`  After failed login, redirect to given URL.
         *   - `failureMessage`   True to store failure message in
         *                        `req.session.messages`, or a string to use as override
         *                        message for failure.
         *   - `failureFlash`     True to flash failure messages or a string to use as a flash
         *                        message for failures (overrides any from the strategy itself).
         *   - `assignProperty`   Assign the object provided by the verify callback to given property.
         *
         * An optional `callback` can be supplied to allow the application to override
         * the default manner in which authentication attempts are handled.  The
         * callback has the following signature, where `user` will be set to the
         * authenticated user on a successful authentication attempt, or `false`
         * otherwise.  An optional `info` argument will be passed, containing additional
         * details provided by the strategy's verify callback - this could be information about
         * a successful authentication or a challenge message for a failed authentication.
         * An optional `status` argument will be passed when authentication fails - this could
         * be a HTTP response code for a remote authentication failure or similar.
         *
         *     app.get('/protected', function(req, res, next) {
         *       passport.authenticate('local', function(err, user, info, status) {
         *         if (err) { return next(err) }
         *         if (!user) { return res.redirect('/signin') }
         *         res.redirect('/account');
         *       })(req, res, next);
         *     });
         *
         * Note that if a callback is supplied, it becomes the application's
         * responsibility to log-in the user, establish a session, and otherwise perform
         * the desired operations.
         *
         * Examples:
         *
         *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });
         *
         *     passport.authenticate('basic', { session: false });
         *
         *     passport.authenticate('twitter');
         */
        authenticate(
            passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>,
            name: string,
            options?: any,
            callback?: (...args: any[]) => any,
        ): (...args: any[]) => AuthenticateRet;
        /**
         * Create third-party service authorization middleware.
         *
         * Returns middleware that will authorize a connection to a third-party service.
         *
         * This middleware is identical to using {@link Authenticator.authenticate `authenticate()`}
         * middleware with the `assignProperty` option set to `'account'`.  This is
         * useful when a user is already authenticated (for example, using a username
         * and password) and they want to connect their account with a third-party
         * service.
         *
         * In this scenario, the user's third-party account will be set at
         * `req.account`, and the existing `req.user` and login session data will be
         * be left unmodified.  A route handler can then link the third-party account to
         * the existing local account.
         *
         * All arguments to this function behave identically to those accepted by
         * {@link Authenticator.authenticate `Authenticator.authenticate`}.
         *
         * @example
         * app.get('/oauth/callback/twitter', passport.authorize('twitter'));
         */
        authorize?(
            passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>,
            name: string,
            options?: any,
            callback?: (...args: any[]) => any,
        ): (...args: any[]) => AuthorizeRet;
    }
}

declare const passport: passport.PassportStatic;
export = passport;
