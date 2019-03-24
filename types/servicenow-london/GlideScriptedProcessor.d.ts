interface GlideScriptedProcessor {
    redirect(url: string): void;
    writeOutput(contentType: string, s?: string): void;
    writeJSON(o: object): void;
}
