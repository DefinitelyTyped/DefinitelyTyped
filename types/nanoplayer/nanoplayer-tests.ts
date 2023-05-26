import { NanoStream } from 'nanoplayer';

const player = new NanoStream.NanoPlayer('div-id');
const config: NanoStream.NanoPlayerConfig = {
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
