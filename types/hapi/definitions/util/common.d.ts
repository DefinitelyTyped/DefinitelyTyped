
/**
 *  User-extensible type for application specific state.
 */
export interface ApplicationState {	
}

export type PeekListener = (chunk: string, encoding: string) => void;