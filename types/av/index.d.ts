// Type definitions for av 0.4
// Project: https://github.com/audiocogs/aurora.js#readme
// Definitions by: Candid Dauth <https://github.com/cdauth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Asset } from "./asset";
import { Buffer } from "./buffer";
import { BufferList } from "./bufferList";
import { Stream } from "./stream";
import { Bitstream } from "./bitstream";
import { EventEmitter } from "./eventEmitter";
import { UnderflowError } from "./baseTypes";
import { HTTPSource, FileSource, BufferSource } from "./source";
import { Demuxer } from "./demuxer";
import { Decoder } from "./decoder";
import { AudioDevice } from "./audioDevice";
import { Player } from "./player";
import { Filter, BalanceFilter, VolumeFilter } from "./filter";

declare const AV: {
	Buffer: typeof Buffer,
	BufferList: typeof BufferList,
	Stream: typeof Stream,
	Bitstream: typeof Bitstream,
	EventEmitter: typeof EventEmitter,
	UnderflowError: typeof UnderflowError,
	HTTPSource: typeof HTTPSource,
	FileSource: typeof FileSource,
	BufferSource: typeof BufferSource,
	Demuxer: typeof Demuxer,
	Decoder: typeof Decoder,
	AudioDevice: typeof AudioDevice,
	Asset: typeof Asset,
	Player: typeof Player,
	Filter: typeof Filter,
	VolumeFilter: typeof VolumeFilter,
	BalanceFilter: typeof BalanceFilter
};

export = AV;
