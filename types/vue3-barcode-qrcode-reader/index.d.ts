import { Component } from "vue";

export interface CaptureProps {
  capture: 'shoot' | 'stream'
}

export const StreamQrcodeBarcodeReader: Component<CaptureProps>
export const IconCamera: Component
