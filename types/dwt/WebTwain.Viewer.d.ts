import { Resolution } from "./Addon.Camera";
import { WebTwainAcquire } from "./WebTwain.Acquire";

export interface WebTwainViewer extends WebTwainAcquire {
    /**
     * Create a Dynamsoft Viewer instance and bind it to the WebTwain instance.
     * @param elementId Specify an HTML element to create the viewer.
     * @param config Configuration of the viewer.
     */
    BindViewer(
        elementId: string,
        config?: BasicViewerConfig,
    ): boolean;
    /**
     * Update the viewer with the new configuration.
     * @param config Configuration of the viewer.
     */
    UpdateViewer(config: BasicViewerConfig): boolean;
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
     * Start streaming video from the current camera in the viewer.
     * @param deviceId Specify a camera.
     * @param resolution Specify the initial resolution.
     */
    showVideo(deviceId?: string, resolution?: Resolution): Promise<Resolution>;
    /**
     * Close the camera and hide the video streaming UI.
     */
    closeVideo(): void;
    /**
     * Remove a built-in event handler.
     * @param eventName Specify the event.
     */
    off(eventName: string): boolean;
    /**
     * Set the view mode of the viewer.
     * @param columns Specify the number of images per row.
     * @param rows Specify the number of images per column.
     */
    setViewMode(
        columns: number,
        rows: number,
    ): boolean;
    /**
     * Select a rectangular area on the specified image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param width Specify the rectangle (the width).
     * @param height Specify the rectangle (the height).
     */
    setSelectedImageArea(
        left: number,
        top: number,
        width: number,
        height: number,
    ): boolean;
    /**
     * Set the CSS class name of the specified button.
     * @param name Specify the button.
     * @param className Specify the CSS class name.
     */
    setButtonClass(
        name: string,
        className: string,
    ): boolean;
    /**
     * Return or set the margin between two images or the margin between one side of an image and the border of the viewer.
     */
    imageMargin: number;
    /**
     * The mode of operation. Allowed values are 0(no selection, cursor is pointer), 1 (seleciton, cursor is crosshair)
     */
    operationMode: number;
    /**
     * Return or set whether to show the footer of the viewer.
     */
    showFooter: boolean;
    /**
     * Return or set whether to show the header of the viewer.
     */
    showHeader: boolean;
    /**
     * Zoom in by 6/5.
     */
    zoomIn(): boolean;
    /**
     * Zoom out by 5/6.
     */
    zoomOut(): boolean;
    /**
     * Bind a custom element to the viewer to add extra features.
     * @param Id Specify the element by its Id.
     * @param priority Specify the importance of the element.
     * @param fullScreen Whether to show the element full-screen.
     */
    bindCustomElement(
        Id: string,
        priority: number,
        fullScreen: boolean,
    ): boolean;
    /**
     * Unbind a custom element from the viewer.
     * @param Id Specify the element by its Id.
     */
    unBindCustomElement(Id: string): boolean;
    /**
     * Show the custom element.
     * @param name Specify the element by its Id.
     */
    showCustomElement(Id: string): boolean;
    /**
     * Hide the custom element.
     * @param name Specify the element by its Id.
     */
    hideCustomElement(Id: string): boolean;
    /**
     * Show or hide the custom element.
     * @param name Specify the element by its Id.
     */
    toggleCustomElement(Id: string): boolean;
    /**
     * Whether to only show the thumbnails view.
     */
    bOnlyShowThumbnailsView: boolean;
    /**
     * Set the shape of the cursor over the thumbnails view.
     */
    cursorOverThumbnailsView: string;
    /**
     * Update the viewer with detailed configuration.
     * @param config Specify the detailed configuration.
     */
    updateUISettings(config: ViewerConfig): boolean;
}
export interface BasicViewerConfig {
    /**
     * Specify the size of the viewer.
     */
    Height: number | string;
    Width: number | string;
    /**
     * Set up the content view.
     */
    view: ContentView;
}
export interface ContentView {
    /**
     * Whether to show the content view or not.
     * If set to false, then only thumbnails view is shown.
     */
    bShow: boolean;
    /**
     * Specify the width of the major content view.
     */
    Width: number | string;
}
export interface ViewerConfig {
    /**
     * Specify which components are shown.
     */
    component?: {
        header?: boolean | undefined;
        topMenu?: boolean | undefined;
        asideMenu?: boolean | undefined;
        bottomMenu?: boolean | undefined;
    } | undefined;
    group?: {
        global?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'header'
            sequence?: number | undefined;
        } | undefined;
        tabName?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'header'
            sequence?: number | undefined;
        } | undefined;
        viewerCorner?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'header'
            sequence?: number | undefined;
        } | undefined;
        viewMenuBlock?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenu'
            sequence?: number | undefined;
        } | undefined;
        viewMenu?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenu'
            sequence?: number | undefined;
        } | undefined;
        topMenuRight?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenu'
            sequence?: number | undefined;
        } | undefined;
        pager?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'bottomMenu'
            sequence?: number | undefined;
        } | undefined;
        viewChange?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'header'
            sequence?: number | undefined;
        } | undefined;
    } | undefined;
    buttons?: {
        // loadImage button
        loadImage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewerCorner'
            iconClass?: string | undefined; // Example: 'icon-file'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onLoadImage'
        } | undefined;
        currentTab?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'tabName',
            sequence?: number | undefined;
        } | undefined;
        // panelChange button (thumbnail, dir tree, tags)
        panelChange?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'global'
            iconClass?: string | undefined; // Example: 'icon-list'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onPanelChange'
        } | undefined;
        // readDirection change button (vertical ,horizontal)
        readDirection?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'global'
            iconClass?: string | undefined; // Example: 'icon-readType'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onReadDirection'
        } | undefined;
        // readDirection change button (vertical ,horizontal)
        blank1?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'global'
            sequence?: number | undefined;
        } | undefined;
        // flip button
        flip?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-flip'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFlip'
        } | undefined;
        // mirror button
        mirror?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-mirror'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onMirror'
        } | undefined;
        // rotate button
        rotate?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-rotateLeft'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onRotate'
        } | undefined;
        // rotateAll button
        rotateAll?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-rotateAll'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onRotateAll'
        } | undefined;
        // crop button
        crop?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-crop'
            sequence?: 5 | undefined;
            onButtonClick?: string | undefined; // Example: onCrop'
        } | undefined;
        // wipe button
        wipe?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-wipe'
            sequence?: 6 | undefined;
            onButtonClick?: string | undefined; // Example: onWipe'
        } | undefined;
        // undo button
        undo?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-undo'
            sequence?: 7 | undefined;
            onButtonClick?: string | undefined; // Example: onUndo'
        } | undefined;
        // redo button
        redo?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-redo'
            sequence?: 8 | undefined;
            onButtonClick?: string | undefined; // Example: onRedo'
        } | undefined;
        // magnifyCanvas button
        zoomIn?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-magnifyImage'
            sequence?: 9 | undefined;
            onButtonClick?: string | undefined; // Example: onZoomIn'
        } | undefined;
        // shrinkCanvas button
        zoomOut?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-shrinkImage'
            sequence?: 10 | undefined;
            onButtonClick?: string | undefined; // Example: onZoomOut'
        } | undefined;
        // reset button
        reset?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewMenu'
            iconClass?: string | undefined; // Example: 'icon-reset'
            sequence?: 11 | undefined;
            onButtonClick?: string | undefined; // Example: onReset'
        } | undefined;
        // remove button
        remove?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenuRight'
            iconClass?: string | undefined; // Example: 'icon-delete'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onRemove'
        } | undefined;
        // print button
        print?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenuRight'
            iconClass?: string | undefined; // Example: 'icon-print'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onPrint'
        } | undefined;
        // save button
        save?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'topMenuRight'
            iconClass?: string | undefined; // Example: 'icon-save'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onSave'
        } | undefined;
        // firstPage button
        firstPage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'pager'
            iconClass?: string | undefined; // Example: 'icon-pageStart'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFirstPage'
        } | undefined;
        // previousPage button
        previousPage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'pager'
            iconClass?: string | undefined; // Example: 'icon-pagePre'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onPreviousPage'
        } | undefined;
        // pagination show
        pagination?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'pager'
        } | undefined;
        // nextPage button
        nextPage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'pager'
            iconClass?: string | undefined; // Example: 'icon-pageNext'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onNextPage'
        } | undefined;
        // lastPage button
        lastPage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'pager'
            iconClass?: string | undefined; // Example: 'icon-pageEnd'
            sequence?: 5 | undefined;
            onButtonClick?: string | undefined; // Example: onLastPage'
        } | undefined;
        // autoFit button
        autoFit?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewChange'
            iconClass?: string | undefined; // Example: 'icon-autoFit'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onAutoFit'
        } | undefined;
        // fitHeight button
        fitHeight?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewChange'
            iconClass?: string | undefined; // Example: 'icon-fitHeight'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFitHeight'
        } | undefined;
        // fitWidth button
        fitWidth?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewChange'
            iconClass?: string | undefined; // Example: 'icon-fitWidth'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFitWidth'
        } | undefined;
        // fullScreenToWebPage button
        fullPage?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewChange'
            iconClass?: string | undefined; // Example: 'icon-fullWeb'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFullPage'
        } | undefined;
        // fullScreenToDevice
        fullScreen?: {
            visibility?: boolean | undefined;
            location?: string | undefined; // Example: 'viewChange'
            iconClass?: string | undefined; // Example: 'icon-fullDevice'
            sequence?: number | undefined;
            onButtonClick?: string | undefined; // Example: onFullScreen'
        } | undefined;
    } | undefined;
    tipsConfig?: {
        loadImage?: string | undefined; // Example 'loadImage'
        panelChange?: string | undefined; // Example 'panelChange'
        readDirection?: string | undefined; // Example 'readDirection'
        flip?: string | undefined; // Example 'flip'
        mirror?: string | undefined; // Example 'mirror'
        rotate?: string | undefined; // Example 'rotate'
        rotateAll?: string | undefined; // Example 'rotateAll'
        crop?: string | undefined; // Example 'crop'
        wipe?: string | undefined; // Example 'wipe'
        undo?: string | undefined; // Example 'undo'
        redo?: string | undefined; // Example 'redo'
        zoomIn?: string | undefined; // Example 'zoomIn'
        zoomOut?: string | undefined; // Example 'zoomOut'
        reset?: string | undefined; // Example 'reset'
        remove?: string | undefined; // Example 'remove'
        print?: string | undefined; // Example 'print'
        save?: string | undefined; // Example 'save'
        firstPage?: string | undefined; // Example 'firstPage'
        previousPage?: string | undefined; // Example 'previousPage'
        pagination?: string | undefined; // Example 'pagination'
        nextPage?: string | undefined; // Example 'nextPage'
        lastPage?: string | undefined; // Example 'lastPage'
        autoFit?: string | undefined; // Example 'fitWindow'
        fitHeight?: string | undefined; // Example 'fitHeight'
        fitWidth?: string | undefined; // Example 'fitWidth'
        fullPage?: string | undefined; // Example 'fullPage'
        fullScreen?: string | undefined; // Example 'fullScreen'
    } | undefined;
    content?: {
        visibility?: boolean | undefined;
        besides?: {
            visibility?: boolean | undefined;
            sequence?: number | undefined;
        } | undefined;
        viewPort?: {
            visibility?: boolean | undefined;
            sequence?: number | undefined;
        } | undefined;
        allImage?: {
            visibility?: boolean | undefined;
            displayName?: string | undefined; // Example: 'All Images'
        } | undefined;
    } | undefined;
    thumbnail?: {
        visibility?: boolean | undefined;
        iconClass?: string | undefined; // Example: 'icon-thumbnail'
        selectedBorderColor?: string | undefined; // Example: 'red'
        selectedBackgroundColor?: string | undefined; // Example: 'rgb(127, 133, 251)'
        imageBackgroundColor?: string | undefined; // Example: 'transparent'
        imageBorderColor?: string | undefined; // Example: 'gray'
        hoverBackgroundColor?: string | undefined; // Example: '#c4faf8'
        hoverBorderColor?: string | undefined; // Example: 'yellow'
        blockBackgroundColor?: string | undefined; // Example: 'pink'
        backgroundColor?: string | undefined; // Example: 'rgba(67, 66, 70, 1)'
        imageSpace?: number | undefined; // Example: 10
        showPageNumber?: boolean | undefined;
        showThumbnailControl?: boolean | undefined;
        mouseShape?: string | undefined; // Example: 'pointer'
    } | undefined;
    tree?: {
        visibility?: boolean | undefined;
        iconClass?: string | undefined; // Example: 'icon-tree',
        selectedColor?: string | undefined; // Example: '#0000ff',
        goToThumbnail?: boolean | undefined;
    } | undefined;
    tag?: {
        visibility?: boolean | undefined;
        iconClass?: string | undefined; // Example: 'icon-tags',
        selectedColor?: string | undefined; // Example: '#0000ff',
        goToThumbnail?: boolean | undefined;
        displayMode?: string | undefined; // Example: ''// icon or text
    } | undefined;
    cropStyle?: {
        ratios?: any; // Example [[1, 1], [3, 2], [4, 3], [5, 4], [7, 5], [16, 9]],
        cropMask?: boolean | undefined;
        cropBar?: boolean | undefined;
    } | undefined;
    buttonResize?: {
        ifResize?: boolean | undefined;
        maxSize?: number | undefined; // Example: 26,
        minSize?: number | undefined; // Example: 14
    } | undefined;
    skinColor?: {
        topMenuBackground?: string | undefined; // Example: '#000000'
        asideBackground?: string | undefined; // Example: '#ffffff'
        canvasBackground?: string | undefined; // Example: 'rgba(67,66,70,1)'
        bottomMenuBackground?: string | undefined; // Example: '#000000'
    } | undefined;
    presetMode?: string | undefined; // Example: 'basic'
    theme?: string | undefined; // Example: 'basic'
}
