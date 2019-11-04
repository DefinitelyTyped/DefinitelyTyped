// Type definitions for socket.io-file 2.0.31
// Project: https://github.com/rico345100/socket.io-file
// Definitions by: Dief Bell <https://github.com/merrickking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Socket } from 'socket.io';

export = SocketIOFile;

declare class SocketIOFile
{
	constructor (socket : Socket, options : IOptions);
	on(event : string, cb : (fileInfo : IFileInfo) => void) : void;
}

interface IOptions
{
	uploadDir : string | { [dirId : string] : string };
	maxFileSize? : number;
	accepts? : string[];
	chunkSize? : number;
	transmissionDelay? : number;
	overwrite? : boolean;
	rename? : (fileName : string, fileInfo : IFileInfo) => string | string;
	resume? : boolean;
}

interface IFileInfo
{
	name : string;
	size : number;
	path : string;
	wrote : number;
	uploadDir : string;
	data : any[];
	mime : string;
	estimated : number;
	uploadId : string;
	originalFileName : string;
}
