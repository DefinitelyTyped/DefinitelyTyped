// Type definitions for musickit-js 3.2244
// Project: https://js-cdn.music.apple.com/musickit/v3/docs/index.html
// Definitions by: Devid Farinelli <https://github.com/misterdev>
//                 8beeeaaat <https://github.com/8beeeaaat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

/// <reference path="MusicKit.d.ts" />
/// <reference path="MusicKit.API.d.ts" />
/// <reference path="MusicKit.API.Response.d.ts" />
/// <reference path="MusicKit.API.QueryParameters.d.ts" />
/// <reference path="MusicKit.Events.d.ts" />
/// <reference path="MusicKit.MediaItem.d.ts" />
/// <reference path="MusicKit.MKError.d.ts" />
/// <reference path="MusicKit.MusicKitInstance.d.ts" />
/// <reference path="MusicKit.Player.d.ts" />
/// <reference path="MusicKit.Queue.d.ts" />
/// <reference path="MusicKit.Resource.d.ts" />
/// <reference path="MusicKit.SetQueueOptions.d.ts" />

type filterUnionByProperty<Union, Property extends string | number | symbol, Condition> = Union extends Record<
    Property,
    Condition
>
    ? Union
    : never;
