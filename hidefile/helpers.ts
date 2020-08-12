"use strict";
import * as fs from 'fs';
import * as winattr from 'winattr';

export const isWindows = process.platform.startsWith("win");
export const TEMP_HIDDEN = '.temp';
export const TEMP_VISIBLE = 'temp';

export const removeFile = fs.unlinkSync;
export const removeFolder = fs.rmdirSync;

export const newFile = (path: string, attrs?: { [id: string]: any }) => {
    fs.writeFileSync(path, "");
    setAttrs(path, attrs);
};

export const newFolder = (path: string, attrs?: { [id: string]: any }) => {
    fs.mkdirSync(path);
    setAttrs(path, attrs);
};

const setAttrs = (path: string, attrs?: { [id: string]: any }) => {
    if (isWindows) {
        if (attrs != null && typeof attrs === "object") {
            winattr.setSync(path, attrs);
        }
    }
};
