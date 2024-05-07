// WORK-IN-PROGRESS: Any contribution support welcomed.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/1827 for more information.

/// <reference path="./core/dom/dom.d.ts" />
/// <reference path="./core/ckeditor.d.ts" />
/// <reference path="./core/command.d.ts" />
/// <reference path="./core/config.d.ts" />
/// <reference path="./core/dataProcessor.d.ts" />

/// <reference path="./core/dtd.d.ts" />
/// <reference path="./core/editable.d.ts" />
/// <reference path="./core/editor.d.ts" />
/// <reference path="./core/env.d.ts" />
/// <reference path="./core/event.d.ts" />
/// <reference path="./core/feature.d.ts" />
/// <reference path="./core/fileTools.d.ts" />
/// <reference path="./core/filter.d.ts" />
/// <reference path="./core/focusManager.d.ts" />
/// <reference path="./core/htmlDataProcessor.d.ts" />
/// <reference path="./core/htmlParser.d.ts" />
/// <reference path="./core/htmlWriter.d.ts" />
/// <reference path="./core/keystrokeHandler.d.ts" />
/// <reference path="./core/lang.d.ts" />
/// <reference path="./core/loader.d.ts" />
/// <reference path="./core/menu.d.ts" />
/// <reference path="./core/resourceManager.d.ts" />
/// <reference path="./core/scriptLoader.d.ts" />
/// <reference path="./core/skin.d.ts" />
/// <reference path="./core/style.d.ts" />
/// <reference path="./core/styleCommand.d.ts" />
/// <reference path="./core/template.d.ts" />
/// <reference path="./core/tools.d.ts" />
/// <reference path="./core/ui.d.ts" />
/// <reference path="./core/xml.d.ts" />
/// <reference path="./plugins/plugins.d.ts" />
/// <reference path="./plugins/ajax.d.ts" />
/// <reference path="./plugins/balloontoolbar.d.ts" />
/// <reference path="./plugins/codesnippet.d.ts" />
/// <reference path="./plugins/cloudservices.d.ts" />
/// <reference path="./plugins/dialog.d.ts" />
/// <reference path="./plugins/elementspath.d.ts" />

export default CKEDITOR;

declare global {
    interface Window {
        CKEDITOR: CKEDITOR.CKEditorStatic;
        CKEDITOR_BASEPATH: string | undefined;
    }
}
