// Type definitions for Bitwig Studio Control Surface Scripting API v2.0.0
// Project: https://bitwig.com
// Definitions by: Joseph Larson <https://github.com/joslarson/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace API {
    /**
     * Instances of this interface represent actions in Bitwig Studio, such as commands that can be launched from
     * the main menu or via keyboard shortcuts.
     *
     * To receive the list of all actions provided by Bitwig Studio call {@link Application#getActions()}. The
     * list of actions that belong to a certain category can be queried by calling
     * {@link ActionCategory#getActions()}. Access to specific actions is provided in
     * {@link Application#getAction(String)}.
     *
     * @since API version 1
     */
    interface Action {
        /**
         * Returns a string the identifies this action uniquely.
         *
         * @return {string} the identifier string
         * @since API version 1
         */
        getId(): string;

        /**
         * Returns the name of this action.
         *
         * @return {string} the name string
         * @since API version 1
         */
        getName(): string;

        /**
         * Returns the category of this action.
         *
         * @return {ActionCategory} the category string
         * @since API version 1
         */
        getCategory(): ActionCategory;

        /**
         * Returns the text that is displayed in menu items associated with this action.
         *
         * @return {string} the menu item text
         * @since API version 1
         */
        getMenuItemText(): string;

        /**
         * Invokes the action.
         *
         * @since API version 1
         */
        invoke(): void;

    }

    /**
     * Instances of this interface are used to categorize actions in Bitwig Studio. The list of action categories
     * provided by Bitwig Studio can be queried by calling {@link Application#getActionCategories()}. To receive a
     * specific action category call {@link Application#getActionCategory(String)}.
     *
     * @see Application#getActionCategories()
     * @see Application#getActionCategory(String)
     * @since API version 1
     */
    interface ActionCategory {
        /**
         * Returns a string the identifies this action category uniquely.
         *
         * @return {string} the identifier string
         * @since API version 1
         */
        getId(): string;

        /**
         * Returns the name of this action category.
         *
         * @return {string} the name string
         * @since API version 1
         */
        getName(): string;

        /**
         * Lists all actions in this category.
         *
         * @return {Action[]} the array of actions in this category
         * @since API version 1
         */
        getActions(): Action[];

    }

    /**
     * An interface that provides methods for accessing the most common global application commands.<br/>
     *
     * In addition, functions are provided for accessing any application action in a generic and categorized way,
     * pretty much as displayed in the Bitwig Studio commander dialog (see {@link #getActions()},
     * {@link #getAction(String)}, {@link #getActionCategories()}), {@link #getActionCategory(String)}).<br/>
     *
     * To receive an instance of the application interface call {@link Host#createApplication()}.
     *
     * @since API version 1
     */
    interface Application {
        /**
         * Creates a new audio track at the given position.
         *
         * @param position
        the index within the list of main tracks where the new track should be inserted, or `-1` in
        case the track should be inserted at the end of the list. Values outside the valid range will
        get pinned to the valid range, so the actual position might be different from the provided
        parameter value.
         * @since API version 1
         */
        createAudioTrack(position?: any): void;

        /**
         * Creates a new instrument track at the given position.
         *
         * @param position
        the index within the list of main tracks where the new track should be inserted, or `-1` in
        case the track should be inserted at the end of the list. Values outside the valid range will
        get pinned to the valid range, so the actual position might be different from the provided
        parameter value.
         * @since API version 1
         */
        createInstrumentTrack(position?: any): void;

        /**
         * Creates a new effect track at the given position.
         *
         * @param position
        the index within the list of effect tracks where the new track should be inserted, or `-1` in
        case the track should be inserted at the end of the list. Values outside the valid range will
        get pinned to the valid range, so the actual position might be different from the provided
        parameter value.
         * @since API version 1
         */
        createEffectTrack(position?: any): void;

        /**
         * Returns a list of actions that the application supports. Actions are commands in Bitwig Studio that are
         * typically accessible through menus or keyboard shortcuts.
         *
         * Please note that many of the commands encapsulated by the reported actions are also accessible through
         * other (probably more convenient) interfaces methods of the API. In contrast to that, this method
         * provides a more generic way to find available application functionality.
         *
         * @return {Action[]} the list of actions
        @since API version 1
         */
        getActions(): Action[];

        /**
         * Returns the action for the given action identifier. For a list of available actions, see
         * {@link #getActions()}.
         *
         * @param id
        the action identifier string, must not be `null`
         * @return {Action} the action associated with the given id, or null in case there is no action with the given
        identifier.
        @since API version 1
         */
        getAction(id?: any): Action;

        /**
         * Returns a list of action categories that is used by Bitwig Studio to group actions into categories.
         *
         * @return {ActionCategory[]} the list of action categories
        @since API version 1
         */
        getActionCategories(): ActionCategory[];

        /**
         * Returns the action category associated with the given identifier. For a list of available action
         * categories, see {@link #getActionCategories()}.
         *
         * @param id
        the category identifier string, must not be `null`
         * @return {ActionCategory} the action associated with the given id, or null in case there is no category with the given
        identifier
        @since API version 1
         */
        getActionCategory(id?: any): ActionCategory;

        /**
         * Activates the audio engine in Bitwig Studio.
         *
         * @since API version 1
         */
        activateEngine(): void;

        /**
         * Deactivates the audio engine in Bitwig Studio.
         *
         * @since API version 1
         */
        deactivateEngine(): void;

        /**
         * Value that reports whether an audio engine is active or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        hasActiveEngine(): BooleanValue;

        /**
         * Value that reports the name of the current project.
         *
         * @return {StringValue}
         * @since API version 2
         */
        projectName(): StringValue;

        /**
         * Switches to the next project tab in Bitwig Studio.
         *
         * @since API version 1
         */
        nextProject(): void;

        /**
         * Switches to the previous project tab in Bitwig Studio.
         *
         * @since API version 1
         */
        previousProject(): void;

        /**
         * Set BitwigStudio to navigate into the group.
         *
         * @param {Track} track
         * @since API version 2
         */
        navigateIntoTrackGroup(track?: Track): void;

        /**
         * Set BitwigStudio to navigate into the parent group.
         *
         * @since API version 2
         */
        navigateToParentTrackGroup(): void;

        /**
         * Sends an undo command to Bitwig Studio.
         *
         * @since API version 1
         */
        undo(): void;

        /**
         * Sends a redo command to Bitwig Studio.
         *
         * @since API version 1
         */
        redo(): void;

        /**
         * Switches the Bitwig Studio user interface to the panel layout with the given name. The list of available
         * panel layouts depends on the active display profile.
         *
         * @param panelLayout
        the name of the new panel layout
         * @since API version 1
         */
        setPanelLayout(panelLayout?: any): void;

        /**
         * Switches to the next panel layout of the active display profile in Bitwig Studio.
         *
         * @since API version 1
         */
        nextPanelLayout(): void;

        /**
         * Switches to the previous panel layout of the active display profile in Bitwig Studio.
         *
         * @since API version 1
         */
        previousPanelLayout(): void;

        /**
         * Value that reports the name of the active panel layout.
         *
         * @return {StringValue}
         * @since API version 2
         */
        panelLayout(): StringValue;

        /**
         * Value that reports the name of the active display profile.
         *
         * @return {StringValue}
         * @since API version 2
         */
        displayProfile(): StringValue;

        /**
         * Toggles the visibility of the inspector panel.
         *
         * @since API version 1
         */
        toggleInspector(): void;

        /**
         * Toggles the visibility of the device chain panel.
         *
         * @since API version 1
         */
        toggleDevices(): void;

        /**
         * Toggles the visibility of the mixer panel.
         *
         * @since API version 1
         */
        toggleMixer(): void;

        /**
         * Toggles the visibility of the note editor panel.
         *
         * @since API version 1
         */
        toggleNoteEditor(): void;

        /**
         * Toggles the visibility of the automation editor panel.
         *
         * @since API version 1
         */
        toggleAutomationEditor(): void;

        /**
         * Toggles the visibility of the browser panel.
         *
         * @since API version 1
         */
        toggleBrowserVisibility(): void;

        /**
         * Shows the previous detail panel (note editor, device, automation).
         *
         * @since API version 1
         */
        previousSubPanel(): void;

        /**
         * Shows the next detail panel (note editor, device, automation).
         *
         * @since API version 1
         */
        nextSubPanel(): void;

        /**
         * Equivalent to an Arrow-Left key stroke on the computer keyboard. The concrete functionality depends on
         * the current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        arrowKeyLeft(): void;

        /**
         * Equivalent to an Arrow-Right key stroke on the computer keyboard. The concrete functionality depends on
         * the current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        arrowKeyRight(): void;

        /**
         * Equivalent to an Arrow-Up key stroke on the computer keyboard. The concrete functionality depends on the
         * current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        arrowKeyUp(): void;

        /**
         * Equivalent to an Arrow-Down key stroke on the computer keyboard. The concrete functionality depends on
         * the current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        arrowKeyDown(): void;

        /**
         * Equivalent to an Enter key stroke on the computer keyboard. The concrete functionality depends on the
         * current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        enter(): void;

        /**
         * Equivalent to an Escape key stroke on the computer keyboard. The concrete functionality depends on the
         * current keyboard focus in Bitwig Studio.
         *
         * @since API version 1
         */
        escape(): void;

        /**
         * Selects all items according the current selection focus in Bitwig Studio.
         *
         * @since API version 1
         */
        selectAll(): void;

        /**
         * Deselects any items according the current selection focus in Bitwig Studio.
         *
         * @since API version 1
         */
        selectNone(): void;

        /**
         * Cuts the selected items in Bitwig Studio if applicable.
         *
         * @since API version 1
         */
        cut(): void;

        /**
         * Copies the selected items in Bitwig Studio to the clipboard if applicable.
         *
         * @since API version 1
         */
        copy(): void;

        /**
         * Pastes the clipboard contents into the current selection focus in Bitwig Studio if applicable.
         *
         * @since API version 1
         */
        paste(): void;

        /**
         * Duplicates the active selection in Bitwig Studio if applicable.
         *
         * @since API version 1
         */
        duplicate(): void;

        /**
         * Deletes the selected items in Bitwig Studio if applicable. Originally this function was called `delete`
         * (Bitwig Studio 1.0). But as `delete` is reserved in JavaScript this function got renamed to `remove` in
         * Bitwig Studio 1.0.9.
         *
         * @since API version 1
         */
        remove(): void;

        /**
         * Opens a text input field in Bitwig Studio for renaming the selected item.
         *
         * @since API version 1
         */
        rename(): void;

        /**
         * Zooms in one step into the currently focused editor of the Bitwig Studio user interface.
         *
         * @since API version 1
         */
        zoomIn(): void;

        /**
         * Zooms out one step in the currently focused editor of the Bitwig Studio user interface.
         *
         * @since API version 1
         */
        zoomOut(): void;

        /**
         * Adjusts the zoom level of the currently focused editor so that it matches the active selection.
         *
         * @since API version 1
         */
        zoomToSelection(): void;

        /**
         * Adjusts the zoom level of the currently focused editor so that all content becomes visible.
         *
         * @since API version 1
         */
        zoomToFit(): void;

        /**
         * Moves the panel focus to the panel on the left of the currently focused panel.
         *
         * @since API version 1
         */
        focusPanelToLeft(): void;

        /**
         * Moves the panel focus to the panel right to the currently focused panel.
         *
         * @since API version 1
         */
        focusPanelToRight(): void;

        /**
         * Moves the panel focus to the panel above the currently focused panel.
         *
         * @since API version 1
         */
        focusPanelAbove(): void;

        /**
         * Moves the panel focus to the panel below the currently focused panel.
         *
         * @since API version 1
         */
        focusPanelBelow(): void;

        /**
         * Toggles between full screen and windowed user interface.
         *
         * @since API version 1
         */
        toggleFullScreen(): void;

    }

    /**
     * An interface representing various commands which can be performed on the Bitwig Studio arranger.<br/>
     *
     * To receive an instance of the application interface call {@link Host#createArranger}.
     *
     * @since API version 1
     */
    interface Arranger {
        /**
         * Gets an object that allows to enable/disable arranger playback follow. Observers can be registered on
         * the returned object for receiving notifications when the setting switches between on and off.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the enabled state of arranger playback follow
         * @since API version 1
         */
        isPlaybackFollowEnabled(): SettableBooleanValue;

        /**
         * Gets an object that allows to control the arranger track height. Observers can be registered on the
         * returned object for receiving notifications when the track height changes.
         *
         * @return {SettableBooleanValue} a boolean value object that has the state `true` when the tracks have double row height and
        `false` when the tracks have single row height.
         * @since API version 1
         */
        hasDoubleRowTrackHeight(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the cue markers in the arranger panel. Observers can be
         * registered on the returned object for receiving notifications when the cue marker lane switches between
         * shown and hidden.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the cue marker section visibility
         * @since API version 1
         */
        areCueMarkersVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the clip launcher in the arranger panel. Observers can be
         * registered on the returned object for receiving notifications when the clip launcher switches between
         * shown and hidden.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the clip launcher visibility
         * @since API version 1
         */
        isClipLauncherVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the timeline in the arranger panel. Observers can be registered
         * on the returned object for receiving notifications when the timeline switches between shown and hidden.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the timeline visibility
         * @since API version 1
         */
        isTimelineVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the track input/output choosers in the arranger panel. Observers
         * can be registered on the returned object for receiving notifications when the I/O section switches
         * between shown and hidden.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the visibility of the track I/O section
         * @since API version 1
         */
        isIoSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the effect tracks in the arranger panel. Observers can be
         * registered on the returned object for receiving notifications when the effect track section switches
         * between shown and hidden.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the visibility of the effect track section
         * @since API version 1
         */
        areEffectTracksVisible(): SettableBooleanValue;

    }

    /**
     * A bank provides access to a range of items in Bitwig Studio. Instances of a bank are configured with a
     * fixed number of items and represent an excerpt of a larger list of items. Various methods are provided for
     * scrolling to different sections of the item list. It basically acts like a window moving over the list of
     * underlying items.
     *
     * @since API version 2
     */
    interface Bank extends ObjectProxy {
        /**
         * The fixed size of this bank.
         *
         * @return {int}
         * @since API version 2
         */
        getSizeOfBank(): number;

        scrollPageForwards(): void;

        scrollPageBackwards(): void;

        /**
         * Gets the item in the bank at the supplied index. The index must be >= 0 and < {@link #getSizeOfBank()}.
         *
         * @param {int} index
         * @return {ItemType}
         * @since API version 2
         */
        getItemAt(index?: number): any;

        /**
         * Value that reports the underlying total item count (not the number of items available in the bank
         * window).
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        itemCount(): IntegerValue;

        /**
         * An integer value that defines the location of the cursor that this bank is following. If there is no
         * cursor or the cursor is not within the bank then the value is -1.
         *
         * @return {SettableIntegerValue}
         * @since API version 2
         */
        cursorIndex(): SettableIntegerValue;

    }

    /**
     * Defines a formatter for a beat time that can convert a beat time to a string for display to the user.
     *
     * @since API version 2
     */
    interface BeatTimeFormatter {
        /**
         * Formats the supplied beat time as a string in the supplied time signature.
         *
         * @param {double} beatTime
         * @param {boolean} isAbsolute
         * @param {int} timeSignatureNumerator
         * @param {int} timeSignatureDenominator
         * @param {int} timeSignatureTicks
         * @return {string}
         * @since API version 2
         */
        formatBeatTime(beatTime?: number, isAbsolute?: boolean, timeSignatureNumerator?: number, timeSignatureDenominator?: number, timeSignatureTicks?: number): string;

    }

    /**
     * Instances of this interface represent beat time values.
     *
     * @since API version 1
     */
    interface BeatTimeValue extends DoubleValue {
        /**
         * Gets the current beat time formatted according to the supplied formatter.
         *
         * @param {BeatTimeFormatter} formatter
         * @return {string}
         * @since API version 2
         */
        getFormatted(formatter?: BeatTimeFormatter): string;

    }

    interface BooleanValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {boolean}
         * @since API version 2
         */
        get(): boolean;

    }

    interface BooleanValueChangedCallback extends ValueChangedCallback {
        /**
         * @param {boolean} newValue
         */
        valueChanged(newValue?: boolean): void;

    }

    /**
     * Instances of this interface are used to navigate a column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserColumn extends ObjectProxy {
        /**
         * Registers an observer that reports if the column exists.
         *
         * @param callback
        a callback function that receives a single boolean parameter
         * @since API version 1
         */
        addExistsObserver(callback?: (...args: any[]) => any): void;

        /**
         * Value that reports the underlying total count of column entries (not the size of the column window).
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        entryCount(): IntegerValue;

        /**
         * Returns the cursor item, which can be used to navigate over the list of entries.
         *
         * @return {BrowserItem} the requested filter item object
         * @since API version 1
         */
        createCursorItem(): BrowserItem;

        /**
         * Returns an object that provides access to a bank of successive entries using a window configured with
         * the given size, that can be scrolled over the list of entries.
         *
         * @param size
        the number of simultaneously accessible items
         * @return {BrowserItemBank} the requested item bank object
         */
        createItemBank(size?: any): BrowserItemBank;

    }

    /**
     * Instances of this interface are used to navigate a filter column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserFilterColumn extends BrowserColumn {
        /**
         * Returns the filter item that represents the top-level all/any/everything wildcard item.
         *
         * @return {BrowserFilterItem} the requested filter item object
         * @since API version 1
         */
        getWildcardItem(): BrowserFilterItem;

        /**
         * Value that reports the name of the filter column.
         *
         * @return {StringValue}
         * @since API version2
         */
        name(): StringValue;

    }

    /**
     * Instances of this interface represent entries in a browser filter column.
     *
     * @since API version 1
     */
    interface BrowserFilterItem extends BrowserItem {
        /**
         * Value that reports the hit count of the filter item.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        hitCount(): IntegerValue;

    }

    /**
     * Instances of this interface are used to navigate a filter column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserFilterItemBank extends BrowserItemBank {
    }

    /**
     * Instances of this interface represent entries in a browser filter column.
     *
     * @since API version 1
     */
    interface BrowserItem extends ObjectProxy {
        /**
         * Value that reports the name of the browser item.
         *
         * @return {StringValue}
         * @since API version 2
         */
        name(): StringValue;

        /**
         * Returns an object that provides access to the selected state of the browser item.
         *
         * @return {SettableBooleanValue} an boolean value object
         * @since API version 1
         */
        isSelected(): SettableBooleanValue;

    }

    /**
     * Instances of this interface are used to navigate a column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserItemBank extends Bank {
        /**
         * Returns the window size that was used to configure the filter column during creation.
         *
         * @return {int} the size of the filter column.
         * @since API version 1
         */
        getSize(): number;

        /**
         * Returns the item for the given index.
         *
         * @param index
        the item index, must be in the range `[0..getSize-1]`
         * @return {BrowserItem} the requested item object
         * @since API version 1
         */
        getItem(index?: any): BrowserItem;

        /**
         * Scrolls the filter column entries one item up.
         *
         * @since API version 1
         */
        scrollUp(): void;

        /**
         * Scrolls the filter column entries one item down.
         *
         * @since API version 1
         */
        scrollDown(): void;

        /**
         * Scrolls the filter column entries one page up. For example if the column is configured with a window
         * size of 8 entries and is currently showing items [1..8], calling this method would scroll the column to
         * show items [9..16].
         *
         * @since API version 1
         */
        scrollPageUp(): void;

        /**
         * Scrolls the filter column entries one page up. For example if the column is configured with a window
         * size of 8 entries and is currently showing items [9..16], calling this method would scroll the column to
         * show items [1..8].
         *
         * @since API version 1
         */
        scrollPageDown(): void;

        /**
         * Registers an observer that reports the current scroll position, more specifically the position of the
         * first item within the underlying list of entries, that is shown as the first entry within the window.
         *
         * @param callback
        a callback function that receives a single integer number parameter. The parameter reflects
        the scroll position, or `-1` in case the column has no content.
         * @since API version 1
         */
        addScrollPositionObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports if the column entries can be scrolled further up.
         *
         * @param callback
        a callback function that receives a single boolean parameter
         * @since API version 1
         */
        addCanScrollUpObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports if the column entries can be scrolled further down.
         *
         * @param callback
        a callback function that receives a single boolean parameter
         * @since API version 1
         */
        addCanScrollDownObserver(callback?: (...args: any[]) => any): void;

    }

    /**
     * Instances of this interface are used to navigate a results column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserResultsColumn extends BrowserColumn {
    }

    /**
     * Instances of this interface represent entries in a browser results column.
     *
     * @since API version 1
     */
    interface BrowserResultsItem extends BrowserItem {
    }

    /**
     * Instances of this interface are used to navigate the results column in the Bitwig Studio browser.
     *
     * @since API version 1
     */
    interface BrowserResultsItemBank extends BrowserItemBank {
    }

    /**
     * Instances of this interface are used to navigate the available sessions in Bitwig Studio's contextual
     * browser. The sessions are shown as tabs in the graphical user interface of the browser.
     *
     * @since API version 1
     */
    interface BrowsingSessionBank extends Bank {
        /**
         * Returns the window size that was used to configure the session bank during creation.
         *
         * @return {int} the size of the session bank.
         * @since API version 1
         */
        getSize(): number;

        /**
         * Returns the browser session for the given index.
         *
         * @param index
        the session index, must be in the range `[0..getSize-1]`
         * @return {GenericBrowsingSession} the requested browser session object
         * @since API version 1
         */
        getSession(index?: any): any;

    }

    interface Callback {
    }

    /**
     * This interface defines access to the common attributes and operations of channels, such as tracks or nested
     * device channels.
     *
     * @since API version 1
     */
    interface Channel extends DeviceChain {
        /**
         * Returns an object that represents the activated state of the channel.
         *
         * @return {SettableBooleanValue} an object that provides access to the channels activated state.
         * @since API version 1
         */
        isActivated(): SettableBooleanValue;

        /**
         * Gets a representation of the channels volume control.
         *
         * @return {Parameter} an object that provides access to the channels volume control.
         * @since API version 1
         */
        getVolume(): Parameter;

        /**
         * Gets a representation of the channels pan control.
         *
         * @return {Parameter} an object that provides access to the channels pan control.
         * @since API version 1
         */
        getPan(): Parameter;

        /**
         * Gets a representation of the channels mute control.
         *
         * @return {SettableBooleanValue} an object that provides access to the channels mute control.
         * @since API version 1
         */
        getMute(): SettableBooleanValue;

        /**
         * Gets a representation of the channels solo control.
         *
         * @return {SoloValue} an object that provides access to the channels solo control.
         * @since API version 1
         */
        getSolo(): SoloValue;

        /**
         * Registers an observer for the VU-meter of this track.
         *
         * @param range
        the number of steps to which the reported values should be scaled. For example a range of 128
        would cause the callback to be called with values between 0 and 127.
         * @param channel
        0 for left channel, 1 for right channel, -1 for the sum of both
         * @param peak
        when `true` the peak value is reported, otherwise the RMS value
         * @param callback
        a callback function that takes a single numeric argument. The value is in the range
        [0..range-1].
         * @since API version 1
         */
        addVuMeterObserver(range?: any, channel?: any, peak?: any, callback?: (...args: any[]) => any): void;

        /**
         * Returns an array of the playing notes.
         *
         * @return {PlayingNoteArrayValue}
         * @since API version 2
         */
        playingNotes(): PlayingNoteArrayValue;

        /**
         * Get the color of the channel.
         *
         * @return {SettableColorValue}
         * @since API version 2
         */
        color(): SettableColorValue;

        /**
         * Gets a {@link SendBank} that can be used to navigate the sends of this channel.
         *
         * @return {SendBank}
         * @since API version 2
         */
        sendBank(): SendBank;

        /**
         * Duplicates the track.
         *
         * @since API version 1
         */
        duplicate(): void;

        /**
         * Selects the device chain in the Bitwig Studio mixer, in case it is a selectable object.
         *
         * @since API version 1
         */
        selectInMixer(): void;

        /**
         * Registers an observer that reports if the device chain is selected in Bitwig Studio mixer.
         *
         * @param callback
        a callback function that takes a single boolean parameter.
         * @since API version 1
         */
        addIsSelectedInMixerObserver(callback?: (...args: any[]) => any): void;

        /**
         * Tries to scroll the contents of the arrangement editor so that the channel becomes visible.
         *
         * @since API version 1
         */
        makeVisibleInArranger(): void;

        /**
         * Tries to scroll the contents of the mixer panel so that the channel becomes visible.
         *
         * @since API version 1
         */
        makeVisibleInMixer(): void;

    }

    /**
     * A channel bank provides access to a range of channels in Bitwig Studio, such as tracks or device layers.
     * Instances of channel bank are typically configured with support for a fixed number of channels and
     * represent an excerpt of a larger list of channels. Various methods are provided for scrolling to different
     * sections of the channel list. It basically acts like a window moving over the list of channels.
     *
     * @since API version 1
     */
    interface ChannelBank extends ObjectProxy {
        /**
         * Returns the channel for the given index.
         *
         * @param indexInBank
        the channel index within this bank, not the index within the list of all Bitwig Studio
        channels. Must be in the range [0..sizeOfBank-1].
         * @return {Channel} the channel object
         * @since API version 1
         */
        getChannel(indexInBank?: any): Channel;

        /**
         * Sets the step size used for scrolling the channel bank.
         *
         * @param stepSize
        the step size used for scrolling. Default is `1`.
         * @since API version 1
         */
        setChannelScrollStepSize(stepSize?: any): void;

        /**
         * Scrolls the channels one page up. For example if the channel bank is configured with a window size of 8
         * channels and is currently showing channel [1..8], calling this method would scroll the channel bank to
         * show channel [9..16].
         *
         * @since API version 1
         */
        scrollChannelsPageUp(): void;

        /**
         * Scrolls the channels one page up. For example if the channel bank is configured with a window size of 8
         * channels and is currently showing channel [9..16], calling this method would scroll the channel bank to
         * show channel [1..8].
         *
         * @since API version 1
         */
        scrollChannelsPageDown(): void;

        /**
         * Scrolls the channel window up by the amount specified via {@link #setChannelScrollStepSize(int)} (by
         * default one channel).
         *
         * @since API version 1
         */
        scrollChannelsUp(): void;

        /**
         * Scrolls the channel window down by the amount specified via {@link #setChannelScrollStepSize(int)} (by
         * default one channel).
         *
         * @since API version 1
         */
        scrollChannelsDown(): void;

        /**
         * Scrolls the channel bank window so that the channel at the given position becomes visible.
         *
         * @param position
        the index of the channel within the underlying full list of channels (not the index within the
        bank). The position is typically directly related to the layout of the channel list in Bitwig
        Studio, starting with zero in case of the first channel.
         * @since API version 1
         */
        scrollToChannel(position?: any): void;

        /**
         * Value that reports the current scroll position, more specifically the position of the
         * first channel within the underlying list of channels, that is shown as channel zero within the bank.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        channelScrollPosition(): IntegerValue;

        /**
         * Value that reports if the channel bank can be scrolled further down.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollChannelsUp(): BooleanValue;

        /**
         * Value that reports if the channel bank can be scrolled further down.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollChannelsDown(): BooleanValue;

        /**
         * Value that reports the underlying total channel count (not the number of channels available in the bank
         * window).
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        channelCount(): IntegerValue;

    }

    /**
     * An interface that provides access to the contents of a clip in Bitwig Studio.
     *
     * The note content of the clip is exposed in terms of steps and keys, mainly targeted to x-y-grid
     * applications such as step sequencers.
     *
     * @since API version 1
     */
    interface Clip extends ObjectProxy {
        /**
         * Scroll the note grid so that the given key becomes visible.
         *
         * @param key
        the key that should become visible
         * @since API version 1
         */
        scrollToKey(key?: any): void;

        /**
         * Scrolls the note grid keys one page up. For example if the note grid is configured to show 12 keys and
         * is currently showing keys [36..47], calling this method would scroll the note grid to key range
         * [48..59].
         *
         * @since API version 1
         */
        scrollKeysPageUp(): void;

        /**
         * Scrolls the note grid keys one page down. For example if the note grid is configured to show 12 keys and
         * is currently showing keys [36..47], calling this method would scroll the note grid to key range
         * [48..59].
         *
         * @since API version 1
         */
        scrollKeysPageDown(): void;

        /**
         * Scrolls the note grid keys one key up. For example if the note grid is configured to show 12 keys and is
         * currently showing keys [36..47], calling this method would scroll the note grid to key range [37..48].
         *
         * @since API version 1
         */
        scrollKeysStepUp(): void;

        /**
         * Scrolls the note grid keys one key down. For example if the note grid is configured to show 12 keys and
         * is currently showing keys [36..47], calling this method would scroll the note grid to key range
         * [35..46].
         *
         * @since API version 1
         */
        scrollKeysStepDown(): void;

        /**
         * Scroll the note grid so that the given step becomes visible.
         *
         * @param step
        the step that should become visible
         * @since API version 1
         */
        scrollToStep(step?: any): void;

        /**
         * Scrolls the note grid steps one page forward. For example if the note grid is configured to show 16
         * steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
         * [16..31].
         *
         * @since API version 1
         */
        scrollStepsPageForward(): void;

        /**
         * Scrolls the note grid steps one page backwards. For example if the note grid is configured to show 16
         * steps and is currently showing keys [16..31], calling this method would scroll the note grid to key
         * range [0..16].
         *
         * @since API version 1
         */
        scrollStepsPageBackwards(): void;

        /**
         * Scrolls the note grid steps one step forward. For example if the note grid is configured to show 16
         * steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
         * [1..16].
         *
         * @since API version 1
         */
        scrollStepsStepForward(): void;

        /**
         * Scrolls the note grid steps one step backwards. For example if the note grid is configured to show 16
         * steps and is currently showing keys [1..16], calling this method would scroll the note grid to key range
         * [0..15].
         *
         * @since API version 1
         */
        scrollStepsStepBackwards(): void;

        /**
         * Value that reports if the note grid keys can be scrolled further up.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollKeysUp(): BooleanValue;

        /**
         * Value that reports if the note grid keys can be scrolled further down.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollKeysDown(): BooleanValue;

        /**
         * Value that reports if the note grid if the note grid steps can be scrolled backwards.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollStepsBackwards(): BooleanValue;

        /**
         * Value that reports if the note grid if the note grid steps can be scrolled forwards.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollStepsForwards(): BooleanValue;

        /**
         * Toggles the existence of a note in the note grid cell specified by the given x and y arguments.
         *
         * @param x
        the x position within the note grid, defining the step/time of the target note
         * @param y
        the y position within the note grid, defining the key of the target note
         * @param insertVelocity
        the velocity of the target note in case a new note gets inserted
         * @since API version 1
         */
        toggleStep(x?: any, y?: any, insertVelocity?: any): void;

        /**
         * Creates a note in the grid cell specified by the given x and y arguments. Existing notes are
         * overwritten.
         *
         * @param x
        the x position within the note grid, defining the step/time of the new note
         * @param y
        the y position within the note grid, defining the key of the new note
         * @param insertVelocity
        the velocity of the new note
         * @param insertDuration
        the duration of the new note
         * @since API version 1
         */
        setStep(x?: any, y?: any, insertVelocity?: any, insertDuration?: any): void;

        /**
         * Removes the note in the grid cell specified by the given x and y arguments. Calling this method does
         * nothing in case no note exists at the given x-y-coordinates.
         *
         * @param x
        the x position within the note grid, defining the step/time of the target note
         * @param y
        the y position within the note grid, defining the key of the target note
         * @since API version 1
         */
        clearStep(x?: any, y?: any): void;

        /**
         * Removes all notes in the grid row specified by the given y argument.
         *
         * @param y
        the y position within the note grid, defining the key of the target note
         * @since API version 1
         */
        clearSteps(y?: any): void;

        /**
         * Selects the note in the grid cell specified by the given x and y arguments, in case there actually is a
         * note at the given x-y-coordinates.
         *
         * @param x
        the x position within the note grid, defining the step/time of the target note
         * @param y
        the y position within the note grid, defining the key of the target note
         * @param clearCurrentSelection
        `true` if the existing selection should be cleared, {@false} if the note should be added to
        the current selection.
         * @since API version 1
         */
        selectStepContents(x?: any, y?: any, clearCurrentSelection?: any): void;

        /**
         * Sets the beat time duration that is represented by one note grid step.
         *
         * @param lengthInBeatTime
        the length of one note grid step in beat time.
         * @since API version 1
         */
        setStepSize(lengthInBeatTime?: any): void;

        /**
         * Registers an observer that reports which note grid steps/keys contain notes.
         *
         * @param callback
        A callback function that receives three parameters: 1. the x (step) coordinate within the note
        grid (integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer
        value that indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts
        playing (`2`).
         * @since API version 1
         */
        addStepDataObserver(callback?: (...args: any[]) => any): void;

        /**
         * Value that reports note grid cells as they get played by the sequencer.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        playingStep(): IntegerValue;

        /**
         * Updates the name of the clip.
         *
         * @param name
        the new clip name
         * @since API version 1
         */
        setName(name?: any): void;

        /**
         * Returns shuffle settings of the clip.
         *
         * @return {SettableBooleanValue} the value object that represents the clips shuffle setting.
         * @since API version 1
         */
        getShuffle(): SettableBooleanValue;

        /**
         * Returns accent setting of the clip.
         *
         * @return {SettableRangedValue} the ranged value object that represents the clips accent setting.
         * @since API version 1
         */
        getAccent(): SettableRangedValue;

        /**
         * Returns the start of the clip in beat time.
         *
         * @return {SettableBeatTimeValue} the beat time object that represents the clips start time.
         * @since API version 1
         */
        getPlayStart(): SettableBeatTimeValue;

        /**
         * Returns the length of the clip in beat time.
         *
         * @return {SettableBeatTimeValue} the beat time object that represents the duration of the clip.
         * @since API version 1
         */
        getPlayStop(): SettableBeatTimeValue;

        /**
         * Returns an object that provides access to the loop enabled state of the clip.
         *
         * @return {SettableBooleanValue} a boolean value object.
         * @since API version 1
         */
        isLoopEnabled(): SettableBooleanValue;

        /**
         * Returns the loop start time of the clip in beat time.
         *
         * @return {SettableBeatTimeValue} the beat time object that represents the clips loop start time.
         * @since API version 1
         */
        getLoopStart(): SettableBeatTimeValue;

        /**
         * Returns the loop length of the clip in beat time.
         *
         * @return {SettableBeatTimeValue} the beat time object that represents the clips loop length.
         * @since API version 1
         */
        getLoopLength(): SettableBeatTimeValue;

        /**
         * Get the color of the clip.
         *
         * @return {SettableColorValue}
         * @since API version 2
         */
        color(): SettableColorValue;

        /**
         * Duplicates the clip.
         *
         * @since API version 1
         */
        duplicate(): void;

        /**
         * Duplicates the content of the clip.
         *
         * @since API version 1
         */
        duplicateContent(): void;

        /**
         * Transposes all notes in the clip by the given number of semitones.
         *
         * @param semitones
        the amount of semitones to transpose, can be a positive or negative integer value.
         * @since API version 1
         */
        transpose(semitones?: any): void;

        /**
         * Quantizes the start time of all notes in the clip according to the given amount. The note lengths remain
         * the same as before.
         *
         * @param amount
        a factor between `0` and `1` that allows to morph between the original note start and the
        quantized note start.
         * @since API version 1
         */
        quantize(amount?: any): void;

        /**
         * Gets the track that contains the clip.
         *
         * @return {Track} a track object that represents the track which contains the clip.
         * @since API version 1
         */
        getTrack(): Track;

    }

    interface ClipLauncherSlot extends ClipLauncherSlotOrScene {
        /**
         * Value that reports whether this slot is selected or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isSelected(): BooleanValue;

        /**
         * Value that reports whether this slot has content or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        hasContent(): BooleanValue;

        /**
         * Value that reports whether this slot is playing or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isPlaying(): BooleanValue;

        /**
         * Value that reports whether this slot is queued for playback or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isPlaybackQueued(): BooleanValue;

        /**
         * Value that reports whether this slot is recording or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isRecording(): BooleanValue;

        /**
         * Value that reports whether this slot is queued for recording or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isRecordingQueued(): BooleanValue;

        /**
         * Value that reports whether this slot is queued for recording or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isStopQueued(): BooleanValue;

        /**
         * Value that reports the color of this slot.
         *
         * @return {ColorValue}
         * @since API version 2
         */
        color(): ColorValue;

        /**
         * Starts browsing for content that can be inserted in this slot in Bitwig Studio's popup browser.
         *
         * @since API version 2
         */
        browseToInsertClip(): void;

    }

    /**
     * Instances of this interface represent a scrollable fixed-size window that is connected to a section of the
     * clip launcher slots for a specific track.
     *
     * @since API version 1
     */
    interface ClipLauncherSlotBank extends ClipLauncherSlotOrSceneBank {
        /**
         * Selects the slot with the given index.
         *
         * @param slot
        the index of the slot within the slot window.
         * @since API version 1
         */
        select(slot?: any): void;

        /**
         * Starts recording into the slot with the given index.
         *
         * @param slot
        the index of the slot within the slot window.
         * @since API version 1
         */
        record(slot?: any): void;

        /**
         * Makes the clip content of the slot with the given index visible in the note or audio editor.
         *
         * @param slot
        the index of the slot within the slot window.
         * @since API version 1
         */
        showInEditor(slot?: any): void;

        /**
         * Creates an new clip in the slot with the given index.
         *
         * @param {int} slot
         * @param {int} lengthInBeats
         * @since API version 1
         */
        createEmptyClip(slot?: number, lengthInBeats?: number): void;

        /**
         * Deletes the clip in the slot with the given index.
         *
         * @param slot
        the index of the slot within the slot window.
         * @since API version 1
         */
        deleteClip(slot?: any): void;

        /**
         * Duplicates the clip in the slot with the given index.
         *
         * @param slot
        the index of the slot within the slot window.
         * @since API version 1
         */
        duplicateClip(slot?: any): void;

        /**
         * Registers an observer that reports selection changes for the slots inside the window.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index is selected (`true`) or not (`false`)
         * @since API version 1
         */
        addIsSelectedObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports which slots contain clips.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index contains a clip (`true`) or not
        (`false`)
         * @since API version 1
         */
        addHasContentObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports the playback state of clips / slots. The reported states include
         * `stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
         * recording`.
         *
         * @param callback
        a callback function that receives three parameters: 1. the slot index (integer), 2. the queued
        or playback state: `0` when stopped, `1` when playing, or `2` when recording, and 3. a boolean
        parameter indicating if the second argument is referring to the queued state (`true`) or the
        actual playback state (`false`)
         * @since API version 1
         */
        addPlaybackStateObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports which slots have clips that are currently playing.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index has a clip that is currently playing
        (`true`) or not (`false`)
         * @since API version 1
         */
        addIsPlayingObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports which slots have clips that are currently recording.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index has a clip that is currently recording
        (`true`) or not (`false`)
         * @since API version 1
         */
        addIsRecordingObserver(callback?: (...args: any[]) => any): void;

        /**
         * Add an observer if clip playback is queued on the slot.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index has a clip that is currently queued for
        playback (`true`) or not (`false`)
         * @since API version 1
         */
        addIsPlaybackQueuedObserver(callback?: (...args: any[]) => any): void;

        /**
         * Add an observer if clip recording is queued on the slot.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index has a clip that is currently queued for
        recording (`true`) or not (`false`)
         * @since API version 1
         */
        addIsRecordingQueuedObserver(callback?: (...args: any[]) => any): void;

        /**
         * Add an observer if clip playback is queued to stop on the slot.
         *
         * @param callback
        a callback function that receives two parameters: 1. the slot index (integer), and 2. a
        boolean parameter indicating if the slot at that index has a clip that is currently queued for
        stop (`true`) or not (`false`)
         * @since API version 1
         */
        addIsStopQueuedObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports the colors of clip in the current slot window.
         *
         * @param callback
        a callback function that receives four parameters: 1. the slot index (integer), 2. the red
        coordinate of the RBG color value, 3. the green coordinate of the RBG color value, and 4. the
        blue coordinate of the RBG color value
         * @since API version 1
         */
        addColorObserver(callback?: (...args: any[]) => any): void;

        /**
         * Specifies if the Bitwig Studio clip launcher should indicate which slots are part of the window. By
         * default indications are disabled.
         *
         * @param shouldIndicate
        `true` if visual indications should be enabled, `false` otherwise
         * @since API version 1
         */
        setIndication(shouldIndicate?: any): void;

        /**
         * Returns an object that can be used to observe and toggle if the slots on a connected track group show
         * either scenes launch buttons (for launching the content of the track group) or the clips of the group
         * master track.
         *
         * @return {SettableBooleanValue} a boolean value object.
         */
        isMasterTrackContentShownOnTrackGroups(): SettableBooleanValue;

    }

    interface ClipLauncherSlotBankPlaybackStateChangedCallback extends Callback {
        /**
         * Registers an observer that reports the playback state of clips / slots. The reported states include
         * `stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
         * recording`.
         *
         * @param {int} slotIndex
         * @param {int} playbackState
         * @param {boolean} isQueued
         * @since API version 1
         */
        playbackStateChanged(slotIndex?: number, playbackState?: number, isQueued?: boolean): void;

    }

    interface ClipLauncherSlotOrScene extends ObjectProxy {
        /**
         * Returns an object that provides access to the name of the scene.
         *
         * @return {StringValue} a string value object that represents the scene name.
         * @since API version 2
         */
        name(): StringValue;

        /**
         * Launches the scene.
         *
         * @since API version 1
         */
        launch(): void;

        /**
         * Value that reports the position of the scene within the list of Bitwig Studio scenes.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        sceneIndex(): IntegerValue;

    }

    /**
     * An abstract interface that represents the clip launcher scenes or slots of a single track.
     *
     * @since API version 1
     */
    interface ClipLauncherSlotOrSceneBank extends Bank {
        /**
         * Launches the scene/slot with the given index.
         *
         * @param slot
        the index of the slot that should be launched
         * @since API version 1
         */
        launch(slot?: any): void;

        /**
         * Stops clip launcher playback for the associated track.
         *
         * @since API version 1
         */
        stop(): void;

        /**
         * Performs a return-to-arrangement operation on the related track, which caused playback to be taken over
         * by the arrangement sequencer.
         *
         * @since API version 1
         */
        returnToArrangement(): void;

        /**
         * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
         * of containing clips.
         *
         * @param callback
        a callback function receiving two parameters: 1. the slot index (integer) within the
        configured window, and 2. the name of the scene/slot (string)
         * @since API version 1
         */
        addNameObserver(callback?: (...args: any[]) => any): void;

    }

    interface ColorValue extends Value {
        /**
         * Gets the red component of the current value.
         *
         * @return {float}
         * @since API version 2
         */
        red(): number;

        /**
         * Gets the red component of the current value.
         *
         * @return {float}
         * @since API version 2
         */
        green(): number;

        /**
         * Gets the red component of the current value.
         *
         * @return {float}
         * @since API version 2
         */
        blue(): number;

    }

    interface ColorValueChangedCallback extends ValueChangedCallback {
        /**
         * @param {float} red
         * @param {float} green
         * @param {float} blue
         */
        valueChanged(red?: number, green?: number, blue?: number): void;

    }

    interface ConnectionEstablishedCallback extends Callback {
        /**
         * @param {RemoteConnection} connection
         */
        connectionEstablished(connection?: RemoteConnection): void;

    }

    /**
     * A generic interface that provides the foundation for working with selections.
     *
     * Implementations of this interface can either represent custom selection cursors that are created by
     * controller scripts, or represent the cursor of user selections as shown in Bitwig Studio editors, such as
     * the Arranger track selection cursor, the note editor event selection cursor and so on.
     *
     * @since API version 1
     */
    interface Cursor {
        /**
         * Select the previous item.
         *
         * @since API version 1
         */
        selectPrevious(): void;

        /**
         * Select the next item.
         *
         * @since API version 1
         */
        selectNext(): void;

        /**
         * Select the first item.
         *
         * @since API version 1
         */
        selectFirst(): void;

        /**
         * Select the last item.
         *
         * @since API version 1
         */
        selectLast(): void;

        /**
         * Boolean value that reports whether there is an item after the current cursor position.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        hasNext(): BooleanValue;

        /**
         * Boolean value that reports whether there is an item before the current cursor position.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        hasPrevious(): BooleanValue;

    }

    /**
     * Instances of this interface are used to navigate the filter columns of a Bitwig Studio browsing session.
     *
     * @since API version 1
     */
    interface CursorBrowserFilterColumn extends BrowserFilterColumn {
    }

    /**
     * Instances of this interface represent entries in a browser filter column.
     *
     * @since API version 1
     */
    interface CursorBrowserFilterItem extends BrowserFilterItem {
        /**
         * Select the parent item.
         *
         * @since API version 1
         */
        selectParent(): void;

        /**
         * Select the first child item.
         *
         * @since API version 1
         */
        selectFirstChild(): void;

        /**
         * Select the last child item.
         *
         * @since API version 1
         */
        selectLastChild(): void;

        /**
         * Select the previous item.
         *
         * @since API version 1
         */
        moveToPrevious(): void;

        /**
         * Select the next item.
         *
         * @since API version 1
         */
        moveToNext(): void;

        /**
         * Select the first item.
         *
         * @since API version 1
         */
        moveToFirst(): void;

        /**
         * Select the last item.
         *
         * @since API version 1
         */
        moveToLast(): void;

        /**
         * Select the parent item.
         *
         * @since API version 1
         */
        moveToParent(): void;

        /**
         * Move the cursor to the first child item.
         *
         * @since API version 1
         */
        moveToFirstChild(): void;

        /**
         * Move the cursor to the last child item.
         *
         * @since API version 1
         */
        moveToLastChild(): void;

    }

    /**
     * Instances of this interface represent entries in a browser filter column.
     *
     * @since API version 1
     */
    interface CursorBrowserItem extends BrowserItem {
        /**
         * Returns a bank object that provides access to the siblings of the cursor item. The bank will
         * automatically scroll so that the cursor item is always visible.
         *
         * @param numSiblings
        the number of simultaneously accessible siblings
         * @return {BrowserItemBank} the requested item bank object
         */
        createSiblingsBank(numSiblings?: any): BrowserItemBank;

    }

    /**
     * Instances of this interface represent entries in a browser column.
     *
     * @since API version 1
     */
    interface CursorBrowserResultItem extends BrowserResultsItem {
    }

    /**
     * Instances of this interface are used for navigating the various browsing sessions of Bitwig Studio's
     * contextual browser.
     *
     * @since API version 1
     */
    interface CursorBrowsingSession {
    }

    /**
     * A special kind of channel that follows a channel selection cursor in Bitwig Studio. The selection can
     * either be a custom selection cursor that gets created by the controller script, or represent the user
     * selection cursor as shown in the Bitwig Studio editors, such as the Arranger track selection cursor.
     *
     * @since API version 1
     */
    interface CursorChannel extends Cursor {
        /**
         * Points the cursor to the given channel.
         *
         * @param channel
        the channel that this channel cursor should point to
         * @since API version 1
         */
        selectChannel(channel?: any): void;

    }

    /**
     * A special kind of selection cursor used for devices.
     *
     * @since API version 1
     */
    interface CursorDevice extends Cursor {
        /**
         * Returns the channel that this cursor device was created on. Currently this will always be a track or
         * cursor track instance.
         *
         * @return {Channel} the track or cursor track object that was used for creation of this cursor device.
         * @since API version 1
         */
        getChannel(): Channel;

        /**
         * Selects the parent device if there is any.
         *
         * @since API version 1
         */
        selectParent(): void;

        /**
         * Moves this cursor to the given device.
         *
         * @param device
        the device that this cursor should point to
         * @since API version 1
         */
        selectDevice(device?: any): void;

        /**
         * Selects the first device in the given channel.
         *
         * @param channel
        the channel in which the device should be selected
         * @since API version 1
         */
        selectFirstInChannel(channel?: any): void;

        /**
         * Selects the last device in the given channel.
         *
         * @param channel
        the channel in which the device should be selected
         * @since API version 1
         */
        selectLastInChannel(channel?: any): void;

        /**
         * Selects the first device in the nested FX slot with the given name.
         *
         * @param chain
        the name of the FX slot in which the device should be selected
         * @since API version 1
         */
        selectFirstInSlot(chain?: any): void;

        /**
         * Selects the last device in the nested FX slot with the given name.
         *
         * @param chain
        the name of the FX slot in which the device should be selected
         * @since API version 1
         */
        selectLastInSlot(chain?: any): void;

        /**
         * Selects the first device in the drum pad associated with the given key.
         *
         * @param key
        the key associated with the drum pad in which the device should be selected
         * @since API version 1
         */
        selectFirstInKeyPad(key?: any): void;

        /**
         * Selects the last device in the drum pad associated with the given key.
         *
         * @param key
        the key associated with the drum pad in which the device should be selected
         * @since API version 1
         */
        selectLastInKeyPad(key?: any): void;

        /**
         * Selects the first device in the nested layer with the given index.
         *
         * @param index
        the index of the nested layer in which the device should be selected
         * @since API version 1
         */
        selectFirstInLayer(index?: any): void;

        /**
         * Selects the last device in the nested layer with the given index.
         *
         * @param index
        the index of the nested layer in which the device should be selected
         * @since API version 1
         */
        selectLastInLayer(index?: any): void;

    }

    interface CursorDeviceFollowMode {
        FOLLOW_SELECTION: any;

        FIRST_DEVICE: any;

        FIRST_INSTRUMENT: any;

        FIRST_AUDIO_EFFECT: any;

    }

    /**
     * Instances of this interface represent the cursor item in device layer selections.
     *
     * @since API version 1
     */
    interface CursorDeviceLayer extends CursorChannel {
    }

    /**
     * Instances of this interface represent the selected device slot as shown in the Bitwig Studio user
     * interface.
     *
     * @since API version 1
     */
    interface CursorDeviceSlot extends DeviceChain {
        /**
         * @param {string} slot
         */
        selectSlot(slot?: string): void;

    }

    /**
     * Instances of this interface represent the cursor item of track selections.
     *
     * @since API version 1
     */
    interface CursorNavigationMode {
        NESTED: any;

        FLAT: any;

        GUI: any;

    }

    /**
     * Represents a cursor that looks at a {@link RemoteControlsPage}.
     *
     * @since API version 2
     */
    interface CursorRemoteControlsPage extends Cursor {
        /**
         * Value that reports the names of the devices parameter pages.
         *
         * @return {StringArrayValue}
         */
        pageNames(): StringArrayValue;

        /**
         * Selects the next page.
         *
         * @param shouldCycle
        If true then when the end is reached and there is no next page it selects the first page
         * @since API version 2
         */
        selectNextPage(shouldCycle?: any): void;

        /**
         * Selects the previous page.
         *
         * @param shouldCycle
        If true then when the end is reached and there is no next page it selects the first page
         * @since API version 2
         */
        selectPreviousPage(shouldCycle?: any): void;

        /**
         * Selects the next page that matches the given expression.
         *
         * @param expression
        An expression that can match a page based on how it has been tagged. For now this can only be
        the name of a single tag that you would like to match.
         * @param shouldCycle
        If true then when the end is reached and there is no next page it selects the first page
         * @since API version 2
         */
        selectNextPageMatching(expression?: any, shouldCycle?: any): void;

        /**
         * Selects the previous page that matches the given expression.
         *
         * @param expression
        An expression that can match a page based on how it has been tagged. For now this can only be
        the name of a single tag that you would like to match.
         * @param shouldCycle
        If true then when the end is reached and there is no next page it selects the first page
         * @since API version 2
         */
        selectPreviousPageMatching(expression?: any, shouldCycle?: any): void;

        /**
         * Value that reports the currently selected parameter page index.
         *
         * @return {SettableIntegerValue}
         * @since API version 2
         */
        selectedPageIndex(): SettableIntegerValue;

    }

    /**
     * Instances of this interface represent the cursor item of track selections.
     *
     * @since API version 1
     */
    interface CursorTrack extends CursorChannel {
        /**
         * Makes the cursor track point to it's parent group track, in case it is not already pointing to the root
         * group track.
         *
         * @since API version 1
         */
        selectParent(): void;

        /**
         * Makes the cursor track point to the first child found with the track group that this cursor currently
         * points to. If this cursor is not pointing to a track group or the track group is empty then this has no
         * effect.
         *
         * @since API version 2
         */
        selectFirstChild(): void;

        /**
         * Specifies the behaviour of the functions {@link #selectPrevious()}, {@link #selectNext()},
         * {@link #selectFirst()} and {@link #selectLast()}. Calling those functions can either navigate the cursor
         * within the current nesting level, or over a flat list of either all tracks or only the expanded tracks.
         * Default is CursorNavigationMode.FLAT.
         *
         * @param {CursorNavigationMode} mode
         * @since API version 1
         */
        setCursorNavigationMode(mode?: CursorNavigationMode): void;

        /**
         * @return {PinnableCursorDevice}
         */
        createCursorDevice(): PinnableCursorDevice;

    }

    interface DataReceivedCallback extends Callback {
        /**
         * @param {byte[]} data
         */
        dataReceived(data?: number[]): void;

    }

    /**
     * This interface represents a device in Bitwig Studio, both internal devices and plugins.
     *
     * @since API version 1
     */
    interface Device extends ObjectProxy {
        /**
         * Returns a representation of the device chain that contains this device. Possible device chain instances
         * are tracks, device layers, drums pads, or FX slots.
         *
         * @return {DeviceChain} the requested device chain object
         * @since API version 1
         */
        getDeviceChain(): DeviceChain;

        /**
         * Value that reports the position of the device within the parent device chain.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        position(): IntegerValue;

        /**
         * Returns an object that provides access to the open state of plugin windows.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the open state of the editor window, in case the device
        features a custom editor window (such as plugins).
         * @since API version 1
         */
        isWindowOpen(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the expanded state of the device.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the expanded state of the device.
         * @since API version 1
         */
        isExpanded(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the visibility of the device remote controls section.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the remote controls section visibility.
         * @since API version 2
         */
        isRemoteControlsSectionVisible(): SettableBooleanValue;

        /**
         * Creates a cursor for the selected remote controls page in the device with the supplied number of
         * parameters. This section will follow the current page selection made by the user in the application.
         *
         * @param parameterCount
        The number of parameters the remote controls should contain
         * @return {CursorRemoteControlsPage}
         * @since API version 2
         */
        createCursorRemoteControlsPage(parameterCount?: any): CursorRemoteControlsPage;

        /**
         * Selects the device in Bitwig Studio.
         *
         * @since API version 1
         */
        selectInEditor(): void;

        /**
         * Value that reports if the device is a plugin.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isPlugin(): BooleanValue;

        /**
         * Switches to the previous parameter page.
         *
         * @since API version 1
         */
        previousParameterPage(): void;

        /**
         * Switches to the next parameter page.
         *
         * @since API version 1
         */
        nextParameterPage(): void;

        /**
         * Registers an observer that reports if there is a previous parameter page.
         *
         * @param callback
        a callback function that receives a single boolean parameter
         * @since API version 1
         */
        addPreviousParameterPageEnabledObserver(callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports if there is a next parameter page.
         *
         * @param callback
        a callback function that receives a single boolean parameter
         * @since API version 1
         */
        addNextParameterPageEnabledObserver(callback?: (...args: any[]) => any): void;

        /**
         * Switches to the parameter page at the given page index.
         *
         * @param page
        the index of the desired parameter page
         * @since API version 1
         */
        setParameterPage(page?: any): void;

        /**
         * Returns an object used for browsing devices, presets and other content. Committing the browsing session
         * will load or create a device from the selected resource and replace the current device.
         *
         * @param numFilterColumnEntries
        the size of the window used to navigate the filter column entries.
         * @param numResultsColumnEntries
        the size of the window used to navigate the results column entries.
         * @return {Browser} the requested device browser object.
         * @since API version 1
         */
        createDeviceBrowser(numFilterColumnEntries?: any, numResultsColumnEntries?: any): any;

        /**
         * Value that reports the name of the device.
         *
         * @return {StringValue}
         * @since API version 2
         */
        name(): StringValue;

        /**
         * Value that reports the last loaded preset name.
         *
         * @return {StringValue}
         * @since API version 2
         */
        presetName(): StringValue;

        /**
         * Value that reports the current preset category name.
         *
         * @return {StringValue}
         * @since API version 2
         */
        presetCategory(): StringValue;

        /**
         * Value that reports the current preset creator name.
         *
         * @return {StringValue}
         * @since API version 2
         */
        presetCreator(): StringValue;

        /**
         * Registers an observer that reports the currently selected parameter page.
         *
         * @param valueWhenUnassigned
        the default page index that gets reported when the device is not associated with a device
        instance in Bitwig Studio yet.
         * @param callback
        a callback function that receives a single page index parameter (integer)
         * @since API version 1
         */
        addSelectedPageObserver(valueWhenUnassigned?: any, callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports the name of the active modulation source.
         *
         * @param len
        the maximum length of the name. Longer names will get truncated.
         * @param textWhenUnassigned
        the default name that gets reported when the device is not associated with a Bitwig Studio
        device yet.
         * @param callback
        a callback function that receives a single name parameter (string)
         * @since API version 1
         */
        addActiveModulationSourceObserver(len?: any, textWhenUnassigned?: any, callback?: (...args: any[]) => any): void;

        /**
         * Registers an observer that reports the names of the devices parameter pages.
         *
         * @param callback
        a callback function that receives a single string array parameter containing the names of the
        parameter pages
         * @since API version 1
         */
        addPageNamesObserver(callback?: (...args: any[]) => any): void;

        /**
         * Value that reports if the device is enabled.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isEnabled(): SettableBooleanValue;

        /**
         * Indicates if the device has nested device chains in FX slots. Use {@link #addSlotsObserver(Callable)
         * addSlotsObserver(Callable)} to get a list of available slot names, and navigate to devices in those
         * slots using the {@link CursorDevice} interface.
         *
         * @return {BooleanValue} a value object that indicates if the device has nested device chains in FX slots.
         * @since API version 1
         */
        hasSlots(): BooleanValue;

        /**
         * Value of the list of available FX slots in this device.
         *
         * @return {StringArrayValue}
         * @since API version 2
         */
        slotNames(): StringArrayValue;

        /**
         * Returns an object that represents the selected device slot as shown in the user interface, and that
         * provides access to the contents of slot's device chain.
         *
         * @return {DeviceSlot} the requested slot cursor object
         * @since API version 1
         */
        getCursorSlot(): DeviceSlot;

        /**
         * Indicates if the device is contained by another device.
         *
         * @return {BooleanValue} a value object that indicates if the device is nested
         * @since API version 1
         */
        isNested(): BooleanValue;

        /**
         * Indicates if the device supports nested layers.
         *
         * @return {BooleanValue} a value object that indicates if the device supports nested layers.
         * @since API version 1
         */
        hasLayers(): BooleanValue;

        /**
         * Indicates if the device has individual device chains for each note value.
         *
         * @return {BooleanValue} a value object that indicates if the device has individual device chains for each note value.
         * @since API version 1
         */
        hasDrumPads(): BooleanValue;

        /**
         * Create a bank for navigating the nested layers of the device using a fixed-size window.
         *
         * @param numChannels
        the number of channels that the device layer bank should be configured with
         * @return {DeviceLayerBank} a device layer bank object configured with the desired number of channels
         * @since API version 1
         */
        createLayerBank(numChannels?: any): DeviceLayerBank;

        /**
         * Create a bank for navigating the nested layers of the device using a fixed-size window.
         *
         * @param numPads
        the number of channels that the drum pad bank should be configured with
         * @return {DrumPadBank} a drum pad bank object configured with the desired number of pads
         * @since API version 1
         */
        createDrumPadBank(numPads?: any): DrumPadBank;

        /**
         * Returns a device layer instance that can be used to navigate the layers or drum pads of the device, in
         * case it has any.
         *
         * @return {CursorDeviceLayer} a cursor device layer instance
         * @since API version 1
         */
        createCursorLayer(): CursorDeviceLayer;

        /**
         * Adds an observer on a list of all parameters for the device.
         *
         * The callback always updates with an array containing all the IDs for the device.
         *
         * @param callback
        function with the signature (String[])
         * @since API version 1
         */
        addDirectParameterIdObserver(callback?: (...args: any[]) => any): void;

        /**
         * Adds an observer for the parameter names (initial and changes) of all parameters for the device.
         *
         * @param maxChars
        maximum length of the string sent to the observer.
         * @param callback
        function with the signature (String ID, String name)
         * @since API version 1
         */
        addDirectParameterNameObserver(maxChars?: any, callback?: (...args: any[]) => any): void;

        /**
         * Returns an observer that reports changes of parameter display values, i.e. parameter values formatted as
         * a string to be read by the user, for example "-6.02 dB". The returned observer object can be used to
         * configure which parameters should be observed. By default no parameters are observed. It should be
         * avoided to observe all parameters at the same time for performance reasons.
         *
         * @param maxChars
        maximum length of the string sent to the observer.
         * @param callback
        function with the signature (String ID, String valueDisplay)
         * @return {DirectParameterValueDisplayObserver} an observer object that can be used to enable or disable actual observing for certain
        parameters.
         * @since API version 1
         */
        addDirectParameterValueDisplayObserver(maxChars?: any, callback?: (...args: any[]) => any): DirectParameterValueDisplayObserver;

        /**
         * Adds an observer for the parameter display value (initial and changes) of all parameters for the device.
         *
         * @param callback
        a callback function with the signature (String ID, float normalizedValue). If the value is not
        accessible 'Number.NaN' (not-a-number) is reported, can be checked with 'isNaN(value)'.
         * @since API version 1
         */
        addDirectParameterNormalizedValueObserver(callback?: (...args: any[]) => any): void;

        /**
         * Sets the parameter with the specified `id` to the given `value` according to the given `resolution`.
         *
         * @param id
        the parameter identifier string
         * @param value
        the new value normalized to the range [0..resolution-1]
         * @param resolution
        the resolution of the new value
         * @since API version 1
         */
        setDirectParameterValueNormalized(id?: any, value?: any, resolution?: any): void;

        /**
         * Increases the parameter with the specified `id` by the given `increment` according to the given
         * `resolution`. To decrease the parameter value pass in a negative increment.
         *
         * @param id
        the parameter identifier string
         * @param increment
        the amount that the parameter value should be increased by, normalized to the range
        [0..resolution-1]
         * @param resolution
        the resolution of the new value
         * @since API version 1
         */
        incDirectParameterValueNormalized(id?: any, increment?: any, resolution?: any): void;

        /**
         * Value that reports the file name of the currently loaded sample, in case the device is a sample
         * container device.
         *
         * @return {StringValue}
         * @since API version 2
         */
        sampleName(): StringValue;

        /**
         * Returns an object that provides bank-wise navigation of sibling devices of the same device chain
         * (including the device instance used to create the siblings bank).
         *
         * @param numDevices
        the number of devices that are simultaneously accessible
         * @return {DeviceBank} the requested device bank object
        @since API version 1
         */
        createSiblingsDeviceBank(numDevices?: any): DeviceBank;

        /**
         * Starts browsing for content that can be inserted before this device in Bitwig Studio's popup browser.
         *
         * @since API version 2
         */
        browseToInsertBeforeDevice(): void;

        /**
         * Starts browsing for content that can be inserted before this device in Bitwig Studio's popup browser.
         *
         * @since API version 2
         */
        browseToInsertAfterDevice(): void;

        /**
         * Starts browsing for content that can replace this device in Bitwig Studio's popup browser.
         *
         * @since API version 2
         */
        browseToReplaceDevice(): void;

    }

    /**
     * This interface is used for navigation of device chains in Bitwig Studio. Instances are configured with a
     * fixed number of devices and provide access to a excerpt of the devices inside a device chain. Various
     * methods are provided for scrolling to different sections of the device chain. It basically acts like a
     * window moving over the devices.
     *
     * To receive an instance of DeviceBank call {@link Track#createDeviceBank}.
     *
     * @see {@link Track#createDeviceBank}
     * @since API version 1
     */
    interface DeviceBank extends Bank {
        /**
         * Returns the object that was used to instantiate this device bank. Possible device chain instances are
         * tracks, device layers, drums pads, or FX slots.
         *
         * @return {DeviceChain} the requested device chain object
         * @since API version 1
         */
        getDeviceChain(): DeviceChain;

        /**
         * Returns the device at the given index within the bank.
         *
         * @param indexInBank
        the device index within this bank, not the position within the device chain. Must be in the
        range [0..sizeOfBank-1].
         * @return {Device} the requested device object
         * @since API version 1
         */
        getDevice(indexInBank?: any): Device;

        /**
         * Scrolls the device window one page up.
         *
         * @since API version 1
         */
        scrollPageUp(): void;

        /**
         * Scrolls the device window one page down.
         *
         * @since API version 1
         */
        scrollPageDown(): void;

        /**
         * Scrolls the device window one device up.
         *
         * @since API version 1
         */
        scrollUp(): void;

        /**
         * Scrolls the device window one device down.
         *
         * @since API version 1
         */
        scrollDown(): void;

        /**
         * Makes the device with the given position visible in the track bank.
         *
         * @param position
        the position of the device within the device chain
         * @since API version 1
         */
        scrollTo(position?: any): void;

        /**
         * Registers an observer that reports if the device window can be scrolled further down.
         *
         * @param callback
        a callback function that takes a single boolean parameter
         * @since API version 1
         */
        addCanScrollDownObserver(callback?: (...args: any[]) => any): void;

        /**
         * Browses for content to insert a device at the given index inside this bank.
         *
         * @param index
        the index to insert the device at. Must be >= 0 and <= {@link #getSizeOfBank()}.
         * @since API version 2
         */
        browseToInsertDevice(index?: any): void;

    }

    /**
     * The foundation of all interfaces that contain devices, such as tracks, device layers, drum pads or FX
     * slots.
     *
     * @since API version 1
     */
    interface DeviceChain extends ObjectProxy {
        /**
         * Selects the device chain in Bitwig Studio, in case it is a selectable object.
         *
         * @since API version 1
         */
        selectInEditor(): void;

        /**
         * Value that reports the name of the device chain, such as the track name or the drum pad
         * name.
         *
         * @return {SettableStringValue}
         * @since API version 2
         */
        name(): SettableStringValue;

        /**
         * Registers an observer that reports if the device chain is selected in Bitwig Studio editors.
         *
         * @param callback
        a callback function that takes a single boolean parameter.
         * @since API version 1
         */
        addIsSelectedInEditorObserver(callback?: (...args: any[]) => any): void;

        /**
         * Returns an object that provides bank-wise navigation of devices.
         *
         * @param numDevices
        the number of devices should be accessible simultaneously
         * @return {DeviceBank} the requested device bank object
        @since API version 1
         */
        createDeviceBank(numDevices?: any): DeviceBank;

        /**
         * Returns an object used for browsing devices, presets and other content. Committing the browsing session
         * will load or create a device from the selected resource and insert it into the device chain.
         *
         * @param numFilterColumnEntries
        the size of the window used to navigate the filter column entries.
         * @param numResultsColumnEntries
        the size of the window used to navigate the results column entries.
         * @return {Browser} the requested device browser object.
         * @since API version 1
         */
        createDeviceBrowser(numFilterColumnEntries?: any, numResultsColumnEntries?: any): any;

        /**
         * Starts browsing for content that can be inserted at the start of this device chain.
         *
         * @since API version 2
         */
        browseToInsertAtStartOfChain(): void;

        /**
         * Starts browsing for content that can be inserted at the end of this device chain.
         *
         * @since API version 2
         */
        browseToInsertAtEndOfChain(): void;

    }

    /**
     * Instances of this interface represent device layers in Bitwig Studio.
     *
     * @since API version 1
     */
    interface DeviceLayer extends Channel {
    }

    /**
     * Devices layers are features of special Bitwig Studio devices, more specifically the Layer Instrument and
     * Layer FX devices, and are also shown as sub-channels in the mixer panel.
     *
     * Instances of device layer bank are configured with a fixed number of channels and represent an excerpt of
     * underlying complete list of channels. Various methods are provided for scrolling to different sections of
     * the underlying list. It basically acts like a one-dimensional window moving over the device layers.
     *
     * To receive an instance of device layer bank call {@link Device#createLayerBank(int numChannels)}.
     *
     * @see {@link Device#createLayerBank}
     * @since API version 1
     */
    interface DeviceLayerBank extends ChannelBank {
    }

    /**
     * Instances of this interface represent nested FX slots in devices.
     *
     * @since API version 1
     */
    interface DeviceSlot extends DeviceChain {
    }

    interface DirectParameterDisplayedValueChangedCallback extends Callback {
        /**
         * @param {string} id
         * @param {string} value
         */
        directParameterDisplayedValueChanged(id?: string, value?: string): void;

    }

    interface DirectParameterNameChangedCallback extends Callback {
        /**
         * @param {string} id
         * @param {string} name
         */
        directParameterNameChanged(id?: string, name?: string): void;

    }

    interface DirectParameterNormalizedValueChangedCallback extends Callback {
        /**
         * @param {string} id
         * @param {double} normalizedValue
         */
        directParameterNormalizedValueChanged(id?: string, normalizedValue?: number): void;

    }

    /**
     * This interface is used to configure observation of pretty-printed device parameter values.
     *
     * @since API version 1
     */
    interface DirectParameterValueDisplayObserver {
        /**
         * Starts observing the parameters according to the given parameter ID array, or stops observing in case
         * `null` is passed in for the parameter ID array.
         *
         * @param parameterIds
        the array of parameter IDs or `null` to stop observing parameter display values.
         * @since API version 1
         */
        setObservedParameterIds(parameterIds?: any): void;

    }

    /**
     * This interface is used to save custom script settings inside Bitwig Studio documents. The settings are
     * shown to the user in the `Studio IO` panel of Bitwig Studio.
     *
     * @since API version 1
     */
    interface DocumentState extends Settings {
    }

    /**
     * Instances of this interface represent double values.
     *
     * @since API version 2
     */
    interface DoubleValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {double}
         * @since API version 2
         */
        get(): number;

    }

    interface DoubleValueChangedCallback extends ValueChangedCallback {
        /**
         * @param {double} newValue
         */
        valueChanged(newValue?: number): void;

    }

    /**
     * Instances of this interface are special kind of channel objects that represent the pads of a drum machine
     * instrument. Drum pads are typically associated to channel objects via note keys.
     *
     * @since API version 1
     */
    interface DrumPad extends Channel {
    }

    /**
     * Drum pads are features of special Bitwig Studio devices (currently only the Bitwig Drum Machine
     * instrument), and are also shown as sub-channels in the mixer panel.
     *
     * Instances of drum pad bank are configured with a fixed number of pads/channels and represent an excerpt of
     * underlying complete list of channels. Various methods are provided for scrolling to different sections of
     * the underlying list. It basically acts like a one-dimensional window moving over the drum pad channels.
     *
     * To receive an instance of drum pad bank call {@link Device#createDrumPadBank(int numChannels)}.
     *
     * @see {@link Device#createDrumPadBank}
     * @since API version 1
     */
    interface DrumPadBank extends ChannelBank {
        /**
         * Specifies if the Drum Machine should visualize which pads are part of the window. By default indications
         * are enabled.
         *
         * @param shouldIndicate
        `true` if visual indications should be enabled, `false` otherwise
         * @since API version 1
         */
        setIndication(shouldIndicate?: any): void;

    }

    interface EnumValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {string}
         * @since API version 2
         */
        get(): string;

    }

    interface EnumValueChangedCallback extends ObjectValueChangedCallback {
    }

    interface FloatValueChangedCallback extends Callback {
        /**
         * @param {float} newValue
         */
        valueChanged(newValue?: number): void;

    }

    /**
     * An interface representing the global groove settings of the project.
     *
     * @since API version 1
     */
    interface Groove {
        /**
         * Returns the enabled state of the groove.
         *
         * @return {Parameter} an object that provides access to the groove on/off setting
         * @since API version 1
         */
        getEnabled(): Parameter;

        /**
         * Returns the object that represents the shuffle amount in Bitwig Studio.
         *
         * @return {Parameter} an ranged value object that provides access to the shuffle amount
         * @since API version 1
         */
        getShuffleAmount(): Parameter;

        /**
         * Returns the object that represents the shuffle rate in Bitwig Studio.
         *
         * @return {Parameter} an ranged value object that provides access to the shuffle rate
         * @since API version 1
         */
        getShuffleRate(): Parameter;

        /**
         * Returns the object that represents the accent amount in Bitwig Studio.
         *
         * @return {Parameter} an ranged value object that provides access to the accent amount
         * @since API version 1
         */
        getAccentAmount(): Parameter;

        /**
         * Returns the object that represents the accent rate in Bitwig Studio.
         *
         * @return {Parameter} an ranged value object that provides access to the accent rate
         * @since API version 1
         */
        getAccentRate(): Parameter;

        /**
         * Returns the object that represents the accent phase in Bitwig Studio.
         *
         * @return {Parameter} an ranged value object that provides access to the accent phase
         * @since API version 1
         */
        getAccentPhase(): Parameter;

    }

    /**
     * An interface representing the host application to the script. A singleton instance of this interface is
     * available in the global scope of each script. The methods provided by this interface can be divided in
     * different categories:
     *
     * 1. functions for registering the script in Bitwig Studio, so that it can be listed, detected and configured
     * in the controller preferences. The methods that belong to this group are {@link #defineController},
     * {@link #defineMidiPorts}, {@link #defineSysexIdentityReply} and {@link #addDeviceNameBasedDiscoveryPair}.
     * 2. functions for creating objects that provide access to the various areas of Bitwig Studio to the script.
     * The name of those methods typically start with `create...` 3. functions for printing to the Control Surface
     * Console, which can be opened from the `View` menu of Bitwig Studio. 4. functions for determining the name
     * of the host application, API version, the host operating system and such.
     *
     * The first group of methods should be called on the global scope of the script. The function in the second
     * and third group are typically called from the init method of the script or other handler functions. The
     * last group is probably only required in rare cases and can be called any time.
     *
     * @mainpage Introduction
    Welcome to the Bitwig Control Surface API.<br/>
    The pages shown here include the reference documentation for the various interfaces and functions provided
    by the API.<br/>
    The best starting point for becoming familiar with the API within these pages is the documentation of the
    {@link Host} interface. A singleton instance of that interface is available in the scope of each script.
    In addition it is highly recommended to also walk through the <b>Control Surface Scripting Guide</b> that is
    available from the @em Help menu in Bitwig Studio.
     * @include api-changes
     * @since API version 1
     */
    interface Host {
        /**
         * @param {int} version
         */
        loadAPI(version?: number): void;

        /**
         * @return {boolean}
         */
        shouldFailOnDeprecatedUse(): boolean;

        /**
         * @param {boolean} value
         */
        setShouldFailOnDeprecatedUse(value?: boolean): void;

        /**
         * @param {string} path
         */
        load(path?: string): void;

        /**
         * Sets an email address to use for reporting errors found in this script.
         *
         * @param {string} address
         * @since API version 2
         */
        setErrorReportingEMail(address?: string): void;

        /**
         * Registers a controller script with the given parameters. This function must be called once at the global
         * scope of the script.
         *
         * @param vendor
        the name of the hardware vendor. Must not be <code>null</code>.
         * @param name
        the name of the controller script as listed in the user interface of Bitwig Studio. Must not
        be <code>null</code>.
         * @param version
        the version of the controller script. Must not be <code>null</code>.
         * @param uuid
        a universal unique identifier (UUID) string that is used to distinguish one script from
        another, for example `550e8400-e29b-11d4-a716-446655440000`. Must not be <code>null</code>.
        For generating random UUID strings several free web tools are available.
         * @param author
        the name of the script author
        @since API version 1
         */
        defineController(vendor?: any, name?: any, version?: any, uuid?: any, author?: any): void;

        /**
         * Defines the number of MIDI ports for input and output that the device uses. This method should be called
         * once in the global scope if the script is supposed to exchange MIDI messages with the device, or if the
         * script adds entries to the MIDI input/output choosers in Bitwig Studio. After calling this method the
         * individual port objects can be accessed using {@link #getMidiInPort(int index)} and
         * {@link #getMidiInPort(int index)}.
         *
         * @param numInports
        the number of input ports
         * @param numOutports
        the number of output ports
         * @since API version 1
         */
        defineMidiPorts(numInports?: any, numOutports?: any): void;

        /**
         * Returns the MIDI input port with the given index.
         *
         * @param index
        the index of the MIDI input port, must be valid.
         * @return {MidiIn} the requested MIDI input port
        @since API version 1
         */
        getMidiInPort(index?: any): MidiIn;

        /**
         * Returns the MIDI output port with the given index.
         *
         * @param index
        the index of the MIDI output port, must be valid.
         * @return {MidiOut} the requested MIDI output port
        @since API version 1
         */
        getMidiOutPort(index?: any): MidiOut;

        /**
         * Registers patterns which are used to automatically detect hardware devices that can be used with the
         * script.<br/>
         *
         * When the user clicks on the `detect` button in the Bitwig Studio controller preferences dialog, Bitwig
         * Studio searches for connected controller hardware by comparing the parameters passed into this function
         * are compared with the port names of the available MIDI drivers. Found controller scripts are
         * automatically added with their input/output ports configured.<br/>
         *
         * Calling this function is optional, but can also be called multiple times in the global script scope in
         * order to support alternative driver names.
         *
         * @param inputs
        the array of strings used to detect MIDI input ports, must not be `null`.
         * @param outputs
        the array of strings used to detect MIDI output ports, must not be `null`.
         * @since API version 1
         */
        addDeviceNameBasedDiscoveryPair(inputs?: any, outputs?: any): void;

        /**
         * Creates a preferences object that can be used to insert settings into the Controller Preferences panel
         * in Bitwig Studio.
         *
         * @return {Preferences} an object that provides access to custom controller preferences
        @since API version 1
         */
        getPreferences(): Preferences;

        /**
         * Creates a document state object that can be used to insert settings into the Studio I/O Panel in Bitwig
         * Studio.
         *
         * @return {DocumentState} an object that provides access to custom document settings
        @since API version 1
         */
        getDocumentState(): DocumentState;

        /**
         * Returns an object that is used to configure automatic notifications. Bitwig Studio supports automatic
         * visual feedback from controllers that shows up as popup notifications. For example when the selected
         * track or the current device preset was changed on the controller these notifications are shown,
         * depending on your configuration.
         *
         * @return {NotificationSettings} a configuration object used to enable/disable the various automatic notifications supported by
        Bitwig Studio
         * @since API version 1
         */
        getNotificationSettings(): NotificationSettings;

        /**
         * Returns an object for controlling various aspects of the currently selected project.
         *
         * @return {Project}
         * @since API version 1
         */
        getProject(): Project;

        /**
         * Returns an object for controlling and monitoring the elements of the `Transport` section in Bitwig
         * Studio. This function should be called once during initialization of the script if transport access is
         * desired.
         *
         * @return {Transport} an object that represents the `Transport` section in Bitwig Studio.
        @since API version 1
         */
        createTransport(): Transport;

        /**
         * Returns an object for controlling and monitoring the `Groove` section in Bitwig Studio. This function
         * should be called once during initialization of the script if groove control is desired.
         *
         * @return {Groove} an object that represents the `Groove` section in Bitwig Studio.
        @since API version 1
         */
        createGroove(): Groove;

        /**
         * Returns an object that provides access to general application functionality, including global view
         * settings, the list of open projects, and other global settings that are not related to a certain
         * document.
         *
         * @return {Application} an application object.
        @since API version 1
         */
        createApplication(): Application;

        /**
         * Returns an object which provides access to the `Arranger` panel of Bitwig Studio. Calling this function
         * is equal to `createArranger(-1)`.
         *
         * @return {Arranger} an arranger object
        @see #createArranger(int)
         * @since API version 1
         */
        createArranger(): Arranger;

        /**
         * Returns an object which provides access to the `Mixer` panel of Bitwig Studio. Calling this function is
         * equal to `createMixer(-1, null)`.
         *
         * @return {Mixer} a `Mixer` object
        @since API version 1
         */
        createMixer(): Mixer;

        /**
         * Returns a track bank with the given number of tracks, sends and scenes.<br/>
         *
         * A track bank can be seen as a fixed-size window onto the list of tracks in the current document
         * including their sends and scenes, that can be scrolled in order to access different parts of the track
         * list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>
         *
         * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
         * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
         * contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
         * The track bank returned by this function provides a convenient interface for controlling which tracks
         * are currently shown on the hardware.<br/>
         *
         * Creating a track bank using this method will consider all tracks in the document, including effect
         * tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
         * you are only interested in tracks of a certain kind.
         *
         * @param numTracks
        the number of tracks spanned by the track bank
         * @param numSends
        the number of sends spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createTrackBank(numTracks?: any, numSends?: any, numScenes?: any): TrackBank;

        /**
         * Returns a track bank with the given number of tracks, sends and scenes. Only audio tracks, instrument
         * tracks and hybrid tracks are considered. For more information about track banks and the `bank pattern`
         * in general, see the documentation for {@link #createTrackBank}.
         *
         * @param numTracks
        the number of tracks spanned by the track bank
         * @param numSends
        the number of sends spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createMainTrackBank(numTracks?: any, numSends?: any, numScenes?: any): TrackBank;

        /**
         * Returns a track bank with the given number of effect tracks and scenes. Only effect tracks are
         * considered. For more information about track banks and the `bank pattern` in general, see the
         * documentation for {@link #createTrackBank}.
         *
         * @param numTracks
        the number of tracks spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createEffectTrackBank(numTracks?: any, numScenes?: any): TrackBank;

        /**
         * Returns an object that represents the master track of the document.
         *
         * @param numScenes
        the number of scenes for bank-wise navigation of the master tracks clip launcher slots.
         * @return {MasterTrack} an object representing the master track.
         * @since API version 1
         */
        createMasterTrack(numScenes?: any): MasterTrack;

        /**
         * Returns an object that represents the cursor item of the arranger track selection.
         *
         * @param numSends
        the number of sends for bank-wise navigation of the sends that are associated with the track
        selection
         * @param numScenes
        the number of scenes for bank-wise navigation of the clip launcher slots that are associated
        with the track selection
         * @return {CursorTrack} an object representing the currently selected arranger track (in the future also multiple
        tracks)
         * @since API version 1
         */
        createArrangerCursorTrack(numSends?: any, numScenes?: any): CursorTrack;

        /**
         * Returns an object that represents a named cursor track, that is independent from the arranger or mixer
         * track selection in the user interface of Bitwig Studio.
         *
         * @param name
        the name of the track cursor
         * @param numSends
        the number of sends for bank-wise navigation of the sends that are associated with the track
        selection
         * @param numScenes
        the number of scenes for bank-wise navigation of the clip launcher slots that are associated
        with the track selection
         * @return {CursorTrack} an object representing the currently selected arranger track (in the future also multiple
        tracks).
         * @since API version 1
         */
        createCursorTrack(name?: any, numSends?: any, numScenes?: any): CursorTrack;

        /**
         * Returns a scene bank with the given number of scenes.<br/>
         *
         * A scene bank can be seen as a fixed-size window onto the list of scenes in the current document, that
         * can be scrolled in order to access different parts of the scene list. For example a scene bank
         * configured for 8 scenes can show scene 1-8, 2-9, 3-10 and so on.<br/>
         *
         * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
         * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
         * contain a dynamic list of scenes, most likely more scenes than the hardware can control simultaneously.
         * The scene bank returned by this function provides a convenient interface for controlling which scenes
         * are currently shown on the hardware.<br/>
         *
         * @param numScenes
        the number of scenes spanned by the track bank
         * @return {SceneBank} an object for bank-wise navigation of scenes
         * @since API version 1
         */
        createSceneBank(numScenes?: any): SceneBank;

        /**
         * Returns an object that represents the cursor device in devices selections made by the user in Bitwig
         * Studio. Calling this method is equal to the following code: {@code
         * var cursorTrack = createArrangerCursorTrack(numSends, numScenes);
         * var cursorDevice = cursorTrack.createCursorDevice();
         * } To create a custom device selection that is not connected to the main device selection in the user
         * interface, call {@link Track#createCursorDevice(String) cursorTrack.createCursorDevice(String name)}.
         *
         * @param numSends
        the number of sends that are simultaneously accessible in nested channels.
         * @return {CursorDevice} an object representing the currently selected device.
         * @since API version 1
         */
        createEditorCursorDevice(numSends?: any): CursorDevice;

        /**
         * Returns a clip object that represents the cursor of the launcher clip selection. The gridWidth and
         * gridHeight parameters specify the grid dimensions used to access the note content of the clip.
         *
         * @param gridWidth
        the number of steps spanned by one page of the note content grid.
         * @param gridHeight
        the number of keys spanned by one page of the note content grid.
         * @return {Clip} an object representing the currently selected cursor clip
        @since API version 1
         */
        createLauncherCursorClip(gridWidth?: any, gridHeight?: any): Clip;

        /**
         * Returns a clip object that represents the cursor of the arranger clip selection. The gridWidth and
         * gridHeight parameters specify the grid dimensions used to access the note content of the clip.
         *
         * @param gridWidth
        the number of steps spanned by one page of the note content grid.
         * @param gridHeight
        the number of keys spanned by one page of the note content grid.
         * @return {Clip} an object representing the currently selected cursor clip
        @since API version 1
         */
        createArrangerCursorClip(gridWidth?: any, gridHeight?: any): Clip;

        /**
         * Returns an object that is used to define a bank of custom user controls. These controls are available to
         * the user for free controller assignments and are typically used when bank-wise navigation is
         * inconvenient.
         *
         * @param numControllers
        the number of controls that are available for free assignments
         * @return {UserControlBank} An object that represents a set of custom user controls.
        @since API version 1
         */
        createUserControls(numControllers?: any): UserControlBank;

        /**
         * Schedules the given callback function for execution after the given delay. For timer applications call
         * this method once initially and then from within the callback function.
         *
         * @param {java.lang.Runnable} callback
         * @param {long} delay
         */
        scheduleTask(callback?: (...args: any[]) => any, delay?: number): void;

        /**
         * Requests that the driver's flush method gets called.
         *
         * @since API version 2
         */
        requestFlush(): void;

        /**
         * Returns the latest supported API version of the host application.
         *
         * @return {int} the latest supported API version of the host application
         * @since API version 1
         */
        getHostApiVersion(): number;

        /**
         * Returns the vendor of the host application.
         *
         * @return {string} the vendor of the host application
         * @since API version 1
         */
        getHostVendor(): string;

        /**
         * Returns the product name of the host application.
         *
         * @return {string} the product name of the host application
         * @since API version 1
         */
        getHostProduct(): string;

        /**
         * Returns the version number of the host application.
         *
         * @return {string} the version number of the host application
         * @since API version 1
         */
        getHostVersion(): string;

        /**
         * Indicates if the host platform is Windows.
         *
         * @return {boolean} `true` if the host platform is Windows, `false` otherwise.
         * @since API version 1
         */
        platformIsWindows(): boolean;

        /**
         * Indicates if the host platform is Apple Mac OS X.
         *
         * @return {boolean} `true` if the host platform is Mac, `false` otherwise.
         * @since API version 1
         */
        platformIsMac(): boolean;

        /**
         * Indicates if the host platform is Linux.
         *
         * @return {boolean} `true` if the host platform is Linux, `false` otherwise.
         * @since API version 1
         */
        platformIsLinux(): boolean;

        /**
         * Prints the given string in the control surface console window. The console window can be opened in the
         * view menu of Bitwig Studio.
         *
         * @param s
        the string to be printed
         * @since API version 1
         */
        println(s?: any): void;

        /**
         * Prints the given string in the control surface console window using a text style that highlights the
         * string as error. The console window can be opened in the view menu of Bitwig Studio.
         *
         * @param s
        the error string to be printed
         * @since API version 1
         */
        errorln(s?: any): void;

        /**
         * Shows a temporary text overlay on top of the application GUI, that will fade-out after a short interval.
         * If the overlay is already shown, it will get updated with the given text.
         *
         * @param text
        the text to be shown
         * @since API version 1
         */
        showPopupNotification(text?: any): void;

        /**
         * Opens a TCP (Transmission Control Protocol) host socket for allowing network connections from other
         * hardware and software.
         *
         * @param name
        a meaningful name that describes the purpose of this connection.
         * @param defaultPort
        the port that should be used for the connection. If the port is already in use, then another
        port will be used. Check {@link RemoteSocket#getPort()} on the returned object to be sure.
         * @return {RemoteSocket} the object that represents the socket
        @since API version 1
         */
        createRemoteConnection(name?: any, defaultPort?: any): RemoteSocket;

        /**
         * Connects to a remote TCP (Transmission Control Protocol) socket.
         *
         * @param host
        the host name or IP address to connect to.
         * @param port
        the port to connect to
         * @param callback
        the callback function that gets called when the connection gets established. A single
        {@link RemoteConnection} parameter is passed into the callback function.
        @since API version 1
         */
        connectToRemoteHost(host?: any, port?: any, callback?: (...args: any[]) => any): void;

        /**
         * Sends a UDP (User Datagram Protocol) packet with the given data to the specified host.
         *
         * @param host
        the destination host name or IP address
         * @param port
        the destination port
         * @param data
        the data to be send. When creating a numeric byte array in JavaScript, the byte values must be
        signed (in the range -128..127).
        @since API version 1
         */
        sendDatagramPacket(host?: any, port?: any, data?: any): void;

        /**
         * Adds an observer for incoming UDP (User Datagram Protocol) packets on the selected port.
         *
         * @param name
        a meaningful name that describes the purpose of this observer.
         * @param port
        the port that should be used
         * @param callback
        the callback function that gets called when data arrives. The function receives a single
        parameter that contains the data byte array.
         * @return {boolean} {@true} if was possible to bind the port, false otherwise
        @since API version 1
         */
        addDatagramPacketObserver(name?: any, port?: any, callback?: (...args: any[]) => any): boolean;

        /**
         * Creates a {@link PopupBrowser} that represents the pop-up browser in Bitwig Studio.
         *
         * @return {PopupBrowser}
         * @since API version 2
         */
        createPopupBrowser(): PopupBrowser;

        /**
         * {@link BeatTimeFormatter} used to format beat times by default. This will be used to format beat times
         * when asking for a beat time in string format without providing any formatting options. For example by
         * calling {@link BeatTimeStringValue#get()}.
         *
         * @return {BeatTimeFormatter}
         * @since API version 2
         */
        defaultBeatTimeFormatter(): BeatTimeFormatter;

        /**
         * Sets the {@link BeatTimeFormatter} to use by default for formatting beat times.
         *
         * @param {BeatTimeFormatter} formatter
         * @since API version 2
         */
        setDefaultBeatTimeFormatter(formatter?: BeatTimeFormatter): void;

        /**
         * Creates a {@link BeatTimeFormatter} that can be used to format beat times.
         *
         * @param separator
        the character used to separate the segments of the formatted beat time, typically ":", "." or
        "-"
         * @param barsLen
        the number of digits reserved for bars
         * @param beatsLen
        the number of digits reserved for beats
         * @param subdivisionLen
        the number of digits reserved for beat subdivisions
         * @param ticksLen
        the number of digits reserved for ticks
         * @return {BeatTimeFormatter}
         * @since API version 2
         */
        createBeatTimeFormatter(separator?: any, barsLen?: any, beatsLen?: any, subdivisionLen?: any, ticksLen?: any): BeatTimeFormatter;

    }

    interface IndexedBooleanValueChangedCallback extends IndexedValueChangedCallback {
        /**
         * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
         * of containing clips.
         *
         * @param {int} index
         * @param {boolean} newValue
         * @since API version 1
         */
        valueChanged(index?: number, newValue?: boolean): void;

    }

    interface IndexedColorValueChangedCallback extends IndexedValueChangedCallback {
        /**
         * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
         * of containing clips.
         *
         * @param {int} index
         * @param {float} red
         * @param {float} green
         * @param {float} blue
         * @since API version 1
         */
        valueChanged(index?: number, red?: number, green?: number, blue?: number): void;

    }

    interface IndexedStringValueChangedCallback extends IndexedValueChangedCallback {
        /**
         * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
         * of containing clips.
         *
         * @param {int} index
         * @param {string} newValue
         * @since API version 1
         */
        valueChanged(index?: number, newValue?: string): void;

    }

    interface IndexedValueChangedCallback extends Callback {
    }

    interface IntegerValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {int}
         * @since API version 2
         */
        get(): number;

    }

    interface IntegerValueChangedCallback extends ValueChangedCallback {
        /**
         * @param {int} newValue
         */
        valueChanged(newValue?: number): void;

    }

    /**
     * A special kind of track that represents the master track in Bitwig Studio.
     *
     * @since API version 1
     */
    interface MasterTrack extends Track {
    }

    /**
     * Instances of this interface are used to setup handler functions for incoming MIDI messages from a specific
     * MIDI hardware.
     *
     * @since API version 1
     */
    interface MidiIn {
        /**
         * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
         *
         * @param callback
        a callback function that receives three integer parameters: 1. the status byte 2. the data1
        value 2. the data2 value
        @since API version 1
         */
        setMidiCallback(callback?: (...args: any[]) => any): void;

        /**
         * Registers a callback for receiving sysex MIDI messages on this MIDI input port.
         *
         * @param callback
        a callback function that takes a single string argument
        @since API version 1
         */
        setSysexCallback(callback?: (...args: any[]) => any): void;

        /**
         * Creates a note input that appears in the track input choosers in Bitwig Studio. This method must be
         * called within the `init()` function of the script. The messages matching the given mask parameter will
         * be fed directly to the application, and are not processed by the script.
         *
         * @param name
        the name of the note input as it appears in the track input choosers in Bitwig Studio
         * @param masks
        a filter string formatted as hexadecimal value with `?` as wildcard. For example `80????`
        would match note-off on channel 1 (0). When this parameter is {@null}, a standard filter will
        be used to forward note-related messages on channel 1 (0).
         * @return {NoteInput} the object representing the requested note input
         * @since API version 1
         */
        createNoteInput(name?: any, masks?: any): NoteInput;

    }

    /**
     * Instances of this interface are used to send MIDI messages to a specific MIDI hardware.
     *
     * @since API version 1
     */
    interface MidiOut {
        /**
         * Sends a MIDI message to the hardware device.
         *
         * @param status
        the status byte of the MIDI message
         * @param data1
        the data1 part of the MIDI message
         * @param data2
        the data2 part of the MIDI message
        @since API version 1
         */
        sendMidi(status?: any, data1?: any, data2?: any): void;

        /**
         * Sends a MIDI SysEx message to the hardware device.
         *
         * @param hexString
        the sysex message formatted as hexadecimal value string
        @since API version 1
         */
        sendSysex(hexString?: any): void;

    }

    /**
     * An interface used to access various commands that can be performed on the Bitwig Studio mixer panel.<br/>
     *
     * To get an instance of the mixer interface call {@link Host#createMixer}.
     *
     * @since API version 1
     */
    interface Mixer {
        /**
         * Gets an object that allows to show/hide the meter section of the mixer panel. Observers can be
         * registered on the returned object for receiving notifications when the meter section switches between
         * shown and hidden state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the meter section visibility
         * @since API version 1
         */
        isMeterSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the io section of the mixer panel. Observers can be registered
         * on the returned object for receiving notifications when the io section switches between shown and hidden
         * state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the io section visibility
         * @since API version 1
         */
        isIoSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the sends section of the mixer panel. Observers can be
         * registered on the returned object for receiving notifications when the sends section switches between
         * shown and hidden state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the sends section visibility
         * @since API version 1
         */
        isSendSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the clip launcher section of the mixer panel. Observers can be
         * registered on the returned object for receiving notifications when the clip launcher section switches
         * between shown and hidden state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the clip launcher section visibility
         * @since API version 1
         */
        isClipLauncherSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the devices section of the mixer panel. Observers can be
         * registered on the returned object for receiving notifications when the devices section switches between
         * shown and hidden state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the devices section visibility
         * @since API version 1
         */
        isDeviceSectionVisible(): SettableBooleanValue;

        /**
         * Gets an object that allows to show/hide the cross-fade section of the mixer panel. Observers can be
         * registered on the returned object for receiving notifications when the cross-fade section switches
         * between shown and hidden state.
         *
         * @return {SettableBooleanValue} a boolean value object that represents the cross-fade section visibility
         * @since API version 1
         */
        isCrossFadeSectionVisible(): SettableBooleanValue;

    }

    /**
     * This interface represents a modulation source in Bitwig Studio.
     *
     * @since API version 1
     */
    interface ModulationSource {
        /**
         * Value which reports when the modulation source is in mapping mode.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isMapping(): BooleanValue;

        /**
         * Toggles the modulation source between mapping mode and normal control functionality.
         *
         * @since API version 1
         */
        toggleIsMapping(): void;

        /**
         * Value the reports the name of the modulation source.
         *
         * @return {StringValue}
         * @since API version 2
         */
        name(): StringValue;

        /**
         * Value which reports if the modulation source is mapped to any destination(s).
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isMapped(): BooleanValue;

    }

    interface NoArgsCallback extends Callback {
        call(): void;

    }

    /**
     * Instances of this interface implement note input functionality used for recording notes in Bitwig Studio
     * and for playing the instruments in tracks on hardware keyboards. In Bitwig Studio the note inputs are shown
     * in the input choosers of Bitwig Studio tracks.
     *
     * @since API version 1
     */
    interface NoteInput {
        /**
         * Specifies if the note input should consume MIDI notes, or in other words if it should prevent forwarding
         * incoming notes to the MIDI callback registered in {@link MidiIn#setMidiCallback}. This setting is `true`
         * by default.
         *
         * @param shouldConsumeEvents
        `true` if note events should be consumed, `false` of the events should be additionally sent to
        the callback registered via {@link MidiIn#setMidiCallback}
         * @since API version 1
         */
        setShouldConsumeEvents(shouldConsumeEvents?: any): void;

        /**
         * Specifies a translation table which defines the actual key value (0-127) of notes arriving in Bitwig
         * Studio for each note key potentially received from the hardware. This is used for note-on/off and
         * polyphonic aftertouch events. Specifying a value of `-1` for a key means that notes with the key value
         * will be filtered out.
         *
         * Typically this method is used to implement transposition or scale features in controller scripts. By
         * default an identity transform table is configured, which means that all incoming MIDI notes keep their
         * original key value when being sent into Bitwig Studio.
         *
         * @param table
        an array which should contain 128 entries. Each entry should be a note value in the range
        [0..127] or -1 in case of filtering.
         * @since API version 1
         */
        setKeyTranslationTable(table?: any): void;

        /**
         * Specifies a translation table which defines the actual velocity value (0-127) of notes arriving in
         * Bitwig Studio for each note velocity potentially received from the hardware. This is used for note-on
         * events only.
         *
         * Typically this method is used to implement velocity curves or fixed velocity mappings in controller
         * scripts. By default an identity transform table is configured, which means that all incoming MIDI notes
         * keep their original velocity when being sent into Bitwig Studio.
         *
         * @param table
        an array which should contain 128 entries. Each entry should be a note value in the range
        [0..127] or -1 in case of filtering.
         * @since API version 1
         */
        setVelocityTranslationTable(table?: any): void;

        /**
         * Assigns polyphonic aftertouch MIDI messages to the specified note expression. Multi-dimensional control
         * is possible by calling this method several times with different MIDI channel parameters. If a key
         * translation table is configured by calling {@link #setKeyTranslationTable}, that table is used for
         * polyphonic aftertouch as well.
         *
         * @param channel
        the MIDI channel to map, range [0..15]
         * @param expression
        the note-expression to map for the given MIDI channel
         * @param pitchRange
        the pitch mapping range in semitones, values must be in the range [1..24]. This parameter is
        ignored for non-pitch expressions.
        @since API version 1
         */
        assignPolyphonicAftertouchToExpression(channel?: any, expression?: any, pitchRange?: any): void;

        /**
         * Enables use of Expressive MIDI mode. (note-per-channel)
         *
         * @param useExpressiveMidi
        enabled/disable the MPE mode for this note-input
         * @param baseChannel
        which channel (must be either 0 or 15) which is used as the base for this note-input
         * @param pitchBendRange
        initial pitch bend range used
         */
        setUseExpressiveMidi(useExpressiveMidi?: any, baseChannel?: any, pitchBendRange?: any): void;

        /**
         * Sends MIDI data directly to the note input. This will bypass both the event filter and translation
         * tables. The MIDI channel of the message will be ignored.
         *
         * @param status
        the status byte of the MIDI message
         * @param data0
        the data0 part of the MIDI message
         * @param data1
        the data1 part of the MIDI message
         * @since API version 1
         */
        sendRawMidiEvent(status?: any, data0?: any, data1?: any): void;

        /**
         * An enum defining the note expressions available in Bitwig Studio, used for the expression parameter of
         * {@link #assignPolyphonicAftertouchToExpression}.
         *
         * @since API version 1
         */
        NoteExpression: any;

    }

    /**
     * Instances of this interface are used to access the notes for a specific note key.
     *
     * @since API version 1
     */
    interface NoteLane {
        /**
         * Value which represents the id of this lane. is either the note pitch represented by this lane, or in
         * case of audio a lane index (currently always 0 in that case).
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        noteLaneId(): IntegerValue;

        /**
         * Value  that reports the name of the note lane. Typically the name of a note lane is
         * either equal to the title of an associated drum pad, or reflects the pitch of the note, e.g. "C#3".
         *
         * @return {StringValue}
         */
        name(): StringValue;

        /**
         * Value the color of the note lane. By default the reported color will be the
         * track color, or in case an associated drum pad has a custom color it will be the color of that pad
         *
         * @return {SettableColorValue}
         */
        color(): SettableColorValue;

        /**
         * Plays a note with the key of the note lane and the provided velocity parameter.
         *
         * @param velocity
        the velocity the note should be played with
         * @since API version 1
         */
        play(velocity?: any): void;

    }

    interface NotePlaybackCallback extends Callback {
        /**
         * @param {boolean} isNoteOn
         * @param {int} key
         * @param {float} velocity
         */
        notePlaybackEventOccurred(isNoteOn?: boolean, key?: number, velocity?: number): void;

    }

    /**
     * Bitwig Studio supports automatic visual feedback from controllers that shows up as popup notifications. For
     * example when the selected track or the current device preset was changed on the controller, these
     * notifications are shown, depending on the configuration.
     *
     * It depends both on the users preference and the capabilities of the controller hardware if a certain
     * notification should be shown. This interface provides functions for enabling/disabling the various kinds of
     * automatic notifications from the hardware point of view. Typically, controllers that include an advanced
     * display don't need to show many notifications additionally on screen. For other controllers that do not
     * include a display it might be useful to show all notifications. By default all notifications are disabled.
     *
     * In addition, the user can enable or disable all notifications the have been enabled using this interface in
     * the preferences dialog of Bitwig Studio.
     *
     * @since API version 1
     */
    interface NotificationSettings {
        /**
         * Returns an object that reports if user notifications are enabled and that allows to enable/disable user
         * notifications from the control surface. If user notifications are disabled, no automatic notifications
         * will be shown in the Bitwig Studio user interface. If user notifications are enabled, all automatic
         * notifications will be shown that are enabled using the methods of this interface.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getUserNotificationsEnabled(): SettableBooleanValue;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowSelectionNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowChannelSelectionNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowTrackSelectionNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowDeviceSelectionNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowDeviceLayerSelectionNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowPresetNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowMappingNotifications(shouldShowNotifications?: any): void;

        /**
         * Specifies if user notification related to selection changes should be shown. Please note that this
         * setting only applies when user notifications are enabled in general, otherwise no notification are
         * shown. By default this setting is `false`.
         *
         * @param shouldShowNotifications
        `true` in case selection notifications should be shown, `false` otherwise.
         * @since API version 1
         */
        setShouldShowValueNotifications(shouldShowNotifications?: any): void;

    }

    /**
     * @since API version 2
     */
    interface ObjectArrayValue extends Value {
        /**
         * @return {ObjectType[]}
         * @since API version 2
         */
        get(): object[];

    }

    /**
     * Interface for an object that acts as a proxy for the actual object in Bitwig Studio (for example a track, a device etc).
     *
     * @since API version 2
     */
    interface ObjectProxy extends Subscribable {
        /**
         * Returns a value object that indicates if the object being proxied exists, or if it has content.
         *
         * @return {BooleanValue}
         */
        exists(): BooleanValue;

    }

    interface ObjectValueChangedCallback extends ValueChangedCallback {
        /**
         * @param {ValueType} newValue
         */
        valueChanged(newValue?: any): void;

    }

    /**
     * Instances of this interface represent ranged parameters that can be controlled with automation in Bitwig
     * Studio.
     *
     * @since API version 1
     */
    interface Parameter extends SettableRangedValue {
        /**
         * Gets the current value of this parameter.
         *
         * @return {SettableRangedValue}
         * @since API version 2
         */
        value(): SettableRangedValue;

        /**
         * Gets the modulated value of this parameter.
         *
         * @return {RangedValue}
         * @since API version 2
         */
        modulatedValue(): RangedValue;

        /**
         * The name of the parameter.
         *
         * @return {StringValue}
         * @since API version 2
         */
        name(): StringValue;

        /**
         * Resets the value to its default.
         *
         * @since API version 1
         */
        reset(): void;

        /**
         * Touch (or un-touch) the value for automation recording.
         *
         * @param isBeingTouched
        `true` for touching, `false` for un-touching
         * @since API version 1
         */
        touch(isBeingTouched?: any): void;

        /**
         * Specifies if this value should be indicated as mapped in Bitwig Studio, which is visually shown as
         * colored dots or tinting on the parameter controls.
         *
         * @param shouldIndicate
        `true` in case visual indications should be shown in Bitwig Studio, `false` otherwise
         * @since API version 1
         */
        setIndication(shouldIndicate?: any): void;

        /**
         * Specifies a label for the mapped hardware parameter as shown in Bitwig Studio, for example in menu items
         * for learning controls.
         *
         * @param label
        the label to be shown in Bitwig Studio
         * @since API version 1
         */
        setLabel(label?: any): void;

        /**
         * Restores control of this parameter to automation playback.
         *
         * @since API version 1
         */
        restoreAutomationControl(): void;

    }

    /**
     * Defines a bank of parameters.
     *
     * @since API version 2
     */
    interface ParameterBank {
        /**
         * Gets the number of slots that these remote controls have.
         *
         * @return {int}
         * @since API version 2
         */
        getParameterCount(): number;

        /**
         * Returns the parameter at the given index within the bank.
         *
         * @param indexInBank
        the parameter index within this bank. Must be in the range [0..getParameterCount()-1].
         * @return {Parameter} the requested parameter
         * @since API version 2
         */
        getParameter(indexInBank?: any): Parameter;

    }

    /**
     * Interface that defines a cursor that can be "pinned".
     *
     * @since API version 2
     */
    interface PinnableCursor extends Cursor {
        /**
         * Determines if this cursor is currently pinned or not. If the cursor is pinned then it won't follow the
         * selection the user makes in the application.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isPinned(): SettableBooleanValue;

    }

    /**
     * Cursor that can be pinned to the current device or follow the selection.
     *
     * @since API version 2
     */
    interface PinnableCursorDevice extends CursorDevice {
    }

    /**
     * @since API version 2
     */
    interface PlayingNote {
        /**
         * @return {int}
         * @since API version 2
         */
        pitch(): number;

        /**
         * @return {int}
         * @since API version 2
         */
        velocity(): number;

    }

    /**
     * @since API version 2
     */
    interface PlayingNoteArrayValue extends ObjectArrayValue {
        /**
         * @param {int} note
         * @return {boolean}
         */
        isNotePlaying(note?: number): boolean;

    }

    /**
     * Object that represents the popup browser in Bitwig Studio.
     *
     * @since API version 2
     */
    interface PopupBrowser extends ObjectProxy {
        /**
         * The title of the popup browser.
         *
         * @return {StringValue}
         * @since API version 2
         */
        title(): StringValue;

        /**
         * Value that reports the possible content types that can be inserted by the popup browser. These are
         * represented by the tabs in Bitwig Studio's popup browser.
         *
         * (e.g "Device", "Preset", "Sample" etc.)
         *
         * @return {StringArrayValue}
         * @since API version 2
         */
        contentTypeNames(): StringArrayValue;

        /**
         * Value that represents the selected content type.
         *
         * @return {StringValue}
         * @since API version 2
         */
        selectedContentTypeName(): StringValue;

        /**
         * Value that represents the index of the selected content type within the content types supported.
         *
         * @return {SettableIntegerValue}
         * @since API version 2
         */
        selectedContentTypeIndex(): SettableIntegerValue;

        /**
         * The smart collections column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        smartCollectionColumn(): BrowserFilterColumn;

        /**
         * The location column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        locationColumn(): BrowserFilterColumn;

        /**
         * The device column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        deviceColumn(): BrowserFilterColumn;

        /**
         * The category column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        categoryColumn(): BrowserFilterColumn;

        /**
         * The tag column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        tagColumn(): BrowserFilterColumn;

        /**
         * The device type column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        deviceTypeColumn(): BrowserFilterColumn;

        /**
         * The file type column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        fileTypeColumn(): BrowserFilterColumn;

        /**
         * The creator column of the browser.
         *
         * @return {BrowserFilterColumn}
         * @since API version 2
         */
        creatorColumn(): BrowserFilterColumn;

        /**
         * Column that represents the results of the search.
         *
         * @return {BrowserResultsColumn}
         * @since API version 2
         */
        resultsColumn(): BrowserResultsColumn;

        /**
         * Value that indicates if the browser is able to audition material in place while browsing.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canAudition(): BooleanValue;

        /**
         * Value that decides if the browser is currently auditioning material in place while browsing or not.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        shouldAudition(): SettableBooleanValue;

        /**
         * Selects the next file.
         *
         * @since API version 2
         */
        selectNextFile(): void;

        /**
         * Selects the previous file.
         *
         * @since API version 2
         */
        selectPreviousFile(): void;

        /**
         * Selects the first file.
         *
         * @since API version 2
         */
        selectFirstFile(): void;

        /**
         * Selects the last file.
         *
         * @since API version 2
         */
        selectLastFile(): void;

        /**
         * Cancels the popup browser.
         *
         * @since API version 2
         */
        cancel(): void;

        /**
         * Commits the selected item in the popup browser.
         *
         * @since API version 2
         */
        commit(): void;

    }

    /**
     * This interface is used to store custom controller settings into the Bitwig Studio preferences. The settings
     * are shown to the user in the controller preferences dialog of Bitwig Studio.
     *
     * @since API version 1
     */
    interface Preferences extends Settings {
    }

    /**
     * An interface for representing the current project.
     *
     * @since API version 1
     */
    interface Project extends ObjectProxy {
        /**
         * Returns an object that represents the root track group of the active Bitwig Studio project.
         *
         * @return {Track} the root track group of the currently active project
         * @since API version 1
         */
        getRootTrackGroup(): Track;

        /**
         * Returns an object that represents the top level track group as shown in the arranger/mixer of the active
         * Bitwig Studio project.
         *
         * @return {Track} the shown top level track group of the currently active project
         * @since API version 1
         */
        getShownTopLevelTrackGroup(): Track;

        /**
         * Creates a new scene (using an existing empty scene if possible) from the clips that are currently
         * playing in the clip launcher.
         *
         * @since API version 1
         */
        createSceneFromPlayingLauncherClips(): void;

    }

    /**
     * Instances of this interface represent numeric values that have an upper and lower limit.
     *
     * @since API version 1
     */
    interface RangedValue extends Value {
        /**
         * The current value normalized between 0..1 where 0 represents the minimum value and 1 the maximum.
         *
         * @return {double}
         * @since API version 2
         */
        get(): number;

        /**
         * Gets the current value.
         *
         * @return {double}
         * @since API version 2
         */
        getRaw(): number;

        /**
         * Value that represents a formatted text representation of the value whenever the value changes.
         *
         * @return {StringValue}
         * @since API version 2
         */
        displayedValue(): StringValue;

        /**
         * Add an observer which receives the internal raw of the parameter as floating point.
         *
         * @param callback
        a callback function that receives a single numeric parameter with double precision.
         * @since API version 1
         */
        addRawValueObserver(callback?: (...args: any[]) => any): void;

    }

    /**
     * Instances of this interface are reported to the supplied script callback when connecting to a remote TCP
     * socket via {@link Host#connectToRemoteHost}.
     *
     * @see {@link Host#connectToRemoteHost}
     * @since API version 1
     */
    interface RemoteConnection {
        /**
         * Disconnects from the remote host.
         *
         * @since API version 1
         */
        disconnect(): void;

        /**
         * Registers a callback function that gets called when the connection gets lost or disconnected.
         *
         * @param callback
        a callback function that doesn't receive any parameters
         * @since API version 1
         */
        setDisconnectCallback(callback?: (...args: any[]) => any): void;

        /**
         * Sets the callback used for receiving data.
         *
         * The remote connection needs a header for each message sent to it containing a 32-bit big-endian integer
         * saying how big the rest of the message is. The data delivered to the script will not include this
         * header.
         *
         * @param callback
        a callback function with the signature `(byte[] data)`
         * @since API version 1
         */
        setReceiveCallback(callback?: (...args: any[]) => any): void;

        /**
         * Sends data to the remote host.
         *
         * @param data
        the byte array containing the data to be sent. When creating a numeric byte array in
        JavaScript, the byte values must be signed (in the range -128..127).
         * @throws IOException
         * @since API version 1
         */
        send(data?: any): void;

    }

    /**
     * Represents a remote control in Bitwig Studio.
     *
     * @sice API version 2
     */
    interface RemoteControl extends Parameter {
    }

    /**
     * Represents a page of remote controls in a device.
     *
     * @since API version 2
     */
    interface RemoteControlsPage extends ParameterBank {
    }

    /**
     * Instances of this interface represent a TCP socket that other network clients can connect to, typically
     * created by calling {@link Host#createRemoteConnection}.
     *
     * @see {@link Host#createRemoteConnection}
     * @since API version 1
     */
    interface RemoteSocket {
        /**
         * Sets a callback which receives a remote connection object for each incoming connection.
         *
         * @param callback
        a callback function which receives a single {@link RemoteConnection} argument
         * @since API version 1
         */
        setClientConnectCallback(callback?: (...args: any[]) => any): void;

        /**
         * Gets the actual port used for the remote socket, which might differ from the originally requested port
         * when calling {@link Host#createRemoteConnection(String name, int port)} in case the requested port was
         * already used.
         *
         * @return {int} the actual port used for the remote socket
         * @since API version 1
         */
        getPort(): number;

    }

    /**
     * Instances of this interface represent scenes in Bitwig Studio.
     *
     * @since API version 1
     */
    interface Scene extends ClipLauncherSlotOrScene {
        /**
         * Value that reports the number of clips in the scene.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        clipCount(): IntegerValue;

        /**
         * Registers an observer that reports if the scene is selected in Bitwig Studio.
         *
         * @param callback
        a callback function that takes a single boolean parameter.
         * @since API version 1
         */
        addIsSelectedInEditorObserver(callback?: (...args: any[]) => any): void;

        /**
         * Selects the scene in Bitwig Studio.
         *
         * @since API version 1
         */
        selectInEditor(): void;

        /**
         * Makes the scene visible in the Bitwig Studio user interface.
         *
         * @since API version 1
         */
        showInEditor(): void;

    }

    /**
     * A scene bank provides access to a range of scenes in Bitwig Studio. Instances of scene bank are configured
     * with a fixed number of scenes and represent an excerpt of a larger list of scenes. Various methods are
     * provided for scrolling to different sections of the scene list. It basically acts like a window moving over
     * the list of underlying scenes.
     *
     * To receive an instance of scene bank call
     * {@link com.bitwig.base.control_surface.iface.Host#createSceneBank}.
     *
     * @see {@link com.bitwig.base.control_surface.iface.Host#createSceneBank}
     * @since API version 1
     */
    interface SceneBank extends ClipLauncherSlotOrSceneBank {
        /**
         * Returns the scene at the given index within the bank.
         *
         * @param indexInBank
        the scene index within this bank, not the index within the list of all Bitwig Studio scenes.
        Must be in the range [0..sizeOfBank-1].
         * @return {Scene} the requested scene object
         * @since API version 1
         */
        getScene(indexInBank?: any): Scene;

        /**
         * Launches the scene with the given bank index.
         *
         * @param indexInWindow
        the scene index within the bank, not the position of the scene withing the underlying full
        list of scenes.
         * @since API version 1
         */
        launchScene(indexInWindow?: any): void;

    }

    /**
     * Interface for something that can be scrolled.
     *
     * @since API version 2
     */
    interface Scrollable {
        /**
         * Value that reports the current scene scroll position.
         *
         * @return {SettableIntegerValue}
         * @since API version 2
         */
        scrollPosition(): SettableIntegerValue;

        /**
         * Scrolls by a number of steps.
         *
         * @param amount
        The number of steps to scroll by (positive is forwards and negative is backwards).
         */
        scrollBy(amount?: any): void;

        /**
         * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with 1
         *
         * @since API version 2
         */
        scrollForwards(): void;

        /**
         * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with -1
         *
         * @since API version 2
         */
        scrollBackwards(): void;

        /**
         * Scrolls by a number of pages.
         *
         * @param amount
        The number of pages to scroll by (positive is forwards and negative is backwards).
         */
        scrollByPages(amount?: any): void;

        /**
         * Scrolls forwards by one page.
         *
         * @since API version 2
         */
        scrollPageForwards(): void;

        /**
         * Scrolls backwards by one page.
         *
         * @since API version 2
         */
        scrollPageBackwards(): void;

        /**
         * Value that reports if it is possible to scroll the bank backwards or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollBackwards(): BooleanValue;

        /**
         * Value that reports if it is possible to scroll the bank forwards or not.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        canScrollForwards(): BooleanValue;

    }

    interface Send extends Parameter {
        /**
         * Value that reports the color of the channel that this send sends to.
         *
         * @return {SettableColorValue}
         * @since API version 2
         */
        sendChannelColor(): SettableColorValue;

    }

    interface SendBank extends Bank {
    }

    interface SettableBeatTimeValue extends BeatTimeValue {
    }

    /**
     * Instances of this interface represent boolean values.
     *
     * @since API version 1
     */
    interface SettableBooleanValue extends BooleanValue {
        /**
         * Sets the internal value.
         *
         * @param value
        the new boolean value.
         * @since API version 1
         */
        set(value?: any): void;

        /**
         * Toggles the current state. In case the current value is `false`, the new value will be `true` and the
         * other way round.
         *
         * @since API version 1
         */
        toggle(): void;

    }

    interface SettableColorValue extends ColorValue {
        /**
         * Sets the internal value.
         *
         * @param {float} red
         * @param {float} green
         * @param {float} blue
         * @since API version 2
         */
        set(red?: number, green?: number, blue?: number): void;

    }

    interface SettableDoubleValue extends DoubleValue {
        /**
         * Sets the internal value.
         *
         * @param value
        the new integer value.
         * @since API version 1
         */
        set(value?: any): void;

        /**
         * Increases/decrease the internal value by the given amount.
         *
         * @param amount
        the integer amount to increase
         * @since API version 1
         */
        inc(amount?: any): void;

    }

    /**
     * Instances of this interface represent enumeration values. Enum values work similar to string values, but
     * are limited to a fixed set of value options.
     *
     * @since API version 1
     */
    interface SettableEnumValue extends EnumValue {
        /**
         * Sets the value to the enumeration item with the given name.
         *
         * @param name
        the name of the new enum item
         * @since API version 1
         */
        set(name?: any): void;

    }

    /**
     * Instances of this interface represent integer values.
     *
     * @since API version 1
     */
    interface SettableIntegerValue extends IntegerValue {
        /**
         * Sets the internal value.
         *
         * @param value
        the new integer value.
         * @since API version 1
         */
        set(value?: any): void;

        /**
         * Increases/decrease the internal value by the given amount.
         *
         * @param amount
        the integer amount to increase
         * @since API version 1
         */
        inc(amount?: any): void;

    }

    /**
     * Instances of this interface represent numeric values that have an upper and lower limit.
     *
     * @since API version 1
     */
    interface SettableRangedValue extends RangedValue {
        /**
         * Sets the value in an absolute fashion as a value between 0 .. 1 where 0 represents the minimum value and
         * 1 the maximum.
         *
         * @param value
        absolute value [0 .. 1]
         * @since API version 2
         */
        set(value?: any): void;

        /**
         * Increments or decrements the value by a normalized amount assuming the whole range of the value is 0 ..
         * 1. For example to increment by 10% you would use 0.1 as the increment.
         *
         * @param {double} increment
         * @since API version 2
         */
        inc(increment?: number): void;

        /**
         * Set the internal (raw) value.
         *
         * @param value
        the new value with double precision. Range is undefined.
         * @since API version 1
         */
        setRaw(value?: any): void;

        /**
         * Increments / decrements the internal (raw) value.
         *
         * @param delta
        the amount that the current internal value get increased by.
         * @since API version 1
         */
        incRaw(delta?: any): void;

    }

    /**
     * @since API version 2
     */
    interface SettableStringArrayValue extends StringArrayValue {
        /**
         * Sets the internal value.
         *
         * @param value
        the new value.
         * @since API version 2
         */
        set(value?: any): void;

    }

    /**
     * Instances of this interface implement the {@link Value} interface for string values.
     *
     * @since API version 1
     */
    interface SettableStringValue extends StringValue {
        /**
         * Sets the value object to the given string.
         *
         * @param value
        the new value string
         * @since API version 1
         */
        set(value?: any): void;

    }

    /**
     * A common base interface for labeled and categorized settings.
     *
     * @since API version 1
     */
    interface Setting {
        /**
         * Returns the category name of the setting.
         *
         * @return {string} a string value containing the category name
         * @since API version 1
         */
        getCategory(): string;

        /**
         * Returns the label text of the setting.
         *
         * @return {string} a string value containing the label text
         * @since API version 1
         */
        getLabel(): string;

        /**
         * Marks the settings as enabled in Bitwig Studio. By default the setting is enabled.
         *
         * @since API version 1
         */
        enable(): void;

        /**
         * Marks the settings as disabled in Bitwig Studio. By default the setting is enabled.
         *
         * @since API version 1
         */
        disable(): void;

        /**
         * Shows the setting in Bitwig Studio. By default the setting is shown.
         *
         * @since API version 1
         */
        show(): void;

        /**
         * Hides the setting in Bitwig Studio. By default the setting is shown.
         *
         * @since API version 1
         */
        hide(): void;

    }

    /**
     * This interface builds the foundation for storing custom settings in Bitwig Studio documents or in the
     * Bitwig Studio preferences.
     *
     * @since API version 1
     */
    interface Settings {
        /**
         * Returns a signal setting object, which is shown a push button with the given label in Bitwig Studio.
         *
         * @param label
        the name of the setting, must not be `null`
         * @param category
        the name of the category, may not be `null`
         * @param action
        the action string as displayed on the related Bitwig Studio button, must not be `null`
         * @return {Signal} the object that encapsulates the requested signal
        @since API version 1
         */
        getSignalSetting(label?: any, category?: any, action?: any): Signal;

        /**
         * Returns a numeric setting that is shown a number field in Bitwig Studio.
         *
         * @param label
        the name of the setting, must not be `null`
         * @param category
        the name of the category, may not be `null`
         * @param minValue
        the minimum value that the user is allowed to enter
         * @param maxValue
        the minimum value that the user is allowed to enter
         * @param stepResolution
        the step resolution used for the number field
         * @param unit
        the string that should be used to display the unit of the number
         * @param initialValue
        the initial numeric value of the setting
         * @return {SettableRangedValue} the object that encapsulates the requested numeric setting
        @since API version 1
         */
        getNumberSetting(label?: any, category?: any, minValue?: any, maxValue?: any, stepResolution?: any, unit?: any, initialValue?: any): SettableRangedValue;

        /**
         * Returns an enumeration setting that is shown either as a chooser or as a button group in Bitwig Studio,
         * depending on the number of provided options.
         *
         * @param label
        the name of the setting, must not be `null`
         * @param category
        the name of the category, may not be `null`
         * @param options
        the string array that defines the allowed options for the button group or chooser
         * @param initialValue
        the initial string value, must be one of the items specified with the option argument
         * @return {SettableEnumValue} the object that encapsulates the requested enum setting
        @since API version 1
         */
        getEnumSetting(label?: any, category?: any, options?: any, initialValue?: any): SettableEnumValue;

        /**
         * Returns a textual setting that is shown as a text field in the Bitwig Studio user interface.
         *
         * @param label
        the name of the setting, must not be `null`
         * @param category
        the name of the category, may not be `null`
         * @param numChars
        the maximum number of character used for the text value
         * @param initialText
        the initial text value of the setting
         * @return {SettableStringValue} the object that encapsulates the requested string setting
        @since API version 1
         */
        getStringSetting(label?: any, category?: any, numChars?: any, initialText?: any): SettableStringValue;

    }

    interface ShortMidiReceivedCallback extends Callback {
        /**
         * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
         *
         * @param {int} statusByte
         * @param {int} data1
         * @param {int} data2
         */
        midiReceived(statusByte?: number, data1?: number, data2?: number): void;

    }

    /**
     * A generic interface used to implement actions or events that are not associated with a value.
     *
     * @since API version 1
     */
    interface Signal {
        /**
         * Registers an observer that gets notified when the signal gets fired.
         *
         * @param callback
        a callback function that does not receive any argument.
         * @since API version 1
         */
        addSignalObserver(callback?: (...args: any[]) => any): void;

        /**
         * Fires the action or event represented by the signal object.
         *
         * @since API version 1
         */
        fire(): void;

    }

    /**
     * Instances of this interface represent the state of a solo button.
     *
     * @since API version 1
     */
    interface SoloValue extends SettableBooleanValue {
    }

    /**
     * Instance of this class represent sources selectors in Bitwig Studio, which are shown as choosers in the
     * user interface and contain entries for either note inputs or audio inputs or both.
     *
     * The most prominent source selector in Bitwig Studio is the one shown in the track IO section, which can be
     * accessed via the API by calling {@link Track#getSourceSelector()}.
     *
     * @since API version 1
     */
    interface SourceSelector extends ObjectProxy {
        /**
         * Returns an object that indicates if the source selector has note inputs enabled.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getHasNoteInputSelected(): SettableBooleanValue;

        /**
         * Returns an object that indicates if the source selector has audio inputs enabled.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getHasAudioInputSelected(): SettableBooleanValue;

    }

    interface StepDataChangedCallback extends Callback {
        /**
         * A callback function that receives three parameters: 1. the x (step) coordinate within the note grid
         * (integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer value that
         * indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts playing (`2`).
         *
         * @param {int} x
         * @param {int} y
         * @param {int} state
         */
        stepStateChanged(x?: number, y?: number, state?: number): void;

    }

    /**
     * @since API version 2
     */
    interface StringArrayValue extends ObjectArrayValue {
    }

    interface StringArrayValueChangedCallback extends ObjectValueChangedCallback {
    }

    interface StringValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {string}
         * @since API version 2
         */
        get(): string;

        /**
         * Gets the current value and tries to intelligently limit it to the supplied length in the best way
         * possible.
         *
         * @param {int} maxLength
         * @return {string}
         * @since API version 2
         */
        getLimited(maxLength?: number): string;

    }

    interface StringValueChangedCallback extends ObjectValueChangedCallback {
    }

    /**
     * Interface for an object that can be 'subscribed' or not. An active object will notify any observers when
     * changes occur to it. When it is unsubscribed the observers will no longer be notified. A driver can use this to
     * say which objects it is interested in and which ones it is not (for example in one mode the driver may not
     * be interested in track meters). This allows the driver to improve efficiency by only getting notified about
     * changes that are really relevant to it.
     *
     * @since API version 2
     */
    interface Subscribable {
        /**
         * Determines if this object is currently 'active'. In the active state it will notify any observers
         * registered on it.
         *
         * @return {boolean}
         */
        isSubscribed(): boolean;

        /**
         * Sets whether the driver currently considers this object 'active' or not.
         *
         * @param {boolean} value
         */
        setIsSubscribed(value?: boolean): void;

        subscribe(): void;

        unsubscribe(): void;

    }

    interface SysexStringReceivedCallback extends Callback {
        /**
         * @param data
        The data encoded as a hex string
         */
        sysexDataReceived(data?: any): void;

    }

    /**
     * Instances of this interface represent time signature values.
     *
     * @since API version 1
     */
    interface TimeSignatureValue extends Value {
        /**
         * Gets the current value.
         *
         * @return {string}
         * @since API version 2
         */
        get(): string;

        /**
         * Updates the time signature according to the given string.
         *
         * @param name
        a textual representation of the new time signature value, formatted as
        `numerator/denominator[, ticks]`
         * @since API version 1
         */
        set(name?: any): void;

        /**
         * Returns an object that provides access to the time signature numerator.
         *
         * @return {SettableIntegerValue} an integer value object that represents the time signature numerator.
         * @since API version 1
         */
        getNumerator(): SettableIntegerValue;

        /**
         * Returns an object that provides access to the time signature denominator.
         *
         * @return {SettableIntegerValue} an integer value object that represents the time signature denominator.
         * @since API version 1
         */
        getDenominator(): SettableIntegerValue;

        /**
         * Returns an object that provides access to the time signature tick subdivisions.
         *
         * @return {SettableIntegerValue} an integer value object that represents the time signature ticks.
         * @since API version 1
         */
        getTicks(): SettableIntegerValue;

    }

    /**
     * Instances of this interface represent tracks in Bitwig Studio.
     *
     * @since API version 1
     */
    interface Track extends Channel {
        /**
         * Value that reports the position of the track within the list of Bitwig Studio tracks.
         *
         * @return {IntegerValue}
         * @since API version 2
         */
        position(): IntegerValue;

        /**
         * Returns an object that can be used to access the clip launcher slots of the track.
         *
         * @return {ClipLauncherSlotBank} an object that represents the clip launcher slots of the track
         * @since API version 2
         */
        clipLauncherSlotBank(): ClipLauncherSlotBank;

        /**
         * Returns an object that provides access to the arm state of the track.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getArm(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the monitoring state of the track.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getMonitor(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the auto-monitoring state of the track.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getAutoMonitor(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the cross-fade mode of the track.
         *
         * @return {SettableEnumValue} an enum value object that has three possible states: "A", "B", or "AB"
         * @since API version 1
         */
        getCrossFadeMode(): SettableEnumValue;

        /**
         * Value that reports if this track is currently stopped. When a track is stopped it is not playing content
         * from the arranger or clip launcher.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isStopped(): BooleanValue;

        /**
         * Value that reports if the clip launcher slots are queued for stop.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isQueuedForStop(): BooleanValue;

        /**
         * Returns the source selector for the track, which is shown in the IO section of the track in Bitwig
         * Studio and lists either note or audio sources or both depending on the track type.
         *
         * @return {SourceSelector} a source selector object
         * @since API version 1
         */
        getSourceSelector(): SourceSelector;

        /**
         * Stops playback of the track.
         *
         * @since API version 1
         */
        stop(): void;

        /**
         * Calling this method causes the arrangement sequencer to take over playback.
         *
         * @since API version 1
         */
        returnToArrangement(): void;

        /**
         * Updates the name of the track.
         *
         * @param name
        the new track name
         * @since API version 1
         */
        setName(name?: any): void;

        /**
         * Registers an observer that reports names for note key values on this track. The track might provide
         * special names for certain keys if it contains instruments that support that features, such as the Bitwig
         * Drum Machine.
         *
         * @param callback
        a callback function that receives two arguments: 1. the key value in the range [0..127], and
        2. the name string
         * @since API version 1
         */
        addPitchNamesObserver(callback?: (...args: any[]) => any): void;

        /**
         * Plays a note on the track with a default duration and the given key and velocity.
         *
         * @param key
        the key value of the played note
         * @param velocity
        the velocity of the played note
         * @since API version 1
         */
        playNote(key?: any, velocity?: any): void;

        /**
         * Starts playing a note on the track with the given key and velocity.
         *
         * @param key
        the key value of the played note
         * @param velocity
        the velocity of the played note
         * @since API version 1
         */
        startNote(key?: any, velocity?: any): void;

        /**
         * Stops playing a currently played note.
         *
         * @param key
        the key value of the playing note
         * @param velocity
        the note-off velocity
         * @since API version 1
         */
        stopNote(key?: any, velocity?: any): void;

        /**
         * Sends a MIDI message to the hardware device.
         *
         * @param status
        the status byte of the MIDI message
         * @param data1
        the data1 part of the MIDI message
         * @param data2
        the data2 part of the MIDI message
        @since API version 2
         */
        sendMidi(status?: any, data1?: any, data2?: any): void;

        /**
         * Value that reports the track type. Possible reported track types are `Group`, `Instrument`, `Audio`,
         * `Hybrid`, `Effect` or `Master`.
         *
         * @return {StringValue}
         * @since API version 2
         */
        trackType(): StringValue;

        /**
         * Value that reports if the track may contain child tracks, which is the case for group tracks.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isGroup(): BooleanValue;

        /**
         * Returns an object that indicates if the track may contain notes.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getCanHoldNoteData(): SettableBooleanValue;

        /**
         * Returns an object that indicates if the track may contain audio events.
         *
         * @return {SettableBooleanValue} a boolean value object
         * @since API version 1
         */
        getCanHoldAudioData(): SettableBooleanValue;

        /**
         * Returns an object that provides access to the cursor item of the track's device selection as shown in
         * the Bitwig Studio user interface.
         *
         * @return {CursorDevice} the requested device selection cursor object
        @since API version 1
         */
        createCursorDevice(): CursorDevice;

        /**
         * Returns a track bank with the given number of child tracks, sends and scenes. The track bank will only
         * have content if the connected track is a group track.<br/>
         *
         * A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
         * including their sends and scenes, that can be scrolled in order to access different parts of the track
         * list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>
         *
         * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
         * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
         * contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
         * The track bank returned by this function provides a convenient interface for controlling which tracks
         * are currently shown on the hardware.<br/>
         *
         * Creating a track bank using this method will consider all tracks in the document, including effect
         * tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
         * you are only interested in tracks of a certain kind.
         *
         * @param numTracks
        the number of child tracks spanned by the track bank
         * @param numSends
        the number of sends spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @param hasFlatTrackList
        specifies whether the track bank should operate on a flat list of all nested child tracks or
        only on the direct child tracks of the connected group track.
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createTrackBank(numTracks?: any, numSends?: any, numScenes?: any, hasFlatTrackList?: any): TrackBank;

        /**
         * Returns a track bank with the given number of child tracks, sends and scenes. Only audio tracks,
         * instrument tracks and hybrid tracks are considered. The track bank will only have content if the
         * connected track is a group track. For more information about track banks and the `bank pattern` in
         * general, see the documentation for {@link #createTrackBank}.
         *
         * @param numTracks
        the number of child tracks spanned by the track bank
         * @param numSends
        the number of sends spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @param hasFlatTrackList
        specifies whether the track bank should operate on a flat list of all nested child tracks or
        only on the direct child tracks of the connected group track.
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createMainTrackBank(numTracks?: any, numSends?: any, numScenes?: any, hasFlatTrackList?: any): TrackBank;

        /**
         * Returns a track bank with the given number of child effect tracks and scenes. Only effect tracks are
         * considered. The track bank will only have content if the connected track is a group track. For more
         * information about track banks and the `bank pattern` in general, see the documentation for
         * {@link #createTrackBank}.
         *
         * @param numTracks
        the number of child tracks spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @param hasFlatTrackList
        specifies whether the track bank should operate on a flat list of all nested child tracks or
        only on the direct child tracks of the connected group track.
         * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
         * @since API version 1
         */
        createEffectTrackBank(numTracks?: any, numScenes?: any, hasFlatTrackList?: any): TrackBank;

        /**
         * Returns an object that represents the master track of the connected track group. The returned object
         * will only have content if the connected track is a group track.
         *
         * @param numScenes
        the number of scenes for bank-wise navigation of the master tracks clip launcher slots.
         * @return {MasterTrack} an object representing the master track of the connected track group.
         * @since API version 1
         */
        createMasterTrack(numScenes?: any): MasterTrack;

        /**
         * Returns a bank of sibling tracks with the given number of tracks, sends and scenes. For more information
         * about track banks and the `bank pattern` in general, see the documentation for {@link #createTrackBank}.
         *
         * @param numTracks
        the number of child tracks spanned by the track bank
         * @param numSends
        the number of sends spanned by the track bank
         * @param numScenes
        the number of scenes spanned by the track bank
         * @param shouldIncludeEffectTracks
        specifies whether effect tracks should be included
         * @param shouldIncludeMasterTrack
        specifies whether the master should be included
         * @return {TrackBank} an object for bank-wise navigation of sibling tracks
         * @since API version 1
         */
        createSiblingsTrackBank(numTracks?: any, numSends?: any, numScenes?: any, shouldIncludeEffectTracks?: any, shouldIncludeMasterTrack?: any): TrackBank;

    }

    /**
     * A track bank provides access to a range of tracks and their scenes (clip launcher slots) in Bitwig Studio.
     * Instances of track bank are configured with a fixed number of tracks and scenes and represent an excerpt of
     * a larger list of tracks and scenes. Various methods are provided for scrolling to different sections of the
     * track/scene list. It basically acts like a 2-dimensional window moving over the grid of tracks and scenes.
     *
     * To receive an instance of track bank that supports all kinds of tracks call {@link Host#createTrackBank}.
     * Additional methods are provided in the {@link Host} interface to create track banks that include only main
     * tracks ({@link Host#createMainTrackBank}) or only effect tracks ({@link Host#createEffectTrackBank}).
     *
     * @see {@link Host#createTrackBank}
     * @see {@link Host#createMainTrackBank}
     * @see {@link Host#createEffectTrackBank}
     * @since API version 1
     */
    interface TrackBank extends ChannelBank {
        /**
         * {@link SceneBank} that represents a view on the screnes in this {@link TrackBank}.
         *
         * @return {SceneBank}
         * @since API version 2
         */
        sceneBank(): SceneBank;

        /**
         * Scrolls the scenes one page down.
         *
         * @since API version 1
         */
        scrollScenesPageDown(): void;

        /**
         * Scrolls the scenes one step up.
         *
         * @since API version 1
         */
        scrollScenesUp(): void;

        /**
         * Scrolls the scenes one step down.
         *
         * @since API version 1
         */
        scrollScenesDown(): void;

        /**
         * Makes the scene with the given position visible in the track bank.
         *
         * @param position
        the position of the scene within the underlying full list of scenes
         * @since API version 1
         */
        scrollToScene(position?: any): void;

        /**
         * Registers an observer that reports the current scene scroll position.
         *
         * @param callback
        a callback function that takes a single integer parameter
         * @param valueWhenUnassigned
        the default value that gets reports when the track bank is not yet connected to a Bitwig
        Studio document
         * @since API version 1
         */
        addSceneScrollPositionObserver(callback?: (...args: any[]) => any, valueWhenUnassigned?: any): void;

        /**
         * Causes this bank to follow the supplied cursor. When the cursor moves to a new item the bank will be
         * scrolled so that the cursor is within the bank, if possible.
         *
         * @param cursorTrack
        The {@link CursorTrack} that this bank should follow.
         * @since API version 2
         */
        followCursorTrack(cursorTrack?: any): void;

    }

    /**
     * An interface representing the transport section in Bitwig Studio.
     *
     * @since API version 1
     */
    interface Transport extends ObjectProxy {
        /**
         * Starts playback in the Bitwig Studio transport.
         *
         * @since API version 1
         */
        play(): void;

        /**
         * Stops playback in the Bitwig Studio transport.
         *
         * @since API version 1
         */
        stop(): void;

        /**
         * Toggles the transport playback state between playing and stopped.
         *
         * @since API version 1
         */
        togglePlay(): void;

        /**
         * When the transport is stopped, calling this function starts transport playback, otherwise the transport
         * is first stopped and the playback is restarted from the last play-start position.
         *
         * @since API version 1
         */
        restart(): void;

        /**
         * Starts recording in the Bitwig Studio transport.
         *
         * @since API version 1
         */
        record(): void;

        /**
         * Rewinds the Bitwig Studio transport to the beginning of the arrangement.
         *
         * @since API version 1
         */
        rewind(): void;

        /**
         * Calling this function is equivalent to pressing the fast forward button in the Bitwig Studio transport.
         *
         * @since API version 1
         */
        fastForward(): void;

        /**
         * When calling this function multiple times, the timing of those calls gets evaluated and causes
         * adjustments to the project tempo.
         *
         * @since API version 1
         */
        tapTempo(): void;

        /**
         * Value that reports if the Bitwig Studio transport is playing.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isPlaying(): SettableBooleanValue;

        /**
         * Value that reports if the Bitwig Studio transport is recording.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isArrangerRecordEnabled(): SettableBooleanValue;

        /**
         * Value that reports if overdubbing is enabled in Bitwig Studio.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isArrangerOverdubEnabled(): SettableBooleanValue;

        /**
         * Value reports if clip launcher overdubbing is enabled in Bitwig Studio.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isClipLauncherOverdubEnabled(): SettableBooleanValue;

        /**
         * Value that reports the current automation write mode. Possible values are `"latch"`, `"touch"` or
         * `"write"`.
         *
         * @return {SettableEnumValue}
         * @since API version 2
         */
        automationWriteMode(): SettableEnumValue;

        /**
         * Value that reports if automation write is currently enabled for the arranger.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isArrangerAutomationWriteEnabled(): SettableBooleanValue;

        /**
         * Value that reports if automation write is currently enabled on the clip launcher.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isClipLauncherAutomationWriteEnabled(): SettableBooleanValue;

        /**
         * Value that indicates if automation override is currently on.
         *
         * @return {BooleanValue}
         * @since API version 2
         */
        isAutomationOverrideActive(): BooleanValue;

        /**
         * Value that indicates if the loop is currently active or not.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isArrangerLoopEnabled(): SettableBooleanValue;

        /**
         * Value that reports if punch-in is enabled in the Bitwig Studio transport.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isPunchInEnabled(): SettableBooleanValue;

        /**
         * Value that reports if punch-in is enabled in the Bitwig Studio transport.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isPunchOutEnabled(): SettableBooleanValue;

        /**
         * Value that reports if the metronome is enabled in Bitwig Studio.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isMetronomeEnabled(): SettableBooleanValue;

        /**
         * Value that reports if the metronome has tick playback enabled.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isMetronomeTickPlaybackEnabled(): SettableBooleanValue;

        /**
         * Value that reports the metronome volume.
         *
         * @return {SettableRangedValue}
         * @since API version 2
         */
        metronomeVolume(): SettableRangedValue;

        /**
         * Value that reports if the metronome is audible during pre-roll.
         *
         * @return {SettableBooleanValue}
         * @since API version 2
         */
        isMetronomeAudibleDuringPreRoll(): SettableBooleanValue;

        /**
         * Value that reports the current pre-roll setting. Possible values are `"none"`, `"one_bar"`,
         * `"two_bars"`, or `"four_bars"`.
         *
         * @return {SettableEnumValue}
         * @since API version 2
         */
        preRoll(): SettableEnumValue;

        /**
         * Toggles the latch automation write mode in the Bitwig Studio transport.
         *
         * @since API version 1
         */
        toggleLatchAutomationWriteMode(): void;

        /**
         * Toggles the arranger automation write enabled state of the Bitwig Studio transport.
         *
         * @since API version 1
         */
        toggleWriteArrangerAutomation(): void;

        /**
         * Toggles the clip launcher automation write enabled state of the Bitwig Studio transport.
         *
         * @since API version 1
         */
        toggleWriteClipLauncherAutomation(): void;

        /**
         * Resets any automation overrides in Bitwig Studio.
         *
         * @since API version 1
         */
        resetAutomationOverrides(): void;

        /**
         * Switches playback to the arrangement sequencer on all tracks.
         *
         * @since API version 1
         */
        returnToArrangement(): void;

        /**
         * Returns an object that provides access to the project tempo.
         *
         * @return {Parameter} the requested tempo value object
         * @since API version 1
         */
        tempo(): Parameter;

        /**
         * Increases the project tempo value by the given amount, which is specified relative to the given range.
         *
         * @param amount
        the new tempo value relative to the specified range. Values should be in the range
        [0..range-1].
         * @param range
        the range of the provided amount value
         * @since API version 1
         */
        increaseTempo(amount?: any, range?: any): void;

        /**
         * Returns an object that provides access to the transport position in Bitwig Studio.
         *
         * @return {SettableBeatTimeValue} a beat time object that represents the transport position
         * @since API version 1
         */
        getPosition(): SettableBeatTimeValue;

        /**
         * Sets the transport playback position to the given beat time value.
         *
         * @param beats
        the new playback position in beats
         * @since API version 1
         */
        setPosition(beats?: any): void;

        /**
         * Increases the transport position value by the given number of beats, which is specified relative to the
         * given range.
         *
         * @param beats
        the beat time value that gets added to the current transport position. Values have double
        precision and can be positive or negative.
         * @param snap
        when `true` the actual new transport position will be quantized to the beat grid, when `false`
        the position will be increased exactly by the specified beat time
         * @since API version 1
         */
        incPosition(beats?: any, snap?: any): void;

        /**
         * Returns an object that provides access to the punch-in position in the Bitwig Studio transport.
         *
         * @return {SettableBeatTimeValue} a beat time object that represents the punch-in position
         * @since API version 1
         */
        getInPosition(): SettableBeatTimeValue;

        /**
         * Returns an object that provides access to the punch-out position in the Bitwig Studio transport.
         *
         * @return {SettableBeatTimeValue} a beat time object that represents the punch-out position
         * @since API version 1
         */
        getOutPosition(): SettableBeatTimeValue;

        /**
         * Returns an object that provides access to the cross-fader, used for mixing between A/B-channels as
         * specified on the Bitwig Studio tracks.
         *
         * @return {Parameter}
         * @since API version 1
         */
        getCrossfade(): Parameter;

        /**
         * Returns an object that provides access to the transport time signature.
         *
         * @return {TimeSignatureValue} the time signature value object that represents the transport time signature.
         * @since API version 1
         */
        getTimeSignature(): TimeSignatureValue;

        /**
         * Value that reports the current clip launcher post recording action. Possible values are `"off"`,
         * `"play_recorded"`, `"record_next_free_slot"`, `"stop"`, `"return_to_arrangement"`,
         * `"return_to_previous_clip"` or `"play_random"`.
         *
         * @return {SettableEnumValue}
         * @since API version 2
         */
        clipLauncherPostRecordingAction(): SettableEnumValue;

        /**
         * Returns an object that provides access to the clip launcher post recording time offset.
         *
         * @return {SettableBeatTimeValue} a beat time object that represents the post recording time offset
         * @since API version 1
         */
        getClipLauncherPostRecordingTimeOffset(): SettableBeatTimeValue;

    }

    /**
     * Instances of this interface represent a bank of custom controls that can be manually learned to device
     * parameters by the user.
     *
     * @since API version 1
     */
    interface UserControlBank {
        /**
         * Gets the user control at the given bank index.
         *
         * @param index
        the index of the control within the bank
         * @return {Parameter} the requested user control object
         * @since API version 1
         */
        getControl(index?: any): Parameter;

    }

    /**
     * The common interface that is shared by all value objects in the controller API.
     *
     * @since API version 1
     */
    interface Value extends Subscribable {
        /**
         * Marks this value as being of interest to the driver.
         *
         * @since API version 2
         */
        markInterested(): void;

        /**
         * Registers an observer that reports the current value.
         *
         * @param callback
        a callback function that receives a single parameter
         * @since API version 1
         */
        addValueObserver(callback?: (...args: any[]) => any): void;

    }

    interface ValueChangedCallback extends Callback {
    }

}

declare const host: API.Host;
declare const loadAPI: typeof host.loadAPI;
declare const load: typeof host.load;
declare const println: typeof host.println;
declare const errorln: typeof host.errorln;
declare function dump(obj: any): void;
