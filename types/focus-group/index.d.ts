declare namespace createFocusGroup {
    type FocusGroupTriggers = Partial<
        Pick<
            KeyboardEvent,
            | "altKey"
            | "charCode"
            | "code"
            | "ctrlKey"
            | "isComposing"
            | "key"
            | "keyCode"
            | "location"
            | "metaKey"
            | "repeat"
            | "shiftKey"
            | "DOM_KEY_LOCATION_STANDARD"
            | "DOM_KEY_LOCATION_LEFT"
            | "DOM_KEY_LOCATION_RIGHT"
            | "DOM_KEY_LOCATION_NUMPAD"
        >
    >;

    interface FocusGroupMember {
        /**
         * The DOM node.
         */
        node: Element;
        /**
         * The text that should be associated with the node for letter-navigation.
         */
        text?: string;
    }

    interface FocusGroupOptions {
        /**
         * Designate initial members of the group.
         *
         * @defaultValue `[]`
         */
        members?: ReadonlyArray<Element> | NodeListOf<Element> | FocusGroupMember[];
        /**
         * Specify which key events should move the focus forward, back, to the first member, or to the last member through the group.
         *
         * @defaultValue
         * ```
         * {
         *   next: { keyCode: 40 }, // ArrowDown
         *   prev: { keyCode: 38 }, // ArrowUp
         * }
         * ```
         */
        keybindings?: Partial<Record<"next" | "prev" | "first" | "last", FocusGroupTriggers | FocusGroupTriggers[]>>;
        /**
         * If true, when the arrow keys are moving focus they will wrap around the group.
         */
        wrap?: boolean;
        /**
         * If true, string searching is enabled.
         *
         * @defaultValue `false`
         */
        stringSearch?: boolean;
        /**
         * The number of milliseconds that should elapse between the user's last letter entry (with the keyboard) and a refresh of the string search.
         * @defaultValue `800`
         */
        stringSearchDelay?: number;
    }

    interface FocusGroup {
        /**
         * Start this group listening to keyboard events and responding accordingly.
         */
        activate(): FocusGroup;
        /**
         * Stop this group listening to keyboard events.
         */
        deactivate(): FocusGroup;
        /**
         * Add a member to the group.
         */
        addMember(member: Element | FocusGroupMember, index?: number): FocusGroup;
        /**
         * Remove a member from the group.
         */
        removeMember(member: Element | number): FocusGroup;
        /**
         * Empty the focus group of members.
         */
        clearMembers(): FocusGroup;
        /**
         * Set the focus group's members (clearing any that already exist).
         */
        setMembers(members: ReadonlyArray<Element> | NodeListOf<Element> | FocusGroupMember[]): FocusGroup;
        /**
         * Returns the focus group's current array of members.
         */
        getMembers(): FocusGroupMember[];
        /**
         * Focuses the node at a particular index in the focus group's member array.
         * If no member exists at that index, does nothing.
         */
        focusNodeAtIndex(index: number): FocusGroup;
        /**
         * Moves the focus forward one member, if focus is already within the group.
         * If focus is not within the group, does nothing.
         */
        moveFocusForward(): number;
        /**
         * Moves the focus back one member, if focus is already within the group.
         * If focus is not within the group, does nothing.
         */
        moveFocusBack(): number;
    }
}

/**
 * Returns a new focus group instance.
 */
declare function createFocusGroup(options: createFocusGroup.FocusGroupOptions): createFocusGroup.FocusGroup;

export = createFocusGroup;
