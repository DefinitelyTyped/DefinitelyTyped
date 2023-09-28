import AmbientWeatherApi, { Device, DeviceData } from "ambient-weather-api";

const api = new AmbientWeatherApi({
    apiKey: "Put your AW apiKey here",
    applicationKey: "Put your AW applicationKey here",
});

async function getDevicesAndData() {
    // list the user's devices
    const devices = await api.userDevices();

    devices.forEach(async device => {
        const mac: string = device.macAddress;
        const name: string = device.info.name;

        const data1: DeviceData[] = await api.deviceData(device.macAddress);
        data1.forEach(data => {
            const tempAtDate = `${data.date} - ${data.tempf} °F`;
        });

        const data2: DeviceData[] = await api.deviceData(device.macAddress, { limit: 5 });
        const data3: DeviceData[] = await api.deviceData(device.macAddress, { endDate: "2018-01-08T18:35:00.000Z" });
    });
}

function realtime() {
    // helper function
    function getName(device: Device) {
        return device.info.name;
    }

    const apiKey = "Put your AW apiKey here";
    const api = new AmbientWeatherApi({
        apiKey,
        applicationKey: "Put your AW applicationKey here",
    });

    api.connect();
    api.on("connect", () => undefined);

    api.on("subscribed", data => {
        const names: string[] = data.devices.map(device => device.info.name);
    });
    api.on("data", data => {
        const date: string = data.date;
        const temp: number | undefined = data.tempf;
    });
    api.subscribe(apiKey);
}
