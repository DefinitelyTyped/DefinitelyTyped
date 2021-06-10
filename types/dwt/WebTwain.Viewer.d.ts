import { WebTwainAcquire } from "./WebTwain.Acquire";
import { Resolution } from "./Addon.Camera";

export interface WebTwainViewer extends WebTwainAcquire {
    /**
     * Create a Dynamsoft Viewer instance and bind it to the WebTwain instance.
     * @param elementId Specify an HTML element to create the viewer.
     * @param config Configuration of the viewer.
     */
    BindViewer(
        elementId: string,
        config?: BasicViewerConfig
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
    showVideo(deviceId?: string,
        resolution?: Resolution
    ): Promise<Resolution>;
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
        rows: number
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
        height: number
    ): boolean;
    /**
     * Set the CSS class name of the specified button.
     * @param name Specify the button.
     * @param className Specify the CSS class name.
     */
    setButtonClass(
        name: string,
        className: string
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
        fullScreen: boolean
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
        header?: boolean;
        topMenu?: boolean;
        asideMenu?: boolean;
        bottomMenu?: boolean;
    };
    group?: {
        global?: {
            visibility?: boolean,
            location?: string, // Example: 'header'
            sequence?: number
        },
        tabName?: {
            visibility?: boolean,
            location?: string, // Example: 'header'
            sequence?: number
        },
        viewerCorner?: {
            visibility?: boolean,
            location?: string, // Example: 'header'
            sequence?: number
        },
        viewMenuBlock?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenu'
            sequence?: number
        },
        viewMenu?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenu'
            sequence?: number
        },
        topMenuRight?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenu'
            sequence?: number
        },
        pager?: {
            visibility?: boolean,
            location?: string, // Example: 'bottomMenu'
            sequence?: number
        },
        viewChange?: {
            visibility?: boolean,
            location?: string, // Example: 'header'
            sequence?: number
        }
    };
    buttons?: {
        // loadImage button
        loadImage?: {
            visibility?: boolean,
            location?: string, // Example: 'viewerCorner'
            iconClass?: string, // Example: 'icon-file'
            sequence?: number,
            onButtonClick?: string // Example: onLoadImage'
        },
        currentTab?: {
            visibility?: boolean,
            location?: string, // Example: 'tabName',
            sequence?: number
        },
        // panelChange button (thumbnail, dir tree, tags)
        panelChange?: {
            visibility?: boolean,
            location?: string, // Example: 'global'
            iconClass?: string, // Example: 'icon-list'
            sequence?: number,
            onButtonClick?: string // Example: onPanelChange'
        },
        // readDirection change button (vertical ,horizontal)
        readDirection?: {
            visibility?: boolean,
            location?: string, // Example: 'global'
            iconClass?: string, // Example: 'icon-readType'
            sequence?: number,
            onButtonClick?: string // Example: onReadDirection'
        },
        // readDirection change button (vertical ,horizontal)
        blank1?: {
            visibility?: boolean,
            location?: string, // Example: 'global'
            sequence?: number
        },
        // flip button
        flip?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-flip'
            sequence?: number,
            onButtonClick?: string // Example: onFlip'
        },
        // mirror button
        mirror?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-mirror'
            sequence?: number,
            onButtonClick?: string // Example: onMirror'
        },
        // rotate button
        rotate?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-rotateLeft'
            sequence?: number,
            onButtonClick?: string // Example: onRotate'
        },
        // rotateAll button
        rotateAll?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-rotateAll'
            sequence?: number,
            onButtonClick?: string // Example: onRotateAll'
        },
        // crop button
        crop?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-crop'
            sequence?: 5,
            onButtonClick?: string // Example: onCrop'
        },
        // wipe button
        wipe?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-wipe'
            sequence?: 6,
            onButtonClick?: string // Example: onWipe'
        },
        // undo button
        undo?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-undo'
            sequence?: 7,
            onButtonClick?: string // Example: onUndo'
        },
        // redo button
        redo?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-redo'
            sequence?: 8,
            onButtonClick?: string // Example: onRedo'
        },
        // magnifyCanvas button
        zoomIn?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-magnifyImage'
            sequence?: 9,
            onButtonClick?: string // Example: onZoomIn'
        },
        // shrinkCanvas button
        zoomOut?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-shrinkImage'
            sequence?: 10,
            onButtonClick?: string // Example: onZoomOut'
        },
        // reset button
        reset?: {
            visibility?: boolean,
            location?: string, // Example: 'viewMenu'
            iconClass?: string, // Example: 'icon-reset'
            sequence?: 11,
            onButtonClick?: string // Example: onReset'
        },
        // remove button
        remove?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenuRight'
            iconClass?: string, // Example: 'icon-delete'
            sequence?: number,
            onButtonClick?: string // Example: onRemove'
        },
        // print button
        print?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenuRight'
            iconClass?: string, // Example: 'icon-print'
            sequence?: number,
            onButtonClick?: string // Example: onPrint'
        },
        // save button
        save?: {
            visibility?: boolean,
            location?: string, // Example: 'topMenuRight'
            iconClass?: string, // Example: 'icon-save'
            sequence?: number,
            onButtonClick?: string // Example: onSave'
        },
        // firstPage button
        firstPage?: {
            visibility?: boolean,
            location?: string, // Example: 'pager'
            iconClass?: string, // Example: 'icon-pageStart'
            sequence?: number,
            onButtonClick?: string // Example: onFirstPage'
        },
        // previousPage button
        previousPage?: {
            visibility?: boolean,
            location?: string, // Example: 'pager'
            iconClass?: string, // Example: 'icon-pagePre'
            sequence?: number,
            onButtonClick?: string // Example: onPreviousPage'
        },
        // pagination show
        pagination?: {
            visibility?: boolean,
            location?: string, // Example: 'pager'
        },
        // nextPage button
        nextPage?: {
            visibility?: boolean,
            location?: string, // Example: 'pager'
            iconClass?: string, // Example: 'icon-pageNext'
            sequence?: number,
            onButtonClick?: string // Example: onNextPage'
        },
        // lastPage button
        lastPage?: {
            visibility?: boolean,
            location?: string, // Example: 'pager'
            iconClass?: string, // Example: 'icon-pageEnd'
            sequence?: 5,
            onButtonClick?: string // Example: onLastPage'
        },
        // autoFit button
        autoFit?: {
            visibility?: boolean,
            location?: string, // Example: 'viewChange'
            iconClass?: string, // Example: 'icon-autoFit'
            sequence?: number,
            onButtonClick?: string // Example: onAutoFit'
        },
        // fitHeight button
        fitHeight?: {
            visibility?: boolean,
            location?: string, // Example: 'viewChange'
            iconClass?: string, // Example: 'icon-fitHeight'
            sequence?: number,
            onButtonClick?: string // Example: onFitHeight'
        },
        // fitWidth button
        fitWidth?: {
            visibility?: boolean,
            location?: string, // Example: 'viewChange'
            iconClass?: string, // Example: 'icon-fitWidth'
            sequence?: number,
            onButtonClick?: string // Example: onFitWidth'
        },
        // fullScreenToWebPage button
        fullPage?: {
            visibility?: boolean,
            location?: string, // Example: 'viewChange'
            iconClass?: string, // Example: 'icon-fullWeb'
            sequence?: number,
            onButtonClick?: string // Example: onFullPage'
        },
        // fullScreenToDevice
        fullScreen?: {
            visibility?: boolean,
            location?: string, // Example: 'viewChange'
            iconClass?: string, // Example: 'icon-fullDevice'
            sequence?: number,
            onButtonClick?: string // Example: onFullScreen'
        }
    };
    tipsConfig?: {
        loadImage?: string, // Example 'loadImage'
        panelChange?: string, // Example 'panelChange'
        readDirection?: string, // Example 'readDirection'
        flip?: string, // Example 'flip'
        mirror?: string, // Example 'mirror'
        rotate?: string, // Example 'rotate'
        rotateAll?: string, // Example 'rotateAll'
        crop?: string, // Example 'crop'
        wipe?: string, // Example 'wipe'
        undo?: string, // Example 'undo'
        redo?: string, // Example 'redo'
        zoomIn?: string, // Example 'zoomIn'
        zoomOut?: string, // Example 'zoomOut'
        reset?: string, // Example 'reset'
        remove?: string, // Example 'remove'
        print?: string, // Example 'print'
        save?: string, // Example 'save'
        firstPage?: string, // Example 'firstPage'
        previousPage?: string, // Example 'previousPage'
        pagination?: string, // Example 'pagination'
        nextPage?: string, // Example 'nextPage'
        lastPage?: string, // Example 'lastPage'
        autoFit?: string, // Example 'fitWindow'
        fitHeight?: string, // Example 'fitHeight'
        fitWidth?: string, // Example 'fitWidth'
        fullPage?: string, // Example 'fullPage'
        fullScreen?: string, // Example 'fullScreen'
    };
    content?: {
        visibility?: boolean,
        besides?: {
            visibility?: boolean,
            sequence?: number
        },
        viewPort?: {
            visibility?: boolean,
            sequence?: number
        },
        allImage?: {
            visibility?: boolean,
            displayName?: string // Example: 'All Images'
        }
    };
    thumbnail?: {
        visibility?: boolean,
        iconClass?: string // Example: 'icon-thumbnail'
        selectedBorderColor?: string // Example: 'red'
        selectedBackgroundColor?: string // Example: 'rgb(127, 133, 251)'
        imageBackgroundColor?: string // Example: 'transparent'
        imageBorderColor?: string // Example: 'gray'
        hoverBackgroundColor?: string // Example: '#c4faf8'
        hoverBorderColor?: string // Example: 'yellow'
        blockBackgroundColor?: string // Example: 'pink'
        backgroundColor?: string // Example: 'rgba(67, 66, 70, 1)'
        imageSpace?: number, // Example: 10
        showPageNumber?: boolean,
        showThumbnailControl?: boolean,
        mouseShape?: string // Example: 'pointer'
    };
    tree?: {
        visibility?: boolean,
        iconClass?: string // Example: 'icon-tree',
        selectedColor?: string // Example: '#0000ff',
        goToThumbnail?: boolean
    };
    tag?: {
        visibility?: boolean,
        iconClass?: string // Example: 'icon-tags',
        selectedColor?: string // Example: '#0000ff',
        goToThumbnail?: boolean,
        displayMode?: string // Example: ''// icon or text
    };
    cropStyle?: {
        ratios?: any, // Example [[1, 1], [3, 2], [4, 3], [5, 4], [7, 5], [16, 9]],
        cropMask?: boolean,
        cropBar?: boolean
    };
    buttonResize?: {
        ifResize?: boolean,
        maxSize?: number, // Example: 26,
        minSize?: number, // Example: 14
    };
    skinColor?: {
        topMenuBackground?: string // Example: '#000000'
        asideBackground?: string // Example: '#ffffff'
        canvasBackground?: string // Example: 'rgba(67,66,70,1)'
        bottomMenuBackground?: string // Example: '#000000'
    };
    presetMode?: string; // Example: 'basic'
    theme?: string; // Example: 'basic'
}
