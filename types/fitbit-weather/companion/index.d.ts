export function setup(configuration: Configuration): void;

export interface Configuration {
    provider: number;
    apiKey: string;
}

export interface ProvidersCodes {
    openweathermap: number;
    darksky: number;
    weatherbit: number;
}
export const Providers: ProvidersCodes;
