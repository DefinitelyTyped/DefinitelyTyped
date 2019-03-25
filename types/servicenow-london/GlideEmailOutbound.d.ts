/* tslint:disable:unified-signatures */

/**
 * The scoped GlideEmailOutbound class implements the email object for scoped applications.
 * You can use the GlideEmailOutbound methods with the email global object available in mail
 * scripts. The email object behaves identically for global and scoped applications.
 */
declare class GlideEmailOutbound {
    /**
     * Instantiates a scoped GlideEmailOutbound object.
     */
    constructor();

    /**
     * Adds the address to either the cc or bcc list.
     *
     * @param type Either cc or bcc, determines the list to which the address is added.
     * @param address The recipient's email address.
     * @example
     *
     * email.addAddress('cc', 'joe.employee@something.com');
     */
    addAddress(type: string, address: string): void;

    /**
     * Adds the recipient to either the cc or bcc list, but uses the display name instead of the
     * address when showing the recipient.
     *
     * @param type Either cc or bcc, determines the list to which the address is added.
     * @param address The recipient's email address.
     * @param displayName The name to be shown instead of the email address.
     * @example
     *
     * email.addAddress('bcc', 'joe.employee@something.com', 'dudley rocks');
     */
    addAddress(type: string, address: string, displayName: string): void;

    /**
     * Returns the email's subject line.
     *
     * @returns The email's subject line.
     * @example
     *
     * var subject = email.getSubject();
     */
    getSubject(): string;

    /**
     * Returns the email's watermark.
     */
    getWatermark(): string;

    /**
     * Sets the body of the email.
     *
     * @param bodyText The body of the email.
     * @example
     *
     * email.setBody('Dear Sir, ...');
     */
    setBody(bodyText: string): void;

    /**
     * Sets the sender's address.
     *
     * @param address The sender's email address.
     * @example
     *
     * email.setFrom('joe.employee@something.com');
     */
    setFrom(address: string): void;

    /**
     * Sets the reply to address.
     *
     * @param address The reply to email address.
     * @example
     *
     * email.setReplyTo('joe.employee@something.com');
     */
    setReplyTo(address: string): void;

    /**
     * Sets the email's subject line.
     *
     * @param subject Text for the subject line.
     * @example
     *
     * email.setSubject('Important Issues to discuss');
     */
    setSubject(subject: string): void;
}
