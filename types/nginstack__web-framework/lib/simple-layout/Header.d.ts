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
    onAfterComplement: Event;
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
            mailObject?: Mail;
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
    export { groupFilters, Event, Mail, SimpleLayout, Visualization };
}
type SimpleLayout = import('./SimpleLayout');
type Event = import('@nginstack/engine/lib/event/Event');
type Visualization = import('../dsv/Visualization');
type Mail = import('@nginstack/engine/lib/mail/Mail');
declare function groupFilters(filters: any): any[];
