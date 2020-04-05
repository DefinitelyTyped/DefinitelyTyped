// Type definitions for non-npm package ironrealms-nexus-client 0.0
// Project: https://www.ironrealms.com/the-nexus-client/
// Definitions by: Patrick Stanford <https://github.com/pathurs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped// Client
// TypeScript Version: 3.0

declare var client: typeof window;

// Args

interface TriggerFunctionArgs {
    text: string;
    match: unknown;
    prefix: unknown;
    suffix: unknown;
    backrefs: unknown[];
}

interface GMCPFunctionArgs {
    gmcp_method: GMCPMethod;
    gmcp_args: unknown;
}

interface ScriptsArgs {
    [index: number]: unknown;
}

// Types

type ReflexType =
    | 'group'
    | 'alias'
    | 'keybind'
    | 'trigger'
    | 'event'
    | 'function'
    ;

type GMCPMethodCore =
    | 'Core.Ping'
    | 'Core.Goodbye'
    ;

type GMCPMethodChar =
    | 'Char.Name'
    | 'Char.Vitals'
    | 'Char.StatusVars'
    | 'Char.Status'
    | 'Char.Afflictions.List'
    | 'Char.Afflictions.Add'
    | 'Char.Afflictions.Remove'
    | 'Char.Defences.List'
    | 'Char.Defences.Add'
    | 'Char.Defences.Remove'
    | 'Char.Items.List'
    | 'Char.Items.Add'
    | 'Char.Items.Remove'
    | 'Char.Items.Update'
    | 'Char.Skills.Groups'
    | 'Char.Skills.List'
    | 'Char.Skills.Info'
    ;

type GMCPMethodComm =
    | 'Comm.Channel.Players'
    | 'Comm.Channel.List'
    | 'Comm.Channel.Start'
    | 'Comm.Channel.Start'
    | 'Comm.Channel.End'
    | 'Comm.Channel.Text'
    ;

type GMCPMethodRoom =
    | 'Room.Info'
    | 'Room.WrongDir'
    | 'Room.Players'
    | 'Room.AddPlayer'
    | 'Room.RemovePlayer'
    ;

type GMCPMethodRedirect =
    | 'Redirect.Window'
    ;

type GMCPMethodIRE =
    | 'IRE.Composer.Edit'
    | 'IRE.Composer.SetBuffer'
    | 'IRE.Display.FixedFont'
    | 'IRE.Display.FixedFont'
    | 'IRE.Display.Ohmap'
    | 'IRE.Misc.RemindVote'
    | 'IRE.Misc.Achievement'
    | 'IRE.Misc.URL'
    | 'IRE.Misc.Tip'
    | 'IRE.Rift.List'
    | 'IRE.Rift.Change'
    | 'IRE.Sound.Play'
    | 'IRE.Sound.Stop'
    | 'IRE.Sound.Stopall'
    | 'IRE.Sound.Preload'
    | 'IRE.Target.Set'
    | 'IRE.Target.Info'
    | 'IRE.Target.Request'
    | 'IRE.Tasks.List'
    | 'IRE.Tasks.Update'
    | 'IRE.Tasks.Completed'
    | 'IRE.Time.List'
    | 'IRE.Time.Update'
    | 'IRE.CombatMessage'
    // | 'IRE.Wiz'
    ;

type GMCPMethod =
    | GMCPMethodCore
    | GMCPMethodChar
    | GMCPMethodComm
    | GMCPMethodRoom
    | GMCPMethodRedirect
    | GMCPMethodIRE
    ;

// Calling functions

declare function run_function(name: string, args: unknown, package: string): void;

// Commands

/**
 * Send a command to the game. Set no_expansion to 1 to send the exact string to the game without expansion.
 *
 * @param input
 * @param no_expansion
 */
declare function send_command(input: string, no_expansion?: 1 | 0): void;
/**
 * Display a notice on the output screen.
 *
 * @param
 */
declare function display_notice(text: string, fgcolor?: string, bgcolor?: string): void;

// Variables

/**
 * Retrieve the value of a variable from the client's simplified scripting system.
 *
 * @param name
 */
declare function get_variable(name: string): unknown;
/**
 * Set a variable for the client's simplified scripting system.
 *
 * @param name
 * @param val
 */
declare function set_variable(name: string, val: unknown): void;
/**
 * Delete a variable from the client's simplified scripting system.
 *
 * @param name
 */
declare function delete_variable(name: string): void;
/**
 * Increment a variable from the client's simplified scripting system.
 *
 * @param name
 * @param by
 */
declare function inc_variable(name: string, by: number): void;
/**
 * Decrement a variable from the client's simplified scripting system.
 *
 * @param name
 * @param by
 */
declare function dec_variable(name: string, by: number): void;
/**
 * Multiply a variable from the client's simplified scripting system.
 *
 * @param name
 * @param by
 */
declare function mul_variable(name: string, by: number): void;
/**
 * Divide a variable from the client's simplified scripting system.
 *
 * @param name
 * @param by
 */
declare function div_variable(name: string, by: number): void;

// Reflex Manipulation

/**
 * Search for a specific reflex.
 *
 * @param type Type of reflex: 'alias', 'trigger', 'keybind', ...
 * @param name Name to search for
 * @param case_sensitive Whether the name needs to match case exactly
 * @param enabled_only Set if disabled reflexes(including reflexes in disabled groups) should be ignored
 * @param package Name if a package to search in; omit if searching in the main list
 */
declare function reflex_find_by_name(type: ReflexType, name: string, case_sensitive: boolean, enabled_only: boolean, package: string): string;
/**
 * Enable a reflex(reflex is as returned by reflex_find_by_name above).
 *
 * @param reflex
 */
declare function reflex_enable(reflex: string): void;
/**
 * Enable a reflex(reflex is as returned by reflex_find_by_name above).
 *
 * @param reflex
 */
declare function reflex_disable(reflex: string): void;

// Output Manipulation (Trigger Scripts)

/**
 * An unformatted version of the line that fired the trigger.
 */
declare function current_text(): string;
/**
 * Hide the line that fired the trigger from the output window.
 */
declare function gag_current_line(): void;
/**
 * Colorize / highlight a specified part of the line that fired the trigger.
 *
 * @param start
 * @param length
 * @param fgcolor
 * @param bgcolor
 */
declare function colorize_current_line(start: number, length: number, fgcolor: string, bgcolor: string): void;
/**
 * Replace a party of the current line with the specified text and color.
 *
 * @param start
 * @param length
 * @param newtext
 * @param fgcolor
 * @param bgcolor
 */
declare function replace_current_line(start: number, length: number, newtext: string, fgcolor: string, bgcolor: string): void;

// UI Manipulation

/**
 * Make a custom UI tab.Please note, this is unsupported.
 *
 * @param tab tell a
 * @param container_id
 */
declare function register_custom_tab(tab: string, container_id: string): void;

// Buttons

/**
 * Set the text label on a button.
 *
 * @param id
 * @param text
 */
declare function buttons_set_label(id: string, text: string): void;
/**
 * Sets the command sent to the game when the button is pressed.
 *
 * @param id
 * @param cmds
 */
declare function buttons_set_commands(id: string, cmds: string): void;
/**
 * Set whether the button is highlighted or not.
 *
 * @param id
 * @param on_off
 */
declare function buttons_set_highlight(id: string, on_off: boolean): void;
/**
 * Reset a button to the default value.
 *
 * @param id
 */
declare function buttons_set_default(id: string): void;

// Misc.

/**
 * Convert a string number to a value.
 *
 * @param val
 */
declare function to_number(val: string): number;
/**
 * Sends a GMCP message to the game.Arguments are an object or string, depending on the GMCP call used: void; see the GMCP documentation for more information.
 *
 * @param message
 * @param arguments
 */
declare function send_GMCP(message: GMCPMethod, arguments: {}): void;
