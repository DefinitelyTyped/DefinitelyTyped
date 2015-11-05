// Type definitions for mysql-live-client
// Project: https://github.com/nodets/node-mysql-live-client
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../socket.io-client/socket.io-client.d.ts" />

declare module "mysql-live-client" {
	export default MysqlLiveClient.LiveClient;
}

declare module MysqlLiveClient {

	export type onChangeEvent = (evt: string, items?: any[]) => void;

	export class LiveCollectionClient {
		name: string;
		criteria: any;
		items: any[];
		listeners: onChangeEvent[];

		constructor(name: string, criteria?: any);
		
		destroy():void;

		onChange(cb: onChangeEvent): void;

		fireChange(event: string): void;

		refresh(): void;

		save(object: any): void;
		insert(object: any): void;
		update(object: any): void;

		remove(primaryKey: string|number): void;
	}

	export interface LiveCollectionClientDictionary {
		[name: string]: LiveCollectionClient;
	}

	export class LiveCollectionClientManager {

		private static _findAndUpdate(_theArray: any[], theObjOrKeyToFind: any, theNewObject: any): void;

		private collections: LiveCollectionClientDictionary;

		constructor();

		listen(): void;

		subscribe(collectionName: string, clientCriteria?: any): LiveCollectionClient;

		unsubscribe(collectionName: string): boolean;
		
		static requestRefresh(collectionName: string): void;

		static requestSaveObject(collectionName: string, object: any): void;
		static requestInsertObject(collectionName: string, object: any): void;
		static requestUpdateObject(collectionName: string, object: any): void;

		static requestRemoveObject(collectionName: string, primaryKey: string|number): void;
	}

	export class LiveClient {

		static PROTOCOL: string;
		static DOMAIN: string;
		static PORT: number;

		static NAMESPACE: string;

		static Endpoint: string;

		static setEndpoint(domain: string, protocol?: string, port?: number): string;

		private static manager: LiveCollectionClientManager;

		static socket: SocketIOClient.Socket;

		static isListening: boolean;

		static start(_endpoint?: string): LiveCollectionClientManager;

		static subscribe(collectionName: string, clientCriteria?: any): LiveCollectionClient;

		static unsubscribe(collectionName: string): boolean;

	}

	//index
	export function subscribe(collectionName: string, clientCriteria?: any): LiveCollectionClient;

	export function unsubscribe(collectionName: string): boolean;

	export function start(_host?: string):void;

}
