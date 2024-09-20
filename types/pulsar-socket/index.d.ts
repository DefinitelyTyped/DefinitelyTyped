/**
 * 
* ## Pulsar-Socket
* `pulsar` is a lightweight library for managing WebSocket connections, designed to simplify real-time communication between clients and servers. This library provides an intuitive interface for connecting to a WebSocket server, sending and receiving messages, and managing communication channels.
* 
* ### Installation
* 
* Add the library to your JavaScript project:
* ```html
* <script src="cdn/pulsar-socket.js"></script>
* ```
* 
* Or, if you're using a bundler like Webpack or Rollup, import it directly:
* ```javascript
* import pulsar from '.pulsar.js';
* ```
* 
* ## Basic Usage
* ### Creating an Instance
* To create a new instance of socketCore, pass the URL of the WebSocket server:
* 
* ```javascript
* const socket = pulsar('ws://your-link', 'your-token');
* ```
* ### Registering Event Handlers
* You can register event handlers for different types of received messages:
* ```javascript
* socket.on('some-event', (data) => {  your code...  });
* ```
* 
* ### Sending Messages
* To send a message, use the emit method and specify the event and data to be sent:
* ```javascript
* socket.emit('some-event', { message: 'hello world!' });
* ```
* or to channel:
* ```javascript
* socket.channel('chat').emit('new-message', { message: 'Hi there!' });
* ```
* 
* ## Channels
* You can subscribe to different communication channels:
* ```javascript
* socket.channel('chat').join();
* 
* socket.channel('chat').leave();
* ```
* 
* ## Available Methods
* 
* * `on(event, fn)`: Registers an event handler for the specified event.especificado.
* 
* * `emit(event, payload)`: Sends a message with the specified event and data.especificados.
* 
* * `channel(value)`: Sets the current channel for communication.
* 
* * `join()`: Joins the current channel.
* 
* * `leave()`: Leaves the current channel.
* 
* 
* ## License
* Distributed under the MIT license. See LICENSE for more details.

*
* See `https://github.com/gab-h3nrique/pulsar-client` for more information.
* @since v0.1 by [`Gabriel henrique`](https://github.com/gab-h3nrique)
* 
*/
declare function Pulsar(urlParam?: string, tokenParam?: string): Client;
/**
 * 
 * An interface representing the WebSocket client instance.
 * 
*/
interface Client {
    /**
     * 
    * The `base URL` = `ws://your-link` for the WebSocket connection .
    * 
    */
    url: string;
    /**
     * 
    * The jwt authentication `token` = `yesald=dalfad` for the connection.
    * 
    */
    token: string;
    /**
    * Registers a callback function to handle a specific event received
    * from the server.
    *
    * @param event {string} The name of the event to listen for.
    * @param fn {Function} The callback function to be executed when the event occurs.
    * The function will receive the event payload as an argument.
    * 
    * ```javascript
    * socket.on('some-event', (data) => { 'your code' })
    * ```
    * 
    */
    on(event: string, fn: (payload: any) => void): void;
    /**
    * Sends a message to the server with a specified event and payload.
    * 
    * Optionally, you can specify a channel to send the message to.
    *
    * @param event {string} The name of the event to send.
    * @param payload {any} The data to send with the event.
    * 
    * ```javascript
    * socket.emit('some-event', { message: 'hello world!' });
    * ```
    * 
    */
    emit(event: string, payload: any, channel?: string): void;
    /*
    *
    * Sets the current channel for communication. All subsequent emits 
    * will be sent to this channel unless changed.
    *
    * ```javascript
    * socket.channel('chat').emit('new-message', { message: 'Hi there!' });
    * ```
    * 
    */
    channel(value: string): Client;
    /**
    * 
    * ```javascript
    * socket.channel('chat').join()
    * ```
    * 
    */
    join(): void;
    /**
    * Leaves the currently set channel on the server.
    * 
    * ```javascript
    * socket.channel('chat').leave()
    * ```
    */
    leave(): void;
}

export = Pulsar;