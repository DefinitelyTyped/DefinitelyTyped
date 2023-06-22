// Type definitions for db-hafas-stations 1.0
// Project: https://github.com/derhuerst/db-hafas-stations
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from 'stream';

export = stations;

/**
 * All [*Deutsche Bahn* (DB)](https://en.wikipedia.org/wiki/Deutsche_Bahn) stations returned by
 * [their HAFAS API](https://github.com/public-transport/hafas-client/tree/2ec079adfc8a3d988190491b7e07dc03826b719e/p/db),
 * currently about 299k.
 *
 * @return A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in
 * [object mode](https://nodejs.org/api/stream.html#stream_object_mode), emitting
 * [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format)
 * `station` objects read from `db-hafas-stations/data.ndjson` (~13mb).
 *
 * @example
 * import stations = require('db-hafas-stations')
 *
 * stations()
 *   .on('data', console.log)
 *   .on('error', console.error)
 * // =>
 * // {
 * //   type: 'station',
 * //   id: '8000007',
 * //   name: 'Alzey',
 * //   weight: 73.1
 * // }
 */
declare function stations(): stations.ReadableStations<stations.Station>;

declare namespace stations {
    /**
     * @return A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in
     * [object mode](https://nodejs.org/api/stream.html#stream_object_mode), emitting
     * [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format)
     * `station` objects read from `db-hafas-stations/full.ndjson` (~120mb).
     *
     * @example
     * import stations = require('db-hafas-stations')
     *
     * stations.full()
     *   .on('data', console.log)
     *   .on('error', console.error)
     * // =>
     * // {
     * //   type: 'station',
     * //   id: '8702510',
     * //   name: 'Franois',
     * //   location: {
     * //     type: 'location',
     * //     id: '8702510',
     * //     latitude: 47.22741,
     * //     longitude: 5.937384
     * //   },
     * //   products: {
     * //     nationalExpress: false,
     * //     national: false,
     * //     regionalExp: false,
     * //     regional: true,
     * //     suburban: false,
     * //     bus: true,
     * //     ferry: false,
     * //     subway: false,
     * //     tram: false,
     * //     taxi: false
     * //   },
     * //   distance: 3334,
     * //   weight: 1.2
     * // }
     */
    function full(): ReadableStations<StationFull>;

    interface ReadableStations<TStation extends Station> extends Readable {
        addListener(event: 'data', listener: (station: TStation) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'data', station: TStation): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'data', listener: (station: TStation) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'data', listener: (station: TStation) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'data', listener: (station: TStation) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'data', listener: (station: TStation) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: 'data', listener: (station: TStation) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface Station {
        type: 'station';
        id: string;
        name: string;
        weight: number;
    }

    interface StationFull extends Station {
        location: Location;
        products: Products;
        distance?: number;
    }

    interface Location {
        type: 'location';
        id: string;
        latitude: number;
        longitude: number;
    }

    interface Products {
        nationalExpress: boolean;
        national: boolean;
        regionalExp: boolean;
        regional: boolean;
        suburban: boolean;
        bus: boolean;
        ferry: boolean;
        subway: boolean;
        tram: boolean;
        taxi: boolean;
    }
}
