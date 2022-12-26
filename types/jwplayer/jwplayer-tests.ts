// $ExpectType string
jwplayer.version;
// $ExpectType string
jwplayer.key;

const sliderCue: jwplayer.SliderCue = {
    begin: new Date().getTime(),
    cueType: 'type',
    text: 'Label',
};

// $ExpectType JWPlayer
const player = jwplayer('id');

// $ExpectType SliderCue[]
player.getCues();

// $ExpectType boolean
player.getFloating();

// $ExpectType void
player.setFloating(true);

// $ExpectType any
player.getPlugin('pluginName');

// $ExpectType void
player.addPlugin('pluginName', {});

// $ExpectType boolean
player.getAdBlock();

// $ExpectType void
player.pauseAd(true);

// $ExpectType JWPlayer
player.skipAd();

// $ExpectType JWPlayer
player
    .addCues([sliderCue])
    .on('userActive', () => {})
    .on('userInactive', () => {})
    .resize('50%', 100)
    .resize(40, 40)
    .setCues([sliderCue]);
