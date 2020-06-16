async function test(): Promise<void> {
    const contextListener: fdc3.ContextListener = fdc3.addContextListener((context: fdc3.Context) => {});
    contextListener.unsubscribe();

    fdc3.addEventListener('channel-changed', (event: fdc3.ChannelChangedEvent) => {});

    const intentListener: fdc3.IntentListener = fdc3.addIntentListener('test-intent', (context: fdc3.Context) => {});
    intentListener.unsubscribe();

    await fdc3.broadcast({type: 'test-context'});

    const appIntent: fdc3.AppIntent = await fdc3.findIntent('test-intent');

    const appIntents: fdc3.AppIntent[] = await fdc3.findIntentsByContext({type: 'test-context'});

    const channelById: fdc3.Channel = await fdc3.getChannelById('test-channel-id');
    await channelById.join();

    const currentChannel: fdc3.Channel = await fdc3.getCurrentChannel();
    await currentChannel.join();

    const appChannel: fdc3.Channel = await fdc3.getOrCreateAppChannel('test-app-channel-name');
    await appChannel.join();

    const systemChannels: fdc3.Channel[] = await fdc3.getSystemChannels();

    await fdc3.open('test-app');
    await fdc3.open('test-app', {type: 'test-context'});

    await fdc3.raiseIntent('test-intent', {type: 'test-context'});
    await fdc3.raiseIntent('test-intent', {type: 'test-context'}, 'test-target');

    fdc3.removeEventListener('channel-changed', (event: fdc3.ChannelChangedEvent) => {});

    await fdc3.defaultChannel.join();
    await fdc3.defaultChannel.broadcast({type: 'test-context'});
}
