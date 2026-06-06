import * as app from "fitbit-weather/app";

app.fetch(60)
    .then(result => {
        const temperatureC: number = result.temperatureC;
        const temperatureF: number = result.temperatureF;
        const location: string = result.location;
        const description: string = result.description;
        const isDay: boolean = result.isDay;
        const conditionCode: number = result.conditionCode;
        const realConditionCode: string = result.realConditionCode;
        const sunrise: number = result.sunrise;
        const sunset: number = result.sunset;
        const timestamp: number = result.timestamp;
    });
