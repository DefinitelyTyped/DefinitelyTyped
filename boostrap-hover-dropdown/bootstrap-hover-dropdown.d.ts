interface BootstrapHoverDropdownOptions {
    delay?: number;
    instantlyCloseOthers?: boolean;
}

interface JQuery {
    dropdownHover(options?: BootstrapHoverDropdownOptions): JQuery;
}