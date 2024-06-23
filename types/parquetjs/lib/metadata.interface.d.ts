import Int64 = require("node-int64");

export interface MetadataInterface {
    version: number;
    schema: MetadataSchemaInterface[];
    num_rows: Int64;
    row_groups: MetadataRowGroupsInterface[];
    key_value_metadata: Array<{ key: string; value: string }>;
    created_by: string;
}

export interface MetadataSchemaInterface {
    type: number | null;
    type_length: number | null;
    repetition_type: string | null;
    name: string;
    num_children: number | null;
    converted_type: string | null;
    scale: number | null;
    precision: number | null;
    field_id: number | null;
}

export interface MetadataRowGroupsInterface {
    columns: MetadataRowGroupsColumnsInterface[];
    total_byte_size: Int64;
    num_rows: Int64;
    sorting_columns: string[] | string[][] | null;
}

export interface MetadataRowGroupsColumnsInterface {
    file_path: string | null;
    file_offset: Int64;
    meta_data: {
        type: number | null;
        encodings: number[] | null;
        path_in_schema: string[] | string[][] | null;
        codec: number | null;
        num_values: Int64 | null;
        total_uncompressed_size: Int64 | null;
        total_compressed_size: Int64 | null;
        key_value_metadata: Array<{ key: string; value: string }> | null;
        data_page_offset: Int64 | null;
        index_page_offset: Int64 | null;
        dictionary_page_offset: Int64 | null;
        statistics: any;
        encoding_stats: any;
    };
}
