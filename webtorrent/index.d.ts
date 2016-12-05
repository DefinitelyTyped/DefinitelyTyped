// Type definitions for WebTorrent
// Project: https://webtorrent.io/
// Definitions by: Bazyli Brzóska <https://invent.life>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="parse-torrent" />

import ParseTorrent = require("parse-torrent");

declare var webTorrentStatic:WebTorrent.ClientConstructor;
export = webTorrentStatic;
export as namespace WebTorrent;

declare namespace WebTorrent {
  export interface ClientOptions {
    dht?: boolean|Object,   // Enable DHT (default=true), or options object for DHT
    maxConns?: number,      // Max number of connections per torrent (default=55)
    nodeId?: string|Buffer, // DHT protocol node ID (default=randomly generated)
    peerId?: string|Buffer, // Wire protocol peer ID (default=randomly generated)
    rtcConfig?: Object,     // RTCPeerConnection configuration object (default=STUN only)
    tracker?: boolean|Object,      // Whether or not to enable trackers (default=true)
    wrtc?: Object           // Custom webrtc implementation (in node, specify the [wrtc](https://www.npmjs.com/package/wrtc) package)
  }

  export interface TorrentOptions {
    announce?: Array<string>,   // Torrent trackers to use (added to list in .torrent or magnet uri)
    path?: string,   // Folder to download files to (default=`/tmp/webtorrent/`)
    store?: Function // Custom chunk store (must follow [abstract-chunk-store](https://www.npmjs.com/package/abstract-chunk-store) API)
  }

  export interface ClientConstructor {
    new (config?:ClientOptions):Client;
  }

  export interface Client extends NodeJS.EventEmitter, ClientConstructor {
    on(event: string, listener: Function): this;

    /**
     * Start downloading a new torrent. Aliased as client.download.

      torrentId can be one of:

      * magnet uri (string)
      * torrent file (buffer)
      * info hash (hex string or buffer)
      * parsed torrent (from parse-torrent)
      * http/https url to a torrent file (string)
      * filesystem path to a torrent file (string)

      If ontorrent is specified, then it will be called when this torrent is ready to be used (i.e. metadata is available). Note: this is distinct from the 'torrent' event which will fire for all torrents.

      If you want access to the torrent object immediately in order to listen to events as the metadata is fetched from the network, then use the return value of client.add. If you just want the file data, then use ontorrent or the 'torrent' event.
     */
    // add(torrentFileBufferOrMagnetUriOrPathOrInfoHash:string|Buffer|ParsedTorrent, opts?:TorrentOptions, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;
    add(magnetUriOrPathOrInfoHash:string, opts?:TorrentOptions, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;
    add(torrentFileOrInfoHash:Buffer, opts?:TorrentOptions, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;
    add(parsedTorrent:ParseTorrent.ParsedTorrent, opts?:TorrentOptions, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;

    add(magnetUriOrPathOrInfoHash:string, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;
    add(torrentFileOrInfoHash:Buffer, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;
    add(parsedTorrent:ParseTorrent.ParsedTorrent, onTorrentCallback?:(torrent:Torrent)=>void):Torrent;

    /**
     * Emitted when a torrent is ready to be used (i.e. metadata is available and store is ready). See the torrent section for more info on what methods a torrent has.
     */
    on(event:'torrent', callback:(torrent:Torrent)=>void): this;

    /**
     * Start seeding a new torrent.

        input can be any of the following:

        path to the file or folder on filesystem (string) (Node.js only)
        W3C File object (from an <input> or drag and drop)
        W3C FileList object (basically an array of File objects)
        Node Buffer object (works in the browser)
        Or, an array of string, File, or Buffer objects.

        If opts is specified, it should contain the following types of options:

        options for create-torrent (to allow configuration of the .torrent file that is created)
        options for client.add (see above)
        If onseed is specified, it will be called when the client has begun seeding the file.
     */
    seed(inputFileOrFolderPath:string, opts?:TorrentOptions|any, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputFile:File, opts?:TorrentOptions|any, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputFileList:FileList, opts?:TorrentOptions|any, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputBuffer:Buffer, opts?:TorrentOptions|any, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputBuffersFilesOrPaths:Array<string|File|Buffer>, opts?:TorrentOptions|any, onSeed?:(torrent:Torrent)=>void):void;

    seed(inputFileOrFolderPath:string, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputFile:File, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputFileList:FileList, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputBuffer:Buffer, onSeed?:(torrent:Torrent)=>void):void;
    seed(inputBuffersFilesOrPaths:Array<string|File|Buffer>, onSeed?:(torrent:Torrent)=>void):void;
    //TODO: opts

    /**
     * Remove a torrent from the client. Destroy all connections to peers and delete all saved file data. If callback is specified, it will be called when file data is removed.
     */
    remove(torrentId:string, callback?:(err:Error)=>void):void;

    /**
     * Destroy the client, including all torrents and connections to peers. If callback is specified, it will be called when the client has gracefully closed.
     */
    destroy(callback?:(err:Error)=>void):void;

    /**
     * An array of all torrents in the client.
     */
    torrents:Array<Torrent>;

    /**
     * Returns the torrent with the given torrentId. Convenience method. Easier than searching through the client.torrents array. Returns null if no matching torrent found.
     */
    get(torrentId:string):Torrent;

    /**
     * Seed ratio for all torrents in the client.
     */
    ratio:number;
  }

  export interface Torrent extends NodeJS.EventEmitter {
    on(event: string, listener: Function): this;

    /**
     * Get the info hash of the torrent.
     */
    infoHash:string;

    /**
     * Get the magnet URI of the torrent.
     */
    magnetURI:string;

    /**
     * An array of all files in the torrent. See the file section for more info on what methods the file has.
     */
    files:Array<InTorrentFile>;

    /**
     * The attached bittorrent-swarm instance.
     */
    swarm:any; // TODO: return type

    /**
     * Get total bytes received from peers (including invalid data).
     */
    recieved:number;

    /**
     * Get total bytes received from peers (excluding invalid data).
     */
    downloaded:number;

    /**
     * Get the time remaining in millis if downloading.
     */
    timeRemaining:number;

    /**
     * Get the total progress from 0 to 1.
     */
    progress:number;

    /**
     * Get the torrent ratio (seeded/downloaded).
     */
    ratio:number;

    /**
     * Returns the download speed.
     */
    downloadSpeed():number;

    /**
     * Returns the current upload speed.
     */
    uploadSpeed():number;

    /**
     * Get the torrent download location.
     */
    path:string;

    /**
     * Alias for client.remove(torrent).
     */
    destroy():void;

    /**
     * Adds a peer to the underlying bittorrent-swarm instance.

    Returns true if peer was added, false if peer was blocked by the loaded blocklist.
     */
    addPeer(addr:string):boolean;

    /**
     * Selects a range of pieces to prioritize starting with start and ending with end (both inclusive) at the given priority. notify is an optional callback to be called when the selection is updated with new data.
     */
    select(start:number, end:number, priority?:number, notifyCallback?:() => void):void;

    /**
     * Deprioritizes a range of previously selected pieces.
     */
    deselect(start:number, end:number, priority:number):void;

    /**
     * Marks a range of pieces as critical priority to be downloaded ASAP. From start to end (both inclusive).
     */
    critical(start:number, end:number):void;

    /**
     * Create an http server to serve the contents of this torrent, dynamically fetching the needed torrent pieces to satisfy http requests. Range requests are supported.

    Returns an http.Server instance (got from calling http.createServer). If opts is specified, it is passed to the http.createServer function.

    Visiting the root of the server / will show a list of links to individual files. Access individual files at /<index> where <index> is the index in the torrent.files array (e.g. /0, /1, etc.)
     */
    createServer(opts?:any):any; // TODO: :http.Server;

    /**
     * Temporarily stop connecting to new peers. Note that this does not pause new incoming connections, nor does it pause the streams of existing connections or their wires.
     */
    pause():void;

    /**
     * Resume connecting to new peers.
     */
    resume():void;

    /**
     * Emitted when all the torrent's files have been downloaded.
     */
    on(event: 'done', callback:()=>void): this;

    /**
     * Emitted every time a new chunk of data arrives, it's useful for reporting the current torrent status.
     */
    on(event: 'download', callback:(chunkSize:number)=>void): this;

    /**
     * Emitted whenever a new peer is connected for this torrent. wire is an instance of bittorrent-protocol, which is a node.js-style duplex stream to the remote peer. This event can be used to specify custom BitTorrent protocol extensions.
     */
    on(event: 'wire', callback:(wire: any, addr: any) => void): this;
  }

  export interface InTorrentFile extends NodeJS.EventEmitter {
    on(event: string, listener: Function): this;

    /**
     * File name, as specified by the torrent. Example: 'some-filename.txt'
     */
    name:string;

    /**
     * File path, as specified by the torrent. Example: 'some-folder/some-filename.txt'
     */
    path:string;

    /**
     * File length (in bytes), as specified by the torrent. Example: 12345
     */
    length:number;

    /**
     * Selects the file to be downloaded, but at a lower priority than files with streams. Useful if you know you need the file at a later stage.
     */
    select():void;

    /**
     * Deselects the file, which means it won't be downloaded unless someone creates a stream for it.
     */
    deselect():void;

    /**
     * Create a readable stream to the file. Pieces needed by the stream will be prioritized highly and fetched from the swarm first.
     * You can pass opts to stream only a slice of a file.
     * Both start and end bytes are inclusive.
     */
    createReadStream(opts?:{start:number, end:number}):NodeJS.ReadableStream;

    /**
     * Get the file contents as a Buffer.

      The file will be fetched from the network with highest priority, and callback will be called once the file is ready. callback must be specified, and will be called with a an Error (or null) and the file contents as a Buffer.

      file.getBuffer(function (err, buffer) {
        if (err) throw err
        console.log(buffer) // <Buffer 00 98 00 01 01 00 00 00 50 ae 07 04 01 00 00 00 0a 00 00 00 00 00 00 00 78 ae 07 04 01 00 00 00 05 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ...>
      })

     */
    getBuffer(callback: (err:Error, buffer:Buffer) => void):void;

    /**
     * Show the file in a the browser by appending it to the DOM. This is a powerful function that handles many file types like video (.mp4, .webm, .m4v, etc.), audio (.m4a, .mp3, .wav, etc.), images (.jpg, .gif, .png, etc.), and other file formats (.pdf, .md, .txt, etc.).

    The file will be fetched from the network with highest priority and streamed into the page (if it's video or audio). In some cases, video or audio files will not be streamable because they're not in a format that the browser can stream so the file will be fully downloaded before being played. For other non-streamable file types like images and PDFs, the file will be downloaded then displayed.

    rootElem is a container element (CSS selector or reference to DOM node) that the content will be shown in. A new DOM node will be created for the content and appended to rootElem.

    callback will be called once the file is visible to the user. callback must be specified, and will be called with a an Error (or null) and the new DOM node that is displaying the content.

    file.appendTo('#containerElement', function (err, elem) {
      if (err) throw err // file failed to download or display in the DOM
      console.log('New DOM node with the content', elem)
    })

     */
    appendTo(rootElem:Element|string, callback?:(err:Error, elem:Element) => void):void;

    /**
     * Like file.appendTo but renders directly into given element (or CSS selector).
     */
    renderTo(elem:Element|string, callback?:(err:Error, elem:Element) => void):void;

    /**
     * Get a url which can be used in the browser to refer to the file.

    The file will be fetched from the network with highest priority, and callback will be called once the file is ready. callback must be specified, and will be called with a an Error (or null) and the Blob URL (String).

    file.getBlobURL(function (err, url) {
      if (err) throw err
      var a = document.createElement('a')
      a.download = file.name
      a.href = url
      a.textContent = 'Download ' + file.name
      document.body.appendChild(a)
    })
     */
    getBlobURL(callback:(err:Error, url:string) => void):void;

    /**
     * Emitted when the file have been downloaded.
     */
    on(event: 'done', callback:()=>void): this;
  }
}
