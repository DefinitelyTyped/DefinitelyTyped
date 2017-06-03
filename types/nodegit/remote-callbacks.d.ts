export interface RemoteCallbacks {
    version?: number;
    credentials?: Function;
    certificateCheck?: Function;
    transferProgress?: Function;
    transport?: Function;
    payload?: void;
}
