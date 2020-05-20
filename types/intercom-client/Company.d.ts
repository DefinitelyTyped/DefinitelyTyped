
export type CompanyIdentifier = { id: string } | { company_id: string }

export interface Company {
    readonly "type": "company",
    readonly "id": string,
    readonly app_id?: string,
    company_id?: string,
    plan?: string | { type: string, id: string, name: string },
    remote_created_at?: number,
    name?: string,
    readonly "updated_at": number,
    readonly "created_at": number,
    size?: number,
    website?: string,
    industry?: string,
    monthly_spend?: number,
    session_count?: number, 
    user_count?: number,
    custom_attributes?: {
        [key: string]: any
    },
    
}

export interface List {
    "type": "company.list",
    "total_count": number,
    "companies": (Company & CompanyIdentifier)[],
    "pages": { "next"?: string, "page": number, "per_page": number, "total_pages": number }
}
