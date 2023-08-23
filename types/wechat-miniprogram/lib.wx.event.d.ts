declare namespace WechatMiniprogram {
    interface Target<DataSet extends IAnyObject = IAnyObject> {
        /** 事件组件的 id */
        id: string
        /** 当前组件的类型 */
        tagName?: string | undefined
        /** 事件组件上由 `data-` 开头的自定义属性组成的集合 */
        dataset: DataSet
        /** 距离页面顶部的偏移量 */
        offsetTop: number
        /** 距离页面左边的偏移量 */
        offsetLeft: number
    }

    /** 基础事件参数 */
    interface BaseEvent<
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > {
        /** 事件类型 */
        type: string
        /** 页面打开到触发事件所经过的毫秒数 */
        timeStamp: number
        /** 事件冒泡路径上所有由 `mark:` 开头的自定义属性组成的集合 */
        mark?: Mark | undefined
        /** 触发事件的源组件 */
        target: Target<TargetDataset>
        /** 事件绑定的当前组件 */
        currentTarget: Target<CurrentTargetDataset>
    }

    /** 自定义事件 */
    interface CustomEvent<
        Detail extends IAnyObject = IAnyObject,
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
        /** 额外的信息 */
        detail: Detail
    }

    /** Touch 对象 */
    interface TouchDetail {
        /** 距离页面可显示区域 (屏幕除去导航条) 左上角距离，横向为 X 轴 */
        clientX: number
        /** 距离页面可显示区域 (屏幕除去导航条) 左上角距离，纵向为 Y 轴 */
        clientY: number
        /** 触摸点的标识符 */
        identifier: number
        /** 距离文档左上角的距离，文档的左上角为原点，横向为 X 轴 */
        pageX: number
        /** 距离文档左上角的距离，文档的左上角为原点，纵向为 Y 轴 */
        pageY: number
    }

    /** canvas Touch 对象 */
    interface TouchCanvasDetail {
        /** 触摸点的标识符 */
        identifier: number
        /** 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴 */
        x: number
        /** 距离 Canvas 左上角的距离，Canvas 的左上角为原点 纵向为Y轴 */
        y: number
    }

    /** 触摸事件 */
    interface Touch<
        Detail extends IAnyObject = IAnyObject,
        T extends TouchDetail | TouchCanvasDetail = TouchDetail,
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > extends CustomEvent<Detail, Mark, CurrentTargetDataset, TargetDataset> {
        /** 触摸事件，当前停留在屏幕中的触摸点信息的数组 */
        touches: T[]
        /** 触摸事件，当前变化的触摸点信息的数组 */
        changedTouches: T[]
    }

    /** 触摸事件响应 */
    type TouchEvent<
        Detail extends IAnyObject = IAnyObject,
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > = Touch<Detail, TouchDetail, Mark, CurrentTargetDataset, TargetDataset>

    /** canvas 触摸事件响应 */
    interface TouchCanvas<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > extends Touch<never, TouchCanvasDetail, Mark, never, TargetDataset> {
        // canvas 中的触摸事件不可冒泡，所以没有 currentTarget。
        currentTarget: never
    }

    /**
     * 图片加载成功时触发
     *
     * 最低基础库: 2.1.0
     */
    type CoverImageLoad<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 图片宽度 */
            width: number
            /** 图片高度 */
            height: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 图片加载失败时触发
     *
     * 最低基础库: 2.1.0
     */
    type CoverImageError = CustomEvent<GeneralCallbackResult>

    /**
     * 拖动过程中触发的事件，event.detail = {x, y, source}
     *
     * 最低基础库: 1.9.90
     */
    type MovableViewChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            x: number
            y: number
            /**
             * 产生移动的原因
             *
             * - `touch` 拖动
             * - `touch-out-of-bounds` 超出移动范围
             * - `out-of-bounds` 超出移动范围后的回弹
             * - `friction` 惯性
             * - `空字符串` setData
             */
            source:
                | 'touch'
                | 'touch-out-of-bounds'
                | 'out-of-bounds'
                | 'friction'
                | ''
        },
        Mark,
        TargetDataset
    >

    /**
     * 缩放过程中触发的事件
     *
     * event.detail = {x, y, scale}
     *
     * x 和 y 字段在 2.1.0 之后支持
     *
     * 最低基础库: 1.9.90
     */
    type MovableViewScale<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 最低基础库: 2.1.0 */
            x: number
            /** 最低基础库: 2.1.0 */
            y: number
            scale: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 滑动开始事件 (同时开启 enhanced 属性后生效)
     *
     * detail { scrollTop, scrollLeft }
     *
     * 最低基础库: 2.12.0
     */
    type ScrollViewDragStart<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            scrollTop: number
            scrollLeft: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 滑动事件 (同时开启 enhanced 属性后生效)
     *
     * detail { scrollTop, scrollLeft }
     *
     * 最低基础库: 2.12.0
     */
    type ScrollViewDragging<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            scrollTop: number
            scrollLeft: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 滑动结束事件 (同时开启 enhanced 属性后生效)
     *
     * detail { scrollTop, scrollLeft }
     *
     * 最低基础库: 2.12.0
     */
    type ScrollViewDragEnd<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            scrollTop: number
            scrollLeft: number
        },
        Mark,
        TargetDataset
    >

    /** 滚动到顶部/左边时触发 */
    type ScrollViewScrollToUpper<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            direction: 'top' | 'left'
        },
        Mark,
        TargetDataset
    >

    /** 滚动到底部/右边时触发 */
    type ScrollViewScrollToLower<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            direction: 'bottom' | 'right'
        },
        Mark,
        TargetDataset
    >

    /**
     * 滚动时触发
     *
     * event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
     */
    type ScrollViewScroll<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            scrollLeft: number
            scrollTop: number
            scrollHeight: number
            scrollWidth: number
            deltaX: number
            deltaY: number
        },
        Mark,
        TargetDataset
    >

    type ScrollViewRefresherPulling<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    type ScrollViewRefresherRefresh<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    type ScrollViewRefresherRestore<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    type ScrollViewRefresherAbort<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    /**
     * current 改变时会触发 change 事件
     *
     * event.detail = {current, source}
     *
     * **Tip**: 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。
     */
    type SwiperChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            current: number
            /**
             * 表示导致变更的原因
             *
             * - `autoplay` 自动播放导致 swiper 变化；
             * - `touch` 用户划动引起 swiper 变化；
             * - 其它原因将用空字符串表示。
             *
             * 最低基础库: 1.4.0
             */
            source: '' | 'autoplay' | 'touch'
            /** 该 swiper-item 的标识符 */
            currentItemId: string
        },
        Mark,
        TargetDataset
    >

    /**
     * swiper-item 的位置发生改变时会触发 transition 事件
     *
     * event.detail = {dx: dx, dy: dy}
     *
     * 最低基础库: 2.4.3
     */
    type SwiperTransition<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            dx: number
            dy: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 动画结束时会触发 animationfinish 事件
     *
     * 最低基础库: 1.9.0
     */
    type SwiperAnimationFinish<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = SwiperChange<Mark, TargetDataset>

    /**
     * progress 动画完成事件
     *
     * 最低基础库 2.4.1
     */
    type ProgressActiveEnd<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            curPercent: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 `wx. getUserInfo` 返回的一致，`open-type="getUserInfo"` 时有效
     *
     * 最低基础库: 1.3.0
     */
    type ButtonGetUserInfo = CustomEvent<
        GeneralCallbackResult & GetUserInfoSuccessCallbackResult
    >

    /**
     * 客服消息回调，`open-type="contact"` 时有效
     *
     * 最低基础库: 1.5.0
     */
    type ButtonContact = CustomEvent<GeneralCallbackResult>

    /**
     * 获取用户手机号回调，`open-type=getPhoneNumber` 时有效
     *
     * 最低基础库: 1.2.0
     */
    type ButtonGetPhoneNumber = CustomEvent<
        GeneralCallbackResult & Partial<GetWeRunDataSuccessCallbackResult>
    >

    /**
     * 当使用开放能力时，发生错误的回调，`open-type=launchApp` 时有效
     *
     * 最低基础库: 1.9.5
     */
    type ButtonError = CustomEvent<GeneralCallbackResult>

    /**
     * 在打开授权设置页后回调，`open-type=openSetting` 时有效
     *
     * 最低基础库: 2.0.7
     */
    type ButtonOpenSetting = CustomEvent<
        GeneralCallbackResult & OpenSettingSuccessCallbackResult
    >

    /**
     * 打开 APP 成功的回调，`open-type=launchApp` 时有效
     *
     * 最低基础库: 2.4.4
     */
    type ButtonLaunchApp = CustomEvent<GeneralCallbackResult>

    /**
     * checkbox-group 中选中项发生改变时触发 change 事件
     *
     * detail = { value: ['选中的checkbox 的 value 的数组'] }
     */
    type CheckboxGroupChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 选中的 checkbox 的 value 的数组 */
            value: string[]
        },
        Mark,
        TargetDataset
    >

    /**
     * 编辑器初始化完成时触发
     *
     * 最低基础库: 2.7.0
     */
    type EditorReady<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    /**
     * 编辑器聚焦时触发
     *
     * event.detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorFocus<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            html: string
            text: string
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delta: any[]
        },
        Mark,
        TargetDataset
    >

    /**
     * 编辑器失去焦点时触发
     *
     * detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorBlur<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = EditorFocus<Mark, TargetDataset>

    /**
     * 编辑器内容改变时触发
     *
     * detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorInput<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = EditorFocus<Mark, TargetDataset>

    /**
     * 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
     *
     * 最低基础库: 2.7.0
     */
    type EditorStatusChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        Partial<{
            align: 'left' | 'center' | 'right' | 'justify'
            bold: 'strong'
            italic: 'em'
            underline: true
            strike: 'del'
            lineHeight: string
            letterSpacing: string
            marginTop: string
            marginBottom: string
            fontFamily: string
            fontSize: string
            color: string
            backgroundColor: string
            list: 'checked' | 'unchecked' | 'ordered' | 'bullet'
            indent: number
            header: number
            script: 'sub' | 'super'
            direction: 'rtl'
        }>,
        Mark,
        TargetDataset
    >

    /**
     * 携带 form 中的数据触发 submit 事件
     *
     * event.detail = {value : {'name': 'value'} , formId: ''}
     */
    type FormSubmit<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            formId?: unknown | undefined
            target: Target
            /** 表单中的数据，需要在表单组件中加上 name 来作为 key。 */
            value: IAnyObject
        },
        Mark,
        TargetDataset
    >

    /** 表单重置时会触发 reset 事件 */
    type FormReset<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            target: Target
        },
        Mark,
        TargetDataset
    >

    /** 键盘输入时触发
     *
     * event.detail = {value, cursor, keyCode}
     *
     * 处理函数可以直接 return 一个字符串，将替换输入框的内容。
     */
    type Input<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 输入框内容 */
            value: string
            /** 光标位置 */
            cursor: number
            /** keyCode 为键值 (目前工具还不支持返回keyCode参数) `2.1.0` 起支持 */
            keyCode?: number | undefined
        },
        Mark,
        TargetDataset
    >

    /**
     * 输入框聚焦时触发
     *
     * event.detail = { value, height }
     */
    type InputFocus<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 输入框内容 */
            value: string
            /** 键盘高度, 在基础库 `1.9.90` 起支持 */
            height: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 输入框失去焦点时触发
     *
     * event.detail = {value: value}
     */
    type InputBlur<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 输入框内容 */
            value: string
        },
        Mark,
        TargetDataset
    >

    /**
     * 点击完成按钮时触发
     *
     * event.detail = {value: value}
     */
    type InputConfirm<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 输入框内容 */
            value: string
        },
        Mark,
        TargetDataset
    >

    /**
     * 键盘高度发生变化的时候触发此事件
     *
     * event.detail = {height: height, duration: duration}
     *
     * **tip**: 键盘高度发生变化，keyboardheightchange 事件可能会多次触发，开发者对于相同的 height 值应该忽略掉
     *
     * 最低基础库: `2.7.0`
     */
    type InputKeyboardHeightChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 键盘高度 */
            height: number
            duration: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 取消选择时触发
     *
     * 最低基础库: 1.9.90
     */
    type PickerCancel<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    /**
     * value 改变时触发 change 事件
     *
     * event.detail = {value}
     *
     * 当 mode = region 时 (最低基础库: 1.4.0)
     *
     * value 改变时触发 change 事件，event.detail = {value, code, postcode}，其中字段 code 是统计用区划代码，postcode 是邮政编码
     */
    type PickerChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /**
             * 当 mode = selector 时, 返回当前选择的 value
             *
             * 当 mode = multiSelector 时, 返回一个索引数组
             *
             * 当 mode = time | date 时, 返回 `"12:01"` | `"2016-09-01"`
             *
             * 当 mode = region 时, 返回 `["广东省", "广州市", "海珠区"]`
             */
            value: string | number[] | [string, string, string]
            /** 统计用区划代码 当 mode = region 时有效 (最低基础库: 1.4.0) */
            code: [string, string, string]
            /** 邮政编码 当 mode = region 时有效 (最低基础库: 1.4.0) */
            postcode: string
        },
        Mark,
        TargetDataset
    >

    /** 列改变时触发 当 `mode = multiSelector` 时有效 */
    type PickerColumnChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 修改的列 */
            column: number
            value: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 滚动选择时触发 change 事件
     *
     * event.detail = {value}
     */
    type PickerViewChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项 (下标从 0 开始)  */
            value: number[]
        },
        Mark,
        TargetDataset
    >

    /**
     * 当滚动选择开始时候触发事件
     *
     * 最低基础库: 2.3.1
     */
    type PickerViewPickStart<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    /**
     * 当滚动选择结束时候触发事件
     *
     * 最低基础库: 2.3.1
     */
    type PickerViewPickEnd<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<never, Mark, TargetDataset>

    /** radio-group 切换事件 */
    type RadioGroupChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        /** radio-group 中选中项的 value */
        {
            value: string
        },
        Mark,
        TargetDataset
    >

    /**
     * 完成一次拖动后触发的事件
     *
     * event.detail = {value}
     */
    type SliderChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** slider 的数值 0 - 100 */
            value: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 拖动过程中触发的事件
     *
     * event.detail = {value}
     *
     * 最低基础库: 1.7.0
     */
    type SliderChanging<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = SliderChange<Mark, TargetDataset>

    /**
     * checked 改变时触发 change 事件
     *
     * event.detail={ value}
     */
    type SwitchChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            value: boolean
        },
        Mark,
        TargetDataset
    >

    /**
     * 输入框聚焦时触发
     *
     * event.detail = { value, height }，height 为键盘高度
     *
     * 在基础库 1.9.90 起支持
     */
    type TextareaFocus<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = InputFocus<Mark, TargetDataset>

    /**
     * 输入框失去焦点时触发
     *
     * event.detail = {value, cursor}
     *
     * **tip**: textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。
     */
    type TextareaBlur<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = InputBlur<Mark, TargetDataset>

    /**
     * 输入框行数变化时调用
     *
     * event.detail = {height: 0, heightRpx: 0, lineCount: 0}
     */
    type TextareaLineChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = CustomEvent<
        {
            /** 输入框高度(px) */
            height: number
            /** 输入框高度(rpx) */
            heightRpx: number
            /** 行数 */
            lineCount: number
            /** 行高 */
            lineHeight: number
        },
        Mark,
        TargetDataset
    >

    /**
     * 当键盘输入时，触发 input 事件
     *
     * event.detail = {value, cursor, keyCode}
     *
     * keyCode 为键值，目前工具还不支持返回 keyCode 参数。
     *
     * **tip**: 不建议在多行文本上对用户的输入进行修改，所以 **bindinput 处理函数的返回值并不会反映到 textarea 上**
     */
    type TextareaInput<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = Input<Mark, TargetDataset>

    /**
     * 点击完成时， 触发 confirm 事件
     *
     * event.detail = {value: value}
     */
    type TextareaConfirm<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = InputConfirm<Mark, TargetDataset>

    /**
     * 键盘高度发生变化的时候触发此事件
     *
     * event.detail = {height: height, duration: duration}
     *
     * **tip**: 键盘高度发生变化，keyboardheightchange事件可能会多次触发，开发者对于相同的height值应该忽略掉
     *
     * 最低基础库: 2.7.0
     */
    type TextareaKeyboardHeightChange<
        Mark extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = IAnyObject
    > = InputKeyboardHeightChange<Mark, TargetDataset>

    /**
     * 功能页返回，且操作成功时触发， detail 格式与具体功能页相关
     *
     * 最低基础库: 2.1.0
     */
    type FunctionalNavigatorSuccess<
        Detail extends IAnyObject = IAnyObject
    > = CustomEvent<Detail, never, never>

    /**
     * 功能页返回，且操作失败时触发， detail 格式与具体功能页相关
     *
     * 最低基础库: 2.1.0
     */
    type FunctionalNavigatorFail<
        Detail extends IAnyObject = IAnyObject
    > = CustomEvent<Detail, never, never>

    /**
     * 当 `target="miniProgram"` 时有效，跳转小程序成功
     *
     * 最低基础库: 2.0.7
     */
    type NavigatorSuccess = CustomEvent
    /**
     * 当 `target="miniProgram"` 时有效，跳转小程序失败
     *
     * `tips`: 需要用户确认跳转 从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 fail cancel。
     *
     * 最低基础库: 2.0.7
     */
    type NavigatorFail = CustomEvent
    /**
     * 当 `target="miniProgram"` 时有效，跳转小程序完成
     *
     * 最低基础库: 2.0.7
     */
    type NavigatorComplete = CustomEvent

    /**
     * 当发生错误时触发 error 事件
     *
     * detail = {errMsg:MediaError.code}
     */
    type AudioError = CustomEvent<{
        /**
         * MediaError.code
         *
         * - 1 获取资源被用户禁止
         * - 2 网络错误
         * - 3 解码错误
         * - 4 不合适资源
         */
        errMsg: 1 | 2 | 3 | 4
    }>

    /** 当开始/继续播放时触发play事件 */
    type AudioPlay = CustomEvent

    /** 当暂停播放时触发 pause 事件 */
    type AudioPause = CustomEvent

    /**
     * 当播放进度改变时触发 timeupdate 事件
     *
     * detail = {currentTime, duration}
     */
    type AudioTimeUpdate = CustomEvent<{
        currentTime: number
        duration: number
    }>

    /** 当播放到末尾时触发 ended 事件 */
    type AudioEnded = CustomEvent

    /** 摄像头在非正常终止时触发，如退出后台等情况 */
    type CameraStop = CustomEvent

    /** 用户不允许使用摄像头时触发 */
    type CameraError = CustomEvent

    /**
     * 相机初始化完成时触发
     *
     * 最低基础库: 2.7.0
     */
    type CameraInitDone = CustomEvent

    /**
     * 在扫码识别成功时触发，仅在 mode="scanCode" 时生效
     *
     * 最低基础库: 2.1.0
     */
    type CameraScanCode = CustomEvent

    /** 当错误发生时触发，event.detail = {errMsg} */
    type ImageError = CoverImageError
    /** 当图片载入完毕时触发，event.detail = {height, width} */
    type ImageLoad = CoverImageLoad

    /**
     * 播放状态变化事件，detail = {code}
     *
     * 最低基础库 1.7.0
     */
    type LivePlayerStateChange = CustomEvent<{
        /**
         * 状态码
         *
         * - `2001` 已经连接服务器
         * - `2002` 已经连接服务器,开始拉流
         * - `2003` 网络接收到首个视频数据包(IDR)
         * - `2004` 视频播放开始
         * - `2005` 视频播放进度
         * - `2006` 视频播放结束
         * - `2007` 视频播放Loading
         * - `2008` 解码器启动
         * - `2009` 视频分辨率改变
         * - `-2301` 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
         * - `-2302` 获取加速拉流地址失败
         * - `2101` 当前视频帧解码失败
         * - `2102` 当前音频帧解码失败
         * - `2103` 网络断连, 已启动自动重连
         * - `2104` 网络来包不稳: 可能是下行带宽不足，或由于主播端出流不均匀
         * - `2105` 当前视频播放出现卡顿
         * - `2106` 硬解启动失败，采用软解
         * - `2107` 当前视频帧不连续，可能丢帧
         * - `2108` 当前流硬解第一个I帧失败，SDK自动切软解
         * - `3001` RTMP -DNS解析失败
         * - `3002` RTMP服务器连接失败
         * - `3003` RTMP服务器握手失败
         * - `3005` RTMP 读/写失败
         */
        code: number
    }>

    /**
     * 全屏变化事件，detail = {direction, fullScreen}
     *
     * 最低基础库 1.7.0
     */
    type LivePlayerFullScreenChange = CustomEvent<{
        direction: 'vertical' | 'horizontal'
        fullScreen: boolean
    }>

    /**
     * 网络状态通知，detail = {info}
     *
     * 最低基础库 1.9.0
     */
    type LivePlayerNetStatus = CustomEvent<{
        /**
         * 网络状态数据
         *
         *
         * - `videoBitrate` 当前视频编/码器输出的比特率，单位 kbps
         * - `audioBitrate` 当前音频编/码器输出的比特率，单位 kbps
         * - `videoFPS` 当前视频帧率
         * - `videoGOP` 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
         * - `netSpeed` 当前的发送/接收速度
         * - `netJitter` 网络抖动情况，抖动越大，网络越不稳定
         * - `videoWidth` 视频画面的宽度
         * - `videoHeight` 视频画面的高度
         */
        info:
            | 'videoBitrate'
            | 'audioBitrate'
            | 'videoFPS'
            | 'videoGOP'
            | 'netSpeed'
            | 'netJitter'
            | 'videoWidth'
            | 'videoHeight'
    }>

    /**
     * 状态变化事件，detail = {code}
     *
     * 最低基础库: 1.7.0
     */
    type LivePusherStateChange = CustomEvent<{
        /**
         * 状态码
         *
         * - `1001` 已经连接推流服务器
         * - `1002` 已经与服务器握手完毕,开始推流
         * - `1003` 打开摄像头成功
         * - `1004` 录屏启动成功
         * - `1005` 推流动态调整分辨率
         * - `1006` 推流动态调整码率
         * - `1007` 首帧画面采集完成
         * - `1008` 编码器启动
         * - `-1301` 打开摄像头失败
         * - `-1302` 打开麦克风失败
         * - `-1303` 视频编码失败
         * - `-1304` 音频编码失败
         * - `-1305` 不支持的视频分辨率
         * - `-1306` 不支持的音频采样率
         * - `-1307` 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
         * - `-1308` 开始录屏失败，可能是被用户拒绝
         * - `-1309` 录屏失败，不支持的Android系统版本，需要5.0以上的系统
         * - `-1310` 录屏被其他应用打断了
         * - `-1311` Android Mic打开成功，但是录不到音频数据
         * - `-1312` 录屏动态切横竖屏失败
         * - `1101` 网络状况不佳: 上行带宽太小，上传数据受阻
         * - `1102` 网络断连, 已启动自动重连
         * - `1103` 硬编码启动失败,采用软编码
         * - `1104` 视频编码失败
         * - `1105` 新美颜软编码启动失败，采用老的软编码
         * - `1106` 新美颜软编码启动失败，采用老的软编码
         * - `3001` RTMP -DNS解析失败
         * - `3002` RTMP服务器连接失败
         * - `3003` RTMP服务器握手失败
         * - `3004` RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期
         * - `3005` RTMP 读/写失败
         */
        code: number
    }>

    /**
     * 网络状态通知，detail = {info}
     *
     * 最低基础库: 1.9.0
     */
    type LivePusherNetStatus = CustomEvent<{
        /**
         * 网络状态数据
         *
         * -`videoBitrate` 当前视频编/码器输出的比特率，单位 kbps
         * -`audioBitrate` 当前音频编/码器输出的比特率，单位 kbps
         * -`videoFPS` 当前视频帧率
         * -`videoGOP` 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
         * -`netSpeed` 当前的发送/接收速度
         * -`netJitter` 网络抖动情况，抖动越大，网络越不稳定
         * -`videoWidth` 视频画面的宽度
         * -`videoHeight` 视频画面的高度
         */
        info:
            | 'videoBitrate'
            | 'audioBitrate'
            | 'videoFPS'
            | 'videoGOP'
            | 'netSpeed'
            | 'netJitter'
            | 'videoWidth'
            | 'videoHeight'
    }>

    /**
     * 渲染错误事件，detail = {errMsg, errCode}
     *
     * `tip`: 开发者工具上暂不支持 live-pusher
     *
     * 最低基础库: 1.7.4
     */
    type LivePusherError = CustomEvent<{
        errMsg: string
        /**
         * 错误码
         *
         * - `10001` 用户禁止使用摄像头
         * - `10002` 用户禁止使用录音
         * - `10003` 背景音资源 (BGM) 加载失败
         * - `10004` 等待画面资源 (waiting-image) 加载失败
         */
        errCode: number
    }>

    /**
     * 背景音开始播放时触发
     *
     * 最低基础库: 2.4.0
     */
    type LivePusherBgmStart = CustomEvent

    /**
     * 背景音进度变化时触发，detail = {progress, duration}
     *
     * 最低基础库: 2.4.0
     */
    type LivePusherBgmProgress = CustomEvent<{
        progress: number
        duration: number
    }>

    /**
     * 背景音播放完成时触发
     *
     * 最低基础库: 2.4.0
     */
    type LivePusherBgmComplete = CustomEvent

    /** 当开始/继续播放时触发play事件 */
    type VideoPlay = CustomEvent

    /** 当暂停播放时触发 pause 事件 */
    type VideoPause = CustomEvent

    /** 当播放到末尾时触发 ended 事件 */
    type VideoEnded = CustomEvent

    /** 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次 */
    type VideoTimeUpdate = CustomEvent<{
        currentTime: number
        duration: number
    }>

    /**
     * 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}
     *
     * 最低基础库: 1.4.0
     */
    type VideoFullScreenChange = CustomEvent<{
        fullScreen: boolean
        direction: 'vertical' | 'horizontal'
    }>

    /**
     * 视频出现缓冲时触发
     *
     * 最低基础库: 1.7.0
     */
    type VideoWaiting = CustomEvent

    /**
     * 视频播放出错时触发
     *
     * 最低基础库: 1.7.0
     */
    type VideoError = CustomEvent

    /**
     * 加载进度变化时触发，只支持一段加载。
     *
     * 最低基础库: 2.4.0
     */
    type VideoPregress = CustomEvent<{
        /** 百分比 */
        buffered: number
    }>

    /**
     * 加载进度变化时触发，只支持一段加载。
     *
     * 最低基础库: 2.4.0
     */
    type VoipRoomError = CustomEvent

    /**
     * 点击地图时触发
     *
     * 2.9.0 起返回经纬度信息
     */
    type MapTap = CustomEvent<{
        /** 经度，最低基础库 2.9.0 */
        longitude: number
        /** 纬度，最低基础库 2.9.0 */
        latitude: number
    }>

    /**
     * 点击标记点时触发
     *
     * e.detail = {markerId}
     */
    type MarkerTap = CustomEvent<{
        /** 标记点 ID */
        markerId: number
    }>

    /**
     * 点击 label 时触发
     *
     * e.detail = {markerId}
     *
     * 最低基础库: 2.9.0
     */
    type LabelTap = MarkerTap

    /**
     * 点击控件时触发
     *
     * e.detail = {controlId}
     */
    type ControlTap = CustomEvent<{
        /** 控件 ID */
        controlId: number
    }>

    /**
     * 点击 label 时触发
     *
     * e.detail = {markerId}
     *
     * 最低基础库: 1.2.0
     */
    type CalloutTap = MarkerTap

    /**
     * 在地图渲染更新完成时触发
     *
     * 最低基础库: 1.6.0
     */
    type MapUpdated = CustomEvent

    /**
     * 在地图渲染更新完成时触发
     *
     * 最低基础库: 1.6.0
     */
    type RegionChange = CustomEvent<{
        /** 旋转程度，最低基础库 2.3.0 */
        rotate: number
        /** 缩放程度，最低基础库 2.3.0 */
        skew: number
    }> &
        (
            | {
                  /**
                   * 视野变化开始、结束时触发
                   *
                   * 视野变化开始为 `begin`
                   */
                  type: 'begin'
                  /**
                   * 导致视野变化的原因
                   *
                   * - gesture: 用户手势
                   * - update: 调用接口导致
                   */
                  causedBy: 'gesture' | 'update'
              }
            | {
                  /**
                   * 视野变化结束时触发
                   *
                   * 视野变化结束为 `end`
                   */
                  type: 'end'
                  /**
                   * 导致视野变化的原因
                   *
                   * - drag: 拖动地图导致
                   * - scale: 缩放导致
                   * - update: 调用接口导致
                   */
                  causedBy: 'drag' | 'scale' | 'update'
              }
        )

    /**
     * 广告加载成功的回调
     *
     * 最低基础库: 2.2.1
     */
    type AdLoad = CustomEvent

    /**
     * 广告加载失败的回调，event.detail = {errCode: 1002}
     *
     * `tip`: 监听到error回调后，开发者可以针对性的处理，比如隐藏广告组件的父容器，以保证用户体验，但不要移除广告组件，否则将无法收到bindload的回调。
     *
     * 最低基础库: 2.2.1
     */
    type AdError = CustomEvent<{
        /**
         * 错误码
         *
         * - `1000` 后端错误调用失败 该项错误不是开发者的异常情况 一般情况下忽略一段时间即可恢复。
         * - `1001` 参数错误 使用方法错误 可以前往developers.weixin.qq.com 确认具体教程 (小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换)。
         * - `1002` 广告单元无效 可能是拼写错误、或者误用了其他APP的广告ID 请重新前往mp.weixin.qq.com确认广告位ID。
         * - `1003` 内部错误 该项错误不是开发者的异常情况 一般情况下忽略一段时间即可恢复。
         * - `1004` 无适合的广告 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告 属于正常情况，且开发者需要针对这种情况做形态上的兼容。
         * - `1005` 广告组件审核中 你的广告正在被审核，无法展现广告 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。
         * - `1006` 广告组件被驳回 你的广告审核失败，无法展现广告 请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。
         * - `1007` 广告组件被驳回 你的广告能力已经被封禁，封禁期间无法展现广告 请前往mp.weixin.qq.com确认小程序广告封禁状态。
         * - `1008` 广告单元已关闭 该广告位的广告能力已经被关闭 请前往mp.weixin.qq.com重新打开对应广告位的展现。
         */
        errCode: number
    }>

    /**
     * 广告关闭的回调
     *
     * 最低基础库: 2.6.5
     */
    type AdClose = CustomEvent

    /**
     * 网页向小程序 postMessage 时，会在特定时机 (小程序后退、组件销毁、分享) 触发并收到消息。e.detail = { data }
     *
     * 最低基础库: 1.6.4
     */
    type WebviewMessage = CustomEvent<{
        /** 多次 postMessage 的参数组成的数组 */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any[]
    }>

    /**
     * 网页加载成功时候触发此事件。e.detail = { src }
     *
     * 最低基础库: 1.6.4
     */
    type WebviewLoad = CustomEvent<{
        src: string
    }>

    /**
     * 网页加载失败的时候触发此事件。e.detail = { src }
     *
     * 最低基础库: 1.6.4
     */
    type WebviewError = CustomEvent<{
        src: string
    }>
}
