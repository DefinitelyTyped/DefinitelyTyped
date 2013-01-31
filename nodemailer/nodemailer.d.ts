// Type definitions for Nodemailer
// JNodemailer is an easy to use module to send e-mails with Node.JS (using SMTP or sendmail or Amazon SES) and is unicode friendly .
// Project: https://github.com/andris9/Nodemailer
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Transport {}

interface MailComposer {}

interface XOAuthGenerator {}

interface NodemailerTransportOptions {
	service: string;
	
}

interface NodeMailerMessageOptions {}

interface NodemailerStatic {
	X_MAILER_NAME: string;
	X_MAILER_HOMEPAGE: string;
	createTransport(type: string, options: NodeMailerTransportOptions): Transport;
	sendMail(options: NodeMailerMessageOptions, callback?: (err: Error) => any): any;
	send_mail(options: NodeMailerMessageOptions, callback?: (err: Error) => any): any;
}

interface Nodemailer {
	(options: NodeMailerMessageOptions): void;
	transport: Transport;
	options: NodeMailerMessageOptions;
	mailcomposer: MailComposer;
	generateUserAgentString(): string;
	getGlobalTransport(): Transport;
	validateSettings(callback: (err: Error) => any): void;
	sendMail(callback: () => any): void;
	generateMailObject(): void;
	setGeneralOptions(): void;
	setUserHeaders(): void;
	setModuleHeaders(): void;
	setAttachments(): void;
}