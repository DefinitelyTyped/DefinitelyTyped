import type { MouseEvent, TouchEvent } from "react";

declare function offset(e: MouseEvent | TouchEvent, element?: HTMLElement): [number, number];

export = offset;
