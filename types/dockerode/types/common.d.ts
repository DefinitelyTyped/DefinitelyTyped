export type Callback<T> = (error?: Error, result?: T) => void;

export interface AuthConfig {
    username?: string;
    password?: string;
    email?: string;
    serveraddress?: string;
}

export type AuthConfigData = AuthConfig | { key: string } | { base64: string };

export interface Driver {
    Name: string;
    Options?: Record<string, string>;
}

export type GenericResources = Array<{
    NamedResourceSpec?: {
        Kind?: string;
        Value?: string;
    };
    DiscreteResourceSpec?: {
        Kind?: string;
        Value?: number;
    };
}>;

export interface GraphDriverData {
    Name: string;
    Data: Record<string, string>;
}

export interface HealthConfig {
    Test?: string[];
    Interval?: number;
    Timeout?: number;
    Retries?: number;
    StartPeriod?: number;
}

export interface Mount {
    Target?: string;
    Source?: string;
    Type?: 'bind' | 'volume' | 'tmpfs';
    ReadOnly?: boolean;
    Consistency?: string;
    BindOptions?: {
        Propagation?: 'private' | 'rprivate' | 'shared' | 'rshared' | 'slave' | 'rslave';
    };
    VolumeOptions?: {
        NoCopy?: boolean;
        Labels?: Record<string, string>;
        DriverConfig?: {
            Name?: string;
            Options?: Record<string, string>;
        };
    };
    TmpfsOptions?: {
        SizeBytes?: number;
        Mode?: number;
    };
}

export interface ObjectVersion {
    Index?: number;
}

export interface Platform {
    Architecture?: string;
    OS?: string;
}

export interface ResourceObject {
    NanoCPUs?: number;
    MemoryBytes?: number;
    GenericResources?: GenericResources;
}

export interface TLSInfo {
    TrustRoot?: string;
    CertIssuerSubject?: string;
    CertIssuerPublicKey?: string;
}

export interface LogsOptions {
    follow?: boolean;
    stdout?: boolean;
    stderr?: boolean;
    since?: number;
    until?: number;
    timestamps?: boolean;
    tail?: string;
}

export interface ResizeOptions {
    h?: number;
    w?: number;
}
