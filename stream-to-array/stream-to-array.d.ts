/// <reference path="../node/node.d.ts" />

declare module 'stream-to-array' {
	function toArray(stream: NodeJS.ReadableStream, callback: (err: any, arr: any[]) => void): NodeJS.ReadWriteStream;
	export = toArray;
}
