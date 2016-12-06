// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.Init.d.ts"/>
/// <reference path="SP.d.ts"/>


declare namespace SP {
    export namespace UI {
        export class PopoutMenu implements Sys.IDisposable {
            constructor(launcherId: string, menuId: string, iconId: string, launcherOpenCssClass: string, textDirection: string, closeIconUrl: string, isClustered: boolean, closeIconOffsetLeft: number, closeIconOffsetTop: number, closeIconHeight: number, closeIconWidth: number);
            launchMenu(): void;
            closeMenu(): void;
            static createPopoutMenuInstanceAndLaunch(anchorId: string, menuId: string, iconId: string, anchorOpenCss: string, textDirection: string, closeIconUrl: string, isClustered: boolean, x: number, y: number, height: number, width: number): void;
            static closeActivePopoutMenuInstance(): void;
            dispose(): void;
        }
        export class AttractModeControl extends Sys.UI.Control {
            defaultAttractModeIcon: string;
            cssAttractMode: string;
            cssAttractModeBackground: string;
            cssAttractModeCell: string;
            cssAttractModeWrapper: string;
            cssAttractModeIcon: string;
            cssAttractModeText: string;
            get_imageElement(): any;
            get_textElement(): HTMLElement;
            constructor();
        }

        export namespace Notify {
            export function addNotification(strHtml: string, bSticky: boolean): string;
            export function removeNotification(nid: string): void;
            export function showLoadingNotification(bSticky: boolean): string;


            export class Notification {
                constructor(containerId: SPNotifications.ContainerID, strHtml: string, bSticky?: boolean, strTooltip?: string, onclickHandler?: () => void, extraData?: SPStatusNotificationData);
                get_id(): string;
                Show(bNoAnimate: boolean): void;
                Hide(bNoAnimate: boolean): void;
            }
            export class NotificationContainer {
                constructor(id: number, element: any, layer: number, notificationLimit?: number);
                Clear(): void;
                GetCount(): number;
                SetEventHandler(eventId: SPNotifications.EventID, eventHandler: any): void;
            }
        }

        export class Status {
            static addStatus(strTitle: string, strHtml?: string, atBegining?: boolean): string;
            static appendStatus(sid: string, strTitle: string, strHtml: string): string;
            static updateStatus(sid: string, strHtml: string): void;
            static setStatusPriColor(sid: string, strColor: string): void;
            static removeStatus(sid: string): void;
            static removeAllStatus(hide: boolean): void;
            constructor();
        }


        export class Menu {
            static create(id: string): SP.UI.Menu;
            addMenuItem(text: string, actionScriptText: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string): HTMLElement;
            addSeparator(): void;
            addSubMenu(text: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string): SP.UI.Menu;
            show(relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number): void;
            showFilterMenu(relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number, fShowClose: boolean, fShowCheckBoxes: boolean): void;
            hideIcons(): void;
            showIcons(): void;
        }
        export class MenuTest {
            static setup(relativeElement: HTMLElement): void;
            constructor();
        }

        export function $create_DialogOptions(): DialogOptions;

        /** Result of a modal dialog execution */
        export enum DialogResult {
            /** Do not use this */
            invalid,
            /** User closed dialog, cancelling the action */
            cancel,
            /** Dialog actions completed successfully */
            OK
        }
        /** Callback which processes dialog result value after dialog is closed */
        export interface DialogReturnValueCallback {
            (dialogResult: DialogResult, returnValue: any): void;
        }
        /** Options for dialog creation */
        export interface IDialogOptions {
            /** Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property. */
            title?: string;
            /** X coordinate of the dialog box. */
            x?: number;
            /** Y coordinate of the dialog box. */
            y?: number;
            /** The dialog will be maximized when shown. */
            showMaximized?: boolean;
            /** url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both. */
            url?: string;
            /** specifies if close button should be shown on the dialog */
            showClose?: boolean;
            /** specifies if maximize button should be shown on the dialog */
            allowMaximize?: boolean;
            /** callback that is called after dialog is closed */
            dialogReturnValueCallback?: DialogReturnValueCallback;
            /** automatically determine size of the dialog based on its contents. */
            autoSize?: boolean;
            /** minimum width of the dialog when using autoSize option */
            autoSizeStartWidth?: number;
            /** include padding for adding a scrollbar */
            includeScrollBarPadding?: boolean;
            /** width of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            width?: number;
            /** height of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            height?: number;
            /** html element which will be used as contents of the dialog. You should use either html or url attribute, but not both. */
            html?: HTMLElement;
            /** custom arguments to be passed to the dialog */
            args?: any;
        }
        export class DialogOptions implements IDialogOptions {
            /** Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property. */
            title: string;
            /** X coordinate of the dialog box. */
            x: number;
            /** Y coordinate of the dialog box. */
            y: number;
            /** The dialog will be maximized when shown. */
            showMaximized: boolean;
            /** url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both. */
            url: string;
            /** specifies if close button should be shown on the dialog */
            showClose: boolean;
            /** specifies if maximize button should be shown on the dialog */
            allowMaximize: boolean;
            /** callback that is called after dialog is closed */
            dialogReturnValueCallback: DialogReturnValueCallback;
            /** automatically determine size of the dialog based on its contents. */
            autoSize: boolean;
            /** minimum width of the dialog when using autoSize option */
            autoSizeStartWidth: number;
            /** include padding for adding a scrollbar */
            includeScrollBarPadding: boolean;
            /** width of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            width: number;
            /** height of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            height: number;
            /** html element which will be used as contents of the dialog. You should use either html or url attribute, but not both. */
            html: HTMLElement;
            /** custom arguments to be passed to the dialog */
            args: any;
        }
        /** Represents a dialog. Do not use this class directly from your code. */
        export class Dialog {
            get_firstTabStop(): HTMLElement;
            get_lastTabStop(): HTMLElement;
            get_url(): string;
            get_html(): string;
            get_title(): string;
            get_args(): any;
            get_allowMaximize(): boolean;
            get_showClose(): boolean;
            get_returnValue(): any;
            set_returnValue(value: any): void;
            get_frameElement(): HTMLFrameElement;
            get_dialogElement(): HTMLElement;
            get_isMaximized(): boolean;
            get_closed(): boolean;
            autoSizeSuppressScrollbar(resizePageCallBack: any): void;
            autoSize(): void;
        }
        /** Represents a modal dialog */
        export class ModalDialog extends SP.UI.Dialog {
            /** Displays a modal dialog defined by the specified options. */
            static showModalDialog(options: SP.UI.IDialogOptions): SP.UI.ModalDialog;
            /** Should be called from an existing dialog. */
            static commonModalDialogClose(dialogResult: SP.UI.DialogResult, returnValue: any): void;
            /** Shows a modal dialog, specified by url, callback, args, and options. Internally, uses SP.UI.ModalDialog.showModalDialog.
                @param url overrides options.url
                @param callback overrides options.dialogResultValueCallback
                @param args overrides options.args */
            static commonModalDialogOpen(url: string, options: SP.UI.IDialogOptions, callback?: SP.UI.DialogReturnValueCallback, args?: any): void;
            /** Refresh the page if specified dialogResult equals to SP.UI.DialogResult.OK */
            static RefreshPage(dialogResult: SP.UI.DialogResult): void;
            /** Show page specified by the url in a modal dialog. If the dialog returns SP.UI.DialogResult.OK, the page is refreshed. */
            static ShowPopupDialog(url: string): void;
            /** Show modal dialog specified by url, callback, height and width. */
            static OpenPopUpPage(url: string, callback: SP.UI.DialogReturnValueCallback, width?: number, height?: number): void;
            /** Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel/close button is not shown. */
            static showWaitScreenWithNoClose(title: string, message?: string, height?: number, width?: number): SP.UI.ModalDialog;
            /** Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel button is shown. If user clicks it, the callbackFunc is called. */
            static showWaitScreenSize(title: string, message?: string, callbackFunc?: SP.UI.DialogReturnValueCallback, height?: number, width?: number): SP.UI.ModalDialog;
            static showPlatformFirstRunDialog(url: string, callbackFunc: SP.UI.DialogReturnValueCallback): SP.UI.ModalDialog;
            static get_childDialog(): ModalDialog;
            /** Closes the dialog using the specified dialog result. */
            close(dialogResult: SP.UI.DialogResult): void;
        }


        export class Command {
            constructor(name: string, displayName: string);
            get_displayName(): string;
            set_displayName(value: string): string;

            get_tooltip(): string;
            set_tooltip(value: string): string;

            get_isEnabled(): boolean;
            set_isEnabled(value: boolean): boolean;

            get_href(): string;
            get_name(): string;
            get_elementIDPrefix(): string;
            set_elementIDPrefix(value: string): string;

            get_linkElement(): HTMLAnchorElement;

            get_isDropDownCommand(): boolean;
            set_isDropDownCommand(value: boolean): boolean;

            attachEvents(): void;
            render(builder: HtmlBuilder): void;


            /**Should override*/
            onClick(): void;

        }


        export class CommandBar {
            constructor();
            get_commands(): Command[];
            get_dropDownThreshold(): number;
            set_dropDownThreshold(value: number): number;
            get_elementID(): string;
            get_overrideClass(): string;
            set_overrideClass(value: string): string;
            addCommand(action: Command): void;
            insertCommand(action: Command, position: number): void;
            render(builder: HtmlBuilder): void;
            attachEvents(): void;
            findCommandByName(name: string): Command;
        }


        export class PagingControl {
            constructor(id: string);
            render(innerContent: string): string;
            postRender(): void;
            get_innerContent(): HTMLSpanElement;
            get_innerContentClass(): string;
            setButtonState(buttonId: number, state: number): void;
            getButtonState(buttonId: number): number;
            onWindowResized(): void;

            /**Should override*/
            onPrev(): void;
            onNext(): void;

            static ButtonIDs: {
                prev: number;
                next: number;
            }

            static ButtonState: {
                hidden: number
                disabled: number;
                enabled: number;
            }
        }

        export namespace Workplace {
            export function add_resized(handler: Function): void;
            export function remove_resized(handler: Function): void;
        }

        export module UIUtility {
            export function generateRandomElementId(): string;
            export function cancelEvent(evt: Event): void;
            export function clearChildNodes(elem: HTMLElement): void;
            export function hideElement(elem: HTMLElement): void;
            export function showElement(elem: HTMLElement): void;
            export function insertBefore(elem: HTMLElement, targetElement: HTMLElement): void;
            export function insertAfter(elem: HTMLElement, targetElement: HTMLElement): void;
            export function removeNode(elem: HTMLElement): void;
            export function calculateOffsetLeft(elem: HTMLElement): number;
            export function calculateOffsetTop(elem: HTMLElement): number;
            export function createHtmlInputText(text: string): HTMLInputElement;
            export function createHtmlInputCheck(isChecked: boolean): HTMLInputElement;
            export function setInnerText(elem: HTMLElement, value: string): void;
            export function getInnerText(elem: HTMLElement): string;
            export function isTextNode(elem: HTMLElement): boolean;
            export function isSvgNode(elem: HTMLElement): boolean;
            export function isNodeOfType(elem: HTMLElement, tagNames: string[]): boolean;
            export function focusValidOnThisNode(elem: HTMLElement): boolean;
        }
    }
}

declare namespace SPNotifications {

    export enum ContainerID {
        Basic,
        Status,
    }
    export enum EventID {
        OnShow,
        OnHide,
        OnDisplayNotification,
        OnRemoveNotification,
        OnNotificationCountChanged,
    }
}

declare class SPStatusNotificationData {
    constructor(text: string, subText: string, imageUrl: string, sip: string);
}