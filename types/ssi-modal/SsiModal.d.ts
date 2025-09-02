/**
 * SsiModal:
 * @see https://github.com/ssbeefeater/ssi-modal
 * @author ssbeefeater
 *
 * This d.ts file:
 * @author dragon-fish
 *
 * @license MIT
 */

export class SsiModal {
  constructor(options: Partial<SsiModalOptions>)

  readonly backdropId: string
  readonly modalId: string
  readonly numberId: string
  options: SsiModalOptions
  readonly pluginName: string
  close: () => void
  /**
   * Initialize the modal and backdrop and expose them to the DOM
   */
  init: () => this
  /**
   * Changes the previe state (fullScreen) of the modal.
   */
  changePreviewState: () => this
  /**
   * Generates a button according to the options.
   * @returns The button element.
   */
  generateButton: (buttonOptions: Partial<SsiModalButton>) => JQuery<HTMLElement>
  /**
   * Returns the backdrop element of the modal.
   * Or outer element if the modal is stack.
   */
  get$backdrop: () => JQuery<HTMLElement>
  /**
   * Returns the buttons element of the modal.
   * @param type - 'left' or 'right'. If not specified, returns all buttons' container.
   */
  get$buttons: (type?: 'buttons' | 'leftButtons' | 'rightButtons') => JQuery<HTMLElement>
  /**
   * Returns the content element of the modal.
   */
  get$content: () => JQuery<HTMLElement>
  /**
   * Returns the title icons of the modal.
   */
  get$icons: () => JQuery<HTMLElement>
  /**
   * Returns the modal element of the modal.
   * @description returns the outer element of the modal (ie if we use stack modals will return the window object else will return the modalOuter)
   */
  get$modal: () => SsiModalModalElement
  /**
   * Returns the title element of the modal.
   */
  get$title: () => JQuery<HTMLElement>
  /**
   * Returns the window element of the modal.
   */
  get$window: () => JQuery<HTMLElement>
  /**
   * Returns the wrapper element of the modal.
   */
  get$wrapper: () => JQuery<HTMLElement>
  /**
   * Initialize the buttons element if it is necessary, and add the buttons to the element.
   * @returns Buttons container element.
   */
  setButtons: (
    buttons: Partial<SsiModalButton>[],
    area?: AnyJQueryElement,
    $modalWindow?: JQuery<any>
  ) => JQuery<HTMLElement>
  /**
   * Initialize the content element if it is necessary and registers the content.
   * @param content The content of the element.
   * @param method The jquery method that will use to register the content to the modal.
   * @returns The content element of the modal.
   */
  setContent: (
    content: string | HTMLElement | JQuery<any>,
    method?: 'html' | 'append' | 'prepend'
  ) => JQuery<any>
  setIcons: (icons: any) => void
  setModalHeight: (offset: number, option?: 'height' | 'min-height' | 'max-height') => number
  setOptions: (options: Partial<SsiModalOptions>) => this
  setPluginName: (name: string) => this
  setTitle: (title: string | HTMLElement | JQuery<any>) => void
  show: () => this

  // Static methods
  static proto: SsiModal
  /**
   * Checks if the element is a ssi modal object.
   */
  static checkElement: (element: AnyJQueryElement) => SsiModal | false
  /**
   * Creates a ssi modal object and shows it immediately.
   * @example ```js
   * ssi_modal.show({content:'Hello World'})
   * ```
   */
  static show: (options: Partial<SsiModalOptions>) => SsiModal
  /**
   * Creates a ssi modal object but does not show it.
   * @example ```js
   * ssi_modal.createObject({content:'Hello World'}).init().show()
   * ```
   */
  static createObject: (options: Partial<SsiModalOptions>) => SsiModal
  /**
   * Closes the very top modal. If you pass a target parameter will close the modal you specified.
   */
  static close: (modalId?: string) => SsiModal
  static closeAll: () => SsiModal
  /**
   * Remove all the modals from the dom immediately. No callbacks will execute.
   */
  static removeAll: () => void

  // == Plugins ==
  // dialog
  static dialog: (
    options: Partial<SsiModalOptions>,
    method: (event: MouseEvent, modal: SsiModal) => void
  ) => SsiModal
  // confirm
  static confirm: (
    options: Partial<SsiModalOptions> &
      Partial<{
        okBtn: Pick<SsiModalButton, 'label' | 'className'>
        cancelBtn: Pick<SsiModalButton, 'label' | 'className'>
      }>,
    method: (event: MouseEvent, modal: SsiModal) => void
  ) => SsiModal
  // notify
  static notify: (
    type: 'success' | 'error' | 'warning' | 'info' | 'dialog' | 'confirm',
    options: Partial<SsiModalOptions> &
      Partial<{
        icon: string
        okBtn: Pick<SsiModalButton, 'label' | 'className'>
        cancelBtn: Pick<SsiModalButton, 'label' | 'className'>
        overrideOther: boolean
      }>,
    callback?: (result: boolean) => void
  ) => SsiModal
}

export interface SsiModalOptions {
  animation: SsiModalAnimation
  animationSpeed: number
  backdrop: boolean | ('shared' | 'byKindShared')
  backdropAnimation: SsiModalAnimation
  backdropClassName: string
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  beforeClose: (modal: SsiModal) => boolean | void
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  beforeShow: (modal: SsiModal) => boolean | void
  bodyElement: boolean
  bodyScroll: boolean
  buttons: Partial<SsiModalButton>[]
  center: boolean
  className: string
  closeAfter: {
    time: number
    displayTime: number
    resetOnHover: boolean
  }
  closeIcon: boolean
  content: string | HTMLElement | JQuery<any>
  fitScreen: boolean
  fixedHeight: boolean | number
  iconButtons: boolean
  iframe: unknown
  keepContent: boolean
  modalAnimation: SsiModalAnimation
  navigation: boolean
  onClickClose: boolean
  onClose: (modal: SsiModal) => void
  onShow: (modal: SsiModal) => void
  outSideClose: boolean
  position:
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom'
    | 'center top'
    | 'center bottom'
  preview: unknown
  sizeClass: SsiModalSizeClass
  stack: boolean
  title: AnyJQueryElement
}

export interface SsiModalButton {
  label: AnyJQueryElement
  type: 'button' | 'link'
  className: string
  enableAfter: number | false
  id: string
  method: (this: HTMLButtonElement, event: MouseEvent, modal: SsiModal) => void
  side: 'left' | 'right'
  keyPress: string
  closeAfter: number | false
}

export type SsiModalSizeClass =
  | 'dialog'
  | 'small'
  | 'smallToMedium'
  | 'medium'
  | 'mediumToLarge'
  | 'large'
  | 'full'
  | 'auto'

export type SsiModalModalElement = JQuery<HTMLElement> & {
  on: JQuery['on'] &
    (<T extends keyof SsiModalEventMap>(
      event: T,
      callback: (event: SsiModalEventMap[T]) => void
    ) => SsiModalModalElement)
}
export interface SsiModalEventMap {
  'beforeShow.ssi-modal': JQuery.Event
  'onShow.ssi-modal': JQuery.Event
  'backdropClose.ssi-modal': JQuery.Event
  'beforeClose.ssi-modal': JQuery.Event
  'onClose.ssi-modal': JQuery.Event
}

export type SsiModalAnimation =
  | string
  | {
      show: string | false
      hide: string | false
    }
  | false

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
type AnyJQueryElement = string | HTMLElement | JQuery<any>

// Declare the global variable
declare global {
  const ssi_modal: typeof SsiModal
  interface Window {
    ssi_modal: typeof SsiModal
  }
}
