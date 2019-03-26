declare namespace AMap {
    namespace Browser {
        /**
         * 当前浏览器userAgent
         */
        const ua: string;
        /**
         * 是否移动设备
         */
        const mobile: boolean;
        /**
         * 平台类型，如：'windows'、'mac'、'ios'、'android'、'other'
         */
        const plat: 'android' | 'ios' | 'windows' | 'mac' | 'other';
        /**
         * 是否mac设备
         */
        const mac: boolean;
        /**
         * 是否windows设备
         */
        const windows: boolean;
        /**
         * 是否iOS设备
         */
        const ios: boolean;
        /**
         * 是否iPad
         */
        const iPad: boolean;
        /**
         * 是否iPhone
         */
        const iPhone: boolean;
        /**
         * 是否安卓设备
         */
        const android: boolean;
        /**
         * 是否安卓4以下系统
         */
        const android23: boolean;
        /**
         * 是否Chrome浏览器
         */
        const chrome: boolean;
        /**
         * 是否火狐浏览器
         */
        const firefox: boolean;
        /**
         * 是否Safari浏览器
         */
        const safari: boolean;
        /**
         * 是否微信
         */
        const wechat: boolean;
        /**
         * 是否UC浏览器
         */
        const uc: boolean;
        /**
         * 是否QQ或者QQ浏览器
         */
        const qq: boolean;
        /**
         * 是否IE
         */
        const ie: boolean;
        /**
         * 是否IE6
         */
        const ie6: boolean;
        /**
         * 是否IE7
         */
        const ie7: boolean;
        /**
         * 是否IE8
         */
        const ie8: boolean;
        /**
         * 是否IE9
         */
        const ie9: boolean;
        /**
         * 是否IE10
         */
        const ie10: boolean;
        /**
         * 是否IE11
         */
        const ie11: boolean;
        /**
         * 	是否Edge浏览器
         */
        const edge: boolean;
        /**
         * 是否IE9以下
         */
        const ielt9: boolean;
        /**
         * 	是否百度浏览器
         */
        const baidu: boolean;
        /**
         * 是否支持LocaStorage
         */
        const isLocalStorage: boolean;
        /**
         * 是否支持Geolocation
         */
        const isGeolocation: boolean;
        /**
         * 是否Webkit移动浏览器
         */
        const mobileWebkit: boolean;
        /**
         * 是否支持Css3D的Webkit移动端浏览器
         */
        const mobileWebkit3d: boolean;
        /**
         * 是否Opera移动浏览器
         */
        const mobileOpera: boolean;
        /**
         * 是否高清屏幕，devicePixelRatio>1
         */
        const retina: boolean;
        /**
         * 	是否触屏
         */
        const touch: boolean;
        /**
         * 是否msPointer设备
         */
        const msPointer: boolean;
        /**
         * 是否pointer设备
         */
        const pointer: boolean;
        /**
         * 是否webkit浏览器
         */
        const webkit: boolean;
        /**
         * 是否支持Css3D的ie浏览器
         */
        const ie3d: boolean;
        /**
         * 是否支持Css3D的Webkit浏览器
         */
        const webkit3d: boolean;
        /**
         * 是否支持Css3D的gecko浏览器
         */
        const gecko3d: boolean;
        /**
         * 是否支持Css3D的opera浏览器
         */
        const opera3d: boolean;
        /**
         * 是否支持Css3D的浏览器
         */
        const any3d: boolean;
        /**
         * 是否支持canvas
         */
        const isCanvas: boolean;
        /**
         * 是否支持svg
         */
        const isSvg: boolean;
        /**
         * 是否支持vml
         */
        const isVML: boolean;
        /**
         * 是否支持WebWorker
         */
        const isWorker: boolean;
        /**
         * 是否支持WebSocket
         */
        const isWebsocket: boolean;
        /**
         * 判断是否支持webgl
         */
        function isWebGL(): boolean;
    }
}
