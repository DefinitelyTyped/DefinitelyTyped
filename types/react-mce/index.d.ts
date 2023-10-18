import * as React from "react";
import * as ActualTinyMCE from "tinymce";

type EventHandler = (event: any, editor: ActualTinyMCE.Editor) => void;

interface ReactMCEProps {
    // Non-events
    config: ActualTinyMCE.Settings;
    content?: string | undefined;

    // Events
    onFocusin?: EventHandler | undefined;
    onFocusout?: EventHandler | undefined;
    onClick?: EventHandler | undefined;
    onDblclick?: EventHandler | undefined;
    onMousedown?: EventHandler | undefined;
    onMouseup?: EventHandler | undefined;
    onMousemove?: EventHandler | undefined;
    onMouseover?: EventHandler | undefined;
    onBeforepaste?: EventHandler | undefined;
    onPaste?: EventHandler | undefined;
    onCut?: EventHandler | undefined;
    onCopy?: EventHandler | undefined;
    onSelectionchange?: EventHandler | undefined;
    onMouseout?: EventHandler | undefined;
    onMouseenter?: EventHandler | undefined;
    onMouseleave?: EventHandler | undefined;
    onKeydown?: EventHandler | undefined;
    onKeypress?: EventHandler | undefined;
    onKeyup?: EventHandler | undefined;
    onContextmenu?: EventHandler | undefined;
    onDragend?: EventHandler | undefined;
    onDragover?: EventHandler | undefined;
    onDraggesture?: EventHandler | undefined;
    onDragdrop?: EventHandler | undefined;
    onDrop?: EventHandler | undefined;
    onDrag?: EventHandler | undefined;
    onBeforeRenderUI?: EventHandler | undefined;
    onSetAttrib?: EventHandler | undefined;
    onPreInit?: EventHandler | undefined;
    onPostRender?: EventHandler | undefined;
    onInit?: EventHandler | undefined;
    onDeactivate?: EventHandler | undefined;
    onActivate?: EventHandler | undefined;
    onNodeChange?: EventHandler | undefined;
    onBeforeExecCommand?: EventHandler | undefined;
    onExecCommand?: EventHandler | undefined;
    onShow?: EventHandler | undefined;
    onHide?: EventHandler | undefined;
    onProgressState?: EventHandler | undefined;
    onLoadContent?: EventHandler | undefined;
    onSaveContent?: EventHandler | undefined;
    onBeforeSetContent?: EventHandler | undefined;
    onSetContent?: EventHandler | undefined;
    onBeforeGetContent?: EventHandler | undefined;
    onGetContent?: EventHandler | undefined;
    onVisualAid?: EventHandler | undefined;
    onRemove?: EventHandler | undefined;
    onSubmit?: EventHandler | undefined;
    onReset?: EventHandler | undefined;
    onBeforeAddUndo?: EventHandler | undefined;
    onAddUndo?: EventHandler | undefined;
    onChange?: EventHandler | undefined;
    onUndo?: EventHandler | undefined;
    onRedo?: EventHandler | undefined;
    onClearUndos?: EventHandler | undefined;
    onObjectSelected?: EventHandler | undefined;
    onObjectResizeStart?: EventHandler | undefined;
    onObjectResized?: EventHandler | undefined;
    onPreProcess?: EventHandler | undefined;
    onPostProcess?: EventHandler | undefined;
    onFocus?: EventHandler | undefined;
    onBlur?: EventHandler | undefined;
    onDirty?: EventHandler | undefined;
}

declare class TinyMCE extends React.Component<ReactMCEProps> {}
export = TinyMCE;
