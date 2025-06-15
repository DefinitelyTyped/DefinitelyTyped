/**
 * Sends an email message to an SMTP server for delivery.
 * @param server Host to which the message is to be sent.
 * @param message a Message object containing email details
 */
export function send(server: string, message: Message): void

/**
 * Represents an email message.
 */
export interface Message {
    /** SMTP server hostname */
    server: string

    /** The envelope sender address */
    sender?: Address

    /** The `From` header addresses */
    from: Address[]

    /** The primary recipients */
    to: Address[]

    /** The `Reply-To` header addresses */
    replyTo?: Address[]

    /** Carbon copy recipients */
    cc?: Address[]

    /** Blind carbon copy recipients */
    bcc?: Address[]

    /** Unique message ID */
    messageId: string

    /** Message ID of the email being replied to */
    inReplyTo?: string

    /** The date and time the message was created */
    time?: Date

    /** The subject line of the email */
    subject: string

    /** MIME type of the message body (e.g., `text/plain` or `text/html`) */
    contentType: string

    /** Content encoding (e.g., `utf-8`, `base64`) */
    encoding: string

    /** Main body text of the message */
    body: string

    /** List of file attachments */
    attachments: Attachment[]
}

/**
 * Represents an email address with an optional display name.
 */
export interface Address {
    /** Optional display name (e.g., "John Doe") */
    name?: string

    /** Email address (e.g., "john@example.com") */
    address: string
}

/**
 * Represents an email attachment.
 */
export interface Attachment {
    /** File name of the attachment */
    name: string

    /** MIME type of the attachment (e.g., `application/pdf`) */
    contentType: string

    /** File data as binary content */
    data: Uint8Array
}