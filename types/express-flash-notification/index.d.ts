import express = require("express");

interface efnOptions {
    sessionName?: string | undefined;
    utilityName?: string | undefined;
    localsName?: string | undefined;
    viewName?: string | undefined;
    beforeSingleRender?: ((item: any, callback: (err: any, item: any) => void) => void) | undefined;
    afterAllRender?: ((htmlFragments: string[], callback: (err: any, html: string) => void) => void) | undefined;
}

declare function express_flash_notification(app: express.Application, options?: efnOptions, ...args: any[]): any;

declare namespace express_flash_notification {
    const prototype: {};
}

declare global {
    namespace Express {
        interface FlashOptions {
            type?: string | undefined;
            message?: string | undefined;
            redirect?: boolean | undefined;
            url?: string | undefined;
        }
        interface Request {
            flash(type: string, message?: string, redirect?: string | boolean): void;
            flash(object: FlashOptions): void;
        }
    }
}

export = express_flash_notification;
