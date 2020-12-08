import FeedSub from 'feedsub';

const feed = 'http://example.example/rss';

const options = {
    maxHistory: 100,
    interval: 15,
    requestOpts: {
        headers: {
            Authorization: 'Test',
        },
    },
    autoStart: true,
    emitOnStart: true,
    forceInterval: true,
};

const reader = new FeedSub(feed, options);

const handleFeedItems = (items: Array<Record<string, unknown>>) => {
    items.forEach(item => {
        console.log(item);
    });
};

reader.on('item', item => {
    console.log(item);
});
reader.on('items', handleFeedItems);
reader.on('error', error => {
    console.log('Feed reader error:', error);
});

reader.start();

reader.read((err, items) => {
    if (err) {
        console.error(err);
        return;
    }

    if (items != null) {
        handleFeedItems(items);
    }
});

reader.stop();
