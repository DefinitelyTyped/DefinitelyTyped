let b = false;
let n = 123;
const s = "string";

function testAudioTrack(t: TwineSugarCube.AudioTrack): void {
    let other: typeof t;
    other = t.clone();
    n = t.duration();
    t.fade(6, 1, 0);
    t.fadeIn(5, 0).then(() => {});
    t.fadeOut(4).then(() => {});
    t.fadeOut(4, 1).then(() => {});
    t.fadeStop(); // $ExpectType void
    b = t.hasData();
    b = t.hasMetadata();
    b = t.hasNoData();
    b = t.hasSomeData();
    b = t.hasSource();
    b = t.isEnded();
    b = t.isFading();
    b = t.isFailed();
    b = t.isLoading();
    b = t.isPaused();
    b = t.isPlaying();
    b = t.isSeeking();
    b = t.isStopped();
    b = t.isUnavailable();
    b = t.isUnloaded();
    t.load(); // $ExpectType void
    b = t.loop();
    other = t.loop(b);

    b = t.mute();
    other = t.mute(b);

    t.pause(); // $ExpectType void
    t.play().then(() => {});
    t.playWhenAllowed(); // $ExpectType void
    n = t.remaining();
    t.stop(); // $ExpectType void

    n = t.time();
    other = t.time(n);

    t.unload(); // $ExpectType void

    n = t.volume();
    other = t.volume(n);
}

function testAudioList(l: TwineSugarCube.AudioList): void {
    let other: typeof l;
    n = l.duration();
    l.fade(6, 1, 0).then(() => {});
    l.fadeIn(n).then(() => {});
    l.fadeIn(n, n).then(() => {});
    l.fadeOut(n).then(() => {});
    l.fadeOut(n, n).then(() => {});
    l.fadeStop(); // $ExpectType void
    b = l.isEnded();
    b = l.isFading();
    b = l.isPaused();
    b = l.isPlaying();
    b = l.isStopped();
    l.load(); // $ExpectType void
    b = l.loop();
    other = l.loop(b);
    b = l.mute();
    other = l.mute(b);
    l.pause(); // $ExpectType void
    l.play().then(() => {});
    l.playWhenAllowed(); // $ExpectType void
    n = l.remaining();
    b = l.shuffle();
    other = l.shuffle(b);
    l.skip(); // $ExpectType void
    l.stop(); // $ExpectType void
    n = l.time();
    l.unload(); // $ExpectType void
    n = l.volume();
    other = l.volume(n);
}

SimpleAudio.load(); // $ExpectType void
SimpleAudio.loadWithScreen(); // $ExpectType void

b = SimpleAudio.mute();
SimpleAudio.mute(true); // $ExpectType void

b = SimpleAudio.muteOnHidden();
SimpleAudio.muteOnHidden(b); // $ExpectType void

SimpleAudio.select(s);
SimpleAudio.stop(); // $ExpectType void
SimpleAudio.unload(); // $ExpectType void

n = SimpleAudio.volume();
SimpleAudio.volume(n); // $ExpectType void

SimpleAudio.groups.add(s);
SimpleAudio.groups.add(":ui", "ui_beep", "ui_boop", "ui_swish");
SimpleAudio.groups.clear(); // $ExpectType void
SimpleAudio.groups.delete(":ui"); // $ExpectType void
SimpleAudio.groups.get(":ui"); // $ExpectType string[]
SimpleAudio.groups.has(":ui");

SimpleAudio.lists.add("bgm_lacuna", "swamped", "heavens_a_lie", "closer", "to_the_edge");
// Using a mix of track IDs and descriptors
SimpleAudio.lists.add("bgm_lacuna",
    // Add existing track "swamped" at its current volume
    "swamped",
    // Add existing track "heavens_a_lie" at 50% volume
    {
        id: "heavens_a_lie",
        volume: 0.5
    },
    // Add an owned copy of existing track "closer" at its current volume
    {
        id: "closer",
        own: true
    },
    // Add an owned copy of existing track "to_the_edge" at 100% volume
    {
        id: "to_the_edge",
        own: true,
        volume: 1
    }
);
// Using descriptors with sources
SimpleAudio.lists.add("bgm_lacuna", // $ExpectType void
    // Add a track from the given sources at the default volume (100%)
    {
        sources: ["media/audio/Swamped.mp3"]
    },
    // Add a track from the given sources at 50% volume
    {
        sources: ["media/audio/Heaven's_A_Lie.mp3"],
        volume: 0.5
    },
    // Add a track from the given sources at the default volume (100%)
    {
        sources: ["media/audio/Closer.mp3"]
    },
    // Add a track from the given sources at 100% volume
    {
        sources: ["media/audio/To_The_Edge.mp3"],
        volume: 1
    }
);

SimpleAudio.lists.clear(); // $ExpectType void
SimpleAudio.lists.delete(s); // $ExpectType void
SimpleAudio.lists.get(s); // $ExpectType AudioList | null
testAudioList(SimpleAudio.lists.get(s) as TwineSugarCube.AudioList);
b = SimpleAudio.lists.has(s);

// Cache a track with the ID "boom" and one source via relative URL
SimpleAudio.tracks.add("boom", "media/audio/explosion.mp3");
// Cache a track with the ID "boom" and one source via audio passage
SimpleAudio.tracks.add("boom", "explosion");
// Cache a track with the ID "bgm_space" and two sources via relative URLs
SimpleAudio.tracks.add("bgm_space", "media/audio/space_quest.mp3", "media/audio/space_quest.ogg");
// Cache a track with the ID "what" and one source via URL with a format specifier
SimpleAudio.tracks.add("what", "mp3|http://an-audio-service.com/a-user/a-track-id");

SimpleAudio.tracks.clear(); // $ExpectType void
SimpleAudio.tracks.delete(s); // $ExpectType void
// @ts-expect-error
testAudioTrack(SimpleAudio.tracks.get(s));
testAudioTrack(SimpleAudio.tracks.get(s) as TwineSugarCube.AudioTrack);

export {};
