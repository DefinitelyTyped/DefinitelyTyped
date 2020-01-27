// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

/** 
 
## `constructor` MBC()
 
*Syntax:* `new MBC(license)`
 
| parameter | type | description |
|  |  |  |
| license | `String` | |
 
*example:*
```javascript
// MBC without a license can be used for evaluation purposes. It is not stable for long time usage.
var painter = new MBC();
// MBC need a license in production environments.
painter = new MBC('xxxxx');
```
*/

// export = KPainter;

declare class MBC {
    /**
     * Tell this painter the directory where you place`cv-wasm.js` and`cv-wasm.wasm`.
    
    * Syntax:* `MBC.cvFolder = 'js';`
     */
    cvFolder: string;

    /**
     * You should call`MBC.loadCvScriptAsync()` first before use`Free Transform` and`Brush` module.
    
    * Syntax:* `MBC.loadCvScriptAsync(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback | `function(boolean bSuccess)` | |
    
    @example
```javascript
MBC.loadCvScriptAsync(function(bSuccess){
    if(bSuccess){
        console.log('load cv script success.');
        painter.enterFreeTransformModeAsync();
    }else{
        console.log('load cv script fail.');
    }
});
```
     */
    loadCvScriptAsync: () => void;
}

interface rectangle {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

interface point {
    x: number;
    y: number;
}

interface cornerPoints {
    leftTop: point;
    rightTop: point;
    leftBottom: point;
    rightBottom: point;
}

interface TaskQueue {
	push(task: (bLoadingWhenPush: boolean) => void, context?: any, args?: []): void;
    unshift(task: (bLoadingWhenPush: boolean) => void, context?: any, args?: []): void;
    next(): void;
}

declare function KPainter(mbcKey?: string): void;

interface KPainter {
    /**
     * @example    
```javascript
var painterDom = painter.getHtmlElement();
painterDom.style.width = '100%';
painterDom.style.height = '100%';
document.getElementById('painter-container').appendChild(painterDom);
```
    * 
    */
    getHtmlElement(): HTMLDivElement;

    /**
     * Get the current showing image index a in MBC instance.
     */
    getCurIndex(): number;

    /**
     * Get the image count in a MBC instance.
     */
    getCount(): number;

    /**
     * Identify whether the MBC instance is in `Editing` mode.
     */
    isEditing(): boolean;

    /**
     *
@example```javascript
// A way to access to inner data. Don't modify it if you are not sure.
var imgOri = painter.getImage(true);
// This image can be used in any place and free to modify it.
var imgCopyed = painter.getImage();
imgCopyed.style.width = '100px';
imgCopyed.style.height = '100px';
document.getElementById('image-container').appendChild(imgCopyed);
```
     */
    getImage(isOri: boolean, index: number): HTMLImageElement;

    /**
     * Binding a function that would be called when starting an expensive operation.    
    * Syntax:* `function(){}`    
@example```javascript
painter.onStartLoading = function(){
    document.getElementById('animation').show();
};
```
     */
    onStartLoading: () => void;

    /**
     * Binding a function that would be called when finishing an expensive operation.
    
    * Syntax:* `function(){}`
    
    @example```javascript
    painter.onFinishLoading = function(){
        document.getElementById('animation').hide();
    };
    ```
     */
    onFinishLoading: () => void;

    // # Image Store
    /**
     * Show file choose window by click the hidden file input.Can't process during `Editing` mode.
     * @example
```javascript
document.getElementById('btn-add-image').addEventListener('click', function(){
    painter.showFileChooseWindow();
});
```
     */
    showFileChooseWindow(): boolean;

    /**
     * @example
```javascript
// warning: never redefine it if you are not sure
// painter.defaultFileInput = document.createElement('input');
painter.defaultFileInput.accept = "image/png";
painter.defaultFileInput.multiple = false;
```
     */
    defaultFileInput: HTMLInputElement;

    /**
     * Binding a function that would be called when`defaultFileInput` change by`showFileChooseWindow()`.
    
    * Syntax:* `function(event, callback){}`
    
    @example
```javascript
painter.beforeAddImgFromFileChooseWindow = function(ev, callback){
    var files = ev.target.files;
    var newBlobs = [];
    var finishedIndex = 0;
    for(var i = 0; i < files.length; ++i){
        var file = files[i];
        doSomeWorkToGetANewBlob(file, function(blob){
            newBlobs.push(blob);
            if(files.length == ++finishedIndex){
                callback(newBlobs);
            }
        });
    }
};
```
     */
    beforeAddImgFromFileChooseWindow: () => void;

    /**
     * Binding a function that would be called after adding image from`defaultFileInput`.
    
    * Syntax:* `function(){}`
    
    @example
```javascript
painter.afterAddImgFromFileChooseWindow = function(bSuccess){
    if(bSuccess){console.log('The new image(s) has been added from file choose window.');}
};
```
     */
    afterAddImgFromFileChooseWindow: () => void;

    /*** 
     * Syntax:* `function(event, callback){}`    
    @example
```javascript
painter.beforeAddImgFromDropFile = function(ev, callback){
    var files = ev.dataTransfer.files;
    var newBlobs = [];
    var finishedIndex = 0;
    for(var i = 0; i < files.length; ++i){
        var file = files[i];
        doSomeWorkToGetANewBlob(file, function(blob){
            newBlobs.push(blob);
            if(files.length == ++finishedIndex){
                callback(newBlobs);
            }
        });
    }
};
```
     */
    beforeAddImgFromDropFile: () => any;

    /**
     * 
     * Syntax:* `function(){}`
    
    @example
```javascript
painter.afterAddImgFromDropFile = function(bSuccess){
    if(bSuccess){console.log('The new image(s) has been added from dropping.');}
};
```
     * 
     */
    afterAddImgFromDropFile: () => void;

    /**
     * Syntax:* `.addImageAsync(imgData, callback)`
    
        | parameter | type | description |
    |  |  |  |
    | imgData | `Blob`, `HTMLCanvasElement`, `HTMLImageElement`, `String` * (url) *, `Array` * (a array of source)*, `FileList` | |
    | callback * (optional) * | `function(bSuccess)` | |
    
    @example
```javascript
painter.addImageAsync(image, function(bSuccess){
    console.log('Add success');
});
```
     */
    addImageAsync(imgData: Blob | HTMLCanvasElement | HTMLImageElement | string | string[], callback?: () => void): void;

    /**
    The image whose width or height larger than`addedImageMaxWH` would be compressed when adding.
    
    * Syntax:* `.addedImageMaxWH = 4096;`
     */
    addedImageMaxWH: number;

    /**
     * Whether`changePage` to the new added image.
    
    * Syntax:* `.isShowNewImgWhenAdd = true;`
     */
    isShowNewImgWhenAdd: boolean;

    /**
     * Update the`htmlElement` of a MBC instance.Should call it manually when the`htmlElement` resize.
    
    * Syntax:* `.updateUIOnResize(isLazy, callback)`
    
        | parameter | type | description |
    |  |  |  |
    | isLazy * (optional) *| `boolean` | Default false.Set true to avoid to update too frequently. |
    | callback | `function()` | Callback of finish updating.Might abort the earlier callback when`isLazy` is true. |
    
    @example
```javascript
window.addEventListener('resize',function(){
    painter.updateUIOnResize(true, function(){
        console.log('painter update');
    });
});
```
     */
    updateUIOnResize(isLazy?: boolean, callback?: () => void): void;

    /**
     * Binding a function that would be called when current image index or total length change.
    
    * Syntax:* `function(Number curIndex, Number length){}`
    
    @example
```javascript
painter.onNumChange = function(curIndex, length){
    console.log('curIndex: '+curIndex+', length:'+length);
};
``` 
    */
    onNumChange: (curIndex: number, length: number) => void;

    /**
     * Change index of the current page.Can only process in `Viewing` mode.
    
    * Syntax:* `.changePage(cmd)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | cmd | `Number` * (index) *, `String` * ('f', 'p', 'n', 'l') * | Index number, or command string of 'f'(first), 'p'(pre), 'n'(next), 'l'(last). |
    
    @example
```javascript
document.getElementById('btn-first').addEventListener('click', function(){
    painter.changePage('f');
});
document.getElementById('btn-pre').addEventListener('click', function(){
    painter.changePage('p');
});
document.getElementById('btn-next').addEventListener('click', function(){
    painter.changePage('n');
});
document.getElementById('btn-last').addEventListener('click', function(){
    painter.changePage('l');
});
document.getElementById('btn-toThisPage').addEventListener('click', function(){
    painter.changePage(parseInt(document.getElementById('ipt-page').value));
});
```
     */
    changePage(cmd: number | string): boolean;

    /**
     * Delete a image.Can only process in `Viewing` mode.
    
    * Syntax:* `.del(index)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | index * (optional) * | `Number` | Default current index. |
    
     */
    del(index: number): boolean;

    /**
     * Get width of current image in the MBC instance.
    
    * Syntax:* `.getWidth(index)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
    | index * (optional) * | `Number` | Default current index. |
     */
    getWidth(index: number): number;

    /**
     * Get height of current image in the MBC instance.
    
    * Syntax:* `.getHeight(index)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
    | index * (optional) * | `Number` | Default current index. |
     */
    getHeight(index: number): number;

    /**
     * Get the image data in `Blob` type.
    
    * Syntax:* `.getBlob(index)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
    | index * (optional) * | `Number` | Default current index. |
     */
    getBlob(index: number): Blob;

    /**
     * Download the image to users' local system. The function should be invoked directly by the user. Async invoking may have problems.
    
    * Syntax:* `.download(filename, index)`
    
            | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
    | filename * (optional) * | `String` | |
    | index * (optional) * | `Number` | Default current index. |
    
    @example
```javascript
document.getElementById('btn-download').addEventListener('click', function(){
    for(var i = 0; i < painter.getCount(); ++i){
        painter.download(null, i);
    }
});
```
     */
    download(filename?: string, index?: number): number;

    /**
     * Syntax:* `.bindThumbnailBox(container, funWrap, maxWH)`
    
            | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | container | `HTMLElement` | |
    | funWrap * (optional) * | `HTMLElement function(HTMLCanvasElement cvs)` | |
    | maxWH * (optional) * | `Number` | Default 256. |
    
    @example
```javascript
painter.bindThumbnailBox(document.getElementById('div-thumbnailContainer'), function(cvs){
    console.log(cvs.className);// 'kPainterThumbnailCanvas', never remove this class
    var box = document.createElement('div');
    box.className = 'div-thumbnailBox';
    box.appendChild(cvs);
    box.addEventListener('click', function(){
        var idx = box.getKPainterIndex();// get index
        painter.changePage(idx);
    });
    return box;
});
```
     */
    bindThumbnailBox(container: HTMLElement, funWrap?: () => HTMLElement, maxWH?: number): boolean;

    /**
     * Syntax:* `.unbindThumbnailBox(container)`
    
            | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | container | `HTMLElement` | |
    
    @example
```javascript
painter.bindThumbnailBox(document.getElementById('div-thumbnailContainer'));
```
     */
    unbindThumbnailBox(container: HTMLElement): boolean;

    // # Gesture
    /**
     * 
    Set the zoom rate when user left double click.
    
    * Syntax:* `.leftDoubleClickZoomRate = 2;`
    
     */
    leftDoubleClickZoomRate: number;

    /**
     * Set the zoom rate when user right double click.
    
    * Syntax:* `.rightDoubleClickZoomRate = 0.5;`
     */
    rightDoubleClickZoomRate: number;

    /**
     * Whether allow switch from last to first or from first to last by`touchmove` gesture.
    
    * Syntax:* `.allowedTouchMoveSwitchImgOverBoundary = true;`
     */
    allowedTouchMoveSwitchImgOverBoundary: boolean;

    /**
     * Binding a function that would be called when the performence of the current image or canvas(in `Editing` mode) update.
    
    * Syntax:* `function(){}`
    
    @example
```javascript
painter.onUpdateImgPosZoom(function(){
    console.log(painter.getZoom());
    console.log(painter.getEditWidth());
    console.log(painter.getEditHeight());
});
```
     */
    onUpdateImgPosZoom: () => void;

    /**
     * Get the zoom of current image or canvas(in `Editing` mode).
    
    * Syntax:* `.getZoom()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
     */
    getZoom(): number;

    /**
     * Set the zoom of current image or canvas(in `Editing` mode).
    
    * Syntax:* `.setZoom(num, isRate)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | The finally effective zoom. |
    | num | `Number` | |
    | isRate | `boolean` | |
     */
    setZoom(num: number, isRate: boolean): number;

    // # Basic Editor
    /**
	* The can - not - store step(freeTransform, brush) will generate a step image.If the step images' count over `stepImgsGCThreshold`, oldest not protected one would be GC.
    
    * Syntax:* `.stepImgsGCThreshold = 10;`
     */
    stepImgsGCThreshold: number;

    /**
     * Add a protected step.Then this step would not be GC.Can only process in `Editing` mode.
    
    * Syntax:* `.addProtectedStep(index)`
    
        | parameter | type | description |
    |  |  |  |
    | index | `Number` | |
    
    @example
```javascript
    // sample code: save and give up editing about freeTransform mode 
document.getElementById('btn-enterFreeTransformMode').addEventListener('click', function(){
    // pretect step when enter freeTransform mode
    painter.addProtectedStep(painter.getCurStep());
    // presume that `MBC.loadCvScriptAsync(callback)` has been called and success
    painter.enterFreeTransformModeAsync();
});
 
document.getElementById('btn-saveFreeTransform').addEventListener('click', function(){
    // remove the the last pretect step
    var protectedSteps = painter.getProtectedSteps();
    painter.removeProtectedStep(protectedSteps[protectedSteps.length - 1]);
    // transform and exitFreeTransformMode
    painter.freeTransformAsync(function(){
        painter.exitFreeTransformModeAsync();
    });
});
 
document.getElementById('btn-giveUpFreeTransform').addEventListener('click', function(){
    // pretect step when enter freeTransform mode
    var protectedSteps = painter.getProtectedSteps();
    var lastPretectedStep = protectedSteps[protectedSteps.length - 1];
    // remove the the last pretect step
    painter.removeProtectedStep(lastPretectedStep);
    // exitFreeTransformMode
    painter.exitFreeTransformModeAsync(function(){
        // jump to the last pretect step
        painter.setCurStepAsync(lastPretectedStep);
    });
});
```
     */
    addProtectedStep(index: number): boolean;

    /**
     * Remove a protected step.Then this step can be GC.Can only process in `Editing` mode.
    
    * Syntax:* `.removeProtectedStep(index)`
    
        | parameter | type | description |
    |  |  |  |
    | index | `Number` | |
    
     */
    removeProtectedStep(index: number): boolean;

    /**
     * Get All protected steps.Can only process in `Editing` mode.
    
    * Syntax:* `.getProtectedSteps()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Array` | A array of the protected numbers. |
     */
    getProtectedSteps(): number[];

    /**
     * Undo an editing step.Can only process in `Editing` mode.
    
    * Syntax:* `.undo(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback | `function(boolean bSuccess)` | |
     */
    undo(callback: () => void): void;

    /**
     * Redo an editing step.Can only process in `Editing` mode.
    
    * Syntax:* `.redo(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback | `function(boolean bSuccess)` | |
     */
    redo(callback: () => void): void;

    /**
     * Get count of editing steps.Can only process in `Editing` mode.
    
    * Syntax:* `.getStepCount()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
     */
    getStepCount(): number;

    /**
     * Get current editing step.Can only process in `Editing` mode.
    
    * Syntax:* `.getCurStep()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
     */
    getCurStep(): number;

    /**
     * Set current editing step.Can only process in `Editing` mode.
    
    * Syntax:* `.setCurStepAsync(index, callback)`
    
        | parameter | type | description |
    |  |  |  |
    | index | `Number` | |
    | callback | `function(boolean bSuccess)` | |
     */
    setCurStepAsync(index: number, callback: () => void): void;

    /**
     * Enter the`Editing` mode.
    
    * Syntax:* `.enterEditAsync(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback | `function(boolean bSuccess)` | |
     */
    enterEditAsync(callback: () => void): void;

    /**
     * Leave the`Editing` mode without saving change.
    
    * Syntax:* `.cancelEdit(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
     */
    cancelEdit(callback: () => void): boolean;

    /**
     * Save change and leave the`Editing` mode.
    
    * Syntax:* `.saveEditAsync(callback, isCover)`
    
        | parameter | type | description |
    |  |  |  |
    | callback | `function(boolean bSuccess)` | |
    | isCover | `boolean` | |
     */
    saveEditAsync(callback: () => void, isCover: boolean): void;

    /**
     * Rotate right.Can only process in `Editing` mode.
    
    * Syntax:* `.rotateRight()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
     */
    rotateRight(): boolean;

    /**
     * Rotate left.Can only process in `Editing` mode.
    
    * Syntax:* `.rotateLeft()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
     */
    rotateLeft(): boolean;

    /**
     * Mirror.Can only process in `Editing` mode.
    
    * Syntax:* `.mirror()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
     */
    mirror(): boolean;

    /**
     * Flip.Can only process in `Editing` mode.
    
    * Syntax:* `.flip()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
     */
    flip(): boolean;

    /**
     * Resize.Can only process in `Editing` mode.
    
    * Syntax:* `.resizeAsync(newWidth, newHeight, callback)`
    
        | parameter | type | description |
    |  |  |  |
    | newWidth | `Number` | |
    | newHeight | `Number` | |
    | callback | `function(boolean bSuccess)` | |
     */
    resizeAsync(newWidth: number, newHeight: number, callback: () => void): void;

    /**
     * Get width of current editing canvas.
    
    * Syntax:* `.getEditWidth()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
     */
    getEditWidth(): number;

    /**
     * Get height of current editing canvas.
    
    * Syntax:* `.getEditHeight()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Number` | |
     */
    getEditHeight(): number;

    // # Crop
    /**
     * Whether show`Crop Rect` UI when enter`Editing` mode
    
    * Syntax:* `.isAutoShowCropUI = true;`
     */
    isAutoShowCropUI: boolean;

    /**
    Show`Crop Rect`.Can only process in `Editing` mode.
    
    * Syntax:* `.showCropRect()`
     */
    showCropRect(): void;

    /**
     * Hide`Crop Rect`.Can only process in `Editing` mode.
    
    * Syntax:* `.hideCropRect()`
     */
    hideCropRect(): void;

    /**
     * Default 0.
    0: touch / click moving inside`Crop Rect` will move the back canvas.
    1: touch / click moving inside`Crop Rect` will move the`Crop Rect`.
    
    * Syntax:* `.setCropRectStyle(styleNo)`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | styleNo | `Number` | 0, 1 |
     */
    setCropRectStyle(styleNo: number): boolean;

    /**
     *     `Crop Rect` min width.
    
    * Syntax:* `.cropRectMinW = 50;`
     */
    cropRectMinW: number;

    /**
        `Crop Rect` min height.
    
    * Syntax:* `.cropRectMinH = 50;`
     */
    cropRectMinH: number;

    /**
     * Binding a function that would be called when the`Crop Rect` change.
    
    * Syntax:* `function(){}`
    
    @example
```javascript
painter.onCropRectChange = function(){
    var cropArea = painter.getCropRectArea(true);
    document.getElementById('cropWidth').innerText = cropArea[2] - cropArea[0];
    document.getElementById('cropHeight').innerText = cropArea[3] - cropArea[1];
};
```
     */
    onCropRectChange: () => void;

    /**
     * 
     * Syntax:* `.setCropRectArea(left, top, right, bottom)`
    `Crop Rect` select an area.
    
    | parameter | type | description |
    |  |  |  |
    | * (return value)* | `boolean` | |
    | left * (optional) * | `Number` | -0.5 ~0.5, default -0.5. |
    | top * (optional) * | `Number` | -0.5 ~0.5, default -0.5. |
    | right * (optional) * | `Number` | -0.5 ~0.5, default 0.5. |
    | bottom * (optional) * | `Number` | -0.5 ~0.5, default 0.5. |
     */
    setCropRectArea(left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Syntax:* `.getCropRectArea(isAbsolute)`
    
            | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Array` | A array of[left, top, right, bottom]. |
    | isAbsolute | `boolean` | Default`false`, get precentage(-50 % ~50 %) array. |
    
     */
    getCropRectArea(isAbsolute: boolean): rectangle[];

    /**
     * Crop the selected area.Can only process in `Editing` mode.
     
    * Syntax:* `.cropAsync(callback, array)`
     
        | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function([left, top, right, bottom])` | |
    | array * (optional) * | `Array` | A array of[left, top, right, bottom]\(each - 0.5 ~0.5\).Default use an area accroding to`Crop Rect`. |
     
     */
    cropAsync(callback?: () => void, array?: rectangle[]): void;

    // # Free Transform
    /**
     * You should call`KPainter.loadCvScriptAsync()` first before use`FreeTransform` mode.
     */
    /**
     * Detect a document.Would auto call`setFreeTransformCornerPos()` after detected.Can only process in `FreeTransform` mode.
     
    * Syntax:* `.documentDetectAsync(callback, importSrc)`
     
       | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function([[x0,y0], [x1,y1], [x2,y2], [x3,y3]])` | x0, y0...is from - 0.5 to 0.5. |
    | importSrc * (optional) * | | TUDO.Not easy enough to use now. |
     */
    documentDetectAsync(callback?: () => void, importSrc?: any): void;

    /**
     * Set the`FreeTransform` corner position.Can only process in `FreeTransform` mode.
    
    * Syntax:* `.setFreeTransformCornerPos(cornerPoints)`
    
        | parameter | type | description |
    |  |  |  |
    | cornerPoints | `Array` | A array of[[x0, y0], [x1, y1], [x2, y2], [x3, y3]].x0, y0...is from - 0.5 to 0.5. |
    
     */
    setFreeTransformCornerPos(cornerPoints: cornerPoints): any;

    /**
     * Get the`FreeTransform` corner position.
    
    * Syntax:* `.getFreeTransformCornerPos()`
    
        | parameter | type | description |
    |  |  |  |
    | * (return value)* | `Array` | A array of[[x0, y0], [x1, y1], [x2, y2], [x3, y3]].x0, y0...is from - 0.5 to 0.5.|
    
     */
    getFreeTransformCornerPos(): cornerPoints[];

    /**
     * Binding a function that would be called when the`FreeTransform` corner position change.
    
    * Syntax:* `function()`
    
    @example
```javascript
painter.onFreeTransformCornerPosChange = function(){
    console.log(painter.getFreeTransformCornerPos());
};
```
     */
    onFreeTransformCornerPosChange: () => void;

    /**
     *     
     * `freeTransformAsync()` is a really expensive operation. `freeTransformMaxWH` would limit the max width and height of the result.
    
    * Syntax:* `.freeTransformMaxWH = 2048;`
     */
    freeTransformMaxWH: number;

    /**
     * 
    Transform the quadrilateral surround by the`FreeTransform` corner into a rectangle.Can only process in `FreeTransform` mode.
    
    * Syntax:* `.freeTransformAsync(callback, cornerPoints, importSrc)`
    
        | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function(boolean bSuccess)` | |
    | cornerPoints * (optional) * | `Array` | A array of[[x0, y0], [x1, y1], [x2, y2], [x3, y3]].x0, y0...is from - 0.5 to 0.5. |
    | importSrc * (optional) * | | TUDO.Not show for user. |
     */
    freeTransformAsync(callback?: () => void, cornerPoints?: cornerPoints[], importSrc?: any): any;

    /**
     * 
    Enter`FreeTransform` mode.Can only process in `Editing` mode.
    
    * Syntax:* `.enterFreeTransformModeAsync(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function(boolean bSuccess)` | |
     */
    enterFreeTransformModeAsync(callback: () => void): any;

    /**
     * Exist`FreeTransform` mode.
    
    * Syntax:* `.exitFreeTransformModeAsync(callback)`
    
        | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function(boolean bSuccess)` | |
     */
    exitFreeTransformModeAsync(callback?: () => void): any;

    // # Video
    videoSettings: MediaStreamConstraints;

    // ## `MediaStreamConstraints`.videoSettings
    /**
    A[MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints).
    
    * reference:* [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
    
     * Syntax:* `.showVideo(callback, videoSettings)`
    
    | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function(boolean bSuccess)` | |
    | videoSettings * (optional) * | `MediaStreamConstraints` | A[MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints). *reference:* [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
     */
    showVideo(callback?: () => void, videoSettings?: MediaStreamConstraints): boolean;

    /**
     * Syntax:* `.grabVideo()`
     
    Grab a image from the video and return the image.
     
    | parameter | type | description |
    |  |  |  |
    | * (return value)* | `HTMLCanvasElement` | |
        * Syntax:* `.grabVideo(true, callback)`
     
    Grab a image from the video and auto add image to the painter.Can only process in `Viewing` mode.
     
    | parameter | type | description |
    |  |  |  |
    | callback * (optional) * | `function(boolean bSuccess)` | |
     */
    grabVideo(isAutoAdd?: boolean, callback?: () => void): HTMLCanvasElement | void;

    /**
     * Syntax:* `.hideVideo()`
     */
    hideVideo(): boolean;

    /**
     * Syntax:* `function(canvas, callback){}`
    
    @example
```javascript
painter.beforeAddImgFromGrabVideoBtn = function(canvas, callback){
    doSomeWorkToGetNewSrc(canvas, function(srcValidForAddImage){
        callback(srcValidForAddImage);
    });
};
```
     */
    beforeAddImgFromGrabVideoBtn: () => void;

    /**
     * Syntax:* `function(){}`
    
    @example
```javascript
painter.afterAddImgFromGrabVideoBtn = function(bSuccess){
    if(bSuccess){console.log('The new image(s) has been added from video.');}
};
```
     */
    afterAddImgFromGrabVideoBtn: () => void;
}
