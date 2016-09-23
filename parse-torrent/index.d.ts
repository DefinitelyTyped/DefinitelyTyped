// Type definitions for parse-torrent
// Project: https://github.com/feross/parse-torrent
// Definitions by: Bazyli Brzóska <https://invent.life>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare var ParseTorrent:ParseTorrent.StaticInstance;
export = ParseTorrent;

declare namespace ParseTorrent {
  export interface ParsedTorrent {
    infoHash:string;
    xt?:string;
    info?: { length:number, name:Buffer, 'piece length':number, pieces:Buffer };
    infoBuffer?:Buffer;
    name?:string;
    private?:boolean;
    created?:Date;
    comment?:string;
    announce?:Array<string>;
    urlList?:Array<string>;
    files?:Array<{path:string, name:string, length: number, offset:number}>;
    length?:number;
    pieceLength?:number;
    lastPieceLength?:number;
    pieces?:Array<string>;
  }

  interface StaticInstance {
    (magnetUriOrInfoHash:string):ParsedTorrent;
    (torrentFileOrInfoHash:Buffer):{ info:ParsedTorrent };

    toMagnetURI(parsedTorrent:ParsedTorrent):string;
    toTorrentFile(parsedTorrent:{ info:ParsedTorrent }):Buffer;

    remote(remoteURLorLocalTorrentPath:string, onTorrentCallback?:(err:Error, parsedTorrent:ParsedTorrent)=>void):void;
    remote(torrentBlob:Blob, onTorrentCallback?:(err:Error, parsedTorrent:ParsedTorrent)=>void):void;
  }
}
