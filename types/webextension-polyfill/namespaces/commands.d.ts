//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.commands
 *
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example,
 * an action to open the browser action or send a command to the xtension.
 * Permissions: "manifest:commands"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { Tabs } from "./tabs";

export namespace Commands {
    interface Command {
        /**
         * The name of the Extension Command
         * Optional.
         */
        name?: string;

        /**
         * The Extension Command description
         * Optional.
         */
        description?: string;

        /**
         * The shortcut active for this command, or blank if not active.
         * Optional.
         */
        shortcut?: string;
    }

    /**
     * The new description for the command.
     */
    interface UpdateDetailType {
        /**
         * The name of the command.
         */
        name: string;

        /**
         * The new description for the command.
         * Optional.
         */
        description?: string;

        /**
         * Optional.
         */
        shortcut?: string;
    }

    interface OnChangedChangeInfoType {
        /**
         * The name of the shortcut.
         */
        name: string;

        /**
         * The new shortcut active for this command, or blank if not active.
         */
        newShortcut: string;

        /**
         * The old shortcut which is no longer active for this command, or blank if the shortcut was previously inactive.
         */
        oldShortcut: string;
    }

    interface Static {
        /**
         * Update the details of an already defined command.
         *
         * @param detail The new description for the command.
         */
        update(detail: UpdateDetailType): Promise<void>;

        /**
         * Reset a command's details to what is specified in the manifest.
         *
         * @param name The name of the command.
         */
        reset(name: string): Promise<void>;

        /**
         * Returns all the registered extension commands for this extension and their shortcut (if active).
         *
         * @returns Called to return the registered commands.
         */
        getAll(): Promise<Command[]>;

        /**
         * Fired when a registered command is activated using a keyboard shortcut.
         *
         * @param command
         * @param tab Optional.
         */
        onCommand: Events.Event<(command: string, tab: Tabs.Tab | undefined) => void>;

        /**
         * Fired when a registered command's shortcut is changed.
         *
         * @param changeInfo
         */
        onChanged: Events.Event<(changeInfo: OnChangedChangeInfoType) => void>;
    }
}
