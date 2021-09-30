// Type definitions for @ckeditor/ckeditor5-real-time-collaboration 27.1
// Project: https://ckeditor.com/docs/ckeditor5/latest/api/module_real-time-collaboration_realtimecollaborationclient.html
// Definitions by: Federico Panico <https://github.com/fedemp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3
import PresenceList from './src/presencelist';
import RealTimeCollaborationClient from './src/realtimecollaborationclient';
import RealTimeCollaborativeComments from './src/realtimecollaborativecomments';
import RealTimeCollaborativeEditing from './src/realtimecollaborativeediting';
import Sessions from './src/realtimecollaborativeediting/sessions';
import RealTimeCollaborativeTrackChanges from './src/realtimecollaborativetrackchanges';

declare const _default: {
    PresenceList: typeof PresenceList;
    RealTimeCollaborationClient: typeof RealTimeCollaborationClient;
    RealTimeCollaborativeComments: typeof RealTimeCollaborativeComments;
    RealTimeCollaborativeEditing: typeof RealTimeCollaborativeEditing;
    Sessions: typeof Sessions;
    RealTimeCollaborativeTrackChanges: typeof RealTimeCollaborativeTrackChanges;
};

export default _default;
