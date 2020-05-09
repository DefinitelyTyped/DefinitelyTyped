import { mockFirebase } = require('firestore-jest-mock');

// Create a fake firestore with a `users` and `posts` collection
mockFirebase({
    database: {
        users: [
            { id: 'abc123', name: 'Homer Simpson' },
            { id: 'abc456', name: 'Lisa Simpson' },
        ],
        posts: [{ id: '123abc', title: 'Really cool title' }],
    },
});
