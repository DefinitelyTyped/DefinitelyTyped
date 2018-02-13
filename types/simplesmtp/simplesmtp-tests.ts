
import simplesmtp = require("simplesmtp");

let server: simplesmtp.SimpleServer;

server = simplesmtp.createSimpleServer({
	disableDNSValidation: true,
	enableAuthentication: true,
	requireAuthentication: false,
	name: "localhost",
	secureConnection: false,
	SMTPBanner: "Hoi dit is de test server",
	timeout: this.timeout,
	ignoreTLS: true
}, (req: simplesmtp.SimpleServerConnection) => {
	req.on("data", (chunk: Buffer): void => {
		//
	});
	req.on("end", (): void => {
		//
	});
	req.accept("12");
});
this._server.server.on("authorizeUser",
	(envelope: any, username: string|Buffer, password: string, callback: (error: Error, success: boolean) => void
): void => {
	callback(null, true);
});
this._server.listen(this.port, "0.0.0.0", (error?: Error): void => {
});
