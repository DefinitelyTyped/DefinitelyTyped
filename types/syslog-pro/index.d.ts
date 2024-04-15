/**
 * Format the ANSI foreground color code from a RGB hex code or ANSI color code.
 *
 * @param hex The color hex code in the form of `'#FFFFFF'` or `number` of the ANSI color code
 * (30-37 Standard & 0-255 Extended).
 * @param extendedColor Whether to use ANSI extended color color codes.
 * @return The formatted ANSI color code.
 * @throws A Format Error.
 */
export function RgbToAnsi(hex: string | number, extendedColor?: boolean): number;

/**
 * A class to work with syslog messages using UDP, TCP, or TLS transport.
 * There is support for Syslog message formatting RFC-3164, RFC-5424 including
 * Structured Data, IBM LEEF (Log Event Extended Format), and HP CEF (Common
 * Event Format).
 * Syslog formatting classes can be used as input into a Syslog class to be used
 * simultaneously to the same Syslog server.
 */
export class Syslog implements Syslog.Options {
    /**
     * Construct a new Syslog transport object with user options.
     */
    constructor(options?: Syslog.Options);

    readonly target: string;
    readonly protocol: Syslog.Protocol;
    readonly port: number;
    readonly tcpTimeout: number;
    readonly tlsServerCerts: readonly string[];
    readonly tlsClientCert?: string;
    readonly tlsClientKey?: string;
    readonly format: Syslog.Format;
    readonly rfc3164?: RFC3164;
    readonly rfc5424?: RFC5424;
    readonly leef?: LEEF;
    readonly cef?: CEF;
}

export namespace Syslog {
    interface Options {
        /**
         * The IP Address|FQDN of the Syslog Server, this option if set will take precedence over any target
         * set in a formatting object.
         *
         * @default 'localhost'
         */
        target?: string | undefined;

        /**
         * L4 transport protocol, this option if set will take precedence over any
         * transport set in a formatting object.
         *
         * @default 'udp'
         */
        protocol?: Protocol | undefined;

        /**
         * IP port, this option if set will take precedence over any IP Port set in a formatting object.
         *
         * @default 514
         */
        port?: number | undefined;

        /**
         * Ignored for all other transports, this option if set will take precedence over any timeout
         * set in a formatting object.
         *
         * @default 10000
         */
        tcpTimeout?: number | undefined;

        /**
         * Authorized TLS server certificates file locations, this option if set will take precedence
         * over any certificates set in a formatting object.
         */
        tlsServerCerts?: string | readonly string[] | undefined;

        /**
         * Client TLS certificate file location that this client should use, this option if set will take
         * precedence over any certificates set in a formatting object.
         */
        tlsClientCert?: string | undefined;

        /**
         * Client TLS key file location that this client should use, this option if set will take
         * precedence over any certificates set in a formatting object.
         */
        tlsClientKey?: string | undefined;

        /**
         * Syslog format.
         *
         * @default 'none'
         */
        format?: Format | undefined;

        /**
         * RFC3164 related settings.
         */
        rfc3164?: RFC3164.Options | undefined;

        /**
         * RFC5424 related settings.
         */
        rfc5424?: RFC5424.Options | undefined;

        /**
         * IBM LEEF (Log Event Extended Format) settings.
         */
        leef?: LEEF.Options | undefined;

        /**
         * HP CEF (Common Event Format) settings.
         */
        cef?: CEF.Options | undefined;
    }

    type Protocol = "udp" | "tcp" | "tls";
    type Format = "none" | "rfc3164" | "rfc5424" | "leef" | "cef";
}

export interface RFC {
    readonly extendedColor: boolean;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emergency(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emer(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 1 (Alert).
     *
     * @param msg The alert message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    alert(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    critical(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    crit(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    error(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    err(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warning(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warn(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    notice(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    note(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    informational(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    info(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    log(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 7 (Debug).
     *
     * @param msg The debug message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    debug(msg: string): Promise<string>;

    /**
     * Sets the color to be used for messages at a set priority.
     *
     * @throws A standard error object.
     */
    setColor(colors: Colors, extendedColor?: boolean): true;
}

export interface Colors {
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    emergencyColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    alertColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    criticalColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    errorColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    warningColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    noticeColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    informationalColor?: string | number;
    /**
     * A RGB Hex coded color in the form of #FFFFFF or as the ANSI color code number
     * (30-37 Standard & 0-255 Extended).
     */
    debugColor?: string | number;
}

/**
 * A class to work with RFC3164 formatted syslog messages. The messaging is
 * fully configurable and ANSI foreground colors can be added. Both ANSI 8 and
 * ANSI 256 color are fully supported.
 *
 * A Syslog class with a configured
 * Syslog server target can also be used as the input into the formatting
 * classes so that it may run independently.
 *
 * The RFC3164 Syslog logging format is meant to be used as a stream of log data
 * from a service or application. This class is designed to be used in this
 * fashion where new messages are written to the class as needed.
 */
export class RFC3164 implements RFC, RFC3164.Options {
    /**
     * Construct a new RFC3164 formatted Syslog object with user options.
     */
    constructor(options?: RFC3164.Options);

    readonly applicationName: string;
    readonly hostname: string;
    readonly facility: number;
    readonly color: boolean;
    readonly extendedColor: boolean;
    readonly server?: Syslog;

    /**
     * Build a formatted message.
     *
     * @param msg The unformatted Syslog message to format.
     * @return A Syslog formatted string according to the selected RFC.
     * @throws A standard error object.
     */
    buildMessage(msg: string, options?: RFC3164.MessageOptions): string;

    /**
     * Send a RFC3164 formatted message.
     *
     * @param msg The unformatted Syslog message to send.
     * @returns Returns the formatted message that was sent. If no server connection was defined when the
     * class was created a default Syslog connector will be used.
     * @throws A standard error object.
     */
    send(msg: string, options?: RFC3164.MessageOptions): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emergency(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emer(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 1 (Alert).
     *
     * @param msg The alert message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    alert(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    critical(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    crit(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    error(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    err(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warning(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warn(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    notice(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    note(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    informational(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    info(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    log(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 7 (Debug).
     *
     * @param msg The debug message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    debug(msg: string): Promise<string>;

    /**
     * Sets the color to be used for messages at a set priority.
     *
     * @throws {Error} A standard error object.
     */
    setColor(colors: Colors, extendedColor?: boolean): true;
}

export namespace RFC3164 {
    interface Options {
        /**
         * Application name.
         *
         * @default ''
         */
        applicationName?: string | undefined;

        /**
         * The name of this server.
         *
         * @default os.hostname
         */
        hostname?: string | undefined;

        /**
         * Facility code to use sending this message.
         *
         * @default 23
         */
        facility?: number | undefined;

        /**
         * Apply color coding encoding tag with syslog message text.
         *
         * @default false
         */
        color?: boolean | undefined;

        /**
         * Use the extended ANSI color set encoding tag with syslog message text.
         *
         * @default false
         */
        extendedColor?: boolean | undefined;

        /**
         * User defined colors for severities.
         */
        colors?: Colors | undefined;

        /**
         * A Syslog server connection that should be used to send messages directly from this class.
         *
         * @default false
         */
        server?: Syslog.Options | false | undefined;
    }

    interface MessageOptions {
        /**
         * The message severity (0-7).
         *
         * @default 6
         */
        severity?: Severity | undefined;

        /**
         * The ANSI color code to use if message coloration is selected.
         *
         * @default 36
         */
        msgColor?: number | undefined;
    }

    type Severity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

/**
 * A class to work with RFC5424 formatted syslog messages. The messaging is
 * fully configurable and ANSI foreground colors can be added. Both ANSI 8
 * and ANSI 256 color are fully supported.
 *
 * A Syslog class with a configured
 * Syslog server target can also be used as the input into the formatting
 * classes so that it may run independently.
 *
 * The RFC5424 Syslog logging format is meant to be used as a stream of log data
 * from a service or application. This class is designed to be used in this
 * fashion where new messages are written to the class as needed.
 */
export class RFC5424 implements RFC, RFC5424.Options {
    /**
     * Construct a new RFC5424 formatted Syslog object with user options.
     */
    constructor(options?: RFC5424.Options);

    readonly applicationName: string;
    readonly hostname: string;
    readonly timestamp: boolean;
    readonly timestampUTC: boolean;
    readonly timestampTZ: boolean;
    readonly timestampMS: boolean;
    readonly includeStructuredData: boolean;
    readonly utf8BOM: boolean;
    readonly color: boolean;
    readonly extendedColor: boolean;
    readonly server?: Syslog;

    /**
     * Build a formatted message.
     *
     * @param msg The unformatted Syslog message to format.
     * @return A Syslog formatted string according to the selected RFC.
     * @throws A standard error object.
     */
    buildMessage(msg: string, options?: RFC5424.MessageOptions): string;

    /**
     * Send a RFC5424 formatted message.
     *
     * @param msg The unformatted Syslog message to send.
     * @returns Returns the formatted message that was sent. If no server connection was defined when the
     * class was created a default Syslog connector will be used.
     * @throws A standard error object.
     */
    send(msg: string, options?: RFC5424.MessageOptions): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emergency(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 0 (Emergency).
     *
     * @param msg The emergency message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    emer(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 1 (Alert).
     *
     * @param msg The alert message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    alert(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    critical(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 2 (Critical).
     *
     * @param msg The critical message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    crit(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    error(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 3 (Error).
     *
     * @param msg The error message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    err(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warning(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 4 (Warning).
     *
     * @param msg The warning message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    warn(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    notice(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 5 (Notice).
     *
     * @param msg The notice message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    note(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    informational(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    info(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 6 (Informational).
     *
     * @param msg The informational message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    log(msg: string): Promise<string>;

    /**
     * Send a Syslog message with a severity level of 7 (Debug).
     *
     * @param msg The debug message to send to the Syslog server.
     * @returns The formatted syslog message sent to the Syslog server.
     * @throws Any bubbled-up error.
     */
    debug(msg: string): Promise<string>;

    /**
     * Sets the color to be used for messages at a set priority.
     *
     * @throws {Error} A standard error object.
     */
    setColor(colors: Colors, extendedColor?: boolean): true;
}

export namespace RFC5424 {
    interface Options {
        /**
         * Application name.
         *
         * @default ''
         */
        applicationName?: string | undefined;

        /**
         * The name of this server.
         *
         * @default os.hostname
         */
        hostname?: string | undefined;

        /**
         * Include a timestamp.
         *
         * @default true
         */
        timestamp?: boolean | undefined;

        /**
         * Whether timestamp should be relative to UTC timezone instead of local timezone.
         *
         * @default false
         */
        timestampUTC?: boolean | undefined;

        /**
         * Timestamp with ms resolution.
         *
         * @default false
         */
        timestampMS?: boolean | undefined;

        /**
         * Should the timestamp include time zone.
         *
         * @default true
         */
        timestampTZ?: boolean | undefined;

        /**
         * Include any provided structured data.
         *
         * @default false
         */
        includeStructuredData?: boolean | undefined;

        /**
         * Include the UTF8 encoding tag with syslog message text.
         *
         * @default true
         */
        utf8BOM?: boolean | undefined;

        /**
         * Apply color coding encoding tag with syslog message text.
         *
         * @default false
         */
        color?: boolean | undefined;

        /**
         * Use the extended ANSI color set encoding tag with syslog message text.
         *
         * @default false
         */
        extendedColor?: boolean | undefined;

        /**
         * User defined colors for severities.
         */
        colors?: Colors | undefined;

        /**
         * A Syslog server connection that should be used to send messages directly from this class.
         *
         * @default false
         */
        server?: Syslog.Options | false | undefined;
    }

    interface MessageOptions {
        /**
         * The message severity (0-7).
         *
         * @default 6
         */
        severity?: Severity | undefined;

        /**
         * Facility code to use sending this message.
         *
         * @default 23
         */
        facility?: number | undefined;

        /**
         * The process id of the service sending this message.
         *
         * @default '-'
         */
        pid?: number | "-" | undefined;

        /**
         * @default '-'
         */
        id?: number | "-" | undefined;

        /**
         * An array of structured data strings conforming to the IETF/IANA defined SD-IDs or IANA
         * registered SMI Network Management Private Enterprise Code SD-ID conforming to the format
         * `[name@<private enterprise number> parameter=value]`.
         */
        msgStructuredData?: readonly string[] | undefined;

        /**
         * The ANSI color code to use if message coloration is selected.
         *
         * @default 36
         */
        msgColor?: number | undefined;
    }

    type Severity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

/**
 * A class to work with IBM LEEF (Log Event Extended Format) messages. This form
 * of system messages is designed to work with security systems. Messages can
 * be saved to file (Saving to file is not part of this module but a LEEF
 * formatted message produced by this module can be saved externally to it) or
 * sent via Syslog.
 *
 * A Syslog class with a configured Syslog server target can also be used as
 * the input into the formatting classes so that it may run independently. The
 * LEEF format is designed to send event data to a SIEM system and should not
 * be used as a logging stream. This class is meant to be used once per message.
 */
export class LEEF implements LEEF.Options {
    /**
     * Construct a new LEEF formatting object with user options.
     */
    constructor(options?: LEEF.Options);

    readonly vendor: string;
    readonly product: string;
    readonly version: string;
    readonly eventId: string;
    readonly syslogHeader: boolean;
    readonly attributes: LEEF.Attributes;
    readonly server?: Syslog;

    /**
     * Build a formatted message.
     *
     * @return The formatted message.
     */
    buildMessage(): string;

    /**
     * Send a LEEF formatted message.
     *
     * @param syslogOptions Syslog server options that should be used to send messages directly from this class.
     */
    send(syslogOptions?: Syslog.Options | false): Promise<string>;
}

export namespace LEEF {
    interface Options {
        /**
         * The vendor of the system that generated the event being reported.
         *
         * @default 'unknown'
         */
        vendor?: string | undefined;

        /**
         * The product name of the system that generated the event being reported.
         *
         * @default 'unknown'
         */
        product?: string | undefined;

        /**
         * The version name of the system that generated the event being reported.
         *
         * @default 'unknown'
         */
        version?: string | undefined;

        /**
         * The eventId of the system that generated the event being reported.
         *
         * @default 'unknown'
         */
        eventId?: string | undefined;

        /**
         * LEEF message attributes which defaults to all base attributes with null values,
         * new attributes should be added as new elements to this object.
         */
        attributes?: Attributes | undefined;

        /**
         * Should the LEEF message include a Syslog header with Timestamp and source.
         *
         * @default true
         */
        syslogHeader?: boolean | undefined;

        /**
         * A Syslog server connection that should be used to send messages directly from this class.
         *
         * @default false
         */
        server?: Syslog.Options | false | undefined;
    }

    interface Attributes {
        cat?: string | null;
        devTime?: string | null;
        devTimeFormat?: string | null;
        proto?: string | null;
        sev?: string | null;
        src?: string | null;
        dst?: string | null;
        srcPort?: string | null;
        dstPort?: string | null;
        srcPreNAT?: string | null;
        dstPreNAT?: string | null;
        srcPostNAT?: string | null;
        dstPostNAT?: string | null;
        usrName?: string | null;
        srcMAC?: string | null;
        dstMAC?: string | null;
        srcPreNATPort?: string | null;
        dstPreNATPort?: string | null;
        srcPostNATPort?: string | null;
        dstPostNATPort?: string | null;
        identSrc?: string | null;
        identHostName?: string | null;
        identNetBios?: string | null;
        identGrpName?: string | null;
        identMAC?: string | null;
        vSrc?: string | null;
        vSrcName?: string | null;
        accountName?: string | null;
        srcBytes?: string | null;
        dstBytes?: string | null;
        srcPackets?: string | null;
        dstPackets?: string | null;
        totalPackets?: string | null;
        role?: string | null;
        realm?: string | null;
        policy?: string | null;
        resource?: string | null;
        url?: string | null;
        groupID?: string | null;
        domain?: string | null;
        isLoginEvent?: string | null;
        isLogoutEvent?: string | null;
        identSecondlp?: string | null;
        calLanguage?: string | null;
        AttributeLimits?: string | null;
        calCountryOrRegion?: string | null;

        [attrName: string]: string | null | undefined;
    }
}

/**
 * A class to work with HP CEF (Common Event Format) messages. This form
 * of system messages is designed to work with security systems. Messages can
 * be saved to file (Saving to file is not part of this module but a CEF
 * formatted message produced by this module can be saved externally to it) or
 * sent via Syslog.
 *
 * A Syslog class with a configured Syslog server target can also be used as
 * the input into the formatting classes so that it may run independently. The
 * CEF format is designed to send event data to a SIEM system and should not be
 * used as a logging stream. This class is meant to be used once per message.
 */
export class CEF implements CEF.Options {
    /**
     * Construct a new CEF formatting object with user options.
     */
    constructor(options?: CEF.Options);

    readonly deviceVendor: string;
    readonly deviceProduct: string;
    readonly deviceVersion: string;
    readonly deviceEventClassId: string;
    readonly name: string;
    readonly severity: CEF.Severity;
    readonly extensions: CEF.Extensions;
    readonly server?: Syslog;

    /**
     * Validate this CEF object.
     *
     * @throws First element to fail validation.
     */
    validate(): true;

    /**
     * Build a CEF formatted string.
     *
     * @return String with formatted message.
     */
    buildMessage(): string;

    /**
     * Send a CEF formatted message.
     *
     * @param syslogOptions Syslog server options that should be used to send messages directly from this class.
     */
    send(syslogOptions?: Syslog.Options | false): Promise<string>;
}

export namespace CEF {
    interface Options {
        /**
         * The vendor of the system that generated the event being reported.
         *
         * @default 'Unknown'
         */
        deviceVendor?: string | undefined;

        /**
         * The product name of the system that generated the event being reported.
         *
         * @default 'Unknown'
         */
        deviceProduct?: string | undefined;

        /**
         * The version name of the system that generated the event being reported.
         *
         * @default 'Unknown'
         */
        deviceVersion?: string | undefined;

        /**
         * The eventId of the system that generated the event being reported.
         *
         * @default 'Unknown'
         */
        deviceEventClassId?: string | undefined;

        /**
         * Name of the service generating the notice.
         *
         * @default 'Unknown'
         */
        name?: string | undefined;

        /**
         * Severity of the notification.
         *
         * @default 'Unknown'
         */
        severity?: Severity | undefined;

        /**
         * Any CEF Key=Value extensions.
         *
         * @default {}
         */
        extensions?: Extensions | undefined;

        /**
         * A Syslog server connection that should be used to send messages directly from this class.
         *
         * @default false
         */
        server?: Syslog.Options | false | undefined;
    }

    type Severity = SeverityString | SeverityNumber;
    type SeverityString = "Unknown" | "Low" | "Medium" | "High" | "Very-High";
    type SeverityNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

    interface Extensions {
        deviceAction?: string | null;
        applicationProtocol?: string | null;
        deviceCustomIPv6Address1?: string | null;
        "deviceCustomIPv6 Address1Label"?: string | null;
        deviceCustomIPv6Address3?: string | null;
        "deviceCustomIPv6Address3 Label"?: string | null;
        "deviceCustomIPv6 Address4"?: string | null;
        "deviceCustomIPv6 Address4Label"?: string | null;
        deviceEventCategory?: string | null;
        deviceCustomFloatingPoint1?: number | null;
        "deviceCustom FloatingPoint1Label"?: string | null;
        deviceCustomFloatingPoint2?: number | null;
        "deviceCustomFloatingPoint2 Label"?: string | null;
        deviceCustomFloatingPoint3?: number | null;
        "deviceCustom FloatingPoint3Label"?: string | null;
        deviceCustomFloatingPoint4?: number | null;
        "deviceCustom FloatingPoint4Label"?: string | null;
        deviceCustomNumber1?: number | null;
        deviceCustomNumber1Label?: string | null;
        DeviceCustomNumber2?: number | null;
        deviceCustomNumber2Label?: string | null;
        deviceCustomNumber3?: number | null;
        deviceCustomNumber3Label?: string | null;
        baseEventCount?: number | null;
        deviceCustomString1?: string | null;
        deviceCustomString1Label?: string | null;
        deviceCustomString2?: string | null;
        deviceCustomString2Label?: string | null;
        deviceCustomString3?: string | null;
        deviceCustomString3Label?: string | null;
        deviceCustomString4?: string | null;
        deviceCustomString4Label?: string | null;
        deviceCustomString5?: string | null;
        deviceCustomString5Label?: string | null;
        deviceCustomString6?: string | null;
        deviceCustomString6Label?: string | null;
        destinationDnsDomain?: string | null;
        destinationServiceName?: string | null;
        "destinationTranslated Address"?: string | null;
        destinationTranslatedPort?: string | null;
        deviceCustomDate1?: string | null;
        deviceCustomDate1Label?: string | null;
        deviceCustomDate2?: string | null;
        deviceCustomDate2Label?: string | null;
        deviceDirection?: number | null;
        deviceDnsDomain?: string | null;
        deviceExternalId?: string | null;
        deviceFacility?: string | null;
        deviceInboundInterface?: string | null;
        deviceNtDomain?: string | null;
        deviceOutboundInterface?: string | null;
        devicePayloadId?: string | null;
        deviceProcessName?: string | null;
        deviceTranslatedAddress?: string | null;
        destinationHostName?: string | null;
        destinationMacAddress?: string | null;
        destinationNtDomain?: string | null;
        destinationProcessId?: number | null;
        destinationUserPrivileges?: string | null;
        destinationProcessName?: string | null;
        destinationPort?: number | null;
        destinationAddress?: string | null;
        deviceTimeZone?: string | null;
        destinationUserId?: string | null;
        destinationUserName?: string | null;
        deviceAddress?: string | null;
        deviceHostName?: string | null;
        deviceMacAddress?: string | null;
        deviceProcessId?: number | null;
        endTime?: string | null;
        externalId?: string | null;
        fileCreateTime?: string | null;
        fileHash?: string | null;
        fileId?: string | null;
        fileModificationTime?: string | null;
        filePath?: string | null;
        filePermission?: string | null;
        fileType?: string | null;
        flexDate1?: string | null;
        flexDate1Label?: string | null;
        flexString1?: string | null;
        flexString1Label?: string | null;
        flexString2?: string | null;
        flexString2Label?: string | null;
        filename?: string | null;
        fileSize?: number | null;
        bytesIn?: number | null;
        message?: string | null;
        oldFileCreateTime?: string | null;
        oldFileHash?: string | null;
        oldFileId?: string | null;
        oldFileModificationTime?: string | null;
        oldFileName?: string | null;
        oldFilePath?: string | null;
        oldFileSize?: number | null;
        oldFileType?: string | null;
        bytesOut?: number | null;
        eventOutcome?: string | null;
        transportProtocol?: string | null;
        Reason?: string | null;
        requestUrl?: string | null;
        requestClientApplication?: string | null;
        requestContext?: string | null;
        requestCookies?: string | null;
        requestMethod?: string | null;
        deviceReceiptTime?: string | null;
        sourceHostName?: string | null;
        sourceMacAddress?: string | null;
        sourceNtDomain?: string | null;
        sourceDnsDomain?: string | null;
        sourceServiceName?: string | null;
        sourceTranslatedAddress?: string | null;
        sourceTranslatedPort?: number | null;
        sourceProcessId?: number | null;
        sourceUserPrivileges?: string | null;
        sourceProcessName?: string | null;
        sourcePort?: number | null;
        sourceAddress?: string | null;
        startTime?: string | null;
        sourceUserId?: string | null;
        sourceUserName?: string | null;
        type?: ExtensionType | null;
        agentDnsDomain?: string | null;
        agentNtDomain?: string | null;
        agentTranslatedAddress?: string | null;
        "agentTranslatedZone ExternalID"?: string | null;
        agentTranslatedZoneURI?: string | null;
        agentZoneExternalID?: string | null;
        agentZoneURI?: string | null;
        agentAddress?: string | null;
        agentHostName?: string | null;
        agentId?: string | null;
        agentMacAddress?: string | null;
        agentReceiptTime?: string | null;
        agentType?: string | null;
        agentTimeZone?: string | null;
        agentVersion?: string | null;
        customerExternalID?: string | null;
        customerURI?: string | null;
        "destinationTranslated ZoneExternalID"?: string | null;
        "destinationTranslated ZoneURI"?: string | null;
        destinationZoneExternalID?: string | null;
        destinationZoneURI?: string | null;
        "deviceTranslatedZone ExternalID"?: string | null;
        deviceTranslatedZoneURI?: string | null;
        deviceZoneExternalID?: string | null;
        deviceZoneURI?: string | null;
        destinationGeoLatitude?: number | null;
        destinationGeoLongitude?: number | null;
        eventId?: number | null;
        rawEvent?: string | null;
        sourceGeoLatitude?: number | null;
        sourceGeoLongitude?: number | null;
        "sourceTranslatedZone ExternalID"?: string | null;
        sourceTranslatedZoneURI?: string | null;
        sourceZoneExternalID?: string | null;
        sourceZoneURI?: string | null;

        [extension: string]: string | number | null | undefined;
    }

    type ExtensionType = 0 | 1 | 2 | 3;
}
