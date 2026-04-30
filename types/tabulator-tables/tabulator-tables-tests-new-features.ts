/**
 * Tests for newly added Tabulator type definitions
 * These tests verify the high-priority fixes identified in the type review
 */

import { Tabulator, ColumnDefinition, Options } from 'tabulator-tables';

// Test 1: tooltipDelay option in OptionsGeneral
const tableWithTooltipDelay = new Tabulator("#table", {
    tooltipDelay: 500, // Custom delay in milliseconds
});

const tableWithDefaultTooltip = new Tabulator("#table2", {
    tooltipDelay: 300, // Default value
});

// Test 2: paginationOutOfRange option in OptionsPagination
const tableWithPaginationOutOfRange = new Tabulator("#table", {
    pagination: true,
    paginationOutOfRange: false, // Do nothing
});

const tableWithPaginationFunction = new Tabulator("#table", {
    pagination: true,
    paginationOutOfRange: (lastPage, currentPage) => {
        console.log(`Last page: ${lastPage}, Current: ${currentPage}`);
    },
});

const tableWithPaginationValue = new Tabulator("#table", {
    pagination: true,
    paginationOutOfRange: "first", // Jump to first page
});

const tableWithPaginationNumber = new Tabulator("#table", {
    pagination: true,
    paginationOutOfRange: 1, // Jump to specific page
});

// Test 3: selectableRangeAutoFocus and selectableRangeBlurEditOnNavigate options
const tableWithRangeOptions = new Tabulator("#table", {
    selectableRange: true,
    selectableRangeAutoFocus: true,
    selectableRangeBlurEditOnNavigate: false,
});

const tableWithRangeDisabled = new Tabulator("#table", {
    selectableRange: true,
    selectableRangeAutoFocus: false,
    selectableRangeBlurEditOnNavigate: true,
});

// Test 4: Mutator import options in ColumnDefinition
const columnsWithImportMutator: ColumnDefinition[] = [
    {
        title: "Name",
        field: "name",
        mutatorImport: (value, data, type, params) => {
            return value.toUpperCase();
        },
        mutatorImportParams: {
            transform: "uppercase"
        },
    },
    {
        title: "Age",
        field: "age",
        mutateLink: true, // Enable linked mutation
    },
    {
        title: "Email",
        field: "email",
        mutateLink: "phone", // Link to specific field
    },
];

const tableWithImportMutators = new Tabulator("#table", {
    columns: columnsWithImportMutator,
});

// Test 5: Header mouse event callbacks
const columnsWithHeaderEvents: ColumnDefinition[] = [
    {
        title: "Interactive Header",
        field: "data",
        headerMouseEnter: (e, column) => {
            console.log("Mouse entered header");
        },
        headerMouseLeave: (e, column) => {
            console.log("Mouse left header");
        },
        headerMouseOver: (e, column) => {
            console.log("Mouse over header");
        },
        headerMouseOut: (e, column) => {
            console.log("Mouse out of header");
        },
        headerMouseMove: (e, column) => {
            console.log("Mouse moving over header");
        },
    },
];

const tableWithHeaderEvents = new Tabulator("#table", {
    columns: columnsWithHeaderEvents,
});

// Test 6: Column-level popup options
const columnsWithPopups: ColumnDefinition[] = [
    {
        title: "With Popups",
        field: "data",
        // Header popups
        headerPopup: "<div>Header popup content</div>",
        headerPopupIcon: "<span>🔍</span>",
        headerContextPopup: (e, component, onRendered) => {
            return "<div>Right-click menu</div>";
        },
        headerClickPopup: "Click popup",
        headerDblClickPopup: (e, component, onRendered) => {
            onRendered();
            return "<div>Double-click popup</div>";
        },
        // Cell popups
        contextPopup: "<div>Cell right-click popup</div>",
        clickPopup: (e, component, onRendered) => {
            return `<div>Clicked cell: ${component.getValue()}</div>`;
        },
        dblClickPopup: "Double-click cell popup",
    },
    {
        title: "Icon Popup",
        field: "status",
        headerPopupIcon: (component) => {
            return component.getDefinition().title === "Icon Popup" 
                ? "<span>✓</span>" 
                : "<span>✗</span>";
        },
    },
];

const tableWithPopups = new Tabulator("#table", {
    columns: columnsWithPopups,
});

// Test 7: Updated import() method signature
const table = new Tabulator("#table", {
    columns: [{ title: "Data", field: "data" }],
});

// Import with format string
table.import("csv", ".csv");
table.import("csv", [".csv", ".txt"]);
table.import("json", ".json", "text");

// Import with custom importer function
table.import(
    (data: string) => {
        return JSON.parse(data);
    },
    ".json",
    "text"
);

// Import with all parameters
table.import("csv", ".csv", "buffer").then(() => {
    console.log("Import complete");
});

// Import with minimal parameters
table.import().then(() => {
    console.log("Import with defaults");
});

// Test 8: Comprehensive options test combining all new features
const comprehensiveOptions: Options = {
    // New tooltip option
    tooltipDelay: 400,
    
    // New pagination option
    pagination: true,
    paginationOutOfRange: (lastPage, currentPage) => {
        return lastPage; // Go to last page
    },
    
    // New selectable range options
    selectableRange: true,
    selectableRangeAutoFocus: true,
    selectableRangeBlurEditOnNavigate: false,
    
    // Columns with new features
    columns: [
        {
            title: "Comprehensive Column",
            field: "data",
            
            // Import mutators
            mutatorImport: (value) => value.toString(),
            mutatorImportParams: { type: "string" },
            mutateLink: "relatedField",
            
            // Header mouse events
            headerMouseEnter: (e, col) => {},
            headerMouseLeave: (e, col) => {},
            headerMouseOver: (e, col) => {},
            headerMouseOut: (e, col) => {},
            headerMouseMove: (e, col) => {},
            
            // Popups
            headerPopup: "Header info",
            headerPopupIcon: "📊",
            headerContextPopup: (e, c, r) => "Context menu",
            headerClickPopup: "Click info",
            headerDblClickPopup: "Double-click info",
            contextPopup: "Cell context",
            clickPopup: "Cell click",
            dblClickPopup: "Cell double-click",
        },
    ],
};

const comprehensiveTable = new Tabulator("#comprehensive-table", comprehensiveOptions);

// Test 9: Type checking for optional parameters
const optionalParamsTable = new Tabulator("#table", {
    tooltipDelay: undefined, // Should accept undefined
    paginationOutOfRange: false, // Should accept false
    selectableRangeAutoFocus: undefined, // Should accept undefined
});

// Test 10: Popup with different return types
const mixedPopupColumn: ColumnDefinition = {
    title: "Mixed",
    field: "mixed",
    headerPopup: (e, component, onRendered) => {
        // Can return string
        if (Math.random() > 0.5) {
            return "<div>String popup</div>";
        }
        // Or can return any (for HTMLElement, etc.)
        const div = document.createElement("div");
        div.textContent = "Element popup";
        return div;
    },
};

console.log("All new type tests passed!");
