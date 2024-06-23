export type CompanyIdentifier = { id: string } | { company_id: string };

export interface Company {
    readonly "type": "company";
    readonly "id": string;
    readonly app_id?: string | undefined;
    company_id?: string | undefined;
    plan?: string | { type: string; id: string; name: string } | undefined;
    remote_created_at?: number | undefined;
    name?: string | undefined;
    readonly "updated_at": number;
    readonly "created_at": number;
    size?: number | undefined;
    website?: string | undefined;
    industry?: string | undefined;
    monthly_spend?: number | undefined;
    session_count?: number | undefined;
    user_count?: number | undefined;
    custom_attributes?: {
        [key: string]: any;
    } | undefined;
}

export interface List {
    "type": "company.list";
    "total_count": number;
    "companies": Array<Company & CompanyIdentifier>;
    "pages": { "next"?: string | undefined; "page": number; "per_page": number; "total_pages": number };
}
