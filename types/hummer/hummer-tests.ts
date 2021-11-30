import Hummer from './emulator/Hummer';

Hummer.env.appName; // $ExpectType string
Hummer.env.appVersion; // $ExpectType string
Hummer.env.platform; // $ExpectType string
Hummer.env.osVersion; // $ExpectType string
Hummer.env.statusBarHeight; // $ExpectType number
Hummer.env.safeAreaBottom; // $ExpectType number
Hummer.env.deviceWidth; // $ExpectType number
Hummer.env.deviceHeight; // $ExpectType number
Hummer.env.availableWidth; // $ExpectType number
Hummer.env.availableHeight; // $ExpectType number
Hummer.env.scale; // $ExpectType number
