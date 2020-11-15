// Type definitions for play-sound 1.1
// Project: https://github.com/shime/play-sound
// Definitions by: Vincent <https://github.com/Vinnl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.3

/// <reference types="node" />

import { ChildProcess } from "child_process";

interface Player {
  play(path: string, onError?: (error: null | (Error & { killed: boolean })) => void): ChildProcess;
  play(path: string, args: Record<string, any>, onError?: (error: null | (Error & { killed: boolean })) => void): ChildProcess;
}

declare function getPlayer(): Player;

export = getPlayer;
