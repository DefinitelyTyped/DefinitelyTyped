import { Users } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Editor } from '@ckeditor/ckeditor5-core';
import RTC from '@ckeditor/ckeditor5-real-time-collaboration';
import { Collection } from '@ckeditor/ckeditor5-utils';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

class MyEditor extends Editor {}
const editor = new MyEditor();

new RTC.Sessions().register('', new Collection());
new RTC.Sessions().unregister('');
new RTC.Sessions().getUserRole(new Users()).startsWith('');
new RTC.Sessions().mySessionId.startsWith('');
new RTC.Sessions().getUserSessions(new RTC.Sessions().getUserBySessionId(''), '').has('');

new RTC.PresenceList(editor);

new RTC.RealTimeCollaborationClient(editor);

new RTC.RealTimeCollaborativeEditing(editor);

new RTC.RealTimeCollaborativeComments(editor);

new RTC.RealTimeCollaborativeTrackChanges(editor);

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
