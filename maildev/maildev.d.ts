// Type definitions for maildev 0.11.0
// Project: https://github.com/djfarrelly/maildev
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

import fs = require("fs");

/**
 * Interface for {@link MailDev} options.
 */
interface MailDevOptions {
  /**
   * SMTP host for outgoing emails
   *
   * @type {string}
   */
  outgoingHost: string;

  /**
   * SMTP password for outgoing emails
   *
   * @type {string}
   */
  outgoingPass: string;

  /**
   * SMTP port for outgoing emails.
   *
   * @type {number}
   */
  outgoingPort: number;

  /**
   * SMTP user for outgoing emails
   *
   * @type {string}
   */
  outgoingUser: string;

  /**
   * SMTP port to catch emails.
   *
   * @type {number}
   */
  smtp: number;
}

/**
 * Interface for {@link MailDev}.
 */
interface MailDev {
  /**
   * Constructor.
   *
   * @public
   * @param options The options.
   */
  new(options: MailDevOptions): MailDev;

  /**
   * Stops the SMTP server.
   *
   * @public
   * @param callback The error callback.
   */
  end(callback?: (error: Error) => void): void;

  /**
   * Accepts e-mail identifier, returns email object.
   *
   * @public
   * @param id The e-mail identifier.
   */
  getEmail(id: string, callback?: (error: Error) => void): void;

  /**
   * Returns a readable stream of the raw e-mail.
   *
   * @public
   * @param id The e-mail identifier.
   */
  getRawEmail(id: string, callback?: (error: Error, readStream: fs.ReadStream) => void): void;

  /**
   * Returns array of all e-mail.
   
   * @public
   */
  getAllEmail(): void;

  /**
   * Starts the SMTP server.
   *
   * @public
   * @param callback The error callback.
   */
  listen(callback?: (error: Error) => void): void;

  /**
   * Event called when a new e-mail is received. Callback receives single mail object.
   *
   * @public
   * @param eventName The event name.
   * @param callback  The callback for obtains the received email.
   */
  on(eventName: string, callback: (email: string) => void): void;
}
