export function fetch(age: number): Promise<Result>;

export interface Result {
    temperatureC: number;
    temperatureF: number;
    location: string;
    description: string;
    isDay: boolean;
    conditionCode: number;
    realConditionCode: string;
    sunrise: number;
    sunset: number;
    timestamp: number;
}
