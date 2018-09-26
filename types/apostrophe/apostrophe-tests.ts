import { AposModuleOptions } from "apostrophe";

const testModuleOptions: AposModuleOptions = {
    extend: "apostrophe-widgets",
    label: "Test Widget",
    addFields: [
        {
            name: "title",
            label: "Test Title",
            type: "string",
            required: true
        }
    ]
};
