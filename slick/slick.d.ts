// Type definitions for slick (the last carousel you'll ever need)
// Project: https://github.com/kenwheeler/slick/
// Definitions by: Martin Duparc <https://github.com/martinduparc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts" />

interface SlickSettings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    asNavFor?: string;
    appendArrows?: string;
    prevArrow?: any;
    nextArrow?: any;
    centerMode?: boolean;
    centerPadding?: string;
    cssEase?: string;
    customPaging?: () => void;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    focusOnSelect?: boolean;
    easing?: string;
    edgeFriction?: number;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: string;
    mobileFirst?: boolean;
    pauseOnHover?: boolean;
    pauseOnDotsHover?: boolean;
    respondTo?: string;
    responsive?: any;
    rows?: number;
    slide?: any;
    slidesPerRow?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    rtl?: boolean;
}

interface Slick {
    (): JQuery;
    (settings: SlickSettings): JQuery;
}

interface JQuery {
    slick: Slick;
}
