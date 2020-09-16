import {
    ChatManager,
    TokenProvider,
    PusherRoom,
    PusherUser,
    PusherMessage,
    PusherReadCursor,
    UserPresenceState,
} from '@pusher/chatkit-client';

const chatManager = new ChatManager({
    instanceLocator: 'abc123',
    userId: 'abc123',
    tokenProvider: new TokenProvider({
        url: 'https://myurl'
    }),
});

async function test_connecting() {
    // Connect with all hooks defined
    await chatManager.connect({
        onAddedToRoom: (room: PusherRoom) => { },
        onRemovedFromRoom: (room: PusherRoom) => { },
        onRoomUpdated: (room: PusherRoom) => { },
        onRoomDeleted: (room: PusherRoom) => { },
        onUserStartedTyping: (room: PusherRoom, user: PusherUser) => { },
        onUserStoppedTyping: (room: PusherRoom, user: PusherUser) => { },
        onUserJoinedRoom: (room: PusherRoom, user: PusherUser) => { },
        onUserLeftRoom: (room: PusherRoom, user: PusherUser) => { },
        onPresenceChanged: (state: UserPresenceState, user: PusherUser) => { },
        onNewReadCursor: (room: PusherRoom, user: PusherUser) => { },
    });

    const currentUser = await chatManager.connect();

    const joinableRooms = await currentUser.getJoinableRooms();
    const joinedRoom = await currentUser.joinRoom({ roomId: joinableRooms[0].id });
    await currentUser.updateRoom({
        roomId: joinedRoom.id,
        name: 'Some updated name',
        private: false,
        customData: { bar: 'baz' },
    });
    await currentUser.deleteRoom({ roomId: joinedRoom.id });

    const room = await currentUser.createRoom({
        name: 'test 123',
    });

    // Subscribe to room with no params
    const subscribedRoom = await currentUser.subscribeToRoomMultipart({
        roomId: room.id,
    });

    // Subscribe to room with one hook defined
    await currentUser.subscribeToRoomMultipart({
        disableCursors: true,
        roomId: room.id,
        hooks: {
            onMessage: (message: PusherMessage) => { },
        },
    });

    // Subscribe to room with all hooks defined
    await currentUser.subscribeToRoomMultipart({
        roomId: room.id,
        hooks: {
            onMessage: (message: PusherMessage) => { },
            onMessageDeleted: (messageId: number) => { },
            onUserStartedTyping: (user: PusherUser) => { },
            onUserStoppedTyping: (user: PusherUser) => { },
            onUserJoined: (user: PusherUser) => { },
            onUserLeft: (user: PusherUser) => { },
            onPresenceChanged: (state: UserPresenceState, user: PusherUser) => { },
            onNewReadCursor: (cursor: PusherReadCursor) => { },
        },
        messageLimit: 10,
    });

    await currentUser.sendSimpleMessage({
        roomId: room.id,
        text: 'Hello world!',
    });

    await currentUser.sendMultipartMessage({
        roomId: room.id,
        parts: [
            { type: "text/plain", content: "🐷😍" },
            {
              type: "image/gif",
              url: "https://gfycat.com/failingforkedheterodontosaurus",
            },
            {
              file: new Blob(),
              customData: { metadata: 42 },
            }
          ],
    });

    currentUser.roomSubscriptions[room.id].disableCursors = false;
    currentUser.roomSubscriptions[room.id].cancel();

    await currentUser.leaveRoom({ roomId: room.id });
    await currentUser.updateRoom({ roomId: room.id, name: 'new name' });
    await currentUser.addUserToRoom({ userId: 'keith', roomId: room.id });
    await currentUser.removeUserFromRoom({ userId: 'keith', roomId: room.id });
    await currentUser.isTypingIn({ roomId: room.id });
    await currentUser.deleteRoom({ roomId: room.id });

    subscribedRoom.users.forEach(user => user.name);
}
