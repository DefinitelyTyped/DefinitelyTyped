/// <reference types="node" />

import { ExecException } from "child_process";

/**
 * Copy an image to the clipboard
 * @param img - The raw image data or file path of the image
 * @returns The result of the inner `child_process.exec` call - `[error, stdout, stderr]`
 */
export function copyImg(img: Buffer | string): Promise<[ExecException | null, string, string]>;

/** Check if the current environment is Wayland */
export function isWayland(): boolean;

export const ErrorCodes: {
    COMMAND_NOT_FOUND: 127;
};
