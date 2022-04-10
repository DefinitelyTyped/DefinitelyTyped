import { Users } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Collection } from '@ckeditor/ckeditor5-utils';
import {
    PresenceList,
    RealTimeCollaborationClient,
    RealTimeCollaborativeComments,
    RealTimeCollaborativeEditing,
    RealTimeCollaborativeTrackChanges,
    Sessions,
} from '@ckeditor/ckeditor5-real-time-collaboration';
import CloudServicesCommentsAdapter from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments/cloudservicescommentsadapter';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Sessions().register('', new Collection());
new Sessions().unregister('');
new Sessions().getUserRole(new Users()).startsWith('');
new Sessions().mySessionId.startsWith('');
new Sessions().getUserSessions(new Sessions().getUserBySessionId(''), '').has('');

new PresenceList(editor);

new RealTimeCollaborationClient(editor);

new RealTimeCollaborativeEditing(editor);

new RealTimeCollaborativeComments(editor);

new RealTimeCollaborativeTrackChanges(editor);

new CloudServicesCommentsAdapter(editor);

// $ExpectType PresenceList
editor.plugins.get('PresenceList');

// $ExpectType RealTimeCollaborationClient
editor.plugins.get('RealTimeCollaborationClient');

// $ExpectType RealTimeCollaborativeComments
editor.plugins.get('RealTimeCollaborativeComments');

// $ExpectType RealTimeCollaborativeEditing
editor.plugins.get('RealTimeCollaborativeEditing');

// $ExpectType RealTimeCollaborativeTrackChanges
editor.plugins.get('RealTimeCollaborativeTrackChanges');

// $ExpectType CloudServicesCommentsAdapter
editor.plugins.get('CloudServicesCommentsAdapter');
