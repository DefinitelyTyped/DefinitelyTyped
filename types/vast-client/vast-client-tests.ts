import * as DMVAST from 'vast-client';

const VASTUrl = 'http://example.dailymotion.com/vast.xml';
function cb(response: DMVAST.VastResponse, error: Error): void {
    if (error) return;
    // process the VAST response
    const ads: DMVAST.VastAd[] = response.ads;
    const linearCreative = response.ads[0].creatives.filter(creative => {
        return creative.type === 'linear';
    });
    if (linearCreative && linearCreative.length > 0) {
        const creative = linearCreative[0] as DMVAST.VastCreativeLinear;
        const mediaFiles = creative.mediaFiles;
    }
}

// CLIENT

// Ignore the first 2 calls
DMVAST.client.cappingFreeLunch = 2;

// Those following DMVAST.client.get calls won't be done
DMVAST.client.get(VASTUrl, cb);
DMVAST.client.get(VASTUrl, cb);

// VASTUrl will be called
DMVAST.client.get(VASTUrl, cb);

// Ignore any call made 5 minutes or less after one.
DMVAST.client.cappingMinimumTimeInterval = 5 * 60 * 1000;

// Work
DMVAST.client.get(VASTUrl, cb);

// ...
// 2 minutes later

// Ignored
DMVAST.client.get(VASTUrl, cb);

// ...
// 4 minutes later

// Work
DMVAST.client.get(VASTUrl, cb);

// PARSER

DMVAST.parser.addURLTemplateFilter((vastUrl: string): string => {
    return vastUrl.replace('[DOMAIN]', 'mywebsite.com');
});

const count = DMVAST.parser.countURLTemplateFilters();

DMVAST.parser.clearUrlTemplateFilters();

const xml = 'some xml';
const options = {
    withCredentials: true,
    wrapperLimit: 5
};

DMVAST.parser.load(xml, options, cb);

const url = 'http://example.dailymotion.com/vast.xml';

DMVAST.parser.parse(url, options, cb);

const replaceDomain = (url: string): string => {
    return url.replace('[DOMAIN]', 'mywebsite.com');
};

DMVAST.parser.addURLTemplateFilter(replaceDomain);
DMVAST.parser.removeURLTemplateFilter(replaceDomain);

// TRACKER

// Create a VAST Tracker instance for a linear ad
const vastTracker = new DMVAST.tracker({} as DMVAST.VastAd, {} as DMVAST.VastCreativeLinear);

// Create a VAST Tracker instance for a companion ad
// const vastTracker = new DMVAST.tracker({} as DMVAST.VastAd, {} as DMVAST.VastCreativeLinear, {} as DMVAST.VastCreativeCompanion);

const onSkip = () => {
    console.log('Ad unit skipped');
};

// Log a message when event 'skip' is emitted
vastTracker.on('skip', onSkip);
// Stop logging message
vastTracker.off('skip', onSkip);

const player: HTMLVideoElement = <HTMLVideoElement> document.getElementById('playerId');

// Bind a timeupdate listener to the player
player.addEventListener('timeupdate', (e) => {
    vastTracker.setProgress((<HTMLVideoElement> e.target).currentTime);
});

vastTracker.on('firstQuartile', () => {
    // firstQuartile tracking URLs have been called
});

// Bind a volumechange listener to the player
player.addEventListener('volumechange', (e) => {
    vastTracker.setMuted((<HTMLVideoElement> e.target).muted);
});

vastTracker.on('mute', () => {
    // mute tracking URLs have been called
});

vastTracker.on('unmute', () => {
    // unmute tracking URLs have been called
});

// Bind play/pause listeners to the player
player.addEventListener('play', () => { vastTracker.setPaused(false); });
player.addEventListener('pause', () => { vastTracker.setPaused(true); });

vastTracker.on('resume', () => {
    // resume tracking URLs have been called
});

vastTracker.on('pause', () => {
    // pause tracking URLs have been called
});

// Bind fullscreenchange listener to the player
// Note that the fullscreen API is still vendor-prefixed in browsers
player.addEventListener('fullscreenchange', (e) => {
    const isFullscreen = !!document.fullscreenElement;
    vastTracker.setFullscreen(isFullscreen);
});

vastTracker.on('fullscreen', () => {
    // fullscreen tracking URLs have been called
});

vastTracker.on('exitFullscreen', () => {
    // exitFullscreen tracking URLs have been called
});

// Sample function for a button that increase/decrease player size
let playerExpanded = false;

const expandButton = <HTMLButtonElement> document.getElementById('buttonId');

function increasePlayerSize(): void {
    // do nothing
}

function decreasePlayerSize(): void {
    // do nothing
}

expandButton.addEventListener('click', (e) => {
    playerExpanded = !playerExpanded;
    if (playerExpanded) {
        increasePlayerSize();
    } else {
        decreasePlayerSize();
    }
    vastTracker.setExpand(playerExpanded);
});

vastTracker.on('expand', () => {
    // expand tracking URLs have been called
});

vastTracker.on('collapse', () => {
    // collapse tracking URLs have been called
});

// Overwrite linear Skipoffset value – 5s countdown
vastTracker.setSkipDelay(5);

// Bind canplay listener to the player
player.addEventListener('canplay', () => {
    vastTracker.load();
});

vastTracker.on('creativeView', () => {
    // impression tracking URLs have been called
});

const MEDIAFILE_PLAYBACK_ERROR = '405';

// Bind error listener to the player
player.addEventListener('error', () => {
    vastTracker.errorWithCode(MEDIAFILE_PLAYBACK_ERROR);
});

// Bind ended listener to the player
player.addEventListener('ended', () => {
    vastTracker.complete();
});

vastTracker.on('complete', () => {
    // complete tracking URLs have been called
});

// When user exits the page
window.onbeforeunload = () => {
    vastTracker.close();
};

// use for VAST 3.0 linear ads
vastTracker.on('closeLinear', () => {
    // ...
});

// Use for VAST 2.0 linear ads or companion ads
vastTracker.on('close', () => {
    // ...
});

// Bind click listener to the skip button
const skipButton = <HTMLButtonElement> document.getElementById('buttonId');

skipButton.addEventListener('click', () => {
    vastTracker.skip();
});

vastTracker.on('skip', () => {
    // skip tracking URLs have been called
});

// Bind click listener to the player
player.addEventListener('click', () => {
    vastTracker.click();
});

vastTracker.on('clickthrough', (url: string) => {
    // Open the resolved clickThrough url
    document.location.href = url;
});
