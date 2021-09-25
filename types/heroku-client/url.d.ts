export interface RequestURL {
    host: string;
    port: number;
    secure: boolean;
}

export default function(url: string): RequestURL;
