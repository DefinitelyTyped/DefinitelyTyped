// Type definitions for lobibox 1.0.1
// Project: https://github.com/arboshiki/lobibox
// Definitions by: Sabeeh Ul Hussnain <https://github.com/itboy87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare var Lobibox: LobiboxModule.LobiboxStatic;
declare module "Lobibox" {
    export = Lobibox;
}
declare namespace LobiboxModule {
    interface MessageBoxesDefault {
        title?           : string;
        horizontalOffset?: number;
        width?           : number;
        height?          : string;  // Height is automatically given calculated by width
        closeButton?     : boolean;  // Show close button or not
        draggable?       : boolean;  // Make messagebox draggable
        customBtnClass?  : string; // Class for custom buttons
        modal?           : boolean;
        debug?           : boolean;
        buttonsAlign?    : string; // Position where buttons should be aligned
        closeOnEsc?      : boolean;  // Close messagebox on Esc press
        delayToRemove?   : number;
        baseClass?       : string;
        showClass?       : string;
        hideClass?       : string;
        msg?             : string;

        // methods
        hide? (): MessageBoxesDefault;
        show? (): MessageBoxesDefault;
        setWidth? (width?: number): MessageBoxesDefault;
        setHeight? (height?: number): MessageBoxesDefault;
        setSize? (width?: number, height?: number): MessageBoxesDefault;
        setPosition? (left?: number|string, top?: number): MessageBoxesDefault;
        setTitle? (title?: string): MessageBoxesDefault;
        getTitle? (): string;

        // events
        // when messagebox show is called but before it is actually shown
        onShow?           (lobibox:any): void ;
        // after messagebox is shown
        shown?            (lobibox:any): void;
        // when messagebox remove method is called but before it is actually hidden
        beforeClose?      (lobibox:any): void;
        // after messagebox is hidden
        closed?           (lobibox:any): void;
    }

    interface MessageBoxesOptions extends MessageBoxesDefault {
        bodyClass?       : string;
        modalClasses? : {
            'error'?     : string,
            'success'?   : string,
            'info'?      : string,
            'warning'?   : string,
            'confirm'?   : string,
            'progress'?  : string,
            'prompt'?    : string,
            'default'?   : string,
            'window'?    : string
        },
        buttonsAlign?: any;
        buttons?: {
            ok?: {
                'class'?: string,
                text?: string,
                closeOnClick?: boolean
            },
            cancel?: {
                'class'?: string,
                text?: string,
                closeOnClick?: boolean
            },
            yes?: {
                'class'?: string,
                text?: string,
                closeOnClick?: boolean
            },
            no?: {
                'class'?: string,
                text?: string,
                closeOnClick?: boolean
            },
        }|any;
        callback? (lobibox:any, type?:string, ev?: any): void;
    }
    interface ConfirmOptions extends MessageBoxesOptions {
        title?           : string;
        width?           : number;
        iconClass?       : string;
    }

    interface PromptOptions extends MessageBoxesOptions, PromptMethods {
        width?: number;
        attrs?: any;         // Object of any valid attribute of input field
        value?: string;          // Value which is given to textfield when messagebox is created
        multiline?: boolean;   // Set this true for multiline prompt
        lines?: number;           // This works only for multiline prompt. Number of lines
        type?: string;       // Prompt type. Available types (text|number|color)
        label?: string;           // Set some text which will be shown exactly on top of textfield
    }
    interface AlertOptions extends MessageBoxesOptions {
        warning?: {
            title?: string,
            iconClass?: string // Change warning alert icon globally
        };
        info?:{
            title?: string,
            iconClass?: string  // Change info alert icon globally
        };
        success?: {
            title?: string,
            iconClass?: string  // Change success alert icon globally
        };
        error?: {
            title?: string,
            iconClass?: string  // Change error alert icon globally
        };
    }
    interface ProgressOptions extends MessageBoxesOptions, ProgressMethods, ProgressEvents {
        width?               : number;
        showProgressLabel?   : boolean;  // Show percentage of progress
        label?               : string;  // Show progress label
        progressTpl?         : boolean;  //Template of progress bar

        //Events
        progressUpdated?     : any;
        progressCompleted?   : any;
    }
    interface WindowOptions extends MessageBoxesOptions {
        width?           : number;
        height?          : any;
        content?         : any;  // HTML Content of window
        url?             : string;  // URL which will be used to load content
        draggable?       : boolean;  // Override default option
        autoload?        : boolean;  // Auto load from given url when window is created
        loadMethod?      : string;  // Ajax method to load content
        showAfterLoad?   : boolean;  // Show window after content is loaded or show and then load content
        params?          : {};  // Parameters which will be send by ajax for loading content
    }
    interface ProgressEvents {
        progressUpdated? (lobibox:LobiboxStatic): void;
        progressComplete? (lobibox:LobiboxStatic): void;
    }
    interface PromptMethods {
        setValue? (val?:string): PromptMethods;
        getValue? (): string;
    }
    interface ProgressMethods {
        setProgress? (progress:number): ProgressMethods;
        getProgress? (): number;
    }

    interface NotifyDefault {
        title?: boolean;                // Title of notification. If you do not include the title in options it will automatically takes its value
        //from Lobibox.notify.OPTIONS object depending of the type of the notifications or set custom string. Set this false to disable title
        size?: string;             // normal, mini, large
        soundPath?: string;   // The folder path where sounds are located
        soundExt?: string;           // Default extension for all sounds
        showClass?: string;        // Show animation class.
        hideClass?: string;       // Hide animation class.
        icon?: boolean;                 // Icon of notification. Leave as is for default icon or set custom string
        msg?: string;                    // Message of notification
        img?: string;                  // Image source string
        closable?: boolean;             // Make notifications closable
        delay?: number;                // Hide notification after this time (in miliseconds)
        delayIndicator?: boolean;       // Show timer indicator
        closeOnClick?: boolean;         // Close notifications by clicking on them
        width?: number;                 // Width of notification box
        sound?: boolean;                // Sound of notification. Set this false to disable sound. Leave as is for default sound or set custom soud path
        position?: string;    // Place to show notification. Available options: "top left", "top right", "bottom left", "bottom right"
    }
    interface NotifyOptions extends NotifyDefault, NotifyMethods {
        'class'?: string; //You can override options for large notifications from here
        large?:     {width?: number};  //You can override options for small notifications from here
        mini?:      {'class'?: string};   //Default options of different style notifications
        success?:   {'class'?: string, 'title'?: string,'icon'?: string,sound?: string};
        error?:     {'class'?: string, 'title'?: string,'icon'?: string,sound?: string};
        warning?:   {'class'?: string, 'title'?: string,'icon'?: string,sound?: string};
        info?:      {'class'?: string, 'title'?: string,'icon'?: string,sound?: string};
    }

    interface NotifyMethods {
        remove? (): any;
    }

    interface LobiboxStatic {
        base:       {OPTIONS: MessageBoxesOptions, DEFAULTS: MessageBoxesDefault};
        alert:      {<T extends MessageBoxesDefault>(type: string, options?: T): LobiboxStatic, DEFAULTS: AlertOptions};
        prompt:     {<T extends MessageBoxesDefault>(type: string, options?: T): LobiboxStatic, DEFAULTS: PromptOptions};
        confirm:    {<T extends MessageBoxesDefault>(options?: ConfirmOptions): T, DEFAULTS: ConfirmOptions};
        progress:   {<T extends MessageBoxesDefault>(options: ProgressOptions): T, DEFAULTS: ProgressOptions};
        window:     {<T extends MessageBoxesDefault>(options: WindowOptions): T, DEFAULTS: WindowOptions};
        notify:     {<T extends NotifyDefault>(type: string, options?: NotifyOptions): T, DEFAULTS?: NotifyDefault,OPTIONS?:NotifyOptions};
    }
}
