// Type definitions for chromecast-caf-receiver 3.x
// Project: https://developers.google.com/cast/docs/reference/caf_receiver/
// Definitions by: Craig Bruce https://github.com/craigrbruce
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./index.d.ts" />
/// <reference path="./cast.framework.d.ts" />
/// <reference path="./cast.framework.breaks.d.ts" />
/// <reference path="./cast.framework.events.d.ts" />
/// <reference path="./cast.framework.messages.d.ts" />
/// <reference path="./cast.framework.system.d.ts" />
/// <reference path="./cast.framework.ui.d.ts" />

import { TextTracksManager } from "cast.framework";
import { StandbyChangedEvent } from "cast.framework.system";
import { PlayerData, ContentType } from "cast.framework.ui";
import { BreakManager } from "cast.framework.breaks";
import { MediaStatusEvent } from "cast.framework.events";
import { Track, Break, MediaStatus, QueueData } from "cast.framework.messages";

const ct = ContentType.VIDEO;
// framework tests
const track = new Track(123, {});
const ttm = new TextTracksManager({});
ttm.addTracks(track);

// $ExpectError
ttm.addTracks("should fail");

// system tests
const sce = new StandbyChangedEvent(true);
// $ExpectError
const wrongSce = new StandbyChangedEvent("error");

const result: boolean = sce.isStandby;
// $ExpectError
const failure: string = sce.isStandby;

// ui tests
const pd = new PlayerData();

const cn: number = pd.currentBreakClipNumber;
// $ExpectError
const wrongCn: boolean = pd.currentBreakClipNumber;

// breaks tests
const bm: BreakManager = new BreakManager();
const brk1: Break = bm.getBreakById("123");
// $ExpectError
const brk2: string = bm.getBreakById("123");
// $ExpectError
const brk3: Break = bm.getBreakById(123);
// events tests

const evt: MediaStatusEvent = new MediaStatusEvent();
const ms: MediaStatus = evt.mediaStatus;
// $ExpectError
const ms: string = evt.mediaStatus;

// messages tests
const qd = new QueueData("id", "name", "description", "mode");
// $ExpectError
const wrongQd = new QueueData({});
const name: string = qd.name;
// $ExpectError
const wrongName: number = qd.name;
