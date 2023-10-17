// Minimum TypeScript Version: 3.0
/// <reference types="node" />

import { EventEmitter } from "events";

export interface SearchOptions {
    searchmoves?: ReadonlyArray<string> | undefined;
    ponder?: boolean | undefined;
    wtime?: number | undefined;
    btime?: number | undefined;
    winc?: number | undefined;
    binc?: number | undefined;
    movestogo?: number | undefined;
    depth?: number | undefined;
    nodes?: number | undefined;
    mate?: number | undefined;
    movetime?: number | undefined;
}

export interface SearchResult {
    bestmove: string;
    info: ReadonlyArray<string>;
}

export class Engine {
    constructor(enginePath: string);
    getBufferUntil(fn: (str: string) => boolean): Promise<ReadonlyArray<string>>;
    write(cmd: string): void;
    chain(): EngineChain;
    init(): Promise<Engine>;
    quit(): Promise<Engine>;
    isready(): Promise<Engine>;
    sendCmd(cmd: string): Promise<Engine>;
    setoption(name: string, value?: string): Promise<Engine>;
    ucinewgame(): Promise<Engine>;
    ponderhit(): Promise<Engine>;
    position(fen: string, moves?: ReadonlyArray<string>): Promise<Engine>;
    go(sp: SearchOptions): Promise<SearchResult>;
    goInfinite(sp: SearchOptions): EventEmitter;
    stop(): Promise<SearchResult>;
}

export class EngineChain {
    constructor(engine: Engine);
    init(): EngineChain;
    setoption(name: string, value?: string): EngineChain;
    isready(): EngineChain;
    ucinewgame(): EngineChain;
    quit(): EngineChain;
    position(fen: string, moves?: ReadonlyArray<string>): EngineChain;
    go(sp: SearchOptions): Promise<SearchResult>;
    exec(): unknown;
}
