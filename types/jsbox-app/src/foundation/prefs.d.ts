// JSBox Prefs API TypeScript Declaration

declare namespace PrefsTypes {
    // Types for prefs.json structure (optional, based on your usage)
    interface PrefsJson {
        title: string;
        groups: PrefsGroup[];
    }

    interface PrefsGroup {
        title: string;
        items: allPrefsItemTypes[];
    }

    interface PrefsItem {
        title: string;
        type: string;
        // type: string, password, number, boolean,
        // slider, list, info, link, script, child.
        key: string;
        value?: any;
        placeholder?: string;
        insetGrouped?: boolean;
        inline?: boolean;
        // ... other properties based on the type
    }

    interface PrefsItemString extends PrefsItem {
        type: "string";
    }

    interface PrefsItemPassword extends PrefsItem {
        type: "password";
    }

    interface PrefsItemNumber extends PrefsItem {
        type: "number";
    }

    interface PrefsItemBoolean extends PrefsItem {
        type: "boolean";
    }

    interface PrefsItemSlider extends PrefsItem {
        type: "slider";
    }

    interface PrefsItemList extends PrefsItem {
        type: "list";
        items: string[];
    }

    interface PrefsItemInfo extends PrefsItem {
        type: "info";
    }

    interface PrefsItemLink extends PrefsItem {
        type: "link";
    }

    interface PrefsItemScript extends PrefsItem {
        type: "script";
        script: string;
    }

    interface PrefsItemChild extends PrefsItem {
        type: "child";
        items: allPrefsItemTypes[];
    }

    type allPrefsItemTypes =
        | PrefsItemString
        | PrefsItemPassword
        | PrefsItemNumber
        | PrefsItemBoolean
        | PrefsItemSlider
        | PrefsItemList
        | PrefsItemInfo
        | PrefsItemLink
        | PrefsItemScript
        | PrefsItemChild;
}

interface JBPrefs {
    get(key: string): any;
    set(key: string, value: any): void;
    all(): { [key: string]: any };
    open(callback: () => void): void;
    edit(config: PrefsTypes.PrefsJson): Promise<PrefsTypes.PrefsJson>;
}

declare const $prefs: JBPrefs;
