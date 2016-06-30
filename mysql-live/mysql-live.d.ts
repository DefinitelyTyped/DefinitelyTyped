// Type definitions for mysql-live
// Project: https://github.com/nodets/node-mysql-live
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../socket.io/socket.io.d.ts" />
/// <reference path="../node-mysql-wrapper/node-mysql-wrapper.d.ts" />


declare module "mysql-live" {
	export default function live(db: NodeMysqlWrapper.Database, io: SocketIO.Server): MysqlLiveServerSide.MysqlLiveServer;
}

declare module MysqlLiveServerSide {
	export type TableToSearchPart = { tableName: string, propertyName: string };

	export class LiveHelper {
		static upsert(arr:any, key:any, newval:any): void;
		static canInsert(objRow: any, rawCriteria:any, joinedRow?: any): boolean;
	}

	export type AllowOptionsType = { 
		insert?: (socket: SocketIO.Socket, object: any) => boolean,
		update?:(socket:SocketIO.Socket,object:any)=>boolean,
		remove?:(socket:SocketIO.Socket,primaryKey:string|number)=>boolean	
	};

	export type DisallowOptions = {};

	export interface LiveSocket {
		id: string;
		criteriaClient: any;
	}

	export interface LiveSocketDictionary {
		[id: string]: LiveSocket;
	}

	/* Maps the collection name with table,server criteria, sockets and their criterias */
	export class LiveCollectionServer {
		name: string;
		table: string;
		criteria: any;
		liveSockets: LiveSocketDictionary; //maybe = {} ? but I want to check for undefined.
		options: AllowOptionsType;

		constructor(collectionName: string, tableName: string, criteriaServer?: any);
		/*
		I prefer to not keep a collection of io.sockets here, so I will define the getSocketMethod to do it every time socket needs.
		*/
		public static getSocketMethod: (socketId: string) => SocketIO.Socket;

		getSocket(socketIdOrLiveSocket: LiveSocket | string): SocketIO.Socket;

		allow(options: AllowOptionsType): boolean;
	}

	export interface LiveCollectionServerDictionary {
		[name: string]: LiveCollectionServer;
	}

	export class LiveCollectionServerManager {
		private collections: LiveCollectionServerDictionary; //OBJECTS: map collection with table and sockets .
		protected server: MysqlLiveServerImpl;

		constructor(server: MysqlLiveServerImpl);

		getCollection(collectionName: string): LiveCollectionServer;

		/* Just add the collection object to the static collections variable, so the sockets can subscribe.*/
		_register(collection: LiveCollectionServer): void;

		register(collectionName: string, tableName: string, optionalCriteriaServer?: any): LiveCollectionServer;

		publishCollection(socketId: string, collectionName: string): void;

		onDisconnect(socketId:string): void;

		onSubscribe(socketId: string, collectionName: string, rawCriteria?: any): void;

		onUnSubscribe(socketId: string, collectionName: string): void;

		onRequestRefresh(socketId: string, collectionName: string): void;

		onRequestSaveObject(socketId: string, collectionName: string, object: any): void;

		onRequestRemoveObject(socketId:string,collectionName: string, primaryKey: string | number): void;

	}

	export interface LiveTableServerDictionary {
		[table: string]: LiveCollectionServerDictionary;
	}

	export class LiveTableServerManager {
		listeningTables: LiveTableServerDictionary; // OBJECT : map table with all registed collections.
		protected server: MysqlLiveServerImpl;
		constructor(server: MysqlLiveServerImpl);

		listenToTable(tableName: string): void;

		private onTableRowRemove(tableName: string, toBeRemovedCriteria: any): void;

		private onTableRowUpdate(tableName: string, selector: any, newItem: any): void;

		private onTableRowInsert<T>(table: NodeMysqlWrapper.Table<T>, newItem: any): void;

		/*
		 edw elenxw an uparxei joined table tote to pernei olo aptin arxi, an oxi tote den kanei tpt epistrefei apla to objRow.
		 */
		private checkJoinedAndFetch<T>(table: NodeMysqlWrapper.Table<T>, objRow: any, serverCollectionOnlyCriteria: any): Promise<T>;
	}

	export interface MysqlLiveServerImpl {
		db: NodeMysqlWrapper.Database;
		nsp: SocketIO.Namespace;
		tableManager: LiveTableServerManager;
	}

	export class MysqlLiveServer implements MysqlLiveServerImpl {

		public static LiveServerCount: number;
		public static LiveServerSocketNamespace: string;

		nsp: SocketIO.Namespace;
		db: NodeMysqlWrapper.Database;

		collectionManager: LiveCollectionServerManager;
		tableManager: LiveTableServerManager;

		constructor(db: NodeMysqlWrapper.Database, io: SocketIO.Server);

		/* Just register the collection, when user subscribe to it for first time, then and only then will be published*/
		publish(collectionName: string, tableName: string, optionalCriteriaServer?: any): LiveCollectionServer;
		
		/* Exactly the same thing that .publish does, but if the collection is already registed then this collection will return*/
		Collection(collectionName: string, tableName: string, optionalCriteriaServer?: any): LiveCollectionServer;

		listen(): void;

		private listenToDisconnect(socket: SocketIO.Socket): void;

		private listenToRequestRefresh(socket: SocketIO.Socket): void;

		private listenToRequestObjectActions(socket: SocketIO.Socket): void;

		private listenToSubscribe(socket: SocketIO.Socket): void;

	}


	export function live(db: NodeMysqlWrapper.Database, io: SocketIO.Server): MysqlLiveServerSide.MysqlLiveServer;

}
