// $ExpectType `${string}-${string}`
const v = window.dynmapversion;

// $ExpectType DynMap
const D = window.dynmap;

// $ExpectType World | undefined
const WesterosNew = dynmap.worlds.WesterosNew;

if (
    window.dynmap.worlds.WesterosNew
    && window.dynmap.worlds.WesterosNew.maps.flat
) {
    // $ExpectType void
    window.dynmap.selectWorld(window.dynmap.worlds.WesterosNew, () => {});

    // $ExpectType void
    window.dynmap.selectMap(window.dynmap.worlds.WesterosNew.maps.flat);
}

// $ExpectType JQuery<HTMLUListElement> | null | undefined
const playerlist = window.dynmap.playerlist;

// $ExpectType GlobalMap | null
const _map = window.map;

// $ExpectType HTMLElement | undefined
const controlContainer = window.map?.getContainer();

// $ExpectType string
const tileUrl = window.config.url.tiles;

// $ExpectType boolean | undefined
const isChatEnabled = window.dynmap.options.allowwebchat;

// $ExpectType ComponentConfiguration | undefined
const chatboxComponent = window.dynmap.options.components?.filter(c => c.type === "chatbox")[0];
