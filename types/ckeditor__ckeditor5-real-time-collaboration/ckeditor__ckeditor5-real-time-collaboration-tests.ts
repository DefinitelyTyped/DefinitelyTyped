import { Users } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Editor } from '@ckeditor/ckeditor5-core';
import RTC from '@ckeditor/ckeditor5-real-time-collaboration';
import { Collection } from '@ckeditor/ckeditor5-utils';

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
