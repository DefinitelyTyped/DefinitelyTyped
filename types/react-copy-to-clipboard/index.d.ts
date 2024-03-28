import * as React from "react"

declare module "react-copy-to-clipboard"

export interface Options {
  debug?: boolean
  message?: string
  format?: string // MIME type
}

export interface Props {
  children?: React.ReactNode
  text: string
  onCopy?(text: string, result: boolean): void
  options?: Options
}

export const CopyToClipboard = (_props: CopyToClipboard.Props & { children?: React.ReactNode }) => React.JSX.Element
export default CopyToClipboard
