import pubsub = require('sweet-pubsub');

pubsub.on('userCreated', (age, email) => {
    return { age, email };
});
pubsub.emit('userCreated', 30, 'dankmemer@420.com');
// 30, 'dankmemer@420.com'

pubsub.once('boom', () => {
    return 'BANG';
});
pubsub.emit('boom');
// 'BANG!'
pubsub.emit('boom');
//

const callback = pubsub.on('boom', () => {
    return 'BANG';
});
pubsub.emit('boom');
// 'BANG!'
pubsub.emit('boom');
// 'BANG!'
pubsub.off('boom', callback);
pubsub.emit('boom');
//

pubsub.on(
    'boom',
    () => {
        return 'FIVE';
    },
    5,
);
pubsub.on(
    'boom',
    () => {
        return 'ONE';
    },
    1,
);
pubsub.on(
    'boom',
    () => {
        return 'TEN';
    },
    10,
);
pubsub.emit('boom');
// 'TEN'
// 'FIVE'
// 'ONE'

pubsub.on('userCreated', 'userActions', () => {
    return 'diff1';
});
pubsub.on('userUpdated', 'userActions', () => {
    return 'diff2';
});
pubsub.on('userDeleted', 'userActions', () => {
    return 'diff3';
});
pubsub.off('userActions');
// this will remove all three subscriptions

pubsub.on('userCreated', 'userActions', () => {
    return 'diff1';
});
pubsub.on('userUpdated', 'userActions', () => {
    return 'diff2';
});
pubsub.on('userDeleted', 'userActions', () => {
    return 'diff3';
});
pubsub.off('userCreated', 'userActions');
// this will remove only the first subscription

pubsub.on('userCreated', () => {
    return 'user created';
});
pubsub.on('userUpdated', () => {
    return 'user updated';
});
pubsub.emit('userCreated userUpdated');
// 'user created'
// 'user updated'

pubsub.on('userCreated userUpdated', 'label', (data: { a: string }) => {
    return { 'user created or updated': data.a };
});
pubsub.on('userDeleted', 'label', (data: { a: string }) => {
    return { 'user deleted': data.a };
});
pubsub.emit('userCreated userUpdated userDeleted', { a: 'yay!' });
// 'user created or updated', 'yay!'
// 'user created or updated', 'yay!'
// 'user deleted!', 'yay!'
pubsub.off('userCreated userUpdated userDeleted', 'label');
// remove all subscriptions

pubsub.on('pageMounted', name => {
    return name;
});
pubsub.on('pageMounted:users', () => {
    return 'users';
});
pubsub.emits('pageMounted:users');
// this is the same as writing:
pubsub.emit('pageMounted:users');
// if you want to change the order of topics add '-' to the beginning of topic name like this:
pubsub.emits('-pageMounted:users');
// this is the same as writing:
pubsub.emit('pageMounted:users');
pubsub.emit('pageMounted', 'users');
