// Type definitions for ali-app 1.0
// Project: https://docs.alipay.com/mini/api/overview
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// 公共部分
declare namespace my {
    // #region 基本参数
    interface DataResponse {
        /** 回调函数返回的内容 */
        data: any;
        /** 开发者服务器返回的 HTTP 状态码 */
        status: number;
        /** 开发者服务器返回的 HTTP Response Header */
        headers: object;
    }
    interface ErrMsgResponse {
        /** 成功：ok，错误：详细信息 */
        errMsg: "ok" | string;
    }
    interface TempFileResponse {
        /** 文件的临时路径 */
        apFilePath: string;
    }
    interface BaseOptions<R = any, E = any> {
        /** 接口调用成功的回调函数 */
        success?(res: R): void;
        /** 接口调用失败的回调函数 */
        fail?(res: E): void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?(res: any): void;
    }
    interface ErrCodeResponse {
        errCode: number;
    }
    // #endregion
}

// 界面
declare namespace my {
    //#region 导航栏 https://docs.alipay.com/mini/api/ui-navigate
    interface NavigateToOptions extends BaseOptions {
        /** 需要跳转的应用内页面的路径 */
        url: string;
    }
    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
     *
     * 注意：为了不让用户在使用小程序时造成困扰，
     * 我们规定页面路径只能是五层，请尽量避免多层级的交互方式。
     */
    function navigateTo(options: NavigateToOptions): void;

    interface RedirectToOptions extends BaseOptions {
        /** 需要跳转的应用内页面的路径 */
        url: string;
    }
    /**
     * 关闭当前页面，跳转到应用内的某个页面。
     */
    function redirectTo(options: RedirectToOptions): void;

    interface NavigateBackOptions extends BaseOptions {
        /** 返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页 */
        delta: number;
    }
    /**
     * 关闭当前页面，返回上一级或多级页面。可通过 getCurrentPages 获取当前的页面栈信息，决定需要返回几层。
     */
    function navigateBack(options?: NavigateBackOptions): void;

    interface ReLaunchOptions extends BaseOptions {
        /**
         * 需要跳转的应用内页面路径 , 路径后可以带参数。
         * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔
         * 如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
         */
        url: string;
    }
    /**
     * 关闭所有页面，打开到应用内的某个页面。
     */
    function reLaunch(options?: ReLaunchOptions): void;

    interface SetNavigationBarOptions extends BaseOptions {
        /** 页面标题 */
        title: string;
        /** 图片连接地址，必须是https，请使用3x高清图片。若设置了image则title参数失效 */
        image: string;
        /** 导航栏背景色，支持十六进制颜色值 */
        backgroundColor: string;
        /** 导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样 */
        borderBottomColor: string;
        /** 是否重置导航栏为支付宝默认配色，默认 false */
        reset: boolean;
    }
    /**
     * 动态设置当前页面的标题。
     */
    function setNavigationBar(options: Partial<SetNavigationBarOptions>): void;

    /**
     * 显示导航栏 loading
     */
    function showNavigationBarLoading(): void;

    /** 隐藏导航栏 loading。 */
    function hideNavigationBarLoading(): void;
    //#endregion

    //#region TabBar https://docs.alipay.com/mini/api/ui-tabbar
    interface SwitchTabOptions extends BaseOptions {
        /**
         * 需要跳转的 tabBar 页面的路径
         * （需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
         */
        url: string;
    }
    /**
     * 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面
     */
    function switchTab(options: SwitchTabOptions): void;
    //#endregion

    //#region 交互反馈 https://docs.alipay.com/mini/api/ui-feedback

    interface AlertOptions extends BaseOptions {
        /** alert框的标题 */
        title: string;
        /** alert框的内容 */
        content: string;
        /** 按钮文字，默认确定 */
        buttonText: string;
    }
    function alert(options: Partial<AlertOptions>): void;

    interface ConfirmOptions extends BaseOptions {
        /** confirm框的标题 */
        title: string;
        /** confirm框的内容 */
        content: string;
        /** 确认按钮文字，默认‘确定’ */
        confirmButtonText: string;
        /** 确认按钮文字，默认‘取消’ */
        cancelButtonText: string;
        success(result: { confirm: boolean; }): void;
    }
    function confirm(options: Partial<ConfirmOptions>): void;

    interface PromptOptions extends BaseOptions {
        /** prompt框标题 */
        title?: string;
        /** prompt框文本，默认‘请输入内容’ */
        message?: string;
        /** 输入框内的提示文案 */
        placeholder?: string;
        /** message对齐方式，可用枚举left/center/right，iOS ‘center’, android ‘left’ */
        align?: 'left' | 'center' | 'right' | string;
        /** 确认按钮文字，默认‘确定’ */
        okButtonText: string;
        /** 确认按钮文字，默认‘取消’ */
        cancelButtonText: string;
        success(result: { ok: boolean; inputValue: string; }): void;
    }
    function prompt(options: PromptOptions): void;

    interface ToastOptions extends BaseOptions {
        /**
         * 文字内容
         */
        content: string;
        /** toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息 */
        type?: 'none' | 'success' | 'fail' | 'exception' | string;
        /**
         * 显示时长，单位为 ms，默认 2000
         */
        duration?: number;
    }
    /**
     * 显示消息提示框
     */
    function showToast(options: Partial<ToastOptions>): void;
    function hideToast(): void;

    interface LoadingOptions extends BaseOptions {
        /**
         * loading的文字内容
         */
        content?: string;
        /**
         * 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示
         */
        delay?: number;
    }
    /**
     * 显示加载提示
     */
    function showLoading(options?: LoadingOptions): void;
    interface HideLoadingOptions {
        /**
         * 体指当前page实例，某些场景下，需要指明在哪个page执行hideLoading。
         */
        page: any;
    }
    /**
     * 隐藏消息提示框
     */
    function hideLoading(options?: HideLoadingOptions): void;

    interface Badge {
        /** 需要飘红的选项的索引，从0开始 */
        index: number;
        /**
         * 飘红类型，支持 none（无红点）/ point（纯红点） / num（数字红点）/ text（文案红点）/ more（...）
         *
         */
        type: 'none' | 'point' | 'num' | 'text' | 'more' | string;

        /**
         * 自定义飘红文案：
         *
         * 1、type为none/point/more时本文案可不填
         * 2、type为num时本文案为小数或<=0均不显示, >100 显示"..."
         */
        text: string;
    }
    interface ActionSheetOptions extends BaseOptions {
        /** 菜单标题 */
        title?: string;
        /**
         * 菜单按钮文字数组
         */
        items: string[];
        /**
         * 取消按钮文案。默认为‘取消’。注：Android平台此字段无效，不会显示取消按钮。
         */
        cancelButtonText?: string;
        /**
         * （iOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色
         */
        destructiveBtnIndex?: number;
        /**
         * 需飘红选项的数组，数组内部对象字段见下表
         */
        badges?: Array<Partial<Badge>>;
        /**
         * 接口调用成功的回调函数
         */
        success?(res: {
            /**
             * 用户点击的按钮，从上到下的顺序，从0开始
             */
            index: number;
        }): void;
    }
    /**
     * 显示操作菜单
     */
    function showActionSheet(options: ActionSheetOptions): void;
    //#endregion

    //#region 下拉刷新 https://docs.alipay.com/mini/api/ui-pulldown
    /**
     * Page 实现的接口对象
     */
    interface PageOptions {
        /**
         * 下拉刷新
         * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
         * 需要在页面对应的 .json 配置文件中配置 "pullRefresh": true 选项，才能开启下拉刷新事件。
         * 当处理完数据刷新后，调用 my.stopPullDownRefresh 可以停止当前页面的下拉刷新。
         */
        onPullDownRefresh?(this: Page): void;
    }
    /**
     * 停止当前页面的下拉刷新。
     */
    function stopPullDownRefresh(): void;
    //#endregion

    //#region 联系人 https://docs.alipay.com/mini/api/ui-contact
    interface ChoosePhoneContactOptions extends BaseOptions {
        success(result: {
            name: string;    // 选中的联系人姓名
            mobile: string;    // 选中的联系人手机号
        }): void;
        /**
         * 10    没有权限
         * 11    用户取消操作(或设备未授权使用通讯录)
         */
        fail?(error: 10 | 11): void;
    }
    /**
     * 选择本地系统通信录中某个联系人的电话。
     */
    function choosePhoneContact(options: ChoosePhoneContactOptions): void;

    interface ChooseAlipayContactOptions extends BaseOptions {
        /** 单次最多选择联系人个数，默认 1，最大 10 */
        count: number;
        success(result: {
            realName: string;    // 账号的真实姓名
            mobile: string;        // 账号对应的手机号码
            email: string;        // 账号的邮箱
            avatar: string;        // 账号的头像链接
            userId: string;        // 支付宝账号唯一 userId
        }): void;
        /**
         * 10    没有权限
         * 11    用户取消操作(或设备未授权使用通讯录)
         */
        fail?(error: 10 | 11): void;
    }
    /**
     * 唤起支付宝通讯录，选择一个或者多个支付宝联系人。
     */
    function chooseAlipayContact(options: ChooseAlipayContactOptions): void;

    interface ContactsDic {
        /**
         * 支付宝账号唯一 userId
         */
        userId: string;
        /**
         * 账号的头像链接
         */
        avatar: string;
        /**
         * 账号对应的手机号码
         */
        mobile: string;
        /**
         * 账号的真实姓名
         */
        realName: string;
        /**
         * 账号的显示名称：也即支付宝设置的备注名称，默认为朋友圈里面的昵称
         */
        displayName: string;    // 账号的显示名称：也即支付宝设置的备注名称，默认为朋友圈里面的昵称
    }
    interface ChooseContactOptions extends BaseOptions {
        /** 选择类型，值为single（单选）或者 multi（多选） */
        chooseType: 'single' | 'multi' | string;
        /** 包含手机通讯录联系人的模式：默认为不包含（none）、或者仅仅包含双向通讯录联系人（known）、或者包含手机通讯录联系人（all） */
        includeMobileContactMode?: 'none' | 'known' | 'all' | string;
        /** 是否包含自己 */
        includeMe?: boolean;
        /** 最大选择人数，仅 chooseType 为 multi 时才有效 */
        multiChooseMax?: number;
        /** 多选达到上限的文案，仅 chooseType 为 multi 时才有效 */
        multiChooseMaxTips?: string;

        success(result: {
            contactsDicArray: ContactsDic[];
        }): void;
    }
    /**
     * 唤起选人组件，默认只包含支付宝联系人，可以通过修改参数包含手机通讯录联系人或者双向通讯录联系人。
     */
    function chooseContact(options: ChooseContactOptions): void;
    //#endregion

    //#region 选择城市 https://docs.alipay.com/mini/api/ui-city
    interface City {
        city: string;    // 城市名
        adCode: string;    // 行政区划代码
        spell?: string;    // 城市名对应拼音拼写，方便用户搜索
    }
    interface ChooseCityOptions extends BaseOptions {
        showLocatedCity: boolean;    //     是否显示当前定位城市，默认 false
        showHotCities: boolean;        //     是否显示热门城市，默认 true
        cities: City[];                // 自定义城市列表，列表内对象字段见下表
        hotCities: City[];            // 自定义热门城市列表，列表内对象字段见下表
        success(result: { city: string; adCode: string; }): void;
    }
    /**
     * 打开城市选择列表
     *
     * 如果用户没有选择任何城市直接点击了返回，将不会触发回调函数。
     */
    function chooseCity(options: Partial<ChooseCityOptions>): void;
    //#endregion

    //#region 选择日期 https://docs.alipay.com/mini/api/ui-date
    interface DatePickerOptions extends BaseOptions {
        /**
         * 返回的日期格式，
         * 1. yyyy-MM-dd（默认）
         * 2. HH:mm
         * 3. yyyy-MM-dd HH:mm
         * 4. yyyy-MM （最低基础库：1.1.1, 可用 canIUse('datePicker.object.format.yyyy-MM') 判断）
         * 5. yyyy （最低基础库：1.1.1,可用 canIUse('datePicker.object.format.yyyy') 判断）
         */
        format: 'yyyy-MM-dd' | 'HH:mm' | 'yyyy-MM-dd HH:mm' | 'yyyy-MM' | 'yyyy';
        /** 初始选择的日期时间，默认当前时间 */
        currentDate: string;
        /** 最小日期时间 */
        startDate: string;
        /** 最大日期时间 */
        endDate: string;
        success(result: { date: string; }): void;
        /** 11 用户取消操作 */
        fail(error: 11): void;
    }
    /**
     * 打开日期选择列表
     */
    function datePicker(optiosn: Partial<DatePickerOptions>): void;
    //#endregion

    //#region 动画 https://docs.alipay.com/mini/api/ui-animation
    type TimingFunction =
        | "linear"
        | "ease"
        | "ease-in"
        | "ease-in-out"
        | "ease-out"
        | "step-start"
        | "step-end";
    interface CreateAnimationOptions {
        /** 动画持续时间，单位ms，默认值 400 */
        duration: number;
        /** 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end" */
        timeFunction: TimingFunction;
        /** 动画持续时间，单位 ms，默认值 0 */
        delay: number;
        /** 设置transform-origin，默认为"50% 50% 0" */
        transformOrigin: string;
    }
    interface Animator {
        actions: AnimationAction[];
    }
    interface AnimationAction {
        animates: Animate[];
        option: AnimationActionOption;
    }
    interface AnimationActionOption {
        transformOrigin: string;
        transition: AnimationTransition;
    }
    interface AnimationTransition {
        delay: number;
        duration: number;
        timingFunction: TimingFunction;
    }
    interface Animate {
        type: string;
        args: any[];
    }
    /**
     * 创建动画实例 animation。调用实例的方法来描述动画，最后通过动画实例的export方法将动画数据导出并传递给组件的animation属性。
     *
     * 注意: export 方法每次调用后会清掉之前的动画操作
     */
    function createAnimation(options: Partial<CreateAnimationOptions>): Animation;
    /** 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。 */
    interface Animation {
        /**
         * 调用动画操作方法后要调用 step() 来表示一组动画完成，
         * 可以在一组动画中调用任意多个动画方法，
         * 一组动画中的所有动画会同时开始，
         * 一组动画完成后才会进行下一组动画。
         * @param options 指定当前组动画的配置
         */
        step(options?: CreateAnimationOptions): void;
        /**
         * 导出动画操作
         *
         * 注意: export 方法每次调用后会清掉之前的动画操作
         */
        export(): Animator;
        /** 透明度，参数范围 0~1 */
        opacity(value: number): Animation;
        /** 颜色值 */
        backgroundColor(color: string): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        width(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        height(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        top(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        left(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        bottom(length: number): Animation;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        right(length: number): Animation;
        /** deg的范围-180~180，从原点顺时针旋转一个deg角度 */
        rotate(deg: number): Animation;
        /** deg的范围-180~180，在X轴旋转一个deg角度 */
        rotateX(deg: number): Animation;
        /** deg的范围-180~180，在Y轴旋转一个deg角度 */
        rotateY(deg: number): Animation;
        /** deg的范围-180~180，在Z轴旋转一个deg角度 */
        rotateZ(deg: number): Animation;
        /** 同transform-function rotate3d */
        rotate3d(x: number, y: number, z: number, deg: number): Animation;
        /**
         * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
         * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
         */
        scale(sx: number, sy?: number): Animation;
        /** 在X轴缩放sx倍数 */
        scaleX(sx: number): Animation;
        /** 在Y轴缩放sy倍数 */
        scaleY(sy: number): Animation;
        /** 在Z轴缩放sy倍数 */
        scaleZ(sz: number): Animation;
        /** 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数 */
        scale3d(sx: number, sy: number, sz: number): Animation;
        /**
         * 一个参数时，表示在X轴偏移tx，单位px；
         * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
         */
        translate(tx: number, ty?: number): Animation;
        /**
         * 在X轴偏移tx，单位px
         */
        translateX(tx: number): Animation;
        /**
         * 在Y轴偏移tx，单位px
         */
        translateY(ty: number): Animation;
        /**
         * 在Z轴偏移tx，单位px
         */
        translateZ(tz: number): Animation;
        /**
         * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
         */
        translate3d(tx: number, ty: number, tz: number): Animation;
        /**
         * 参数范围-180~180；
         * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
         * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
         */
        skew(ax: number, ay?: number): Animation;
        /** 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度 */
        skewX(ax: number): Animation;
        /** 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度 */
        skewY(ay: number): Animation;
        /**
         * 同transform-function matrix
         */
        matrix(
            a: number,
            b: number,
            c: number,
            d: number,
            tx: number,
            ty: number
        ): Animation;
        /** 同transform-function matrix3d */
        matrix3d(
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
            d4: number
        ): Animation;
    }
    //#endregion

    //#region 画布 https://docs.alipay.com/mini/api/ui-canvas
    interface ToTempFilePathOptions extends BaseOptions {
        x: number;            // 画布 x 轴起点，默认为 0
        y: number;            // 画布 y 轴起点，默认为 0
        width: number;        // 画布宽度，默认为 canvas 宽度 - x
        height: number;        // 画布高度，默认为 canvas 高度 - y
        destWidth: number;    // 输出的图片宽度，默认为 width
        destHeight: number;    // 输出的图片高度，默认为 height
    }
    type Color = string | number[] | number | CanvasAction;

    interface CanvasAction {
        /**
         * 创建一个颜色的渐变点。
         * 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
         *
         * @param stop 渐变点位置，值必须在 [0,1] 范围内
         * @param color 颜色值
         */
        addColorStop(stop: number, color: Color): void;
    }

    interface TextMetrics {
        width: number;
    }

    interface ConvasContext {
        font: string;
        /**
         * 把当前画布的内容导出生成图片，并返回文件路径。
         */
        toTempFilePath(options?: Partial<ToTempFilePathOptions>): void;
        /**
         * textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于
         * CanvasRenderingContext2D.fillText 方法的x的值。所以如果 textAlign="center"，那么该文本将画在 x-50%*width
         */
        setTextAlign(textAlign: 'left' | 'right' | 'center' | 'start' | 'end'): void;
        /**
         * textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。
         */
        setTextBaseline(textBaseline: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'): void;
        /**
         * 设置填充色。
         *
         * 如果没有设置 fillStyle，则默认颜色为 black。
         */
        setFillStyle(color: Color): void;
        /**
         * 设置边框颜色。
         *
         * 如果没有设置 strokeStyle，则默认颜色为 black。
         */
        setStrokeStyle(color: Color): void;
        /**
         * 设置阴影样式。
         * 如果没有设置，offsetX 的默认值为 0， offsetY 的默认值为 0， blur 的默认值为 0，color 的默认值为 black。
         * @param offsetX 阴影相对于形状水平方向的偏移
         * @param offsetY 阴影相对于形状竖直方向的偏移
         * @param blur 0~100 阴影的模糊级别，值越大越模糊
         * @param color 阴影颜色
         */
        setShadow(offsetX: number, offsetY: number, blur: number, color: Color): void;

        /**
         * 创建一个线性的渐变色。
         *
         * @param x0 起点 x 坐标
         * @param y0 起点 y 坐标
         * @param x1 终点 x 坐标
         * @param y1 终点 y 坐标
         */
        createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasAction;

        /**
         * 创建一个圆形的渐变色。
         * 起点在圆心，终点在圆环。
         * 需要使用 addColorStop() 来指定渐变点，至少需要两个。
         * @param x 圆心 x 坐标
         * @param y 圆心 y 坐标
         * @param r 圆半径
         * @returns
         */
        createCircularGradient(x: number, y: number, r: number): CanvasAction;

        /**
         * 设置线条的宽度。
         * @param lineWidth 线条宽度，单位为 px
         */
        setLineWidth(lineWidth: number): void;

        /**
         * 设置线条的端点样式。
         *
         * @param lineCap 线条的结束端点样式
         */
        setLineCap(lineCap: 'round' | 'butt' | 'square'): void;

        /**
         * 设置线条的交点样式。
         *
         * @param lineJoin 线条的结束交点样式
         */
        setLineJoin(lineJoin: 'round' | 'bevel' | 'miter'): void;

        /**
         * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
         *
         * @param miterLimit 最大斜接长度
         */
        setMiterLimit(miterLimit: number): void;

        /**
         * 创建一个矩形。
         *
         * @param x 矩形左上角的 x 坐标
         * @param y 矩形左上角的 y 坐标
         * @param width 矩形路径宽度
         * @param height 矩形路径高度
         */
        rect(x: number, y: number, width: number, height: number): void;

        /**
         * 填充矩形。
         * 用 setFillStyle() 设置矩形的填充色，如果没设置则默认是 black。
         * @param x 矩形左上角的 x 坐标
         * @param y 矩形左上角的 y 坐标
         * @param width 矩形路径宽度
         * @param height 矩形路径高度
         */
        fillRect(x: number, y: number, width: number, height: number): void;

        /**
         * 画一个矩形(非填充)。
         * 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是 black。
         * @param x 矩形左上角的 x 坐标
         * @param y 矩形左上角的 y 坐标
         * @param width 矩形路径宽度
         * @param height 矩形路径高度
         */
        strokeRect(x: number, y: number, width: number, height: number): void;

        /**
         * 清除画布上在该矩形区域内的内容。
         * clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，可以对 canvas 加了一层背景色。
         * @param x 矩形左上角的 x 坐标
         * @param y 矩形左上角的 y 坐标
         * @param width 矩形路径宽度
         * @param height 矩形路径高度
         */
        clearRect(x: number, y: number, width: number, height: number): void;

        /**
         * 对当前路径中的内容进行填充。默认的填充色为黑色。
         *
         */
        fill(): void;

        /**
         * 画出当前路径的边框。默认 black。
         * stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去
         */
        stroke(): void;

        /**
         * 关闭一个路径
         * 关闭路径会连接起点和终点。
         * 如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。
         */
        beginPath(): void;

        /**
         * 关闭一个路径
         * 关闭路径会连接起点和终点。
         *
         */
        closePath(): void;

        /**
         * 把路径移动到画布中的指定点，不创建线条。
         * 用 stroke() 方法来画线条
         * @param x 目标位置 x 坐标
         * @param y 目标位置 y 坐标
         */
        moveTo(x: number, y: number): void;

        /**
         * lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。
         * 用 stroke() 方法来画线条
         *
         * @param x 目标位置 x 坐标
         * @param y 目标位置 y 坐标
         */
        lineTo(x: number, y: number): void;

        /**
         * 画一条弧线。
         * 创建一个圆可以用 arc() 方法指定其实弧度为0，终止弧度为 2 * Math.PI。
         *
         * @param x
         * @param y
         * @param r
         * @param sAngle
         * @param eAngle
         */
        arc(x: number, y: number, r: number, sAngle: number, eAngle: number): void;

        /**
         * 创建三次方贝塞尔曲线路径。
         * 曲线的起始点为路径中前一个点。
         * @param cp1x
         * @param cp1y
         * @param cp2x
         * @param cp2y
         * @param x
         * @param y
         */
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

        /**
         * 将当前创建的路径设置为当前剪切路径。
         *
         */
        clip(): void;

        /**
         * 创建二次贝塞尔曲线路径。
         * 曲线的起始点为路径中前一个点。
         * @param cpx 贝塞尔控制点 x 坐标
         * @param cpy 贝塞尔控制点 y 坐标
         * @param x 结束点 x 坐标
         * @param y 结束点 y 坐标
         */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

        /**
         * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
         *
         * @param scaleWidth 横坐标缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)
         * @param scaleHeight 纵坐标轴缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%)
         */
        scale(scaleWidth: number, scaleHeight: number): void;

        /**
         * 以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
         *
         * @param rotate 旋转角度，以弧度计(degrees * Math.PI/180；degrees 范围为0~360)
         */
        rotate(rotate: number): void;

        /**
         * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
         *
         * @param x 水平坐标平移量
         * @param y 竖直坐标平移量
         */
        translate(x: number, y: number): void;

        /**
         * 设置字体大小。
         *
         * @param fontSize 字号
         */
        setFontSize(fontSize: number): void;

        /**
         * 在画布上绘制被填充的文本。
         *
         * @param text 文本
         * @param x 绘制文本的左上角 x 坐标
         * @param y 绘制文本的左上角 y 坐标
         */
        fillText(text: string, x: number, y: number): void;

        /**
         * 绘制图像，图像保持原始尺寸。
         *
         * @param imageResource 图片资源, 只支持线上 cdn 地址或离线包地址，线上 cdn 需返回头 Access-Control-Allow-Origin: *
         * @param x 图像左上角 x 坐标
         * @param y 图像左上角 y 坐标
         * @param width 图像宽度
         * @param height 图像高度
         */
        drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;

        /**
         * 设置全局画笔透明度。
         *
         * @param alpha 透明度，0 表示完全透明，1 表示不透明 范围 [0, 1]
         */
        setGlobalAlpha(alpha: number): void;

        /**
         * 设置虚线的样式
         *
         * @param segments 一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。
         */
        setLineDash(segments: number[]): void;

        /**
         * 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。你可以缩放、旋转、移动和倾斜上下文。
         *
         * @param scaleX 水平缩放
         * @param skewX 水平倾斜
         * @param skewY 垂直倾斜
         * @param scaleY 垂直缩放
         * @param translateX 水平移动
         * @param translateY 垂直移动
         */
        transform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void;

        /**
         * 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。
         *
         * @param scaleX 水平缩放
         * @param skewX 水平倾斜
         * @param skewY 垂直倾斜
         * @param scaleY 垂直缩放
         * @param translateX 水平移动
         * @param translateY 垂直移动
         */
        setTransform(scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void;

        /**
         * 保存当前的绘图上下文。
         *
         */
        save(): void;

        /**
         * 恢复之前保存的绘图上下文。
         */
        restore(): void;

        /**
         * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
         * 绘图上下文需要由 my.createCanvasContext(canvasId) 来创建。
         * @param [reserve] 本次绘制是否接着上一次绘制，即 reserve 参数为 false 时则在本次调用 drawCanvas绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为true 时，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
         */
        draw(reserve?: boolean): void;

        measureText(text: string): TextMetrics;
    }
    /**
     * 创建 canvas 绘图上下文
     *
     * 该绘图上下文只作用于对应 canvasId 的 <canvas/>
     */
    function createCanvasContext(canvasId: string): ConvasContext;
    //#endregion

    //#region 地图 https://docs.alipay.com/mini/api/ui-map
    interface GetCenterLocationOptions extends BaseOptions {
        success?(res: { longitude: string; latitude: string; }): void;
    }

    interface MapContext extends BaseOptions {
        /**
         * 获取当前地图中心的经纬度，返回 gcj02 坐标系的值，可以用于 my.openLocation
         *
         * @param options
         */
        getCenterLocation(options: GetCenterLocationOptions): void;
        /**
         * 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用
         */
        moveToLocation(): void;
    }

    /**
     * 创建并返回一个 map 上下文对象 mapContext。
     *
     * @param mapId
     * @returns
     */
    function createMapContext(mapId: string): MapContext;

    //#endregion

    //#region 键盘 https://docs.alipay.com/mini/api/ui-hidekeyboard
    /**
     * 隐藏键盘
     *
     */
    function hideKeyboard(): void;
    //#endregion

    //#region 滚动 https://docs.alipay.com/mini/api/scroll
    interface PageScrollToOptions {
        scrollTop: number;    // 滚动到页面的目标位置，单位 px
    }

    /**
     * 滚动到页面的目标位置
     *
     * @param options
     */
    function pageScrollTo(options: PageScrollToOptions): void;
    //#endregion

    //#region 节点查询 https://docs.alipay.com/mini/api/selector-query
    interface RectArea {
        /** 节点的左边界坐标 */
        left: number;
        /** 节点的右边界坐标 */
        right: number;
        /** 节点的上边界坐标 */
        top: number;
        /** 节点的下边界坐标 */
        bottom: number;
        /** 节点的宽度 */
        width: number;
        /** 节点的高度 */
        height: number;
    }
    interface NodesRefRect extends RectArea {
        /** 节点的ID */
        id: string;
        /** 节点的dataset */
        dataset: any;
    }
    interface NodeRefOffset {
        /** 节点的ID */
        id: string;
        /** 节点的dataset */
        dataset: any;
        /** 节点的水平滚动位置 */
        scrollLeft: number;
        /** 节点的竖直滚动位置 */
        scrollTop: number;
    }
    interface NodesRef {
        /**
         * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
         * 其功能类似于DOM的getBoundingClientRect。
         * 返回值是nodesRef对应的selectorQuery。
         * 返回的节点信息中，每个节点的位置用
         * left、right、top、bottom、width、height字段描述。
         * 如果提供了callback回调函数，在执行selectQuery的exec方法后
         * 节点信息会在callback中返回。
         */
        boundingClientRect<T extends NodesRefRect | NodesRefRect[]>(
            callback?: (rect: T) => void
        ): SelectorQuery;
        /**
         * 添加节点的滚动位置查询请求，以像素为单位。
         * 节点必须是scroll-view或者viewport。
         * 返回值是nodesRef对应的selectorQuery。
         * 返回的节点信息中，每个节点的滚动位置用scrollLeft、scrollHeight字段描述。
         * 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。
         */
        scrollOffset(callback?: (rect: NodeRefOffset) => void): SelectorQuery;
        // /**
        //  * 获取节点的相关信息，需要获取的字段在fields中指定。
        //  * 返回值是nodesRef对应的selectorQuery。
        //  */
        // fields(
        //     fields: NodeRefFieldsOptions,
        //     callback?: (result: any) => void
        // ): SelectorQuery;
    }
    /**
     * SelectorQuery对象实例
     */
    interface SelectorQuery {
        // /**
        //  * 将选择器的选取范围更改为自定义组件component内
        //  * （初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点
        //  * @version 1.6.0
        //  */
        // in(component: Component<object, object>): SelectorQuery;
        /**
         * 在当前页面下选择第一个匹配选择器selector的节点，返回一个NodesRef对象实例，可以用于获取节点信息。
         * selector类似于CSS的选择器，但仅支持下列语法。
         * + ID选择器：#the-id
         * + class选择器（可以连续指定多个）：.a-class.another-class
         * + 子元素选择器：.the-parent > .the-child
         * + 后代选择器：.the-ancestor .the-descendant
         * + 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
         * + 多选择器的并集：#a-node, .some-other-nodes
         */
        select(selector: string): NodesRef;
        /**
         * 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。
         * 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。
         */
        selectAll(selector: string): NodesRef;
        /**
         * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
         * 返回一个NodesRef对象实例。
         */
        selectViewport(): NodesRef;
        /**
         * 执行所有的请求
         * 请求结果按请求次序构成数组，在callback的第一个参数中返回。
         */
        exec(callback?: (result: any[]) => void): void;
    }
    /**
     * 获取一个节点查询对象 SelectorQuery。
     *
     * @param page 可以指定 page 属性，默认为当前页面
     * @returns
     */
    function createSelectorQuery(page?: any): SelectorQuery;
    //#endregion

    //#region 级联选择 https://docs.alipay.com/mini/api/ewdxl3
    interface MultiLevelSelectItem {
        name: string;
        subList?: MultiLevelSelectItem[];
    }
    interface MultiLevelSelectOptions extends BaseOptions {
        title?: string;                        // 标题
        list?: MultiLevelSelectItem[];        // 选择数据列表
        name?: string;                        // 条目名称
        subList?: MultiLevelSelectItem[];    // 子条目列表
        success?(res: {
            success: boolean;                // 是否选择完成,取消返回false
            result: MultiLevelSelectItem[];    // 选择的结果，如[{“name”:”杭州市”},{“name”:”上城区”},{“name”:”古翠街道”}]
        }): void;
    }

    function multiLevelSelect(options?: MultiLevelSelectOptions): void;
    //#endregion
}

// 开放接口
declare namespace my {
    //#region 用户授权 https://docs.alipay.com/mini/api/openapi-authorize
    interface GetAuthCodeOptions extends BaseOptions {
        scopes?: string | string[];    // 授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）
        success?(res: {
            authCode: string;    // 授权码
            authErrorScope: {
                [scope: string]: number;
            };    // 失败的授权类型，key是授权失败的 scope，value 是对应的错误码
            authSucessScope: string[];    // 成功的授权 scope
        }): void;
    }
    /**
     * 获取授权码。
     * 详细用户授权接入参考 [指引](https://docs.alipay.com/mini/introduce/auth)。
     */
    function getAuthCode(options: GetAuthCodeOptions): void;
    //#endregion

    //#region 客户端获取会员信息 https://docs.alipay.com/mini/api/userinfo
    interface GetAuthUserInfoOptions extends BaseOptions {
        success?(res: {
            nickName: string;    // 用户昵称
            avatar: string;        // 用户头像链接
        }): void;
    }
    /**
     * 客户端获取会员信息
     * 获取会员信息首先需要获取用户授权，详细会员信息获取参考[指引](https://docs.alipay.com/mini/introduce/auth)，采用 jsapi 调用的方式。
     */
    function getAuthUserInfo(options: GetAuthUserInfoOptions): void;
    //#endregion

    //#region 小程序唤起支付 https://docs.alipay.com/mini/api/openapi-pay
    interface TradePayOptions extends BaseOptions {
        tradeNO?: string;    // 接入小程序支付时传入此参数。此参数为支付宝交易号
        success?(res: {
            // resultCode | 描述
            // -----------|------
            // 9000 | 订单支付成功
            // 8000 | 正在处理中
            // 4000 | 订单支付失败
            // 6001 | 用户中途取消
            // 6002 | 网络连接出错
            // 6004 | 支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
            // 99 | 用户点击忘记密码导致快捷界面退出(only iOS)
            resultCode: string;
        }): void;
    }
    /**
     * 发起支付。
     * 详细接入支付方式参考[指引](https://docs.alipay.com/mini/introduce/pay)。
     * @param options
     */
    function tradePay(options: TradePayOptions): void;
    //#endregion

    //#region 支付代扣签约 https://docs.alipay.com/mini/api/pay-sign
    interface PaySignCenterOptions extends BaseOptions {
        signStr: string;    // 签约字符串
    }

    /**
     * 签约中心
     *
     * 返回码 | 含义
     * ------|------
     * 7000 | 协议签约成功
     * 7001 | 签约结果未知（有可能已经签约成功），请根据外部签约号查询签约状态
     * 7002 | 协议签约失败
     * 6001 | 用户中途取消
     * 6002 | 网络连接错误     * @param options
     */
    function paySignCenter(options: PaySignCenterOptions): void;
    //#endregion

    //#region 小程序二维码 https://docs.alipay.com/mini/api/openapi-qrcode
    // @see https://docs.alipay.com/mini/api/openapi-qrcode
    // @see https://docs.alipay.com/mini/introduce/qrcode
    //#endregion

    //#region 跳转支付宝卡包 https://docs.alipay.com/mini/api/card-voucher-ticket
    /**
     * 打开支付宝卡列表。
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openCardList(): void;
    interface OpenMerchantCardList extends BaseOptions {
        partnerId: string;    // 商户编号
    }

    /**
     * 打开支付宝卡列表。
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     * @param options
     */
    function openMerchantCardList(options: OpenMerchantCardList): void;

    interface OpenCardDetailOptions extends BaseOptions {
        passId: string;    // 卡实例Id
    }
    /**
     * 打开当前用户的某张卡的详情页
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     *
     * passId获取方式：
     * 1）通过alipass创建的卡
     * 调用alipay.pass.instance.add(支付宝pass新建卡券实例接口)接口，在出参“result”中可获取
     * 2）通过会员卡创建的卡
     * 调用alipay.marketing.card.query(会员卡查询)接口，在schema_url中可获取，具体参数为“p=xxx”，xxx即为passId。
     */
    function openCardDetail(options: OpenCardDetailOptions): void;

    /**
     * 打开支付宝券列表
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     *
     * @param options
     */
    function openVoucherList(): void;

    interface OpenMerchantVoucherListOptions extends BaseOptions {
        partnerId: string;    // 商户编号
    }
    /**
     * 打开当前用户的某个商户的券列表
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openMerchantVoucherList(options: OpenMerchantVoucherListOptions): void;

    interface OpenVoucherDetailOptions1 extends BaseOptions {
        passId: string;            // 券实例Id，调用券发放接口可以获取该参数（如果传入了partnerId和serialNumber则不需传入）
    }
    interface OpenVoucherDetailOptions2 extends BaseOptions {
        partnerId: string;        // 商户编号，以 2088 为开头（如果传入了passId则不需传入）
        serialNumber: string;    // 序列号，调用新建卡券模板可以获取该参数（如果传入了passId则不需传入）
    }
    /**
     * 打开当前用户的某张券的详情页（非口碑）
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openVoucherDetail(options: OpenVoucherDetailOptions1 | OpenVoucherDetailOptions2): void;

    interface OpenKBVoucherDetailOptions1 extends BaseOptions {
        passId: string;            // 卡实例Id（如果传入了partnerId和serialNumber则不需传入）
    }
    interface OpenKBVoucherDetailOptions2 extends BaseOptions {
        partnerId: string;        // 商户编号（如果传入了passId则不需传入）
        serialNumber: string;    // 序列号（如果传入了passId则不需传入）
    }
    /**
     * 打开当前用户的某张券的详情页（口碑）
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openKBVoucherDetail(options: OpenKBVoucherDetailOptions1 | OpenKBVoucherDetailOptions2): void;

    /**
     * 打开支付宝票列表。
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openTicketList(): void;

    interface OpenMerchantTicketListOptions extends BaseOptions {
        partnerId: string;    // 商户编号
    }
    /**
     * 打开某个商户的票列表
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openMerchantTicketList(options: OpenMerchantTicketListOptions): void;

    interface OpenTicketDetailOptions1 extends BaseOptions {
        passId: string;    // 卡实例Id（如果传入了partnerId和serialNumber则不需要传入passId）
    }
    interface OpenTicketDetailOptions2 extends BaseOptions {
        partnerId: string;    // 商户编号（如果传入了passId则不需要传入partnerId）
        serialNumber: string;    // 序列号（如果传入了passId则不需要传入serialNumber）
    }
    /**
     * 打开当前用户的某张票的详情页
     *
     * 有关支付宝卡包详细功能，见[支付宝卡包产品介绍](https://docs.alipay.com/mini/introduce/voucher)
     */
    function openTicketDetail(options: OpenTicketDetailOptions1 | OpenTicketDetailOptions2): void;
    //#endregion

    //#region 会员开卡授权 https://docs.alipay.com/mini/api/add-card-auth
    interface AddCardAuthResult {
        success: true | boolean;        // true 表示领卡成功
        resultStatus: string;    // 9000 表示成功
        result: {
            app_id: string;            // 应用id
            auth_code: string;        // 授权码，用于换取authtoken
            state: string;            // 授权的state
            scope: string;            // 授权scope
            template_id: string;    // 会员卡模板Id
            request_id: string;        // 会员卡表单信息请求Id
            out_string: string;        // 会员卡领卡链接透传参数
        };
    }
    interface AddCardAuthResult {
        success: false | boolean;        // false 表示领卡失败
        /**
         * 失败的错误码
         * 领卡失败 code 说明
         * 名称 | 类型 | 说明
         * -----|-----|-----
         * JSAPI_SERVICE_TERMINATED | String | 用户取消
         * JSAPI_PARAM_INVALID | String | url 为空或非法参数
         * JSAPI_SYSTEM_ERROR | String | 系统错误
         */
        code: string;
    }
    interface AddCardAuthOptions extends BaseOptions {
        /**
         * 开卡授权的页面地址，从alipay.marketing.card.activateurl.apply接口获取
         */
        url: string;
        success?(res: AddCardAuthResult): void;
    }
    /**
     * 小程序唤起会员开卡授权页面，小程序接入会员卡[点此查看](https://docs.alipay.com/mini/introduce/card)
     */
    function addCardAuth(options: AddCardAuthOptions): void;
    //#endregion

    //#region 芝麻认证 https://docs.alipay.com/mini/api/zm-service
    interface StartZMVerifyOptions extends BaseOptions {
        bizNo: string;    // 认证标识
        success?(res: {
            token: string;    // 认证标识
            passed: string;    // 认证是否通过
            reason?: string;    // 认证不通过原因
        }): void;
    }
    /**
     * 芝麻认证接口，调用此接口可以唤起芝麻认证页面并进行人脸身份验证。
     * 有关芝麻认证的产品和接入介绍，详见 [芝麻认证](https://docs.alipay.com/mini/introduce/zm-verify)。
     * 需要通过蚂蚁开发平台，调用certification.initialize接口进行[认证初始化](https://docs.alipay.com/zmxy/271/105914)。获得biz_no 后，方能通过以下接口激活芝麻认证小程序。
     */
    function startZMVerify(options: StartZMVerifyOptions): void;
    //#endregion

    //#region 信用借还 https://docs.alipay.com/mini/api/zmcreditborrow
    interface ZMCreditBorrowOptions extends BaseOptions {
        /**
         * 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+随机数
         *
         */
        out_order_no: string;
        /**
         * 信用借还的产品码，传入固定值：w1010100000000002858
         */
        product_code: string;
        /**
         * 物品名称,最长不能超过14个汉字
         */
        goods_name: string;
        /**
         * 租金单位，租金+租金单位组合才具备实际的租金意义。
         * 取值定义如下：
         * DAY_YUAN: 元 / 天
         * HOUR_YUAN: 元 / 小时
         * YUAN: 元
         * YUAN_ONCE: 元 / 次
         */
        rent_unit: string;
        /**
         * 租金，租金 + 租金单位组合才具备实际的租金意义。
         * > 0.00元，代表有租金
         * = 0.00元，代表无租金，免费借用
         * 注：参数传值必须 >= 0，传入其他值会报错参数非法
         */
        rent_amount: string;
        /**
         * 押金，金额单位：元。
         * 注：不允许免押金的用户按此金额支付押金；当物品丢失时，赔偿金额不得高于该金额。
         */
        deposit_amount: string;
        /**
         * 该字段目前默认传Y；
         * 是否支持当借用用户信用不够（不准入）时，可让用户支付押金借用:
         * Y: 支持
         * N: 不支持
         * 注：支付押金的金额等同于deposit_amount。
         */
        deposit_state?: string;    // 该字段目前默认传Y；
        /**
         * 回调到商户的小程序schema地址。说明：商户的回调地址可以在商户后台里进行配置，服务端回调时，首先根据参数：invoke_type 查询是否有对应的配置地址，如果有，则使用已定义的地址，否则，使用该字段定义的地址执行回调；
         * 参考表格下方的说明一；
         * 小程序回调地址参考表格下方的说明三；
         * 说明一：
         *         支付宝商户账号登录我的商家服务打开入口链接；
         *         商家服务中选择“您可能需要->信用借还”或者点击链接；
         *         场景ID配置->配置新ID，选择对应的业务类型、服务类目和联盟，将生成的场景ID作为credit_biz的值传入即可；
         *         回调地址配置->设置小程序回调地址，注意：若设置了该回调地址，则接口my.zmCreditBorrow中的入参invoke_return_url将会失效，以该处设置为准；
         * 说明三:
         *         小程序回调地址示例一：alipays://platformapi/startapp?appId=1999；
         *         小程序回调地址示例二：alipays://platformapi/startapp?appId=1999&page=pages/map；
         */
        invoke_return_url?: string;
        /**
         * 商户访问蚂蚁的对接模式，默认传TINYAPP：
         * TINYAPP：回跳至小程序地址；
         * WINDOWS：支付宝服务窗，默认值；
         */
        invoke_type?: 'TINYAPP' | 'TINYAPP' | 'WINDOWS' | string;
        /**
         * 信用业务服务，注意：该字段不能为空，且必须根据说明的指引配置商户专属的场景ID，商户自助接入时，登录后台可配置场景ID，将后台配置的场景ID作为该字段的输入；
         * 参考说明一自助进行配置；
         */
        credit_biz: string;
        /**
         * 商户订单创建的起始借用时间，格式：YYYY - MM - DD HH: MM: SS。如果不传入或者为空，则认为订单创建起始时间为调用此接口时的时间。
         */
        borrow_time?: string;
        /**
         * 到期时间，不允许为空，请根据实际业务合理设置该值，格式：YYYY - MM - DD HH: MM: SS，是指最晚归还时间，表示借用用户如果超过此时间还未完结订单（未归还物品或者未支付租金）将会进入逾期状态，芝麻会给借用用户发送催收提醒；需要晚于borrow_time。
         */
        expiry_time: string;
        /**
         * 借用用户的手机号码，可选字段。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
         */
        mobile_no?: string;
        /**
         * 物品借用地点的描述，便于用户知道物品是在哪里借的。可为空
         *
         */
        borrow_shop_name?: string;
        /**
         * 租金的结算方式，非必填字段，默认是支付宝租金结算支付 merchant：表示商户自行结算，信用借还不提供租金支付能力； alipay：表示使用支付宝支付功能，给用户提供租金代扣及赔偿金支付能力；
         *
         */
        rent_settle_type?: 'merchant' | 'alipay' | string;
        /**
         * 商户请求状态上下文。商户发起借用服务时，需要在借用结束后返回给商户的参数，格式：json；
         * 如果json的某一项值包含中文，请使用encodeURIComponent对该值进行编码；
         * @example
         * var ext = {
         *     name: encodeURIComponent('名字')
         * };
         * var obj = {
         *     invoke_state: JSON.stringify(ext)
         * }
         */
        invoke_state?: string;
        /**
         * 租金信息描述, 长度不超过14个汉字，只用于页面展示给C端用户，除此之外无其他意义。
         */
        rent_info?: string;
        /**
         * 借用用户的真实姓名，非必填字段。但name和cert_no必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
         */
        name?: string;
        /**
         * 借用用户的真实身份证号，非必填字段。但name和cert_no必须同时非空，或者同时为空，一旦传入会对用户身份进行校验。
         */
        cert_no?: string;
        /**
         * 借用用户的收货地址，可选字段，最大长度128。推荐商户传入此值，会将此手机号码与用户身份信息进行匹配验证，防范欺诈风险。
         */
        address?: string;
        success?(res: {
            /**
             * 6001    用户取消了业务流程
             * 6002    网络异常
             * 9000    成功
             * 4000    系统异常
             */
            resultStatus: '6001' | '6002' | '9000' | '4000' | string;
            result: {
                /**
                 * 商户发起借用服务时传入的参数，需要在借用结束后返回给商户的参数
                 * @example
                 * {"user_name":"john"}
                 */
                invoke_state: string;
                /**
                 * 外部订单号，需要唯一，由商户传入，芝麻内部会做幂等控制，格式为：yyyyMMddHHmmss+4位随机数
                 * @example
                 * 201610010000283627
                 */
                out_order_no: string;
                /**
                 * 芝麻信用借还订单号
                 * @example
                 * 10020027631
                 */
                order_no: string;
                /**
                 * 是否准入:Y:准入；N:不准入(该字段目前无实际意义)
                 */
                admit_state: 'Y' | 'N' | string;
                /**
                 * 物品借用/租赁者的用户id
                 * @example
                 * 2088202924240029
                 */
                user_id: string;
                callbackData: any;    // todo only in example
            }
        }): void;
    }
    function zmCreditBorrow(options: ZMCreditBorrowOptions): void;
    //#endregion

    //#region 文本风险识别 https://docs.alipay.com/mini/api/text-identification
    type TextRiskIdentificationType = 'keyword' | '0' | '1' | '2' | '3' | string;
    interface TextRiskIdentificationOptions extends BaseOptions {
        /**
         * 需要进行风险识别的文本内容
         */
        content: string;
        /**
         * 识别类型：keyword 表示关键词、0 表示广告、1表示涉政、2表示涉黄、3表示低俗辱骂
         */
        type: TextRiskIdentificationType[];
        success?(res: {
            result: {
                /**
                 * 目标内容文本识别到的类型，keyword 表示关键词、0 表示广告、1表示涉政、2表示涉黄、3表示低俗辱骂
                 */
                type: TextRiskIdentificationType;
                /**
                 * 仅当识别命中了 type 为 keyword 时，才会返回该字段
                 */
                hitKeywords?: string[];
                /**
                 * 识别命中得分，最高分100分。仅当识别没有命中 keyword ，但入参中包含了广告或涉政或涉黄时，才会返回该字段
                 */
                score?: string;
            };
            fail?(res: {
                /**
                 * 识别错误码
                 */
                error: string;
                /**
                 * 识别错误消息
                 */
                errorMessage: string;
            }): void;
        }): void;
    }
    /**
     * 文本风险识别， **支付宝客户端10.1.10及以上版本支持。**详细接入参考[指引](https://docs.alipay.com/mini/introduce/text-identification)
     */
    function textRiskIdentification(options: TextRiskIdentificationOptions): void;
    //#endregion

    //#region 小程序跳转 https://docs.alipay.com/mini/api/open-miniprogram
    interface NavigateToMiniProgramOptions extends BaseOptions {
        /**
         * 要跳转的目标小程序appId
         */
        appId: string;
        /**
         * 打开的页面路径，如果为空则打开首页
         */
        path?: string;
        /**
         * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch() ，App.onShow() 中获取到这份数据
         */
        extraData?: any;
        /**
         * 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。默认值 release
         */
        envVersion?: 'develop' | 'trial' | 'release' | string;
    }
    /**
     * 跳转到其他小程序。详细接入参考[指引](https://docs.alipay.com/mini/introduce/open-miniprogram)
     * @param options
     */
    function navigateToMiniProgram(options: NavigateToMiniProgramOptions): void;
    interface NavigateBackMiniProgramOptions extends BaseOptions {
        /**
         * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据
         */
        extraData?: any;
    }
    /**
     * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功
     */
    function navigateBackMiniProgram(options: NavigateBackMiniProgramOptions): void;
    //#endregion

    //#region webview组件控制 https://docs.alipay.com/mini/api/webview-context
    interface WebViewContext {
        postMessage(param: any): void;
    }
    /**
     * 创建并返回 web-view 上下文 webViewContext 对象。
     *
     * @param webviewId 要创建的web-view所对应的id属性
     */
    function createWebViewContext(webviewId: string): WebViewContext;
    //#endregion
}

// 多媒体
declare namespace my {
    //#region 图片 https://docs.alipay.com/mini/api/media-image
    type ImageSourceType = "album" | "camera";
    interface ChooseImageOptions extends BaseOptions {
        /** 最大可选照片数，默认1张 */
        count: number;
        /** 相册选取或者拍照，默认 [‘camera’,‘album’] */
        sourceType: ImageSourceType[];
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success(res: {
            /**
             * 图片文件描述
             */
            apFilePaths: string[];
        }): void;
    }
    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    function chooseImage(options: Partial<ChooseImageOptions>): void;

    interface PreviewImageOptions extends BaseOptions {
        /** 当当前显示图片索引，默认 0 */
        current?: number;
        /** 要预览的图片链接列表 */
        urls: string[];
    }
    /**
     * 预览图片。
     */
    function previewImage(options: PreviewImageOptions): void;

    interface SaveImageOptions extends BaseOptions {
        /**
         * 要保存的图片链接
         */
        url: string;
        success?(res: { errMsg: string }): void;
    }
    /**
     * 保存在线图片到手机相册。
     */
    function saveImage(options: SaveImageOptions): void;

    interface CompressImageOptions extends BaseOptions {
        /**
         * 要压缩的图片地址数组
         */
        apFilePaths: string[];
        /**
         * 压缩级别，支持 0 ~ 4 的整数，默认 4。详见「compressLevel表 说明表」
         * compressLevel表
         * compressLevel | 说明
         * --------------|-----
         * 0 | 低质量
         * 1 | 中等质量
         * 2 | 高质量
         * 3 | 不压缩
         * 4 | 根据网络适应
         */
        compressLevel?: 0 | 1 | 2 | 3 | 4;
        success?(res: {
            /**
             * 压缩后的路径数组
             */
            apFilePaths: string[];
        }): void;
    }
    /**
     * 压缩图片。扫码体验：
     */
    function compressImage(options: CompressImageOptions): void;

    interface GetImageInfoOptions extends BaseOptions {
        /**
         * 图片路径，目前支持：
         * - 网络图片路径
         * - apFilePath路径
         * - 相对路径
         */
        src: string;
        success?(res: {
            width: number;    // 图片宽度（单位px）
            height: number;    // 图片高度（单位px）
            path: string;    // 图片本地路径
        }): void;
    }
    /**
     * 获取图片信息
     */
    function getImageInfo(options: GetImageInfoOptions): void;
    //#endregion
}

// 缓存
declare namespace my {
    //#region 缓存 https://docs.alipay.com/mini/api/storage
    interface SetStorageOptions extends BaseOptions {
        /** 本地缓存中的指定的 key */
        key: string;
        /** 需要存储的内容 */
        data: any;
    }
    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。
     * 这是异步接口。
     */
    function setStorage(options: SetStorageOptions): void;

    /**
     * 同步将数据存储在本地缓存中指定的 key 中。
     * 这是同步接口。
     *
     * @param key 本地缓存中的指定的 key
     * @param data 需要存储的内容
     */
    function setStorageSync(options: { key: string; data: any; }): void;

    interface GetStorageOptions extends BaseOptions {
        /** 本地缓存中的指定的 key */
        key: string;
        /** 接口调用的回调函数,res = {data: key对应的内容} */
        success(res: DataResponse): void;
    }
    /**
     * 获取缓存数据。
     * 这是异步接口。
     */
    function getStorage(options: GetStorageOptions): void;

    /**
     * 同步获取缓存数据。
     * 这是同步接口
     */
    function getStorageSync(options: { key: string; }): any;

    interface RemoveStorageOptions extends BaseOptions {
        key: string;
    }
    /**
     * 删除缓存数据。
     * 这是异步接口。
     */
    function removeStorage(options: RemoveStorageOptions): void;

    /**
     * 同步删除缓存数据。
     * 这是同步接口。
     * @param key 缓存数据的key
     */
    function removeStorageSync(options: { key: string; }): void;

    /**
     * 清除本地数据缓存。
     * 这是异步接口。
     */
    function clearStorage(): void;

    /**
     * 同步清除本地数据缓存。
     * 这是同步接口。
     */
    function clearStorageSync(): void;

    interface StorageInfo {
        /**
         * 当前storage中所有的key
         */
        keys: string[];
        /**
         * 当前占用的空间大小, 单位kb
         */
        currentSize: number;
        /**
         * 限制的空间大小，单位kb
         */
        limitSize: number;
    }
    interface GetStorageInfoOptions extends BaseOptions {
        success(res: StorageInfo): void;
    }
    /**
     * 异步获取当前storage的相关信息
     */
    function getStorageInfo(options: GetStorageInfoOptions): void;

    function getStorageInfoSync(): StorageInfo;
    //#endregion
}

// 文件
declare namespace my {
    //#region 文件 https://docs.alipay.com/mini/api/file
    interface SavedFileData {
        /** 文件保存路径 */
        apFilePath: string;
    }
    interface SaveFileOptions extends BaseOptions {
        /** 文件路径 */
        apFilePath: string;
        success?(res: SavedFileData): void;
    }
    /**
     * 保存文件到本地（本地文件大小总容量限制：10M）
     */
    function saveFile(options: SaveFileOptions): void;

    interface GetFileInfoSuccess {
        /** 文件大小，单位：B */
        size: number;
        /** 摘要结果 */
        digest: string;
    }
    interface GetFileInfoOptions extends BaseOptions {
        /** 文件路径 */
        apFilePath: string;
        /** 摘要算法，支持md5和sha1，默认为md5 */
        digestAlgorithm?: 'md5' | 'sha1';
        success?(options: GetFileInfoSuccess): void;
    }
    /**
     *  获取文件信息
     * 基础库版本 1.4.0 开始支持，低版本需做兼容处理
     */
    function getFileInfo(options: GetFileInfoOptions): void;

    interface SavedFileInfoData {
        /**
         * 文件大小，单位B
         */
        size: number;
        /**
         * 创建时间
         */
        createTime: number;
    }
    interface GetSavedFileInfoOptions extends BaseOptions {
        /** 文件路径 */
        apFilePath: string;
        /** 接口调用成功的回调函数 */
        success?(res: SavedFileInfoData): void;
    }
    /**
     * 获取保存的文件信息
     */
    function getSavedFileInfo(options: GetSavedFileInfoOptions): void;

    interface GetSavedFileListOptions extends BaseOptions {
        success?(res: {
            fileList: Array<{
                /** 文件大小 */
                size: number;
                /** 创建时间 */
                createTime: number;
                /** 文件路径 */
                apFilePath: string;
            }>
        }): void;
    }
    function getSavedFileList(options: GetSavedFileListOptions): void;

    type RemoveSavedFileOptions = GetSavedFileInfoOptions;
    /**
     * 删除某个保存的文件
     */
    function removeSavedFile(options: RemoveSavedFileOptions): void;
    //#endregion
}

// 位置
declare namespace my {
    //#region 位置 https://docs.alipay.com/mini/api/location
    interface LocationData {
        /** 经度 */
        longitude: string;
        /** 纬度 */
        latitude: string;
        /** 精确度，单位m */
        accuracy: string;
        /**
         * 水平精确度，单位m
         */
        horizontalAccuracy: string;
        /**
         * 国家(type>0生效)
         */
        country?: string;
        /**
         * 国家编号 (type>0生效)
         */
        countryCode?: string;
        /**
         * 省份(type>0生效)
         */
        province?: string;
        /**
         * 城市(type>0生效)
         */
        city?: string;
        /**
         * 城市级别的地区代码(type>0生效)
         */
        cityAdcode?: string;
        /**
         * 区县(type>0生效)
         */
        district?: string;
        /**
         * 区县级别的地区代码(type>0生效)
         */
        districtAdcode?: string;
        /**
         * 需要街道级别逆地理的才会有的字段,街道门牌信息，结构是：{ street, number } (type > 1生效)
         */
        streetNumber?: {
            street: string;
            number: string;
        };
        /**
         * 需要POI级别逆地理的才会有的字段, 定位点附近的 POI 信息，结构是：{ name, address } （type > 2生效）
         */
        pois?: Array<{
            name: string;
            address: string;
        }>;
    }
    interface GetLocationOptions extends BaseOptions {
        /**
         * 支付宝客户端经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位
         */
        cacheTimeout: number;
        /**
         * 0：默认，获取经纬度
         * 1：获取经纬度和详细到区县级别的逆地理编码数据
         * 2：获取经纬度和详细到街道级别的逆地理编码数据，不推荐使用
         * 3：获取经纬度和详细到POI级别的逆地理编码数据，不推荐使用
         */
        type: 0 | 1 | 2 | 3;
        /** 接口调用成功的回调函数，返回内容详见返回参数说明。 */
        success(res: LocationData): void;
    }
    /**
     * 获取用户当前的地理位置信息
     */
    function getLocation(options: Partial<GetLocationOptions>): void;

    interface OpenLocationOptions extends BaseOptions {
        /** 经度 */
        longitude: number | string;
        /** 纬度 */
        latitude: number | string;
        /** 位置名称 */
        name: string;
        /** 地址的详细说明 */
        address: string;
        /** 缩放比例，范围 3~19，默认为 15 */
        scale?: number;
    }
    /**
     * 使用微信内置地图查看位置
     */
    function openLocation(options: OpenLocationOptions): void;

    interface ChooseLocationData {
        /**
         * 位置名称
         */
        name: string;
        /**
         * 详细地址
         */
        address: string;
        /**
         * 纬度，浮点数，范围为-90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度，浮点数，范围为-180~180，负数表示西经
         */
        longitude: number;
    }
    interface ChooseLocationOptions extends BaseOptions {
        success(res: ChooseLocationData): void;
    }
    /**
     * 使用支付宝内置地图选择地理位置。
     */
    function chooseLocation(options: ChooseLocationOptions): void;
    //#endregion
}

// 网络
declare namespace my {
    //#region 网络 https://docs.alipay.com/mini/api/network
    interface RequestHeader {
        [key: string]: string;
    }
    interface RequestOptions extends BaseOptions<DataResponse> {
        /** 目标服务器url */
        url: string;
        /** 设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'} */
        header?: RequestHeader;
        /** 默认GET，目前支持GET，POST */
        method?: "GET" | "POST";
        /** 请求的参数 */
        data?: any;
        /**
         * 超时时间，单位ms，默认30000
         */
        timeout?: number;
        /** 期望返回的数据格式，默认json，支持json，text，base64 */
        dataType?: 'json' | 'text' | 'base64';
        /** 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'} */
        success?(res: DataResponse): void;
    }
    function httpRequest(options: RequestOptions): void;

    interface UploadFileOptions extends BaseOptions {
        /** 开发者服务器地址 */
        url: string;
        /** 要上传文件资源的本地定位符 */
        filePath: string;
        /** 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
        fileName: string;
        /**
         * 文件类型
         */
        fileType: 'image' | 'video' | 'audio';
        /** HTTP 请求 Header */
        header?: RequestHeader;
        /** HTTP 请求中其他额外的 form 数据 */
        formData?: any;
        success?(res: {
            /** 服务器返回的数据 */
            data: string;
            /** HTTP 状态码 */
            statusCode: string;
            header: any;
        }): void;
    }
    /**
     * 上传本地资源到开发者服务器。
     */
    function uploadFile(options: UploadFileOptions): void;

    interface DownloadFileOptions extends BaseOptions {
        /** 下载文件地址 */
        url: string;
        /** HTTP 请求 Header */
        header?: RequestHeader;
        /** 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} */
        success?(res: TempFileResponse): void;
    }
    /**
     * 下载文件资源到本地。
     */
    function downloadFile(options: DownloadFileOptions): void;

    interface ConnectSocketOptions extends BaseOptions {
        /** 目标服务器url */
        url: string;
        /** 请求的参数 */
        data?: any;
        /** 设置请求的头部 */
        header?: RequestHeader;
        method?: 'GET' | 'POST';    // todo missing in api
    }
    /**
     * 创建一个 WebSocket 的连接；
     * 一个支付宝小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。
     */
    function connectSocket(options: ConnectSocketOptions): void;

    /**
     * 监听WebSocket连接打开事件。
     */
    function onSocketOpen(callback: () => void): void;

    /**
     * 监听WebSocket关闭。
     */
    function onSocketClose(callback: () => void): void;

    /**
     * 取消监听WebSocket连接打开事件。
     */
    function offSocketOpen(callback: () => void): void;

    /**
     * 监听WebSocket错误。
     */
    function onSocketError(callback: (error: any) => void): void;

    /**
     * 取消监听WebSocket错误。
     */
    function offSocketError(callback: (error: any) => void): void;

    interface SendSocketMessageOptions extends BaseOptions {
        /**
         * 需要发送的内容：普通的文本内容 String 或者经 base64 编码后的 String
         */
        data: string | ArrayBuffer;
        /**
         * 如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段
         */
        isBuffer?: boolean;
    }
    /**
     * 通过 WebSocket 连接发送数据，需要先使用 my.connectSocket 发起建连，并在 my.onSocketOpen 回调之后再发送数据。
     */
    function sendSocketMessage(options: SendSocketMessageOptions): void;

    /**
     * 监听WebSocket接受到服务器的消息事件。
     */
    function onSocketMessage(callback: (res: {
        /**
         * 需要发送的内容：普通的文本内容 String 或者经 base64 编码后的 String
         */
        data: string | ArrayBuffer;
        /**
         * 如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段
         */
        isBuffer?: boolean;
    }) => void): void;
    function offSocketMessage(callback: (error: any) => void): void;

    interface CloseSocketOptions extends BaseOptions {
        success?(res: any): void;
    }
    /**
     * 监听WebSocket关闭。
     */
    function closeSocket(options?: CloseSocketOptions): void;

    /**
     * 取消监听WebSocket关闭。
     */
    function offSocketClose(callback: (error: any) => void): void;
    //#endregion
}

// 设备
declare namespace my {
    //#region canIUse https://docs.alipay.com/mini/api/can-i-use
    /**
     * 判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持。
     * 参数使用 ${API}.${type}.${param}.${option} 或者 ${component}.${attribute}.${option} 方式来调用
     * - API 表示 api 名字
     * - type 取值 object/return/callback 表示 api 的判断类型
     * - param 表示参数的某一个属性名
     * - option 表示参数属性的具体属性值
     * - component 表示组件名称
     * - attribute 表示组件属性名
     * - option 表示组件属性值
     */
    function canIUse(api: string): boolean;
    //#endregion

    //#region 获取基础库版本号 https://docs.alipay.com/mini/api/sdk-version
    const SDKVersion: string;
    //#endregion
    //#region 系统信息 https://docs.alipay.com/mini/api/system-info
    interface SystemInfo {
        /**
         * 手机型号
         */
        model: string;
        /**
         * 设备像素比
         */
        pixelRatio: number;
        /**
         * 窗口宽度
         */
        windowWidth: number;
        /**
         * 窗口高度
         */
        windowHeight: number;
        /**
         * 支付宝设置的语言
         */
        language: string;
        /**
         * 支付宝版本号
         */
        version: string;
        /**
         * 设备磁盘容量
         */
        storage: string;
        /**
         * 当前电量百分比
         */
        currentBattery: string;
        /**
         * 系统版本
         */
        system: string;
        /**
         * 系统名：Android，iOS
         */
        platform: 'Android' | 'iOS' | string;
        /**
         * 屏幕宽度
         */
        screenWidth: number;
        /**
         * 屏幕高度
         */
        screenHeight: number;
        /**
         * 手机品牌
         */
        brand: string;
        /**
         * 用户设置字体大小
         */
        fontSizeSetting: number;
        /**
         * 当前运行的客户端，当前是支付宝则有效值是"alipay"
         */
        app: 'alipay' | string;
    }
    interface GetSystemInfoOptions extends BaseOptions {
        success?(res: SystemInfo): void;
    }
    function getSystemInfo(options: GetSystemInfoOptions): void;
    function getSystemInfoSync(): SystemInfo;
    //#endregion

    //#region 网络状态 https://docs.alipay.com/mini/api/network-status
    interface GetNetworkTypeOptions extends BaseOptions {
        success?(res: {
            /** 网络是否可用 */
            networkAvailable: boolean;
            /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
            networkType: NetworkType;
        }): void;
    }
    type NetworkType = 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';
    function getNetworkType(options: GetNetworkTypeOptions): void;

    /**
     * 开始网络状态变化的监听
     */
    function onNetworkStatusChange(callback: (res: {
        /** 网络是否可用 */
        isConnected: boolean;
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType: NetworkType;
    }) => void): void;

    /**
     * 取消网络状态变化的监听
     */
    function offNetworkStatusChange(): void;
    //#endregion

    //#region 剪贴板 https://docs.alipay.com/mini/api/clipboard
    interface GetClipboardOptions extends BaseOptions {
        success?(res: {
            text: string;
        }): void;
    }
    function getClipboard(options: GetClipboardOptions): void;

    interface SetClipboardOptions extends BaseOptions {
        /** 剪贴板数据 */
        text: string;
    }
    function setClipboard(options: SetClipboardOptions): void;
    //#endregion

    //#region 摇一摇 https://docs.alipay.com/mini/api/shake
    function watchShake(options: BaseOptions): void;
    //#endregion

    //#region 震动 https://docs.alipay.com/mini/api/vibrate
    /**
     * 调用震动功能。
     */
    function vibrate(options?: BaseOptions): void;

    /**
     * 调用震动功能。
     */
    function vibrateLong(options?: BaseOptions): void;

    /**
     * 调用震动功能。
     */
    function vibrateShort(options?: BaseOptions): void;
    //#endregion

    //#region 拨打电话 https://docs.alipay.com/mini/api/macke-call
    interface MakePhoneCallOptions extends BaseOptions {
        /**
         * 需要拨打的电话号码
         */
        number: string;
    }
    /**
     * 拨打电话
     */
    function makePhoneCall(options: MakePhoneCallOptions): void;
    //#endregion

    //#region 获取服务器时间 https://docs.alipay.com/mini/api/get-server-time
    interface GetServerTimeOptions extends BaseOptions {
        success?(res: {
            /** 服务器时间的毫秒数 */
            time: number;
        }): void;
    }
    function getServerTime(options: GetServerTimeOptions): void;
    //#endregion

    //#region 用户截屏事件 https://docs.alipay.com/mini/api/user-capture-screen
    /**
     * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
     */
    function onUserCaptureScreen(callback?: (res: any) => void): void;

    /**
     * 取消监听截屏事件。一般需要与 my.onUserCaptureScreen 成对出现。
     */
    function offUserCaptureScreen(): void;
    //#endregion

    //#region 屏幕亮度 https://docs.alipay.com/mini/api/screen-brightness
    interface SetKeepScreenOnOptions extends BaseOptions {
        /** 是否保持屏幕常亮 */
        keepScreenOn: boolean;
        success?(res: { errMsg: string }): void;
    }
    /**
     * 设置是否保持常亮状态。
     * 仅在当前小程序生效，离开小程序后设置失效。
     */
    function setKeepScreenOn(options?: SetKeepScreenOnOptions): void;

    interface GetScreenBrightnessOptions extends BaseOptions {
        /** 屏幕亮度值，范围 0~1，0 最暗，1 最亮 */
        success(value: number): void;
    }
    /**
     * 获取屏幕亮度
     */
    function getScreenBrightness(options?: GetScreenBrightnessOptions): void;

    interface SetScreenBrightnessOptions extends BaseOptions {
        /** 需要设置的屏幕亮度，取值范围0-1 */
        brightness: number;
    }
    /**
     * 设置屏幕亮度
     */
    function setScreenBrightness(options: SetScreenBrightnessOptions): void;
    //#endregion

    //#region 权限引导 https://docs.alipay.com/mini/api/show-auth-guide
    interface showAuthGuideOptions extends BaseOptions {
        /**
         * 引导的权限标识，用于标识该权限类型(如 LBS)
         * 支持的 authType 如下：
         *
         * 权限名称    权限码    支持平台
         * 后台保活权限    BACKGROUNDER    Android
         * 桌面快捷权限    SHORTCUT    Android
         * 麦克风权限    MICROPHONE    iOS
         * 通讯录权限    ADDRESSBOOK    iOS
         * 相机权限    CAMERA    iOS
         * 照片权限    PHOTO    iOS
         * push通知栏权限    NOTIFICATION    iOS
         * 自启动权限    SELFSTARTING    Android
         * lbs总开关    LBSSERVICE    iOS
         * lbs开关(app)    LBS    iOS
         */
        authType: 'BACKGROUNDER' | 'SHORTCUT' | 'MICROPHONE' | 'ADDRESSBOOK' | 'CAMERA' | 'PHOTO' | 'NOTIFICATION' | 'SELFSTARTING' | 'LBSSERVICE' | 'LBS';
    }
    function showAuthGuide(options: showAuthGuideOptions): void;
    //#endregion
}

// 扫码
declare namespace my {
    //#region 扫码 https://docs.alipay.com/mini/api/scan
    type scanType = "qr" | "bar";
    interface ScanCodeData {
        /**
         * 扫描二维码时返回二维码数据
         */
        code: string;
        /**
         * 所扫码的类型
         */
        qrCode: string;
        /**
         * 扫描条形码时返回条形码数据
         */
        barCode: string;
    }
    interface ScanOptions extends BaseOptions {
        /**
         * 扫码样式(默认 qr)：
         * 1. qr,扫码框样式为二维码扫码框
         * 1. bar，扫码样式为条形码扫码框
         */
        type?: scanType;
        /**
         * 是否隐藏相册（不允许从相册选择图片），只能从相机扫码
         */
        hideAlbum?: boolean;
        success?(res: ScanCodeData): void;
    }
    /**
     * 调起客户端扫码界面，扫码成功后返回对应的结果
     */
    function scan(options: ScanOptions): void;
    //#endregion
}

// 蓝牙
declare namespace my {
    //#region 快速接入 https://docs.alipay.com/mini/api/bluetooth-intro
    //#endregion

    //#region API https://docs.alipay.com/mini/api/bluetooth-api
    interface OpenBluetoothAdapterOptions extends BaseOptions {
        /** 不传的话默认是true，表示是否在离开当前页面时自动断开蓝牙(仅对android有效) */
        autoClose: boolean;
        success(res: {
            /**
             * 是否支持 BLE
             */
            isSupportBLE: boolean;
        }): void;
    }
    /**
     * 初始化小程序蓝牙模块，生效周期为调用 my.openBluetoothAdapter 至调用 my.closeBluetoothAdapter 或小程序被销毁为止。 在小程序蓝牙适配器模块生效期间，开发者可以正常调用下面的小程序API，并会收到蓝牙模块相关的 on 事件回调。
     */
    function openBluetoothAdapter(options: Partial<OpenBluetoothAdapterOptions>): void;

    interface CloseBluetoothAdapterOptions extends BaseOptions {
        success(res: any): void;
    }
    /**
     * 关闭本机蓝牙模块
     */
    function closeBluetoothAdapter(options: CloseBluetoothAdapterOptions): void;

    interface BluetoothAdapterStateData extends ErrMsgResponse {
        /**
         * 是否正在搜索设备
         */
        discovering: boolean;
        /**
         * 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态)
         */
        available: boolean;
    }
    interface GetBluetoothAdapterStateOptions extends BaseOptions {
        success(res: BluetoothAdapterStateData): void;
    }
    /**
     * 获取本机蓝牙适配器状态
     */
    function getBluetoothAdapterState(options: GetBluetoothAdapterStateOptions): void;

    interface StartBluetoothDevicesDiscoveryOptions extends BaseOptions {
        /**
         * 蓝牙设备主 service 的 uuid 列表
         * 某些蓝牙设备会广播自己的主 service 的 uuid。如果这里传入该数组，那么根据该 uuid 列表，只搜索有这个主服务的设备。
         */
        services?: string[];
        /**
         * 否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
         */
        allowDuplicatesKey?: boolean;
        /**
         * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
         */
        interval?: number;
    }
    /**
     * 开始搜寻附近的蓝牙外围设备。搜索结果将在 my.onBluetoothDeviceFound 事件中返回。
     */
    function startBluetoothDevicesDiscovery(options: StartBluetoothDevicesDiscoveryOptions): void;

    interface StopBluetoothDevicesDiscoveryOptions extends BaseOptions {
        success(res: ErrMsgResponse): void;
    }
    /**
     * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
     */
    function stopBluetoothDevicesDiscovery(options: StopBluetoothDevicesDiscoveryOptions): void;

    /**
     * 蓝牙设备信息
     */
    interface BluetoothDevice {
        /**
         * 蓝牙设备名称，某些设备可能没有
         */
        name: string;
        /**
         * (兼容旧版本) 值与 name 一致
         */
        deviceName: string;
        /**
         * 广播设备名称
         */
        localName: string;
        /**
         * 设备的 id
         */
        deviceId: string;
        /**
         * 设备信号强度
         */
        RSSI: number;
        /**
         * 设备的广播内容
         */
        advertisData: ArrayBuffer;
        /**
         * 设备的manufacturerData
         */
        manufacturerData: ArrayBuffer;
    }
    interface GetBluetoothDevicesOptions extends BaseOptions {
        success(
            res: {
                devices: BluetoothDevice[];
            } & ErrMsgResponse
        ): void;
    }
    /**
     * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。
     */
    function getBluetoothDevices(options: GetBluetoothDevicesOptions): void;

    interface GetConnectedBluetoothDevicesOptions extends BaseOptions {
        services?: string[];
        success(
            res: {
                devices: BluetoothDevice[];
            } & ErrMsgResponse
        ): void;
    }
    /**
     * 获取处于已连接状态的设备。
     */
    function getConnectedBluetoothDevices(options: GetConnectedBluetoothDevicesOptions): void;

    interface BLEDeviceOptions extends BaseOptions {
        /**
         * 蓝牙设备id
         */
        deviceId: string;
    }
    /**
     * 连接低功耗蓝牙设备。
     */
    function connectBLEDevice(options: BLEDeviceOptions): void;

    /**
     * 断开与低功耗蓝牙设备的连接。
     */
    function disconnectBLEDevice(options: BLEDeviceOptions): void;

    interface WriteBLECharacteristicValueOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 蓝牙设备特征值对应的值，16进制字符串，限制在20字节内
         */
        value: string;
    }
    /**
     * 向低功耗蓝牙设备特征值中写入数据。
     */
    function writeBLECharacteristicValue(
        options: WriteBLECharacteristicValueOptions
    ): void;

    interface ReadBLECharacteristicValueOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        success(
            res: {
                characteristic: {
                    /**
                     * 蓝牙设备特征值的 uuid
                     */
                    characteristicId: string;
                    /**
                     * 蓝牙设备特征值对应服务的 uuid
                     */
                    serviceId: string;
                    /**
                     * 蓝牙设备特征值对应的二进制值
                     */
                    value: ArrayBuffer;
                };
            } & ErrMsgResponse
        ): void;
    }

    /**
     * 读取低功耗蓝牙设备特征值中的数据。调用后在 my.onBLECharacteristicValueChange() 事件中接收数据返回。
     */
    function readBLECharacteristicValue(options: ReadBLECharacteristicValueOptions): void;

    interface NotifyBLECharacteristicValueChangeOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应 service 的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * notify 的 descriptor 的 uuid （只有android 会用到，非必填，默认值00002902-0000-10008000-00805f9b34fb）
         */
        descriptorId?: string;
        /**
         * 是否启用notify或indicate
         */
        state?: boolean;
    }
    function notifyBLECharacteristicValueChange(optons: NotifyBLECharacteristicValueChangeOptions): void;

    interface NotifyBLECharacteristicValueChangedOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * notify 的 descriptor 的 uuid （只有android 会用到，非必填，默认值00002902-0000-10008000-00805f9b34fb）
         */
        descriptorId?: string;
        /**
         * true: 启用 notify; false: 停用 notify
         */
        state: boolean;
        success(res: ErrMsgResponse): void;
    }
    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：设备的特征值必须支持 notify/indicate 才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用 notify 才能监听到设备 characteristicValueChange 事件。
     */
    function notifyBLECharacteristicValueChanged(options: NotifyBLECharacteristicValueChangedOptions): void;

    interface GetBLEDeviceServicesOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 成功则返回本机蓝牙适配器状态
         */
        success(res: {
            services: Array<{
                /**
                 * 蓝牙设备服务的 uuid
                 */
                serviceId: string;
                /**
                 * 该服务是否为主服务
                 */
                isPrimary: boolean;
            }>;
        } & ErrMsgResponse): void;
    }
    /**
     * 获取蓝牙设备所有 service（服务）
     */
    function getBLEDeviceServices(options: GetBLEDeviceServicesOptions): void;

    interface GetBLEDeviceCharacteristicsOptions extends BaseOptions {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙服务 uuid
         */
        serviceId: string;
        /**
         * 成功则返回本机蓝牙适配器状态
         */
        success(res: {
            characteristics: Array<{
                /**
                 * 蓝牙设备特征值的 uuid
                 */
                characteristicId: string;
                /**
                 * 蓝牙设备特征值对应服务的 uuid
                 */
                serviceId: string;
                /**
                 * 蓝牙设备特征值对应的16进制值
                 */
                value: ArrayBuffer;
                /**
                 * 该特征值支持的操作类型
                 */
                properties: Array<{
                    /**
                     * 该特征值是否支持 read 操作
                     */
                    read: boolean;
                    /**
                     * 该特征值是否支持 write 操作
                     */
                    write: boolean;
                    /**
                     * 该特征值是否支持 notify 操作
                     */
                    notify: boolean;
                    /**
                     * 该特征值是否支持 indicate 操作
                     */
                    indicate: boolean;
                }>;
            }>;
        } & ErrMsgResponse): void;
    }
    /**
     * 获取蓝牙设备所有 characteristic（特征值）
     */
    function getBLEDeviceCharacteristics(options: GetBLEDeviceCharacteristicsOptions): void;

    interface OnBluetoothDeviceFoundOptions extends BaseOptions {
        success?(res: {
            devices: BluetoothDevice[];
        }): void;
    }
    /**
     * 搜索到新的蓝牙设备时触发此事件。
     */
    function onBluetoothDeviceFound(options: OnBluetoothDeviceFoundOptions): void;

    /**
     * 移除寻找到新的蓝牙设备事件的监听。
     */
    function offBluetoothDeviceFound(callback?: any): void;

    interface OnBLECharacteristicValueChangeOptions extends BaseOptions {
        success?(res: {
            /**
             * 蓝牙设备 id，参考 device 对象
             */
            deviceId: string;
            /**
             * 蓝牙特征值对应 service 的 uuid
             */
            serviceId: string;
            /**
             * 蓝牙特征值的 uuid
             */
            characteristicId: string;
            /**
             * 特征值最新的16进制值
             */
            value: ArrayBuffer;
        }): void;
    }
    /**
     * 监听低功耗蓝牙设备的特征值变化的事件。
     */
    function onBLECharacteristicValueChange(options: OnBLECharacteristicValueChangeOptions): void;

    interface OnBLEConnectionStateChangedOptions extends BaseOptions {
        success?(res: {
            /**
             * 蓝牙设备 id，参考 device 对象
             */
            deviceId: string;
            /**
             * 连接目前的状态
             */
            connected: boolean;
        }): void;
    }
    /**
     * 移除低功耗蓝牙设备的特征值变化事件的监听。
     */
    function offBLECharacteristicValueChange(callback?: any): void;

    /**
     * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。
     */
    function onBLEConnectionStateChanged(options: OnBLEConnectionStateChangedOptions): void;

    /**
     * 移除低功耗蓝牙连接状态变化事件的监听。
     */
    function offBLEConnectionStateChanged(): void;

    interface BluetoothAdapterState {
        /**
         * 蓝牙适配器是否可用
         */
        available: boolean;
        /**
         * 蓝牙适配器是否处于搜索状态
         */
        discovering: boolean;
    }
    /**
     * 监听本机蓝牙状态变化的事件。
     */
    function onBluetoothAdapterStateChange(callback: (res: BluetoothAdapterState) => void): void;

    /**
     * 移除本机蓝牙状态变化的事件的监听。
     */
    function offBluetoothAdapterStateChange(): void;
    //#endregion
}

// iBeacon
declare namespace my {
    //#region iBeacon https://docs.alipay.com/mini/api/yqleyc
    interface StartBeaconDiscoveryOptions extends BaseOptions {
        /**
         * iBeacon设备广播的 uuids
         */
        uuids: string[];
        success?(res: ErrMsgResponse): void;
    }
    /**
     * 开始搜索附近的iBeacon设备
     */
    function startBeaconDiscovery(options: StartBeaconDiscoveryOptions): void;

    interface StopBeaconDiscoveryOptions extends BaseOptions {
        success?(res: ErrMsgResponse): void;
    }
    /**
     * 停止搜索附近的iBeacon设备
     */
    function stopBeaconDiscovery(options: StopBeaconDiscoveryOptions): void;

    interface Beacon {
        /** iBeacon 设备广播的 uuid */
        uuid: string;
        /** iBeacon 设备的主 id */
        major: string;
        /** iBeacon 设备的次 id */
        minor: string;
        /** 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远) */
        proximity: 0 | 1 | 2 | 3;
        /** iBeacon 设备的距离 */
        accuracy: number;
        /** iBeacon 信号强度 */
        rssi: number;
    }
    interface GetBeaconsSuccess {
        beacons: Beacon[];
        /**
         * errorCode=0 ,接口调用成功
         */
        errCode: string;
        /**
         * ok
         */
        errMsg: string;
    }
    interface GetBeaconsOptions extends BaseOptions {
        success?(options: GetBeaconsSuccess): void;
    }
    /**
     * 获取所有已搜索到的iBeacon设备
     */
    function getBeacons(options: GetBeaconsOptions): void;

    interface BeaconUpdateOptions extends BaseOptions {
        success?(res: {
            beacons: Beacon[];
        }): void;
    }
    /**
     * 监听 iBeacon 设备的更新事件
     */
    function onBeaconUpdate(options: BeaconUpdateOptions): void;

    interface BeaconServiceChangeOptions extends BaseOptions {
        success?(res: {
            /**
             * 服务目前是否可用
             */
            available: boolean;
            /**
             * 目前是否处于搜索状态
             */
            discovering: boolean;
        }): void;
    }
    /**
     * 监听 iBeacon 服务的状态变化
     */
    function onBeaconServiceChange(options: BeaconServiceChangeOptions): void;
    //#endregion
}

// 数据安全
declare namespace my {
    //#region 数据安全 https://docs.alipay.com/mini/api/data-safe
    interface RsaOptions extends BaseOptions {
        /**
         * 使用rsa加密还是rsa解密，encrypt加密，decrypt解密
         */
        action: string;
        /**
         * 要处理的文本，加密为原始文本，解密为Base64编码格式文本
         */
        text: string;
        /**
         * rsa秘钥，加密使用公钥，解密使用私钥
         */
        key: string;
        success?(res: {
            /**
             * 经过处理过后得到的文本，加密为Base64编码文本，解密为原始文本
             */
            text: string;
        }): void;
    }
    /**
     * 非对称加密。
     */
    function rsa(options: RsaOptions): void;
    //#endregion
}

// 分享
declare namespace my {
    //#region 分享 https://docs.alipay.com/mini/api/share_app
    //#endregion
}

// 自定义分析
declare namespace my {
    //#region 自定义分析 https://docs.alipay.com/mini/api/report
    /**
     * 自定义分析数据的上报接口。使用前需要在小程序管理后台的事件管理中新建事件，并配置好事件名和字段。
     *
     * @param eventName 自定义事件名，需申请
     * @param data 上报的数据
     */
    function reportAnalytics(eventName: string, data: any): void;

    /**
     * 隐藏分享按钮。
     */
    function hideShareMenu(options?: BaseOptions): void;
    //#endregion
}

declare namespace my {
    interface LaunchOptions {
        /**
         * 打开小程序的路径
         */
        path: string;
        /**
         * 打开小程序的query
         */
        query: object;
        /**
         * 打开小程序的[场景值]
         */
        scene: number;
        /**
         * shareTicket，详见 获取更多[转发信息]
         */
        shareTicket: string;
        /**
         * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
         */
        referrerInfo: object;
        /**
         * 来源小程序或公众号或App的 appId，详见下方说明
         */
        "referrerInfo.appId": string;
        /**
         * 来源小程序传过来的数据，scene=1037或1038时支持
         */
        "referrerInfo.extraData": object;
        // #endregion
    }
    interface AppOptions {
        /**
         * 监听小程序初始化。
         * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
         * 生命周期函数
         */
        onLaunch?: (this: App, option: LaunchOptions) => void;
        /**
         * 监听小程序显示。
         * 当小程序启动，或从后台进入前台显示，会触发 onShow
         * 生命周期函数
         */
        onShow?: (this: App, option: LaunchOptions) => void;
        /**
         * 监听小程序隐藏。
         * 当小程序从前台进入后台，会触发 onHide
         * 生命周期函数
         */
        onHide?: (this: App) => void;
        /**
         * 错误监听函数
         * 当小程序发生脚本错误或者 api 调用失败时
         * 会触发 onError 并带上错误信息
         */
        onError?: (this: App, msg: string) => void;
        /**
         * 小程序退出时触发
         */
        onUnlaunch?: (this: App) => void;
        /**
         * 全局Data
         */
        globalData?: object;
        [key: string]: any;
    }
    interface CreateIntersectionObserverOption {
        thresholds?: [number, number];
        initialRatio?: number;
        selectAll?: boolean;
    }

    interface Margins {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    }
    interface ObserveResponse {
        id: string;
        dataset: any;
        time: number;
        intersectionRatio: number; // 相交区域占目标节点的布局区域的比例
        boundingClientRect: RectArea;
        intersectionRect: RectArea;
        relativeRect: RectArea;
    }
    interface IntersectionObserver {
        relativeTo(selector?: string, margins?: Margins): IntersectionObserver;
        relativeToViewport(margins?: Margins): IntersectionObserver;
        observe(
            selector?: string,
            callback?: (response: ObserveResponse) => void
        ): IntersectionObserver;
        disconnect(): void;
    }
    interface ComponentRelation {
        /** 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant */
        type: "parent" | "child" | "ancestor" | "descendant";
        /** 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联 */
        target?: string;
        /** 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后 */
        linked?: (target: Component) => void;
        /** 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后 */
        linkChanged?: (target: Component) => void;
        /** 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后 */
        unlinked?: (target: Component) => void;
    }
    interface Component {
        /**
         * 组件的文件路径
         */
        is: string;
        /**
         * 节点id
         */
        id: string;
        /**
         * 节点dataset
         */
        dataset: string;
        /**
         * 组件数据，包括内部数据和属性值
         */
        data: any;

        /**
         * 组件数据，包括内部数据和属性值（与 data 一致）
         */
        properties: any;
        /**
         * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
         * 1. 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
         * 2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
         * 3. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题
         * @param data object 以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value
         * @param [callback] callback 是一个回调函数，在这次setData对界面渲染完毕后调用
         */
        setData(
            data: any,
            callback?: () => void
        ): void;
        hasBehavior(behavior: any): boolean;
        triggerEvent(
            name: string,
            details?: any,
            options?: Partial<{
                bubbles: boolean;
                composed: boolean;
                capturePhase: boolean;
            }>
        ): void;
        createSelectorQuery(): SelectorQuery;
        createIntersectionObserver(
            options?: CreateIntersectionObserverOption
        ): IntersectionObserver;
        /**
         * 使用选择器选择组件实例节点
         * 返回匹配到的第一个组件实例对象
         */
        selectComponent(selector: string): Component;
        /**
         * selector  使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
         */
        selectAllComponents(selector: string): Component[];
        getRelationNodes(relationKey: string): ComponentRelation[];
    }
    interface Page extends Component {
        /**
         * data
         */
        data: any;
        /**
         * 强制更新
         */
        forceUpdate(): void;
        /**
         * 字段可以获取到当前页面的路径。
         */
        route(): void;
        /**
         * 更新
         */
        update(): void;
        /**
         * 将页面滚动到目标位置。
         *
         * scrollTop 滚动到页面的目标位置（单位px）
         * [duration] 滚动动画的时长，默认300ms，单位 ms
         */
        pageScrollTo(option?: PageScrollToOptions): void;
        [key: string]: any;
    }
    interface App {
        data: any;
        /**
         * 获取当前页面
         */
        getCurrentPage(): Page;
        [key: string]: any;
    }
    interface EventTarget {
        id: string;
        tagName: string;
        dataset: { [name: string]: string };
    }
    type TouchEventType =
        | "tap"
        | "touchstart"
        | "touchmove"
        | "touchcancel"
        | "touchend"
        | "touchforcechange";

    type TransitionEventType =
        | "transitionend"
        | "animationstart"
        | "animationiteration"
        | "animationend";

    type EventType =
        | "input"
        | "form"
        | "submit"
        | "scroll"
        | TouchEventType
        | TransitionEventType
        | "tap"
        | "longpress";
    interface BaseEvent<T extends string, Detail> {
        type: T;
        timeStamp: number;
        currentTarget: EventTarget;
        target: EventTarget;
        detail: Detail;
    }
    interface Options {
        query: any;        // 当前小程序的 query
        path: string;    // 当前小程序的页面地址
    }
    interface PageOptions {
        data: any;
        onLaunch(this: Page, options: Options): void;
        onShow(this: Page, options: Options): void;
        onHide(this: Page): void;
        onError(this: Page): void;
        [key: string]: any;
    }
    function postMessage(param: any): void;
    type onMessageFun = (p: any) => void;
    let onMessage: onMessageFun;
}

declare function App(app: Partial<my.AppOptions & my.App>): void;

declare function getApp(): my.App;

declare function Behavior(options?: any): my.Component;

declare function Component(options?: any): my.Component;

declare function Page(options: Partial<my.PageOptions & my.Page>): void;

declare function getCurrentPages(): my.Page[];
