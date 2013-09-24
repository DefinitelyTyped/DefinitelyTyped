interface Device {
    name: string;
    cordova: string;
    platform: string;
    uuid: string;
    version: string;
    model: string;
}

interface Navigator {
    device: Device;
}

declare var device: Device;