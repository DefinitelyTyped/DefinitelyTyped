declare enum KeyType {
    Public = 'public',
    Secret = 'secret',
}

declare enum HttpMethod {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Delete = 'delete',
}
  
export interface Log {
    log_id: string,
    time: number,
    version: string,
    key_used: KeyType,
    sandbox: boolean,
    token_id: string,
    url: string,
    secure: boolean,
    method: HttpMethod,
    ip_address: string,
    status_code: number,
    request: any,
    response: any,
}
