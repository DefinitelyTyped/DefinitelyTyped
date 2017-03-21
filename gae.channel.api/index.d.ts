// Type definitions for GoogleAppEngine's Channel API
// Project: https://developers.google.com/appengine/docs/java/channel/javascript
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace goog.appengine {
	export class Channel {
		/**
		 * Create a channel object using the token returned by the createChannel() call on the server.
		 * @param token {string}
		 */
		constructor(token:string);

		/**
		 * Open a socket on this channel. open() returns a goog.appengine.Socket object.
		 * You can set the callback properties directly on the returned socket object or set them using an optional object handler with the following properties:
		 * onopen, onmessage, onerror, onclose .
		 * If the token specified during channel creation is invalid or expired then the onerror and onclose callbacks will be called.
		 * The code field for the error object will be 401 (Unauthorized) and the description field will be 'Invalid+token.' or 'Token+timed+out.' respectively.
		 * The onerror callback is also called asynchronously whenever the token for the channel expires.
		 * An onerror call is always followed by an onclose call and the channel object will have to be recreated after this event.
		 * @param {Function} [handler]
		 * @return {Socket}
		 */
		open(handler?:Function):Socket;
	}

	export class Socket {
		/**
		 * Close the socket.
		 * The socket cannot be used again after calling close; the server must create a new socket.
		 */
		close():void;

		/**
		 * Set this to a function called when the socket is ready to receive messages.
		 */
		onopen:()=>void;

		/**
		 * Set this to a function called when the socket receives a message.
		 * The function is passed one parameter: a message object.
		 * The data field of this object is the string passed to the send_message method on the server.
		 * @param message
		 * @param message.data
		 */
		onmessage:(message:any)=>void;

		/**
		 * Set this property to a function called when an error occurs on the socket.
		 * The function is passed one parameter: an error object.
		 * The description field is a description of the error and the code field is an HTTP error code indicating the error.
		 */
		onerror:Function;

		/**
		 * Set this property to a function that called when the socket is closed.
		 * When the socket is closed, it cannot be reopened.
		 * Use the open() method on a goog.appengine.Channel object to create a new socket.
		 */
		onclose:()=>void;
	}
}
