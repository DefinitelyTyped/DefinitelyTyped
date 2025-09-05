import * as Nano from 'nanoplayer';

const player = new Nano.NanoPlayer('div-id');
const config: Nano.NanoPlayerConfig = {
    source: {
        group: {
            id: 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd',
            security: {
                jwtoken: 'xxx'
            },
            apiurl: 'https://bintu.nanocosmos.de',
            startQuality: 'medium'
        },
        options: {
            adaption: {
                rule: 'deviationOfMean'
            },
            switch: {
                method: 'server',
                pauseOnError: false,
                forcePlay: true,
                fastStart: false,
                timeout: 10,
            }
        },
    },
    playback: {
        autoplay: true,
        automute: true,
        muted: false
    }
};

player.setup(config);
player.play();
