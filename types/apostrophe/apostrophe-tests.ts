import { AposModuleOptions } from "apostrophe";

type CustomModules = "first-custom-widgets";

const firstCustomWidgetOptions: AposModuleOptions = {
    extend: "apostrophe-widgets",
    label: "First Custom Widget",
    addFields: [
        {
            name: "title",
            label: "Custom Widget Title",
            type: "string"
        }
    ]
};

const secondCustomWidgetOptions: AposModuleOptions<CustomModules> = {
    extend: "first-custom-widgets",
    label: "Second Custom Widget",
    addFields: [
        {
            name: "title",
            label: "Custom Widget Title",
            type: "string"
        }
    ]
};
