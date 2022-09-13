import {
    VASTClient,
    VASTParser,
    VASTTracker,
    VastResponse,
    VastAd,
    VastCreativeLinear,
    VASTClientCustomStorage,
    VASTClientUrlHandler,
    VastCreativeCompanion,
} from 'vast-client';

const VASTUrl = 'http://example.dailymotion.com/vast.xml';
const VASTXml = new DOMParser().parseFromString('<vast></vast>', 'text/xml');

function cbSuccess(response: VastResponse): void {
    // process the VAST response
    const ads: VastAd[] = response.ads;
    const linearCreative = response.ads[0].creatives.filter(creative => {
        return creative.type === 'linear';
    });
    if (linearCreative && linearCreative.length > 0) {
        const creative = linearCreative[0] as VastCreativeLinear;
        if (!!creative.videoCustomClickURLTemplates) {
        }
        const mediaFiles = creative.mediaFiles;
    }
}

function cbError(error: Error): void {
    // handle error
    return;
}

// CLIENT

const customStorage: VASTClientCustomStorage = {
    data: {},
    getItem(key) {
        return this.data[key];
    },
    setItem(key, value) {
        this.data[key] = value;
    },
};

const client = new VASTClient(5, 60000, customStorage);

// Ignore the first 2 calls
client.cappingFreeLunch = 2;

// Those following client.get calls won't be done
client
    .get(VASTUrl)
    .then(cbSuccess)
    .catch(cbError);
client
    .get(VASTUrl)
    .then(cbSuccess)
    .catch(cbError);

// VASTUrl will be called
client
    .get(VASTUrl)
    .then(cbSuccess)
    .catch(cbError);

// Ignore any call made 5 minutes or less after one.
client.cappingMinimumTimeInterval = 5 * 60 * 1000;

// ...
// 2 minutes later

// Ignored
client
    .get(VASTUrl)
    .then(cbSuccess)
    .catch(cbError);

// ...
// 4 minutes later

// Work
client
    .get(VASTUrl)
    .then(cbSuccess)
    .catch(cbError);

// with options
const urlHandler: VASTClientUrlHandler = {
    get: (url, options, cb) => {
        // get xml
        cb(null, VASTXml);
        // or call with error
        cb(new Error('no vast'));
    },
};
client
    .get(VASTUrl, { urlHandler })
    .then(cbSuccess)
    .catch(cbError);

if (client.hasRemainingAds()) {
    client
        .getNextAds()
        .then(res => {
            // Do something with the next Ads
        })
        .catch(err => {
            // Deal with the error
        });
}

// PARSER

const parser = new VASTParser();

const replaceDomain = (url: string): string => {
    return url.replace('[DOMAIN]', 'mywebsite.com');
};

parser.addURLTemplateFilter(replaceDomain);

const count = parser.countURLTemplateFilters();

parser.clearUrlTemplateFilters();

parser.trackVastError(['http://errorUrlTemplate.com/'], { ERRORCODE: 301 }, { ERRORMESSAGE: 'error message' });

parser
    .fetchVAST(VASTUrl)
    .then(xml => {
        // do something with xml document
        return xml.documentElement.nodeName === 'VAST';
    })
    .catch(error => {
        // handle error
    });

const options = {
    withCredentials: true,
    wrapperLimit: 5,
};
parser
    .getAndParseVAST(VASTUrl, options)
    .then(cbSuccess)
    .catch(cbError);

parser
    .parseVAST(VASTXml)
    .then(cbSuccess)
    .catch(cbError);

// TRACKER

// Create a VAST Tracker instance for a linear ad
const vastTracker = new VASTTracker(client, {} as VastAd, {} as VastCreativeLinear);

// Create a VAST Tracker instance for a companion ad
const vastTrackerCompanion = new VASTTracker(
    client,
    {} as VastAd,
    {} as VastCreativeLinear,
    {} as VastCreativeCompanion,
);

const onSkip = () => {
    console.log('Ad unit skipped');
};

// Log a message when event 'skip' is emitted
vastTracker.on('skip', onSkip);
// Stop logging message
vastTracker.off('skip', onSkip);

const player = document.getElementById('playerId') as HTMLVideoElement;

// Bind a timeupdate listener to the player
player.addEventListener('timeupdate', e => {
    vastTracker.setProgress((e.target as HTMLVideoElement).currentTime);
});

vastTracker.on('firstQuartile', () => {
    // firstQuartile tracking URLs have been called
});

// Bind a volumechange listener to the player
player.addEventListener('volumechange', e => {
    vastTracker.setMuted((e.target as HTMLVideoElement).muted);
});

vastTracker.on('mute', () => {
    // mute tracking URLs have been called
});

vastTracker.on('unmute', () => {
    // unmute tracking URLs have been called
});

// Bind play/pause listeners to the player
player.addEventListener('play', () => {
    vastTracker.setPaused(false);
});
player.addEventListener('pause', () => {
    vastTracker.setPaused(true);
});

vastTracker.on('resume', () => {
    // resume tracking URLs have been called
});

vastTracker.on('pause', () => {
    // pause tracking URLs have been called
});

// Bind fullscreenchange listener to the player
// Note that the fullscreen API is still vendor-prefixed in browsers
player.addEventListener('fullscreenchange', e => {
    const isFullscreen = true;
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

const expandButton = document.getElementById('buttonId') as HTMLButtonElement;

function increasePlayerSize(): void {
    // do nothing
}

function decreasePlayerSize(): void {
    // do nothing
}

expandButton.addEventListener('click', e => {
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
    vastTracker.trackImpression();
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
const skipButton = document.getElementById('buttonId') as HTMLButtonElement;

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

// Bind acceptInvitation listener to the invitation button
const invitationButton = document.getElementById('invitationButtonId') as HTMLButtonElement;

// Bind click listener to the button
invitationButton.addEventListener('click', () => {
    vastTracker.track('acceptInvitation');
    vastTracker.track('acceptInvitationLinear', false);
});
