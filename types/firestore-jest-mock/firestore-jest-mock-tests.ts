import { mockFireBase } from 'firestore-jest-mock';

mockFireBase({
    database: {
        users: [
            { id: 'abc123', name: 'Homer Simpson' },
            { id: 'abc456', name: 'Lisa Simpson' },
        ],
        posts: [{ id: '123abc', title: 'Really cool title' }],
    },
});

// Import the mock versions of the functions you expect to be called
import { mockCollection, mockWhere } from 'firestore-jest-mock/mocks/firestore';
const maybeGetUsersInState = (_?: string) => {
    return Promise.resolve();
};

describe('we can query', () => {
    mockFireBase({
        database: {
            users: [
                { id: 'abc123', name: 'Homer Simpson' },
                { id: 'abc456', name: 'Lisa Simpson' },
            ],
        },
    });

    test('query with state', async () => {
        await maybeGetUsersInState('alabama');

        // Assert that we call the correct firestore methods
        expect(mockCollection).toHaveBeenCalledWith('users');
        expect(mockWhere).toHaveBeenCalledWith('state', '==', 'alabama');
    });

    test('no state', async () => {
        await maybeGetUsersInState();

        // Assert that we call the correct firestore methods
        expect(mockCollection).toHaveBeenCalledWith('users');
        expect(mockWhere).not.toHaveBeenCalled();
    });
});
