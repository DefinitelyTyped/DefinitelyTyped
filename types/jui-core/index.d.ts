// Type definitions for jui-core 2.0
// Project: https://github.com/juijs/jui-core
// Definitions by: JinHo Park <https://github.com/easylogic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

export const jui: JuiStatic;

export interface UtilBase {
    /** check browser agent */
    browser: {
        /** Webkit 브라우저 체크 */
        webkit: boolean,
        /** Mozilla 브라우저 체크 */
        mozilla: boolean,
        /** IE 브라우저 체크 */
        msie: boolean
    };

    isTouch: boolean;

    /**
     * 프로토타입 기반의 상속 제공
     *
     * @param ctor base Class
     * @param superCtor super Class
     */
    inherit(ctor: ((...args: any[]) => any), superCtor: ((...args: any[]) => any)): void;

    /**
     * implements object extend
     */
    extend(origin: any, add: any, skip: boolean): any;

    /**
     * convert px to integer
     */
    pxToInt(px: string | number): number;

    /**
     * implements object clone
     * @param obj 복사할 객체
     */
    clone(obj: any): any[];

    /**
     * implements object deep clone
     */
    deepClone(obj: any, emit: any): any[];

    /**
     * use QuickSort
     */
    sort(array: any[]): UtilQuickSort;

    /**
     * caculate callback runtime
     */
    runtime(name: string, callback: ((...args: any[]) => void)): void;

    /**
     * parsing template string
     */
    template(html: string, obj?: any): ((obj: any) => string) | string;

    /**
     * add event in window resize event
     * @param ms delay time
     */
    resize(callback: ((...args: any[]) => void), ms: number): void;

    /**
     * IndexParser 객체 생성
     */
    index(): UtilKeyParser;

    /**
     * split array by length
     */
    chunk(arr: any[], len: number): any[];

    /**
     * check data  type
     * @param t  type string
     * @param v value object
     */
    typeCheck(typeName: string, value: any): boolean;

    typeCheckObj(uiObj: any, list: any): void;

    /**
     * data 를 csv 로 변환한다.
     *
     * @return  변환된 csv 문자열
     */
    dataToCsv(keys: string[], dataList: any[], dataSize: number): string;

    dataToCsv2(options: any): string;

    /**
     * file 에서 csv 컨텐츠 로드
     */
    fileToCsv(fileText: string, callback: ((data: any) => void)): void;

    /**
     * csv 다운로드 링크로 변환
     *
     * @return data uri string
     */
    csvToBase64(csv: string): string;

    csvToData(keys: string[], csv: string, csvNumber: number): any[];

    /**
     *
     * csv 에서 필드 얻어오기
     *
     */
    getCsvFields(fields: string[], csvFields: string[]): string[];

    /**
     *
     * xml 문자열로 svg datauri 생성
     *
     * @return 변환된 data uri 링크
     */
    svgToBase64(xml: string): string;

    /**
     *
     * implements date format function
     *
     * yyyy : 4 digits year
     * yy : 2 digits year
     * y : 1 digit year
     *
     * @param format   date format string
     */
    dateFormat(date: Date, format: string, utc?: boolean): string;

    /**
     *
     * 유니크 아이디 생성
     *
     * @param key  prefix string
     * @return 생성된 아이디 문자열
     */
    createId(key: string): string;

    /**
     * Base64 인코딩
     */
    btoa(input: any): string;

    /**
     * Base64 디코딩
     */
    atob(input: string): any;

    /**
     * implement async loop without blocking ui
     *
     * @param total   loop count
     */
    timeLoop(total: number, context?: any): ((index: number) => void);

    /**
     * 최적화된 루프 생성 (5단계로 나눔)
     *
     * @param total   loop count
     * @return 최적화된 루프 콜백 (index, groupIndex 2가지 파라미터를 받는다.)
     */
    loop(total: number, context?: any): ((index: number, groupIndex: number) => void);

    /**
     * 배열을 사용해서 최적화된 루프로 생성한다.
     *
     *
     * @param data 루프로 생성될 배열
     * @return 최적화된 루프 콜백 (data, index, groupIndex 3가지 파라미터를 받는다.)
     */
    loopArray(data: any[], context?: any): ((data: any, index: number, groupIndex: number) => void);

    /**
     * 배열의 키 기반 인덱스를 생성한다.
     *
     * 개별 값 별로 멀티 인덱스를 생성한다.
     *
     * @return 생성된 인덱스
     */
    makeIndex(data: any[], keyField: string): any;

    /**
     * Check that it matches the starting string search string.
     *
     * @return position
     */
    startsWith(str: string, searchString: string, position?: number): number;

    /**
     * Check that it matches the end of a string search string.
     *
     * @return position
     */
    endsWith(str: string, searchString: string, position?: number): number;

    inArray(target: any, list: any[]): number;

    trim(text: string): string;

    ready: ((...args: any[]) => void);

    param(data: any): string;

    ajax(data: any): void;

    scrollWidth(): number;
}

export interface JuiStatic {
    /**
     * ready 타임에 실행될 callback 정의
     */
    ready(depends?: string[], callback?: (...args: any[]) => void): void;

    /**
     * 사용자가 실제로 사용할 수 있는 UI 클래스를 정의
     *
     * @param name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     */
    defineUI(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param parent 상속받을 클래스
     */
    define(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * UI 클래스에서 사용될 클래스를 정의하고, 자유롭게 상속할 수 있는 클래스를 정의
     *
     * @param name 모듈 로드와 상속에 사용될 이름을 정한다.
     * @param depends 'define'이나 'defineUI'로 정의된 클래스나 객체를 인자로 받을 수 있다.
     * @param callback UI 클래스를 해당 콜백 함수 내에서 클래스 형태로 구현하고 리턴해야 한다.
     * @param parent 상속받을 클래스
     */
    redefine(name: string, depends: string[], callback: () => void, parent?: string): void;

    /**
     * define과 defineUI로 정의된 클래스 또는 객체를 가져온다.
     *
     * @param name 가져온 클래스 또는 객체의 이름
     */
    include(name: string): any;

    /**
     * define과 defineUI로 정의된 모든 클래스와 객체를 가져온다.
     */
    includeAll(): any[];

    /**
     * Adds a component object created
     *
     * @param ui UI instance
     */
    add(uiIns: any): void;

    /**
     * Generates a custom event to an applicable component
     *
     * @param key Selector or UI type
     * @param type Event type
     * @param args Event arguments
     */
    emit(key: string, type: string, args: any[]): void;

    /**
     * Gets a component currently created
     *
     * @returns UI instance
     */
    get(key: number | string): any;

    /**
     * Gets all components currently created
     *
     * @return UI instances
     */
    getAll(): any[];

    /**
     * It is possible to create a component dynamically after the ready point
     *
     * @param type UI type
     */
    create(type: string, selector: any, options?: {}): any;
}

export interface UICollection {
    destroy(): void;
}

export interface UICore {
    tpl?: any;

    event?: any;

    root?: any;

    /**
     * Generates a custom event. The first parameter is the type of a custom event. A function defined as an option or on method is called
     *
     * @param type Event type
     * @param args Event Arguments
     */
    emit(type: string, args: () => void): any;

    /**
     * A callback function defined as an on method is run when an emit method is called
     *
     * @param type Event type
     */
    on(type: string, callback: () => void): void;

    /**
     * Removes a custom event of an applicable type or callback handler
     *
     * @param type Event type
     */
    off(type: string): void;

    /**
     * Check the parameter type of a UI method and generates an alarm when a wrong value is entered
     *
     * @param name Method name
     * @param params Parameters
     */
    addValid(name: string, params: any[]): void;

    /**
     * Sets a callback function that is called before a UI method is run
     *
     * @param name Method name
     */
    callBefore(name: string, callback: () => void): void;

    /**
     * Sets a callback function that is called after a UI method is run
     *
     * @param name Method name
     */
    callAfter(name: string, callback: () => void): void;

    /**
     * Sets a callback function and the delay time before/after a UI method is run
     *
     * @param name Method name
     */
    callDelay(name: string, callObj: () => void): void;

    /**
     * Dynamically defines the template method of a UI
     *
     * @param name Template name
     * @param html Template markup
     */
    setTpl(name: string, html: string): void;

    /**
     * Dynamically defines the options of a UI
     */
    setOption(key: string, value: any): void;

    destroy(): void;
}

//noinspection TypeScriptUnresolvedVariable
export interface UIEvent extends UICore {
    root?: any;

    /**
     * Get the child element of the root element
     */
    find(selector: any): JQuery;
}

export class ColorScale {
    domain(color: string, color2: string): this;
    ticks(max: number): this;
}

export interface UtilColor {
    /**
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
     * @param obj  obj has r, g, b and a attributes
     * @param type  format string type
     */
    format(obj: any, type: string): string;

    /**
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
     * @returns scale function
     */
    scale(): ColorScale;

    /**
     * create color map
     *
     * 		var colorList = color.map(['#352a87', '#0f5cdd', '#00b5a6', '#ffc337', '#fdff00'], count)
     *
     * @param count  a divide number
     * @returns converted color list
     */
    map(color_list: string[], count: number): string[];

    /**
     * parse string to rgb color
     *
     * 		color.rgb("#FF0000") === { r : 255, g : 0, b : 0 }
     *
     * 		color.rgb("rgb(255, 0, 0)") == { r : 255, g : 0, b : }
     *
     * @param str color string
     * @returns  rgb object
     */
    rgb(str: string): any;

    /**
     * convert hsv to rgb
     *
     * 		color.HSVtoRGB(0,0,1) === #FFFFF === { r : 255, g : 0, b : 0 }
     *
     * @param H  hue color number  (min : 0, max : 360)
     * @param S  Saturation number  (min : 0, max : 1)
     * @param V  Value number 		(min : 0, max : 1 )
     */
    HSVtoRGB(H: number, S: number, V: number): any;

    /**
     * convert rgb to hsv
     *
     * 		color.RGBtoHSV(0, 0, 255) === { h : 240, s : 1, v : 1 } === '#FFFF00'
     *
     * @param R  red color value
     * @param G  green color value
     * @param B  blue color value
     * @return  hsv color code
     */
    RGBtoHSV(R: number, G: number, B: number): any;

    /**
     * rgb 컬러 밝은 농도로 변환
     *
     * @param color   RGB color code
     * @param rate 밝은 농도
     */
    lighten(color: string, rate: number): string;

    /**
     * rgb 컬러 어두운 농도로 변환
     *
     * @param color   RGB color code
     * @param rate 어두운 농도
     */
    darken(color: string, rate: number): string;
}

export interface UtilBase64 {
    encode(input: string): string;
    decode(input: string): string;
}

export interface UtilKeyParser {
    isIndexDepth(index: string): boolean;
    getIndexList(index: string): boolean;
    changeIndex(index: string, targetIndex: string, rootIndex: string): string;
    getNextIndex(index: string): string;
    getParentIndex(index: string): string;
}

export interface UtilMath {
    /**
     * 2d rotate
     *
     * @param radian	roate 할 radian
     * @return return.x  변환된 x
     * @return return.y  변환된 y
     *
     */
    rotate(x: number, y: number, radian: number): any;

    resize(maxWidth: number, maxHeight: number, objectWidth: number, objectHeight: number): any;

    /**
     * convert degree to radian
     *
     * @return radian
     */
    radian(degree: number): number;

    /**
     * convert radian to degree
     *
     * @return degree
     */
    degree(radian: number): number;

    angle(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * a, b 의 중간값 계산을 위한 callback 함수 만들기
     *
     * @param a	first value
     * @param b 	second value
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
     */
    nice(min: number, max: number, ticks: number, isNice: boolean): any;

    matrix<T>(a: T[], b: T[]): T[];

    matrix3d<T>(a: T[], b: T[]): T[];

    inverseMatrix3d(a: any[]): any[];
}

export interface UtilScaleOrdinal extends Function {
    (x: number): number;
    domain(values: any[]): UtilScaleOrdinal;
    range(values: any[]): UtilScaleOrdinal;
    rangePoints(interval: number, padding?: number): () => void;
    rangeBands(interval: number, padding?: number, outerPadding?: number): () => void;
    invert(x: number): number;
}

export type UtilQuickSort = (array: number[], isClone: boolean) => this;
