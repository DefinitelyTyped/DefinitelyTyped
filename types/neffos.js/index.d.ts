// Type definitions for neffos.js 0.1
// Project: https://github.com/kataras/neffos.js
// Definitions by: Gerasimos (Makis) Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/* The WSData is just a string type alias. */
export type WSData = string;
/* The OnNamespaceConnect is the event name that it's fired on before namespace connect. */
export const OnNamespaceConnect = "_OnNamespaceConnect";
/* The OnNamespaceConnected is the event name that it's fired on after namespace connect. */
export const OnNamespaceConnected = "_OnNamespaceConnected";
/* The OnNamespaceDisconnect is the event name that it's fired on namespace disconnected. */
export const OnNamespaceDisconnect = "_OnNamespaceDisconnect";
/* The OnRoomJoin is the event name that it's fired on before room join. */
export const OnRoomJoin = "_OnRoomJoin";
/* The OnRoomJoined is the event name that it's fired on after room join. */
export const OnRoomJoined = "_OnRoomJoined";
/* The OnRoomLeave is the event name that it's fired on before room leave. */
export const OnRoomLeave = "_OnRoomLeave";
/* The OnRoomLeft is the event name that it's fired on after room leave. */
export const OnRoomLeft = "_OnRoomLeft";
/* The OnAnyEvent is the event name that it's fired, if no incoming event was registered, it's a "wilcard". */
export const OnAnyEvent = "_OnAnyEvent";
/* The OnNativeMessage is the event name, which if registered on empty "" namespace it accepts native messages(Message.Body and Message.IsNative is filled only). */
export const OnNativeMessage = "_OnNativeMessage";
/* The isSystemEvent reports whether the "event" is a system event, (connect, connected, disconnect, room join, room joined, room leave, room left). */
export function isSystemEvent(event: string): boolean;
/* The Message is the structure which describes the incoming data (and if `Conn.Write` is manually used to write). */
export class Message {
  /* The Namespace that this message sent to. */
  Namespace: string;
  /* The Room that this message sent to. */
  Room: string;
  /* The Event that this message sent to. */
  Event: string;
  /* The actual body of the incoming data. */
  Body: WSData;
  /* The Err contains any message's error if defined and not empty.
     server-side and client-side can return an error instead of a message from inside event callbacks. */
  Err: string;
  /* The IsForced if true then it means that this is not an incoming action but a force action.
     For example when websocket connection lost from remote the OnNamespaceDisconnect `Message.IsForced` will be true */
  IsForced: boolean;
  /* The IsLocal reprots whether an event is sent by the client-side itself, i.e when `connect` call on `OnNamespaceConnect` event the `Message.IsLocal` will be true,
     server-side can force-connect a client to connect to a namespace as well in this case the `IsLocal` will be false. */
  IsLocal: boolean;
  /* The IsNative reports whether the Message is websocket native messages, only Body is filled. */
  IsNative: boolean;

  /* unmarshal method returns this Message's `Body` as an object,
     equivalent to the Go's `neffos.Message.Unmarshal` method.
     It can be used inside an event's callbacks.
     See library-level `marshal` function too. */
  unmarshal(): any;
}

/* marshal takes an object and returns its serialized to string form, equivalent to the Go's `neffos.Marshal`.
   It can be used on `emit` methods.
   See `Message.unmarshal` method too. */
export function marshal(obj: any): string;

/* The Room describes a connected connection to a room,
   emits messages with the `Message.Room` filled to the specific room
   and `Message.Namespace` to the underline `NSConn`'s namespace. */
export class Room {
  nsConn: NSConn;
  name: string;
  constructor(ns: NSConn, roomName: string);
  /* The emit method sends a message to the server with its `Message.Room` filled to this specific room
     and `Message.Namespace` to the underline `NSConn`'s namespace. */
  emit(event: string, body: WSData): boolean;
  /* The leave method sends a local and server room leave signal `OnRoomLeave`
     and if succeed it fires the OnRoomLeft` event. */
  leave(): Promise<Error>;
}
/* The NSConn describes a connected connection to a specific namespace,
   it emits with the `Message.Namespace` filled and it can join to multiple rooms.
   A single Conn can be connected to one or more namespaces,
   each connected namespace is described by this class. */
export class NSConn {
  /* The conn property refers to the main `Conn` constructed by the `dial` function. */
  conn: Conn;
  namespace: string;
  events: Events;
  /* The rooms property its the map of the connected namespace's joined rooms. */
  rooms: Map<string, Room>;
  constructor(conn: Conn, namespace: string, events: Events);
  /* The emit method sends a message to the server with its `Message.Namespace` filled to this specific namespace. */
  emit(event: string, body: WSData): boolean;
  /* See `Conn.ask`. */
  ask(event: string, body: WSData): Promise<Message>;
  /* The joinRoom method can be used to join to a specific room, rooms are dynamic.
     Returns a `Room` or an error. */
  joinRoom(roomName: string): Promise<Room>;
  /* The room method returns a joined `Room`. */
  room(roomName: string): Room;
  /* The leaveAll method sends a leave room signal to all rooms and fires the `OnRoomLeave` and `OnRoomLeft` (if no error occurred) events. */
  leaveAll(): Promise<Error>;
  /* The disconnect method sends a disconnect signal to the server and fires the `OnNamespaceDisconnect` event. */
  disconnect(): Promise<Error>;
}

/* The MessageHandlerFunc is the definition type of the events' callback.
   Its error can be written to the other side on specific events,
   i.e on `OnNamespaceConnect` it will abort a remote namespace connection.
   See examples for more. */
export type MessageHandlerFunc = (c: NSConn, msg: Message) => Error;

export type Events = Map<string, MessageHandlerFunc>;
export type Namespaces = Map<string, Events>;

/* This is the prefix that Options.header function is set to a url parameter's key in order to serve to parse it as header.
 The server's `URLParamAsHeaderPrefix` must match.
 Note that on the Nodejs side this is entirely optional, nodejs and go client support custom headers without url parameters parsing. */
export const URLParamAsHeaderPrefix = "X-Websocket-Header-";

export interface Headers {
  [key: string]: any;
}

/* Options contains optional fields. Can be passed on the `dial` function. */
export interface Options {
  headers?: Headers;
  protocols?: string[];
  reconnnect?: number;
}

/* The dial function returns a neffos client, a new `Conn` instance.
   First parameter is the endpoint, i.e ws://localhost:8080/echo,
   the second parameter can be any object of the form of:
   namespace: {eventName: eventHandler, eventName2: ...} or {eventName: eventHandler}.
   Example Code:
    var conn = await neffos.dial("ws://localhost:8080/echo", {
      default: { // "default" namespace.
        _OnNamespaceConnected: function (ns, msg) {
          console.log("connected to namespace: " + msg.Namespace);
        },
        _OnNamespaceDisconnect: function (ns, msg) {
          console.log("disconnected from namespace: " + msg.Namespace);
        },
        _OnRoomJoined: function (ns, msg) {
          console.log("joined to room: " + msg.Room);
        },
        _OnRoomLeft: function (ns, msg) {
          console.log("left from room: " + msg.Room);
        },
        chat: function (ns, msg) { // "chat" event.
          let prefix = "Server says: ";
          if (msg.Room !== "") {
            prefix = msg.Room + " >> ";
          }
          console.log(prefix + msg.Body);
        }
      }
    });

    var nsConn = await conn.connect("default");
    nsConn.emit("chat", "Hello from client side!");
    See https://github.com/kataras/neffos.js/tree/master/_examples for more.
*/
export function dial(endpoint: string, connHandler: any, options?: Options): Promise<Conn>;
export function dial(endpoint: string, connHandler: any, options: any): Promise<Conn>;

export const ErrInvalidPayload: Error;
export const ErrBadNamespace: Error;
export const ErrBadRoom: Error;
export const ErrClosed: Error;
export const ErrWrite: Error;

/* The Conn class contains the websocket connection and the neffos communication functionality.
   Its `connect` will return a new `NSConn` instance, each connection can connect to one or more namespaces.
   Each `NSConn` can join to multiple rooms. */
export class Conn {
  /* ID is the generated connection ID from the server-side, all connected namespaces(`NSConn` instances)
    that belong to that connection have the same ID. It is available immediately after the `dial`. */
  ID: string;
  constructor(conn: any, namespaces: Namespaces, protocols?: string[]);
  /* The connect method returns a new connected to the specific "namespace" `NSConn` instance or an error. */
  connect(namespace: string): Promise<NSConn>;
  /* waitServerConnect method blocks until server manually calls the connection's `Connect`
   on the `Server#OnConnected` event. */
  waitServerConnect(namespace: string): Promise<NSConn>;
  /* The namespace method returns an already connected `NSConn`. */
  namespace(namespace: string): NSConn;
  /* The ask method writes a message to the server and blocks until a response or an error received. */
  ask(msg: Message): Promise<Message>;
  /* The isClosed method reports whether this connection is closed. */
  isClosed(): boolean;
  /* The write method writes a message to the server and reports whether the connection is still available. */
  write(msg: Message): boolean;
  /* The close method will force-disconnect from all connected namespaces and force-leave from all joined rooms
     and finally will terminate the underline websocket connection. After this method call the `Conn` is not usable anymore, a new `dial` call is required. */
  close(): void;
}
