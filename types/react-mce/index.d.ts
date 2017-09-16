// Type definitions for react-mce 0.6
// Project: https://github.com/janstuemmel/react-mce
// Definitions by: Gavin Heise <https://github.com/morphologue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as ActualTinyMCE from 'tinymce';

type EventHandler = (event: any, editor: ActualTinyMCE.Editor) => void;

interface ReactMCEProps {
    // Non-events
    config: ActualTinyMCE.Settings;
    content?: string;

    // Events
    onFocusin?: EventHandler;
    onFocusout?: EventHandler;
    onClick?: EventHandler;
    onDblclick?: EventHandler;
    onMousedown?: EventHandler;
    onMouseup?: EventHandler;
    onMousemove?: EventHandler;
    onMouseover?: EventHandler;
    onBeforepaste?: EventHandler;
    onPaste?: EventHandler;
    onCut?: EventHandler;
    onCopy?: EventHandler;
    onSelectionchange?: EventHandler;
    onMouseout?: EventHandler;
    onMouseenter?: EventHandler;
    onMouseleave?: EventHandler;
    onKeydown?: EventHandler;
    onKeypress?: EventHandler;
    onKeyup?: EventHandler;
    onContextmenu?: EventHandler;
    onDragend?: EventHandler;
    onDragover?: EventHandler;
    onDraggesture?: EventHandler;
    onDragdrop?: EventHandler;
    onDrop?: EventHandler;
    onDrag?: EventHandler;
    onBeforeRenderUI?: EventHandler;
    onSetAttrib?: EventHandler;
    onPreInit?: EventHandler;
    onPostRender?: EventHandler;
    onInit?: EventHandler;
    onDeactivate?: EventHandler;
    onActivate?: EventHandler;
    onNodeChange?: EventHandler;
    onBeforeExecCommand?: EventHandler;
    onExecCommand?: EventHandler;
    onShow?: EventHandler;
    onHide?: EventHandler;
    onProgressState?: EventHandler;
    onLoadContent?: EventHandler;
    onSaveContent?: EventHandler;
    onBeforeSetContent?: EventHandler;
    onSetContent?: EventHandler;
    onBeforeGetContent?: EventHandler;
    onGetContent?: EventHandler;
    onVisualAid?: EventHandler;
    onRemove?: EventHandler;
    onSubmit?: EventHandler;
    onReset?: EventHandler;
    onBeforeAddUndo?: EventHandler;
    onAddUndo?: EventHandler;
    onChange?: EventHandler;
    onUndo?: EventHandler;
    onRedo?: EventHandler;
    onClearUndos?: EventHandler;
    onObjectSelected?: EventHandler;
    onObjectResizeStart?: EventHandler;
    onObjectResized?: EventHandler;
    onPreProcess?: EventHandler;
    onPostProcess?: EventHandler;
    onFocus?: EventHandler;
    onBlur?: EventHandler;
    onDirty?: EventHandler;
}

declare class TinyMCE extends React.Component<ReactMCEProps> { }
export = TinyMCE;
