// Type definitions for React OnSenui (react-onsenui) 2.1
// Project: https://onsen.io/v2/docs/guide/react/
// Definitions by: Ozytis <https://ozytis.fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import {
    Component
} from 'react';



declare namespace ReactOnSenUI {

    interface Modifiers_string {
        default?: string,
        material?: string
    }

    interface Modifiers_number {
        default?: number,
        material?: number
    }

    interface AnimationOptions {
        duration?: number,
        delay?: number,
        timing?: string
    }

    /*** splitter ***/

    class SplitterSide extends Component<{
        side?: "left" | "right",
        collapse?: "portrait" | "landscape" | boolean,
        isOpen?: boolean,
        onOpen?: (e?: Event) => void,
        onPreOpen?: (e?: Event) => void,
        onPreClose?: (e?: Event) => void,
        onModeChange?: (e?: Event) => void,
        onClose?: (e?: Event) => void,
        isSwipeable?: boolean,
        swipeTargetWidth?: number,
        width?: number,
        animation?: "overlay" | "default"
        animationOptions?: AnimationOptions,
        openThreshold?: number,
        mode?: "collapse" | "split"
    }, any>{

    }


    class SplitterContent extends Component<{}, any> {

    }

    class Splitter extends Component<{}, any> {

    }

    /*** toolbar ***/

    class Toolbar extends Component<{}, any>{

    }


    class BottomToolbar extends Component<{
        modifier?: string
    }, any>{

    }


    class ToolbarButton extends Component<{
        modifier?: string,
        disabled?: boolean,
        onClick?: (e?: Event) => void
    }, any>{

    }

    /*** icon ***/

    class Icon extends Component<{
        modifier?: string,
        icon?: string | Modifiers_string,
        size?: number | Modifiers_number,
        rotate?: 90 | 180 | 270,
        fixedWidth?: boolean,
        spin?: boolean
    }, any>{
    }

    /*** page ***/

    class Page extends Component<{
        contentStyle?: any,
        modifier?: string,
        renderModal?: () => void,
        renderToolbar?: () => void,
        renderBottomToolbar?: () => void,
        renderFixed?: () => void,
        onInit?: () => void,
        onShow?: () => void,
        onHide?: () => void
    }, any>{

    }

    /*** Grid ***/
    class Col extends Component<{
        verticalAlign?: "top" | "bottom" | "center",
        width?: string
    }, any>{

    }

    class Row extends Component<{
        verticalAlign?: "top" | "bottom" | "center",
    }, any>{

    }

    /*** Navigation ***/
    class BackButton extends Component<{
        modifier?: string,
        onClick?: (navigator: Navigator) => void
    }, any>{

    }

    class Navigator extends Component<{
        renderPage: () => any,
        initialRouteStack?: string[],
        initialRoute?: any,
        onPrePush?: () => void,
        onPostPush?: () => void,
        onPrePop?: () => void,
        onPostPop?: () => void,
        animation?: "slide" | "lift" | "fade" | "none" | string,
        animationOptions?: AnimationOptions
    }, any>{
        resetPage(route: any, options: any): void;
        resetPageStack(route: any, options: any): void;
        pushPage(route: any, options: any): void;
        popPage(route: any, options: any): void;
    }

    /*** Carousel ***/
    class Carousel extends Component<{
        direction?: "horizontal" | "vertical",
        fullscreen?: boolean,
        overscrollable?: boolean,
        centered?: boolean,	
        itemWidth?: number, 
        itemHeight?: number,
        autoScroll?: boolean,
        autoScrollRatio?: number, 
        swipeable?: boolean,	
        disabled?: boolean,	
        index?: number, 
        autoRefresh?: boolean,
        onPostChange?: () => void,
        onRefresh?: () => void, 
        onOverscroll?: () => void
        animationOptions?: AnimationOptions	
    }, any>{

    }

    class CarouselItem extends Component<{
        modifier: string	
    }, any>{

    }

    /*** AlertDialog ***/
    class AlertDialog extends Component<{
        onCancel?: () => void,
        isOpen?: boolean, 
        isCancelable?: boolean,
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string, 
        maskColor?: string, 
        animationOptions?: AnimationOptions, 
        onPreShow?: () => void,
        onPostShow?: () => void, 
        onPreHide?: () => void, 
        onPostHide?: () => void,
    }, any>{

    }

    class Dialog extends Component<{
        onCancel?: () => void, 
        isOpen?: boolean, 
        isCancelable?: boolean, 
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string, 
        maskColor?: string, 
        animationOptions?: AnimationOptions, 
        onPreShow?: () => void, 	
        onPostShow?: () => void, 	
        onPreHide?: () => void, 	
        onPostHide?: () => void, 	                         
    }, any>{

    }

    class Modal extends Component<{
        animation?: "fade" | "none",
        animationOptions?: AnimationOptions
        onShow?: () => void, 
        onHide?: () => void, 
        isOpen?: boolean 
    }, any>{

    }

    class Popover extends Component<{
        getTarget?: () => Component<any, any> | HTMLElement, 
        onCancel?: () => void,
        isOpen?: boolean, 
        isCancelable?: boolean,
        isDisabled?: boolean, 
        animation?: "none" | "default", 
        modifier?: string,
        maskColor?: string, 
        animationOptions?: AnimationOptions,
        onPreShow?: () => void, 
        onPostShow?: () => void, 
        onPreHide?: () => void, 
        onPostHide?: () => void,
    }, any>{

    }

    class ProgressBar extends Component<{
        modifier?: string, 
        value?: number, 
        secondaryValue?: boolean, 
        intermediate?: boolean, 
    }, any> {

    }

    class ProgressCircular extends Component<{
        modifier?: string, 
        value?: number, 
        secondaryValue?: boolean, 
        intermediate?: boolean, 
    }, any>{

    }

    class Ripple extends Component<{
        color?: string, 
        background?: string,
        disabled?: boolean, 
    }, any>{

    }

    /*** Forms ***/
    class Fab extends Component<{
        modifier?: string,	
        ripple?: boolean,	
        position?: string,	
        disabled?: boolean,	
        onClick?: () => void,
    }, any>{

    }

    class Button extends Component<{
        modifier?: string,	
        disabled?: boolean,	
        ripple?: boolean,	
        onClick?: (e?: Event) => void
    }, any>{

    }

    class Input extends Component<{
        modifier?: string,	
        disabled?: boolean,	
        onChange?: (e: Event) => void,
        value?: string,
        checked?: boolean,
        placehoder?: string,
        type?: string,	
        inputId?: string,
        float?: boolean,
    }, any> {

    }

    class Range extends Component<{
        modifier?: string,	
        onChange?: (e: Event) => void,
        value?: number,	
        disabled?: boolean,
    }, any>{

    }

    class Switch extends Component<{
        onChange?: (e: Event) => void,
        checked?: boolean,
        disabled?: boolean,	
        inputId?: string 
    }, any>{

    }

    /**
     * Tabs
     */

    class Tab extends Component<{}, any>{ }

    class TabActive extends Component<{}, any>{ }

    class TabInactive extends Component<{}, any>{ }

    class Tabbar extends Component<{
        index?: number, 
        renderTabs?: () => any, 
        position?: "bottom" | "top" | "auto", 
        animation: "none" | "slide" | "fade", 
        animationOptions?: AnimationOptions, 
        onPreChange?: () => void,	
        onPostChange?: () => void,	
        onReactive?: () => void, 
    }, any> { }


    /**
     * Lists
     */

    class LazyList extends Component<{
        modifier?: string,
        length?: number,
        renderRow: (rowIndex: number) => any,
        calculateItemHeight: (rowIndex: number) => any, 
    }, any>{ }

    class List extends Component<{
        modifier?: string, 
        dataSource?: string[], 
        renderRow?: () => void, 
        renderHeader?: () => void,
        renderFooter?: () => void,
    }, any>{

    }

    class ListHeader extends Component<{
        modifier?: string, 
    }, any>{

    }

    class ListItem extends Component<{
        modifier?: string, 
        tappable?: boolean, 
        tapBackgroundColor?: string, 
        lockOnDrag?: boolean,
    }, any>{

    }
} 

export = ReactOnSenUI;

