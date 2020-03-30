"use strict";
import express = require('express');
const app = express();
import http = require('http');
const httpServer = new http.Server(app);
import io = require('socket.io');
const socket = io(httpServer);
import SocketIOFile = require('socket.io-file');

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/client/index.html');
	return;
});

app.get('/app.js', (req, res, next) => {
	res.sendFile(__dirname + '/client/app.js');
	return;
});

app.get('/socket.io.js', (req, res, next) => {
	res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
	return;
});

app.get('/socket.io-file-client.js', (req, res, next) => {
	res.sendFile(__dirname + '/node_modules/socket.io-file-client/socket.io-file-client.js');
	return;
});

socket.on('connection', (socket: io.Socket) => {
	console.log('Socket connected.');

	const uploader = new SocketIOFile(socket, {
		// uploadDir: {			// multiple directories
		// 	music: 'data/music',
		// 	document: 'data/document'
		// },
		uploadDir: 'data',							// simple directory
		accepts: ['audio/mpeg', 'audio/mp3'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
		maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
		chunkSize: 10240,							// default is 10240(1KB)
		transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
		overwrite: true 							// overwrite file if exists, default is true.
	});
	uploader.on('start', (fileInfo) => {
		console.log('Start uploading');
		console.log(fileInfo);
	});
	uploader.on('stream', (fileInfo) => {
		console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
	});
	uploader.on('complete', (fileInfo) => {
		console.log('Upload Complete.');
		console.log(fileInfo);
	});
	uploader.on('error', (err) => {
		console.log('Error!', err);
	});
	uploader.on('abort', (fileInfo) => {
		console.log('Aborted: ', fileInfo);
	});
});

httpServer.listen(3000, () => {
	console.log('Server listening on port 3000');
});
