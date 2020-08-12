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

/**
 * Google
 * See https://github.com/pkgcloud/pkgcloud/blob/master/docs/providers/google.md#using-storage
 */
pkgcloud.storage.createClient({
    provider: 'google',
    keyFilename: 'path/to/keyFile.json',
    projectId: 'projectId'
});

// Openstack
pkgcloud.storage.createClient({
    provider: 'openstack',
    authUrl: 'http://example.com',
    username: 'username',
    password: 'password',
    domainId: 'default',
    domainName: 'default'
});

// Rackspace
pkgcloud.storage.createClient({
    provider: 'rackspace',
    username: 'username',
    apiKey: 'apiKey',
    region: 'DFW',
    useInternal: false
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
