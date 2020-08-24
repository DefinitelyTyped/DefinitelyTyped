// Example extracted in http://www.schillmania.com/projects/soundmanager2/doc/getstarted/
const mySoundObject = soundManager.createSound  ({
    // optional id, for getSoundById() look-ups etc. If omitted, an id will be generated.
    id: 'mySound',
    url: '/audio/mysoundfile.mp3',
    // optional sound parameters here, see Sound Properties for full list
    volume: 50,
    autoPlay: true,
    whileloading() { console.log(<string> this.id + ' is loading'); }
});

soundManager.setup({
    url: '/path/to/swfs/',
    flashVersion: 9,
    preferFlash: false, // prefer 100% HTML5 mode, where both supported
    onready: () => {
        // console.log('SM2 ready!');
    },
    ontimeout: () => {
        // console.log('SM2 init failed!');
    },
    defaultOptions: {
        // set global default volume for all sound objects
        volume: 33
    }
});

// set mp3 format not required
if (soundManager.audioFormats) {
    soundManager.audioFormats.mp3.required = false;
}
