import { createReadStream, createWriteStream } from "fs";
import * as pkgcloud from "pkgcloud";

/**
 * Storage
 */

// Amazon
pkgcloud.storage.createClient({
	provider: 'amazon',
	keyId: 'ABDEFGHI',
	key: 'AABDEF==',
});

// Azure
pkgcloud.storage.createClient({
	provider: 'azure',
	storageAccount: 'abcdefg',
	storageAccessKey: 'AABDEF==',
});

// Upload a File
{
	const client = pkgcloud.storage.createClient({
		provider: 'amazon'
	});

	const readStream = createReadStream('a-file.txt');
	const writeStream = client.upload({
		container: 'a-container',
		remote: 'remote-file-name.txt'
	});

	writeStream.on('error', (err: pkgcloud.ClientError) => {});
	writeStream.on('success', (file: pkgcloud.storage.File) => {});
	readStream.pipe(writeStream);
}

// Download a File
{
	const client = pkgcloud.storage.createClient({
		provider: 'amazon'
	});

	const readStream = client.download({
		container: 'a-container',
		remote: 'remote-file-name.txt'
	});
	readStream.pipe(createWriteStream('a-file.txt'));
}

// Logs
{
	const client = pkgcloud.storage.createClient({
		provider: 'amazon'
	});

	client.on('log::*', (message, object) => {
		console.log(message);
		if (object) {
			console.dir(object);
		}
	});
}
