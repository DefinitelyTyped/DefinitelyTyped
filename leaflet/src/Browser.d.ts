declare module L {

    export class Browser {

        /**
          * true for all Internet Explorer versions.
          */
        static ie: boolean;
    
        /**
          * true for Internet Explorer 6.
          */
        static ie6: boolean;
    
        /**
          * true for Internet Explorer 6.
          */
        static ie7: boolean;
    
        /**
          * true for webkit-based browsers like Chrome and Safari (including mobile
          * versions).
          */
        static webkit: boolean;
    
        /**
          * true for webkit-based browsers that support CSS 3D transformations.
          */
        static webkit3d: boolean;
    
        /**
          * true for Android mobile browser.
          */
        static android: boolean;
    
        /**
          * true for old Android stock browsers (2 and 3).
          */
        static android23: boolean;
    
        /**
          * true for modern mobile browsers (including iOS Safari and different Android
          * browsers).
          */
        static mobile: boolean;
    
        /**
          * true for mobile webkit-based browsers.
          */
        static mobileWebkit: boolean;
    
        /**
          * true for mobile Opera.
          */
        static mobileOpera: boolean;
    
        /**
          * true for all browsers on touch devices.
          */
        static touch: boolean;
    
        /**
          * true for browsers with Microsoft touch model (e.g. IE10).
          */
        static msTouch: boolean;
    
        /**
          * true for devices with Retina screens.
          */
        static retina: boolean;
    
    }
}
