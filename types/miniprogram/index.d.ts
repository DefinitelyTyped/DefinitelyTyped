// Type definitions for non-npm package miniprogram 1.0
// Project: https://miniprogram.alipay.com/docs/miniprogram/mpdev/quick-start_overview
// Definitions by: RockSandy <https://github.com/rockSandy>
//                 LynneXu <https://github.com/LynneXu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AsyncCallbackFailObject {
    error: number;
    errorMessage?: string;
    [key: string]: any;
}

interface AsyncCallback<T> {
    success?: (res: T) => void;
    fail?: (err: AsyncCallbackFailObject) => void;
    complete?: () => void;
}

interface SetNavigationBarArgs extends AsyncCallback<void> {
    /**
     * Navigation bar title.
     */
    title?: string;

    /**
     * Picture link address, must be https. Use 3x high-definition pictures. If the image is set, the title parameter is inactive.
     */
    image?: string;

    /**
     * Navigation bar background color, supporting hex color value.
     */
    backgroundColor?: string;

    /**
     * Navigation bar bottom border color, supporting hex color value If the backgroundColor is set, the borderBottomColor does not take effect. The backgroundColor is used by default.
     */
    borderBottomColor?: string;

    /**
     * If the navigation bar is reset to the default color scheme of Alipay, false by default.
     */
    reset?: boolean;
}

interface HideTabBarArgs extends AsyncCallback<void> {
    /**
     * Need animation effect or not, none by default.
     */
    animation?: boolean;
}

interface SwitchTabArgs extends AsyncCallback<void> {
    /**
     * Path of the jumping tabBar page (page to be defined in the
     * tabBar field in the app.json). Note: The path cannot be
     * followed by parameters.
     */
    url: string;
}

interface NavigateToArgs extends AsyncCallback<void> {
    /**
     * The application for thejumping does not include the destination
     * page path of the tabBar. The path can be followed by parameters.
     * Rules for the parameters: The path and parameter are separated
     * with ?, the parameter key and the parameter value are connected
     * with =, and different parameters must be separated with &, such
     * as path?key1=value1&key2=value2.
     */
    url: string;
}

interface NavigateBackArgs extends AsyncCallback<void> {
    /**
     * Number of pages to return. If delta is greater than the number
     * of open pages, it returns to the home page. Default value is 1
     */
    delta?: number;
}

interface RedirectToArgs extends AsyncCallback<void> {
    /**
     * The application for the jumping does not include the destination
     * page path of the tabBar. The path can be followed by parameters.
     * Rules for the parameters: The path and parameter are separated
     * with ?, the parameter key and the parameter value are connected
     * with =, and different parameters must be separated with &, such
     * as path?key1=value1&key2=value2.
     */
    url: string;
}

interface ReLaunchArgs extends AsyncCallback<void> {
    /**
     * Page path If the page is not a tabbar page, the path can be
     * followed by parameters. Rules for the parameters: The path and
     *  parameter are separated with ?, the parameter key and the
     * parameter value are connected with =, and different parameters
     *  must be separated with &, such as path?key1=value1&key2=value2.
     */
    url: string;
}

interface AlertArgs extends AsyncCallback<void> {
    /**
     * Title of the alert box.
     */
    title?: string;

    /**
     * Contents of the alert box.
     */
    content?: string;

    /**
     * Button text, which is OK by default.
     */
    buttonText?: string;
}

interface ConfirmArgs extends AsyncCallback<void> {
    /**
     * Title of the confirm box.
     */
    title?: string;
    /**
     * Content of the confirm box.
     */
    content?: string;
    /**
     * OK button text, which is “OK” by default.
     */
    confirmButtonText?: string;
    /**
     * OK button text, which is “Cancel” by default.
     */
    cancelButtonText?: string;
}

interface PromptArgs extends AsyncCallback<void> {
    /**
     * Title of prompt box.
     */
    title?: string;

    /**
     * Text of prompt box, which is “Enter contents here” by default.
     */
    message: string;

    /**
     * Prompt text for the entry box.
     */
    placeholder?: string;

    /**
     * Message alignment, supporting enumeration left/center/right, iOS center, android left.
     */
    align?: string;

    /**
     * OK button text, which is “OK” by default.
     */
    okButtonText?: string;

    /**
     * OK button text, which is “Cancel” by default.
     */
    cancelButtonText?: string;
}

interface ShowLoadingArgs extends AsyncCallback<void> {
    /**
     * Text contents of loading.
     */
    content?: string;

    /**
     * Displaying delay, in ms, 0 by default If my.hideLoading was
     * called before this time, it is not displayed.
     */
    delay?: number;
}

interface HideLoadingArgs {
    /**
     * Specifically it means the current page instance. In some
     * scenarios, it is required to specify the exact page for hideLoading.
     */
    page: any;
}

interface ShowToastArgs extends AsyncCallback<void> {
    /**
     * Text content.
     */
    content?: string;
    /**
     * toast type, showing the related icon, none by default,
     * supporting success/fail/exception/none Here. If it is exception, content is mandatory.
     */
    type?: string;

    /**
     * Displaying duration, in ms, 2000 by default.
     */
    duration?: number;
}

type ChoosePhoneContactArgs = AsyncCallback<{
    name: string;
    mobile: string;
}>;

interface CreateAnimationArgs {
    /**
     * Animation duration, in ms, 400 by default.
     */
    duration?: number;

    /**
     * Define animation effect, linear by default, effective
     *  values including linear, ease, ease-in, ease-in-out,
     * ease-out, step-start and step-end .
     */
    timeFunction?: string;

    /**
     * Animation delay, in ms, 0 by default.
     */
    delay?: number;

    /**
     * Set transform-origin, 50% 50% 0 by default.
     */
    transformOrigin?: string;
}

interface Animation {
    /**
     * Transparency, range 0~1.
     */
    opacity: (value: number) => Animation;

    /**
     * Color value.
     */
    backgroundColor: (color: string) => Animation;

    /**
     * Set the width:length values, in px, such as 300 px.
     */
    width: (value: number) => Animation;

    /**
     * Set the height:length values, in px, such as 300 px.
     */
    height: (value: number) => Animation;

    /**
     * Set the top:length values, in px, such as 300 px.
     */
    top: (value: number) => Animation;

    /**
     * Set the left:length values, in px, such as 300 px.
     */
    left: (value: number) => Animation;

    /**
     * Set the bottom:length values, in px, such as 300 px.
     */
    bottom: (value: number) => Animation;

    /**
     * Set the right:length values, in px, such as 300 px.
     */
    right: (value: number) => Animation;

    /**
     * deg range -180 ~ 180, rotate by deg degrees clockwise from origin.
     */
    rotate: (value: number) => Animation;

    /**
     * deg range -180 ~ 180, rotate by deg degrees on X axis.
     */
    rotateX: (value: number) => Animation;

    /**
     * deg range -180 ~ 180, rotate by deg degrees on Y axis.
     */
    rotateY: (value: number) => Animation;

    /**
     * deg range -180 ~ 180, rotate by deg degrees on Z axis.
     */
    rotateZ: (value: number) => Animation;

    /**
     * Same as [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d).
     */
    rotate3d: (x: number, y: number, z: number) => Animation;

    /**
     * When there is only one parameter, it indicates scaling sx
     * times on X and Y axises at the same time.
     *
     * When there are two parameters, it indicates scaling sx times
     * on X axis and sy times on Y axis.
     */
    scale: (sx: number, sy?: number) => Animation;

    /**
     * Scale sx times on X axis.
     */
    scaleX: (sx: number) => Animation;

    /**
     * Scale sy times on Y axis.
     */
    scaleY: (sy: number) => Animation;

    /**
     * Scale sz times on Z axis.
     */
    scaleZ: (sz: number) => Animation;

    /**
     * Scale sx times on X axis, sy times on Y axis and sz times on Z axis.
     */
    scale3d: (sx: number, sy: number, sz: number) => Animation;

    /**
     * When there is only one parameter, it indicates translating
     * by tx on X axis. When there are two parameters, it indicates
     * translating by tx on X axis and ty on Y axis.
     */
    translate: (tx: number, ty?: number) => Animation;

    /**
     * Translate by tx on X axis, in px.
     */
    translateX: (tx: number) => Animation;

    /**
     * Translate by ty on Y axis, in px.
     */
    translateY: (ty: number) => Animation;

    /**
     * Translate by ty on Z axis, in px.
     */
    translateZ: (tz: number) => Animation;

    /**
     * Translate by tx on X axis, ty on Y axis and tz on Z axis, in px.
     */
    translate3d: (tx: number, ty: number, tz: number) => Animation;

    /**
     * Range -180~180 When there is only one parameter, Y stays
     * unchanged and X skews by ax degrees clockwise. When there
     * are two parameters, X skews by ax degrees and Y skews by ay degrees.
     */
    skew: (ax: number, ay?: number) => Animation;

    /**
     * Range -180~180 Y stays unchanged and X skews by ax degrees clockwise. Degree.
     */
    skewX: (ax: number) => Animation;

    /**
     * Range -180~180 X stays unchanged and Y skews by ay degrees clockwise.
     */
    skewY: (ay: number) => Animation;

    /**
     * Same as [transform-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix).
     */
    matrix: (a: number, b: number, c: number, d: number, tx: number, ty: number) => Animation;

    /**
     * Same as [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d).
     */
    matrix3d: (
        a1: number,
        b1: number,
        c1: number,
        d1: number,
        a2: number,
        b2: number,
        c2: number,
        d2: number,
        a3: number,
        b3: number,
        c3: number,
        d3: number,
        a4: number,
        b4: number,
        c4: number,
        d4: number,
    ) => Animation;

    step: () => Animation;
}

interface CanvasContext {
    /**
     * Add a circular gradient point.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-addcolorstop)
     */
    addColorStop: (stop: number, color: string) => void;

    /**
     * Draw arc.
     * In order to create a circle, you can specify the start arc to 0 using `arc()` and
     * specify the end arc to `2 * Math.PI` . Use `stroke()` or `fill()` to draw arc in the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-arc)
     */
    arc: (x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean) => void;

    /**
     * Start to create a path, must use `fill` or `stroke` to fill or stroke the path.
     * In the beginning of creating the path, the `beginPath()` is
     * invoked. If the `setFillStyle()`, `setStrokeStyle()`, `setLineWidth()`
     * and others are invoked multiple times in the same path, only t
     * he last invoke will take effect.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-beginpath)
     */
    beginPath: () => void;

    /**
     * Create cubic Bézier curve path.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-beziercurveto)
     */
    bezierCurveTo: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void;

    /**
     * Clear the content in the rect.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-clearrect)
     */
    clearRect: (x: number, y: number, width: number, height: number) => void;

    /**
     * Set the created path as clipped path.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-clip)
     */
    clip: () => void;

    /**
     * Close a path. The close path will connect start point and end
     * point. If `fill()` or `stroke()` is not invoked and a new path
     *  is created after `closePath`, the former path will not be rendered.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-closepath)
     */
    closePath: () => void;

    /**
     * Create a circular gradient point, the start point is the center
     * of the circle and the end point is the ring. The `addColorStop()`
     * should be called to specify the gradient point and at least two
     * points should be specified.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-createcirculargradient)
     */
    createCircularGradient: (x: number, y: number, z: number) => void;

    /**
     * Create a linear gradient. The `addColorStop()` should be called
     * to specify the gradient point and at least two points should be specified.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-createlineargradient)
     */
    createLinearGradient: (x0: number, y0: number, x1: number, y1: number) => void;

    /**
     * Draw the description in the context such as path, style to the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-draw)
     */
    draw: (reserve?: boolean, callback?: () => void) => void;

    /**
     * Draw the image, and the image keeps the original size information.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-drawimage)
     */
    drawImage: (imageResource: string, x: number, y: number, width?: number, height?: number) => void;

    /**
     * Fill the current path. The default color is black.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-fill)
     */
    fill: () => void;

    /**
     * Fill the rect. `setFillStyle()` is used to set the color
     * of the fill, by default, its color is black.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-fillrect)
     */
    fillRect: (x: number, y: number, width: number, height: number) => void;

    /**
     * Fill the text in the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-filltext)
     */
    fillText: (text: string, x: number, y: number) => void;

    /**
     * Get the pixel data of the implicit area of the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-getimagedata)
     */
    getImageData: (
        args: {
            x: number;
            y: number;
            width: number;
            height: number;
        } & AsyncCallback<{
            width: number;
            height: number;
            data?: Uint8ClampedArray;
        }>,
    ) => void;

    /**
     * Add a new point, and line the last specified point to the
     * new point. stroke() can be used to draw the line.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-lineto)
     */
    lineTo: (x: number, y: number) => void;

    /**
     * CanvasContext.measureText| Mesure the size of the text, current
     * only the witch is returned, and it is a synchronous interface
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-measuretext)
     */
    measureText: (text: string) => void;

    /**
     * Move the path to the specified point, the line will not be created.
     *  `stroke()` can be used to draw the line
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-moveto)
     */
    moveTo: (x: number, y: number) => void;

    /**
     * Draw the pixel data into the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-putimagedata)
     */
    putImageData: (
        args: {
            data: Uint8ClampedArray;
            x: number;
            y: number;
            width: number;
            height: number;
        } & AsyncCallback<void>,
    ) => void;

    /**
     * Create a quadratic cubic Bezier curve path. The start point of the former point of the path.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-quadraticcurveto)
     */
    quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;

    /**
     * Draw a rect. Use `fill()` or `stroke()` to draw the rect to canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-rect)
     */
    rect: (x: number, y: number, width: number, height: number) => void;

    /**
     * Restore the saved context.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-restore)
     */
    restore: () => void;

    /**
     * Set the original point as the center, rotate the coordinate
     * clockwise. The angle will be added if rotate isinvoked multiple times.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-rotate)
     */
    rotate: (rotate: number) => void;

    /**
     * Save the context of the canvas.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-save)
     */
    save: () => void;

    /**
     * After the `scale` is invoked, the horizontal and vertical coordinate
     * of the path created subsequently will be scaled. The scale will be
     * multiplied if `scale` is invoked multiple times.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-scale)
     */
    scale: (scaleWidth: number, scaleHeight: number) => void;

    /**
     * Set the color of the fill.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setfillstyle)
     */
    setFillStyle: (color: string) => void;

    /**
     * Set the font size.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setfontsize)
     */
    setFontSize: (fontSize: number) => void;

    /**
     * Set the alpha of global brush.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setglobalalpha)
     */
    setGlobalAlpha: (alpha: number) => void;

    /**
     * Set the end ponit style of a line.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setlinecap)
     */
    setLineCap: (lineCap: string) => void;

    /**
     * https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setlinedash
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setlinedash)
     */
    setLineDash: (segments: number[]) => void;

    /**
     * Set the style of joint of lines.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setlinejoin)
     */
    setLineJoin: (lineJoin: string) => void;

    /**
     * Set the width of line.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setlinewidth)
     */
    setLineWidth: (lineWidth: number) => void;

    /**
     * Set the maximum miter length, which is the distance between the inner
     *  and outer angles at the intersection of the two lines. Only valid
     * when `setLineJoin()` is miter. Where the maximum length is exceeded,
     *  the join is displayed as lineJoin as bevel.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setmiterlimit)
     */
    setMiterLimit: (miterLimit: number) => void;

    /**
     * Set the style including location of color for shadow
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setshadow)
     */
    setShadow: (offsetX: number, offsetY: number, blur: number, color: string) => void;

    /**
     * Set the style of stroke. By default, it is black.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-setstrokestyle)
     */
    setStrokeStyle: (color: string) => void;

    /**
     * Align is a property of the Canvas 2D API that describes the alignment
     *  of text when it is drawn. The alignment is based on the x value of
     * CanvasRenderingContext2D.FillText method. If textAlign="center", the
     *  text will be drawn at 'x-50%*width'.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-settextalign)
     */
    setTextAlign: (textAlign: string) => void;

    /**
     * Set the properties of the current text baseline.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-settextbaseline)
     */
    setTextBaseline: (textBaseline: string) => void;

    /**
     * Reset the transform and invoke the transform by unit matrix, the
     * transform is described by the variable of the method.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-settransform)
     */
    setTransform: (
        scaleX: number,
        skewX: number,
        skewY: number,
        scaleY: number,
        translateX: number,
        translateY: number,
    ) => void;

    /**
     * Draw the stroke of the path.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-stroke)
     */
    stroke: () => void;

    /**
     * Draw a none-filled rect.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-strokerect)
     */
    strokeRect: (x: number, y: number, width: number, height: number) => void;

    /**
     * Get the data URL of specified area of canvas
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-todataurl)
     */
    toDataURL: (args?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        destWidth?: number;
        destHeight?: number;
        fileType?: string;
        quality?: number;
    }) => Promise<string>;

    /**
     * Export the canvas to an image and return the file path
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-totempfilepath)
     */
    toTempFilePath: (
        args: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            destWidth?: number;
            destHeight?: number;
            fileType?: string;
            quality?: number;
        } & AsyncCallback<{
            filePath: string;
        }>,
    ) => void;

    /**
     * A method in which a matrix is superimposed multiple times on the current
     * transformation, and the matrix is described by the parameters of the
     * method. You can scale, rotate, move, and tilt the context.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-transform)
     */
    transform: (
        scaleX: number,
        skewX: number,
        skewY: number,
        scaleY: number,
        translateX: number,
        translateY: number,
    ) => void;

    /**
     * Transfor the original point of the coordinate. The default orginal
     * point is the upper-left corner
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_canvas-context_canvascontext-translate)
     */
    translate: (x: number, y: number) => void;
}

interface PageScrollToArgs extends AsyncCallback<void> {
    scrollTo?: number;
    duration?: number;
    selector?: string;
}

interface SelectorQueryExecCallback {
    (ret: any): void;
}
interface SelectorQuery {
    /**
     * Put the location of the current selected node into the query
     * result. It is similar to the `getBoundingClientRect` of `DOM`,
     * the returned value includes width, height, left, top, bottom,
     * right. If current node is window object, only width and height will be returned.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-boundingclientrect)
     */
    boundingClientRect: () => SelectorQuery;

    /**
     * Put the query result into callback function. The query result
     * is an array according to the query sequence, the object in the
     *  array is the result of each query. If the selected node is
     * the list of node, the query result of the single query is also an array.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-exec)
     */
    exec: (callback: SelectorQueryExecCallback) => void;

    /**
     * Put the scroll information of current selected node into the
     * query result, the returned value includes scrollTop, scrollLeft.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-scrolloffset)
     */
    scrollOffset: () => SelectorQuery;

    /**
     * Select the first node that matches the selector, the selector
     * can support ID selector and class selector.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-select)
     */
    select: (value: string) => SelectorQuery;

    /**
     * Select all the nodes that match the selector, the selector can
     *  support ID selector and class selector.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-selectall)
     */
    selectAll: (value: string) => SelectorQuery;

    /**
     * The object of select window.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-selectviewport)
     */
    selectViewport: () => SelectorQuery;
}

interface MultiLevelSelectArgs
    extends AsyncCallback<{
        success: boolean;
        result: any[];
    }> {
    title?: string;
    list: any[];
    name: string;
    subList?: any[];
}

interface SetBackgroundColorArgs extends AsyncCallback<void> {
    /**
     * Window background color.
     */
    backgroundColor: string;

    /**
     * Top window background color, supported in iOS only.
     */
    backgroundColorTop: string;

    /**
     * Bottom window background color, supported in iOS only.
     */
    backgroundColorBottom: string;
}

interface ChooseImageArgs
    extends AsyncCallback<{
        apFilePaths: string[];
    }> {
    count?: number;
    sizeType?: string[];
    sourceType?: string[];
}

interface PreviewImageArgs extends AsyncCallback<void> {
    urls: string[];
    current?: number;
}

interface SaveImageArgs extends AsyncCallback<void> {
    url: string;
    showActionSheet?: boolean;
}

interface GetImageInfo
    extends AsyncCallback<{
        width: number;
        height: number;
        path: string;
        orientation: string;
        type: string;
    }> {
    src: string;
}

interface GetStorage extends AsyncCallback<{ data: any }> {
    key: string;
}

interface SetStorage extends AsyncCallback<void> {
    key: string;
    data: any;
}

interface RemoveStorageArgs extends AsyncCallback<void> {
    key: string;
}

interface SaveFileArgs extends AsyncCallback<{ apFilePath: string }> {
    apFilePath: string;
}

interface GetFileArgs extends AsyncCallback<{ size: number; digest: string }> {
    apFilePath: string;
    /**
     * Digest algorithm, supporting md5 and sha1, md5 by default.
     */
    digestAlgorithm?: string;
}

interface GetSavedFileInfo extends AsyncCallback<{ size: number; createTime: number }> {
    apFilePath: string;
}

type GetSavedFileListArgs = AsyncCallback<{
    fileList: Array<{
        size: number;
        createTime: number;
        apFilePath: string;
    }>;
}>;

interface RemoveSavedFileArgs extends AsyncCallback<void> {
    apFilePath: string;
}

interface GetLocationArgs
    extends AsyncCallback<{
        longitude: string;
        latitude: string;
        /**
         * Accuracy, in m.
         */
        accuracy: string;
    }> {
    /**
     * longitude and latitude location cache expiry time in seconds.
     * Default is 30s. Use of cache can speed up location process. Re-location is done upon cache expiry.
     */
    catchTimeout?: number;
    /**
     * 0: default, get the longitude and latitude.
     */
    type?: number;
}

interface RequestArgs
    extends AsyncCallback<{
        data: any;
        status: number;
        headers: any;
    }> {
    url: string;
    /**
     * Set the request HTTP header, default {'content-type': 'application/json'}.
     */
    headers?: {
        [key: string]: string;
    };
    method?: 'GET' | 'POST';
    data?: any;
    timeout?: number;
    /**
     * Expected return data format, default json, supporting json, text and base64.
     */
    dataType?: string;
}

interface UploadFileArgs
    extends AsyncCallback<{
        data: string;
        statusCode: string;
        header: any;
    }> {
    url: string;
    filePath: string;
    fileName: string;
    fileType: string;
    header?: any;
    formData?: any;
}

interface DownloadFileArgs extends AsyncCallback<{ apFilePath: string }> {
    url: string;
    header?: any;
}

type GetSystemInfoArgs = AsyncCallback<{
    /**
     * Cellphone model.
     */
    model: string;

    /**
     * Device pixel ratio.
     */
    pixelRatio: number;
    windowWidth: number;
    windowHeight: number;
    language: string;
    /**
     * App version number.
     */
    version: string;
    /**
     * Device disk capacity.
     */
    storage: string;
    /**
     * Current battery percentage.
     */
    currentBattery: string;
    /**
     * System version.
     */
    system: string;
    /**
     * System name: Android, iOS.
     */
    platform: string;
    titleBarHeight: number;
    statusBarHeight: number;
    screenWidth: number;
    screenHeight: number;
    /**
     * Cellphone brand.
     */
    brand: string;
    fontSizeSetting: number;
    /**
     * Current running client. The app value can refer to the following table.
     */
    app: string;
}>;

type GetNetworkTypeArgs = AsyncCallback<{
    networkAvailable: boolean;
    /**
     * Network type, UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN.
     */
    networkType: string;
}>;

type GetClipboardArgs = AsyncCallback<{ text: string }>;

interface SetClipboardArgs extends AsyncCallback<void> {
    text: string;
}

interface SetKeepScreenOnArgs extends AsyncCallback<void> {
    keepScreenOn: boolean;
}

interface SetScreenBrightnessArgs extends AsyncCallback<void> {
    /**
     * Screen brightness for the setting, range 0-1.
     */
    brightness: number;
}

interface AddPhoneContactArgs extends AsyncCallback<{ success: true }> {
    photoFilePath: string;
    nickName: string;
    lastName: string;
    middleName: string;
    firstName: string;
    remark: string;
    mobilePhoneNumber: string;
    addressCountry: string;
    addressState: string;
    addressCity: string;
    addressStreet: string;
    addressPostalCode: string;
    organization: string;
    title: string;
    workFaxNumber: string;
    workPhoneNumber: string;
    hostNumber: string;
    email: string;
    url: string;
    workAddressCountry: string;
    workAddressState: string;
    workAddressCity: string;
    workAddressStreet: string;
    workAddressPostalCode: string;
    homeFaxNumber: string;
    homePhoneNumber: string;
    homeAddressCountry: string;
    homeAddressState: string;
    homeAddressCity: string;
    homeAddressStreet: string;
    homeAddressPostalCode: string;
}

interface ShowAuthGuideArgs
    extends AsyncCallback<{
        /**
         * When shown is true, it indicates the permission guide
         * pop-up will be shown; when it is false, it indicates
         * the user has allowed the permission.
         */
        shown: boolean;
    }> {
    /**
     * Identifier of the permission under guide, used to identify
     * the type of the permission (such as LBS).
     */
    authType: string;
}

interface ScanArgs
    extends AsyncCallback<{
        code: string;
        qrCode?: string;
        barCode?: string;
    }> {
    /**
     * Type for scanning (qr by default):
     * 1. qr: two-dimensional QR scanning frame.
     * 2. bar: Linear barcode scanning frame.
     */
    type?: 'qr' | 'bar';

    /**
     * Hide album entry or not. If it is false, there will be an entry
     * for user to select a picture from the album as the scanned picture.
     * Otherwise, user will use camera to scan the content directly. By default, its value is false.
     */
    hideAlbum?: boolean;
}

interface WebViewContext {
    /**
     * `webViewContext` is bound with a `web-view` component via webviewId to
     * implement some functions. List of `webViewContext` object methods:
     */
    postMessage: (msg: any) => void;
}

interface NavigateToMiniProgramArgs extends AsyncCallback<void> {
    appId: string;
    path?: string;
    /**
     * The extra data that needs to be passed to the target Mini Program,
     * and the target Mini Program can get it in `App.onLaunch()` or `App.onShow()`.
     */
    extraData?: any;
}

interface NavigateBackMiniProgramArgs extends AsyncCallback<void> {
    /**
     * The extra data that needs to be returned to the target Mini Program,
     *  and the target Mini Program can get it in `App.onLaunch()` or `App.onShow()`.
     */
    extraData: any;
}

interface GetAuthCodeArgs
    extends AsyncCallback<{
        authCode: string;
        authErrorScopes: any;
        authSuccessScopes: string[];
    }> {
    /**
     * The scope of auth, there are 12 types:
     * `USER_ID`,
     * `USER_NICKNAME`,
     * `USER_NAME`, `USER_LOGIN_ID`,
     * `HASH_LOGIN_ID`,
     * `USER_AVATAR`, `USER_GENDER`,
     * `USER_BIRTHDAY`,
     * `USER_NATIONALITY`,
     * `USER_CONTACTINFO`,
     * `auth_base`,
     * `auth_user`.
     */
    scopes: string | string[];
}

type GetOpenUserInfoArgs = AsyncCallback<{
    response: string;
}>;

interface TradePayArgs extends AsyncCallback<string> {
    tradeNO?: string;
    orderStr?: string;
    paymentUrl?: string;
}

interface SignContract
    extends AsyncCallback<{
        authState: string;
        authCode: string;
    }> {
    signStr: string;
}

interface MiniprogramApi {
    /**
     * Show the navigation bar loading
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_navigationbar_shownavigationbarloading)
     */
    showNavigationBarLoading: () => void;

    /**
     * hideNavigationBarLoading
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_navigationbar_hidenavigationbarloading)
     */
    hideNavigationBarLoading: () => void;

    /**
     * Set the navigation bar text and style.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_navigationbar_setnavigationbar)
     */
    setNavigationBar: (args: SetNavigationBarArgs) => void;

    /**
     * Hide tabbar.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_tabbar_hidetabbar)
     */
    hideTabBar: (args: HideTabBarArgs) => void;

    /**
     * Jump to the specified tabBar page and close all other pages that are not tabBar.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_route_switchtab)
     */
    switchTab: (args: SwitchTabArgs) => void;

    /**
     * Maintain the current page and jump to the specified page within
     * the application. Use `my.navigateBack` to return to the original page.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_route_navigateto)
     */
    navigateTo: (args: NavigateToArgs) => void;

    /**
     * Close the current page and return to the previous one or more
     * pages. It is possible to use `getCurrentPages` to get the
     * current page stack information and decide how many levels to return.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_route_navigateback)
     */
    navigateBack: (args: NavigateBackArgs) => void;

    /**
     * Close the current page and jump to the specified page within the application.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_route_redirectto)
     */
    redirectTo: (args: RedirectToArgs) => void;

    /**
     * Close all current pages and jump to the specified page within
     * the application.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_route_relaunch)
     */
    reLaunch: (args: ReLaunchArgs) => void;

    /**
     * Alert box
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_alert)
     */
    alert: (args?: AlertArgs) => void;

    /**
     * Confirm box.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_confirm)
     */
    confirm: (args: ConfirmArgs) => void;

    /**
     * Pop up a dialog to show the prompt message.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_prompt)
     */
    prompt: (args: PromptArgs) => void;

    /**
     * Show the loading dialog.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_showloading)
     */
    showLoading: (args?: ShowLoadingArgs) => void;

    /**
     * Hide the loading dialog.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_hideloading)
     */
    hideLoading: (args?: HideLoadingArgs) => void;

    /**
     * Show the toast dialog, which disappears with the specified duration.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_showtoast)
     */
    showToast: (args?: ShowToastArgs) => void;

    /**
     * Hide the toast dialog.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_feedback_hidetoast)
     */
    hideToast: () => void;

    /**
     * Start the pull-to-refresh function. The pull-to-refresh animation
     * is triggered upon the code execution, which is consistent with the manual pull-to-refresh effect.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_pulldown_startpulldownrefresh)
     */
    startPullDownRefresh: () => void;

    /**
     * Stop the pull-to-refresh for the current page.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_pulldown_stoppulldownrefresh)
     */
    stopPullDownRefresh: () => void;

    /**
     * Select the phone number of a contact in the local system directory.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_contact_choosephonecontact)
     */
    choosePhoneContact: (args: ChoosePhoneContactArgs) => void;

    /**
     * Create an animation instance. Call the instance method to
     * describe animation, and then use the `export` method of
     * animation instance to export the animation data and transfer
     * to the component `animation` attribute.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_animation_createanimation)
     */
    createAnimation: (args?: CreateAnimationArgs) => Animation;

    /**
     * Create [canvas](https://miniprogram.alipay.com/docs/miniprogram/mpdev/component_canvas_canvas)
     * context This canvas context works on the `<canvas/>` of the corresponding `canvasId` only.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_canvas_createcanvascontext)
     */
    createCanvasContext: (canvasId: string) => CanvasContext;

    /**
     * Hide the keyboard.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_keyboard_hidekeyboard)
     */
    hideKeyboard: () => void;

    /**
     * Scroll to the target position on the page
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_scroll_pagescrollto)
     */
    pageScrollTo: (args: PageScrollToArgs) => void;

    /**
     * Return a [SelectorQuery](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_query_selectorquery-overview) object instance.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_selector-query_createselectorquery)
     */
    createSelectorQuery: () => SelectorQuery;

    /**
     * Cascade selection function, mainly used for selecting several
     *  levels of associated data, such as province, city and district.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_multi-level-select_multilevelselect)
     */
    multiLevelSelect: (args: MultiLevelSelectArgs) => void;

    /**
     * Dynamically set window background color.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_set-background_setbackgroundcolor)
     */
    setBackgroundColor: (args: SetBackgroundColorArgs) => void;

    /**
     * Set whether to support pull-down on the page (supported by
     * default on Mini Program pages).
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_ui_set-pulldown_setcanpulldown)
     */
    setCanPullDown: (args: { canPullDown: boolean }) => void;

    /**
     * Choose an image from the camera or gallery of a device.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_media_image_chooseimage)
     */
    chooseImage: (args: ChooseImageArgs) => void;

    /**
     * The Preview image's "local image path" is not supported.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_media_image_previewimage)
     */
    previewImage: (args: PreviewImageArgs) => void;

    /**
     * Save the online images to a device camera gallery.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_media_image_saveimage)
     */
    saveImage: (args: SaveImageArgs) => void;

    /**
     * Get picture information.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_media_image_getimageinfo)
     */
    getImageInfo: (args: GetImageInfo) => void;

    /**
     * Get cached data.
     *
     * This is an asynchronous interface.
     *
     * support the isolation between embedded webview cache and Mini Program
     * cache. Getting the cache of the specified key of embedded webview
     * ill not return the cached data of the same key of the Mini Program.
     *
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_getstorage)
     */
    getStorage: (args: GetStorage) => void;

    /**
     * Get cached data synchronously.
     *
     * This is a synchronous interface.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_getstoragesync)
     */
    getStorageSync: (args: { key: string }) => { data: any };

    /**
     * Store the data with a specified key in the local cache. This
     * will overlaps\ the original data using the same key.
     *
     * This is an asynchronous interface.
     *
     * Support the isolation of webview-embedded storage and the Mini Program
     *  storage. Specifying key storage data in embedded  webview does not
     *  overlap the data corresponding to the same key of the Mini Program itself.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_setstorage)
     */
    setStorage: (args: SetStorage) => void;

    /**
     * Store synchronously the data in the specified key in the local cache.
     *
     * This is a synchronous interface.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_setstoragesync)
     */
    setStorageSync: (args: { key: string; data: any }) => void;

    /**
     * Remove cached data.
     *
     * This is an asynchronous interface.
     *
     * Removing the webview embedded storage data will not remove the
     * storage data of the Mini Program.
     */
    removeStorage: (args: RemoveStorageArgs) => void;

    /**
     * Remove cached data synchronously.
     *
     * This is a synchronous interface.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_removestoragesync)
     */
    removeStorageSync: (args: { key: string }) => void;

    /**
     * Clear local data cache.
     *
     * This is an asynchronous interface.
     *
     * Clearing the webview embedded storage data will not clear the storage data of the Mini Program.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_clearstorage)
     */
    clearStorage: () => void;

    /**
     * Clear local data cache synchronously.
     *
     * This is a synchronous interface.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_storage_clearstoragesync)
     */
    clearStorageSync: () => void;

    /**
     * Save file in a local position (total capacity of local file size is limited to 10 MB).
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_savefile)
     */
    saveFile: (args: SaveFileArgs) => void;

    /**
     * Get file information.
     *
     * https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_getfileinfo
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_getfileinfo)
     */
    getFileInfo: (args: GetFileArgs) => void;

    /**
     * Get saved file information.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_getsavedfileinfo)
     */
    getSavedFileInfo: (args: GetSavedFileInfo) => void;

    /**
     * Get information of all saved files.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_getsavedfilelist)
     */
    getSavedFileList: (args: GetSavedFileListArgs) => void;

    /**
     * Delete a saved file.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_file_removesavedfile)
     */
    removeSavedFile: (args: RemoveSavedFileArgs) => void;

    /**
     * Get the current geographical location of the user.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_location_getlocation)
     */
    getLocation: (args: GetLocationArgs) => void;

    /**
     * Network request of a Mini Program.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_network_request)
     */
    request: (args: RequestArgs) => void;

    /**
     * Upload the local resource to the server.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_network_uploadfile)
     */
    uploadFile: (args: UploadFileArgs) => void;

    /**
     * Download a file resource to a local location.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_network_downloadfile)
     */
    downloadFile: (args: DownloadFileArgs) => void;

    /**
     * Check whether the current Mini Program API, incoming parameter
     *  or return value, component, attribute, etc. are supported in the current version.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_caniuse_caniuse)
     */
    canIUse: (value: string) => boolean;

    /**
     * Get the version of basic library (for reference only). Do not rely on this value for code logic.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_sdk_sdkversion)
     */
    SDKVersion: string;

    /**
     * Get system information
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_system_getsysteminfo)
     */
    getSystemInfo: (args: GetSystemInfoArgs) => void;

    /**
     * Get the current network status.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_network_getnetworktype)
     */
    getNetworkType: (args: GetNetworkTypeArgs) => void;

    /**
     * Get the clipboard data.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_clipboard_getclipboard)
     */
    getClipboard: (args: GetClipboardArgs) => void;

    /**
     * Set the clipboard data.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_clipboard_setclipboard)
     */
    setClipboard: (args: SetClipboardArgs) => void;

    /**
     * Call the device vibrate function
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_vibrate_vibrate)
     */
    vibrate: (args: AsyncCallback<void>) => void;

    /**
     * Make a phone call.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_call_makephonecall)
     */
    makePhoneCall: (args: { number: string }) => void;

    /**
     * Get current server time in milliseconds
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_server_getservertime)
     */
    getServerTime: (args: AsyncCallback<{ time: number }>) => void;

    /**
     * Listen to the user-initiated active screen capture event. This
     * will receive all the screen capture event notification of the system or a third-party tool.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_capture_onusercapturescreen)
     */
    onUserCaptureScreen: (args: () => void) => void;

    /**
     * Cancel screen capture listener event. This is usually paired
     * with `my.onUserCaptureScreen`.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_capture_offusercapturescreen)
     */
    offUserCaptureScreen: (args?: () => void) => void;

    /**
     * Version requirements: Basic library 1.3.0 or higher version.
     * If the version is low, you can programmatically check for Compatibility.
     *
     * Set whether to keep screen on Takes effect in the current Mini Program only
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_screen_setkeepscreenon)
     */
    setKeepScreenOn: (args: SetKeepScreenOnArgs) => void;

    /**
     * Version requirements: Basic library 1.4.0 or higher version.
     * If the version is low, you can programmatically check for Compatibility.
     *
     * Get screen brightness
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_screen_getscreenbrightness)
     */
    getScreenBrightness: (args: AsyncCallback<{ brightness: number }>) => void;

    /**
     * Version requirements: Basic library 1.4.0 or higher version.
     *  If the version is low, you can programmatically check for Compatibility.
     *
     * Set screen brightness
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_screen_setscreenbrightness)
     */
    setScreenBrightness: (args: SetScreenBrightnessArgs) => void;

    /**
     * This form enables the user to write the form into phone contacts
     * via create contacts or add to existing contacts
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_add-contact_addphonecontact)
     */
    addPhoneContact: (args: Partial<AddPhoneContactArgs>) => void;

    /**
     * Pop up dialog for user in form of (image, text, etc.) via the
     * permission guide module. To advice the user to turn on the
     * related permission. The permission guide is used to advice rather
     * than to validate the permission. The call timing is when the
     * service party confirms the required permission is limited. In
     *  addition, the permission guide pop-up is subject to fatigue and other factors.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_permission_showauthguide)
     */
    showAuthGuide: (args: ShowAuthGuideArgs) => void;

    /**
     * Call the scan QR code or bar code function.
     *
     * Hint: after calling my.scan API, the `onHide()` and `onShow()` lifecycle
     * callback function of `App` and `Page` will be executed.
     * The following is the executing sequence:
     *
     * `App.onHide()` -> `Page.onHide()` -> `App.onShow()` -> `Page.onShow()`.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_device_scan_scan)
     */
    scan: (args: ScanArgs) => void;

    /**
     * By creating `webviewContext`, it creates the capability to send
     * messages from Mini Program to `web-view`. Create and return
     * `web-view` context `webViewContext` object.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_web-view_createwebviewcontext)
     */
    createWebViewContext: (id: string) => WebViewContext;

    /**
     * Use this API to obtain the site information assigned by Alipay
     *  Connect which is used in Alipay Connect business, such as the site name.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_alipay-connect_getsiteinfo)
     */
    getSiteInfo: (args: AsyncCallback<{ siteName: string }>) => void;

    /**
     * Jump to another Mini Program.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_navigatetominiprogram)
     */
    navigateToMiniProgram: (args: NavigateToMiniProgramArgs) => void;

    /**
     * Return to the previous Mini Program. Only used for when another Mini Program jumps back to the foregrounded Mini Program.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_navigatebackminiprogram)
     */
    navigateBackMiniProgram: (args: NavigateBackMiniProgramArgs) => void;

    /**
     * Call the API to obtain the authorization code (authCode).
     * The authorization code can be used to obtain access token,
     * so as to easily obtain the app user userId, nickname, etc.
     *
     * For more information, please refer to the [user authorization](https://miniprogram.alipay.com/docs/miniprogram/mpdev/API_OpenAPI_userAuthorization)
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_getauthcode)
     */
    getAuthCode: (args: GetAuthCodeArgs) => void;

    /**
     * Get the basic information about a user. This feature requires
     * the user to deliberately trigger to activate the function.
     * This function is not directly called by the API but rather waits
     * for when the user has activated it by clicking a `<button>` component.
     * If the Mini Program wants to get userId, please call `my.getAuthCode` .
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_getopenuserinfo)
     */
    getOpenUserInfo: (args: GetOpenUserInfoArgs) => void;

    /**
     * Start a payment transaction.
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_tradepay)
     */
    tradePay: (args: TradePayArgs) => void;

    /**
     * Use this API to redirect the user to the authorization page
     *
     * [Docs Link](https://miniprogram.alipay.com/docs/miniprogram/mpdev/api_openapi_signcontract)
     */
    signContract: (args: SignContract) => void;
}

declare const my: MiniprogramApi;

interface LaunchQuery {
    /**
     * Current Mini Program query, parsed from the query field in the startup parameter
     */
    query: any;
    path: string;
    referrerInfo?: {
        appId: string;
        sourceServiceId: string;
        extraData: any;
    };
}

declare function App(obj: {
    /**
     * On completion of Mini Program initialization, invoked only once
     */
    onLaunch?: (options?: LaunchQuery) => void;

    /**
     * On startup of Mini Program or swithing to foreground from background
     */
    onShow?: (options?: LaunchQuery) => void;

    /**
     * On switching Mini Program from foreground to background
     */
    onHide?: () => void;

    /**
     * On js error of the Mini Program
     */
    onError?: (error: string) => void;

    /**
     * Global data can be configured in `App()`. Other pages can get and modify the global data directly.
     */
    globalData?: any;

    [key: string]: any;
}): void;

declare function getApp(): any;

interface EmptyFn {
    (): void;
}
interface OnPullDownRefresh {
    (opts: { form: 'manual' | 'code' }): void;
}

interface OnTabItemTap {
    (obj: { from: string; pagePath: string; text: string; index: number }): void;
}

declare function Page(
    obj: {
        data?: any;

        /**
         * Page loading
         */
        onLoad?: (query?: any) => void;
        onShow?: EmptyFn;
        /**
         * Page loading complete
         */
        onReady?: EmptyFn;
        onHide?: EmptyFn;
        onUnload?: EmptyFn;
        onTitleClick?: EmptyFn;
        onPullDownRefresh?: OnPullDownRefresh;
        onPullIntercept?: EmptyFn;
        onReachBottom?: EmptyFn;
        onShareAppMessage?: (opts: any) => void;
        onOptionMenuClick?: EmptyFn;
        onPopMenuClick?: EmptyFn;
        onTabItemTap?: OnTabItemTap;
        onPageScroll?: (opts: { scrollTop: number }) => void;
        events?: {
            onBack?: EmptyFn;
            onKeyboardHeight?: EmptyFn;
            onOptionMenuClick?: EmptyFn;
            onPopMenuClick?: EmptyFn;
            onPullIntercept?: EmptyFn;
            onPullDownRefresh?: OnPullDownRefresh;
            onTitleClick?: EmptyFn;
            onTabItemTap?: OnTabItemTap;
            beforeTabItemTap?: EmptyFn;
            onResize?: (opts: {
                size: {
                    windowWidth: number;
                    windowHeight: number;
                };
            }) => void;
        };

        [key: string]: any;
    } & ThisType<{
        readonly data: any;
        readonly route: string;
        setData: (data: any, cb?: EmptyFn) => void;
        $spliceData: (data: any, cb?: EmptyFn) => void;
        $batchedUpdates: (cb: EmptyFn) => void;

        [key: string]: any;
    }>,
): void;

declare function getCurrentPages(): any[];
