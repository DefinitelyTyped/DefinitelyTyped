/**
 * 应用配置 1060+
 * 接口声明: 无需声明
 */
declare module "@system.configuration" {
    interface LocaleOptions {
        /**
         * 语言
         */
        language: string;
        /**
         * 国家或地区
         */
        countryOrRegion: string;
    }

    /**
     * 获取应用当前的语言环境。默认使用系统的语言环境，会因为设置或系统语言环境改变而发生变化
     */
    function getLocale(): LocaleOptions;

    /**
     * 设置应用的语言环境。设置完成后，应用会按照新的语言环境来更新页面，并回调onConfigurationChanged 1060+ 生命周期函数。
     * 当系统语言发生变化或应用重新进入时，当前语言环境会重置为系统语言；Web组件与Fetch接口在请求Header中会携带对应的Accept-Language
     */
    function setLocale(obj: LocaleOptions): void;

    enum ThemeMode {
        /**
         * 日间模式
         */
        DAY = 0,
        /**
         * 夜间模式
         */
        NIGHT = 1,
    }

    /**
     * 获取应用当前的主题模式。
     * [1070+]
     */
    function getThemeMode(): ThemeMode;

    interface GrayModeDuration {
        /**
         * 每年固定的日期，日期格式为MM/dd
         */
        regular?: string[];
        /**
         * 一次性的临时日期，日期格式为yyyy/MM/dd
         */
        temporary?: string[];
    }

    interface GrayModeOptions {
        /**
         * 是否开启灰色模式
         */
        enable?: boolean;
        /**
         * 灰色模式需要启动的日期
         */
        duration?: GrayModeDuration;
        /**
         * 需要禁用灰色模式的页面列表
         */
        excludedPage?: string[];
    }

    /**
     * 设置灰色模式相关配置。通过该方法设置的配置项会覆盖manifest.json中的相应配置
     * [1100+]
     */
    function setGrayMode(options: GrayModeOptions): void;
}

declare module "quickapp:@system.configuration" {
    export * from "@system.configuration";
}
