declare namespace Layui {
    interface I18nOptions {
        /**
         * 语言环境，例如 'zh-CN'
         * @default 'zh-CN'
         */
        locale?: string;
        /**
         * 国际化消息对象
         */
        messages?: Record<string, Layui.DeepPartial<I18nMessages>>;
    }

    interface I18nMessages {
        code: {
            /** 复制按钮的提示文本 */
            copy: string;
            /** 复制成功后的提示文本 */
            copied: string;
            /** 复制失败后的提示文本 */
            copyError: string;
            /** 最大化按钮的提示文本 */
            maximize: string;
            /** 恢复大小按钮的提示文本 */
            restore: string;
            /** 预览按钮的提示文本 */
            preview: string;
        };
        colorpicker: {
            /** 清除按钮的文本 */
            clear: string;
            /** 确认按钮的文本 */
            confirm: string;
        };
        dropdown: {
            /** 无数据提示文本 */
            noData: string;
        };
        flow: {
            /** 加载更多按钮的文本 */
            loadMore: string;
            /** 没有更多数据的提示文本 */
            noMore: string;
        };
        form: {
            /** 选择框的国际化消息 */
            select: {
                /** 无数据提示文本 */
                noData: string;
                /** 无匹配项提示文本 */
                noMatch: string;
                /** 选择框的占位符文本 */
                placeholder: string;
            };
            /** 表单验证的国际化消息 */
            validateMessages: {
                /** 必填项提示文本 */
                required: string;
                /** 手机号格式提示文本 */
                phone: string;
                /** 邮箱格式提示文本 */
                email: string;
                /** URL 格式提示文本 */
                url: string;
                /** 数字格式提示文本 */
                number: string;
                /** 日期格式提示文本 */
                date: string;
                /** 身份证号格式提示文本 */
                identity: string;
            };
            /** 验证错误时提示窗口的标题文本 */
            verifyErrorPromptTitle: string;
        };
        laydate: {
            /** 月份面板中月单元格和顶部导航栏的月份文本 */
            months: [
                January: string,
                February: string,
                March: string,
                April: string,
                May: string,
                June: string,
                July: string,
                August: string,
                September: string,
                October: string,
                November: string,
                December: string,
            ];
            /** 日期面板中周单元格的文本 */
            weeks: [
                Sunday: string,
                Monday: string,
                Tuesday: string,
                Wednesday: string,
                Thursday: string,
                Friday: string,
                Saturday: string,
            ];
            /** 时间面板顶部的时、分、秒列表的标题文本 */
            time: [hour: string, minute: string, second: string];
            /** 字面量文本 */
            literal: {
                /** 年面板中年单元格和顶部导航栏年相关的文本，数字和年份单位拼接时使用 */
                year: string;
            };
            /** 日期和时间面板切换按钮的文本 */
            selectDate: string;
            /** 时间和日期面板切换按钮的文本 */
            selectTime: string;
            /** 开始时间 */
            startTime: string;
            /** 结束时间 */
            endTime: string;
            /** 工具按钮的文本 */
            tools: {
                /** 确认按钮的文本 */
                confirm: string;
                /** 清除按钮的文本 */
                clear: string;
                /** 现在按钮的文本 */
                now: string;
                /** 重置按钮的文本 */
                reset: string;
            };
            /** 结束时间早于开始时间的提示文本 */
            rangeOrderPrompt: string;
            /** 无效日期提示文本 */
            invalidDatePrompt: string;
            /** 日期格式错误提示文本 */
            formatErrorPrompt: string;
            /** 自动重置提示文本 */
            autoResetPrompt: string;
            /** 选中结果预览文本 */
            preview: string;
        };
        layer: {
            /** 确认按钮的文本 */
            confirm: string;
            /** 取消按钮的文本 */
            cancel: string;
            /** 窗口默认标题的文本 */
            defaultTitle: string;
            /** 提示输入框(layer.prompt)的国际化消息对象 */
            prompt: {
                /** 超出输入长度后的提示文本 */
                inputLengthPrompt: string;
            };
            /** layer.photos 的国际化消息 */
            photos: {
                /** 无数据提示文本 */
                noData: string;
                /** 工具按钮的国际化消息 */
                tools: {
                    /** 旋转按钮的提示文本 */
                    rotate: string;
                    /** 水平变换按钮的提示文本 */
                    scaleX: string;
                    /** 放大按钮的提示文本 */
                    zoomIn: string;
                    /** 缩小按钮的提示文本 */
                    zoomOut: string;
                    /** 重置按钮的提示文本 */
                    reset: string;
                    /** 关闭按钮的提示文本 */
                    close: string;
                };
                /** 查看图片按钮的文本 */
                viewPicture: string;
                /** URL 错误窗口的国际化消息 */
                urlError: {
                    /** 提示文本 */
                    prompt: string;
                    /** 确认按钮的文本 */
                    confirm: string;
                    /** 取消按钮的文本 */
                    cancel: string;
                };
            };
        };
        laypage: {
            /** 上一页按钮的文本 */
            prev: string;
            /** 下一页按钮的文本 */
            next: string;
            /** 第一页按钮的文本 */
            first: string;
            /** 最后一页按钮的文本 */
            last: string;
            /** 总页数文本 */
            total: string;
            /** 每页显示条数文本 */
            pagesize: string;
            /** 跳转按钮的文本 */
            goto: string;
            /** 当前页码文本 */
            page: string;
            /** 确认按钮的文本 */
            confirm: string;
        };
        table: {
            /** 排序 */
            sort: {
                /** 升序按钮的提示文本 */
                asc: string;
                /** 降序按钮的提示文本 */
                desc: string;
            };
            /** 无数据提示文本 */
            noData: string;
            /** 工具按钮 */
            tools: {
                filter: {
                    /** 筛选按钮的提示文本 */
                    title: string;
                };
                export: {
                    /** 导出按钮的提示文本 */
                    title: string;
                    /** 无数据提示文本 */
                    noDataPrompt: string;
                    /** 不兼容提示文本 */
                    compatPrompt: string;
                    /** CSV 文本 */
                    csvText: string;
                };
                print: {
                    /** 打印按钮的提示文本 */
                    title: string;
                    /** 无数据提示文本 */
                    noDataPrompt: string;
                };
            };
            /** 数据格式错误提示文本 */
            dataFormatError: string;
            /** XHR 请求错误提示文本 */
            xhrError: string;
        };
        transfer: {
            /** 无数据提示文本 */
            noData: string;
            /** 无匹配项提示文本 */
            noMatch: string;
            /** 标题文本 */
            title: [list1: string, list2: string];
            /** 搜索框占位符文本 */
            searchPlaceholder: string;
        };
        tree: {
            /** 默认节点名称文本 */
            defaultNodeName: string;
            /** 无数据提示文本 */
            noData: string;
            /** 删除节点提示文本 */
            deleteNodePrompt: string;
        };
        upload: {
            /** 文件类型文本 */
            fileType: {
                /** 文件 */
                file: string;
                /** 图片 */
                image: string;
                /** 视频 */
                video: string;
                /** 音频 */
                audio: string;
            };
            /** 验证消息文本 */
            validateMessages: {
                /** 文件扩展名错误提示文本 */
                fileExtensionError: string;
                /** 超过文件数量限制提示文本 */
                filesOverLengthLimit: string;
                /** 当前文件数量文本 */
                currentFilesLength: string;
                /** 文件大小超过限制提示文本 */
                fileOverSizeLimit: string;
            };
            /** 文件按钮之后的文本 */
            chooseText: string;
        };
        util: {
            timeAgo: {
                /** x 天前 */
                days: string;
                /** x 小时前 */
                hours: string;
                /** x 分钟前 */
                minutes: string;
                /** 未来时间 */
                future: string;
                /** 刚刚 */
                justNow: string;
            };
            toDateString: {
                /**
                 * 自定义时段
                 * @see [CLDR 时段标准文档](https://www.unicode.org/cldr/charts/47/supplemental/day_periods.html)
                 */
                meridiem(hours: number, minutes: number): string;
            };
        };
    }

    interface I18n {
        config: Required<I18nOptions>;
        set(options?: Partial<I18nOptions>): void;
        /**
         * 根据给定的键从国际化消息对象中获取翻译后的内容
         *
         * 未文档化的私有方法，仅限内部使用
         * @internal
         * @param keypath 语言包中的键路径，例如 'code.copy'
         * @param parameters 占位符替换参数
         * @param options 选项，例如 {locale: 'zh-CN', default: '默认值'}
         */
        translate<P extends Layui.LiteralStringUnion<Layui.DeepPath<I18nMessages>>>(
            keypath: P,
            parameters?: Record<string, any> | any[],
            options?: { locale?: string; default?: string },
        ): Layui.DeepType<I18nMessages, P>;
        /**
         * 根据给定的键从国际化消息对象中获取翻译后的内容
         *
         * 翻译函数的别名，用于简化书写
         * @internal
         * @param keypath 语言包中的键路径，例如 'code.copy'
         * @param parameters 占位符替换参数
         * @param options 选项，例如 {locale: 'zh-CN', default: '默认值'}
         */
        $t: I18n["translate"];
    }
}
