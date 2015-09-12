// Type definitions for socket.io.users
// Project: https://github.com/nodets/socket.io.users
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../express/express.d.ts" />
/// <reference path="../express-session/express-session.d.ts" />
/// <reference path="../socket.io/socket.io.d.ts" />

//node events (typed) doesn't have _events, only the listeners(type), we want direct access to _events,so ... 

/* If the deftyped doesn't merge my pull request: 
declare module NodeJS {
	export interface EventEmitter {
		_events: string[];
	}
}

declare module SocketIO {
	export interface Socket {	
		//
		 // The REAL list of rooms that this Socket is currently in
		 //
		_rooms: string[];
	}
}*/

declare module "socket.io.users" {
	import { EventEmitter } from 'events';
	import { Application } from "express";
	import { SessionOptions } from "express-session";

	var CONNECTION_EVENTS: string[];
	var Middleware: () => (socket: SocketIO.Socket, next: () => any) => void;
	var Session: (app: Application, options?: SessionOptions) => void;

	type SocketUserList = {
		[namespace: string]: Users;
	};

	class Namespaces {
		private static socketUsersList: any;
		static attach(namespace: string, socketUsersObj: Users): void;
		static get(namespace: string): Users;
	}

	class User {
		id: string | number;
		socket: SocketIO.Socket;
		sockets: SocketIO.Socket[];
		rooms: string[];
		ip: string;
		remoteAddresses: string[];
		store: any;
		attach(socket: SocketIO.Socket): void;
		detachSocket(socket: SocketIO.Socket): void;
		detach(): void;
		join(room: string): boolean;
		leave(room: string): void;
		leaveAll(): void;
		/** same as in, checks if this user is inside a room */
		belong(room: string): boolean;
		/** same as belong, checks if this user is inside a room  */
		in(room: string): boolean;
		set(key: string, value: any, callback?: () => void): void;
		get: (key: string) => any;
		toString(): string;
		emit(...args: any[]): void;
		to(room: string): SocketIO.Socket;
	}


	class Users extends EventEmitter {
		namespace: string;
		users: User[];
		constructor(namespace?: string);
		static of(namespace?: string): Users;
		takeId: (request: any) => string | number;
		create(socket: SocketIO.Socket): User;
		getById(id: string | number): User;
		get(socket: SocketIO.Socket): User;
		list(): User[];
		size(): number;
		push(_user: User): void;
		add(socket: SocketIO.Socket): User;
		indexOf(user: User): number;
		remove(user: User): void;
		room(room: string): User[];
		in(room: string): User[];
		from(room: string): User[];
		update(user: User): void;
		emitAll(...args: any[]): void;
		registerSocketEvents(currentUser: User): void;
	}


}
