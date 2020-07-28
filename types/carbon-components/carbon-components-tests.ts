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
    SideNav,
    Slider,
    StructuredList,
    Tab,
    TextInput,
    Tile,
    Toolbar,
    Tooltip,
    TooltipSimple,
    settings,
} from 'carbon-components';

const accordion = new Accordion(document.getElementById('root'), {});

accordion._checkIfButton();
accordion._handleKeypress({});
accordion._toggle(document.getElementById('root'));

const checkbox = new Checkbox(document.getElementById('root'), {});

checkbox._handleBlur();
checkbox._handleClick();
checkbox._handleFocus();
checkbox._indeterminateCheckbox();
checkbox._initCheckbox();
checkbox.setDisabled(true);
checkbox.setState({ disabled: true });

settings.prefix; // $ExpectType string
settings.selectorFocusable; // $ExpectType string
settings.selectorTabbable; // $ExpectType string
