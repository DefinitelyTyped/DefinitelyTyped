const tracks: string[] = ['chapter1.mp3', 'chapter2.mp3', 'chapter3.mp3'];
let trackId = 0;

const audio: HTMLAudioElement = document.createElement('audio');
audio.src = tracks[trackId];

function updatePlayingMedia(): void {
    audio.src = tracks[trackId];
}

if ('mediaSession' in navigator && navigator.mediaSession) {
    function updatePositionState() {
        if (navigator.mediaSession && navigator.mediaSession.setPositionState) {
            navigator.mediaSession.setPositionState({
                duration: audio.duration,
                playbackRate: audio.playbackRate,
                position: audio.currentTime,
            });
        }
    }

    navigator.mediaSession.setActionHandler('previoustrack', (): void => {
        trackId = (trackId + tracks.length - 1) % tracks.length;
        updatePlayingMedia();
    });

    navigator.mediaSession.setActionHandler('nexttrack', (): void => {
        trackId = (trackId + 1) % tracks.length;
        updatePlayingMedia();
    });

    navigator.mediaSession.setActionHandler('play', (): void => {
        if (navigator.mediaSession) {
            navigator.mediaSession.playbackState = 'playing';
        }
    });

    navigator.mediaSession.setActionHandler('pause', (): void => {
        if (navigator.mediaSession) {
            navigator.mediaSession.playbackState = 'paused';
        }
    });

    navigator.mediaSession.setActionHandler('seekto', event => {
        if (event.fastSeek === false) {
            audio.currentTime = event.seekTime ?? 0;
        }
        updatePositionState();
    });

    navigator.mediaSession.setCameraActive(true);

    navigator.mediaSession.setMicrophoneActive(true);

    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Episode Title',
        artist: 'Podcast Host',
        album: 'Podcast Title',
        artwork: [
            { src: 'podcast.jpg', sizes: '128x128', type: 'image/jpeg' },
            { src: 'podcast_hd.jpg', sizes: '256x256' },
            { src: 'podcast_xhd.jpg', sizes: '1024x1024', type: 'image/jpeg' },
            { src: 'podcast.png', sizes: '128x128', type: 'image/png' },
            { src: 'podcast_hd.png', sizes: '256x256', type: 'image/png' },
            { src: 'podcast.ico', sizes: '128x128 256x256', type: 'image/x-icon' },
        ],
    });
}
