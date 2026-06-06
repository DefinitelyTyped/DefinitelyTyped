export interface Customer {
    id: string;
    external_id: string | null;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    meta: any;
    created: number;
    updated: number;
}
