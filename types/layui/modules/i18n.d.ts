interface I18nOptions {
    /**
     * 语言环境，例如 'zh-CN'
     * @default 'zh-CN'
     */
    locale?: string;
    /**
     * 国际化消息对象
     */
    messages?: Record<string, Layui.DeepPartial<I18nMessage>>;
}

interface I18nMessage {
    code: {
        copy: string;
        copied: string;
        copyError: string;
        maximize: string;
        restore: string;
        preview: string;
    };
    colorpicker: {
        clear: string;
        confirm: string;
    };
    dropdown: {
        noData: string;
    };
    flow: {
        loadMore: string;
        noMore: string;
    };
    form: {
        select: {
            noData: string;
            noMatch: string;
            placeholder: string;
        };
        validateMessages: {
            required: string;
            phone: string;
            email: string;
            url: string;
            number: string;
            date: string;
            identity: string;
        };
        verifyErrorPromptTitle: string;
    };
    laydate: {
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
        weeks: [
            Sunday: string,
            Monday: string,
            Tuesday: string,
            Wednesday: string,
            Thursday: string,
            Friday: string,
            Saturday: string,
        ];
        time: [hour: string, minute: string, second: string];
        literal: {
            year: string;
        };
        selectDate: string;
        selectTime: string;
        startTime: string;
        endTime: string;
        tools: {
            confirm: string;
            clear: string;
            now: string;
            reset: string;
        };
        rangeOrderPrompt: string;
        invalidDatePrompt: string;
        formatErrorPrompt: string;
        autoResetPrompt: string;
        preview: string;
    };
    layer: {
        confirm: string;
        cancel: string;
        defaultTitle: string;
        prompt: {
            inputLengthPrompt: string;
        };
        photos: {
            noData: string;
            tools: {
                rotate: string;
                scaleX: string;
                zoomIn: string;
                zoomOut: string;
                reset: string;
                close: string;
            };
            viewPicture: string;
            urlError: {
                prompt: string;
                confirm: string;
                cancel: string;
            };
        };
    };
    laypage: {
        prev: string;
        next: string;
        first: string;
        last: string;
        total: string;
        pagesize: string;
        goto: string;
        page: string;
        confirm: string;
    };
    table: {
        sort: {
            asc: string;
            desc: string;
        };
        noData: string;
        tools: {
            filter: {
                title: string;
            };
            export: {
                title: string;
                noDataPrompt: string;
                compatPrompt: string;
                csvText: string;
            };
            print: {
                title: string;
                noDataPrompt: string;
            };
        };
        dataFormatError: string;
        xhrError: string;
    };
    transfer: {
        noData: string;
        noMatch: string;
        title: [list1: string, list2: string];
        searchPlaceholder: string;
    };
    tree: {
        defaultNodeName: string;
        noData: string;
        deleteNodePrompt: string;
    };
    upload: {
        fileType: {
            file: string;
            image: string;
            video: string;
            audio: string;
        };
        validateMessages: {
            fileExtensionError: string;
            filesOverLengthLimit: string;
            currentFilesLength: string;
            fileOverSizeLimit: string;
        };
        chooseText: string;
    };
    util: {
        timeAgo: {
            days: string;
            hours: string;
            minutes: string;
            future: string;
            justNow: string;
        };
        toDateString: {
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
    translation<P extends Layui.LiteralStringUnion<Layui.DeepPath<I18nMessage>>>(
        keypath: P,
        parameters?: Record<string, any> | any[],
        options?: { locale?: string; default?: string },
    ): Layui.DeepType<I18nMessage, P>;
    /**
     * 根据给定的键从国际化消息对象中获取翻译后的内容
     *
     * 翻译函数的别名，用于简化书写
     * @internal
     * @param keypath 语言包中的键路径，例如 'code.copy'
     * @param parameters 占位符替换参数
     * @param options 选项，例如 {locale: 'zh-CN', default: '默认值'}
     */
    $t: I18n["translation"];
}
