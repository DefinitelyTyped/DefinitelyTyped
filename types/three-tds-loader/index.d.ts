// Type definitions for three-tds-loader 1.1
// Project: https://github.com/codetheorist/three-tds-loader
// Definitions by: Konstantin Lukaschenko <https://github.com/KonstantinLukaschenko>
//                 Stefan Schönsee <https://github.com/sschoensee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as THREE from 'three';

export = TDSLoader;

declare class TDSLoader {
    constructor(three: typeof THREE);

    /**
     * Load 3ds file from url.
     *
     * @param url URL for the file.
     * @param onLoad onLoad callback, receives group object3D as argument.
     * @param onProgress onProgress callback.
     * @param onError onError callback.
     */
    load: (url: string, onLoad: (object3D: THREE.Object3D) => void, onProgress?: (progress: ProgressEvent) => void, onError?: (event: ErrorEvent) => void) => void;

    /**
     * Parse arraybuffer data and load 3ds file.
     *
     * @param arraybuffer Arraybuffer data to be loaded.
     * @param path Path for external resources.
     * @return Group loaded from 3ds file.
     */
    parse: (arraybuffer: ArrayBuffer, path: string) => THREE.Object3D;

    /**
     * Decode file content to read 3ds data.
     *
     * @param arraybuffer Arraybuffer data to be loaded.
     */
    readFile: (arraybuffer: ArrayBuffer, path: string) => void;

    /**
     * Read mesh data chunk.
     *
     * @param data Dataview in use.
     */
    readMeshData: (data: DataView, path: string) => void;

    /**
     * Read named object chunk.
     *
     * @param data Dataview in use.
     */
    readNamedobject: (data: DataView) => void;

    /**
     * Read material data chunk and add it to the material list.
     *
     * @param data Dataview in use.
     */
    readMaterialEntry: (data: DataView, path: string) => void;

    /**
     * Read mesh data chunk.
     *
     * @param data Dataview in use.
     */
    readMesh: (data: DataView) => void;

    /**
     * Read face array data chunk.
     *
     * @param data Dataview in use.
     * @param mesh Mesh to be filled with the data read.
     */
    readFaceArray: (data: DataView, mesh: THREE.Mesh) => void;

    /**
     * Read texture map data chunk.
     *
     * @param data Dataview in use.
     * @return Texture read from this data chunk.
     */
    readMap: (data: DataView, path: string) => THREE.Texture;

    /**
     * Read material group data chunk.
     *
     * @param data Dataview in use.
     * @return object with name and index of the object.
     */
    readMaterialGroup: (data: DataView) => object;

    /**
     * Read a color value.
     *
     * @param data Dataview.
     * @return Color value read..
     */
    readColor: (data: DataView) => THREE.Color;

    /**
     * Read next chunk of data.
     *
     * @param data Dataview.
     * @return Chunk of data read.
     */
    readChunk: (data: DataView) => object;

    /**
     * Set position to the end of the current chunk of data.
     *
     * @param chunk Data chunk.
     */
    endChunk: (chunk: object) => void;

    /**
     * Move to the next data chunk.
     *
     * @param data Dataview.
     * @param chunk Data chunk.
     */
    nextChunk: (data: DataView, chunk: object) => number;

    /**
     * Reset dataview position.
     */
    resetPosition: () => void;

    /**
     * Read byte value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readByte: (data: DataView) => number;

    /**
     * Read 32 bit float value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readFloat: (data: DataView) => number;

    /**
     * Read 32 bit signed integer value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readInt: (data: DataView) => number;

    /**
     * Read 16 bit signed integer value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readShort: (data: DataView) => number;

    /**
     * Read 64 bit unsigned integer value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readDWord: (data: DataView) => number;

    /**
     * Read 32 bit unsigned integer value.
     *
     * @param data Dataview to read data from.
     * @return Data read from the dataview.
     */
    readWord: (data: DataView) => number;

    /**
     * Read string value.
     *
     * @param data Dataview to read data from.
     * @param maxLength Max size of the string to be read.
     * @return Data read from the dataview.
     */
    readString: (data: DataView, maxLength: number) => string;

    /**
     * Set resource path used to determine the file path to attached resources.
     *
     * @param path Path to resources.
     * @return Self for chaining.
     */
    setPath: (path: string) => TDSLoader;

    /**
     * Print debug message to the console.
     *
     * Is controlled by a flag to show or hide debug messages.
     *
     * @param message Debug message to print to the console.
     */
    debugMessage: (message: string) => void;
}
