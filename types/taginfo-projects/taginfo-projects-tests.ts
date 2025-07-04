import type * as Taginfo from "taginfo-projects";

const schema: Taginfo.Schema = {
    data_updated: "20190919T123456Z",
    data_format: 1,
    project: {
        name: "example",
        description: "example",
        contact_email: "example",
        contact_name: "example",
        project_url: "example",
    },
    tags: [
        { key: "highway", value: "primary", object_types: ["node", "relation"] },
    ],
};
