declare class AmbientWeatherApi {
    constructor(credentials: AmbientWeatherApi.Credentials);

    /** Get all weather devices. */
    userDevices(): Promise<AmbientWeatherApi.Device[]>;

    /** Get data for a single device. */
    deviceData(
        macAddress: string,
        options?: {
            endDate?: string | undefined;
            limit?: number | undefined;
        },
    ): Promise<AmbientWeatherApi.DeviceData[]>;

    /** Connect to the realtime API. */
    connect(): void;

    /** Disconect from the realtime API. */
    disconnect(): void;

    /** Subscribe to updates from your devices. */
    subscribe(apiKeyOrApiKeys: string | ReadonlyArray<string>): void;

    /** Unsubscribe from updates from your devices. */
    unsubscribe(apiKeyOrApiKeys: string | ReadonlyArray<string>): void;

    on(eventname: "connect", callback: () => void): void;
    on(eventname: "subscribed", callback: (data: { devices: AmbientWeatherApi.Device[] }) => void): void;
    on(
        eventname: "data",
        callback: (data: AmbientWeatherApi.DeviceData & { device: AmbientWeatherApi.Device }) => void,
    ): void;
}

declare namespace AmbientWeatherApi {
    interface Credentials {
        apiKey: string;
        applicationKey: string;
    }

    interface Device {
        macAddress: string;
        lastData: DeviceData;
        info: DeviceInfo;
    }

    interface DeviceInfo {
        name: string;
        coords: DeviceLocation;
    }

    interface DeviceLocation {
        geo: {
            type: "Point";
            coordinates: [number, number];
        };
        elevation: number;
        location: string;
        address: string;
        coords: GeoLocationCoordinate;
    }

    interface GeoLocationCoordinate {
        lat: number;
        lon: number;
    }

    // Docs pulled from: https://github.com/ambient-weather/api-docs/wiki/Device-Data-Specs
    interface DeviceData {
        /** instantaneous wind direction, 0-360º */
        winddir?: number | undefined;

        /** instantaneous wind speed, mph */
        windspeedmph?: number | undefined;

        /** max wind speed in the last 10 minutes, mph */
        windgustmph?: number | undefined;

        /** Maximum wind speed in last day, mph */
        maxdailygust?: number | undefined;

        /** Wind direction at which the wind gust occurred, 0-360º */
        windgustdir?: number | undefined;

        /** Average wind speed, 2 minute average, mph */
        windspdmph_avg2m?: number | undefined;

        /** Average wind direction, 2 minute average, mph */
        winddir_avg2m?: number | undefined;

        /** Average wind speed, 10 minute average, mph */
        windspdmph_avg10m?: number | undefined;

        /** Average wind direction, 10 minute average, 0-360º */
        winddir_avg10m?: number | undefined;

        /** Outdoor Humidity, 0-100% */
        humidity?: number | undefined;

        /** Humidity Sensor #1, 0-100% */
        humidity1?: number | undefined;

        /** Humidity Sensor #2, 0-100% */
        humidity2?: number | undefined;

        /** Humidity Sensor #3, 0-100% */
        humidity3?: number | undefined;

        /** Humidity Sensor #4, 0-100% */
        humidity4?: number | undefined;

        /** Humidity Sensor #5, 0-100% */
        humidity5?: number | undefined;

        /** Humidity Sensor #6, 0-100% */
        humidity6?: number | undefined;

        /** Humidity Sensor #7, 0-100% */
        humidity7?: number | undefined;

        /** Humidity Sensor #8, 0-100% */
        humidity8?: number | undefined;

        /** Humidity Sensor #9, 0-100% */
        humidity9?: number | undefined;

        /** Humidity Sensor #10, 0-100% */
        humidity10?: number | undefined;

        /** Indoor Humidity, 0-100% */
        humidityin?: number | undefined;

        /** Outdoor Temperature, ºF */
        tempf?: number | undefined;

        /** Temperature Sensor #1, ºF */
        temp1f?: number | undefined;

        /** Temperature Sensor #2, ºF */
        temp2f?: number | undefined;

        /** Temperature Sensor #3, ºF */
        temp3f?: number | undefined;

        /** Temperature Sensor #4, ºF */
        temp4f?: number | undefined;

        /** Temperature Sensor #5, ºF */
        temp5f?: number | undefined;

        /** Temperature Sensor #6, ºF */
        temp6f?: number | undefined;

        /** Temperature Sensor #7, ºF */
        temp7f?: number | undefined;

        /** Temperature Sensor #8, ºF */
        temp8f?: number | undefined;

        /** Temperature Sensor #9, ºF */
        temp9f?: number | undefined;

        /** Temperature Sensor #10, ºF */
        temp10f?: number | undefined;

        /** Soil Temperature Sensor #1, ºF */
        soiltemp1f?: number | undefined;

        /** Soil Temperature Sensor #2, ºF */
        soiltemp2f?: number | undefined;

        /** Soil Temperature Sensor #3, ºF */
        soiltemp3f?: number | undefined;

        /** Soil Temperature Sensor #4, ºF */
        soiltemp4f?: number | undefined;

        /** Soil Temperature Sensor #5, ºF */
        soiltemp5f?: number | undefined;

        /** Soil Temperature Sensor #6, ºF */
        soiltemp6f?: number | undefined;

        /** Soil Temperature Sensor #7, ºF */
        soiltemp7f?: number | undefined;

        /** Soil Temperature Sensor #8, ºF */
        soiltemp8f?: number | undefined;

        /** Soil Temperature Sensor #9, ºF */
        soiltemp9f?: number | undefined;

        /** Soil Temperature Sensor #10, ºF */
        soiltemp10f?: number | undefined;

        /** Soil Humidity Sensor #1, % */
        soilhum1?: number | undefined;

        /** Soil Humidity Sensor #2, % */
        soilhum2?: number | undefined;

        /** Soil Humidity Sensor #3, % */
        soilhum3?: number | undefined;

        /** Soil Humidity Sensor #4, % */
        soilhum4?: number | undefined;

        /** Soil Humidity Sensor #5, % */
        soilhum5?: number | undefined;

        /** Soil Humidity Sensor #6, % */
        soilhum6?: number | undefined;

        /** Soil Humidity Sensor #7, % */
        soilhum7?: number | undefined;

        /** Soil Humidity Sensor #8, % */
        soilhum8?: number | undefined;

        /** Soil Humidity Sensor #9, % */
        soilhum9?: number | undefined;

        /** Soil Humidity Sensor #10, % */
        soilhum10?: number | undefined;

        /** Indoor Temperature, ºF */
        tempinf?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        battout?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        battin?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt1?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt2?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt3?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt4?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt5?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt6?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt7?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt8?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt9?: number | undefined;

        /** OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt10?: number | undefined;

        /** PM2.5 Air Quality Sensor Battery indication, OK/Low indication, Int, 1=OK, 0=Low (Meteobridge Users 1=Low, 0=OK) */
        batt_25?: number | undefined;

        /** Hourly Rain Rate, in/hr */
        hourlyrainin?: number | undefined;

        /** Daily Rain, in */
        dailyrainin?: number | undefined;

        /** 24 Hour Rain, in */
        "24hourrainin"?: number | undefined;

        /** Weekly Rain, in */
        weeklyrainin?: number | undefined;

        /** Monthly Rain, in */
        monthlyrainin?: number | undefined;

        /** Yearly Rain, in */
        yearlyrainin?: number | undefined;

        /** Event Rain, in */
        eventrainin?: number | undefined;

        /** Total Rain, in (since last factory reset) */
        totalrainin?: number | undefined;

        /** Relative Pressure, inHg */
        baromrelin?: number | undefined;

        /** Absolute Pressure, inHg */
        baromabsin?: number | undefined;

        /** Ultra-Violet Radiation Index, integer on all devices EXCEPT WS-8478. */
        uv?: number | undefined;

        /** Solar Radiation, W/m^2 */
        solarradiation?: number | undefined;

        /** CO2 Meter, ppm */
        co2?: number | undefined;

        /** Relay 1, 0 or 1 */
        relay1?: number | undefined;

        /** Relay 2, 0 or 1 */
        relay2?: number | undefined;

        /** Relay 3, 0 or 1 */
        relay3?: number | undefined;

        /** Relay 4, 0 or 1 */
        relay4?: number | undefined;

        /** Relay 5, 0 or 1 */
        relay5?: number | undefined;

        /** Relay 6, 0 or 1 */
        relay6?: number | undefined;

        /** Relay 7, 0 or 1 */
        relay7?: number | undefined;

        /** Relay 8, 0 or 1 */
        relay8?: number | undefined;

        /** Relay 9, 0 or 1 */
        relay9?: number | undefined;

        /** Relay 10, 0 or 1 */
        relay10?: number | undefined;

        /** PM2.5 Air Quality, Float, µg/m^3 */
        pm25?: number | undefined;

        /** PM2.5 Air Quality 24 hour average, Float, µg/m^3 */
        pm25_24h?: number | undefined;

        /** PM2.5 Air Quality, Indoor, Float, µg/m^3 */
        pm25_in?: number | undefined;

        /** PM2.5 Air Quality 24 hour average, Indoor, Float, µg/m^3 */
        pm25_in_24h?: number | undefined;

        // No official documentation for this properties
        feelsLike?: number | undefined;
        dewPoint?: number | undefined;
        feelsLikein?: number | undefined;
        dewPointin?: number | undefined;
        batt_co2?: string | undefined;
        lastRain?: string | undefined;

        /** IANA Time Zone, String */
        tz: string;

        /** Date, int (milliseconds from 01-01-1970, rounded down to nearest minute on server) */
        dateutc: number;

        date: string;
    }
}

export = AmbientWeatherApi;
