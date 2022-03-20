{
    const chapter: WistiaPlayer.Chapter = {
        title: 'test',
        time: 0,
    };
}

{
    const options: WistiaPlayer.TurnStyleOptions = { allowSkip: true };
}

{
    const options: WistiaPlayer.PostRollOptions = { autoSize: true };
}

{
    const annotation: WistiaPlayer.Annotation = { time: 0, duration: 0, text: 'test' };
    const options: WistiaPlayer.AnnotationOptions = { links: [annotation] };
}

{
    const options: WistiaPlayer.ShareOptions = { channels: 'test' };
}

{
    const options: WistiaPlayer.CaptionOptions = { onByDefault: true };
}

{
    const options: WistiaPlayer.PluginOptions = { videoThumbnail: { clickToPlayButton: true } };
}

{
    const options: WistiaPlayer.PlayerOptions = { autoPlay: 'muted' };
}

declare var mockPlayer: WistiaPlayer.Player;

{
    mockPlayer.addToPlaylist('test');
    mockPlayer.bind('beforeremove', () => undefined);
}
