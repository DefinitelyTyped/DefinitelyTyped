import XMPlugin from 'wechat-miniprogram-xmly';

// plugin
const { player, xmly } = XMPlugin.init({
    appKey: 'your appKey',
    appSecret: 'your appSecret',
});
XMPlugin.init({
    appKey: 'your appKey',
    accessTokenUrl: 'your accessTokenUrl',
});
XMPlugin.init({
    appKey: 'your appKey',
    getAccessToken: () => 'your appSecret',
});
XMPlugin.getInstance();
XMPlugin.destory();
// $ExpectType string
XMPlugin.getDeviceId();
// $ExpectType string
XMPlugin.getVersion();

// player
async () => {
    await player.play();
    await player.play(1);
    await player.preloadSound(1);
    player.getSound();
    // $ExpectType boolean
    player.isAdvertising();
    player.recover();
    player.playByIndex(0);
    player.prev();
    player.next();
    player.pause();
    player.stop();
    // $ExpectType number
    player.getCurrentIndex();
    player.seek(1);
    player.seekForward();
    player.seekForward(1);
    player.seekBack();
    player.seekBack(1);
    player.setSounds({
        1: {
            id: 1,
            title: 'title',
            src: 'ximalaya',
        },
    });
    player.getSounds();
    // $ExpectType number
    player.getCurrentTime();
    // $ExpectType number
    player.getDuration();
    // $ExpectType number
    player.getBuffered();
    player.setPlaylist([1]);
    player.getPlaylist();
    player.getPlaylist(true);
    player.setPlayMode('order');
    //  $ExpectType string
    player.getPlayMode();
    player.setPlaybackRate(0.5);
    //  $ExpectType number
    player.getPlaybackRate();
    //  $ExpectType string
    player.getPlayState();
    player.setAutoskip(true);
    player.destory();
    player.on('play', () => {});
    player.once('play', () => {});
    player.emit('play', {});
    player.off('play');
    player.off('play', () => {});
};

// xmly
async () => {
    const url = 'https://open.ximalaya.com';
    let res: {
        code: number;
        message: string;
        data: any;
    };
    res = await xmly.request({
        url,
        type: 'GET',
        params: {},
    });
    res = await xmly.get(url);
    res = await xmly.post(url);
    res = await xmly.bindThirdUid('xx');
    res = await xmly.unbindThirdUid('xx');
};
