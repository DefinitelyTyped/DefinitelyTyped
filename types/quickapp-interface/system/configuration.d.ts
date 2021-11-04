/**
 * 应用配置 1060+
 * 接口声明: 无需声明
 */
declare module '@system.configuration' {
    interface configurationObj {
        language: string; // 语言
        countryOrRegion: string; // 国家或地区
    }
    /**
     * 获取应用当前的语言环境。默认使用系统的语言环境，会因为设置或系统语言环境改变而发生变化
     *
     */
    function getLocale(): configurationObj;

    /**
     * 设置应用的语言环境。设置完成后，应用会按照新的语言环境来更新页面，并回调onConfigurationChanged
     * 1060+生命周期函数。当系统语言发生变化或应用重新进入时，当前语言环境会重置为系统语言；Web组件与Fetch
     * 接口在请求Header中会携带对应的Accept-Language
     * @param obj
     */
    function setLocale(obj: configurationObj): void;

    /**
     * 获取应用当前的主题模式。
     * [1070+]
     * @return 0：日间模式，1：夜间模式
     */
    function getThemeMode(): number;
}
