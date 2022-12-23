interface Warner {
    warn(code: string, message: string, data?: Buffer): void;
}

export = Warner;
