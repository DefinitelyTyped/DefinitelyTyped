// Type definitions for Jest 29.0
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
//                 Pawel Fajfer <https://github.com/pawfa>
//                 Regev Brody <https://github.com/regevbr>
//                 Alexandre Germain <https://github.com/gerkindev>
//                 Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

declare var beforeAll: typeof import('@jest/globals').beforeAll;
declare var beforeEach: typeof import('@jest/globals').beforeEach;
declare var afterAll: typeof import('@jest/globals').afterAll;
declare var afterEach: typeof import('@jest/globals').afterEach;
declare var describe: typeof import('@jest/globals').describe;
declare var fdescribe: typeof import('@jest/globals').fdescribe;
declare var xdescribe: typeof import('@jest/globals').xdescribe;
declare var it: typeof import('@jest/globals').it;
declare var fit: typeof import('@jest/globals').fit;
declare var xit: typeof import('@jest/globals').xit;
declare var test: typeof import('@jest/globals').test;
declare var xtest: typeof import('@jest/globals').xtest;
declare var jest: typeof import('@jest/globals').jest;
declare var expect: typeof import('@jest/globals').expect;

interface ImportMeta {
    jest: typeof jest;
}
