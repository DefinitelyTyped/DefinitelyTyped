// Type definitions for log4javascript v1.4.13
// Project: http://log4javascript.org/
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace log4javascript {

	// #region log4javascript static properties/methods

	/**
	 * Returns a logger with the specified name, creating it if a logger with that name does not already exist.
	 * If no name is specified, a logger is returned with name [anonymous], and subsequent calls to getLogger()
	 * (with no logger name specified) will return this same logger object.
	 * Note that the names [anonymous], [default], [null] and root are reserved for the anonymous logger, default logger,
	 * null logger and root logger respectively.
	 */
	export function getLogger(loggerName?: string): Logger;

	/**
	 * Convenience method that returns the default logger. The default logger has a single appender: a PopUpAppender with the default
	 * layout, width and height, and with focusPopUp set to false and lazyInit, useOldPopUp and complainAboutPopUpBlocking all set to true.
	 */
	export function getDefaultLogger(): Logger;

	/**
	 * Returns an empty logger with no appenders. Useful for disabling all logging.
	 */
	export function getNullLogger(): Logger;

	/**
	 * Returns the root logger from which all other loggers derive.
	 */
	export function getRootLogger(): Logger;

	/**
	 * Resets the all loggers to their default level.
	 */
	export function resetConfiguration(): void;

	/**
	 * Enables or disables all logging, depending on enabled.
	 */
	export function setEnabled(enabled: boolean): void;

	/**
	 * Returns true or false depending on whether logging is enabled.
	 */
	export function isEnabled(): boolean;

	/**
	 * Adds a function to be called when an event of the type specified occurs in log4javascript.
	 * Supported event types are load (occurs once the page has loaded) and error.
	 */
	export function addEventListener(eventType: string, listener: { (sender: any, eventType: string, eventArgs: any): void; }): void;

	/**
	 * Removes the event listener function supplied for the event of the type specified.
	 */
	export function removeEventListener(eventType: string, listener: { (sender: any, eventType: string, eventArgs: any): void; }): void;

	/**
	 * Raises an event of type eventType on the log4javascript object. Each of the listeners for this type of event
	 * (registered via addEventListener) is called and passed eventArgs as the third parameter.
	 */
	export function dispatchEvent(eventType: string, eventArgs: any): void;

	/**
	 * Used internally to specify the types of events that the log4javascript object can raise.
	 */
	export function setEventTypes(eventTypes: string[]): void;

	/**
	 * Enables or disables displaying of error stack traces, depending on show. By default, stack traces are not displayed.
	 * (Only works in Firefox)
	 */
	export function setShowStackTraces(show: boolean): void;

	/**
	 * This evaluates the given expression in the log4javascript scope, thus allowing scripts to access internal
	 * log4javascript variables and functions. This was written for the purposes of automated testing but could be used by
	 * custom extensions to log4javascript.
	 */
	export function evalInScope(expr: string): any;

	// #endregion

	// #region Levels

	/**
	 * Levels are available as static properties of the log4javascript.Level object.
	 */
	export class Level {
		static ALL: Level;
		static TRACE: Level;
		static DEBUG: Level;
		static INFO: Level;
		static WARN: Level;
		static ERROR: Level;
		static FATAL: Level;
		static OFF: Level;

		constructor(level: number, name: string);

		toString(): string;
		equals(level: Level): boolean;
		isGreaterOrEqual(level: Level): boolean;
	}

	// #endregion

	// #region Loggers

	/**
	 * It is possible to have multiple loggers in log4javascript. For example, you may wish to have a logger for debugging purposes
	 * that logs messages to a pop-up window and a separate logger that reports any client-side application errors to the server via Ajax.
	 * From version 1.4, log4javascript has hierarchical loggers, implemented in the same way as log4j. In summary, you specify a
	 * logger's parent logger by means of a dot between the parent logger name and the child logger name. Therefore the logger
	 * tim.app.security inherits from tim.app, which in turn inherits from tim which, finally, inherits from the root logger.
	 * What inheritance means for a logger is that in the absence of a threshold level set specifically on the logger it inherits
	 * its level from its parent; also, a logger inherits all its parent's appenders (this is known as appender additivity in log4j.
	 * This behaviour can be enabled or disabled via setAdditivity(). See below). In the above example, if the root logger has a
	 * level of DEBUG and one appender, each of the loggers tim.app.security, tim.app and tim would inherit the root level's appender.
	 * If, say, tim.app's threshold level was set to WARN, tim's effective level would remain at DEBUG (inherited from the root logger)
	 * while tim.app.security's effective level would be WARN, inherited from tim.app. The important thing to note is that appenders
	 * accumulate down the logger hierarchy while levels are simply inherited from the nearest ancestor with a threshold level set.
	 * For a detailed explanation of the logger hierarchy, see the log4j manual.
	 */
	export class Logger {
		/**
		 * Adds the given appender.
		 */
		addAppender(appender: Appender): void;

		/**
		 * Removes the given appender.
		 */
		removeAppender(appender: Appender): void;

		/**
		 * Clears all appenders for the current logger.
		 */
		removeAllAppenders(): void;

		/**
		 * Returns all appenders which will log a message.
		 */
		getEffectiveAppenders(): Appender[];
	
		/**
		 * Sets the level. Log messages of a lower level than level will not be logged. Default value is DEBUG.
		 */
		setLevel(level: Level): void;

		/**
		 * Returns the level explicitly set for this logger or null if none has been set.
		 */
		getLevel(): Level;

		/**
		 * Returns the level at which the logger is operating. This is either the level explicitly set on the logger or, if no level
		 * has been set, the effective level of the logger's parent.
		 */
		getEffectiveLevel(): Level;

		/**
		 * Sets whether appender additivity is enabled (the default) or disabled. If set to false, this particular logger will not
		 * inherit any appenders form its ancestors. Any descendant of this logger, however, will inherit from its ancestors as
		 * normal, unless its own additivity is explicitly set to false.
		 * Default value is true.
		 */
		setAdditivity(additivity: boolean): void;

		/**
		 * Returns whether additivity is enabled for this logger.
		 */
		getAdditivity(): boolean;

		/**
		 * Generic logging method used by wrapper methods such as debug, error etc.
		 */
		log(level: Level, params: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level TRACE.
		 */
		trace(...messages: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level DEBUG.
		 */
		debug(...messages: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level INFO.
		 */
		info(...messages: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level WARN.
		 */
		warn(...messages: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level ERROR.
		 */
		error(...messages: any[]): void;

		/**
		 * Logs one or more messages and optionally an error at level FATAL.
		 */
		fatal(...messages: any[]): void;

		/**
		 * Returns whether the logger is enabled for the specified level.
		 */
		isEnabledFor(level: Level, exception: Error): boolean;

		/**
		 * Returns whether the logger is enabled for TRACE messages.
		 */
		isTraceEnabled(): boolean;

		/**
		 * Returns whether the logger is enabled for DEBUG messages.
		 */
		isDebugEnabled(): boolean;

		/**
		 * Returns whether the logger is enabled for INFO messages.
		 */
		isInfoEnabled(): boolean;

		/**
		 * Returns whether the logger is enabled for WARN messages.
		 */
		isWarnEnabled(): boolean;

		/**
		 * Returns whether the logger is enabled for ERROR messages.
		 */
		isErrorEnabled(): boolean;

		/**
		 * Returns whether the logger is enabled for FATAL messages.
		 */
		isFatalEnabled(): boolean;

		/**
		 * Starts a new group of log messages. In appenders that support grouping (currently PopUpAppender and InPageAppender),
		 * a group appears as an expandable section in the console, labelled with the name specified. Specifying initiallyExpanded
		 * determines whether the group starts off expanded (the default is true). Groups may be nested.
		 */
		group(name: string, initiallyExpanded?: boolean): void;

		/**
		 * Ends the current group. If there is no group then this function has no effect.
		 */
		groupEnd(): void;

		/**
		 * Starts a timer with name name. When the timer is ended with a call to timeEnd using the same name, the amount of time
		 * that has elapsed in milliseconds since the timer was started is logged at level level. If not level is supplied, the level
		 * defaults to INFO.
		 */
		time(name: string, level?: Level): void;

		/**
		 * Ends the timer with name name and logs the time elapsed.
		 */
		timeEnd(name: string): void;

		/**
		 * Asserts the given expression is true or evaluates to true. If so, nothing is logged. If not, an error is logged at the ERROR level.
		 */
		assert(expr: any): void;

		name: string;
	}

	// #endregion

	// #region Appenders

	/**
	 * Logging event.
	 */
	export class LoggingEvent {
		logger: Logger;
		timeStamp: Date;
		timeStampInMilliseconds: number;
		timeStampInSeconds: number;
		milliseconds: number;
		level: Level;
		messages: any[];
		exception: Error;

		constructor(logger: Logger, timeStamp: Date, level: Level, messages: string[], exception?: Error);

		getThrowableStrRep: () => string;
		getCombinedMessages: () => string;
		toString: () => string;
	}

	/**
	 * There are methods common to all appenders, as listed below.
	 */
	export class Appender {

		/**
		 * Checks the logging event's level is at least as severe as the appender's threshold and calls the appender's append method if so.
		 * This method should not in general be used directly or overridden.
		 */
		doAppend(loggingEvent: LoggingEvent): void;

		/**
		 * Appender-specific method to append a log message. Every appender object should implement this method.
		 */
		append(loggingEvent: LoggingEvent): void;

		/**
		 * Sets the appender's layout.
		 */
		setLayout(layout: Layout): void;

		/**
		 * Returns the appender's layout.
		 */
		getLayout(): Layout;

		/**
		 * Sets the appender's threshold. Log messages of level less severe than this threshold will not be logged.
		 */
		setThreshold(level: Level): void;

		/**
		 * Returns the appender's threshold.
		 */
		getThreshold(): Level;

		/**
		 * Returns a string representation of the appender. Every appender object should implement this method.
		 */
		toString(): string;

	}

	/**
	 * Displays a log message as a JavaScript alert.
	 */
	export class AlertAppender extends Appender {
		/**
		 * Constructor
		 */
		constructor();
	}

	/**
	 * A flexible appender that asynchronously sends log messages to a server via HTTP.
	 * The default configuration is to send each log message as a separate HTTP post request to the server using an
	 * HttpPostDataLayout, without waiting for a response before sending any subsequent requests.
	 */
	export class AjaxAppender extends Appender {
		/**
		 * Constructor
		 * @param url The URL to which log messages should be sent. Note that this is subject to the usual Ajax restrictions:
		 * the URL should be in the same domain as that of the page making the request.
		 * @param withCredentials Specifies whether cookies should be sent with each request.
		 */
		constructor(url: string, withCredentials?: boolean);

		/**
		 * Whether to send all remaining unsent log messages to the server when the page unloads.
		 * Since version 1.4.3, the default value is false. Previously the default was true.
		 */
		setSendAllOnUnload(sendAllOnUnload: boolean): void;

		/**
		 * Returns whether all remaining unsent log messages are sent to the server when the page unloads.
		 */
		isSendAllOnUnload(): boolean;

		/**
		 * Sets the post variable name whose value will the formatted log message(s) for each request.
		 * Default value is data.
		 */
		setPostVarName(postVarName: string): void;

		/**
		 * Returns the post variable name whose value will the formatted log message(s) for each request.
		 */
		getPostVarName(): string;

		/**
		 * Whether to send log messages to the server at regular, timed intervals.
		 * Default value is false.
		 */
		setTimed(timed: boolean): void;

		/**
		 * Returns whether log messages are sent to the server at regular, timed intervals.
		 */
		isTimed(): boolean;

		/**
		 * Sets whether to wait for a response from a previous HTTP request from this appender before sending the next log
		 * message / batch of messages.
		 * Default value is false.
		 */
		setWaitForResponse(waitForResponse: boolean): void;

		/**
		 * Returns whether the appender waits for a response from a previous HTTP request from this appender before sending the next
		 * log message / batch of messages.
		 */
		isWaitForResponse(): boolean;

		/**
		 * Sets the number of log messages to send in each request. If not specified, defaults to 1.
		 */
		setBatchSize(batchSize: number): void;

		/**
		 * Returns the number of log messages sent in each request. See above for more details.
		 */
		getBatchSize(): number;

		/**
		 * Sets the length of time in milliseconds between each sending of queued log messages.
		 */
		setTimerInterval(timerInterval: number): void;

		/**
		 * Returns the length of time in milliseconds between each sending of queued log messages. See above for more details.
		 */
		getTimerInterval(): number;

		/**
		 * Sets the function that is called whenever a successful request is made, called at the point at which the response is
		 * received. This feature can be used to confirm whether a request has been successful and act accordingly.
		 * A single parameter, xmlHttp, is passed to the callback function. This is the XMLHttpRequest object that performed the
		 * request.
		 */
		setRequestSuccessCallback(requestSuccessCallback: { (xmlHttp: XMLHttpRequest): void; }): void;

		/**
		 * Sets the function that is called whenever any kind of failure occurs in the appender, including browser deficiencies or
		 * configuration errors (e.g. supplying a non-existent URL to the appender). This feature can be used to handle
		 * AjaxAppender-specific errors.
		 * A single parameter, message, is passed to the callback function. This is the error-specific message that caused the failure.
		 */
		setFailCallback(failCallback: { (message: string): void; }): void;

		/**
		 * Sets the session id sent to the server each time a request is made.
		 */
		setSessionId(sessionId: string): void;

		/**
		 * Returns the session id sent to the server each time a request is made.
		 */
		getSessionId(): string;

		/**
		 * Adds an HTTP header that is sent with each request.
		 */
		addHeader(name: string, value: string): void;

		/**
		 * Returns an array of the additional headers that are sent with each HTTP request. Each array item is an object with
		 * properties name and value.
		 */
		getHeaders(): Array<{ name: string; value: string; }>;

		/**
		 * Sends all log messages in the queue. If log messages are batched then only completed batches are sent.
		 */
		sendAll(): void;
	}

	/**
	 * Logs messages to a pop-up console window (note: you will need to disable pop-up blockers to use it). The pop-up displays a
	 * list of all log messages.
	 */
	export class PopUpAppender extends Appender {
		/**
		 * Constructor
		 * @param lazyInit Set this to true to open the pop-up only when the first log message reaches the appender. Otherwise, the
		 * pop-up window opens as soon as the appender is created. If not specified, defaults to false.
		 * @param initiallyMinimized Whether the console window should start off hidden / minimized. If not specified, defaults to false.
		 * @param useDocumentWrite Specifies how the console window is created. By default, the console window is created dynamically
		 * using document's write method. This has the advantage of keeping all the code in one single JavaScript file. However,
		 * if your page sets document.domain then the browser prevents script access to a window unless it too has the same value
		 * set for document.domain. To get round this issue, you can set useDocumentWrite to false and log4javascript will instead
		 * use the external HTML file console.html (or console_uncompressed.html if you're using an uncompressed version of
		 * log4javascript.js), which must be placed in the same directory as your log4javascript.js file.
		 * Note that if useDocumentWrite is set to true, the old pop-up window will always be closed and a new one created whenever
		 * the page is refreshed, even if setUseOldPopUp(true) has been called.
		 * In general it's simpler to use the document.write method, so unless your page needs to set document.domain,
		 * useDocumentWrite should be set to true.
		 * If not specified, defaults to true.
		 * @param width The outer width in pixels of the pop-up window. If not specified, defaults to 600.
		 * @param height The outer height in pixels of the pop-up window. If not specified, defaults to 400.
		 */
		constructor(lazyInit?: boolean, initiallyMinimized?: boolean, useDocumentWrite?: boolean, width?: number, height?: number);

		/**
		 * Returns whether the console window starts off hidden / minimized.
		 */
		isInitiallyMinimized(): boolean;

		/**
		 * Sets whether the console window should start off hidden / minimized.
		 */
		setInitiallyMinimized(initiallyMinimized: boolean): void;

		/**
		 * Returns whether the pop-up window is focussed (i.e. brought it to the front) when a new log message is added. Default value is false.
		 */
		isFocusPopUp(): boolean;

		/**
		 * Sets whether to focus the pop-up window (i.e. bring it to the front) when a new log message is added.
		 */
		setFocusPopUp(focusPopUp: boolean): void;

		/**
		 * Returns whether the same pop-up window is used if the main page is reloaded. If set to true, when the page is reloaded a
		 * line is drawn in the pop-up and subsequent log messages are added to the same pop-up. Otherwise, a new pop-up window is
		 * created that replaces the original pop-up. If not specified, defaults to true.
		 */
		isUseOldPopUp(): boolean;

		/**
		 * Sets whether to use the same pop-up window if the main page is reloaded. See isUseOldPopUp above for details.
		 */
		setUseOldPopUp(useOldPopUp: boolean): void;

		/**
		 * Returns whether an alert is shown to the user when the pop-up window cannot be created as a result of a pop-up blocker.
		 * Default value is true.
		 */
		isComplainAboutPopUpBlocking(): boolean;

		/**
		 * Sets whether to announce to show an alert to the user when the pop-up window cannot be created as a result of a pop-up blocker.
		 */
		setComplainAboutPopUpBlocking(complainAboutPopUpBlocking: boolean): void;

		/**
		 * Returns whether new log messages are displayed at the top of the pop-up window. Default value is false (i.e. log messages
		 * are appended to the bottom of the window).
		 */
		isNewestMessageAtTop(): boolean;

		/**
		 * Sets whether to display new log messages at the top inside the pop-up window.
		 */
		setNewestMessageAtTop(newestMessageAtTop: boolean): void;

		/**
		 * Returns whether the pop-up window scrolls to display the latest log message when a new message is logged. Default value is true.
		 */
		isScrollToLatestMessage(): boolean;

		/**
		 * Sets whether to scroll the pop-up window to display the latest log message when a new message is logged.
		 */
		setScrollToLatestMessage(scrollToLatestMessage: boolean): void;

		/**
		 * Returns whether the pop-up window reopens automatically after being closed when a new log message is logged. Default value is false.
		 */
		isReopenWhenClosed(): boolean;

		/**
		 * Sets whether to reopen the pop-up window automatically after being closed when a new log message is logged.
		 */
		setReopenWhenClosed(reopenWhenClosed: boolean): void;

		/**
		 * Returns the outer width in pixels of the pop-up window.
		 */
		getWidth(): number;

		/**
		 * Sets the outer width in pixels of the pop-up window.
		 */
		setWidth(width: number): void;

		/**
		 * Returns the outer height in pixels of the pop-up window.
		 */
		getHeight(): number;

		/**
		 * Sets the outer height in pixels of the pop-up window.
		 */
		setHeight(height: number): void;

		/**
		 * Returns the largest number of log messages that are displayed and stored by the the console. Once reached, a new log
		 * message wil cause the oldest message to be discarded. Default value is null, which means no limit is applied.
		 */
		getMaxMessages(): number;

		/**
		 * Sets the largest number of messages displayed and stored by the console window. Set this to null to make this number unlimited.
		 */
		setMaxMessages(maxMessages: number): void;

		/**
		 * Returns whether the console includes a command line. Default value is true.
		 */
		isShowCommandLine(): boolean;

		/**
		 * Sets whether the console includes a command line.
		 */
		setShowCommandLine(showCommandLine: boolean): void;

		/**
		 * Returns the number of levels to expand when an object value is logged to the console. Each property of an object above
		 * this threshold will be expanded if it is itself an object or array, otherwise its string representation will be displayed.
		 * Default value is 1 (i.e. the properties of the object logged will be displayed in their string representation but not expanded).
		 */
		getCommandLineObjectExpansionDepth(): number;

		/**
		 * Sets the number of levels to expand when an object value is logged to the console.
		 */
		setCommandLineObjectExpansionDepth(expansionDepth: number): void;

		/**
		 * Returns a reference to the window in which commands typed into the command line are currently being executed.
		 */
		getCommandWindow(): Window;

		/**
		 * Sets the window in which commands typed into the command line are executed.
		 */
		setCommandWindow(commandWindow: Window): void;

		/**
		 * Returns the layout used to format the output for commands typed into the command line. The default value is a
		 * PatternLayout with pattern string %m
		 */
		getCommandLayout(): Layout;

		/**
		 * Sets the layout used to format the output for commands typed into the command line.
		 */
		setCommandLayout(commandLayout: Layout): void;

		/**
		 * Clears all messages from the console window.
		 */
		clear(): void;

		/**
		 * Closes the pop-up window.
		 */
		close(): void;

		/**
		 * Opens the pop-up window, if not already open.
		 */
		show(): void;

		/**
		 * Closes the pop-up window.
		 */
		hide(): void;

		/**
		 * Brings the console window to the top and gives it the focus.
		 */
		focus(): void;

		/**
		 * Brings the console window to the top and gives the focus to the command line.
		 */
		focusCommandLine(): void;

		/**
		 * Brings the console window to the top and gives the focus to the search box.
		 */
		focusSearch(): void;

		/**
		 * Evaluates the expression and appends the result to the console.
		 */
		evalCommandAndAppend(expr: string): void;

		/**
		 * Adds a function with the name specified to the list of functions available on the command line. This feature may be used
		 * to add custom functions to the command line.
		 */
		addCommandLineFunction(functionName: string,
			commandLineFunction: { (appender: Appender, args: any, returnValue: { appendResult: boolean; isError: boolean; }): any; }): void;
	}

	/**
	 * Logs messages to a console window in the page. The console is identical to that used by the PopUpAppender, except for the
	 * absence of a 'Close' button.
	 */
	export class InPageAppender extends Appender {
		/**
		 * Constructor
		 * @param container The container element for the console window. This should be an HTML element.
		 * @param lazyInit Set this to true to create the console only when the first log message reaches the appender. Otherwise,
		 * the console is initialized as soon as the appender is created. If not specified, defaults to true.
		 * @param initiallyMinimized Whether the console window should start off hidden / minimized. If not specified, defaults to false
		 * @param useDocumentWrite Specifies how the console window is created. By default, the console window is created dynamically
		 * using document's write method. This has the advantage of keeping all the code in one single JavaScript file. However,
		 * if your page sets document.domain then the browser prevents script access to a window unless it too has the same value
		 * set for document.domain. To get round this issue, you can set useDocumentWrite to false and log4javascript will instead
		 * use the external HTML file console.html (or console_uncompressed.html if you're using an uncompressed version of
		 * log4javascript.js), which must be placed in the same directory as your log4javascript.js file.
		 * In general it's simpler to use the document.write method, so unless your page needs to set document.domain,
		 * useDocumentWrite should be set to true.
		 * If not specified, defaults to true.
		 * @param width The width of the console window. Any valid CSS length may be used. If not specified, defaults to 100%.
		 * @param height The height of the console window. Any valid CSS length may be used. If not specified, defaults to 250px.
		 */
		constructor(container: HTMLElement, lazyInit?: boolean, initiallyMinimized?: boolean,
			useDocumentWrite?: boolean, width?: number, height?: number);

		/**
		 * Sets a CSS style property on the HTML element containing the console iframe.
		 */
		addCssProperty(name: string, value: string): void;

		/**
		 * Returns whether the console window is currently visible.
		 */
		isVisible(): boolean;

		/**
		 * Returns whether the console window starts off hidden / minimized.
		 */
		isInitiallyMinimized(): boolean;

		/**
		 * Sets whether the console window should start off hidden / minimized.
		 */
		setInitiallyMinimized(initiallyMinimized: boolean): void;

		/**
		 * Returns whether new log messages are displayed at the top of the pop-up window. Default value is false (i.e. log messages
		 * are appended to the bottom of the window).
		 */
		isNewestMessageAtTop(): boolean;

		/**
		 * Sets whether to display new log messages at the top inside the pop-up window.
		 */
		setNewestMessageAtTop(newestMessageAtTop: boolean): void;

		/**
		 * Returns whether the pop-up window scrolls to display the latest log message when a new message is logged. Default value is true.
		 */
		isScrollToLatestMessage(): boolean;

		/**
		 * Sets whether to scroll the pop-up window to display the latest log message when a new message is logged.
		 */
		setScrollToLatestMessage(scrollToLatestMessage: boolean): void;

		/**
		 * Returns the outer width of the console window.
		 */
		getWidth(): number;

		/**
		 * Sets the outer width of the console window. Any valid CSS length may be used.
		 */
		setWidth(width: number): void;

		/**
		 * Returns the outer height of the console window.
		 */
		getHeight(): number;

		/**
		 * Sets the outer height of the console window. Any valid CSS length may be used.
		 */
		setHeight(height: number): void;

		/**
		 * Returns the largest number of messages displayed and stored by the console window.
		 */
		getMaxMessages(): number;

		/**
		 * Sets the largest number of messages displayed and stored by the console window. Set this to null to make this number unlimited.
		 */
		setMaxMessages(maxMessages: number): void;

		/**
		 * Returns whether the console includes a command line. Default value is true.
		 */
		isShowCommandLine(): boolean;

		/**
		 * Sets whether the console includes a command line.
		 */
		setShowCommandLine(showCommandLine: boolean): void;

		/**
		 * Returns the number of levels to expand when an object value is logged to the console. Each property of an object above
		 * this threshold will be expanded if it is itself an object or array, otherwise its string representation will be displayed.
		 * Default value is 1 (i.e. the properties of the object logged will be displayed in their string representation but not expanded).
		 */
		getCommandLineObjectExpansionDepth(): number;

		/**
		 * Sets the number of levels to expand when an object value is logged to the console.
		 */
		setCommandLineObjectExpansionDepth(expansionDepth: number): void;

		/**
		 * Returns a reference to the window in which commands typed into the command line are currently being executed.
		 */
		getCommandWindow(): Window;

		/**
		 * Sets the window in which commands typed into the command line are executed.
		 */
		setCommandWindow(commandWindow: Window): void;

		/**
		 * Returns the layout used to format the output for commands typed into the command line. The default value is a
		 * PatternLayout with pattern string %m
		 */
		getCommandLayout(): Layout;

		/**
		 * Sets the layout used to format the output for commands typed into the command line.
		 */
		setCommandLayout(commandLayout: Layout): void;

		/**
		 * Clears all messages from the console window.
		 */
		clear(): void;

		/**
		 * Closes the pop-up window.
		 */
		close(): void;

		/**
		 * Shows / unhides the console window.
		 */
		show(): void;

		/**
		 * Hides / minimizes the console window.
		 */
		hide(): void;

		/**
		 * Brings the console window to the top and gives it the focus.
		 */
		focus(): void;

		/**
		 * Brings the console window to the top and gives the focus to the command line.
		 */
		focusCommandLine(): void;

		/**
		 * Brings the console window to the top and gives the focus to the search box.
		 */
		focusSearch(): void;

		/**
		 * Evaluates the expression and appends the result to the console.
		 */
		evalCommandAndAppend(expr: string): void;

		/**
		 * Adds a function with the name specified to the list of functions available on the command line. This feature may be used
		 * to add custom functions to the command line.
		 */
		addCommandLineFunction(functionName: string,
			commandLineFunction: { (appender: Appender, args: any, returnValue: { appendResult: boolean; isError: boolean; }): any; }): void;
	}

	/**
	 * Writes log messages to the browser's built-in console, if present. This only works currently in Safari, Opera and Firefox
	 * with the excellent Firebug extension installed.
	 */
	export class BrowserConsoleAppender extends Appender {
		/**
		 * Constructor
		 */
		constructor();
	}

	//#endregion

	// #region Layouts

	/**
	 * There are a few methods common to all layouts.
	 */
	export class Layout {
		/**
		 * Formats the log message. You should override this method in your own layouts.
		 */
		format(loggingEvent: LoggingEvent): string;

		/**
		 * Returns whether the layout ignores an error object in a logging event passed to its format method.
		 */
		ignoresThrowable(): boolean;

		/**
		 * Returns the content type of the output of the layout.
		 */
		getContentType(): string;

		/**
		 * Returns whether the layout's output is suitable for batching. JsonLayout and XmlLayout are the only built-in layouts that
		 * return true for this method.
		 */
		allowBatching(): boolean;

		/**
		 * Used internally by log4javascript in constructing formatted output for some layouts.
		 */
		getDataValues(loggingEvent: LoggingEvent): Array<any>;

		/**
		 * This method is used to change the default keys used to create formatted name-value pairs for the properties of a log
		 * message, for layouts that do this. These layouts are JsonLayout and HttpPostDataLayout.
		 * @param loggerKey Parameter to use for the log message's logger name. Default is logger.
		 * @param timeStampKey Parameter to use for the log message's timestamp. Default is timestamp.
		 * @param levelKey Parameter to use for the log message's level. Default is level.
		 * @param messageKey Parameter to use for the message itself. Default is message.
		 * @param exceptionKey Parameter to use for the log message's error (exception). Default is exception.
		 * @param urlKey Parameter to use for the current page URL. Default is url.
		 */
		setKeys(loggerKey: string, timeStampKey: string, levelKey: string, messageKey: string, exceptionKey: string, urlKey: string): void;

		/**
		 * Some layouts (JsonLayout, HttpPostDataLayout, PatternLayout and XmlLayout) allow you to set custom fields (e.g. a session
		 * id to send to the server) to the formatted output. Use this method to set a custom field. If there is already a custom
		 * field with the specified name, its value will be updated with value.
		 * @param name Name of the custom property you wish to be included in the formmtted output.
		 * @param value Value of the custom property you wish to be included in the formatted output.
		 */
		setCustomField(name: string, value: string): string;

		/**
		 * Returns whether the layout has any custom fields.
		 */
		hasCustomFields(): boolean;

		formatWithException(loggingEvent: LoggingEvent): string;
	}

	/**
	 * The most basic layout. NullLayout's format() methods performs no formatting at all and simply returns the message logged.
	 */
	export class NullLayout extends Layout {
		/**
		 * Constructor
		 */
		constructor();
	}

	/**
	 * Provides basic formatting. SimpleLayout consists of the level of the log statement, followed by " - " and then the log message
	 * itself. For example, "DEBUG - Hello world".
	 */
	export class SimpleLayout extends Layout {
		/**
		 * Constructor
		 */
		constructor();
	}

	/**
	 * Provides a flexible way of formatting a log message by means of a conversion pattern string. The behaviour of this layout is a
	 * full implementation of PatternLayout in log4j, with the exception of the set of conversion characters - log4javascript's is
	 * necessarily a subset of that of log4j with a few additions of its own, since many of the conversion characters in log4j only
	 * make sense in the context of Java.
	 * The conversion pattern consists of literal text interspersed with special strings starting with a % symbol called conversion
	 * specifiers. A conversion specifier consists of the % symbol, a conversion character (possible characters are listed below) and
	 * format modifiers. For full documentation of the conversion pattern, see log4j's documentation.
	 */
	export class PatternLayout extends Layout {
		/**
		 * Built-in conversion pattern, equivalent to %r %p %c - %m%n.
		 */
		static TTCC_CONVERSION_PATTERN: string;

		/**
		 * Built-in conversion pattern, equivalent to %m%n.
		 */
		static DEFAULT_CONVERSION_PATTERN: string;

		/**
		 * Built-in date format (and also the default), equivalent to yyyy-MM-dd HH:mm:ss,SSS.
		 */
		static ISO8601_DATEFORMAT: string;

		/**
		 * Built-in date format, equivalent to dd MMM YYYY HH:mm:ss,SSS.
		 */
		static DATETIME_DATEFORMAT: string;

		/**
		 * Built-in date format, equivalent to HH:mm:ss,SSS.
		 */
		static ABSOLUTETIME_DATEFORMAT: string;

		/**
		 * Constructor
		 * @param pattern The conversion pattern string to use.
		 */
		constructor(pattern: string);
	}

	/**
	 * Based on log4j's XmlLayout, this layout formats a log message as a fragment of XML.
	 */
	export class XmlLayout extends Layout {
		/**
		 * Constructor
		 * @param combineMessages Whether or not to format multiple log messages as a combined single <log4javascript:message>
		 * element composed of each individual message separated by line breaks or to include a <log4javascript:message> element for
		 * each message inside one <log4javascript:messages> element. If not specified, defaults to true.
		 */
		constructor(combineMessages?: boolean);
	}

	/**
	 * Formats a logging event into JavaScript Object Notation (JSON). JSON is a subset of JavaScript's object literal syntax,
	 * meaning that log messages formatted with this layout can be interpreted directly by JavaScript and converted into objects.
	 * See json.org for more details about JSON.
	 */
	export class JsonLayout extends Layout {
		/**
		 * Constructor
		 * @param readable Whether or not to format each log message with line breaks and tabs. If not specified, defaults to false.
		 * @param combineMessages Whether or not to format multiple log messages as a combined single message property composed of
		 * each individual message separated by line breaks or to format multiple messages as an array. If not specified, defaults to true.
		 */
		constructor(readable?: boolean, combineMessages?: boolean);

		/**
		 * Returns whether or not to each log message is formatted with line breaks and tabs.
		 */
		isReadable(): boolean;
	}

	/**
	 * Formats the log message as a simple URL-encoded string from which a simple server-side script may extract parameters such as
	 * the log message, severity and timestamp. This is the default layout for AjaxAppender.
	 */
	export class HttpPostDataLayout extends Layout {
		/**
		 * Constructor
		 */
		constructor();
	}

	// #endregion

	// #region log4javascript error handling

	/**
	 * log4javascript has a single rudimentary logger-like object of its own to handle messages generated by log4javascript itself.
	 * This logger is called logLog and is accessed via log4javascript.logLog.
	 */
	export namespace logLog {

		/**
		 * Sets whether logLog is in quiet mode or not. In quiet mode, no messages sent to logLog have any visible effect. By default,
		 * quiet mode is switched off.
		 * @param quietMode Whether to turn quiet mode on or off.
		 */
		export function setQuietMode(quietMode: boolean): void;

		/**
		 * Sets how many errors logLog will display alerts for. By default, only the first error encountered generates an alert to the
		 * user. If you turn all errors on by supplying true to this method then all errors will generate alerts.
		 * @param showAllErrors Whether to show all errors or just the first.
		 */
		export function setAlertAllErrors(alertAllErrors: boolean): void;

		/**
		 * Logs a debugging message to an in-memory list.
		 */
		export function debug(message: string, exception?: Error): void;

		/**
		 * Displays an alert of all debugging messages.
		 */
		export function displayDebug(): void;

		/**
		 * Currently has no effect.
		 */
		export function warn(message: string, exception?: Error): void;

		/**
		 * Generates an alert to the user if and only if the error is the first one encountered and setAlertAllErrors(true) has not been called.
		 */
		export function error(message: string, exception?: Error): void;

	}

	// #endregion
}
