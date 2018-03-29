// Type definitions for command-line-usage 5.0
// Project: https://github.com/75lb/command-line-usage#readme
// Definitions by: Andrija Dvorski <https://github.com/Dvorsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace commandLineUsage {
    interface Section {
        list: string[];

        add(content: object): void;
        emptyLine(): void;
        header(text: string): void;
        toString(): string;
    }

    interface SectionData {
        optionList?: OptionListData[];
        hide?: string[];
        group?: string[];
        header?: string;
        reverseNameOrder?: boolean;
        tableOptions?: any;
    }

    interface OptionListData extends SectionData {
        name: string;
        typeLabel?: string;
        description?: string;
    }

    interface ContentSectionData extends SectionData {
        content: string;
        raw?: boolean;
    }

    type CommandLineUsageInput =
        SectionData
        | SectionData[]
        | OptionListData
        | OptionListData[]
        | ContentSectionData
        | ContentSectionData[];
}

declare function commandLineUsage(sections: commandLineUsage.CommandLineUsageInput): string | undefined | commandLineUsage.Section;

export = commandLineUsage;
