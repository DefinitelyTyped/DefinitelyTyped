export = Header;
declare function Header(): void;
declare class Header {
    private cssExtractor_;
    filtersDisplay: string;
    mustIncludeCssFiles: boolean;
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
        }
    ): void;
    onAfterComplement: any;
    private sanitize_;
    writeHtml(
        sender: Visualization | SimpleLayout,
        outputObj: {
            write: (arg0: string) => any;
        },
        opt_options?: {
            colspan?: number;
            css?: string;
            enterpriseLogo?: number;
            layoutId?: number;
            mailObject?: Email;
            filters?: Array<{
                label: string;
                group: string;
                value: any;
            }>;
        }
    ): void;
    private MAX_FILTER_VALUE_SIZE_;
    formatFiltersToHeader(
        filters: Array<{
            label: string;
            group: string;
            value: any;
        }>,
        convertTagsToLiterals: boolean,
        showAll: boolean
    ): string;
}
declare namespace Header {
    export { groupFilters, Event, Email, SimpleLayout, Visualization };
}
declare function groupFilters(filters: any): any[];
type Event = any;
type Email = any;
type SimpleLayout = import('./SimpleLayout');
type Visualization = import('../dsv/Visualization');
