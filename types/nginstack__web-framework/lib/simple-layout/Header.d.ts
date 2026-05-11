export = Header;
declare function Header(): void;
declare class Header {
    filtersDisplay: string;
    showDateTime: boolean;
    showEnterpriseName: boolean;
    showUserAndDatabaseName: boolean;
    complement: string;
    useTagsAsLiterals: boolean;
    visible: boolean;
    autoSanitize: boolean;
    writePlain(
        sender: SimpleLayout,
        outputObj: {
            write: (arg0: string) => any;
            newLine: () => any;
        },
        options: {
            leftMargin: number;
            calculatedWidth: number;
            currentPage: number;
            filters?: Array<{
                label: string;
                group: string;
                value: any;
            }>;
        },
    ): void;
    onAfterComplement: Event;
    private sanitize_;
    writeHtml(
        sender: Visualization | SimpleLayout,
        outputObj: {
            write: (arg0: string) => any;
        },
        options?: {
            colspan?: number;
            enterpriseLogo?: number;
            mailObject?: Email;
            filters?: Array<{
                label: string;
                group: string;
                value: any;
            }>;
        },
    ): void;
    private MAX_FILTER_VALUE_SIZE_;
    formatFiltersToHeader(
        filters: FilterDef[],
        convertTagsToLiterals: boolean,
        showAll: boolean,
    ): string;
}
declare namespace Header {
    export { Email, Event, FilterDef, groupFilters, SimpleLayout, Visualization };
}
declare function groupFilters(filters: any): any[];
type Event = import("@nginstack/engine/lib/event/Event");
type Email = import("@nginstack/engine/lib/email/Email");
type SimpleLayout = import("./SimpleLayout");
type Visualization = import("../dsv/Visualization");
type FilterDef = import("../simple-layout/SimpleLayout").FilterDef;
