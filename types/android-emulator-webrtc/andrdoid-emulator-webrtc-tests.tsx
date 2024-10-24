import * as React from "react";
import { Emulator } from "android-emulator-webrtc/emulator";
import { useRef, useEffect } from "react";

export const EmulatorText = () => {
    const emulatorRef = useRef<Emulator>(null);

    useEffect(() => {
        emulatorRef.current?.sendKey("Power");
    }, []);

    return (
        <Emulator
            ref={emulatorRef}
            poll={false}
            view="webrtc"
            onError={console.error}
            onStateChange={console.log}
            uri="https://example.com"
        />
    );
}
