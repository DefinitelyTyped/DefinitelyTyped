import { Player } from '@vimeo/player';

// based on README.md of @vimeo/player >> https://github.com/vimeo/player.js

let player: Player ;

player = new Player('handstick', {
    id: 19231868,
    width: 640
});

const onPlay = (data: any) => {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');

player.loadVideo(76979871).then((id) => {
    // the video successfully loaded
}).catch((error) => {
    switch (error.name) {
        case 'TypeError':
            // the id was not a number
            break;

        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is password-protected or private
            break;

        default:
            // some other error occurred
            break;
    }
});

player.ready().then(() => {
    // the player is ready
});

player.enableTextTrack('en').then((track) => {
    console.log(track.label);
    console.log(track.kind);
    console.log(track.language);
    // track.language = the iso code for the language
    // track.kind = 'captions' or 'subtitles'
    // track.label = the human-readable label
}).catch((error) => {
    switch (error.name) {
        case 'InvalidTrackLanguageError':
            // no track was available with the specified language
            break;

        case 'InvalidTrackError':
            // no track was available with the specified language and kind
            break;

        default:
            // some other error occurred
            break;
    }
});

player.disableTextTrack().then(() => {
    // the track was disabled
}).catch((error) => {
    // an error occurred
});

player.pause().then(() => {
    // the video was paused
}).catch((error) => {
    switch (error.name) {
        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is private
            break;

        default:
            // some other error occurred
            break;
    }
});

player.play().then(() => {
    // the video was played
}).catch((error) => {
    switch (error.name) {
        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is private
            break;

        default:
            // some other error occurred
            break;
    }
});

player.unload().then(() => {
    // the video was unloaded
}).catch((error) => {
    // an error occurred
});

player.getAutopause().then((autopause) => {
    // autopause = whether autopause is turned on or off
}).catch((error) => {
    switch (error.name) {
        case 'UnsupportedError':
            // Autopause is not supported with the current player or browser
            break;

        default:
            // some other error occurred
            break;
    }
});

player.setAutopause(false).then((autopause) => {
    // autopause was turned off
}).catch((error) => {
    switch (error.name) {
        case 'UnsupportedError':
            // Autopause is not supported with the current player or browser
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getColor().then((color) => {
    // color = the hex color of the player
}).catch((error) => {
    // an error occurred
});

player.setColor('#00adef').then((color) => {
    // color was successfully set
}).catch((error) => {
    switch (error.name) {
        case 'ContrastError':
            // the color was set, but the contrast is outside of the acceptable
            // range
            break;

        case 'TypeError':
            // the string was not a valid hex or rgb color
            break;

        case 'EmbedSettingsError':
            // the owner of the video has chosen to use a specific color
            break;

        default:
            // some other error occurred
            break;
    }
});

player.addCuePoint(15, {
    customKey: 'customValue'
}).then((id) => {
    // cue point was added successfully
}).catch((error) => {
    switch (error.name) {
        case 'UnsupportedError':
            // cue points are not supported with the current player or browser
            break;

        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.removeCuePoint('09ecf4e4-b587-42cf-ad9f-e666b679c9ab').then((id) => {
    // cue point was removed successfully
}).catch((error) => {
    switch (error.name) {
        case 'UnsupportedError':
            // cue points are not supported with the current player or browser
            break;

        case 'InvalidCuePoint':
            // a cue point with the id passed wasn’t found
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getCuePoints().then((cuePoints) => {
    // cuePoints = an array of cue point objects
}).catch((error) => {
    switch (error.name) {
        case 'UnsupportedError':
            // cue points are not supported with the current player or browser
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getCurrentTime().then((seconds) => {
    // seconds = the current playback position
}).catch((error) => {
    // an error occurred
});

player.setCurrentTime(30.456).then((seconds) => {
    // seconds = the actual time that the player seeked to
}).catch((error) => {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getDuration().then((duration) => {
    // duration = the duration of the video in seconds
}).catch((error) => {
    // an error occurred
});

player.getEnded().then((ended) => {
    // ended = whether or not the video has ended
}).catch((error) => {
    // an error occurred
});

player.getLoop().then((loop) => {
    // loop = whether loop is turned on or not
}).catch((error) => {
    // an error occurred
});

player.setLoop(true).then((loop) => {
    // loop was turned on
}).catch((error) => {
    // an error occurred
});

player.getPaused().then((paused) => {
    // paused = whether or not the player is paused
}).catch((error) => {
    // an error occurred
});

player.getTextTracks().then((tracks) => {
    // tracks = an array of track objects
    tracks.forEach((track) => {
        console.log(track.label);
        console.log(track.kind);
        console.log(track.language);
    });
}).catch((error) => {
    // an error occurred
    error.name;
});

player.getVideoEmbedCode().then((embedCode) => {
    // embedCode = <iframe> embed code
}).catch((error) => {
    // an error occurred
});

player.getVideoId().then((id) => {
    // id = the video id
}).catch((error) => {
    // an error occurred
});

player.getVideoTitle().then((title) => {
    // title = the title of the video
}).catch((error) => {
    // an error occurred
});

player.getVideoWidth().then((width) => {
    // width = the width of the video that is currently playing
}).catch((error) => {
    // an error occurred
});

player.getVideoHeight().then((height) => {
    // height = the height of the video that is currently playing
}).catch((error) => {
    // an error occurred
});

Promise.all([player.getVideoWidth(), player.getVideoHeight()]).then((dimensions) => {
    const width = dimensions[0];
    const height = dimensions[1];
});

player.getVideoUrl().then((url) => {
    // url = the vimeo.com url for the video
}).catch((error) => {
    switch (error.name) {
        case 'PrivacyError':
            // the url isn’t available because of the video’s privacy setting
            break;

        default:
            // some other error occurred
            break;
    }
});

player.getVolume().then((volume) => {
    // volume = the volume level of the player
}).catch((error) => {
    // an error occurred
});

player.setVolume(0.5).then((volume) => {
    // volume was set
}).catch((error) => {
    switch (error.name) {
        case 'RangeError':
            // the volume was less than 0 or greater than 1
            break;

        default:
            // some other error occurred
            break;
    }
});

// EVENTS

player.on('play', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 0
    console.log(data.seconds);  // 0
});

player.on('pause', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 0
    console.log(data.seconds);  // 0
});

player.on('ended', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 1
    console.log(data.seconds);  // 61.857
});

player.on('timeupdate', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 0.049
    console.log(data.seconds);  // 3.034
});

player.on('progress', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 0.502
    console.log(data.seconds);  // 31.052
});

player.on('seeked', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.duration); // 61.857
    console.log(data.percent);  // 0.485
    console.log(data.seconds);  // 30
});

player.on('texttrackchange', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.kind);
    console.log(data.label);
    console.log(data.language);
});

player.on('cuechange', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.cues); // Array of Cues
    console.log(data.cues[0].html);
    console.log(data.cues[0].text);
    console.log(data.label);
    console.log(data.kind);
    console.log(data.language);
});

player.on('cuepoint', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.time);
    console.log(data.data);
    console.log(data.data.customKey);
    console.log(data.id);
});

player.on('volumechange', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.volume);
});

player.on('error', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.message);
    console.log(data.method);
    console.log(data.name);
});

player.on('loaded', (data) => {
    // data is an object containing properties specific to that event
    console.log(data.id);
});
