// Type definitions for Nodemailer
// Nodemailer is an easy to use module to send e-mails with Node.JS (using SMTP or sendmail or Amazon SES) and is unicode friendly .
// Project: https://github.com/andris9/Nodemailer
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

class Transport {
	static transports: {
		SMTP: Transport;
		SES: Transport;
		SENDMAIL: Transport;
		STUB: Transport;
	};

	constructor(type: string, options?: any);
	options: Object;
	transportType: string;
	sendMailWithTransport(emailMessage: MailComposer, callback?: (err: Error) => any): any;
	useDKIM(dkim: DKIMOptions);
	close(callback?: (err: Error) => any);
	sendMail(message: MailComposer, callback?: (err: Error) => any): any;
	send_mail(message:MailComposer, callback?: (err: Error) => any): any;
}

interface NodeMailerAttachment {
	fileName: string;
	filePath?: string;
	contents?: any;
	contentType?: string;
	cid?: string;
}

interface MailComposer {	
	from: string; // sender info
	to: string;   // Comma separated list of recipients
	subject: string; // Subject of the message
	headers?: {};
	text?: string;  // plaintext body
	html?: string;  // HTML body
	attachments?: NodeMailerAttachment[];  // An array of attachments
	forceEmbeddedImages?: bool;
}

interface DKIMOptions{
	domainName: string; // signing domain
	keySelector: string; // selector name (in this case there's a dkim._domainkey.do-not-trust.node.ee TXT record set up)
	privateKey: any;
}

class XOAuthGenerator {
	constructor(options: XOAuthGeneratorOptions);
	generate(callback: () => any): string;
}

interface XOAuthGeneratorOptions {
	user: string;
	consumerKey: string; // optional
	consumerSecret: string; // optional
	token: string;
	tokenSecret: string;
}

interface XOAuth2Options {
	user: string;
	clientId: string;
	clientSecret: string;
	refreshToken: string;
}

interface NodemailerTransportOptions {
	service?: string;
	auth?: {
		user?: string;
		pass?: string;
		XOAuthToken?: XOAuthGenerator;
		XOAuth2?: XOAuth2Options;
	};
	debug?: bool;
	AWSAccessKeyID?: string;
	AWSSecretKey: string;
	ServiceUrl: string;
}

interface Nodemailer {
	createTransport(type: string): Transport;
	createTransport(type: string, options: NodemailerTransportOptions): Transport;
	createTransport(type: string, path: string): Transport;
	createXOAuthGenerator(options: XOAuthGeneratorOptions): XOAuthGenerator;
}