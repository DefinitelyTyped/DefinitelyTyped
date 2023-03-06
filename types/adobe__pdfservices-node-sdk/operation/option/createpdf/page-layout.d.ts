/**
 * Class for specifying the layout of a page.
 */
export class PageLayout {
    pageHeight: number;
    pageWidth: number;
    /**
     * Sets a custom page size.<br>
     * Page size and orientation can also be set using paged media CSS which overrides the SDK Page Layout settings.
     */
    setPageSize(pageWidth: number, pageHeight: number): void;
}
