// Type definitions for react-event-listener 0.4
// Project: https://github.com/oliviertassinari/react-event-listener
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface EventOptions {
    /**
     * @default false
     */
    passive?: boolean;
    /**
     * @default false
     */
    capture?: boolean;
}

export function withOptions<T>(handler: (ev: T) => any, options: EventOptions): (ev: T) => any;

export interface EventListenerProps {
    // Global events
    onPointerCancel?(ev: PointerEvent): any;
    onPointerCancelCapture?(ev: PointerEvent): any;
    onPointerDown?(ev: PointerEvent): any;
    onPointerDownCapture?(ev: PointerEvent): any;
    onPointerEnter?(ev: PointerEvent): any;
    onPointerEnterCapture?(ev: PointerEvent): any;
    onPointerLeave?(ev: PointerEvent): any;
    onPointerLeaveCapture?(ev: PointerEvent): any;
    onPointerMove?(ev: PointerEvent): any;
    onPointerMoveCapture?(ev: PointerEvent): any;
    onPointerOut?(ev: PointerEvent): any;
    onPointerOutCapture?(ev: PointerEvent): any;
    onPointerOver?(ev: PointerEvent): any;
    onPointerOverCapture?(ev: PointerEvent): any;
    onPointerUp?(ev: PointerEvent): any;
    onPointerUpCapture?(ev: PointerEvent): any;
    onWheel?(ev: WheelEvent): any;
    onWheelCapture?(ev: WheelEvent): any;
    onAbort?(ev: Event): any;
    onAbortCapture?(ev: Event): any;
    onAfterPrint?(ev: Event): any;
    onAfterPrintCapture?(ev: Event): any;
    onBeforePrint?(ev: Event): any;
    onBeforePrintCapture?(ev: Event): any;
    onBeforeUnload?(ev: BeforeUnloadEvent): any;
    onBeforeUnloadCapture?(ev: BeforeUnloadEvent): any;
    onBlur?(ev: FocusEvent): any;
    onBlurCapture?(ev: FocusEvent): any;
    onCanPlay?(ev: Event): any;
    onCanPlayCapture?(ev: Event): any;
    onCanPlayThrough?(ev: Event): any;
    onCanPlayThroughCapture?(ev: Event): any;
    onChange?(ev: Event): any;
    onChangeCapture?(ev: Event): any;
    onClick?(ev: MouseEvent): any;
    onClickCapture?(ev: MouseEvent): any;
    onCompassNeedsCalibration?(ev: Event): any;
    onCompassNeedsCalibrationCapture?(ev: Event): any;
    onContextMenu?(ev: PointerEvent): any;
    onContextMenuCapture?(ev: PointerEvent): any;
    onDblClick?(ev: MouseEvent): any;
    onDblClickCapture?(ev: MouseEvent): any;
    onDeviceMotion?(ev: DeviceMotionEvent): any;
    onDeviceMotionCapture?(ev: DeviceMotionEvent): any;
    onDeviceOrientation?(ev: DeviceOrientationEvent): any;
    onDeviceOrientationCapture?(ev: DeviceOrientationEvent): any;
    onDrag?(ev: DragEvent): any;
    onDragCapture?(ev: DragEvent): any;
    onDragEnd?(ev: DragEvent): any;
    onDragEndCapture?(ev: DragEvent): any;
    onDragEnter?(ev: DragEvent): any;
    onDragEnterCapture?(ev: DragEvent): any;
    onDragLeave?(ev: DragEvent): any;
    onDragLeaveCapture?(ev: DragEvent): any;
    onDragOver?(ev: DragEvent): any;
    onDragOverCapture?(ev: DragEvent): any;
    onDragStart?(ev: DragEvent): any;
    onDragStartCapture?(ev: DragEvent): any;
    onDrop?(ev: DragEvent): any;
    onDropCapture?(ev: DragEvent): any;
    onDurationChange?(ev: Event): any;
    onDurationChangeCapture?(ev: Event): any;
    onEmptied?(ev: Event): any;
    onEmptiedCapture?(ev: Event): any;
    onEnded?(ev: Event): any;
    onEndedCapture?(ev: Event): any;
    onError?: ErrorEventHandler;
    onErrorCapture?: ErrorEventHandler;
    onFocus?(ev: FocusEvent): any;
    onFocusCapture?(ev: FocusEvent): any;
    onHashChange?(ev: HashChangeEvent): any;
    onHashChangeCapture?(ev: HashChangeEvent): any;
    onInput?(ev: Event): any;
    onInputCapture?(ev: Event): any;
    onKeyDown?(ev: KeyboardEvent): any;
    onKeyDownCapture?(ev: KeyboardEvent): any;
    onKeyPress?(ev: KeyboardEvent): any;
    onKeyPressCapture?(ev: KeyboardEvent): any;
    onKeyUp?(ev: KeyboardEvent): any;
    onKeyUpCapture?(ev: KeyboardEvent): any;
    onLoad?(ev: Event): any;
    onLoadCapture?(ev: Event): any;
    onLoadedData?(ev: Event): any;
    onLoadedDataCapture?(ev: Event): any;
    onLoadedMetadata?(ev: Event): any;
    onLoadedMetadataCapture?(ev: Event): any;
    onLoadStart?(ev: Event): any;
    onLoadStartCapture?(ev: Event): any;
    onMessage?(ev: MessageEvent): any;
    onMessageCapture?(ev: MessageEvent): any;
    onMouseDown?(ev: MouseEvent): any;
    onMouseDownCapture?(ev: MouseEvent): any;
    onMouseEnter?(ev: MouseEvent): any;
    onMouseEnterCapture?(ev: MouseEvent): any;
    onMouseLeave?(ev: MouseEvent): any;
    onMouseLeaveCapture?(ev: MouseEvent): any;
    onMouseMove?(ev: MouseEvent): any;
    onMouseMoveCapture?(ev: MouseEvent): any;
    onMouseOut?(ev: MouseEvent): any;
    onMouseOutCapture?(ev: MouseEvent): any;
    onMouseOver?(ev: MouseEvent): any;
    onMouseOverCapture?(ev: MouseEvent): any;
    onMouseUp?(ev: MouseEvent): any;
    onMouseUpCapture?(ev: MouseEvent): any;
    onMouseWheel?(ev: MouseWheelEvent): any;
    onMouseWheelCapture?(ev: MouseWheelEvent): any;
    onMsGestureChange?(ev: MSGestureEvent): any;
    onMsGestureChangeCapture?(ev: MSGestureEvent): any;
    onMsGestureDoubleTap?(ev: MSGestureEvent): any;
    onMsGestureDoubleTapCapture?(ev: MSGestureEvent): any;
    onMsGestureEnd?(ev: MSGestureEvent): any;
    onMsGestureEndCapture?(ev: MSGestureEvent): any;
    onMsGestureHold?(ev: MSGestureEvent): any;
    onMsGestureHoldCapture?(ev: MSGestureEvent): any;
    onMsGestureStart?(ev: MSGestureEvent): any;
    onMsGestureStartCapture?(ev: MSGestureEvent): any;
    onMsGestureTap?(ev: MSGestureEvent): any;
    onMsGestureTapCapture?(ev: MSGestureEvent): any;
    onMsInertiaStart?(ev: MSGestureEvent): any;
    onMsInertiaStartCapture?(ev: MSGestureEvent): any;
    onMsPointerCancel?(ev: MSPointerEvent): any;
    onMsPointerCancelCapture?(ev: MSPointerEvent): any;
    onMsPointerDown?(ev: MSPointerEvent): any;
    onMsPointerDownCapture?(ev: MSPointerEvent): any;
    onMsPointerEnter?(ev: MSPointerEvent): any;
    onMsPointerEnterCapture?(ev: MSPointerEvent): any;
    onMsPointerLeave?(ev: MSPointerEvent): any;
    onMsPointerLeaveCapture?(ev: MSPointerEvent): any;
    onMsPointerMove?(ev: MSPointerEvent): any;
    onMsPointerMoveCapture?(ev: MSPointerEvent): any;
    onMsPointerOut?(ev: MSPointerEvent): any;
    onMsPointerOutCapture?(ev: MSPointerEvent): any;
    onMsPointerOver?(ev: MSPointerEvent): any;
    onMsPointerOverCapture?(ev: MSPointerEvent): any;
    oNmsPointerUp?(ev: MSPointerEvent): any;
    oNmsPointerUpCapture?(ev: MSPointerEvent): any;
    onOffline?(ev: Event): any;
    onOfflineCapture?(ev: Event): any;
    onOnline?(ev: Event): any;
    onOnlineCapture?(ev: Event): any;
    onOrientationChange?(ev: Event): any;
    onOrientationChangeCapture?(ev: Event): any;
    onPageHide?(ev: PageTransitionEvent): any;
    onPageHideCapture?(ev: PageTransitionEvent): any;
    onPageShow?(ev: PageTransitionEvent): any;
    onPageShowCapture?(ev: PageTransitionEvent): any;
    onPause?(ev: Event): any;
    onPauseCapture?(ev: Event): any;
    onPlay?(ev: Event): any;
    onPlayCapture?(ev: Event): any;
    onPlaying?(ev: Event): any;
    onPlayingCapture?(ev: Event): any;
    onPopState?(ev: PopStateEvent): any;
    onPopStateCapture?(ev: PopStateEvent): any;
    onProgress?(ev: ProgressEvent): any;
    onProgressCapture?(ev: ProgressEvent): any;
    onRateChange?(ev: Event): any;
    onRateChangeCapture?(ev: Event): any;
    onReadyStateChange?(ev: ProgressEvent): any;
    onReadyStateChangeCapture?(ev: ProgressEvent): any;
    onReset?(ev: Event): any;
    onResetCapture?(ev: Event): any;
    onResize?(ev: UIEvent): any;
    onResizeCapture?(ev: UIEvent): any;
    onScroll?(ev: UIEvent): any;
    onScrollCapture?(ev: UIEvent): any;
    onSeeked?(ev: Event): any;
    onSeekedCapture?(ev: Event): any;
    onSeeking?(ev: Event): any;
    onSeekingCapture?(ev: Event): any;
    onSelect?(ev: UIEvent): any;
    onSelectCapture?(ev: UIEvent): any;
    onStalled?(ev: Event): any;
    onStalledCapture?(ev: Event): any;
    onStorage?(ev: StorageEvent): any;
    onStorageCapture?(ev: StorageEvent): any;
    onSubmit?(ev: Event): any;
    onSubmitCapture?(ev: Event): any;
    onSuspend?(ev: Event): any;
    onSuspendCapture?(ev: Event): any;
    onTimeUpdate?(ev: Event): any;
    onTimeUpdateCapture?(ev: Event): any;
    onTouchCancel?: any;
    onTouchCancelCapture?: any;
    onTouchEnd?: any;
    onTouchEndCapture?: any;
    onTouchMove?: any;
    onTouchMoveCapture?: any;
    onTouchStart?: any;
    onTouchStartCapture?: any;
    onUnload?(ev: Event): any;
    onUnloadCapture?(ev: Event): any;
    onVolumeChange?(ev: Event): any;
    onVolumeChangeCapture?(ev: Event): any;
    onWaiting?(ev: Event): any;
    onWaitingCapture?(ev: Event): any;

    /**
     * Target (window or document)
     */
    target: Window | Document | string;
}

export default class EventListener extends React.Component<EventListenerProps> { }
