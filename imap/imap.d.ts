// Type definitions for imap v0.8.14
// Project: https://www.npmjs.com/package/imap
// Definitions by: Peter Snider <https://github.com/psnider/>
// Definitions: https://github.com/psnider/DefinitelyTyped/imap

/// <reference path='../node/node.d.ts' />


declare module IMAP {
    
    // The property names of these interfaces match the documentation (where type names were given).

    export interface Config {
        user: string;               // Username for plain-text authentication.
        password: string;           // Password for plain-text authentication.
        xoauth?: string;            // Base64-encoded OAuth token for OAuth authentication for servers that support it (See Andris Reinman's xoauth.js module to help generate this string).
        xoauth2?: string;           // Base64-encoded OAuth2 token for The SASL XOAUTH2 Mechanism for servers that support it (See Andris Reinman's xoauth2 module to help generate this string).
        host?: string;              // Hostname or IP address of the IMAP server. Default: "localhost"
        port?: number;              // Port number of the IMAP server. Default: 143
        tls?: boolean;              // Perform implicit TLS connection? Default: false
        tlsOptions?: Object;        // Options object to pass to tls.connect() Default: (none)
        autotls?: string;           // Set to 'always' to always attempt connection upgrades via STARTTLS, 'required' only if upgrading is required, or 'never' to never attempt upgrading. Default: 'never'
        connTimeout?: number;       // Number of milliseconds to wait for a connection to be established. Default: 10000
        authTimeout?: number;       // Number of milliseconds to wait to be authenticated after a connection has been established. Default: 5000
        keepalive?: any;  /* boolean|KeepAlive */    // Configures the keepalive mechanism. Set to true to enable keepalive with defaults or set to object to enable and configure keepalive behavior: Default: true
        debug?: Function;           // If set, the function will be called with one argument, a string containing some debug info Default: (no debug output)
    }


    export interface KeepAlive {
        interval?:      number;       // This is the interval (in milliseconds) at which NOOPs are sent and the interval at which idleInterval is checked. Default: 10000
        idleInterval?:  number;       // This is the interval (in milliseconds) at which an IDLE command (for servers that support IDLE) is re-sent. Default: 300000 (5 mins)
        forceNoop?:     boolean;      // Set to true to force use of NOOP keepalive on servers also support IDLE. Default: false
    }

    // One of:
    // - a single message identifier
    // - a message identifier range (e.g. '2504:2507' or '*' or '2504:*')
    // - an array of message identifiers
    // - an array of message identifier ranges.
    // type MessageSource = string | string[]





    export interface Box {
        name: string;               // The name of this mailbox.
        readOnly?: boolean;         // True if this mailbox was opened in read-only mode. (Only available with openBox() calls)
        newKeywords: boolean;       //True if new keywords can be added to messages in this mailbox.
        uidvalidity: number;        // A 32-bit number that can be used to determine if UIDs in this mailbox have changed since the last time this mailbox was opened.
        uidnext: number;            // The uid that will be assigned to the next message that arrives at this mailbox.
        flags: string[];            // array - A list of system-defined flags applicable for this mailbox. Flags in this list but not in permFlags may be stored for the current session only. Additional server implementation-specific flags may also be available.
        permFlags: string[];        // A list of flags that can be permanently added/removed to/from messages in this mailbox.
        persistentUIDs: boolean;    // Whether or not this mailbox has persistent UIDs. This should almost always be true for modern mailboxes and should only be false for legacy mail stores where supporting persistent UIDs was not technically feasible.
        messages: {                 //Contains various message counts for this mailbox:
            total: number;          // Total number of messages in this mailbox.
            new: number;            // Number of messages in this mailbox having the Recent flag (this IMAP session is the first to see these messages).
            unseen: number;         //  (Only available with status() calls) Number of messages in this mailbox not having the Seen flag (marked as not having been read).
        };
    }


    // Given in a 'message' event from ImapFetch
    export interface ImapMessage extends NodeJS.EventEmitter {
    }


    export interface FetchOptions {
        markSeen?:       boolean;  // Mark message(s) as read when fetched. Default: false
        struct?:         boolean;  // Fetch the message structure. Default: false
        envelope?:       boolean;  // Fetch the message envelope. Default: false
        size?:           boolean;  // Fetch the RFC822 size. Default: false
        modifiers?:      Object;   // Fetch modifiers defined by IMAP extensions. Default: (none)
        bodies?:         any;      /* string|string[] */  // A string or Array of strings containing the body part section to fetch. Default: (none) Example sections:
    }


    // Returned from fetch()
    export interface ImapFetch extends NodeJS.EventEmitter {
    }
        

    export interface Folder {
        attribs:        string[];
        delimiter:      string;
        children:       Folder[];
        parent:         Folder;   
    }


    export interface MailBoxes {
        [name: string] :    Folder;
    }


    export interface AppendOptions {
        mailbox?:    string;   // The name of the mailbox to append the message to. Default: the currently open mailbox
        flags?:      any;  /* string|string[] */    // A single flag (e.g. 'Seen') or an array of flags (e.g. ['Seen', 'Flagged']) to append to the message. Default: (no flags)
        date?:       Date;     // What to use for message arrival date/time. Default: (current date/time)
    }


    // search() criteria
    /**
        // The following message flags are valid types that do not have arguments:
        ALL:            void;    // All messages.
        ANSWERED:       void;    // Messages with the Answered flag set.
        DELETED:        void;    // Messages with the Deleted flag set.
        DRAFT:          void;    // Messages with the Draft flag set.
        FLAGGED:        void;    // Messages with the Flagged flag set.
        NEW:            void;    // Messages that have the Recent flag set but not the Seen flag.
        SEEN:           void;    // Messages that have the Seen flag set.
        RECENT:         void;    // Messages that have the Recent flag set.
        OLD:            void;    // Messages that do not have the Recent flag set. This is functionally equivalent to "!RECENT" (as opposed to "!NEW").
        UNANSWERED:     void;    // Messages that do not have the Answered flag set.
        UNDELETED:      void;    // Messages that do not have the Deleted flag set.
        UNDRAFT:        void;    // Messages that do not have the Draft flag set.
        UNFLAGGED:      void;    // Messages that do not have the Flagged flag set.
        UNSEEN:         void;    // Messages that do not have the Seen flag set.
        
        // The following are valid types that require string value(s):

        BCC:            any;    // Messages that contain the specified string in the BCC field.
        CC:             any;    // Messages that contain the specified string in the CC field.
        FROM:           any;    // Messages that contain the specified string in the FROM field.
        SUBJECT:        any;    // Messages that contain the specified string in the SUBJECT field.
        TO:             any;    // Messages that contain the specified string in the TO field.
        BODY:           any;    // Messages that contain the specified string in the message body.
        TEXT:           any;    // Messages that contain the specified string in the header OR the message body.
        KEYWORD:        any;    // Messages with the specified keyword set.
        HEADER:         any;    // Requires two string values, with the first being the header name and the second being the value to search for. If this second string is empty, all messages that contain the given header name will be returned.
        // The following are valid types that require a string parseable by JavaScripts Date object OR a Date instance:
        BEFORE:         any;    // Messages whose internal date (disregarding time and timezone) is earlier than the specified date.
        ON:             any;    // Messages whose internal date (disregarding time and timezone) is within the specified date.
        SINCE:          any;    // Messages whose internal date (disregarding time and timezone) is within or later than the specified date.
        SENTBEFORE:     any;    // Messages whose Date header (disregarding time and timezone) is earlier than the specified date.
        SENTON:         any;    // Messages whose Date header (disregarding time and timezone) is within the specified date.
        SENTSINCE:      any;    // Messages whose Date header (disregarding time and timezone) is within or later than the specified date.
        //The following are valid types that require one Integer value:
        LARGER:         number;    // Messages with a size larger than the specified number of bytes.
        SMALLER:        number;    // Messages with a size smaller than the specified number of bytes.
        // The following are valid criterion that require one or more Integer values:
        UID:            any;    // Messages with UIDs corresponding to the specified UID set. Ranges are permitted (e.g. '2504:2507' or '*' or '2504:*').
    */


    export interface MessageFunctions {
        // Searches the currently open mailbox for messages using given criteria. criteria is a list describing what you want to find. For criteria types that require arguments, use an array instead of just the string criteria type name (e.g. ['FROM', 'foo@bar.com']). Prefix criteria types with an "!" to negate.
        search(criteria : any[], callback : (error : Error, uids : string[]) => void) : void;
        // Fetches message(s) in the currently open mailbox.
        fetch(source : any /* MessageSource */, options : FetchOptions) : ImapFetch;
        // Copies message(s) in the currently open mailbox to another mailbox. 
        copy(source : any /* MessageSource */, mailboxName : string, callback : (error : Error) => void) : void;
        // Moves message(s) in the currently open mailbox to another mailbox. Note: The message(s) in the destination mailbox will have a new message UID.
        move(source : any /* MessageSource */, mailboxName : string, callback : (error : Error) => void) : void;
        // Adds flag(s) to message(s).
        addFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Removes flag(s) from message(s).
        delFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Sets the flag(s) for message(s).
        setFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Adds keyword(s) to message(s). keywords is either a single keyword or an array of keywords.
        addKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        //Removes keyword(s) from message(s). keywords is either a single keyword or an array of keywords.
        delKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        // Sets keyword(s) for message(s). keywords is either a single keyword or an array of keywords.
        setKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        // Checks if the server supports the specified capability.
        serverSupports(capability : string) : boolean;
    }




    export class Connection implements NodeJS.EventEmitter, MessageFunctions {
        /** @constructor */
        constructor(config : Config);
        
        // from NodeJS.EventEmitter
        addListener(event: string, listener: Function): NodeJS.EventEmitter;
        on(event: string, listener: Function): NodeJS.EventEmitter;
        once(event: string, listener: Function): NodeJS.EventEmitter;
        removeListener(event: string, listener: Function): NodeJS.EventEmitter;
        removeAllListeners(event?: string): NodeJS.EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        
        // from MessageFunctions
        // Searches the currently open mailbox for messages using given criteria. criteria is a list describing what you want to find. For criteria types that require arguments, use an array instead of just the string criteria type name (e.g. ['FROM', 'foo@bar.com']). Prefix criteria types with an "!" to negate.
        search(criteria : any[], callback : (error : Error, uids : string[]) => void) : void;
        // Fetches message(s) in the currently open mailbox.
        fetch(source : any /* MessageSource */, options : FetchOptions) : ImapFetch;
        // Copies message(s) in the currently open mailbox to another mailbox. 
        copy(source : any /* MessageSource */, mailboxName : string, callback : (error : Error) => void) : void;
        // Moves message(s) in the currently open mailbox to another mailbox. Note: The message(s) in the destination mailbox will have a new message UID.
        move(source : any /* MessageSource */, mailboxName : string, callback : (error : Error) => void) : void;
        // Adds flag(s) to message(s).
        addFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Removes flag(s) from message(s).
        delFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Sets the flag(s) for message(s).
        setFlags(source : any /* MessageSource */, flags : any, callback : (error : Error) => void) : void;
        // Adds keyword(s) to message(s). keywords is either a single keyword or an array of keywords.
        addKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        //Removes keyword(s) from message(s). keywords is either a single keyword or an array of keywords.
        delKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        // Sets keyword(s) for message(s). keywords is either a single keyword or an array of keywords.
        setKeywords(source : any /* MessageSource */, keywords : any /* string|string[] */, callback : (error : Error) => void) : void;
        // Checks if the server supports the specified capability.
        serverSupports(capability : string) : boolean;
        
        // Parses a raw header and returns an object keyed on header fields and the values are Arrays of header field values. Set disableAutoDecode to true to disable automatic decoding of MIME encoded-words that may exist in header field values.
        static parseHeader(rawHeader: string, disableAutoDecode? : boolean) : any;
        
        state: string;          // The current state of the connection (e.g. 'disconnected', 'connected', 'authenticated').
        delimiter: string;      // The (top-level) mailbox hierarchy delimiter. If the server does not support mailbox hierarchies and only a flat list, this value will be falsey.
        namespaces: {           // Contains information about each namespace type (if supported by the server) with the following properties:
            personal: any[];    // Mailboxes that belong to the logged in user.
            other: any[];       // Mailboxes that belong to other users that the logged in user has access to.
            shared: any[];      // Mailboxes that are accessible by any logged in user.
        };
        seq: MessageFunctions;
        /** Attempts to connect and authenticate with the IMAP server. */
        connect() : void;
        /** Closes the connection to the server after all requests in the queue have been sent. */
        end() : void;
        /** Immediately destroys the connection to the server. */
        destroy() : void;
        /** Opens a specific mailbox that exists on the server. mailboxName should include any necessary prefix/path. modifiers is used by IMAP extensions. */
        openBox(mailboxName : string, callback :  (error : Error, mailbox: Box) => void) : void;
        openBox(mailboxName : string, openReadOnly : boolean, callback :  (error : Error, mailbox: Box) => void) : void;
        openBox(mailboxName : string, openReadOnly : boolean, modifiers : Object, callback :  (error : Error, mailbox: Box) => void) : void;
        /** Closes the currently open mailbox. If autoExpunge is true, any messages marked as Deleted in the currently open mailbox will be removed if the mailbox was NOT opened in read-only mode. If autoExpunge is false, you disconnect, or you open another mailbox, messages marked as Deleted will NOT be removed from the currently open mailbox. */
        closeBox(callback :  (error : Error) => void) : void;
        closeBox(autoExpunge : boolean, callback :  (error : Error) => void) : void;
        /** Creates a new mailbox on the server. mailboxName should include any necessary prefix/path. */
        addBox(mailboxName : string, callback :  (error : Error) => void) : void;
        /** Removes a specific mailbox that exists on the server. mailboxName should including any necessary prefix/path. */
        delBox(mailboxName : string, callback :  (error : Error, uids : string[]) => void) : void;
        /** Renames a specific mailbox that exists on the server. Both oldMailboxName and newMailboxName should include any necessary prefix/path. Note: Renaming the 'INBOX' mailbox will instead cause all messages in 'INBOX' to be moved to the new mailbox. */
        renameBox(oldMailboxName : string, newMailboxName : string, callback : (error : Error, mailbox: Box) => void) : void;
        /** Subscribes to a specific mailbox that exists on the server. mailboxName should include any necessary prefix/path. */
        subscribeBox(mailboxName : string, callback :  (error : Error) => void) : void;
        /** Unsubscribes from a specific mailbox that exists on the server. mailboxName should include any necessary prefix/path. */
        unsubscribeBox(mailboxName : string, callback :  (error : Error) => void) : void;
        /** Fetches information about a mailbox other than the one currently open. Note: There is no guarantee that this will be a fast operation on the server. Also, do not call this on the currently open mailbox. */
        status(mailboxName : string, callback :  (error : Error, mailbox: Box) => void) : void;
        /** Obtains the full list of mailboxes. If nsPrefix is not specified, the main personal namespace is used. */
        getBoxes(callback : (error : Error, mailboxes: MailBoxes) => void) : void;
        getBoxes(nsPrefix : string, callback : (error : Error, mailboxes: MailBoxes) => void) : void;
        /** Obtains the full list of subscribed mailboxes. If nsPrefix is not specified, the main personal namespace is used. */
        getSubscribedBoxes(callback : (error : Error, mailboxes: MailBoxes) => void) : void;
        getSubscribedBoxes(nsPrefix : string, callback : (error : Error, mailboxes: MailBoxes) => void) : void;
        /** Permanently removes all messages flagged as Deleted in the currently open mailbox. If the server supports the 'UIDPLUS' capability, uids can be supplied to only remove messages that both have their uid in uids and have the \Deleted flag set. Note: At least on Gmail, performing this operation with any currently open mailbox that is not the Spam or Trash mailbox will merely archive any messages marked as Deleted (by moving them to the 'All Mail' mailbox). */
        expunge(callback :  (error : Error) => void) : void;
        expunge(uids : any /* MessageSource */, callback :  (error : Error) => void) : void;
        // Appends a message to selected mailbox. msgData is a string or Buffer containing an RFC-822 compatible MIME message. Valid options properties are:
        append(msgData : any, callback :  (error : Error) => void) : void;
        append(msgData : any, options : AppendOptions, callback :  (error : Error) => void) : void;
    }

}


declare module "imap" {

    var out: typeof IMAP.Connection;

    export = out;
}
