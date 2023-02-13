/*
* Copyright (c) 2019-2020 Bradley Farias
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/

declare module "instrumentation" {
    type PixelsDrawn = 1;
    type FramesDrawn = 2;
    type NetworkBytesRead = 3;
    type NetworkBytesWritten = 4;
    type NetworkSockets = 5;
    type Timers = 6;
    type Files = 7;
    type POCODisplayListUsed = 8;
    type PIUCommandListUsed = 9;
    type SystemFreeMemory = 10;
    type SlotHeapSize = 11;
    type ChunkHeapSize = 12;
    type KeysUsed = 13;
    type GarbageCollectionCount = 14;
    type ModulesLoaded = 15;
    type StackPeak = 16;
    type InstrumentationOption = (
        PixelsDrawn |
        FramesDrawn |
        NetworkBytesRead |
        NetworkBytesWritten |
        NetworkSockets |
        Timers |
        Files |
        POCODisplayListUsed |
        PIUCommandListUsed |
        SystemFreeMemory |
        SlotHeapSize |
        ChunkHeapSize |
        KeysUsed |
        GarbageCollectionCount |
        ModulesLoaded |
        StackPeak
    );
    var Instrumentation: {
        get: (what: InstrumentationOption) => number;
    };
    export { Instrumentation as default };
}
