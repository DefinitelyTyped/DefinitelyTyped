import { Content, TagNode } from "@bbob/plugin-helper"

export type TagFunction = (node: TagNode, renderOptions?: { render: (node: Content) => string }) => TagNode;

export const b: TagFunction
export const i: TagFunction
export const u: TagFunction
export const s: TagFunction
export const url: TagFunction
export const img: TagFunction
export const quote: TagFunction
export const code: TagFunction
export const style: TagFunction
export const list: TagFunction
export const color: TagFunction
