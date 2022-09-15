import Client = require('chromecast-api');
import { MediaResource } from 'chromecast-api/lib/device';

const client = new Client();

client.queryMDNS();
client.querySSDP();
client.update();

client.devices;

client.destroy();

client.on('device', (device) => {
    const testMedia: MediaResource = {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4',
        subtitles: [
            {
                language: 'en-US',
                url: 'https://raw.githubusercontent.com/alxhotel/chromecast-api/master/test/captions_styled.vtt',
                name: 'English',
            },
            {
                language: 'es-ES',
                url: 'https://raw.githubusercontent.com/alxhotel/chromecast-api/master/test/captions_styled_es.vtt',
                name: 'Spanish',
            }
        ],
        cover: {
            title: 'Big Bug Bunny',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        },
        subtitles_style: {
            backgroundColor: '#FFFFFF00',
            foregroundColor: '#FFFFFFFF',
            edgeType: 'OUTLINE',
            edgeColor: '#000000FF',
            fontScale: 1.2,
            fontStyle: 'BOLD',
            fontFamily: 'Droid Sans',
            fontGenericFamily: 'SANS_SERIF',
        }
    };

    device.name;
    device.friendlyName;
    device.host;

    device.play(testMedia, {startTime: 20}, (err) => {
    });
    device.play(testMedia, {startTime: 20});
    device.play(testMedia, (err) => {
    });
    device.play(testMedia);

    device.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4', {startTime: 20}, (err) => {
    });
    device.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4', {startTime: 20});
    device.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4', (err) => {
    });
    device.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4');

    device.getStatus((err, status) => {
    });

    device.getReceiverStatus((err, status) => {
    });

    device.seekTo(50);
    device.seekTo(50, (err) => {
    });

    device.seek(10, (err) => {
    });
    device.seek(10);

    device.pause();
    device.pause((err) => {
    });

    device.unpause();
    device.unpause((err) => {
    });

    device.resume();
    device.resume((err) => {
    });

    device.getVolume((err, volume) => {
    });

    device.setVolume(0.5);
    device.setVolume(0.5, (err) => {
    });

    device.stop();
    device.stop((err) => {
    });

    device.setVolumeMuted(false);
    device.setVolumeMuted(false, (err) => {
    });

    device.subtitlesOff();
    device.subtitlesOff((err) => {
    });

    device.changeSubtitles(2);
    device.changeSubtitles(2, (err) => {
    });

    device.changeSubtitleSize(0.5);
    device.changeSubtitleSize(0.5, (err) => {
    });

    device.getCurrentTime((err, time) => {
    });

    device.close();
    device.close(() => {
    });

    device.on('connected', () => {});
    device.on('finished', () => {});
    device.on('status', (status) => {});

    device._connect(() => {});
    device._tryConnect(() => {});
});
