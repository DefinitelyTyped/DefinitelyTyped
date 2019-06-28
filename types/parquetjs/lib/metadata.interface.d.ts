import Int64 = require('node-int64');

export interface MetadataInterface {
    version: number;
    schema: MetadataSchemaInterface[];
    num_rows: Int64;
    row_groups: MetadataRowGroupsInterface[];
    key_value_metadata: object[];
    created_by: string;
}

export interface MetadataSchemaInterface {
    type: number;
    type_length: number;
    repetition_type: string;
    name: string;
    num_children: number;
    converted_type: string;
    scale: number;
    precision: number;
    field_id: number;
}

export interface MetadataRowGroupsInterface {
    columns: MetadataRowGroupsColumnsInterface[];
    total_byte_size: Int64;
    num_rows: Int64;
    sorting_columns: string[];
}

export interface MetadataRowGroupsColumnsInterface {
    file_path: string;
    file_offset: Int64;
    meta_data: {
        type: number;
        encodings: number[];
        path_in_schema: string[];
        codec: number;
        num_values: Int64;
        total_uncompressed_size: Int64;
        total_compressed_size: Int64;
        key_value_metadata: any;
        data_page_offset: Int64;
        index_page_offset: Int64;
        dictionary_page_offset: Int64;
        statistics: any;
        encoding_stats: any;
    };
}
