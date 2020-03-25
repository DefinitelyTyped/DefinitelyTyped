export type AdminIdentifier = { id: string } | { admin_id: string } | { email: string };

export interface Avatar {
    type: 'avatar';
    image_url: string | null;
}

export interface Admin {
    type: 'admin';
    readonly id: string;
    email: string | null;
    app_id?: string;
    name: string | null;
    job_title: string | null;
    away_mode_enabled: boolean;
    away_mode_reassign: boolean;
    has_inbox_seat: boolean;
    team_ids?: string[];
    avatar?: Avatar;
}

export interface List {
    type: 'admin.list';
    total_count: number;
    users: Admin[];
    pages: { next?: string; page: number; per_page: number; total_pages: number };
}
