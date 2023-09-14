import * as flashpoint from "flashpoint-launcher";

export function activate() {
    flashpoint.commands.registerCommand("com.example.command", () => {
        flashpoint.log.debug("Command Run!");
    });

    flashpoint.log.info(`Extension Loaded!`);
}
