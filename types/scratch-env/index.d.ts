type ValueOf<ObjectType> = ObjectType[keyof ObjectType];

/** All the metadata needed to register an extension. */
interface ExtensionMetadata {
    /** A unique alphanumeric identifier for this extension. No special characters allowed. */
    id: string;

    /** The human-readable name of this extension. */
    name?: string | undefined;

    /** URI for an image to be placed on each block in this extension. Data URI ok. */
    blockIconURI?: string | undefined;

    /** URI for an image to be placed on this extension's category menu item. Data URI ok. */
    menuIconURI?: string | undefined;

    /** Link to documentation content for this extension. */
    docsURI?: string | undefined;

    /** The blocks provided by this extension and the separators. */
    blocks: Array<ExtensionBlockMetadata | string>;

    /** Map of menu name to metadata for each of this extension's menus. */
    menus?: Record<string, ExtensionMenuMetadata> | undefined;
}

/** All the metadata needed to register an extension block. */
interface ExtensionBlockMetadata {
    /** A unique alphanumeric identifier for this block. No special characters allowed. */
    opcode: string;

    /** The name of the function implementing this block. Can be shared by other blocks/opcodes. */
    func?: string | undefined;

    /** The type of block (command, reporter, etc.) being described. */
    blockType: ValueOf<Scratch.BlockType>;

    /** The text on the block, with [PLACEHOLDERS] for arguments. */
    text: string;

    /** Whether this block should not appear in the block palette. */
    hideFromPalette?: boolean | undefined;

    /** Whether the block ends a stack - no blocks can be connected after it. */
    isTerminal?: boolean | undefined;

    /** Whether this block is a reporter but should not allow a monitor. */
    disableMonitor?: boolean | undefined;

    /** If this block is a reporter, this is the scope/context for its value. */
    reporterScope?: ReporterScope | undefined;

    /** Whether a hat block is edge-activated. */
    isEdgeActivated?: boolean | undefined;

    /** Whether a hat/event block should restart existing threads. */
    shouldRestartExistingThreads?: boolean | undefined;

    /** For flow control blocks, the number of branches/substacks for this block. */
    branchCount?: number | undefined;

    /** Map of argument placeholder to metadata about each arg. */
    arguments?: Record<string, ExtensionArgumentMetadata> | undefined;
}

/** All the metadata needed to register an argument for an extension block. */
interface ExtensionArgumentMetadata {
    /** The type of the argument (number, string, etc.) */
    type: ValueOf<Scratch.ArgumentType>;

    /** The default value of this argument. */
    defaultValue?: any;

    /** The name of the menu to use for this argument, if any. */
    menu?: string | undefined;
}

/** All the metadata needed to register an extension drop-down menu. */
type ExtensionMenuMetadata = ExtensionDynamicMenu | ExtensionMenuItems;

/** The string name of a function which returns menu items. */
type ExtensionDynamicMenu = string;

/** Items in an extension menu. */
type ExtensionMenuItems = Array<ExtensionMenuItemSimple | ExtensionMenuItemComplex>;

/** A menu item for which the label and value are identical strings. */
type ExtensionMenuItemSimple = string;

/** A menu item for which the label and value can differ. */
interface ExtensionMenuItemComplex {
    /** The value of the block argument when this menu item is selected. */
    value: any;

    /** The human-readable label of this menu item in the menu. */
    text: string;
}

declare class ScratchExtension {
    /** Returns data about the extension. */
    getInfo(): ExtensionMetadata;
}

/** Indicate the scope for a reporter's value. */
declare enum ReporterScope {
    /** This reporter's value is global and does not depend on context. */
    GLOBAL = "global",

    /**
     * This reporter's value is specific to a particular target/sprite.
     * Another target may have a different value or may not even have a value.
     */
    TARGET = "target",
}

declare namespace Scratch {
    namespace extensions {
        /** Register an extension. */
        function register(extension: ScratchExtension): void;
    }

    /** Block argument types. */
    enum ArgumentType {
        /** Numeric value with angle picker. */
        ANGLE = "angle",

        /** Boolean value with hexagonal placeholder. */
        BOOLEAN = "Boolean",

        /** Numeric value with color picker. */
        COLOR = "color",

        /** Numeric value with text field. */
        NUMBER = "number",

        /** String value with text field. */
        STRING = "string",

        /** String value with matrix field. */
        MATRIX = "matrix",

        /** MIDI note number with note picker (piano) field. */
        NOTE = "note",

        /** Inline image on block (as part of the label). */
        IMAGE = "image",
    }

    /** Types of blocks. */
    enum BlockType {
        /** Boolean reporter with hexagonal shape. */
        BOOLEAN = "Boolean",

        /** A button (not an actual block) for some special action, like making a variable. */
        BUTTON = "button",

        /** Command block. */
        COMMAND = "command",

        /**
         * Specialized command block which may or may not run a child branch.
         * The thread continues with the next block whether or not a child branch ran.
         */
        CONDITIONAL = "conditional",

        /**
         * Specialized hat block with no implementation function.
         * This stack only runs if the corresponding event is emitted by other code.
         */
        EVENT = "event",

        /** Hat block which conditionally starts a block stack. */
        HAT = "hat",

        /**
         * Specialized command block which may or may not run a child branch.
         * If a child branch runs, the thread evaluates the loop block again.
         */
        LOOP = "loop",

        /** General reporter with numeric or string value. */
        REPORTER = "reporter",
    }

    /** Default types of target supported by the VM. */
    enum TargetType {
        /** Rendered target which can move, change costumes, etc. */
        SPRITE = "sprite",

        /** Rendered target which cannot move but can change backdrops. */
        STAGE = "stage",
    }
}
