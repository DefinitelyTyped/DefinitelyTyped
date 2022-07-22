// Type definitions for non-npm package Alipay JSSDK - alipayjsapi.min.js 3.1.1
// Project: https://myjsapi.alipay.com/alipayjsapi/index.html
// Definitions by: Yuxiang Ren <https://github.com/shlyren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace ap {

    type IAnyObject = Record<string, any>
    type IObjArray = Array<IAnyObject>
    type IFunction<V = unknown, R = unknown> = (arg0: V) => R
    
    interface AliOptionBase<D = any> {
        /** 接口调用成功的回调函数 */
        success?: (data: D) => void,
        /** 接口调用失败的回调函数 */
        fail?: (err: {
            err: number,
            errMessage: string
        }) => void,
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: any) => void
    }

    /** 
     * ===============================  窗口 ========================================================
     */

    /** 打开窗口 */
    function pushWindow(options: {
        /** 要打开的页面url */
        url: string,
        /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
        data?: Record<string, string>
    } & AliOptionBase): void

    /**
     * 关闭当前页面。可直接传入一个对象作为 OPTION.data 参数。
     * @param OPTION 
     */
    function popWindow(options?: {
        data?: Record<string, string>
    } & AliOptionBase): void

    /**
     * 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
     */
    function popTo(options: number | {
        /** 目标页面的完整 URL */
        url?: string,
        /** 目标页面的 URL 匹配表达式（ URL 如果包含 urlPattern，匹配成功） */
        urlPattern?: string,
        /** 目标页面在会话页面栈中的索引；如果小于零，则将与当前页面的 index 相加 */
        index?: number
        /** 传递的 data 对象将会被即将露出的页面通过 onResume 事件接收 */
        data?: Record<string, string>
    } & AliOptionBase): void

    /**
     * 替换当前页面，并且不会产生历史记录。可直接传入一个字符串作为 OPTION.url 参数。
     * @param options 
     */
    function redirectTo(options: string | {
        /** 要打开的页面url */
        url: string,
        /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
        data?: Record<string, string>
    } & AliOptionBase): void


    /**
     * 扫码
     * @param option type 扫描目标类型，支持 qr / bar，相应扫码选框会不同，默认 qr
     * @param callback 
     */
    function scan(option: string | {
        type: string // 扫描目标类型，支持 qr / bar，相应扫码选框会不同，默认 qr
    }, callback: Function): void

    /** 
     * =============================== 位置 ========================================================
     */
    /**
     * 获取当前的地理位置信息。
     * @param options 参数
     * @param callback 当 type 为 0 时，会返回数据
     */
    function getLocation(
        options?: {
            /** 钱包经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位 */
            cacheTimeout?: number
            /** 支持 0：详细逆地理编码，带周边信；1：逆地理编码到城市；2：仅获取经纬度、速度和精度。默认为 2 */
            type?: number
            /** 定位超时失败回调时间，单位秒。默认10s */
            timeout?: number
            /**自定义业务类型  */
            bizType?: string
        } & AliOptionBase, 
        callback?: IFunction<{
            longitude: string // 经度
            latitude: string // 纬度
            accuracy: number // 精度，单位米
            speed: number // 速度，单位毫秒
            country: string // 国家名
            countryCode: string // 国家编号
            province: string // 省份名
            city: string // 城市名
            cityCode: string // 城市编码
            adCode: string// 区域编码
            // 街道门牌信息，结构是：{street, number}
            streetNumber: {
                name: string,
                address: string
            } 
            // 定位点附近的 POI 信息，结构是：{name, address}
            pois: {
                name: string,
                address: string
            }[]
        }, void>
    ): void


    function chooseCity(
        options?: {
            /** 钱包经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位 */
            showLocatedCity?: boolean
            /** 支持 0：详细逆地理编码，带周边信；1：逆地理编码到城市；2：仅获取经纬度、速度和精度。默认为 2 */
            showHotCities?: boolean
            /** 定位超时失败回调时间，单位秒。默认10s */
            cities?: IObjArray
            /**自定义业务类型  */
            hotCities?: IObjArray
        } & AliOptionBase, 
        callback?: IFunction<{
            city: string // 城市名
            adCode: string // 行政区划代码
        }, void>
    ): void
}

