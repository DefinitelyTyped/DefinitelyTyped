import { WebTwainAcquire } from "./WebTwain.Acquire";
import { Resolution } from "./Addon.Camera";

export interface WebTwainViewer extends WebTwainAcquire {
    /**
     * Create a Dynamsoft Viewer instance and bind it to the WebTwain instance.
     * @param elementId Specify an HTML element to create the viewer.
     */
    BindViewer(
        elementId: string
    ): boolean;
    /**
     * Unbind and destroy the viewer.
     */
    UnbindViewer(): boolean;
    /**
     * Return or set the background colour of the viewer.
     */
    BackgroundColor: number;
    /**
     * Return or set the border colour for selected image(s).
     */
    SelectionImageBorderColor: number;
    /**
     * Return or set how the image is fit in the viewer.
     */
    FitWindowType: number;
    /**
     * Return or set the border colour for selected image(s).
     */
    IfFitWindow: boolean;
    /**
     * Return or set the height of the viewer.
     */
    Height: number | string;
    /**
     * Return or set the width of the viewer.
     */
    Width: number | string;
    /**
     * Return the horizontal coordinate of the mouse.
     */
    readonly MouseX: number;
    /**
     * Return the vertical coordinate of the mouse.
     */
    readonly MouseY: number;
    /**
     * Return or set the shape of the cursor.
     */
    MouseShape: boolean;
    /**
     * Return or set whether the thumbnails view scrolls when new images come in.
     */
    IfAutoScroll: boolean;
    /**
     * Return or set whether to show the page numbers.
     */
    ShowPageNumber: boolean;
    /**
     * Return or set the margin between images (in pixels).
     */
    ImageMargin: number;
    /**
     * Return or set the zoom factor.
     */
    Zoom: number;
    Viewer: DynamsoftViewer;
}
export interface DynamsoftViewer {
    /**
     * Return or set the width of the viewer.
     */
    width: number | string;
    /**
     * Return or set the height of the viewer.
     */
    height: number | string;
    /**
     * Return the postfix of the main viewer.
     */
    readonly idPostfix: string;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the background colour/image of the viewer.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Replace the previous `BackgroundColor` method.
     * Allow any CSS rules
     */
    background: string;
    /**
     * [Scope] Global
     * [Description] Return or set the border of the viewer.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    border: string;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the border of the main viewer. Priority is higher than border.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    innerBorder: string;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the shape of the cursor.
     * [Usage Notes] The default value is crosshair, which supports drag to select an area on the image. When set to pointer, the shape is “hand”.
     * Only works if the view mode of the viewer is set to -1 * -1, and the displayed image does not fit the Window (when there is a scroll bar), then the image can be moved.
     * 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Replace the previous `MouseShape` property.
     * Allow any CSS rules
     */
    cursor: string;
    /**
     * [Scope] Main viewer
     * [Description] Returns or sets whether to display the newly added image or keep the current one after an image(s) is imported into the Dynamic Web TWAIN viewer.
     * The default value of the IfAutoScroll property is true. If set to true, it will display the newly added image. If set to false, it will display the current one.
     * [Usage Notes] 'Invalid property type' is reported when the set value is not string or number.
     */
    ifAutoScroll: boolean;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the margin between images in the main viewer.
     * [Usage Notes] The pageMargin is only effective when the view mode is not -1 * -1.
     * number in pixels, string in percentage.
     */
    pageMargin: number | string;
    /**
     * [Scope] Main viewer
     * [Description] Set the border color of the selected area.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    selectedAreaBorderColor: string;
    /**
     * [Scope] Main viewer
     * [Description] Specify a aspect ratio to be used when selecting a rectangle on an image. The default value is 0.
     */
    selectionRectAspectRatio: number;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the zoom factor.
     * [Usage Notes] Allow value [0.02 ~ 65].
     */
    zoom: number;
    /**
     * [Scope] Main viewer
     * [Description] Set whether to use single page mode.
     * [Usage Notes] The default value is false, that is, the view mode is 1 * 1. True means the view mode is -1 * -1.
     */
	singlePageMode: boolean;
    /**
     * [Scope] Main viewer, Thumbnail viewer
     * [Description] Set whether to disable the ability to drag and drop image to the viewer. The default value is true.
     * [Usage Notes] 'Unsupported file type' will be reported if the file is in an unsupported type.
     */
    acceptDrop: boolean;
    /**
     * [Scope] Main viewer
     * [Description] Whether to allow sliding. The default value is true which supports swiping left and right to switch images.
     * [Usage Notes] Only works if the view mode of the viewer is set to -1 * -1.
     */
    allowSlide: boolean;
    /**
     * [Scope] Main viewer
     * [Description] Return or set the border style for selected image(s).
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedPageBorder: string;
    /**
     * [Scope] Main viewer
     * [Description] Set the selected page background color of the viewer.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedPageBackground: string;
    /**
     * [Scope] Main viewer
     * [Description] Whether to show the page number. The default value is false.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    showPageNumber: boolean;
    /**
     * [Scope] Main viewer
     * [Description] Return the index of the next image of the currently selected image.
     */
    next(): number;
    /**
     * [Scope] Main viewer
     * [Description] Return the index of the previous image of the currently selected image.
     */
    previous(): number;
    /**
     * [Scope] Main viewer
     * [Description] Return the index of the fist image.
     */
    first(): number;
    /**
     * [Scope] Main viewer
     * [Description] Return the index of the last image.
     */
    last(): number;
    /**
     * [Scope] Main viewer
     * [Description] Go to the specified image.
     */
    gotoPage(index: number): number;
    /**
     * [Scope] Main viewer
     * [Description] Refresh the viewer, the effect is shown in "onPageRender" event
     */
    render(): void;
    /**
     * [Scope] Global
     * [Description] Create an image editor with specified settings.
     * [Usage Notes] Replace the previous `ShowImageEditor` method. Only one ImageEditor object can be created.
     * If you create it multiple times, you'll receive 'An ImageEditor already exists' error, and an existing ImageEditor object will be returned.
     * @param editorSettings The ImageEditor settings. If not set, the default setting is used.
     */
    createImageEditor(editorSettings?: EditorSettings): ImageEditor;
    /**
     * [Scope] Global
     * [Description] Create a thumbnail viewer with specified settings.
     * @param editorSettings The thumbnailViewerSettings settings. If not set, the default setting is used.
     */
    createThumbnailViewer(thumbnailViewerSettings: ThumbnailViewerSettings): ThumbnailViewer;
    /**
     * [Scope] Main viewer
     * [Description] Create a custom element and append it to the main viewer.
     * @param element Specify an element (not ID).
     * @param location Whether to put the element in the main viewer. Allowed values are left, top, right, bottom.
     * @param ifFull Whether to display the element in full screen.
     */
    createCustomElement(element: HTMLDivElement, location?: string, ifFull?: boolean): CustomElement;
    /**
     * [Scope] Global
     * [Description] Return the current UI settings (from DVS itself)
     */
    getUISettings(): any;
    /**
     * [Scope] Global
     * [Description] Reset UI settings to initial settings (JSON).
     */
    resetUISetting(): any;
    /**
     * [Scope] Global
     * [Description] Update UI settings and take effect immediately.
     * @param uISettings Specify the updated settings.
     */
    updateUISettings(uISettings: any): any;
    /**
     * [Scope] Main viewer
     * [Description] Clear the selected area(s) on the current image.
     */
    clearSelectedAreas(): void;
    /**
     * [Scope] Main viewer
     * [Description] Set one or more rectangular area(s) on the specified image.
     * @param areas Specify the areas.
     */
    setSelectedAreas(areas: Area[]): void;
    /**
     * [Scope] Main viewer
     * [Description] Fit the image to the window
     * @param type Specify a type to fit. (width, height, both)
     */
    fitWindow(type: string): void;
    /**
     * [Description] Set the CSS class name of the specified button defined in updateUISetting.
     * @param name Specify the button.
     * @param className Specify the CSS class name.
     */
    setButtonClass(
        name: string,
        className: string
    ): boolean;
    /**
     * Set the view mode of the viewer.
     * @param columns Specify the number of images per row.
     * @param rows Specify the number of images per column.
     */
    setViewMode(
        columns: number,
        rows: number
    ): boolean;
    /**
     * [Scope] Global
     * [Description] Create a Dynamsoft Viewer instance and bind it to the WebTwain instance.
     * @param element Specify an HTML element to create the viewer.
     */
    bind(element: HTMLDivElement): boolean;
    /**
     * [Scope] Main viewer
     * [Description] Show the viewer (Main viewer, ImageEditor, ThumbnailViewer, CustomElement).
     */
    show(): void;
    /**
     * [Scope] Main viewer
     * [Description] Hide the viewer(Main viewer, ImageEditor, ThumbnailViewer, CustomElement).
     */
    hide(): void;
    /**
     * [Scope] Main viewer
     * [Description] Unbind the viewer.
     */
    unbind(): boolean;
    /**
     * [Scope] Main viewer
     * [Description] Specify an event listener for the viewer event.
     * @param name Specify the event name.
     * @param callback The event listener
     */
    on(name: string, callback: (event: ViewerEvent) => void): void;
    /**
     * [Scope] Main viewer
     * [Description] Remove the event handler.
     * @param eventName Specify the event name.
     * @param callback The event listener.
     */
    off(eventName: string, callback?: () => void): void;
}
export interface EditorSettings {
    /**
     * [Scope] ImageEditor viewer
     * [Scope] ImageEditor viewer
     * [Description] Specify an HTML Element.
     */
    element: HTMLDivElement;
    /**
     * [Scope] ImageEditor viewer
     * [Description] The width of the image editor viewer. The default value is "100%".
     * [Usage Notes] 'Invalid property value' will be reported when the set value is not string or number.
     */
    width: number | string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] The height of the image editor viewer. The default value is "100%".
     * [Usage Notes] 'Invalid property value' will be reported when the set value is not string or number.
     */
    height: number | string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] The border of the ImageEditor viewer.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    border: string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] Set the border of the top toolbar.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    topMenuBorder: string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] The inner border of the image area.
     * Allow any CSS rules
     */
    innerBorder: string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] The background color/image of the ImageEditor viewer.
     * [Usage Notes] 'Invalid property value' is reported when the set value does not meet the CSS standard.
     * Allow any CSS rules
     */
    background: string;
    /**
     * [Scope] ImageEditor viewer
     * [Description] Whether to pop up a window prompting to save the changes. The default value is true.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    promptToSaveChange: boolean;
    /**
     * [Scope] ImageEditor viewer
     * [Description] Modify button titles and whether to hide specific buttons in the image editor viewer.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    buttons: {
        titles: {
            'previous': 'Previous Image',
            'next': 'Next Image',
            'print': 'Print Image',
            'scan': 'Scan Documents',
            'load': 'Load Local Images',
            'rotateleft': 'Rotate Left',
            'rotate': 'Rotate',
            'rotateright': 'Rotate Right',
            'deskew': 'Deskew',
            'crop': 'Crop Selected Area',
            'cut': 'Cut Selected Area',
            'changeimagesize': 'Change Image Size',
            'flip': 'Flip Image',
            'mirror': 'Mirror Image',
            'zoomin': 'Zoom In',
            'originalsize': 'Show Original Size',
            'zoomout': 'Zoom Out',
            'stretch': 'Stretch Mode',
            'fit': 'Fit Window',
            'fitw': 'Fit Horizontally',
            'fith': 'Fit Vertically',
            'hand': 'Hand Mode',
            'rectselect': 'Select Mode',
            'zoom': 'Click to Zoom In',
            'restore': 'Restore Original Image',
            'save': 'Save Changes',
            'close': 'Close the Editor',
            'removeall': 'Remove All Images',
            'removeselected': 'Remove All Selected Images'
        },
        visibility: {
            'scan': true, 'load': true, 'print': true,
            'removeall': true, 'removeselected': true,
            'rotateleft': true, 'rotate': true, 'rotateright': true, 'deskew': true,
            'crop': true, 'erase': true, 'changeimagesize': true, 'flip': true, 'mirror': true,
            'zoomin': true, 'originalsize': true, 'zoomout': true, 'stretch': true,
            'fit': true, 'fitw': true, 'fith': true,
            'hand': true, 'rectselect': true, 'zoom': true, 'restore': true, 'save': true, 'close': true
        }
    };
    /**
     * [Scope] ImageEditor viewer
     * [Description] Define the dialog text
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    dialogText: {
        dlgRotateAnyAngle: ['Angle :', 'Interpolation:', 'Keep size', '  OK  ', 'Cancel'],
        dlgChangeImageSize: ['New Height :', 'New Width :', 'Interpolation method:', '  OK  ', 'Cancel'],
        saveChangedImage: ['You have changed the image, do you want to keep the change(s)?', '  Yes  ', '  No  '],
        selectSource: ['Select Source:', 'Select', 'Cancel', 'There is no source available']
    };
}
export interface ThumbnailViewerSettings {
    /**
     * [Scope] Thumbnail viewer
     * [Description] Where to put the thumbnail view. The allowed values are left, top, right, bottom. The default value is left.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    location: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify the size of width or height in pixels or percentage. The default value is 30%.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * number in pixels, string in percentage
     */
    size: number | string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify how many images to display per row.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * If columns and rows are both 1, report 'ThumbnailViewer shoud display more than 1 page' error.
     * number in pixels, string in percentage
     */
    columns: number;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify how many images to display per column.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * If columns and rows are both 1, report 'ThumbnailViewer shoud display more than 1 page' error.
     * number in pixels, string in percentage
     */
    rows: number;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Fit the image vertically or horizontally. Allowed values are 'vertical' and 'horizontal'.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    scrollDirection: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the margin between images & the margin between image and the viewer border). The default value is 10.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * number in pixels, string in percentage
     */
    margin: number | string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background of the entire thumbnail viewer. The default value is white.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    background: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the border of the thumbnail viewer.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    border: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow keyboard control.
     */
    allowKeyboardControl: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow image dragging. The default value is true.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    allowPageDragging: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow the mouse to resize the thumbnail viewer. The default value is false.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
	allowResizing: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to show the page number. The default value is false.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    showPageNumber: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Return or set the background colour/image of the thumbnail viewer. The default value is white.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    pageBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the image border style.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    pageBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the image background when the mouse is hovered.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    hoverBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the image border when the mouse is hovered.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    hoverBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background when dragging the image. The default value is yellow.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    placeholderBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the border of the selected image.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedImageBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background of the selected image.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedImageBackground: string;
}
export interface CustomElement {
    /**
     * [Scope] Current Element
     * [Description] Show the element.
     */
    show(): void;
    /**
     * [Scope] Current Element
     * [Description] Hide the element.
     */
    hide(): void;
    /**
     * [Scope] Current Element
     * [Description] Delete the element.
     */
    dispose(): void;
}
export interface ImageEditor {
    /**
     * [Scope] ImageEditor viewer
     * [Description] Show the ImageEditor viewer.
     */
    show(): void;
    /**
     * [Scope] ImageEditor viewer
     * [Description] Hide the ImageEditor viewer.
     */
    hide(): void;
    /**
     * [Scope] ImageEditor viewer
     * [Description] Delete the ImageEditor viewer.
     */
    dispose(): void;
}
export interface ThumbnailViewer {
    /**
     * [Scope] Thumbnail viewer
     * [Description] Show the Thumbnail viewer.
     */
    show(): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Hide the Thumbnail viewer.
     */
    hide(): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Delete the Thumbnail viewer.
     */
    dispose(): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the view mode.
     */
    updateViewMode(viewMode: ViewMode): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify an event listener for the viewer event.
     * @param name Specify the event name.
     * @param callback The event listener.
     */
    on(name: string, callback: (event: ThumbnailViewerEvent) => void): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Remove the event handler.
     * @param eventName Specify the event name.
     * @param callback The event listener.
     */
    off(eventName: string, callback?: () => void): void;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Where to put the thumbnail view. The allowed values are left, top, right, bottom. The default value is left.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    location: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify the size of width or height in pixels or percentage. The default value is 30%.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * number in pixels, string in percentage
     */
    size: number | string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Specify scroll direction. Allowed values are 'vertical' and 'horizontal'.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    scrollDirection: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the margin between images & the margin between image and the viewer border). The default value is 10.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * number in pixels, string in percentage
     */
    margin: number | string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background of the entire thumbnail viewer. The default value is white.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    background: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the border of the thumbnail viewer.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    border: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow keyboard control.
     */
    allowKeyboardControl: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow image dragging. The default value is true.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    allowPageDragging: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to allow the mouse to resize the thumbnail viewer. The default value is false.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
	allowResizing: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Whether to show the page number. The default value is false.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     */
    showPageNumber: boolean;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Return or set the background colour/image of the thumbnail viewer. The default value is white.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    pageBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the border of the thumbnail viewer.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    pageBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the image background when the mouse is hovered.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    hoverBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the image border when the mouse is hovered.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    hoverBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background when dragging the image. The default value is yellow.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    placeholderBackground: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the border of the selected image.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedImageBorder: string;
    /**
     * [Scope] Thumbnail viewer
     * [Description] Set the background of the selected image.
     * [Usage Notes] 'Invalid property value' will be reported when the specified value type is wrong or the parameter name is spelled incorrectly.
     * Allow any CSS rules
     */
    selectedImageBackground: string;
}

export interface ViewMode {
    columns: number;
    rows: number;
    scrollDirection: string;
}

export interface ViewerEvent {
    /**
     * The index of the current image.
     */
    index: number;
    /**
     * The x-coordinate of the upper-left corner of the image.
     */
    imageX: number;
    /**
     * The y-coordinate of the upper-left corner of the image.
     */
    imageY: number;
    /**
     * The x-coordinate relative to the browser page.
     */
    pageX: number;
    /**
     * The y-coordinate relative to the browser page.
     */
    pageY: number;
}
export interface ThumbnailViewerEvent {
    /**
     * The index of the current image.
     */
    index: number;
    /**
     * The x-coordinate relative to the browser page.
     */
    pageX: number;
    /**
     * The y-coordinate relative to the browser page.
     */
    pageY: number;
}
export interface Area {
	left: number;
	top: number;
    right: number;
    bottom: number;
}
