export interface Meta {
}

export interface MetaError {
    urn?: string;
}


export interface MetaPaginated {
    totalRecords: number;
    totalPages: number;
}
  

export interface Links {
    self: string;
}

export interface LinksPaginated {
    self: string;
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
}