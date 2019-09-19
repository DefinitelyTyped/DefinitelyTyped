import * as AudioManagement from 'clovelced-plugin-audiomanagement';

AudioManagement.setAudioMode(AudioManagement.AudioMode.NORMAL, () => {
}, (error: any) => {
});

AudioManagement.getAudioMode((results) => {
    results.audioMode;
    results.label;
}, (error: any) => {
});

AudioManagement.setVolume(AudioManagement.VolumeType.MUSIC, 5, () => {
}, (error: any) => {
});

AudioManagement.getVolume(AudioManagement.VolumeType.NOTIFICATION, (results) => {
    results.volume;
}, (error: any) => {
});

AudioManagement.getMaxVolume(AudioManagement.VolumeType.RING, (results) => {
    results.maxVolume;
}, (error: any) => {
});

AudioManagement.AudioMode.SILENT;
AudioManagement.AudioMode.VIBRATE;
AudioManagement.VolumeType.SYSTEM;
