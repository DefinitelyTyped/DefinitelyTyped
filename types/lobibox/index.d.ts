declare var Lobibox: LobiboxModule.LobiboxStatic;
declare module "Lobibox" {
    export = Lobibox;
}
declare namespace LobiboxModule {
    interface MessageBoxesDefault {
        title?: string | undefined;
        horizontalOffset?: number | undefined;
        width?: number | undefined;
        height?: string | undefined; // Height is automatically given calculated by width
        closeButton?: boolean | undefined; // Show close button or not
        draggable?: boolean | undefined; // Make messagebox draggable
        customBtnClass?: string | undefined; // Class for custom buttons
        modal?: boolean | undefined;
        debug?: boolean | undefined;
        buttonsAlign?: string | undefined; // Position where buttons should be aligned
        closeOnEsc?: boolean | undefined; // Close messagebox on Esc press
        delayToRemove?: number | undefined;
        baseClass?: string | undefined;
        showClass?: string | undefined;
        hideClass?: string | undefined;
        msg?: string | undefined;

        // methods
        hide?(): MessageBoxesDefault;
        show?(): MessageBoxesDefault;
        setWidth?(width?: number): MessageBoxesDefault;
        setHeight?(height?: number): MessageBoxesDefault;
        setSize?(width?: number, height?: number): MessageBoxesDefault;
        setPosition?(left?: number | string, top?: number): MessageBoxesDefault;
        setTitle?(title?: string): MessageBoxesDefault;
        getTitle?(): string;

        // events
        // when messagebox show is called but before it is actually shown
        onShow?(lobibox: any): void;
        // after messagebox is shown
        shown?(lobibox: any): void;
        // when messagebox remove method is called but before it is actually hidden
        beforeClose?(lobibox: any): void;
        // after messagebox is hidden
        closed?(lobibox: any): void;
    }

    interface MessageBoxesOptions extends MessageBoxesDefault {
        bodyClass?: string | undefined;
        modalClasses?: {
            "error"?: string | undefined;
            "success"?: string | undefined;
            "info"?: string | undefined;
            "warning"?: string | undefined;
            "confirm"?: string | undefined;
            "progress"?: string | undefined;
            "prompt"?: string | undefined;
            "default"?: string | undefined;
            "window"?: string | undefined;
        } | undefined;
        buttonsAlign?: any;
        buttons?:
            | {
                ok?: {
                    "class"?: string | undefined;
                    text?: string | undefined;
                    closeOnClick?: boolean | undefined;
                } | undefined;
                cancel?: {
                    "class"?: string | undefined;
                    text?: string | undefined;
                    closeOnClick?: boolean | undefined;
                } | undefined;
                yes?: {
                    "class"?: string | undefined;
                    text?: string | undefined;
                    closeOnClick?: boolean | undefined;
                } | undefined;
                no?: {
                    "class"?: string | undefined;
                    text?: string | undefined;
                    closeOnClick?: boolean | undefined;
                } | undefined;
            }
            | any
            | undefined;
        callback?(lobibox: any, type?: string, ev?: any): void;
    }
    interface ConfirmOptions extends MessageBoxesOptions {
        title?: string | undefined;
        width?: number | undefined;
        iconClass?: string | undefined;
    }

    interface PromptOptions extends MessageBoxesOptions, PromptMethods {
        width?: number | undefined;
        attrs?: any; // Object of any valid attribute of input field
        value?: string | undefined; // Value which is given to textfield when messagebox is created
        multiline?: boolean | undefined; // Set this true for multiline prompt
        lines?: number | undefined; // This works only for multiline prompt. Number of lines
        type?: string | undefined; // Prompt type. Available types (text|number|color)
        label?: string | undefined; // Set some text which will be shown exactly on top of textfield
    }
    interface AlertOptions extends MessageBoxesOptions {
        warning?: {
            title?: string | undefined;
            iconClass?: string | undefined; // Change warning alert icon globally
        } | undefined;
        info?: {
            title?: string | undefined;
            iconClass?: string | undefined; // Change info alert icon globally
        } | undefined;
        success?: {
            title?: string | undefined;
            iconClass?: string | undefined; // Change success alert icon globally
        } | undefined;
        error?: {
            title?: string | undefined;
            iconClass?: string | undefined; // Change error alert icon globally
        } | undefined;
    }
    interface ProgressOptions extends MessageBoxesOptions, ProgressMethods, ProgressEvents {
        width?: number | undefined;
        showProgressLabel?: boolean | undefined; // Show percentage of progress
        label?: string | undefined; // Show progress label
        progressTpl?: boolean | undefined; // Template of progress bar

        // Events
        progressUpdated?: any;
        progressCompleted?: any;
    }
    interface WindowOptions extends MessageBoxesOptions {
        width?: number | undefined;
        height?: any;
        content?: any; // HTML Content of window
        url?: string | undefined; // URL which will be used to load content
        draggable?: boolean | undefined; // Override default option
        autoload?: boolean | undefined; // Auto load from given url when window is created
        loadMethod?: string | undefined; // Ajax method to load content
        showAfterLoad?: boolean | undefined; // Show window after content is loaded or show and then load content
        params?: {} | undefined; // Parameters which will be send by ajax for loading content
    }
    interface ProgressEvents {
        progressUpdated?(lobibox: LobiboxStatic): void;
        progressComplete?(lobibox: LobiboxStatic): void;
    }
    interface PromptMethods {
        setValue?(val?: string): PromptMethods;
        getValue?(): string;
    }
    interface ProgressMethods {
        setProgress?(progress: number): ProgressMethods;
        getProgress?(): number;
    }

    interface NotifyDefault {
        title?: string | boolean | undefined; // Title of notification. If you do not include the title in options it will automatically takes its value
        // from Lobibox.notify.OPTIONS object depending of the type of the notifications or set custom string. Set this false to disable title
        size?: string | undefined; // normal, mini, large
        soundPath?: string | undefined; // The folder path where sounds are located
        soundExt?: string | undefined; // Default extension for all sounds
        showClass?: string | undefined; // Show animation class.
        hideClass?: string | undefined; // Hide animation class.
        icon?: boolean | undefined; // Icon of notification. Leave as is for default icon or set custom string
        msg?: string | undefined; // Message of notification
        img?: string | undefined; // Image source string
        closable?: boolean | undefined; // Make notifications closable
        delay?: number | undefined; // Hide notification after this time (in miliseconds)
        delayIndicator?: boolean | undefined; // Show timer indicator
        closeOnClick?: boolean | undefined; // Close notifications by clicking on them
        width?: number | undefined; // Width of notification box
        sound?: boolean | undefined; // Sound of notification. Set this false to disable sound. Leave as is for default sound or set custom soud path
        position?: string | undefined; // Place to show notification. Available options: "top left", "top right", "bottom left", "bottom right"
        onClickUrl?: string | undefined; // The url which will be opened when notification is clicked
        showAfterPrevious?: boolean | undefined; // Set this to true if you want notification not to be shown until previous notification is closed. This is useful for notification queues
        continueDelayOnInactiveTab?: boolean | undefined; // Continue delay when browser tab is inactive

        // Events
        onClick?: Function | undefined;
    }
    interface NotifyOptions extends NotifyDefault, NotifyMethods {
        "class"?: string | undefined; // You can override options for large notifications from here
        large?: { width?: number | undefined } | undefined; // You can override options for small notifications from here
        mini?: { "class"?: string | undefined } | undefined; // Default options of different style notifications
        success?: {
            "class"?: string | undefined;
            "title"?: string | undefined;
            "icon"?: string | undefined;
            sound?: string | undefined;
        } | undefined;
        error?: {
            "class"?: string | undefined;
            "title"?: string | undefined;
            "icon"?: string | undefined;
            sound?: string | undefined;
        } | undefined;
        warning?: {
            "class"?: string | undefined;
            "title"?: string | undefined;
            "icon"?: string | undefined;
            sound?: string | undefined;
        } | undefined;
        info?: {
            "class"?: string | undefined;
            "title"?: string | undefined;
            "icon"?: string | undefined;
            sound?: string | undefined;
        } | undefined;
    }

    interface NotifyMethods {
        remove?(): any;
    }

    interface LobiboxStatic {
        base: { OPTIONS: MessageBoxesOptions; DEFAULTS: MessageBoxesDefault };
        alert: { <T extends MessageBoxesDefault>(type: string, options?: T): LobiboxStatic; DEFAULTS: AlertOptions };
        prompt: { <T extends MessageBoxesDefault>(type: string, options?: T): LobiboxStatic; DEFAULTS: PromptOptions };
        confirm: { <T extends MessageBoxesDefault>(options?: ConfirmOptions): T; DEFAULTS: ConfirmOptions };
        progress: { <T extends MessageBoxesDefault>(options: ProgressOptions): T; DEFAULTS: ProgressOptions };
        window: { <T extends MessageBoxesDefault>(options: WindowOptions): T; DEFAULTS: WindowOptions };
        notify: {
            <T extends NotifyDefault>(type: string, options?: NotifyOptions): T;
            DEFAULTS?: NotifyDefault | undefined;
            OPTIONS?: NotifyOptions | undefined;
        };
    }
}
