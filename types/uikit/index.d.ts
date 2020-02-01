// Type definitions for uikit 3.3.0
// Project: https://getuikit.com
// Definitions by: Weiyu Weng <https://github.com/pcdotfan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare module 'uikit' {

    namespace UIkit {
        const util: object;
        const component: Function;
        const data: string;
        const prefix: string;
        const options: object;
        const version: string;
        const use: Function;
        const mixin: Function;
        const extend: Function;
        const update: Function;

        // Core
        const accordion: import('./core/accordion').Accordion
        const alert: import('./core/alert').Alert
        const cover: import('./core/cover').Cover
        const drop: import('./core/drop').Drop
        const dropdown: import('./core/dropdown').Dropdown
        const formCustom: import('./core/form').FormCustom
        const grid: import('./core/grid').Grid
        const heightMatch: import('./core/height-match').HeightMatch
        const icon: import('./core/icon').Icon
        const image: import('./core/image').Img
        const leader: import('./core/leader').Leader
        const margin: import('./core/margin').Margin
        const modal: import('./core/modal').Modal
        const nav: import('./core/nav').Nav
        const navbar: import('./core/navbar').Navbar
        const offcanvas: import('./core/offcanvas').Offcanvas
        const scroll: import('./core/scroll').Scroll
        const scrollspy: import('./core/scrollspy').Scrollspy
        const scrollspyNav: import('./core/scrollspy').ScrollspyNav
        const sticky: import('./core/sticky').Sticky
        const svg: import('./core/svg').Svg
        const switcher: import('./core/switcher').Switcher
        const tab: import('./core/tab').Tab
        const toggle: import('./core/toggle').Toggle
        const video: import('./core/video').Video
        
        // Components
        const notification: import('./components/notification').Notification
        const countdown: import('./components/countdown').Countdown
        const filter: import('./components/filter').Filter
        const lightbox: import('./components/lightbox').Lightbox
        const lightboxPanel: import('./components/lightbox-panel').LightboxPanel
        const parallax: import('./components/parallax').Parallax
        const slider: import('./components/slider').Slider
        const slideshow: import('./components/slideshow').Slidershow
        const sortable: import('./components/sortable').Sortable
        const tooltip: import('./components/tooltip').Tooltip
        const upload: import('./components/upload').Upload
    }

    export default UIkit
}

declare module 'uikit/dist/js/uikit-icons'