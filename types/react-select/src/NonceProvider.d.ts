import { Component } from 'react';

export interface NonceProviderProps {
    nonce: string;
    cacheKey: string;
}

export class NonceProvider extends Component<NonceProviderProps> {}
