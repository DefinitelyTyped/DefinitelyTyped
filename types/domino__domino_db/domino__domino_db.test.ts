/// <reference types="index" />
import {useServer} from "@domino/domino-db";

async function test() {
	const server = await useServer({serverConfig: {hostName: "no-hostname", connection: {port: 1111, secure: true}, credentials: {rootCertificate: new Buffer(""), clientCertificate: new Buffer(""), clientKey: new Buffer("")}}});
	await server.createDatabase({filePath: "", title: ""});
	const database = await server.useDatabase({filePath: ""})
	await database.bulkCreateAttachmentStream()
}

export {}
