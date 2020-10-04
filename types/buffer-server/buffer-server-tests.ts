import bufferServer = require('buffer-server');

const sftpUsername = "root";
const sftpPassword = "toor";
const filename = "test.txt";
const filedata = Buffer.from("Testing");
const indexData = `<!DOCTYPE html>
<head>
<meta charset="utf-8" />
<title>Test of buffer-server</title>
</head>
<body>
<h1>This is a test of buffer-server</h1>
<a href="/${filename}">${filename}</a>
</body>`;
const keyData = '-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----';

bufferServer.sftp_server(keyData, sftpUsername, sftpPassword, filename, filedata).then(port => {
    console.log(`SFTP Port: ${port}`);
});
bufferServer.web_server(indexData, filename, filedata).then(port => {
    console.log(`Web Port: ${port}`);
});
