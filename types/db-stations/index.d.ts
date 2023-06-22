// Type definitions for db-stations 4.1
// Project: https://github.com/derhuerst/db-stations
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable } from 'stream';

export = stations;

/**
 * A collection of all stations of [Deutsche Bahn](http://db.de/), computed from
 * [open data](https://developer.deutschebahn.com/store/apis/info?name=StaDa-Station_Data&version=v2&provider=DBOpenData).
 *
 * @returns A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in
 * [object mode](https://nodejs.org/api/stream.html#stream_object_mode), emitting
 * [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format)
 * `station` objects.
 *
 * @example
 * import stations = require('db-stations')
 *
 * stations()
 *   .on('data', console.log)
 *   .on('error', console.error)
 * // =>
 * // {
 * //   type: 'station',
 * //   id: '8000007', // EVA number
 * //   ril100: 'FALZ', // RIL100/RL100/DS100 code
 * //   nr: 133, // DB internal
 * //   name: 'Alzey',
 * //   weight: 73.1,
 * //   location: {
 * //     type: 'location',
 * //     latitude: 49.7502,
 * //     longitude: 8.109749
 * //   },
 * //   operator: {
 * //     type: 'operator',
 * //     id: 'zweckverband-schienenpersonennahverkehr-rheinland-pfalz-sud',
 * //     name: 'ZPNV Süd'
 * //   },
 * //   address: {
 * //     city: 'Alzey',
 * //     zipcode: '55232',
 * //     street: 'Bahnhofstr. 30'
 * //   }
 * // }
 */
declare function stations(): stations.ReadableStations<stations.Station>;

declare namespace stations {
    /**
     * @returns A [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in
     * [object mode](https://nodejs.org/api/stream.html#stream_object_mode), emitting
     * [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format)
     * `station` objects with more information.
     *
     * @example
     * import stations = require('db-stations')
     *
     * stations.full()
     *   .on('data', console.log)
     *   .on('error', console.error)
     * // =>
     * // {
     * //   type: 'station',
     * //   id: '8000007',
     * //   additionalIds: [],
     * //   ril100: 'FALZ',
     * //   nr: 133,
     * //   name: 'Alzey',
     * //   weight: 73.1,
     * //   location: {
     * //     type: 'location',
     * //     latitude: 49.7502,
     * //     longitude: 8.109749
     * //   },
     * //   operator: {
     * //     type: 'operator',
     * //     id: 'zweckverband-schienenpersonennahverkehr-rheinland-pfalz-sud',
     * //     name: 'ZPNV Süd'
     * //   },
     * //   address: {
     * //     city: 'Alzey',
     * //     zipcode: '55232',
     * //     street: 'Bahnhofstr. 30'
     * //   },
     * //   category: 3,
     * //   priceCategory: 3,
     * //   hasParking: true,
     * //   hasBicycleParking: true,
     * //   hasLocalPublicTransport: true,
     * //   hasPublicFacilities: false,
     * //   hasLockerSystem: false,
     * //   hasTaxiRank: true,
     * //   hasTravelNecessities: false,
     * //   hasSteplessAccess: 'partial',
     * //   hasMobilityService: 'no',
     * //   hasWiFi: false,
     * //   hasTravelCenter: false,
     * //   hasRailwayMission: false,
     * //   hasDBLounge: false,
     * //   hasLostAndFound: false,
     * //   hasCarRental: false,
     * //   federalState: 'Rheinland-Pfalz',
     * //   regionalbereich: {
     * //     number: 5,
     * //     name: 'RB Mitte',
     * //     shortName: 'RB M'
     * //   },
     * //   timeTableOffice: {
     * //     email: 'DBS.Fahrplan.RhldPfalzSaarland@deutschebahn.com',
     * //     name: 'Bahnhofsmanagement Mainz'
     * //   },
     * //   szentrale: {
     * //     number: 24,
     * //     publicPhoneNumber: '06131/151055',
     * //     name: 'Mainz Hbf'
     * //   },
     * //   stationManagement: {
     * //     number: 184,
     * //     name: 'Mainz'
     * //   },
     * //   ril100Identifiers: [ {
     * //     rilIdentifier: 'FALZ',
     * //     isMain: true,
     * //     hasSteamPermission: true,
     * //     geographicCoordinates: {
     * //       type: 'Point',
     * //       coordinates: [
     * //         8.109684725,
     * //         49.750267695
     * //       ]
     * //     }
     * //   } ]
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
        ril100: string;
        nr: number;
        name: string;
        weight: number;
        location: Location;
        operator: Operator;
        address: Address;
    }

    interface StationFull extends Station {
        additionalIds: string[];
        category: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        priceCategory: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        hasParking: boolean;
        hasBicycleParking: boolean;
        hasLocalPublicTransport: boolean;
        hasPublicFacilities: boolean;
        hasLockerSystem: boolean;
        hasTaxiRank: boolean;
        hasTravelNecessities: boolean;
        hasSteplessAccess: 'no' | 'yes' | 'partial';
        hasMobilityService: 'no' | string;
        hasWiFi: boolean;
        hasTravelCenter: boolean;
        hasRailwayMission: boolean;
        hasDBLounge: boolean;
        hasLostAndFound: boolean;
        hasCarRental: boolean;
        federalState: FederalState;
        regionalbereich: Regionalbereich;
        timeTableOffice: TimeTableOffice;
        szentrale: SZentrale;
        stationManagement: StationManagement;
        ril100Identifiers: Ril100Identifier[];
    }

    interface Location {
        type: 'location';
        latitude: number;
        longitude: number;
    }

    interface Operator {
        type: 'operator';
        id: string;
        name: string;
    }

    interface Address {
        city: string;
        zipcode: string;
        street: string;
    }

    type FederalState =
        | 'Baden-Württemberg'
        | 'Bayern'
        | 'Berlin'
        | 'Brandenburg'
        | 'Bremen'
        | 'Hamburg'
        | 'Hessen'
        | 'Mecklenburg-Vorpommern'
        | 'Niedersachsen'
        | 'Nordrhein-Westfalen'
        | 'Rheinland-Pfalz'
        | 'Saarland'
        | 'Sachsen'
        | 'Sachsen-Anhalt'
        | 'Schleswig-Holstein'
        | 'Thüringen';

    type Regionalbereich =
        | { number: 1; name: 'RB Ost'; shortName: 'RB Ost' }
        | { number: 2; name: 'RB Südost'; shortName: 'RB Südost' }
        | { number: 3; name: 'RB Nord'; shortName: 'RB Nord' }
        | { number: 4; name: 'RB West'; shortName: 'RB West' }
        | { number: 5; name: 'RB Mitte'; shortName: 'RB Mitte' }
        | { number: 6; name: 'RB Südwest'; shortName: 'RB Südwest' }
        | { number: 7; name: 'RB Süd'; shortName: 'RB Süd' };

    interface TimeTableOffice {
        email: string;
        name: string;
    }

    interface SZentrale {
        number: number;
        publicPhoneNumber: string;
        name: string;
    }

    interface StationManagement {
        number: number;
        name: string;
    }

    interface Ril100Identifier {
        rilIdentifier: string;
        isMain: boolean;
        hasSteamPermission: boolean;
        geographicCoordinates: Point;
    }

    interface Point {
        type: 'Point';
        coordinates: [number, number];
    }
}
