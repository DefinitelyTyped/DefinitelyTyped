/// <reference types="node" />

import exp = require("constants");
import { clearScreenDown } from "readline";
import { start } from "repl";
import { isNumberObject } from "util/types";

export const debug:boolean;
export class DataStream{
    #pos:number;
    #buf:Buffer;
    #lim:number;
    constructor(length:number);
    static allocate(length:number):DataStream;
    static from(buffer:Buffer):DataStream;
    clear():DataStream;
    get(bytes:number):Buffer;
    getInt():number;
    limit(limit:number):DataStream;
    limit():number;
    remaining():number;
    getShort():number;
    getUShort():number;
    position(pos:number):DataStream;
    position():number;
    flip():DataStream;
    put(bytes:any):DataStream;
    hasRemaining():boolean;
    capacity():number;
    putShort(data:number):DataStream;
    putUShort(data:number):DataStream;
    array():number[];
    putInt(data:number):DataStream;
    getInt():number;
    toString():string;
    _getBuffer(offset:number):Buffer;
    putLong(data:number):DataStream;
    putFloat(data:number):DataStream;
    getFloat():number;
    getDouble():number;
    getLong():number;
    readString():string;
    writeString(buf:any):void
}
export const Packets:Map<number,Packet>;
export  class Packet{
    read(read?:any):void;
    write(write?:any):void;
    handled():void;
    handleClient(w?:any):void;
    handleServer(w?:any):void;
}
type Class<T> = {
    new (...args: any[]): T;
  };
export class KickReason{
    static [index: number]: Class<KickReason>;
    static kick:Class<KickReason>;
    static clientOutdated:Class<KickReason>;
    static serverOutdated:Class<KickReason>;
    static banned:Class<KickReason>;
    static gameover:Class<KickReason>;
    static recentKick:Class<KickReason>;
    static nameInUse:Class<KickReason>;
    static idInUse:Class<KickReason>;
    static nameEmpty:Class<KickReason>;
    static coustomClient:Class<KickReason>;
    static serverClose:Class<KickReason>;
    static vote:Class<KickReason>;
    static typeMismatch:Class<KickReason>;
    static whitelist:Class<KickReason>;
    static playerLimit:Class<KickReason>;
    static serverRestarting:Class<KickReason>;
}
export class TypeIO{
    static writeString(buf:DataStream,string:string):void;
    static readString(buf:DataStream):string|null;
    static writeKick<T extends {id:number}>
    (buf:DataStream,reasson:T):void;
    static readKick(buf:DataStream):KickReason;
    static readStrings(buf:DataStream):string[][];
}

export class StreamBegin extends Packet{
    _id_:number;static #lastid:number;
    total:number;type:Buffer;
    constructor();
    write(buf:DataStream):void;
    read(buf:DataStream):void;
    handleClient(w?: any): void;
}
export class StreamChunk extends Packet{
    _id:number;id:number;data:Buffer;
    write(buf:DataStream):void;
    read(buf:DataStream):void;
}
export class WorldStream extends Packet{
    stream:unknown;
    handleClient(w: any): void;
}
export class ConnectPacket extends Packet{
    write(buf:DataStream): void;
    _id:number;name:string;usid:string;uuid:string;
}
export class BeginBreakCallPacket extends Packet{
    write(buf:DataStream): void;
    read(buf:DataStream): void;
    _id:number;
}
export class BeginPlaceCallPacket extends Packet{
    read(buf:DataStream): void;
    write(buf:DataStream): void;
    _id:number;
}
export class ClientSnapshotCallPacket extends Packet{
    write(buf:DataStream): void;
    _id:number;    snapshotID:number;
}
export class ConnectConfirmCallPacket extends Packet{
    _id:number;
}

export class DeconstructFinishCallPacket extends Packet{
    write(buf:DataStream): void;
    read(buf:DataStream): void;

    _id:number;
}
export class KickCallPacket extends Packet{
    _id:number;reason:string;
    write(buf:DataStream): void;
    read(buf:DataStream): void;
}
export class KickCallPacket2 extends Packet{
    handled(): void;
    _id:number
    write(buf:DataStream): void;
    read(buf:DataStream): void;
    reason:string;
}

export class MenuCallPacket extends Packet{
    _id:number;menuId:number;title:string;message:string;
    options:string[][];
    read(buf:DataStream): void;
    write(buf:DataStream): void;
}
export class MenuChooseCallPacket extends Packet{
    _id:number;player:unknown;menuId:number;option:number;
    write(buf:DataStream): void;
    read(buf:DataStream): void;
}
export class PingCallPacket extends Packet{
    write(buf:DataStream): void;
    _id:number;time:number;
}
export class SendChatMessageCallPacket extends Packet{
    _id:number;
    message:string;
    write(buf:Buffer):void;
}
export class SendMessageCallPacket extends Packet{
    _id:number;message:string;
    read(buf:DataStream): void;
    write(buf:DataStream): void;
}
export class SendMessageCallPacket2 extends Packet{
    _id:number;message:string;unformatted:unknown;
    playersender:unknown;
    write(buf:DataStream): void;
    read(buf:DataStream): void;
}
 
export class TCPConnection{
    #readBuffer:DataStream;
    #writeBuffer:DataStream;
    #serializer:unknown;
    #tcp:unknown;#connected:unknown;
    #timer:unknown;#objectLength:unknown;
    constructor(w,s,p){
        
    }
}