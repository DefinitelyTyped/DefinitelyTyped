import * as React from 'react';

import EditableLabel from 'react-editable-label';

function checkCreateEditableLabel() {
    const container = document.createElement('div');
    container.id = 'react-editable-label-container';

    document.body.appendChild(container);

    const editableLabel = new EditableLabel(container, {});
}
