import { DomEventData, EditingController } from '@ckeditor/ckeditor5-engine';
import BubblingEventInfo from '@ckeditor/ckeditor5-engine/src/view/observer/bubblingeventinfo';

export default function verticalNavigationHandler(
    editing: EditingController,
): (ev: BubblingEventInfo, data: DomEventData) => void;
