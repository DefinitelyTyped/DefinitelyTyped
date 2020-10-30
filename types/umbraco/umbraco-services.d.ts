// Type definitions for Umbraco v7.2.8
// Project: https://github.com/umbraco
// Definitions by: DeCareSystemsIreland <https://github.com/DeCareSystemsIreland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="angular" />

declare namespace umbraco.services {

    /**
    * @ngdoc service
    * @name umbraco.services.angularHelper
    * @function
    *
    * @description
    * Some angular helper/extension methods
    */
    interface IAngularHelper {

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#rejectedPromise
        * @methodOf umbraco.services.angularHelper
        * @function
        *
        * @description
        * In some situations we need to return a promise as a rejection, normally based on invalid data. This
        * is a wrapper to do that so we can save on writing a bit of code.
        *
        * @param {object} objReject The object to send back with the promise rejection
        */
        rejectedPromise(objReject: Object): void;

        /**
        * @ngdoc function
        * @name safeApply
        * @methodOf umbraco.services.angularHelper
        * @function
        *
        * @description
        * This checks if a digest/apply is already occuring, if not it will force an apply call
        */
        safeApply(scope: ng.IScope, fn: Function): void;

        /**
        * @ngdoc function
        * @name getCurrentForm
        * @methodOf umbraco.services.angularHelper
        * @function
        *
        * @description
        * Returns the current form object applied to the scope or null if one is not found
        */
        getCurrentForm(scope: ng.IScope): any;

        /**
        * @ngdoc function
        * @name validateHasForm
        * @methodOf umbraco.services.angularHelper
        * @function
        *
        * @description
        * This will validate that the current scope has an assigned form object, if it doesn't an exception is thrown, if
        * it does we return the form object.
        */
        getRequiredCurrentForm(scope: ng.IScope): Object;

        /**
        * @ngdoc function
        * @name getNullForm
        * @methodOf umbraco.services.angularHelper
        * @function
        *
        * @description
        * Returns a null angular FormController, mostly for use in unit tests
        *      NOTE: This is actually the same construct as angular uses internally for creating a null form but they don't expose
        *          any of this publicly to us, so we need to create our own.
        *
        * @param {string} formName The form name to assign
        */
        getNullForm(formName: string): ng.IFormController;
    }


    /**
     * Global State
     */
    interface IGlobalState {
        showNavigation: boolean;
        touchDevice: boolean;
        showTray: boolean;
        stickyNavigation: any;
        navMode: any;
        isReady: boolean;
    }

    /**
     * Section State
     */
    interface ISectionState {
        //The currently active section
        currentSection: any;
        showSearchResults: boolean;
    }


    /**
     * Tree State
     */
    interface ITreeState {
        //The currently selected node
        selectedNode: any;
        //The currently loaded root node reference - depending on the section loaded this could be a section root or a normal root.
        //We keep this reference so we can lookup nodes to interact with in the UI via the tree service
        currentRootNode: any;
    }

    /**
    * Menu State
    */
    interface IMenuState {
        //this list of menu items to display
        menuActions: any;
        //the title to display in the context menu dialog
        dialogTitle: string;
        //The tree node that the ctx menu is launched for
        currentNode: any;
        //Whether the menu's dialog is being shown or not
        showMenuDialog: boolean;
        //Whether the context menu is being shown or not
        showMenu: boolean;
    }

    /**
    * State Object
    */
    interface IStateObject {
        id: number;
        parentId: number;
        name: string;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.appState
    * @function
    *
    * @description
    * Tracks the various application state variables when working in the back office, raises events when state changes.
    */
    interface IAppState {

        /** function to validate and set the state on a state object */
        setState(stateObj: IStateObject, key: string, value: any, stateObjName: string): void;

        /** function to validate and set the state on a state object */
        getState(stateObj: IStateObject, key: string, stateObjName: string): IStateObject;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#getGlobalState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Returns the current global state value by key - we do not return an object reference here - we do NOT want this
        * to be publicly mutable and allow setting arbitrary values
        */
        getGlobalState(key: string): IGlobalState;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#setGlobalState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Sets a global state value by key
        */
        setGlobalState(key: string, value: boolean): void;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#getSectionState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Returns the current section state value by key - we do not return an object here - we do NOT want this
        * to be publicly mutable and allow setting arbitrary values
        */
        getSectionState(key: string): ISectionState;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#setSectionState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Sets a section state value by key
        */
        setSectionState(key: string, value: ISectionState): void;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#getTreeState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Returns the current tree state value by key - we do not return an object here - we do NOT want this
        * to be publicly mutable and allow setting arbitrary values
        */
        getTreeState(key: string): ITreeState;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#setTreeState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Sets a section state value by key
        */
        setTreeState(key: string, value: ITreeState): void;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#getMenuState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Returns the current menu state value by key - we do not return an object here - we do NOT want this
        * to be publicly mutable and allow setting arbitrary values
        */
        getMenuState(key: string): IStateObject;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#setMenuState
        * @methodOf umbraco.services.appState
        * @function
        *
        * @description
        * Sets a section state value by key
        */
        setMenuState(key: string, value: IMenuState): void;

    }

    /*Tracks the parent object for complex editors by exposing it as an object reference via editorState.current.entity
     * it is possible to modify this object, so should be used with care */
    interface IState {

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#set
        * @methodOf umbraco.services.editorState
        * @function
        *
        * @description
        * Sets the current entity object for the currently active editor
        * This is only used when implementing an editor with a complex model
        * like the content editor, where the model is modified by several
        * child controllers.
        */
        set(entity: Object): void;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#reset
        * @methodOf umbraco.services.editorState
        * @function
        *
        * @description
        * Since the editorstate entity is read-only, you cannot set it to null
        * only through the reset() method
        */
        reset(): void;

        /**
        * @ngdoc function
        * @name umbraco.services.angularHelper#getCurrent
        * @methodOf umbraco.services.editorState
        * @function
        *
        * @description
        * Returns an object reference to the current editor entity.
        * the entity is the root object of the editor.
        * EditorState is used by property/parameter editors that need
        * access to the entire entity being edited, not just the property/parameter
        *
        * editorState.current can not be overwritten, you should only read values from it
        * since modifying individual properties should be handled by the property editors
        */
        getCurrent(): any;

    }

    /**
    * @ngdoc service
    * @name umbraco.services.assetsService
    *
    * @requires $q
    * @requires angularHelper
    *
    * @description
    * Promise-based utillity service to lazy-load client-side dependencies inside angular controllers.
     */
    interface IAssetsService {

        /**
        * @ngdoc method
        * @name umbraco.services.assetsService#loadCss
        * @methodOf umbraco.services.assetsService
        *
        * @description
        * Injects a file as a stylesheet into the document head
        *
        * @param {String} path path to the css file to load
        * @param {Scope} scope optional scope to pass into the loader
        * @param {Object} keyvalue collection of attributes to pass to the stylesheet element
        * @param {Number} timeout in milliseconds
        * @returns {Promise} Promise object which resolves when the file has loaded
        */
        loadCss(path: string, scope: ng.IScope, attributes: Object, timeout: number): ng.IPromise<any>;

        /**
        * @ngdoc method
        * @name umbraco.services.assetsService#loadJs
        * @methodOf umbraco.services.assetsService
        *
        * @description
        * Injects a file as a javascript into the document
        *
        * @param {String} path path to the js file to load
        * @param {Scope} scope optional scope to pass into the loader
        * @param {Object} keyvalue collection of attributes to pass to the script element
        * @param {Number} timeout in milliseconds
        * @returns {Promise} Promise object which resolves when the file has loaded
        */
        loadJs(path: string, scope: ng.IScope, attributes: Object, timeout: number): ng.IPromise<any>;

        /**
        * @ngdoc method
        * @name umbraco.services.assetsService#load
        * @methodOf umbraco.services.assetsService
        *
        * @description
        * Injects a collection of files, this can be ONLY js files
        *
        *
        * @param {Array} pathArray string array of paths to the files to load
        * @param {Scope} scope optional scope to pass into the loader
        * @returns {Promise} Promise object which resolves when all the files has loaded
        */
        load(pathArray: string[], scope: ng.IScope): ng.IPromise<any>;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.contentEditingHelper
    * @description A helper service for most editors, some methods are specific to content/media/member model types but most are used by
    * all editors to share logic and reduce the amount of replicated code among editors.
    */
    interface IContentEditingHelper {

        /**
        * @ngdoc method
        * @name umbraco.services.contentEditingHelper#getAllProps
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * Returns all propertes contained for the content item (since the normal model has properties contained inside of tabs)
        */
        getAllProps(content: any): any;

        /**
        * @ngdoc method
        * @name umbraco.services.contentEditingHelper#configureButtons
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * Returns a letter array for buttons, with the primary one first based on content model, permissions and editor state
        */
        getAllowedActions(content: any, creating: any): string[];

        /**
        * @ngdoc method
        * @name umbraco.services.contentEditingHelper#getButtonFromAction
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * Returns a button object to render a button for the tabbed editor
        * currently only returns built in system buttons for content and media actions
        * returns label, alias, action char and hot-key
        */
        getButtonFromAction(ch: string): any;

        /**
        * @ngdoc method
        * @name umbraco.services.contentEditingHelper#reBindChangedProperties
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * re-binds all changed property values to the origContent object from the savedContent object and returns an array of changed properties.
        */
        reBindChangedProperties(origContent: any, savedContent: any): void;

        /**
        * @ngdoc function
        * @name umbraco.services.contentEditingHelper#handleSaveError
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * A function to handle what happens when we have validation issues from the server side
        */
        handleSaveError(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.contentEditingHelper#handleSuccessfulSave
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * A function to handle when saving a content item is successful. This will rebind the values of the model that have changed
        * ensure the notifications are displayed and that the appropriate events are fired. This will also check if we need to redirect
        * when we're creating new content.
        */
        handleSuccessfulSave(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.contentEditingHelper#redirectToCreatedContent
        * @methodOf umbraco.services.contentEditingHelper
        * @function
        *
        * @description
        * Changes the location to be editing the newly created content after create was successful.
        * We need to decide if we need to redirect to edito mode or if we will remain in create mode.
        * We will only need to maintain create mode if we have not fulfilled the basic requirements for creating an entity which is at least having a name.
        */
        redirectToCreatedContent(id: number, modelState: any): void;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.cropperHelper
    * @description A helper object used for dealing with image cropper data
    */
    interface ICropperHelper {

        /**
        * @ngdoc method
        * @name umbraco.services.cropperHelper#configuration
        * @methodOf umbraco.services.cropperHelper
        *
        * @description
        * Returns a collection of plugins available to the tinyMCE editor
        *
        */
        configuration(mediaTypeAlias: string): any;
    }


    /**
     * Rendering options
    */
    interface IDialogRenderingOptions {
        /*the DOM element to inject the modal into, by default set to body*/
        container?: HTMLElement;
        /*function called when the modal is submitted*/
        callback: Function;
        /*the url of the template*/
        template: string;
        /*animation css class, by default set to "fade"*/
        animation?: string;
        /*modal css class, by default "umb-modal"*/
        modalClass?: string;
        /*show the modal instantly*/
        show?: boolean;
        /*load template in an iframe, only needed for serverside templates*/
        iframe: boolean;
        /*set a width on the modal, only needed for iframes*/
        width?: number;
        /*strips the modal from any animation and wrappers, used when you want to inject a dialog into an existing container*/
        inline?: boolean;
        /** 
         * It will set this value as a property on the dialog controller's scope as $scope.dialogData
         */
    dialogData?: any;
    }

    /**
     * Modal
    */
    interface IModal {

    }


    /**
     * Mediapicker dialog options object
    */
    interface IMediaPickerOptions {
        /*Only display files that have an image file-extension*/
        onlyImages: boolean;
        /*callback function*/
        callback: Function;
    }


    /**
     * Content picker dialog options object
    */
    interface IContentPickerOptions {
        /*should the picker return one or multiple items*/
        multipicker: boolean;
        /*callback function*/
        callback: Function;
    }

    /**
     * Iconpicker dialog options object
    */
    interface IIconPickerOptions {
        /*callback function*/
        callback: Function;
    }

    /**
     * Linkpicker dialog options object
    */
    interface ILinkPickerOptions {
        /*callback function*/
        callback: Function;
    }

    /**
     * Macropicker dialog options object
    */
    interface IMacroPickerOptions {
        /*callback function*/
        callback: Function;
    }

    /**
     * Member group picker dialog options object
    */
    interface IMemberGroupPickerOptions {
        /*should the tree pick one or multiple members before returning*/
        multiPicker: boolean;
        /*callback function*/
        callback: Function;
    }

    /**
     * Member picker dialog options object
    */
    interface IMemberPickerOptions {
        /*should the tree pick one or multiple members before returning*/
        multiPicker: boolean;
        /*callback function*/
        callback: Function;
    }

    /**
     * Property dialog options object
    */
    interface IPropertyDialogOptions {
        /*callback function*/
        callback: Function;
        /*editor to use to edit a given value and return on callback*/
        editor: string;
        /*value sent to the property editor*/
        value: Object;
    }

    /**
     * Iconpicker dialog options object
    */
    interface ITreePickerOptions {
        /*tree section to display*/
        section: string;
        /*specific tree to display*/
        treeAlias: string;
        /*should the tree pick one or multiple items before returning*/
        multiPicker: boolean;
        /*callback function*/
        callback: Function;
    }

    /**
     * Dialog options object
    */
    interface IDialog {

    }

    /*
    * Application-wide service for handling modals, overlays and dialogs By default it
    * injects the passed template url into a div to body of the document And renders it,
    * but does also support rendering items in an iframe, incase serverside processing is needed, or its a non-angular page
    */
    interface IDialogService {

        dialogs?: any[];

        /** Internal method that removes all dialogs */
        removeAllDialogs(...args: any[]): void;

        /** Internal method that closes the dialog properly and cleans up resources */
        closeDialog(dialog: IDialog): void;

        /** Internal method that handles opening all dialogs */
        openDialog(options: IDialogRenderingOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#open
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a modal rendering a given template url.
        *
        * @param {Object} options rendering options
        * @param {DomElement} options.container the DOM element to inject the modal into, by default set to body
        * @param {Function} options.callback function called when the modal is submitted
        * @param {String} options.template the url of the template
        * @param {String} options.animation animation csss class, by default set to "fade"
        * @param {String} options.modalClass modal css class, by default "umb-modal"
        * @param {Bool} options.show show the modal instantly
        * @param {Bool} options.iframe load template in an iframe, only needed for serverside templates
        * @param {Int} options.width set a width on the modal, only needed for iframes
        * @param {Bool} options.inline strips the modal from any animation and wrappers, used when you want to inject a dialog into an existing container
        * @returns {Object} modal object
        */
        open(options: IDialogRenderingOptions): IModal;


        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#close
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Closes a specific dialog
        * @param {Object} dialog the dialog object to close
        * @param {Object} args if specified this object will be sent to any callbacks registered on the dialogs.
        */
        close(dialog: IDialog, ...args: any[]): void;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#closeAll
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Closes all dialogs
        * @param {Object} args if specified this object will be sent to any callbacks registered on the dialogs.
        */
        closeAll(...args: any[]): void;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#mediaPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a media picker in a modal, the callback returns an array of selected media items
        * @param {Object} options mediapicker dialog options object
        * @param {Boolean} options.onlyImages Only display files that have an image file-extension
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        mediaPicker(options: IMediaPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#contentPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a content picker tree in a modal, the callback returns an array of selected documents
        * @param {Object} options content picker dialog options object
        * @param {Boolean} options.multipicker should the picker return one or multiple items
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        contentPicker(options: IContentPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#linkPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a link picker tree in a modal, the callback returns a single link
        * @param {Object} options content picker dialog options object
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        linkPicker(options: ILinkPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#macroPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a mcaro picker in a modal, the callback returns a object representing the macro and it's parameters
        * @param {Object} options macropicker dialog options object
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        macroPicker(options: IMacroPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#memberPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a member picker in a modal, the callback returns a object representing the selected member
        * @param {Object} options member picker dialog options object
        * @param {Boolean} options.multiPicker should the tree pick one or multiple members before returning
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        memberPicker(options: IMemberPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#memberGroupPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a member group picker in a modal, the callback returns a object representing the selected member
        * @param {Object} options member group picker dialog options object
        * @param {Boolean} options.multiPicker should the tree pick one or multiple members before returning
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        memberGroupPicker(options: IMemberGroupPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#iconPicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a icon picker in a modal, the callback returns a object representing the selected icon
        * @param {Object} options iconpicker dialog options object
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        iconPicker(options: IIconPickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#treePicker
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a tree picker in a modal, the callback returns a object representing the selected tree item
        * @param {Object} options iconpicker dialog options object
        * @param {String} options.section tree section to display
        * @param {String} options.treeAlias specific tree to display
        * @param {Boolean} options.multiPicker should the tree pick one or multiple items before returning
        * @param {Function} options.callback callback function
        * @returns {Object} modal object
        */
        treePicker(options: ITreePickerOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#propertyDialog
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a dialog with a chosen property editor in, a value can be passed to the modal, and this value is returned in the callback
        * @param {Object} options mediapicker dialog options object
        * @param {Function} options.callback callback function
        * @param {String} editor editor to use to edit a given value and return on callback
        * @param {Object} value value sent to the property editor
        * @returns {Object} modal object
        */
        propertyDialog(options: IPropertyDialogOptions): IModal;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#ysodDialog
        * @methodOf umbraco.services.dialogService
        * @description
        * Opens a dialog to an embed dialog
        */
        embedDialog(options: any): void;

        /**
        * @ngdoc method
        * @name umbraco.services.dialogService#ysodDialog
        * @methodOf umbraco.services.dialogService
        *
        * @description
        * Opens a dialog to show a custom YSOD
        */
        ysodDialog(ysodError: any): void;
    }

    /** Used to broadcast and listen for global events and allow the ability to add async listeners to the callbacks */
    /**
        Core app events:
        app.ready
        app.authenticated
        app.notAuthenticated
        app.closeDialogs
    */
    interface IEventService {

    }

    /**
     * File
     */
    interface IFile {

    }

    /**
    * @ngdoc service
    * @name umbraco.services.fileManager
    * @function
    *
    * @description
    * Used by editors to manage any files that require uploading with the posted data, normally called by property editors
    * that need to attach files.
    * When a route changes successfully, we ensure that the collection is cleared.
    */
    interface IFileManager {

        /**
        * @ngdoc function
        * @name umbraco.services.fileManager#addFiles
        * @methodOf umbraco.services.fileManager
        * @function
        *
        * @description
        *  Attaches files to the current manager for the current editor for a particular property, if an empty array is set
        *   for the files collection that effectively clears the files for the specified editor.
        */
        setFiles(propertyAlias: string, files: IFile[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.fileManager#getFiles
        * @methodOf umbraco.services.fileManager
        * @function
        *
        * @description
        *  Returns all of the files attached to the file manager
        */
        getFiles(): IFile[];


        /**
        * @ngdoc function
        * @name umbraco.services.fileManager#clearFiles
        * @methodOf umbraco.services.fileManager
        * @function
        *
        * @description
        *  Removes all files from the manager
        */
        clearFiles(): void;
    }

    /**
     * Model state
     */
    interface IModelState {

    }

    /**
    * @ngdoc service
    * @name umbraco.services.formHelper
    * @function
    *
    * @description
    * A utility class used to streamline how forms are developed, to ensure that validation is check and displayed consistently and to ensure that the correct events
    * fire when they need to.
    */
    interface IFormHelper {

        /**
        * @ngdoc function
        * @name umbraco.services.formHelper#submitForm
        * @methodOf umbraco.services.formHelper
        * @function
        *
        * @description
        * Called by controllers when submitting a form - this ensures that all client validation is checked,
        * server validation is cleared, that the correct events execute and status messages are displayed.
        * This returns true if the form is valid, otherwise false if form submission cannot continue.
        *
        * @param {object} args An object containing arguments for form submission
        */
        submitForm(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.formHelper#submitForm
        * @methodOf umbraco.services.formHelper
        * @function
        *
        * @description
        * Called by controllers when a form has been successfully submitted. the correct events execute
        * and that the notifications are displayed if there are any.
        *
        * @param {object} args An object containing arguments for form submission
        */
        resetForm(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.formHelper#handleError
        * @methodOf umbraco.services.formHelper
        * @function
        *
        * @description
        * Needs to be called when a form submission fails, this will wire up all server validation errors in ModelState and
        * add the correct messages to the notifications. If a server error has occurred this will show a ysod.
        *
        * @param {object} err The error object returned from the http promise
        */
        handleError(err: Object): void;

        /**
        * @ngdoc function
        * @name umbraco.services.formHelper#handleServerValidation
        * @methodOf umbraco.services.formHelper
        * @function
        *
        * @description
        * This wires up all of the server validation model state so that valServer and valServerField directives work
        *
        * @param {object} err The error object returned from the http promise
        */
        handleServerValidation(modelState: IModelState): void;
    }


    /**
     * History item
     */
    interface IHistoryItem {
        //css class for the list, ex: "icon-image", "icon-doc"
        icon: string;
        //route to the editor, ex: "/content/edit/1234"
        link: string;
        //friendly name for the history listing
        name: string;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.historyService
    *
    * @requires $rootScope
    * @requires $timeout
    * @requires angularHelper
    *
    * @description
    * Service to handle the main application navigation history. Responsible for keeping track
    * of where a user navigates to, stores an icon, url and name in a collection, to make it easy
    * for the user to go back to a previous editor / action
    *
    * **Note:** only works with new angular-based editors, not legacy ones
    *
    * ##usage
    * To use, simply inject the historyService into any controller that needs it, and make
    * sure the umbraco.services module is accesible - which it should be by default.
    */
    interface IHistoryService {

        /**
        * @ngdoc method
        * @name umbraco.services.historyService#add
        * @methodOf umbraco.services.historyService
        *
        * @description
        * Adds a given history item to the users history collection.
        *
        * @param {Object} item the history item
        * @param {String} item.icon icon css class for the list, ex: "icon-image", "icon-doc"
        * @param {String} item.link route to the editor, ex: "/content/edit/1234"
        * @param {String} item.name friendly name for the history listing
        * @returns {Object} history item object
        */
        add(item: IHistoryItem): IHistoryItem;

        /**
         * @ngdoc method
         * @name umbraco.services.historyService#remove
         * @methodOf umbraco.services.historyService
         *
         * @description
         * Removes a history item from the users history collection, given an index to remove from.
         *
         * @param {Int} index index to remove item from
         */
        remove(index: number): void;

        /**
        * @ngdoc method
        * @name umbraco.services.historyService#removeAll
        * @methodOf umbraco.services.historyService
        *
        * @description
        * Removes all history items from the users history collection
        */
        removeAll(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.historyService#getCurrent
        * @methodOf umbraco.services.historyService
        *
        * @description
        * Method to return the current history collection.
        */
        getCurrent(): IHistoryItem[];
    }

    /**
    * @ngdoc service
    * @name umbraco.services.macroService
    *
    *
    * @description
    * A service to return macro information such as generating syntax to insert a macro into an editor
    */
    interface IMacroService {

        /**
        * @ngdoc function
        * @name umbraco.services.macroService#generateWebFormsSyntax
        * @methodOf umbraco.services.macroService
        * @function
        *
        * @description
        * generates the syntax for inserting a macro into a rich text editor - this is the very old umbraco style syntax
        *
        * @param {object} args an object containing the macro alias and it's parameter values
        */
        generateMacroSyntax(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.macroService#generateWebFormsSyntax
        * @methodOf umbraco.services.macroService
        * @function
        *
        * @description
        * generates the syntax for inserting a macro into a webforms templates
        *
        * @param {object} args an object containing the macro alias and it's parameter values
        */
        generateWebFormsSyntax(...args: any[]): void;

        /**
        * @ngdoc function
        * @name umbraco.services.macroService#generateMvcSyntax
        * @methodOf umbraco.services.macroService
        * @function
        *
        * @description
        * generates the syntax for inserting a macro into an mvc template
        *
        * @param {object} args an object containing the macro alias and it's parameter values
        */
        generateMvcSyntax(...args: any[]): void;
    }


    /**
     * Media model
     */
    interface IMediaModel {

    }

    /**
     * Media options
     */
    interface IMediaOptions {
        mediaModel: IMediaModel;
        imageOnly: boolean;
    }

    /**
     * Media entity
     */
    interface IMediaEntity {

    }

    /**
    * @ngdoc service
    * @name umbraco.services.mediaHelper
    * @description A helper object used for dealing with media items
    */
    interface IMediaHelper {
        
    /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#formatFileTypes
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Returns a string with correctly formated file types for ng-file-upload
        *
        * @param {string} file types, ex: jpg,png,tiff
        */
        formatFileTypes(file: string): string;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#getMediaPropertyValue
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Returns the file path associated with the media property if there is one
        *
        * @param {object} options Options object
        * @param {object} options.mediaModel The media object to retrieve the image path from
        * @param {object} options.imageOnly Optional, if true then will only return a path if the media item is an image
        */
        getMediaPropertyValue(options: IMediaOptions): string;


        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#getImagePropertyValue
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Returns the actual image path associated with the image property if there is one
        *
        * @param {object} options Options object
        * @param {object} options.imageModel The media object to retrieve the image path from
        */
        getImagePropertyValue(options: IMediaOptions): string;


        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#getThumbnail
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * formats the display model used to display the content to the model used to save the content
        *
        * @param {object} options Options object
        * @param {object} options.imageModel The media object to retrieve the image path from
        */
        getThumbnail(options: IMediaOptions): string;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#resolveFileFromEntity
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Gets the media file url for a media entity returned with the entityResource
        *
        * @param {object} mediaEntity A media Entity returned from the entityResource
        * @param {boolean} thumbnail Whether to return the thumbnail url or normal url
        */
        resolveFileFromEntity(mediaEntity: IMediaEntity, thumbnail: boolean): string;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#resolveFile
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Gets the media file url for a media object returned with the mediaResource
        *
        * @param {object} mediaEntity A media Entity returned from the entityResource
        * @param {boolean} thumbnail Whether to return the thumbnail url or normal url
        */
        resolveFile(mediaItem: IMediaEntity, thumbnail: boolean): string;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#scaleToMaxSize
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Finds the corrct max width and max height, given maximum dimensions and keeping aspect ratios
        *
        * @param {number} maxSize Maximum width & height
        * @param {number} width Current width
        * @param {number} height Current height
        */
        scaleToMaxSize(maxSize: number, width: number, height: number): any;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#getThumbnailFromPath
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Returns the path to the thumbnail version of a given media library image path
        *
        * @param {string} imagePath Image path, ex: /media/1234/my-image.jpg
        */
        getThumbnailFromPath(imagePath: string): string;

        /**
        * @ngdoc function
        * @name umbraco.services.mediaHelper#detectIfImageByExtension
        * @methodOf umbraco.services.mediaHelper
        * @function
        *
        * @description
        * Returns true/false, indicating if the given path has an allowed image extension
        *
        * @param {string} imagePath Image path, ex: /media/1234/my-image.jpg
        */
        detectIfImageByExtension(imagePath: string): boolean;
    }

    /**
    * Tracks the parent object for complex editors by exposing it as an object reference via editorState.current.entity
    * it is possible to modify this object, so should be used with care
    */
    interface IEditorState {
        current: any;
        state: IState;
    }

    /**
     * Sync tree args
     */
    interface ISyncTreeArgs {
        /*the tree alias to sync to*/
        tree: string;
        /*the path to sync the tree to*/
        path: string;
        /* optional, specifies whether to force reload the node data from the server even if it already exists in the tree currently*/
        forceReload: boolean;
        /* optional, specifies whether to set the synced node to be the active node, this will default to true if not specified*/
        activate: boolean;
    }

    /**
     * Show dialog action
     */
    interface IShowDialogAction {
        name: string;
        alias: string;
    }

    /**
     * Show dialog args
     */
    interface IShowDialogArgs {
        scope: ng.IScope;
        action: IShowDialogAction;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.navigationService
    *
    * @requires $rootScope
    * @requires $routeParams
    * @requires $log
    * @requires $location
    * @requires dialogService
    * @requires treeService
    * @requires sectionResource
    *
    * @description
    * Service to handle the main application navigation. Responsible for invoking the tree
    * Section navigation and search, and maintain their state for the entire application lifetime
    *
    */
    interface INavigationService {

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#load
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Shows the legacy iframe and loads in the content based on the source url
        * @param {String} source The URL to load into the iframe
        */
        loadLegacyIFrame(source: string): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#changeSection
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Changes the active section to a given section alias
        * If the navigation is 'sticky' this will load the associated tree
        * and load the dashboard related to the section
        * @param {string} sectionAlias The alias of the section
        */
        changeSection(sectionAlias: string, force: boolean): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showTree
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Displays the tree for a given section alias but turning on the containing dom element
        * only changes if the section is different from the current one
        * @param {string} sectionAlias The alias of the section to load
        * @param {Object} syncArgs Optional object of arguments for syncing the tree for the section being shown
        */
        showTree(sectionAlias: string, syncArgs: ISyncTreeArgs): void;

        showTray(): void;

        hideTray(): void;

        /**
          Called to assign the main tree event handler - this is called by the navigation controller.
          TODO: Potentially another dev could call this which would kind of mung the whole app so potentially there's a better way.
        */
        setupTreeEvents(treeEventHandler: any): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#syncTree
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Syncs a tree with a given path, returns a promise
        * The path format is: ["itemId","itemId"], and so on
        * so to sync to a specific document type node do:
        * <pre>
        * navigationService.syncTree({tree: 'content', path: ["-1","123d"], forceReload: true});
        * </pre>
        * @param {Object} args arguments passed to the function
        * @param {String} args.tree the tree alias to sync to
        * @param {Array} args.path the path to sync the tree to
        * @param {Boolean} args.forceReload optional, specifies whether to force reload the node data from the server even if it already exists in the tree currently
        * @param {Boolean} args.activate optional, specifies whether to set the synced node to be the active node, this will default to true if not specified
        */
        syncTree(args: ISyncTreeArgs): any;

        /**
            Internal method that should ONLY be used by the legacy API wrapper, the legacy API used to
            have to set an active tree and then sync, the new API does this in one method by using syncTree
        */
        _syncPath(path: string[], forceReload: boolean): void;

        //TODO: This should return a promise
        reloadNode(node: any): void;

        //TODO: This should return a promise
        reloadSection(sectionAlias: string): void;

        /**
            Internal method that should ONLY be used by the legacy API wrapper, the legacy API used to
            have to set an active tree and then sync, the new API does this in one method by using syncTreePath
        */
        _setActiveTreeType(treeAlias: string, loadChildren: boolean): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#hideTree
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Hides the tree by hiding the containing dom element
        */
        hideTree(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showMenu
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Hides the tree by hiding the containing dom element.
        * This always returns a promise!
        *
        * @param {Event} event the click event triggering the method, passed from the DOM element
        */
        showMenu(event: Event, ...args: any[]): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#hideMenu
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Hides the menu by hiding the containing dom element
        */
        hideMenu(): void;

        /** Executes a given menu action */
        executeMenuAction(action: any, node: any, section: any): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showUserDialog
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Opens the user dialog, next to the sections navigation
        * template is located in views/common/dialogs/user.html
        */
        showUserDialog(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showUserDialog
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Opens the user dialog, next to the sections navigation
        * template is located in views/common/dialogs/user.html
        */
        showHelpDialog(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showDialog
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * Opens a dialog, for a given action on a given tree node
        * uses the dialogService to inject the selected action dialog
        * into #dialog div.umb-panel-body
        * the path to the dialog view is determined by:
        * "views/" + current tree + "/" + action alias + ".html"
        * The dialog controller will get passed a scope object that is created here with the properties:
        *  scope.currentNode = the selected tree node
        *  scope.currentAction = the selected menu item
        *  so that the dialog controllers can use these properties
        *
        * @param {Object} args arguments passed to the function
        * @param {Scope} args.scope current scope passed to the dialog
        * @param {Object} args.action the clicked action containing `name` and `alias`
        */
        showDialog(args: IShowDialogArgs): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#hideDialog
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * hides the currently open dialog
        */
        hideDialog(showMenu: boolean): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#showSearch
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * shows the search pane
        */
        showSearch(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#hideSearch
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * hides the search pane
        */
        hideSearch(): void;

        /**
        * @ngdoc method
        * @name umbraco.services.navigationService#hideNavigation
        * @methodOf umbraco.services.navigationService
        *
        * @description
        * hides any open navigation panes and resets the tree, actions and the currently selected node
        */
        hideNavigation(): void;

    }

    /**
     * Notification
     */
    interface INotification {

    }

    /**
     * Notification Type
     */
    enum NotificationType {
        success,
        error,
        warning,
        info
    }

    /**
     * Notification args
     */
    interface INotificationArgs {
        type: NotificationType;
        header: string;
        message: string;
    }

    /**
     * Button Action
     */
    interface IButtonAction {

    }

    /**
     * Notification Item
     */
    interface INotificationItem {
        /*Short headline*/
        headline: string;
        /*longer text for the notication, trimmed after 200 characters, which can then be exanded*/
        message: string;
        /*Notification type, can be: "success", "warning", "error" or "info"*/
        type: NotificationType;
        /*url to open when notification is clicked*/
        url: string;
        /*path to custom view to load into the notification box*/
        view: string;
        /*Collection of button actions to append (label, func, cssClass)*/
        actions: IButtonAction[];
        /*if set to true, the notification will not auto- close*/
        sticky: boolean;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.navigationService
    *
    * @requires $rootScope
    * @requires $routeParams
    * @requires $log
    * @requires $location
    * @requires dialogService
    * @requires treeService
    * @requires sectionResource
    *
    * @description
    * Service to handle the main application navigation. Responsible for invoking the tree
    * Section navigation and search, and maintain their state for the entire application lifetime
    *
    */
    interface INotificationsService {

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#add
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Lower level api for adding notifcations, support more advanced options
        * @param {Object} item The notification item
        * @param {String} item.headline Short headline
        * @param {String} item.message longer text for the notication, trimmed after 200 characters, which can then be exanded
        * @param {String} item.type Notification type, can be: "success","warning","error" or "info"
        * @param {String} item.url url to open when notification is clicked
        * @param {String} item.view path to custom view to load into the notification box
        * @param {Array} item.actions Collection of button actions to append (label, func, cssClass)
        * @param {Boolean} item.sticky if set to true, the notification will not auto-close
        * @returns {Object} args notification object
        */
        add(item: INotificationItem): INotification;

        hasView(view: string): boolean;

        addView(view: string, ...args: any[]): void;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#showNotification
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Shows a notification based on the object passed in, normally used to render notifications sent back from the server
        *
        * @returns {Object} args notification object
        */
        showNotification(args: INotificationArgs): INotification;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#success
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Adds a green success notication to the notications collection
        * This should be used when an operations *completes* without errors
        *
        * @param {String} headline Headline of the notification
        * @param {String} message longer text for the notication, trimmed after 200 characters, which can then be exanded
        * @returns {Object} notification object
        */
        success(headline: string, message: string): INotification;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#error
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Adds a red error notication to the notications collection
        * This should be used when an operations *fails* and could not complete
        *
        * @param {String} headline Headline of the notification
        * @param {String} message longer text for the notication, trimmed after 200 characters, which can then be exanded
        * @returns {Object} notification object
        */
        error(headline: string, message: string): INotification;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#warning
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Adds a yellow warning notication to the notications collection
        * This should be used when an operations *completes* but something was not as expected
        *
        *
        * @param {String} headline Headline of the notification
        * @param {String} message longer text for the notication, trimmed after 200 characters, which can then be exanded
        * @returns {Object} notification object
        */
        warning(headline: string, message: string): INotification;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#warning
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Adds a yellow warning notication to the notications collection
        * This should be used when an operations *completes* but something was not as expected
        *
        *
        * @param {String} headline Headline of the notification
        * @param {String} message longer text for the notication, trimmed after 200 characters, which can then be exanded
        * @returns {Object} notification object
        */
        info(headline: string, message: string): INotification;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#remove
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Removes a notification from the notifcations collection at a given index
        *
        * @param {Int} index index where the notication should be removed from
        */
        remove(index: number): void;

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#removeAll
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Removes all notifications from the notifcations collection
        */
        removeAll(): void;

        /**
        * @ngdoc property
        * @name umbraco.services.notificationsService#current
        * @propertyOf umbraco.services.notificationsService
        *
        * @description
        * Returns an array of current notifications to display
        *
        * @returns {string} returns an array
        */
        current: string[];

        /**
        * @ngdoc method
        * @name umbraco.services.notificationsService#getCurrent
        * @methodOf umbraco.services.notificationsService
        *
        * @description
        * Method to return all notifications from the notifcations collection
        */
        getCurrent(): INotification[];

    }

    /**
     * Search args
     */
    interface ISearchArgs {
        term: string;
    }

    /**
     * Search members
     */
    interface ISearchMember {
        name: string;
        id: number;
        menuUrl: string;
        editorPath: string;
        metaData: Object;
        subtitle: string;
    }

    /**
     * Search content
     */
    interface ISearchContent {
        menuUrl: string;
        id: number;
        editorPath: string;
        metaData: {Url: string};
        subTitle: string;
    }

    /**
     * Search media
     */
    interface ISearchMedia extends ISearchContent {

    }

    /**
    * @ngdoc service
    * @name umbraco.services.searchService
    *
    *
    * @description
    * Service for handling the main application search, can currently search content, media and members
    *
    */
    interface ISearchService {

        /**
        * @ngdoc method
        * @name umbraco.services.searchService#searchMembers
        * @methodOf umbraco.services.searchService
        *
        * @description
        * Searches the default member search index
        * @param {Object} args argument object
        * @param {String} args.term seach term
        * @returns {Promise} returns promise containing all matching members
        */
        searchMembers(args: ISearchArgs): ng.IPromise<ISearchMember[]>;

        /**
        * @ngdoc method
        * @name umbraco.services.searchService#searchContent
        * @methodOf umbraco.services.searchService
        *
        * @description
        * Searches the default internal content search index
        * @param {Object} args argument object
        * @param {String} args.term seach term
        * @returns {Promise} returns promise containing all matching content items
        */
        searchContent(args: ISearchArgs): ng.IPromise<ISearchContent[]>;

        /**
        * @ngdoc method
        * @name umbraco.services.searchService#searchMedia
        * @methodOf umbraco.services.searchService
        *
        * @description
        * Searches the default media search index
        * @param {Object} args argument object
        * @param {String} args.term seach term
        * @returns {Promise} returns promise containing all matching media items
        */
        searchMedia(args: ISearchArgs): ng.IPromise<ISearchMedia[]>;

        /**
        * @ngdoc method
        * @name umbraco.services.searchService#searchAll
        * @methodOf umbraco.services.searchService
        *
        * @description
        * Searches all available indexes and returns all results in one collection
        * @param {Object} args argument object
        * @param {String} args.term seach term
        * @returns {Promise} returns promise containing all matching items
        */
        searchAll(args: ISearchArgs): ng.IPromise<any>;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.serverValidationManager
    * @function
    *
    * @description
    * Used to handle server side validation and wires up the UI with the messages. There are 2 types of validation messages, one
    * is for user defined properties (called Properties) and the other is for field properties which are attached to the native
    * model objects (not user defined). The methods below are named according to these rules: Properties vs Fields.
    */
    interface IServerValidationManager {

        /**
        * @ngdoc function
        * @name umbraco.services.serverValidationManager#subscribe
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        *  This method needs to be called once all field and property errors are wired up.
        *
        *  In some scenarios where the error collection needs to be persisted over a route change
        *   (i.e. when a content item (or any item) is created and the route redirects to the editor)
        *   the controller should call this method once the data is bound to the scope
        *   so that any persisted validation errors are re-bound to their controls. Once they are re-binded this then clears the validation
        *   colleciton so that if another route change occurs, the previously persisted validation errors are not re-bound to the new item.
        */
        executeAndClearAllSubscriptions(): void;

        /**
        * @ngdoc function
        * @name umbraco.services.serverValidationManager#subscribe
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        *  Adds a callback method that is executed whenever validation changes for the field name + property specified.
        *  This is generally used for server side validation in order to match up a server side validation error with
        *  a particular field, otherwise we can only pinpoint that there is an error for a content property, not the
        *  property's specific field. This is used with the val-server directive in which the directive specifies the
        *  field alias to listen for.
        *  If propertyAlias is null, then this subscription is for a field property (not a user defined property).
        */
        subscribe(propertyAlias: string, fieldName: string, callback: Function): void;

        /**
        * @ngdoc function
        * @name getPropertyCallbacks
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Gets all callbacks that has been registered using the subscribe method for the propertyAlias + fieldName combo.
        * This will always return any callbacks registered for just the property (i.e. field name is empty) and for ones with an
        * explicit field name set.
        */
        getPropertyCallbacks(propertyAlias: string, fieldName: string): void;

        /**
        * @ngdoc function
        * @name getFieldCallbacks
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Gets all callbacks that has been registered using the subscribe method for the field.
        */
        getFieldCallbacks(fieldName: string): any;

        /**
        * @ngdoc function
        * @name addFieldError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Adds an error message for a native content item field (not a user defined property, for Example, 'Name')
        */
        addFieldError(fieldName: string, errorMsg: string): void;

        /**
        * @ngdoc function
        * @name addPropertyError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Adds an error message for the content property
        */
        addPropertyError(propertyAlias: string, fieldName: string, errorMsg: string): void;

        /**
        * @ngdoc function
        * @name removePropertyError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Removes an error message for the content property
        */
        removePropertyError(propertyAlias: string, fieldName: string): void;

        /**
        * @ngdoc function
        * @name reset
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Clears all errors and notifies all callbacks that all server errros are now valid - used when submitting a form
        */
        reset(): void;

        /**
        * @ngdoc function
        * @name clear
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Clears all errors
        */
        clear(): void;

        /**
        * @ngdoc function
        * @name getPropertyError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Gets the error message for the content property
        */
        getPropertyError(propertyAlias: string, fieldName: string): string;

        /**
        * @ngdoc function
        * @name getFieldError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Gets the error message for a content field
        */
        getFieldError(fieldName: string): string;

        /**
        * @ngdoc function
        * @name hasPropertyError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Checks if the content property + field name combo has an error
        */
        hasPropertyError(propertyAlias: string, fieldName: string): boolean;

        /**
        * @ngdoc function
        * @name hasFieldError
        * @methodOf umbraco.services.serverValidationManager
        * @function
        *
        * @description
        * Checks if a content field has an error
        */
        hasFieldError(fieldName: string): boolean;
    }

    /**
     * TinyMcePlugin
     */
    interface ITinyMcePlugin {

    }

     /**
     * Dimension
     */
    interface IDimension {
        height: number;
        width: number;
    }

     /**
     * Configuration
     */
    interface IConfiguration {
        toolbar: string[];
        stylesheets: string[];
        dimensions: IDimension;
        maxImageSize: number;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.tinyMceService
    *
    *
    * @description
    * A service containing all logic for all of the Umbraco TinyMCE plugins
    */
    interface ITinyMceService {

        /**
        * @ngdoc method
        * @name umbraco.services.tinyMceService#configuration
        * @methodOf umbraco.services.tinyMceService
        *
        * @description
        * Returns a collection of plugins available to the tinyMCE editor
        *
        */
        configuration(): ITinyMcePlugin[];

        /**
        * @ngdoc method
        * @name umbraco.services.tinyMceService#defaultPrevalues
        * @methodOf umbraco.services.tinyMceService
        *
        * @description
        * Returns a default configration to fallback on in case none is provided
        *
        */
        defaultPrevalues(): IConfiguration;

        /**
        * @ngdoc method
        * @name umbraco.services.tinyMceService#createInsertEmbeddedMedia
        * @methodOf umbraco.services.tinyMceService
        *
        * @description
        * Creates the umbrco insert embedded media tinymce plugin
        *
        * @param {Object} editor the TinyMCE editor instance
        * @param {Object} $scope the current controller scope
        */
        createInsertEmbeddedMedia(editor: Object, $scope: ng.IScope): void;

        /**
        * @ngdoc method
        * @name umbraco.services.tinyMceService#createMediaPicker
        * @methodOf umbraco.services.tinyMceService
        *
        * @description
        * Creates the umbrco insert media tinymce plugin
        *
        * @param {Object} editor the TinyMCE editor instance
        * @param {Object} $scope the current controller scope
        */
        createMediaPicker(editor: Object): void;

        /**
        * @ngdoc method
        * @name umbraco.services.tinyMceService#createUmbracoMacro
        * @methodOf umbraco.services.tinyMceService
        *
        * @description
        * Creates the insert umbrco macro tinymce plugin
        *
        * @param {Object} editor the TinyMCE editor instance
        * @param {Object} $scope the current controller scope
        */
        createInsertMacro(editor: Object, $scope: ng.IScope): void;
    }

    /**
     * Package Folder
     */
    interface IPackageFolder {

    }

    /**
     * Cache args
     */
    interface ICacheArgs {
        cacheKey: string;
        section?: string;
        childrenOf?: number;
    }

    /**
     * Node args
     */
    interface INodeArgs {
        node: any;
        section: any;
    }

    /**
     * Tree args
     */
    interface ITreeArgs {
        cacheKey?: string;
        section: string;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.treeService
    * @function
    *
    * @description
    * The tree service factory, used internally by the umbTree and umbTreeItem directives
    */
    interface ITreeService {

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getTreePackageFolder
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Determines if the current tree is a plugin tree and if so returns the package folder it has declared
        * so we know where to find it's views, otherwise it will just return undefined.
        *
        * @param {String} treeAlias The tree alias to check
        */
        getTreePackageFolder(treeAlias: string): IPackageFolder;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#clearCache
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Clears the tree cache - with optional cacheKey, optional section or optional filter.
        *
        * @param {Object} args arguments
        * @param {String} args.cacheKey optional cachekey - this is used to clear specific trees in dialogs
        * @param {String} args.section optional section alias - clear tree for a given section
        * @param {String} args.childrenOf optional parent ID - only clear the cache below a specific node
        */
        clearCache(args?: ICacheArgs): void;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#loadNodeChildren
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Clears all node children, gets it's up-to-date children from the server and re-assigns them and then
        * returns them in a promise.
        * @param {object} args An arguments object
        * @param {object} args.node The tree node
        * @param {object} args.section The current section
        */
        loadNodeChildren(args: INodeArgs): ng.IPromise<any>;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#removeNode
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Removes a given node from the tree
        * @param {object} treeNode the node to remove
        */
        removeNode(treeNode: Object): void;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#removeChildNodes
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Removes all child nodes from a given tree node
        * @param {object} treeNode the node to remove children from
        */
        removeChildNodes(treeNode: Object): void;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getChildNode
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Gets a child node with a given ID, from a specific treeNode
        * @param {object} treeNode to retrive child node from
        * @param {int} id id of child node
        */
        getChildNode(treeNode: Object, id: number): any;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getDescendantNode
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Gets a descendant node by id
        * @param {object} treeNode to retrive descendant node from
        * @param {int} id id of descendant node
        * @param {string} treeAlias - optional tree alias, if fetching descendant node from a child of a listview document
        */
        getDescendantNode(treeNode: Object, id: number, treeAlias: string): any;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getTreeRoot
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Gets the root node of the current tree type for a given tree node
        * @param {object} treeNode to retrive tree root node from
        */
        getTreeRoot(treeNode: Object): any;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getTreeAlias
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Gets the node's tree alias, this is done by looking up the meta-data of the current node's root node
        * @param {object} treeNode to retrive tree alias from
        */
        getTreeAlias(treeNode: Object): string;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getTree
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * gets the tree, returns a promise
        * @param {object} args Arguments
        * @param {string} args.section Section alias
        * @param {string} args.cacheKey Optional cachekey
        */
        getTree(args: ITreeArgs): ng.IPromise<any>;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getMenu
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Returns available menu actions for a given tree node
        * @param {object} args Arguments
        * @param {string} args.treeNode tree node object to retrieve the menu for
        */
        getMenu(...args: any[]): any;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getChildren
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Gets the children from the server for a given node
        * @param {object} args Arguments
        * @param {object} args.node tree node object to retrieve the children for
        * @param {string} args.section current section alias
        */
        getChildren(...args: any[]): any;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#reloadNode
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * Re-loads the single node from the server
        * @param {object} node Tree node to reload
        */
        reloadNode(node: Object): void;

        /**
        * @ngdoc method
        * @name umbraco.services.treeService#getPath
        * @methodOf umbraco.services.treeService
        * @function
        *
        * @description
        * This will return the current node's path by walking up the tree
        * @param {object} node Tree node to retrieve path for
        */
        getPath(node: Object): string;
    }


    interface KeyValuePair<T> {
        key: string;
        value: T;
    }

    /**
    * @ngdoc service
    * @name umbraco.services.umbRequestHelper
    * @description A helper object used for sending requests to the server
    */
    interface IUmbracoRequestHelper {

        /**
        * @ngdoc method
        * @name umbraco.services.umbRequestHelper#convertVirtualToAbsolutePath
        * @methodOf umbraco.services.umbRequestHelper
        * @function
        *
        * @description
        * This will convert a virtual path (i.e. ~/App_Plugins/Blah/Test.html ) to an absolute path
        *
        * @param {string} a virtual path, if this is already an absolute path it will just be returned, if this is a relative path an exception will be thrown
        */
        convertVirtualToAbsolutePath(virtualPath: string): string;

        /**
        * @ngdoc method
        * @name umbraco.services.umbRequestHelper#dictionaryToQueryString
        * @methodOf umbraco.services.umbRequestHelper
        * @function
        *
        * @description
        * This will turn an array of key/value pairs into a query string
        *
        * @param {Array} queryStrings An array of key/value pairs
        */
        dictionaryToQueryString(queryStrings: KeyValuePair<string>[]): string;

        /**
        * @ngdoc method
        * @name umbraco.services.umbRequestHelper#getApiUrl
        * @methodOf umbraco.services.umbRequestHelper
        * @function
        *
        * @description
        * This will return the webapi Url for the requested key based on the servervariables collection
        *
        * @param {string} apiName The webapi name that is found in the servervariables["umbracoUrls"] dictionary
        * @param {string} actionName The webapi action name
        * @param {object} queryStrings Can be either a string or an array containing key/value pairs
        */
        getApiUrl(apiName: string, actionName: string, queryStrings: string|KeyValuePair<string>[]): string;

        /**
        * @ngdoc function
        * @name umbraco.services.umbRequestHelper#resourcePromise
        * @methodOf umbraco.services.umbRequestHelper
        * @function
        *
        * @description
        * This returns a promise with an underlying http call, it is a helper method to reduce
        *  the amount of duplicate code needed to query http resources and automatically handle any
        *  Http errors. See /docs/source/using-promises-resources.md
        *
        * @param {object} opts A mixed object which can either be a string representing the error message to be
        *   returned OR an object containing either:
        *     { success: successCallback, errorMsg: errorMessage }
        *          OR
        *     { success: successCallback, error: errorCallback }
        *   In both of the above, the successCallback must accept these parameters: data, status, headers, config
        *   If using the errorCallback it must accept these parameters: data, status, headers, config
        *   The success callback must return the data which will be resolved by the deferred object.
        *   The error callback must return an object containing: {errorMsg: errorMessage, data: originalData, status: status }
        */
        resourcePromise<T>(httpPromise: ng.IPromise<T>, opts: string |
            { success: ng.IHttpPromiseCallback<T>; errorMsg: string } |
            { success: ng.IHttpPromiseCallback<T>; error: ng.IHttpPromiseCallback<umb.resources.IResourcePromise> }): umb.resources.IResourcePromise| Object;
    }
}





