import {
    Accordion,
    Checkbox,
    CodeSnippet,
    ContentSwitcher,
    CopyButton,
    DataTable,
    DataTableV2,
    DatePicker,
    Dropdown,
    FileUploader,
    FloatingMenu,
    HeaderNav,
    HeaderSubmenu,
    InlineLoading,
    Loading,
    Modal,
    NavigationMenu,
    Notification,
    NumberInput,
    OverflowMenu,
    Pagination,
    PaginationNav,
    ProductSwitcher,
    ProgressIndicator,
    Search,
    settings,
    SideNav,
    Slider,
    StructuredList,
    Tab,
    TextInput,
    Tile,
    Toolbar,
    Tooltip,
    TooltipSimple,
} from "carbon-components";

const accordion = new Accordion(document.getElementById("root")!, { selectorAccordionContent: "" });

accordion._checkIfButton();
accordion._handleKeypress({});
accordion._toggle(document.getElementById("root")!);
Accordion.components;
Accordion.options;

const checkbox = new Checkbox(document.getElementById("root")!);

checkbox._handleBlur();
checkbox._handleClick();
checkbox._handleFocus();
checkbox._indeterminateCheckbox();
checkbox._initCheckbox();
checkbox.setDisabled(true);
checkbox.setState(false);

settings.prefix; // $ExpectType string
settings.selectorFocusable; // $ExpectType string
settings.selectorTabbable; // $ExpectType string

const tooltip = new Tooltip(document.getElementById("tooltip")!, { classShown: "tooltip" });

tooltip.changeState("", {}, () => {});

const tableEl = document.getElementById("table")!;
const datatable = new DataTableV2(tableEl, { selectorActionCancel: "" });

datatable.activateSearch(tableEl);
