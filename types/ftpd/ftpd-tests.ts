
import ftpd = require("ftpd");

var options: ftpd.FtpServerOptions = {
	pasvPortRangeStart: 4000,
	pasvPortRangeEnd: 5000,
	getInitialCwd: function(connection: ftpd.FtpConnection, callback: (error: Error, path: string) => void): void {
		callback(null, "boo");
	},
	getRoot: function(connection: ftpd.FtpConnection): string {
		return '/';
	},
	logLevel: ftpd.LogLevel.ERROR
};

var host: string = '10.0.0.42';

var server = new ftpd.FtpServer(host, options);

server.on('client:connected', function(conn: ftpd.FtpConnection): void {
	conn.on('command:user', function(user: string, success: () => void, failure: () => void): void {
		success();
	});
	conn.on('command:pass', function(
		pass: string,
		success: (username: string, fs?: ftpd.FtpFileSystem) => void,
		failure: () => void) {
		success("Rogier");
	});
});

server.debugging = ftpd.LogLevel.TRACE;
server.listen(21);
