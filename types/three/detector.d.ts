export var canvas: boolean;
export var webgl: boolean;
export var workers: boolean;
export var fileapi: boolean;
export function getWebGLErrorMessage(): HTMLElement;
export function addGetWebGLMessage(parameters?: {id?: string; parent?: HTMLElement}): void;

export as namespace Detector;
