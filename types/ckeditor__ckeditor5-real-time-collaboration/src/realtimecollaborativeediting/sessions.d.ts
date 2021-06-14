import { Users } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Collection } from '@ckeditor/ckeditor5-utils';

export default class Sessions {
    readonly allConnectedUsers: Collection<Users>;
    readonly channelConnectedUsers: Map<string, Collection<Users>>;
    readonly channelSessions: Map<string, Sessions>;
    mySessionId: string;
    getUserBySessionId(sessionId: string): Users;
    getUserRole(user: Users): string;
    getUserSessions(user: Users, channelId?: string): Set<string>;
    register(channelId: string, serviceSessions: Collection<Sessions>): void;
    unregister(channelId: string): void;
}
