// Type definitions for IziToast
// Project https://github.com/dolce/iziToast
// Definitions by: Tarık İNCE <incetarik@hotmail.com> and Marcelo Dolce <dolcemarcelo@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

type IziToastPosition = "bottomRight" | "bottomLeft" | "topRight" | "topLeft" | "topCenter" | "bottomCenter" | "center";
type IziToastTransitionIn = "bounceInLeft" | "bounceInRight" | "bounceInUp" | "bounceInDown" | "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "flipInX";
type IziToastTransitionOut = "fadeOut" | "fadeOutUp" | "fadeOutDown" | "fadeOutLeft" | "fadeOutRight" | "flipOutX";

interface IziToastSettings {
    /**
     * Id of the toast
     */
    id?: string,
    /**
     * The class that will be applied to the toast. It may be used as a reference.
     */
    class?: string,
    /** 
     * Title of the toast.
     */
    title?: string,
    /**	
     * Title color. 
     */
    titleColor?: string,
    /** 
     * Title fontSize. 
     */
    titleSize?: string,
    /** 
     * Title lineHeight. 
     */
    titleLineHeight?: string,
    /** 
     * Message of notification. 
     */
    message: string,
    /**	
     * Message color. 
     */
    messageColor?: string,
    /**	
     * Message fontSize. 
     */
    messageSize?: string,
    /** 
     * Message lineHeight. 
     */
    messageLineHeight?: string,
    /** 
     * Background color of the Toast 
     */
    backgroundColor?: string,
    /** 
     * It can be #hexadecimal, pre-defined themes like blue, red, green and yellow or set another class. Create and use like this ".iziToast-color-name" 
     */
    color?: string, 
    /** 
     * Icon class (font-icon of your choice, Icomoon, Fontawesome etc.). 
     */
    icon?: string,
    /** 
     * Icon text (font-icon using text, Material Icons, etc.). 
     */
    iconText?: string,
    /** 
     * Icon color. 
     */
    iconColor?: string,
    /**	
     * Cover image. 
     */
    image?: string,
    /**
     * Width of cover image. 
     * Example 100(px)
     * Default value: null
     */
    imageWidth?: number | null,
    /**
     * Sets maxWidth of toast. 
     * Example 500px 
     * Default value: null
     */
    maxWidth?: number | null,
    /**	
     * The z-index CSS attribute of the toast
     * Default value: null
     */
    zindex?: number | null,
    /** 
     * It can be 1 or 2, or use another layout, creating the class like this: ".iziToast-layout3" 
     * Default value: 1
     */
    layout?: number,
    /**
     * Applies a balloon like toast. 
     * Default value: false
    */
    balloon?: boolean,
    /**
     * Show "x" close button.
     * Default value: true
     */
    close?: boolean,
    /**
     * RTL option
     * Default value: false
     */
    rtl?: boolean,
    /**
     * Where it will be shown. 
     * Default value: bottomRight
     */
    position?: IziToastPosition 
    /** Fixed place where you want to show the toasts. */
    target?: string,
    /**	
     * Add toast to first position. 
     * Default value: true
     */
    targetFirst?: boolean,
    /**
     * Waits for another toast to be closed on 'onClosed' function. You'll need an ID to use it.
     */
    toastOnce?: boolean,
    /** 
     * Amount in milliseconds to close the toast or false to disable. 
     * Default value: 5000
     */
    timeout?: boolean | number,
    /**
     * Drag feature used to close the toast.
     * Default value: true 
     */
    drag?: boolean,
    /** 
     * Pause the toast timeout while the cursor is on it. 
     * Default value: true
     */
    pauseOnHover?: boolean,
    /**
     * Reset the toast timeout while the cursor is on it. 
     * Default value: false
     */
    resetOnHover?: boolean,
    /**	
     * Enable timeout progress bar. 
     * Default value: true
     */
    progressBar?: boolean,
    /**	
     * Progress bar color. 
     */
    progressBarColor?: string,
    /**
     * Enable animations of elements in the toast.
     * Default value: true
     */
    animateInside?: boolean,
    /** 
     * Array of buttons.
     * Array is an array of array that contains (string, function (instance, toast)) types.
     */
    buttons?: ([string, (instance: IziToast, toast: HTMLDivElement) => void])[],
    /**
     * Default toast open animation.
     * Default value: 'fadeInUp'
     */
    transitionIn?: IziToastTransitionIn,
    /**
     * Default toast close animation. 
     * Default value: 'fadeOut'
     */
    transitionOut?: IziToastTransitionOut,
    /**
     * Default toast opening mobile transition. 
     * Default value: 'fadeInUp'
     */
    transitionInMobile?: IziToastTransitionIn,
    /**
     * Default toast closing mobile transition. 
     * Default value: 'fadeOutDown'
     */
    transitionOutMobile?: IziToastTransitionOut,
    /** 
     * Callback function triggered when opening the toast. 
     * @param settings Settings of opening toast.
     * @param toast Toast DOM element.
     */
    onOpening?: (settings: IziToastSettings, toast: HTMLDivElement) => void,
    /** 
     * Callback function triggered when opened the toast. 
     * @param settings Settings of opening toast.
     * @param toast Toast DOM element.
     */
    onOpened?: (settings: IziToastSettings, toast: HTMLDivElement) => void,
    /** 
     * Callback function triggered when closing the toast. 
     * @param settings Settings of closing toast.
     * @param toast Toast DOM element.
     * @param closedBy Closed by info set by hide method.
     */
    onClosing?: (settings: IziToastSettings, toast: HTMLDivElement, closedBy: string) => void,
    /** 
     * Callback function triggered when closed the toast. 
     * @param settings Settings of closing toast.
     * @param toast Toast DOM element.
     * @param closedBy Closed by info set by hide method.
     */
    onClosed?: (settings: IziToastSettings, toast: HTMLDivElement, closedBy: string) => void,

}

interface IziToast {
    /**
     * Opens the toast. 
     */
    show(settings: IziToastSettings): void
    /**
     * Closes the specific toast.
     * @param settings Settings for this toast.
     * @param toast Toast element to hide.
     * @param closedBy Custom closed by info to use in other functions.
     */
    hide(settings: IziToastSettings, toast: HTMLDivElement, closedBy: string): void
    /**
     * Shows an info toast.
     * @param settings Settings for this toast.
     */
    info(settings: IziToastSettings): void
    /**
     * Shows an error toast.
     * @param settings Settings for this toast.
     */
    error(settings: IziToastSettings): void
    /**
     * Shows a warning toast.
     * @param settings Settings for this toast.
     */
    warning(settings: IziToastSettings): void
    /**
     * Shows a success toast.
     * @param settings Settings for this toast.
     */
    success(settings: IziToastSettings): void

    /**
     * Destroys all toasts.
     */
    destroy(): void

    /**
     * Sets default values.
     * @param settings Settings to set as default.
     */
    settings(settings: IziToastSettings): void;
}

declare var iziToast: IziToast;

declare module "izitoast"
{
    export = iziToast;
    
}
