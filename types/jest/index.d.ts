// Type definitions for Jest 26.0
// Project: https://jestjs.io/
// Definitions by: Asana (https://asana.com)
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 Alexey Svetliakov <https://github.com/asvetliakov>
//                 Alex Jover Morales <https://github.com/alexjoverm>
//                 Allan Lukwago <https://github.com/epicallan>
//                 Ika <https://github.com/ikatyang>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Jamie Mason <https://github.com/JamieMason>
//                 Douglas Duteil <https://github.com/douglasduteil>
//                 Ahn <https://github.com/ahnpnl>
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Jeff Lau <https://github.com/UselessPickles>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Martin Hochel <https://github.com/hotell>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Andy <https://github.com/andys8>
//                 Antoine Brault <https://github.com/antoinebrault>
//                 Gregor Stamać <https://github.com/gstamac>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Bolenok <https://github.com/quassnoi>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
//                 Tony Hallett <https://github.com/tonyhallett>
//                 Jason Yu <https://github.com/ycmjason>
//                 Devansh Jethmalani <https://github.com/devanshj>
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Regev Brody <https://github.com/regevbr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-bad-reference
/// <reference path="ts3.1/index.d.ts" />

declare namespace jest {
    interface Matchers<R, T = {}> {
        /**
         * For comparing numbers or big integer values.
         */
        toBeGreaterThan(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeGreaterThanOrEqual(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeLessThan(expected: number | bigint): R;
        /**
         * For comparing numbers or big integer values.
         */
        toBeLessThanOrEqual(expected: number | bigint): R;
    }
}
