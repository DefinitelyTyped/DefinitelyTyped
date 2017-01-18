// Type definitions for jui-core 2.0
// Project: https://github.com/juijs/jui-core
// Definitions by: JinHo Park <https://github.com/easylogic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

declare var jui: JuiStatic;

interface UtilBase {
    /**
     * @property browser check browser agent
     * @property {Boolean} browser.webkit  Webkit 브라우저 체크
     * @property {Boolean} browser.mozilla  Mozilla 브라우저 체크
     * @property {Boolean} browser.msie  IE 브라우저 체크 */
    browser: {
        webkit: boolean,
        mozilla: boolean,
        msie: boolean
    };

    /**
     * @property {Boolean} isTouch
     * check touch device
     */
    isTouch: boolean;

    /**
     * @method inherit
     *
     * 프로토타입 기반의 상속 제공
     *
     * @param {Function} ctor base Class
     * @param {Function} superCtor super Class
     */
    inherit( ctor: ((...args: any[]) => any), superCtor: ((...args: any[]) => any) ): void;

    /**
     * @method extend
     *
     * implements object extend
     *
     * @param {Object|Function} origin
     * @param {Object|Function} add
     * @param {Boolean} skip
     * @return {Object}
     */
    extend(origin: any, add: any, skip: boolean): any;

    /**
     * convert px to integer
     * @param {String or Number} px
     * @return {Number}
     */
    pxToInt(px: string| number): number;

    /**
     * @method clone
     * implements object clone
     * @param {Array/Object} obj 복사할 객체
     * @return {Array}
     */
    clone(obj: any): any[];

    /**
     * @method deepClone
     * implements object deep clone
     * @param obj
     * @param emit
     * @return {*}
     */
    deepClone(obj: any, emit: any): any[];

    /**
     * @method sort
     * use QuickSort
     * @param {Array} array
     * @return {QuickSort}
     */
    sort(array: any[]): UtilQuickSort;

    /**
     * @method runtime
     *
     * caculate callback runtime
     *
     * @param {String} name
     * @param {Function} callback
     */
    runtime(name: string, callback: ((...args: any[]) => void)): void;

    /**
     * @method template
     * parsing template string
     * @param html
     * @param obj
     */
    template(html: string, obj?: any): ((obj: any) => string) | string;

    /**
     * @method resize
     * add event in window resize event
     * @param {Function} callback
     * @param {Number} ms delay time
     */
    resize(callback: ((...args: any[]) => void), ms: number): void;

    /**
     * @method index
     *
     * IndexParser 객체 생성
     *
     * @return {KeyParser}
     */
    index(): UtilKeyParser;

    /**
     * @method chunk
     * split array by length
     * @param {Array} arr
     * @param {Number} len
     * @return {Array}
     */
    chunk(arr: any[], len: number): any[];

    /**
     * @method typeCheck
     * check data  type
     * @param {String} t  type string
     * @param {Object} v value object
     * @return {Boolean}
     */
    typeCheck(typeName: string, value: any): boolean;


    typeCheckObj(uiObj: any, list: any): void;

    /**
     * @method dataToCsv
     *
     * data 를 csv 로 변환한다.
     *
     * @param {Array} keys
     * @param {Array} dataList
     * @param {Number} dataSize
     * @return {String}  변환된 csv 문자열
     */
    dataToCsv(keys: string[] , dataList: any[], dataSize: number): string;

    /**
     * @method dataToCsv2
     *
     * @param {Object} options
     * @return {String}
     */
    dataToCsv2(options: any): string;

    /**
     * @method fileToCsv
     *
     * file 에서 csv 컨텐츠 로드
     *
     * @param {File} file
     * @param {Function} callback
     */
    fileToCsv(fileText: string, callback: ((data: any) => void)): void;

    /**
     * @method csvToBase64
     *
     * csv 다운로드 링크로 변환
     *
     * @param {String} csv
     * @return {String} data uri string
     */
    csvToBase64(csv: string): string;

    /**
     * @method csvToData
     *
     * @param {Array} keys
     * @param {String} csv
     * @param {Number} csvNumber
     * @return {Array}
     */
    csvToData(keys: string[], csv: string, csvNumber: number): any[];

    /**
     * @method getCsvFields
     *
     * csv 에서 필드 얻어오기
     *
     * @param {Array} fields
     * @param {Array} csvFields
     * @return {Array}
     */
    getCsvFields(fields: string[], csvFields: string[]): string[];

    /**
     * @method svgToBase64
     *
     * xml 문자열로 svg datauri 생성
     *
     * @param {String} xml
     * @return {String} 변환된 data uri 링크
     */
    svgToBase64(xml: string): string;

    /**
     * @method dateFormat
     *
     * implements date format function
     *
     * yyyy : 4 digits year
     * yy : 2 digits year
     * y : 1 digit year
     *
     * @param {Date} date
     * @param {String} format   date format string
     * @param {Boolean} utc
     * @return {string}
     */
    dateFormat(date: Date, format: string, utc?: boolean): string;

    /**
     * @method createId
     *
     * 유니크 아이디 생성
     *
     * @param {String} key  prefix string
     * @return {String} 생성된 아이디 문자열
     */
    createId(key: string): string;

    /**
     * @method btoa
     *
     * Base64 인코딩
     *
     * @return {String}
     */
    btoa(input: any): string;

    /**
     * @method atob
     *
     * Base64 디코딩
     *
     * @return {Any}
     */
    atob(input: string): any;

    /**
     * implement async loop without blocking ui
     *
     * @param {Number} total   loop count
     * @param {Object} context
     * @returns {Function}
     */
    timeLoop(total: number, context?: any): ((index: number) => void);

    /**
     * @method loop
     *
     * 최적화된 루프 생성 (5단계로 나눔)
     *
     * @param {Number} total   loop count
     * @param {Object} [context=null]
     * @return {Function} 최적화된 루프 콜백 (index, groupIndex 2가지 파라미터를 받는다.)
     */
    loop(total: number, context?: any): ((index: number, groupIndex: number) => void );

    /**
     * @method loopArray
     *
     * 배열을 사용해서 최적화된 루프로 생성한다.
     *
     *
     * @param {Array} data 루프로 생성될 배열
     * @param {Object} [context=null]
     * @return {Function} 최적화된 루프 콜백 (data, index, groupIndex 3가지 파라미터를 받는다.)
     */
    loopArray(data: any[], context?: any): ((data: any, index: number, groupIndex: number) => void );

    /**
     * @method makeIndex
     *
     * 배열의 키 기반 인덱스를 생성한다.
     *
     * 개별 값 별로 멀티 인덱스를 생성한다.
     *
     * @param {Array} data
     * @param {String} keyField
     * @return {Object} 생성된 인덱스
     */
    makeIndex(data: any[], keyField: string): any;

    /**
     * @method startsWith
     * Check that it matches the starting string search string.
     *
     * @param {String} string
     * @param {String} searchString
     * @param {Number} [position=0]
     * @return {Number} position
     */
    startsWith(str: string, searchString: string, position?: number): number;

    /**
     * @method endsWith
     * Check that it matches the end of a string search string.
     *
     * @param {String} string
     * @param {String} searchString
     * @return {Number} position
     */
    endsWith(str: string, searchString: string, position?: number): number;

    inArray(target: any, list: any[]): number;


    trim(text: string): string;

    ready: ((...args: any[]) => void);

    param(data: any): string;

    ajax(data: any): void;

    scrollWidth(): number;
}

interface JuiStatic {
    /**
     * @method ready
     *
     * ready 타임에 실행될 callback 정의
     *
     * @param {Function} callback
     */
    ready(depends?: string[], callback?: (...args: any[]) => void): void;

    /**
     * @method defineUI
     *
     * 사용자가 실제로 사용할 수 있는 UI 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     */
    defineUI(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * @method define
     *
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param {String} parent 상속받을 클래스
     */
    define(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * @method redefine
     *
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param {String} name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param {Array} depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param {Function} callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param {String} parent 상속받을 클래스
     */
    redefine(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * define과 defineUI로 정의된 클래스 또는 객체를 가져온다.
     *
     * @param name 가져온 클래스 또는 객체의 이름
     * @return {*}
     */
    include(name: string): any;

    /**
     * define과 defineUI로 정의된 모든 클래스와 객체를 가져온다.
     *
     * @return {Array}
     */
    includeAll(): any[];

    /**
    * @method add
    * Adds a component object created
    *
    * @param {Object} ui UI instance
    */
    add(uiIns: any): void;


    /**
     * @method emit
     * Generates a custom event to an applicable component
     *
     * @param {String} key Selector or UI type
     * @param {String} type Event type
     * @param {Array} args Event arguments
     */
     emit(key: string, type: string, args: any[]): void;

    /**
     * @method get
     * Gets a component currently created
     *
     * @param {Integer/String} key
     * @returns {Object/Array} UI instance
     */
     get(key: number|string): any;

    /**
     * @method getAll
     * Gets all components currently created
     *
     * @return {Array} UI instances
     */
     getAll(): any[];

    /**
     * @method create
     * It is possible to create a component dynamically after the ready point
     *
     * @param {String} type UI type
     * @param {String/DOMElement} selector
     * @param {Object} options
     * @return {Object}
     */
     create(type: string, selector: any, options?: {}): any;
}

interface UICollection {
    destroy(): void;
}

interface UICore {

    tpl?: any;

    event?: any;

    root?: any;

    /**
     * @method emit
     * Generates a custom event. The first parameter is the type of a custom event. A function defined as an option or on method is called
     *
     * @param {String} type Event type
     * @param {Function} args Event Arguments
     * @return {Mixed}
     */
      emit(type: string, args: () => void): any;

    /**
     * @method on
     * A callback function defined as an on method is run when an emit method is called
     *
     * @param {String} type Event type
     * @param {Function} callback
     */
     on(type: string, callback: () => void): void;

    /**
     * @method off
     * Removes a custom event of an applicable type or callback handler
     *
     * @param {String} type Event type
     */
      off(type: string): void;

    /**
     * @method addValid
     * Check the parameter type of a UI method and generates an alarm when a wrong value is entered
     *
     * @param {String} name Method name
     * @param {Array} params Parameters
     */
     addValid(name: string, params: any[]): void;

    /**
     * @method callBefore
     * Sets a callback function that is called before a UI method is run
     *
     * @param {String} name Method name
     * @param {Function} callback
     * @return {Mixed}
     */
     callBefore(name: string, callback: () => void): void;

    /**
     * @method callAfter
     * Sets a callback function that is called after a UI method is run
     *
     * @param {String} name Method name
     * @param {Function} callback
     * @return {Mixed}
     */
     callAfter(name: string, callback: () => void): void;

    /**
     * @method callDelay
     * Sets a callback function and the delay time before/after a UI method is run
     *
     * @param {String} name Method name
     * @param {Function} callback
     */
     callDelay(name: string, callObj: () => void): void;

    /**
     * @method setTpl
     * Dynamically defines the template method of a UI
     *
     * @param {String} name Template name
     * @param {String} html Template markup
     */
     setTpl(name: string, html: string): void;

    /**
     * @method setOption
     * Dynamically defines the options of a UI
     *
     * @param {String} key
     * @param {Mixed} value
     */
     setOption(key: string, value: any): void;

    /**
     * @method destroy
     * Removes all events set in a UI obejct and the DOM element
     *
     */
     destroy(): void;
}

//noinspection TypeScriptUnresolvedVariable
export interface UIEvent extends UICore {

    root?: any;

    /**
     * @method find
     * Get the child element of the root element
     *
     * @param {String/HTMLElement} Selector
     * @returns {*|jQuery}
     */
     find(selector: any): JQuery;
}

export class ColorScale {
    domain(color: string, color2: string): this;
    ticks(max: number): this;
}

export interface UtilColor {
    /**
     * @method format
     *
     * convert color to format string
     *
     *     // hex
     *     color.format({ r : 255, g : 255, b : 255 }, 'hex')  // #FFFFFF
     *
     *     // rgb
     *     color.format({ r : 255, g : 255, b : 255 }, 'rgb') // rgba(255, 255, 255, 0.5);
     *
     *     // rgba
     *     color.format({ r : 255, g : 255, b : 255, a : 0.5 }, 'rgb') // rgba(255, 255, 255, 0.5);
     *
     * @param {Object} obj  obj has r, g, b and a attributes
     * @param {"hex"/"rgb"} type  format string type
     * @returns {*}
     */
    format(obj: any, type: string): string;

    /**
     * @method scale
     *
     * get color scale
     *
     * 		var c = color.scale().domain('#FF0000', '#00FF00');
     *
     * 		// get middle color
     * 		c(0.5)   ==  #808000
     *
     * 		// get middle color list
     * 		c.ticks(20);  // return array ,    [startColor, ......, endColor ]
     *
     * @returns {func} scale function
     */
    scale(): ColorScale;

    /**
     * @method map
     *
     * create color map
     *
     * 		var colorList = color.map(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count)
     *
     * @param {Array} color_list
     * @param {Number} count  a divide number
     * @returns {Array} converted color list
     */
    map(color_list: string[], count: number): string[];

    /**
     * @method rgb
     *
     * parse string to rgb color
     *
     * 		color.rgb("#FF0000") === { r : 255, g : 0, b : 0 }
     *
     * 		color.rgb("rgb(255, 0, 0)") == { r : 255, g : 0, b : }
     *
     * @param {String} str color string
     * @returns {Object}  rgb object
     */
    rgb(str: string): any;

    /**
     * @method HSVtoRGB
     *
     * convert hsv to rgb
     *
     * 		color.HSVtoRGB(0,0,1) === #FFFFF === { r : 255, g : 0, b : 0 }
     *
     * @param {Number} H  hue color number  (min : 0, max : 360)
     * @param {Number} S  Saturation number  (min : 0, max : 1)
     * @param {Number} V  Value number 		(min : 0, max : 1 )
     * @returns {Object}
     */
    HSVtoRGB(H: number, S: number, V: number): any;

    /**
     * @method RGBtoHSV
     *
     * convert rgb to hsv
     *
     * 		color.RGBtoHSV(0, 0, 255) === { h : 240, s : 1, v : 1 } === '#FFFF00'
     *
     * @param {Number} R  red color value
     * @param {Number} G  green color value
     * @param {Number} B  blue color value
     * @return {Object}  hsv color code
     */
    RGBtoHSV(R: number, G: number, B: number): any;

    /**
     * @method lighten
     *
     * rgb 컬러 밝은 농도로 변환
     *
     * @param {String} color   RGB color code
     * @param {Number} rate 밝은 농도
     * @return {String}
     */
    lighten(color: string, rate: number): string;

    /**
     * @method darken
     *
     * rgb 컬러 어두운 농도로 변환
     *
     * @param {String} color   RGB color code
     * @param {Number} rate 어두운 농도
     * @return {String}
     */
    darken(color: string, rate: number): string;
}

interface UtilBase64 {
    encode(input: string): string;
    decode(input: string): string;
}

interface UtilKeyParser {
    /**
     * @method isIndexDepth
     *
     * @param {String} index
     * @return {Boolean}
     */
    isIndexDepth(index: string): boolean;

    /**
     * @method getIndexList
     *
     * @param {String} index
     * @return {Array}
     */
    getIndexList(index: string): boolean;

    /**
     * @method changeIndex
     *
     *
     * @param {String} index
     * @param {String} targetIndex
     * @param {String} rootIndex
     * @return {String}
     */
    changeIndex(index: string, targetIndex: string, rootIndex: string): string;

    /**
     * @method getNextIndex
     *
     * @param {String} index
     * @return {String}
     */
    getNextIndex(index: string): string;

    /**
     * @method getParentIndex
     *
     *
     * @param {String} index
     * @returns {*}
     */
    getParentIndex(index: string): string;
}

interface UtilMath {
    /**
     * @method rotate
     *
     * 2d rotate
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radian	roate 할 radian
     * @return {Object}
     * @return {Number} return.x  변환된 x
     * @return {Number} return.y  변환된 y
     *
     */
    rotate(x: number, y: number, radian: number): any;

    resize(maxWidth: number, maxHeight: number, objectWidth: number, objectHeight: number): any;

    /**
     * @method radian
     *
     * convert degree to radian
     *
     * @param {Number} degree
     * @return {Number} radian
     */
    radian(degree: number): number;

    /**
     * @method degree
     *
     * convert radian to degree
     *
     * @param {Number} radian
     * @return {Number} degree
     */
    degree(radian: number): number;

    angle(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * @method interpolateNumber
     *
     * a, b 의 중간값 계산을 위한 callback 함수 만들기
     *
     * @param {Number} a	first value
     * @param {Number} b 	second value
     * @return {Function}
     */
    interpolateNumber(a: number, b: number): () => void;

    // 중간값 round 해서 계산하기
    interpolateRound(a: number, b: number): () => void;

    round(num: number, fixed: number): number;

    plus(a: number, b: number): number;

    minus(a: number, b: number): number;

    multi(a: number, b: number): number;

    div(a: number, b: number): number;

    remain(a: number, b: number): number;

    /**
     * 특정 구간의 값을 자동으로 계산
     *
     * @param {Object} min
     * @param {Object} max
     * @param {Object} ticks
     * @param {Object} isNice
     */
    nice(min: number, max: number, ticks: number, isNice: boolean): any;

    matrix<T>(a: T[], b: T[]): T[];

    matrix3d<T>(a: T[], b: T[]): T[];

    inverseMatrix3d(a: any[]): any[];

}

export interface UtilScaleOrdinal extends Function  {
    (x: number): number;
    domain(values: any[]): UtilScaleOrdinal;
    range(values: any[]): UtilScaleOrdinal;
    rangePoints(interval: number, padding?: number): () => void;
    rangeBands(interval: number, padding?: number, outerPadding?: number): () => void;
    invert(x: number): number;
}

export type UtilQuickSort = (array: number[], isClone: boolean) => this;
